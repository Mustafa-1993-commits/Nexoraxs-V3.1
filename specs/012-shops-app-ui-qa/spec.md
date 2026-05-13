# Feature Specification: Shops App UI QA

**Feature Branch**: `012-shops-app-ui-qa`
**Created**: 2026-05-13
**Status**: Draft
**Scope**: `apps/shops-app` only — QA and polish after feature 011. No new features, no new components, no new routes. All changes are minimal fixes for issues found during review.

**Depends on**: `011-shops-app-ui-polish` (merged)

---

## User Scenarios & Testing

### User Story 1 — Entry Flow Is Correct and Unbroken (Priority: P1)

A user navigating to the Shops app root is immediately redirected to `/onboarding`
with no intermediate screen. From `/onboarding` they can select a mode, confirm,
and reach `/dashboard`. This flow has no dead ends, no blank screens, and no
broken navigation.

**Why this priority**: The entry flow is the first thing every user experiences.
Any broken step here makes the app feel non-functional.

**Independent Test**: Open `/`. URL changes to `/onboarding` without visible flash.
Select "Online Store". Click "Continue →" — URL becomes `/dashboard`. Dashboard
renders with mode name visible.

**Acceptance Scenarios**:

1. **Given** a user opens `/`, **When** the page loads, **Then** the browser
   immediately navigates to `/onboarding` — no intermediate content visible.

2. **Given** a user on `/onboarding` selects a mode, **When** they click the
   confirm button, **Then** the browser navigates to `/dashboard` and the selected
   mode name is visible on screen.

3. **Given** a user navigates directly to `/dashboard` without completing onboarding,
   **When** the dashboard loads, **Then** it renders without errors — showing a
   neutral fallback state.

---

### User Story 2 — Sidebar Navigation Is Correct on All Routes (Priority: P1)

A user navigating between all six sidebar routes sees exactly one active nav link
at all times — the one matching the current URL. The active state updates correctly
on browser back/forward navigation. No link is highlighted when it should not be.

**Why this priority**: Broken active states make navigation feel unreliable and
undermine user orientation within the product.

**Independent Test**: Visit `/dashboard`, `/products`, `/orders`, `/customers`,
`/reports`, `/settings` in sequence. On each page exactly one sidebar link is
highlighted. Use browser back — the active state follows the URL.

**Acceptance Scenarios**:

1. **Given** a user is on `/dashboard`, **When** they view the sidebar, **Then**
   only "Dashboard" is highlighted.

2. **Given** a user navigates to each of the five section pages in turn, **When**
   each page loads, **Then** the sidebar highlights only the matching link.

3. **Given** a user uses browser back/forward, **When** the URL changes, **Then**
   the sidebar active state updates to match the current route.

---

### User Story 3 — Mobile Sidebar Is Polished and Functional (Priority: P1)

A user on a mobile viewport (375 px wide) can open the sidebar via the hamburger
button, navigate to any section (sidebar auto-closes), and close the sidebar by
tapping the backdrop. The topbar does not overflow horizontally at any mobile
viewport width.

**Why this priority**: Mobile usability is a baseline quality bar. A non-functional
mobile sidebar means the app is unusable on phones.

**Independent Test**: Set viewport to 375 px. Hamburger is visible. Tap it — sidebar
slides in, backdrop appears. Tap a nav link — sidebar closes, correct page loads.
Tap backdrop — sidebar closes without navigating. Topbar shows no horizontal
scrollbar.

**Acceptance Scenarios**:

1. **Given** a user is at 375 px viewport, **When** they view any Shops page,
   **Then** the hamburger button is visible and the sidebar is hidden.

2. **Given** the user taps the hamburger, **When** the sidebar opens, **Then** a
   dark backdrop covers the content and the sidebar slides in from the left.

3. **Given** the sidebar is open and the user taps a nav link, **When** the new
   page loads, **Then** the sidebar is closed.

4. **Given** the sidebar is open, **When** the user taps the backdrop, **Then**
   the sidebar closes without any navigation.

---

### User Story 4 — Dashboard Layout Does Not Overflow on Small Screens (Priority: P2)

A user on a narrow viewport (375 px–768 px) can scroll through the full dashboard
content without encountering horizontal overflow, clipped cards, or unreachable
buttons.

**Why this priority**: Layout overflow is a regression that blocks content and
breaks the mobile experience silently.

**Independent Test**: Open `/dashboard` at 375 px. Scroll through all sections
(stat cards, quick actions, orders table, low stock panel, top products, chart).
No horizontal scrollbar on the page. Orders table may scroll horizontally within
its container but the outer page must not scroll horizontally.

**Acceptance Scenarios**:

1. **Given** a user views `/dashboard` at 375 px, **When** they scroll the page,
   **Then** no horizontal scrollbar appears on the document.

