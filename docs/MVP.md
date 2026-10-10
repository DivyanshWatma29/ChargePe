# ChargePe MVP scope

## Product intention

ChargePe explores a single, simpler driver experience for discovering EV charging points, scanning a station QR code, understanding cost and status signals, and eventually starting a session and paying across participating operators in India.

## Current browser prototype

Included:
- Responsive landing page.
- Search/filter over illustrative charger cards.
- Camera QR scan attempt where supported by the browser, with manual demo-code fallback.
- Station resolution for sample IDs only.
- Simulated energy estimate, payment review, and UPI-style demo confirmation.
- Demo history stored in the browser session.
- Natural-language charger finder that ranks sample results by price or power and filters by demo city, sample operator, connector, and reported status.
- Rules-based sample insights for cost and reliability; no external AI API is called.

Not included:
- Live station discovery, GPS-ranked nearby results, or charger telemetry.
- QR scanning through a camera.
- Starting/stopping real charging sessions.
- UPI collection, wallet, operator settlement, or refunds.
- Production AI model calls.
- User accounts, backend, or durable session storage.

## Principles

1. Label sample data and simulated flows.
2. Do not assert live charger availability without recent reliable source data.
3. Do not imply payment occurred when it did not.
4. Do not store customer funds in this MVP.
5. Validate the driver journey with real people before committing to integrations.

## Future integration areas

- UBC/Beckn, if access and participation allow.
- OCPI or direct CPO APIs for non-participating operators.
- Licensed payment provider integration.
- Fleet console with spend rules, session reconciliation, and invoice exports.
- Reliability scoring based on timestamped sessions and reports.

All future areas require partner access and technical, legal, security, and operational review before production use.
