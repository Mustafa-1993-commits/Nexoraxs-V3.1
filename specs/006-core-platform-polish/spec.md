# Feature Specification: Core Platform UI Polish

**Feature Branch**: `006-core-platform-polish`
**Created**: 2026-05-12
**Status**: Draft
**Scope**: `apps/core-platform` only — UI improvements only; no backend, no API calls, no new packages, no auth logic, no Shops-specific logic
**Visual Reference**: `docs/NexoraXS Platform.html` — used for colors, gradients, typography, spacing, and component patterns

---

## User Scenarios & Testing

### User Story 1 — User Sees Premium Branding and Improved Navigation (Priority: P1)

A user opening the dashboard sees the NexoraXS logo with its signature
blue-purple-cyan gradient, a polished sidebar with clearly grouped navigation
sections, and a "Resources" section with documentation, changelog, and support
links. A "Beta access" promo card at the bottom of the sidebar anchors the design.

**Why this priority**: Branding and navigation are the first things a user sees.
They establish credibility and set the tone for the entire platform.

**Independent Test**: Open `/dashboard`. The sidebar shows the NexoraXS gradient
logo, "Platform" section with nav links, "Resources" section with 3 links, and a
"Beta access" card at the bottom. The active nav item has a gradient left-border
indicator and a blue-tinted background.

**Acceptance Scenarios**:

1. **Given** a user opens any dashboard page, **When** they look at the sidebar,
   **Then** they see the NexoraXS logo (gradient icon + "Nexora" in white +
   "XS" in gradient text).

2. **Given** a user views the sidebar, **When** they look at the navigation,
   **Then** they see a "Platform" label above the main nav links and a
   "Resources" label above Documentation, Changelog, and Support links.

3. **Given** a user looks at the bottom of the sidebar, **When** they view it,
   **Then** they see a "Beta access" card with a gradient border explaining the
   early-bird plan.

4. **Given** a user is on the Dashboard page, **When** they look at the sidebar,
   **Then** the "Dashboard" link has a visible gradient left-border and a
   blue-tinted background distinguishing it from inactive links.

---

### User Story 2 — User Sees a Topbar on All Dashboard Pages (Priority: P1)

A user inside any dashboard page sees a persistent topbar that shows their
workspace name, the current page title, a search bar (desktop only), a
notifications bell, and their user avatar and name.

**Why this priority**: The topbar is essential context for the user — it tells
them which workspace they are in and who they are logged in as.

**Independent Test**: Open `/dashboard` and `/dashboard/apps`. Both pages show a
sticky topbar with a workspace switcher button ("Mustafa's Co."), the current page
title, a search input on desktop, a bell icon with a notification dot, and a user
button showing "MA" avatar and "Mustafa A. / Owner".

**Acceptance Scenarios**:

1. **Given** a user opens any `/dashboard/**` page, **When** they view the top,
   **Then** a sticky topbar is visible with the workspace switcher on the left
   and the user avatar on the right.

2. **Given** a user opens `/dashboard/billing`, **When** the topbar renders,
   **Then** the breadcrumb area shows "Plan & billing" as the current page title.

3. **Given** a user is on mobile, **When** they view the topbar, **Then** the
   search bar is hidden and the topbar remains usable without horizontal overflow.

---

### User Story 3 — Dashboard Overview Looks Close to the Reference (Priority: P1)

A user on the `/dashboard` page sees enhanced metric cards with coloured glow
blobs and trend badges, a workspace detail section, an active plan summary,
and a recent activity feed.

**Why this priority**: The dashboard overview is the primary screen users return
to daily. Its quality directly affects the platform's perceived value.

**Independent Test**: At `/dashboard` — 4 metric cards each show a label, a large
bold value, a trend badge ("+12%"), and a coloured icon. Below them a workspace
card shows storage and API call data. A recent activity feed shows at least 3
mock events with icons, descriptions, and timestamps.

**Acceptance Scenarios**:

1. **Given** a user views the dashboard, **When** they look at metric cards,
   **Then** each card has a coloured glow blob, a monospace uppercase label, a
   large bold value, a trend percentage, and a coloured icon in a bordered square.

2. **Given** a user views the dashboard, **When** they scroll below the metric
   cards, **Then** they see a recent activity feed with at least 3 events, each
   with an icon, an actor name, an action description, and a relative timestamp.

---

### User Story 4 — Billing Page Renders (Priority: P2)

A user navigating to `/dashboard/billing` sees a billing page with the current
plan details, a mock payment card, and an empty invoices section.

**Why this priority**: Billing is a core platform page required for the complete
dashboard shell.

**Independent Test**: Navigate to `/dashboard/billing`. A plan card shows "Beta
Early-Bird", badges for "Active" and "Locked-in rate", and an "Upgrade plan"
button. A payment card shows mock card details. An invoices section shows an
empty state.

**Acceptance Scenarios**:

1. **Given** a user navigates to `/dashboard/billing`, **When** the page loads,
   **Then** they see a plan card with gradient glow, the plan name, status badges,
   and action buttons.

2. **Given** a user views the billing page, **When** they look at the invoices
   section, **Then** they see an empty state with a message that invoices will
   appear when pricing goes live.

3. **Given** a user is on mobile, **When** they view the billing page, **Then**
   all cards stack vertically with no overflow.

---

### User Story 5 — Settings Page Renders with Tabs (Priority: P2)

