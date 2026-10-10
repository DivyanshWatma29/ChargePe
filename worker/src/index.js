const ALLOWED_ORIGINS = new Set([
  "https://chargepe.me",
  "https://www.chargepe.me"
]);
const MAX_BODY_BYTES = 12000;
const MAX_QUERY_CHARS = 1200;

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.has(origin) ? origin : "https://chargepe.me";
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
  };
}
function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", ...corsHeaders(origin) }
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }
    if (!ALLOWED_ORIGINS.has(origin)) return json({ error: "Origin not allowed." }, 403, origin);
    if (new URL(request.url).pathname !== "/api/tara") return json({ error: "Not found." }, 404, origin);
    if (request.method !== "POST") return json({ error: "Use POST." }, 405, origin);
    if (!env.ANTHROPIC_API_KEY) return json({ error: "Claude is not configured on this server yet." }, 503, origin);

    const length = Number(request.headers.get("Content-Length") || "0");
    if (length > MAX_BODY_BYTES) return json({ error: "Request too large." }, 413, origin);
    let payload;
    try { payload = await request.json(); } catch { return json({ error: "Invalid JSON." }, 400, origin); }
    const query = typeof payload.query === "string" ? payload.query.trim().slice(0, MAX_QUERY_CHARS) : "";
    if (!query) return json({ error: "Enter a question." }, 400, origin);

    const rawStations = Array.isArray(payload.stations) ? payload.stations.slice(0, 12) : [];
    const stations = rawStations.map(s => ({
      id: String(s.id || "").slice(0, 32),
      name: String(s.name || "").slice(0, 120),
      city: String(s.city || "").slice(0, 60),
      connector: String(s.connector || "").slice(0, 40),
      powerKw: Number.isFinite(Number(s.power)) ? Number(s.power) : null,
      indicativeRateINRPerKWh: Number.isFinite(Number(s.price)) ? Number(s.price) : null,
      sampleStatus: String(s.status || "unknown").slice(0, 32),
      reportAge: String(s.reported || "unknown").slice(0, 60),
      source: "ChargePe prototype record; not independently verified"
    }));

    const system = [
      "You are TARA (Trip & Range Assistant), a careful EV-charging guide for an early-stage Indian prototype.",
      "Use only the supplied station records. They may be fictional sample data, not live listings.",
      "Never claim a charger is currently available, operational, verified, or its tariff is real unless the supplied fields explicitly establish that; these records do not establish those facts.",
      "Clearly call rates indicative/sample rates and status labels sample reports. If no suitable record exists, say so.",
      "Do not invent stations, prices, connector support, live GPS, range, route, payment, or charger-control capabilities.",
      "Give concise practical answers. For cost estimates, calculate only from supplied indicative rate and user-specified kWh, and state exclusions."
    ].join(" ");

    try {
      const upstream = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify({
          model: env.CLAUDE_MODEL || "claude-3-5-haiku-latest",
          max_tokens: 500,
          system,
          messages: [{ role: "user", content: "Question:\n" + query + "\n\nStation records (treat as unverified):\n" + JSON.stringify(stations) }]
        })
      });
      const data = await upstream.json().catch(() => ({}));
      if (!upstream.ok) {
        return json({ error: upstream.status === 429 ? "Claude rate limit reached. Try again later." : "Claude request failed. Check server configuration and API account." }, 502, origin);
      }
      const answer = Array.isArray(data.content) ? data.content.filter(x => x.type === "text").map(x => x.text).join("\n").slice(0, 7000) : "";
      if (!answer) return json({ error: "Claude returned no text." }, 502, origin);
      return json({ answer, mode: "claude", disclaimer: "Uses supplied prototype records; station status and tariffs are not live-verified." }, 200, origin);
    } catch {
      return json({ error: "Could not reach Claude. Try the local demo response." }, 502, origin);
    }
  }
};
