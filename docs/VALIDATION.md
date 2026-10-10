# ChargePe — validation and integration checklist

This document records the next steps that require real-world evidence or credentials. Do not describe these as completed until evidence has been collected.

## 1. No-key alternative implemented: OpenStreetMap + Overpass

The prototype now has a **Load real mapped locations** action in the station directory. Choose Indore, Bengaluru, Pune or Hyderabad, then load community-mapped charging-station records from the public Overpass API. This path does not require an OCM API key.

Important limitations:
- OpenStreetMap is community-maintained; coverage and tagging vary by location.
- The returned records are not operator-verified, and they do not establish current availability, tariff, connector compatibility or payment support.
- The page labels unknown tariff and live availability separately. Users should verify with the operator before travelling.
- Public Overpass instances are shared infrastructure, not a production SLA. The feature is user-triggered rather than continuously polling. For production scale, use a suitable data provider or host/cache a compliant service.
- Map tiles and OpenStreetMap data have separate usage/licensing requirements. Keep visible attribution and review the [OpenStreetMap copyright/licence](https://www.openstreetmap.org/copyright).

## 2. Optional Open Charge Map (OCM) data

Official references:
- API documentation: https://www.openchargemap.org/develop/api
- Terms and licensing: https://www.openchargemap.org/about/terms
- Developer overview: https://www.openchargemap.io/develop

What the documentation says:
- OCM offers a free API, but an API key is required. Register an application from an OCM account.
- The basic service is provided without a warranty or service-level agreement. Respect fair-use guidance; cache results and avoid duplicate/high-frequency requests.
- OCM data has mixed provenance and licensing. Each point of interest can have its own data provider and license. Only request `opendata=true` if the app needs records marked as open data, and still check the source/license metadata.
- Appropriate visible data-provider attribution is required. OCM does not guarantee data accuracy.

Implementation plan:
1. Register a ChargePe app with OCM and keep the key out of public frontend code if it is intended to be private.
2. First inspect a small India query and verify whether useful records exist for Indore and nearby areas.
3. Review each returned record's data provider, license, connector details, location and last update where available.
4. Add an attribution link and visible “data source / last updated” information.
5. Keep sample tariffs and live charging availability separate: OCM station listings do not automatically provide live charger status, current tariffs, operator authorization, or payment capability.
6. Only replace the corresponding fictional map markers after data coverage and terms are checked. Do not present an OCM location as currently working unless a trusted, recent source supports that claim.

## 3. Claude API integration

Status: not implemented in this static website.

Prerequisites:
- A Claude Console API key and confirmation of available credits/billing.
- A server-side endpoint or serverless function to hold the key. Never place the key in `index.html`, a public GitHub file, or browser JavaScript.
- A defined data payload containing only trusted station details and source timestamps.

Minimal first milestone:
- Send a user's question and a small list of station records to Claude from a server-side endpoint.
- Ask Claude to compare only supplied records, cite which record fields it used, and say when the data is missing or stale.
- Validate server input, limit request size, set timeouts/rate limits, and avoid logging secrets or unnecessary personal data.
- Display that availability and prices are only as current as the supplied source data.
- Keep payment and charger start/stop actions out of the first AI integration.

Cost note: API usage may incur charges. Verify current Console credits and pricing before making calls; a free Console account does not guarantee free API usage.

## 4. Driver interviews — 10 conversations in Indore

Recruit volunteers and ask for consent to record notes. Do not collect names, phone numbers, vehicle registration numbers or precise home/work addresses unless necessary and separately consented to.

Ask the same neutral questions:
1. When did you last use a public EV charger? What vehicle type were you charging?
2. How did you find the charger?
3. Before arriving, how did you know whether it was available and working?
4. Have you ever arrived and found it unavailable, broken or incompatible? What happened?
5. How did you learn the price before starting the session?
6. Did you need multiple apps, a wallet balance, or a particular payment app? Please describe the actual steps.
7. Have you had a failed payment or charging session? What happened next?
8. What information would help you decide whether to trust a charger listing?
9. Which charging apps do you currently use, and what is frustrating or useful about them?
10. If you could change one part of public charging, what would it be?

After each interview, record:
- Anonymous interview ID and date
- Vehicle category and broad usage context
- Direct quotes only with consent
- Observed current workflow
- Specific pain points and frequency
- Workarounds already used
- Whether the participant would try a prototype (not a promise of adoption)

Do not fabricate responses. Summarise themes only after completing interviews. A waitlist is a separate signal and should count only real, opt-in signups.

## 5. Founding team

The user has confirmed that ChargePe is being built by Divyansh Watma and his brother. The brother's name and role have not yet been supplied. Add those details only after confirmation.

## 6. Legal registration

ChargePe was described by its founder as not legally registered. No registration was performed by this project work. If the founders decide to formalise the business, compare current Indian incorporation/LLP requirements and costs with a qualified chartered accountant or company secretary. Do not claim registration or enter an incorporation date until it is true.

## Completion log

- [x] MIT license added to the repository.
- [x] README updated to mention the two co-founders without inventing the brother's name/title.
- [x] OCM API, licensing, attribution and fair-use requirements reviewed from official documentation.
- [x] Added user-triggered, no-key OpenStreetMap/Overpass lookup for four cities; results are clearly marked as community data, not live availability.
- [x] Interview script and evidence log template prepared.
- [ ] OCM API key registered.
- [ ] India/Indore OCM records checked and licensing reviewed record by record.
- [x] Community-mapped OSM records can be loaded and displayed as distinct map markers; not an operator feed.
- [ ] OCM/operator-backed station data and tariffs integrated.
- [ ] Claude API key/credits verified.
- [ ] Server-side Claude endpoint implemented and tested.
- [ ] Ten driver interviews completed and results documented.
- [ ] Brother's name and role confirmed.
- [ ] Founders decide whether and when to register the business.