A user navigating to `/dashboard/settings` sees a settings page with a tab
navigation (Profile, Workspace, Team, Security, API Keys). Each tab renders
appropriate mock content.

**Why this priority**: Settings is a core platform page; its absence makes the
shell feel incomplete.

**Independent Test**: Navigate to `/dashboard/settings`. A left-side tab list
is visible (Profile, Workspace, Team, Security, API Keys). Clicking each tab
renders its content panel.

**Acceptance Scenarios**:

1. **Given** a user opens `/dashboard/settings`, **When** the page loads,
   **Then** the Profile tab is active by default with a mock avatar, full name,
   email, role, and timezone form fields.

2. **Given** a user clicks "Workspace" tab, **When** it renders,
   **Then** they see workspace name, slug, region, and currency fields plus a
   danger zone for deleting the workspace.

3. **Given** a user clicks "Team", "Security", or "API Keys", **When** they
   render, **Then** each shows appropriate mock content (coming soon state,
   toggle switches, or key list respectively).

---

### Edge Cases

- What if the settings tab state is lost on page navigation? Tab state is local
  to the page and resets on navigation — this is acceptable for a UI shell.
- What if the topbar search input is submitted? No action occurs — search is
  UI-only in this shell.
- What if the billing "Upgrade plan" button is clicked? No action — UI-only.

---

## Requirements

### Functional Requirements

- **FR-001**: A `Logo` component MUST be created at `components/ui/Logo.tsx`
  showing a gradient icon and the brand name "Nexora" + "XS" (XS in gradient).

- **FR-002**: A `Topbar` component MUST be created at
  `components/dashboard/Topbar.tsx` accepting a `title` prop and rendering:
  workspace switcher, breadcrumb title, search bar (desktop), bell icon, user
  button. It MUST be rendered inside the dashboard layout.

- **FR-003**: The Sidebar MUST be updated to:
  - Use the `Logo` component instead of plain text
  - Display a "Platform" section label above nav links
  - Display a "Resources" section with Documentation, Changelog, Support links
  - Display a "Beta access" promotional card at the bottom
  - Style active nav items with a gradient left-border and blue-tinted background

- **FR-004**: The `Button` component's `primary` variant MUST use a blue-to-indigo
  gradient background with a blue glow box-shadow and a subtle hover lift.

- **FR-005**: The `MetricCard` component MUST be updated to include:
  - A coloured glow blob in the top-right corner
  - A monospace uppercase label
  - A large bold value with an optional trend badge
  - A coloured icon in a bordered icon square

- **FR-006**: The `/dashboard` page MUST include a recent activity section below
  the metric cards showing at least 3 mock activity events (actor, action,
  timestamp, icon).

- **FR-007**: A `/dashboard/billing` route MUST exist showing: plan name and
  status, usage summary, mock payment card, and empty invoices section.

- **FR-008**: A `/dashboard/settings` route MUST exist with tab navigation
  (Profile, Workspace, Team, Security, API Keys) and content panels for each.

- **FR-009**: `app/globals.css` MUST include design utility classes extracted
  from the reference: `.gradient-text`, `.card`, `.card-hover`, `.btn-primary`,
  `.chip`, `.nav-item`, `.nav-item-active`.

- **FR-010**: The Sidebar nav MUST include Billing and Settings nav items
  linking to `/dashboard/billing` and `/dashboard/settings`.

- **FR-011**: No new npm packages MAY be installed. No backend calls MAY be
  made. No other apps MAY be modified.

### Key Entities

- **Logo**: Brand mark component used in Sidebar and auth pages.
- **Topbar**: Sticky header for all dashboard pages — workspace context + user.
- **Activity event**: `{ who: string; action: string; when: string; iconColor: string }` — mock data for the dashboard feed.
- **Settings tab**: `{ id: string; label: string }` — tab definition for Settings page.
- **Invoice**: Placeholder entity — empty state only for this release.

---

## Success Criteria

### Measurable Outcomes

- **SC-001**: The Logo component renders correctly in the sidebar on all
  dashboard pages.

- **SC-002**: The Topbar is visible and sticky on all `/dashboard/**` pages
  with the correct page title per route.

- **SC-003**: The sidebar shows "Platform" and "Resources" section labels and
  the "Beta access" card.

- **SC-004**: `/dashboard/billing` renders without errors with plan card,
  payment card, and invoices section.

- **SC-005**: `/dashboard/settings` renders without errors and all 5 tabs
  switch content correctly.

- **SC-006**: The dashboard activity feed shows at least 3 mock events.

- **SC-007**: `pnpm --filter core-platform build` passes with zero TypeScript
  errors and zero ESLint errors.

---

## Assumptions

- The visual reference (`docs/NexoraXS Platform.html`) is the authoritative
  design source. Colors, spacing, and component patterns are extracted from it.
- The `@/*` TypeScript path alias is already configured and maps to the
  `apps/core-platform/` root.
- The Topbar `title` prop is hardcoded per-page (not derived from route
  metadata) for simplicity.
- The Settings page uses `"use client"` for tab switching state — no server
  action required.
- The Billing and Settings nav items are added to the existing `navItems`
  mock data array.
- Activity mock data is added to `lib/mock-data/` as a new file.
- The `globals.css` utility classes use raw CSS (not Tailwind `@apply`) to
  match the reference design exactly.
