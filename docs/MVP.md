# ChargePe — MVP scope

## Product intention
ChargePe is exploring a reliability-first EV charging journey for India: compare sample station details, understand status-report age and indicative tariff, identify a station via QR/code, estimate a session, and eventually use an operator-authorised payment hand-off.

The core product hypothesis is that broad charger discovery alone is not enough. The prototype will help test whether clear status provenance, cost expectations and a consistent QR-to-payment journey build driver trust. This has not yet been proven by user research.

## Current browser prototype
- Responsive landing page using the ChargePe name and SVG C-logo.
- Leaflet/OpenStreetMap interactive map with six sample markers around Indore, Bengaluru, Pune and Hyderabad.
- Filterable/searchable station directory with demo operator, connector, power, indicative ₹/kWh, sample status and report age.
- QR camera scan attempt in supported secure browsers, plus manual sample station-code fallback.
- Station details and energy-cost estimate based on the sample tariff.
- Payment review with selectable demo UPI app preference and a simulated hand-off message.
- TARA — Trip & Range Assistant, a local rule-based chat demo over sample records.
- Product concept section and phased roadmap, with explicit labels for sample data and non-live transaction flows.

## Sample data policy
All six station names, operator names, prices, report times, statuses and map coordinates are illustrative. They are not verified real-world stations or tariffs. The OpenStreetMap basemap is real; ChargePe's markers are not live charger data. Never present the sample status as actual availability.

## Not included
- Live charger directory, partner station feed, accurate charger coordinates or telemetry.
- Live GPS-based nearby ranking.
- Confirmed network availability or connector health.
- Arbitrary external QR-code resolution or production session authorisation.
- Actual start/stop commands to chargers.
- UPI intent/payment collection, bank connection, wallet, operator settlement, final tax calculation or refunds.
- User accounts, server-side records, durable session history or fleet dashboard.
- External/production AI model calls. TARA uses deterministic matching over fixed sample records.
- Reliability score based on measured data; only illustrative status labels exist in this prototype.

## Payment and QR safety rules
1. The UI must not request or store a UPI PIN, OTP, bank password, card data or other payment credentials.
2. A successful demo action must explicitly say no money moved and no charging session started.
3. A live flow needs station identification, operator authorisation, a supported payment provider, transaction handling, operator settlement and a clear failure/reconciliation path.
4. Do not imply any supported bank or UPI app can start a charge at any station unless the relevant operator and payment flow actually support it.
5. Do not advertise automatic refunds; production refund handling depends on provider/operator processes.

## Product differentiation hypothesis
Public pages for ElectricPe, MG e-Hub, Statiq and Tata Power EZ Charge already describe combinations of multi-network discovery, charger status, route/session features and payment. Therefore a generic “all chargers in one app” claim is insufficient. The product thesis to validate is:
- Status labels with provenance, timestamp and confidence instead of a context-free available/unavailable badge.
- Transparent tariff basis and pre-charge cost estimates.
- Consistent QR-to-payment presentation with a supported payment-provider hand-off rather than requiring ChargePe itself to hold customer funds.
- TARA responses that explain which data was used, how recent it is, and what is unknown.
- Design validation across car, 2W, 3W and fleet users before selecting a target segment.

These points are hypotheses. Do not claim a competitor lacks a feature without comparing the current implementation.

## AI feature ideas
Current: TARA rule-based demo answers from sample data; no model is called.

Potential future scope once trusted data exists:
- Reliability confidence using data-source type, report age, operator telemetry and verified session outcomes.
- Cost explanation grounded in the chosen station's tariff and any disclosed fees.
- Range-aware trip planning using vehicle profile, remaining range and verified charging stops.
- Invoice/session anomaly alerts based on measured kWh, timestamped transactions, tariff rules and receipts.

Any AI output that may affect travel or payment decisions must show its inputs and uncertainty. It must not fabricate real-time availability, tariff or safety guarantees.

## Integration direction
Potential work areas include OCPI or direct charge point operator APIs for station data and sessions, relevant Indian interoperability initiatives where accessible, and authorised payment-provider integration. These require technical evaluation, partner/API access, security/privacy review, transaction reconciliation and user testing. A protocol mention is not an integration.

## Validation milestones
1. Interview EV drivers and fleet managers about failed sessions, price confusion, app switching, wallet requirements and trust in status reports.
2. Compare competitor app flows and capture concrete friction with screenshots, steps and timestamps.
3. Define station source, report age and status-confidence rules before building a reliability score.
4. Test the station list, cost estimate, QR-copy and payment-simulation comprehension with users.
5. Choose one target segment and one measured problem before starting backend/operator integration work.

## Release criteria before production claims
- Use trustworthy data sources and display their freshness.
- Test mobile layout, browser compatibility and accessible keyboard states.
- Add a privacy policy and data-retention approach before collecting user data.
- Use secure backend design and credentials management for integrations.
- Validate station QR resolution and operator permissions.
- Use approved payment-provider flows and reconcile payment status with session records.
- Conduct security, legal and operational review before allowing real transactions or charger commands.
