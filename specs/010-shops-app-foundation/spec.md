# Feature Specification: Shops App Foundation

**Feature Branch**: `010-shops-app-foundation`
**Created**: 2026-05-13
**Status**: Draft
**Scope**: `apps/shops-app` only — UI shell only; no backend, no API calls, no auth logic, no payment logic, no real inventory. Core-platform and landing are out of scope.

---

## User Scenarios & Testing

### User Story 1 — User Lands on Shops and Is Directed to Onboarding (Priority: P1)

A user who navigates to the Shops app root (`/`) is automatically directed to the
onboarding flow. There is no blank screen or Next.js placeholder — the entry point
clearly belongs to NexoraXS Shops.

**Why this priority**: The root route is the first thing any user sees. A broken or
placeholder entry destroys trust before the product has had a chance to show its value.

**Independent Test**: Open the Shops app root URL. The browser redirects to
`/onboarding` without a visible intermediate state. The onboarding page carries
NexoraXS Shops branding and is not the default Next.js scaffold.

**Acceptance Scenarios**:

1. **Given** a user opens the Shops app root (`/`), **When** the page loads, **Then**
   they are immediately redirected to `/onboarding` — no content from the root itself
   is visible.

2. **Given** a user navigates directly to `/onboarding`, **When** the page loads,
   **Then** the page title and header identify this as NexoraXS Shops.

---

### User Story 2 — User Completes Onboarding by Selecting a Mode (Priority: P1)

A user on `/onboarding` sees three clearly labelled shop modes — **Business
Management**, **Online Store**, and **Both** — with a plain-language explanation of
what each mode covers. After selecting a mode and confirming, the user lands on the
Shops dashboard.

**Why this priority**: Mode selection is the foundational decision that shapes the
user's experience of the product. Without it, no meaningful dashboard can be shown.
This is the first real user action in the app.

**Independent Test**: Open `/onboarding`. Three mode cards are visible, each with a
title and a one-sentence description. Click one card to select it — it shows a
selected state. Click the confirm button — the browser navigates to `/dashboard`.
The dashboard reflects the selected mode in its header or status area.

**Acceptance Scenarios**:

1. **Given** a user opens `/onboarding`, **When** the page renders, **Then** three
   mode options are visible: "Business Management", "Online Store", and "Both", each
   with a short description.

2. **Given** a user clicks a mode card, **When** the card is selected, **Then** it
   shows a visible selected/active state distinguishing it from the unselected options.

3. **Given** a user has selected a mode, **When** they click the confirm button,
   **Then** the browser navigates to `/dashboard`.

4. **Given** no mode is selected, **When** the user attempts to click confirm, **Then**
   the action is blocked — the confirm button is disabled or shows a validation prompt.

5. **Given** a user navigates directly to `/dashboard` without completing onboarding,
   **When** the dashboard loads, **Then** it still renders without errors — onboarding
   is not a hard gate in this foundation phase.

---

### User Story 3 — User Sees the Shops Dashboard with Mode Context (Priority: P1)

A user on `/dashboard` sees the Shops app sidebar, topbar, and a dashboard body that
shows their selected mode, a status indicator, and suggested next steps. There are no
fake product or order tables — the dashboard is a status and orientation screen.

**Why this priority**: The dashboard is the home base of the app. Even in foundation
form, it must orient the user within their chosen mode and give them a clear next step.

**Independent Test**: Navigate to `/dashboard`. The sidebar shows six nav items:
Dashboard, Products, Orders, Customers, Reports, Settings. The topbar shows the app
name "NexoraXS Shops" and a workspace or user indicator. The main body shows the
active mode name and a "getting started" area — no empty tables.

**Acceptance Scenarios**:

1. **Given** a user is on `/dashboard`, **When** the layout renders, **Then** a
   sidebar is visible on desktop containing: Dashboard, Products, Orders, Customers,
   Reports, Settings navigation links.

2. **Given** a user is on `/dashboard`, **When** the topbar renders, **Then** it
   displays the NexoraXS Shops app identity and a user or workspace indicator.

3. **Given** a user arrived via onboarding with a mode selected, **When** they view
   the dashboard body, **Then** the selected mode name is displayed prominently.

4. **Given** no mode was selected (direct navigation), **When** the dashboard loads,
   **Then** it renders without errors — showing a neutral state or a prompt to
   complete onboarding.

5. **Given** a user is on mobile, **When** they view `/dashboard`, **Then** the
   sidebar is hidden and accessible via a hamburger toggle.

---

### User Story 4 — User Can Navigate to All Section Placeholder Pages (Priority: P2)

A user clicking any sidebar link from the dashboard reaches a page that is clearly
labelled, visually consistent with the rest of the app, and shows a placeholder
message — no broken routes, no blank screens, no 404 errors.

**Why this priority**: Even placeholder pages must work. Broken links in a sidebar
undermine the shell and make the app feel unfinished in an unacceptable way even at
the foundation stage.

**Independent Test**: From `/dashboard`, click Products, Orders, Customers, Reports,
and Settings in turn. Each page loads, shows the correct section title, and displays
a placeholder message. The sidebar remains visible and the active link is highlighted
on each page. Navigate back and forward — active states follow the URL.

**Acceptance Scenarios**:

1. **Given** a user clicks "Products" in the sidebar, **When** the page loads, **Then**
   `/products` renders with a "Products" heading and a placeholder body.

2. **Given** a user clicks "Orders" in the sidebar, **When** the page loads, **Then**
   `/orders` renders with an "Orders" heading and a placeholder body.

