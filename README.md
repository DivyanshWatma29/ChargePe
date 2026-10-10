# ChargePe

**One charging experience across EV networks — starting with a prototype.**

ChargePe is a student-led project exploring a simpler way to discover EV charging stations, scan a station QR code, view charging details, and move through a consistent charging workflow across participating networks.

The long-term vision is cross-network EV charging in India. This repository starts with a transparent, no-cost prototype and does **not** claim to connect to live chargers, operator networks, UPI payments, or automatic refunds.

## Why ChargePe?

EV drivers may have to navigate different charging networks, apps, and payment experiences. ChargePe explores how a single interface could make discovery, charging-session information, reliability signals, and billing easier to understand.

The project plan prioritizes:
- QR-based station entry and a consistent charging flow.
- Clear charger details and reliability signals.
- A driver experience that can eventually span participating networks.
- Fleet-friendly session history and consolidated billing concepts.
- AI-assisted charger comparison and charging-cost insights.

These are project goals, not claims of existing integrations.

## Prototype roadmap

### Phase 1 — Public landing page
- Explain the problem, vision, and project status.
- Link to the source code and contact email.
- Work with GitHub Pages and the custom domain `chargepe.me`.

### Phase 2 — Interactive demo
- Sample charger directory with connector, operator, price, and reported-status fields.
- QR-code flow using demo station IDs.
- Simulated charging session with a timer and estimated cost.
- Session history and sample fleet summary.
- Clear demo labels wherever data or actions are simulated.

### Phase 3 — Reliability and AI experiments
- Capture user-submitted charger status reports in a demo dataset.
- Show freshness and confidence for status signals instead of claiming unknown chargers are operational.
- Add an AI assistant for charger comparison and estimated-cost explanations, using sample data first.

### Future work — subject to access and validation
- Integrations with charging operators and interoperable networks such as UBC/Beckn or OCPI.
- Real charger start/stop status and live availability.
- Payment-provider integration and operator settlement.
- Fleet invoicing and refund/dispute workflows.

These require third-party access, testing, and appropriate commercial and compliance review. They are not enabled by this prototype.

## Current status

**Stage: early prototype / in development.**

No live charging, payment collection, stored-value wallet, or operator integration is provided by this repository at this stage. Do not use the prototype to make real charging or payment decisions.

## Intended initial stack

- Front end: responsive HTML, CSS, and JavaScript for the first prototype.
- Hosting: GitHub Pages.
- Maps and station data: sample data initially; open data sources will be assessed before use.
- AI: optional and introduced only after the core demo works.

The stack may change as the prototype develops.

## Run locally

This first landing page uses static files and requires no package installation.

1. Clone this repository.
2. Open `index.html` in a browser, or run any static local server.
3. GitHub Pages deployment instructions will be added after the site files are committed.

## Contributing and feedback

Ideas, bug reports, and feedback are welcome. Contact: **contact@chargepe.me**.

## Project principle

**Be explicit about what is real, what is simulated, and what still requires operator integration.** ChargePe aims to make EV charging simpler without overstating current network coverage or payment capabilities.