2. **Given** a user views the stat card grid, **When** rendered at 375 px, **Then**
   cards stack to a single column with no overflow.

3. **Given** a user views the orders table at 375 px, **When** the table renders,
   **Then** the table scrolls horizontally within its card container — not the
   full page.

---

### User Story 5 — Mock Data Is Clearly Labelled and No "Live Data" Claims Exist (Priority: P2)

A user reading any part of the Shops app cannot find text claiming real or live
data. Every section displaying mock data shows a visible label (chip or badge)
identifying it as mock data. No external links (to third-party platforms) are
present.

**Why this priority**: Misleading "live data" claims or working external links in
a mock UI undermine trust and suggest the product is further along than it is.

**Independent Test**: Scan `/dashboard` for any instance of "live data", "real-time",
or "live". Open browser DevTools Network tab — no external HTTP calls are made on
page load or on button clicks. Right-click any link — confirm all external-looking
`href` values are `"#"`.

**Acceptance Scenarios**:

1. **Given** a user reads the dashboard header sub-label, **When** they look for
   "live data", **Then** the text reads "mock data" instead.

2. **Given** a user clicks any action button (Export, New product, quick actions),
   **When** the click is processed, **Then** nothing navigates or makes a network
   request — all are visual only.

3. **Given** a user inspects any link in the dashboard, **When** they find links
   labelled "Platform", "View all", or similar, **Then** all such links use `href="#"`.

---

### Edge Cases

- What happens if the user's viewport is resized from mobile to desktop mid-session —
  the sidebar should transition from drawer to pinned without requiring a reload.
- What happens on `/onboarding` if the user presses back after reaching `/dashboard` —
  they should return to `/onboarding` and see their previously selected mode
  un-selected (mode state is session-only, not locked).
- What happens if a user directly navigates to `/products` without having visited
  `/dashboard` first — the page must render with the shared layout, no layout errors.
- What happens on the orders table at a viewport between 375 px and 768 px — columns
  that are hidden on mobile (`hidden sm:table-cell`) must not leave empty columns.

---

## Requirements

### Functional Requirements

- **FR-001**: The `/` route MUST redirect to `/onboarding` with no visible
  intermediate content.

- **FR-002**: The sidebar active link MUST exactly match the current URL on every
  route across all six section pages.

- **FR-003**: The mobile sidebar MUST open via the hamburger button, close via the
  backdrop tap, and auto-close when a nav link is tapped — at viewports ≤ 768 px.

- **FR-004**: The topbar MUST NOT produce horizontal overflow at 375 px viewport
  width.

- **FR-005**: The `/dashboard` page MUST NOT produce document-level horizontal
  overflow at 375 px. The orders table MAY scroll horizontally within its own
  container.

- **FR-006**: No page in the app MUST contain the text "live data" or "real-time"
  in any visible copy.

- **FR-007**: All links that are not internal Next.js routes MUST use `href="#"`.

- **FR-008**: All interactive elements that have no real action (buttons, POS card,
  quick actions, "View all" links) MUST be visually identifiable as non-functional
  — they MUST NOT trigger navigation, network requests, or errors when clicked.

- **FR-009**: All five placeholder pages (Products, Orders, Customers, Reports,
  Settings) MUST visually match each other — same chip + h1 + PlaceholderPage
  card structure.

- **FR-010**: `pnpm --filter shops-app build` MUST exit with code 0 after all QA
  fixes are applied.

---

## Success Criteria

### Measurable Outcomes

- **SC-001**: A manual walkthrough of all 8 routes at 375 px, 768 px, and 1280 px
  finds zero instances of horizontal page overflow.

- **SC-002**: The sidebar active state correctly reflects the current route on 100%
  of navigations, including browser back/forward — verified across all 6 section routes.

- **SC-003**: A text search across all rendered pages finds zero instances of "live
  data" or "real-time".

- **SC-004**: `pnpm --filter shops-app build` exits 0 after all fixes.

- **SC-005**: A reviewer opening the app on a mobile device can complete the full
  onboarding-to-dashboard flow and navigate all sidebar sections using only the
  mobile hamburger — zero interactions require desktop-only gestures.

---

## Assumptions

- This feature applies fixes only — no new components, routes, or packages are
  introduced.
- Issues are confirmed by manual inspection before a fix is written. If no issue
  is found for a checklist item, no code change is made.
- The five placeholder pages are already structurally consistent from feature 011.
  This QA pass confirms consistency; it does not redesign them.
- Mobile breakpoint for sidebar behaviour is `< 768 px` (matching existing Tailwind
  `md:` prefix usage).
- "External links" means any `href` value that is not a relative Next.js route or
  `href="#"` — these must be replaced with `href="#"`.
- The build gate (`pnpm --filter shops-app build`) is the hard exit criterion for
  this feature — all other items are best-effort polish if the build already passes.