3. **Given** a user clicks "Customers" in the sidebar, **When** the page loads,
   **Then** `/customers` renders with a "Customers" heading and a placeholder body.

4. **Given** a user clicks "Reports" in the sidebar, **When** the page loads, **Then**
   `/reports` renders with a "Reports" heading and a placeholder body.

5. **Given** a user clicks "Settings" in the sidebar, **When** the page loads, **Then**
   `/settings` renders with a "Settings" heading and a placeholder body.

6. **Given** a user is on any section page, **When** they look at the sidebar, **Then**
   the currently active link is visually distinguished from the others.

---

### Edge Cases

- What happens if a user bookmarks `/dashboard` and opens it directly without having
  completed onboarding — the dashboard must render without errors (US3 scenario 4).
- What happens if a user resizes from mobile to desktop mid-session — the sidebar
  should switch between drawer and pinned state without a page reload.
- What happens if a user navigates directly to `/products` (or any section page)
  without going through the sidebar — the page must still render correctly.
- What happens if the user presses the browser back button after completing onboarding
  — they return to `/onboarding` and can re-select a mode.

---

## Requirements

### Functional Requirements

- **FR-001**: The Shops app root (`/`) MUST redirect to `/onboarding` immediately on
  load — no intermediate content is displayed.

- **FR-002**: The `/onboarding` page MUST display exactly three mode options:
  "Business Management", "Online Store", and "Both". Each option MUST include a title
  and a one-sentence description explaining its purpose.

- **FR-003**: The user MUST be able to select exactly one mode at a time on the
  onboarding page. The selected mode MUST display a visible active/selected state.

- **FR-004**: The confirm action on `/onboarding` MUST be disabled or non-functional
  when no mode is selected, and MUST navigate to `/dashboard` when a mode is selected.

- **FR-005**: The selected mode MUST be persisted for the duration of the browser
  session so that the dashboard can read and display it.

- **FR-006**: The `/dashboard` page MUST display the Shops app sidebar with six
  navigation links in order: Dashboard, Products, Orders, Customers, Reports, Settings.

- **FR-007**: The `/dashboard` topbar MUST display the NexoraXS Shops app identity
  and a user or workspace indicator.

- **FR-008**: The `/dashboard` body MUST display the user's selected mode and a
  "next steps" or "getting started" placeholder section. It MUST NOT contain fake
  product tables, order lists, or other fabricated data.

- **FR-009**: Each section page — `/products`, `/orders`, `/customers`, `/reports`,
  `/settings` — MUST render with the correct section title and a placeholder body.
  None of these pages may show a 404 or blank screen.

- **FR-010**: The sidebar MUST highlight the active navigation link matching the
  current route on every page within the app.

- **FR-011**: On viewports narrower than 768 px, the sidebar MUST be hidden by default
  and accessible via a hamburger toggle button. Tapping a sidebar link MUST close the
  sidebar automatically.

- **FR-012**: The Shops app visual style MUST follow the NexoraXS dark SaaS aesthetic
  (dark background, white typography, accent gradients) consistent with core-platform,
  but implemented independently within `apps/shops-app`.

- **FR-013**: No component, style, or business logic MAY be imported from
  `apps/core-platform`. The Shops app owns its own layout, sidebar, topbar, and
  shared UI primitives.

---

## Success Criteria

### Measurable Outcomes

- **SC-001**: A user navigating to the Shops app root is on `/onboarding` within one
  page load — zero intermediate screens visible.

- **SC-002**: 100% of sidebar navigation links resolve to a rendered page — zero 404s,
  zero blank screens across all six routes.

- **SC-003**: A reviewer completing the onboarding flow (select mode → confirm) reaches
  `/dashboard` in a single click, with the selected mode name visible on screen.

- **SC-004**: All routes (`/dashboard`, `/products`, `/orders`, `/customers`,
  `/reports`, `/settings`) render without console errors at 375 px, 768 px, and
  1280 px viewport widths.

- **SC-005**: The active sidebar link correctly reflects the current route on 100% of
  navigations, including browser back/forward.

- **SC-006**: A first-time viewer can identify the product name "NexoraXS Shops" and
  the user's selected mode within 5 seconds of landing on `/dashboard`.

---

## Assumptions

- The Shops app is a separate Next.js application at `apps/shops-app`. It exists as a
  bare scaffold and will be built up in this feature.
- Mode selection is stored in client-side session state (e.g., React state or
  `sessionStorage`) for this foundation phase — no backend persistence is required.
- The onboarding flow is not a hard access gate in this phase; users who navigate
  directly to `/dashboard` must still see a working page.
- The Shops app implements its own sidebar, topbar, and UI primitives that visually
  match the NexoraXS dark aesthetic but are not shared with or imported from
  `apps/core-platform`.
- No new npm packages are introduced. All UI is built with packages already present
  in the Shops app scaffold (Next.js, React, TypeScript, TailwindCSS).
- The six section pages (Products, Orders, Customers, Reports, Settings) are
  placeholder stubs — no data tables, no forms, no real commerce logic.
- The three onboarding modes are defined as:
  - **Business Management**: Manage internal operations — inventory, staff, and
    reporting for a physical or hybrid business.
  - **Online Store**: Run a customer-facing storefront — product listings, cart,
    and orders for e-commerce.
  - **Both**: Access all Business Management and Online Store features in one workspace.
- Mobile support targets viewports at 375 px and above.
- No authentication changes are made — the app renders without a login gate for
  this foundation phase.
