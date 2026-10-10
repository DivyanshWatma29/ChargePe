# ChargePe

**EV charging, with fewer question marks.**

ChargePe is an early-stage open-source product project exploring a reliability-first way for drivers in India to discover EV chargers, understand indicative costs, scan a station QR code, and eventually use a supported payment hand-off through one clear journey.

The product thesis is deliberately narrower than “put every charger on a map”: make it easier to judge what is known about a station, how recent that information is, what a session might cost, and what happens next. This thesis still needs validation with drivers, fleets, and charging operators.

> **Status:** Hosted interactive prototype. It contains illustrative sample stations, rates, locations and status reports. It does not connect to live EV charging networks, verify station availability, use live GPS, contact payment networks, start/stop a charger, move money, or call an external AI model.

## Product preview

**Prototype:** [chargepe.me](https://chargepe.me)  
**Repository:** [github.com/DivyanshWatma29/ChargePe](https://github.com/DivyanshWatma29/ChargePe)

The website currently includes:
- An interactive OpenStreetMap-based map with clearly labelled illustrative station markers.
- A searchable/filterable directory with connector, power, sample ₹/kWh, and report-age labels.
- A QR camera attempt where supported, plus station-code fallback.
- A cost estimate and simulated UPI hand-off preview; no bank app is opened and no payment is made.
- **TARA — Trip & Range Assistant**, a rule-based chat prototype that explains shortlist results from sample records.
- Future AI concepts: reliability confidence, cost explanation, range-aware trip planning, and bill anomaly flags.

## Initial product thesis

The broad feature set is not new by itself. Public product pages from ElectricPe and MG e-Hub describe multi-network discovery, availability information and payment flows; Statiq and Tata Power EZ Charge also provide charging discovery, session/payment features and related journey tools. Adding another map and scan button would not be enough.

ChargePe will test whether the following combination is useful and meaningfully differentiated:
1. **Evidence-first reliability:** show status provenance and age; distinguish live operator telemetry, a recent driver report, an old report, and unknown status rather than flattening them into one “available” badge.
2. **Cost clarity before charging:** provide estimates that explain the rate basis, then reconcile them with an operator-backed final session record when integrations exist.
3. **A consistent QR-to-payment journey:** aim for a supported payment-provider hand-off from a bank-linked UPI app, instead of requiring ChargePe to hold a stored-value balance. Cross-network payment is possible only where operator authorisation, payment-provider support and settlement arrangements allow it.
4. **Useful guidance, not an unexplained chatbot:** future TARA answers should cite data freshness, connector fit, tariff inputs and uncertainty; live model calls and trusted live data are not currently connected.
5. **Designed for validation across vehicle types:** test the need among car, two-wheeler, three-wheeler and fleet users before deciding which segment to serve first.

These are product hypotheses, not claims that every competitor lacks these features.

## Competitor scan

Sources below are public product pages or operator-published announcements. Network counts and capability claims are self-reported, may change, and have not been independently audited by this repository.

| Product | What its public pages describe | Product lesson for ChargePe |
|---|---|---|
| [ElectricPe](https://www.electricpe.com/app) | Multi-network station discovery, filters, live-availability claims, a unified wallet and charging payment. Its page advertises 25,000+ stations and 60+ networks. | Aggregation, a map and payment are already competitive territory; validate a sharper reliability/cost-transparency wedge. |
| [MG e-Hub](https://www.mgmotor.co.in/media-center/newsroom/e-hub-by-mg-becomes-indias-largest-unified-ev-charging-app) | Its 5 March 2026 announcement reported 22,500+ charging points and 40 participating charge point operators, plus trip planning, charger ratings and nearby amenities. | Trip planning and broad network coverage are not enough to establish differentiation. |
| [Statiq](https://www.statiq.in/ev-charging-app) | Charger discovery, status updates, starting sessions, payments, route-planning and other charging workflow features. | Reliability claims need a visible source and timestamp in the driver experience, not just a generic status label. |
| [Tata Power EZ Charge](https://www.tatapower.com/ezcharge) | Network discovery, connector/power filters, charger status labels and wider charging journey features. | Present compatibility, price and status in a consistent, comparable layout. |

### What still needs research

A public website scan is not user research and does not prove a market gap. Next validation should compare the actual flows in several apps, record where a user must switch apps or preload a wallet, inspect how status freshness is communicated, and interview EV drivers after real successful and failed sessions. The feature priority should follow that evidence.

## Current demo data and map

Every station shown on the website is fictional sample data for demonstrating the UX. Map pins are illustrative coordinates around the named cities; they are not verified real charging locations. Rates are also indicative demo values, not an operator tariff. “Recently reported working” refers only to a fabricated demo record, not a live charger check.

## Capabilities versus future services

| Area | Current prototype | Future direction |
|---|---|---|
| Map and directory | Sample records, filters and interactive map | Trusted station/operator data with source and update time |
| Nearby results | No live GPS or distance ranking | Permission-based location and genuine distance calculations |
| Status confidence | Illustrative report labels | Timestamped driver reports plus operator telemetry and verified session outcomes |
| QR identification | Recognises sample IDs | Validated station/connector lookup and operator authorisation |
| Session control | No real charger command | Operator-backed start/stop, session lifecycle and safety controls |
| Payment | Estimate and local UI simulation only | Supported payment-provider hand-off, transaction status and operator settlement |
| TARA | Deterministic rules over sample records | AI service grounded in current, sourced station/price/session data |
| Receipts/fleet | Not implemented | Session records, invoice export, reconciliation and exception flags |

## Technical notes

- Current app: static HTML, CSS and JavaScript; no package install required.
- Map: Leaflet with OpenStreetMap tiles. Map tiles require an internet connection. The station markers remain illustrative.
- QR camera: depends on secure HTTPS, user permission and browser support for BarcodeDetector. Enter the demo ID when camera scanning is unavailable.
- Chat: TARA is a local rules-based demonstration. It does not call a production AI model.
- Payment: the UI only simulates a future hand-off. It never asks for a UPI PIN, OTP, bank password or card details.

### Potential integration paths

OCPI is an established open interface for roaming between charge point operators and e-mobility service providers; see the [OCPI specification repository](https://github.com/ocpi/ocpi). Other Indian interoperability routes, operator APIs and payment options require their own access, partner support and technical validation. Mentioning a protocol is not evidence that ChargePe has integrated it.

## Run locally

1. Clone the repository:
   `git clone https://github.com/DivyanshWatma29/ChargePe.git`
2. Open index.html in a browser, or use a local static server.
3. An internet connection is needed for external map tiles. The demo directory and forms are otherwise static browser code.

## Validation and integration checklist

See [docs/VALIDATION.md](docs/VALIDATION.md) for the current Open Charge Map data/licensing checklist, safe Claude API integration plan, and a structured interview script for EV drivers in Indore. These are next steps; neither live OCM data nor a Claude API call is currently integrated.

## Roadmap

1. Conduct driver interviews and competitor-flow teardown; choose a first user segment.
2. Define reliability data provenance, confidence and report-expiry rules.
3. Validate cost-estimate and QR/payment-copy comprehension with users.
4. Specify backend station/operator interfaces and obtain data/API access.
5. Evaluate production AI only after trustworthy data is available.
6. Integrate payments and any real charger controls only with approved providers, operator authorisation, security review and reconciliation.

## Contributing

Product feedback and issues are welcome. Clearly distinguish verified behavior from assumptions; do not add real operator names, tariffs or availability claims unless supported by a trustworthy source and its update time.

Contact: **contact@chargepe.me**

## Team

ChargePe is being built by two co-founders: Divyansh Watma and his brother. Divyansh leads product direction and the prototype. The second co-founder's name and specific role will be added after confirmation.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for the full text. The license applies to this repository's project code; third-party services, libraries, map tiles and other external assets remain subject to their own terms.
