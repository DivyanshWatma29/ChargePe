# ChargePe

**One interface for EV charging discovery, station QR flows, and charging insights across participating networks.**

ChargePe is an open-source project building toward a simpler EV charging experience in India. The goal is to let drivers discover compatible chargers, scan the QR code installed at a station, review session details, and eventually pay through supported operator integrations—all through one consistent interface.

The project also explores charger-reliability signals, natural-language station discovery, and fleet-friendly charging records.

> **Project status:** Early-stage prototype. The current hosted demo uses sample data and simulated session/payment flows. It is not connected to live charging networks, real-time charger telemetry, GPS-based station ranking, UPI payments, or production AI APIs.

## Product direction

- **Unified discovery:** Search for chargers by location, operator, connector, charging power, and indicative cost.
- **Station QR workflow:** Scan a QR code at a charger to identify its station and connector.
- **Natural-language search:** Ask for the cheapest nearby charger, a high-power CCS2 station, or chargers from a named operator.
- **Reliability signals:** Make status freshness and uncertainty visible rather than treating stale reports as proof that a charger works.
- **Charging records:** Explore session history and consolidated fleet reporting.
- **AI-assisted guidance:** Explain comparisons and estimates using available, traceable data.

## Hosted prototype

The public landing page is intended to be hosted at **[chargepe.me](https://chargepe.me)** through GitHub Pages.

The prototype currently demonstrates:
- A sample charger directory and filters.
- Rule-based natural-language query matching over sample records.
- A selected demo city for “near me” queries.
- Station-code / QR workflow for sample IDs.
- Estimated session cost and a simulated UPI-style confirmation.
- Sample-data explanations for charger reliability and charging costs.

All sample prices, locations, operators, status reports, and payment confirmations are illustrative. No money is transferred and no charger is started.

## Architecture and integration direction

The first version is a static HTML, CSS, and JavaScript application. The longer-term architecture may add a backend, operator adapters, trusted station data, location services, payment-provider flows, and an AI service.

Potential interoperability paths include **UBC/Beckn** and **OCPI**, subject to operator participation, API access, and technical validation. These are exploration targets, not current integrations.

### Current capabilities vs. future services

| Capability | Current prototype | Future direction |
|---|---|---|
| Charger search | Sample data and rule-based matching | Trusted multi-network station feeds |
| Nearby search | Selected demo city | User-authorized location and distance ranking |
| QR identification | Sample station IDs | Operator-backed station/connector resolution |
| Charging session | Simulated flow | Authorized start/stop via operator integration |
| Payment | Simulated confirmation only | Supported payment provider and operator settlement |
| AI guidance | No external model call | AI grounded in current, sourced station data |
| Fleet billing | Concept / sample UI direction | Reconciled operator sessions and invoices |

## Local development

No package installation is required for the current static prototype.

1. Clone the repository:
   `git clone https://github.com/DivyanshWatma29/ChargePe.git`
2. Open `index.html` in a browser, or serve the folder with a local static server.
3. Edit the HTML, CSS, and JavaScript, then commit your changes.

## Roadmap

1. Improve and test the driver journey with EV users.
2. Validate the station data model and reliability-report freshness.
3. Add location-aware discovery using a suitable data source.
4. Design backend interfaces for station/operator adapters.
5. Evaluate AI integration and supported payment flows only when data access and requirements are clear.

## Contributing

Issues, product feedback, and pull requests are welcome. Please distinguish verified behavior from assumptions and clearly label any sample data or simulated integrations.

Contact: **contact@chargepe.me**

## License

A license has not yet been selected. Until a license is added, do not assume that the repository is available for unrestricted reuse.
