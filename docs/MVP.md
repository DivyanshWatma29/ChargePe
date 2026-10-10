# ChargePe MVP scope

## Product intention

ChargePe explores a single, simpler driver experience for discovering EV charging points, scanning a station QR code, understanding cost and status signals, and eventually starting a session and paying across participating operators in India.

## Current browser prototype

Included:
- Responsive landing page.
- Search/filter over illustrative charger cards.
- QR-like station-selection flow using demo station IDs.
- User-entered energy estimate with arithmetic estimate.
- Demo history stored in the browser session.
- Rules-based AI-style sample insights for cost, reliability, and fleet spending.

Not included:
- Live station discovery or charger telemetry.
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
