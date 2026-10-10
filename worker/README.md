# TARA Claude Worker (optional serverless backend)

This folder contains the server-side Claude API integration. The API key is read only from the Cloudflare Worker secret `ANTHROPIC_API_KEY`; it must never be placed in `index.html`, frontend configuration, or Git.

## Deploy

1. Create a Cloudflare Worker named `chargepe-tara` (or use the Wrangler config in this folder).
2. Deploy from this directory using Wrangler:
   ```sh
   npx wrangler deploy
   npx wrangler secret put ANTHROPIC_API_KEY
   ```
   Paste the key only into the secure CLI prompt. Never commit it.
3. Check the deployed Worker URL and test `/api/tara` with the website origin.
4. In `index.html`, set `TARA_API_URL` to the deployed URL ending in `/api/tara`, then commit the frontend change.
5. Test both a normal query and an invalid/oversized request. Check Worker logs for errors, but never log the key or unnecessary user text.

Cloudflare Workers has a free tier with usage limits, but Anthropic API calls can incur charges. Verify Claude Console credits/billing before enabling the endpoint. The backend cannot make inference free merely because the Worker is free.

## Security and limits

- Only permits browser requests from `https://chargepe.me` and `https://www.chargepe.me`.
- Caps the query length and request size, sends at most 12 sanitised station records, and returns concise errors.
- Do not treat CORS as authentication or abuse protection. Before public production use, add suitable rate limiting and monitoring.
- The model receives only the question and a small subset of station fields. Do not send personal data.
- The current records are demo/sample records. The system prompt explicitly forbids presenting their tariffs or status as live-verified.
- Claude model availability and pricing can change; confirm the selected model exists and is enabled for the account before enabling the frontend.
