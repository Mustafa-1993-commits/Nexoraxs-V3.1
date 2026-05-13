# Feature Specification: Platform-to-Shops Flow

**Feature Branch**: `013-platform-to-shops-flow`
**Created**: 2026-05-13
**Status**: Draft
**Scope**: `apps/core-platform` and `apps/shops-app` — UI and navigation polish only.
No backend, no API calls, no auth logic, no payments, no inventory or orders logic,
no new packages. Landing is out of scope.

**Cross-app routing note**: All links between Core Platform and Shops are visual only
in this phase. No subdomain routing has been implemented. No hardcoded `localhost`
URLs appear anywhere in the codebase. This will be documented explicitly as an
assumption and constraint.

---

## User Scenarios & Testing

### User Story 1 — User Discovers Shops from the App Launcher (Priority: P1)

A user inside Core Platform navigates to the App Launcher (`/dashboard/apps`) and
sees the Shops card presented as a clearly enabled, available app — distinct from the
"Coming Soon" cards. The card has an "Open Shops" button that signals where clicking
would take them. The user understands that clicking this button would open the Shops
business app.

**Why this priority**: The App Launcher is the primary entry point from Core Platform
into business apps. Without a clear visual affordance that Shops is available and
navigable, users cannot discover the connection.

**Independent Test**: Open Core Platform `/dashboard/apps`. The Shops card is visually
distinct from unavailable cards. A button labelled "Open Shops" is present. The card
includes a short note (e.g. "Opens NexoraXS Shops") indicating what this action does.
Clicking the button produces no navigation error (it uses `href="#"` or is a visual-
only button).

**Acceptance Scenarios**:

1. **Given** a user opens Core Platform `/dashboard/apps`, **When** they view the
   Shops card, **Then** the card is visually distinguished from "Coming Soon" cards —
   different button style, no "Coming Soon" badge.

2. **Given** a user looks at the Shops card button, **When** they read the label,
   **Then** the button reads "Open Shops" (not the generic "Open").

3. **Given** a user reads the Shops card, **When** they look for context, **Then** a
   short label or note makes clear this opens the Shops business app.

4. **Given** a user clicks "Open Shops", **When** the click is processed, **Then**
   no navigation error occurs — the link is `href="#"` or a visual-only button.

---

### User Story 2 — User Sees Shops Listed as an Enabled App on the Dashboard (Priority: P2)

A user on the Core Platform main dashboard (`/dashboard`) sees a small "Enabled apps"
section or card that lists Shops as the active app in their workspace. This is a
visual-only status indicator — it does not require a real API call.

**Why this priority**: The main dashboard is the user's home screen. Showing which
apps are active reinforces that Shops is part of their workspace, creating a sense of
coherence across the platform.

**Independent Test**: Open Core Platform `/dashboard`. A card or section labelled
"Enabled apps" (or similar) is visible. It shows "Shops" with an indicator that it
is active/enabled. The section is clearly mock/placeholder. No real data is implied.

**Acceptance Scenarios**:

1. **Given** a user opens Core Platform `/dashboard`, **When** they scan the page,
   **Then** they see an "Enabled apps" card or section showing Shops as enabled.

2. **Given** a user reads the Enabled Apps section, **When** they look for status,
   **Then** Shops is listed with a visual indicator (icon, badge, or tick) showing
   it is active.

3. **Given** a user looks at the card, **When** they read any supporting text, **Then**
   the text does not claim real data — it is clearly a mock/placeholder display.

---

### User Story 3 — User Can Navigate Back to Platform from Shops (Priority: P1)

A user inside the Shops app sees a consistent "Back to Platform" link in the sidebar
header. The link is clearly labelled and visually positioned as a navigation control.
Clicking it uses `href="#"` — no real navigation to Core Platform occurs in this
phase, but the affordance is present and unambiguous.

**Why this priority**: Without a visible return path, users feel trapped in the Shops
app. The back affordance is essential for the visual flow to feel complete.

**Independent Test**: Open Shops app `/dashboard`. The sidebar header shows a
"Back to Platform" link (chevron-left icon + label or tooltip). Clicking it does not
cause an error — it uses `href="#"`. The label is unambiguous — it does not say
"Back" or "Platform" alone, but clearly communicates a return to the main platform.

**Acceptance Scenarios**:

1. **Given** a user is on any Shops page, **When** they look at the sidebar header,
   **Then** a visible link labelled "Back to Platform" (or equivalent clear label)
   appears above or near the Shops logo.

2. **Given** a user clicks the "Back to Platform" link, **When** the click is
   processed, **Then** no navigation error occurs — the link uses `href="#"`.

3. **Given** a user is on mobile with the sidebar open, **When** they see the sidebar
   header, **Then** the "Back to Platform" link is still visible.

---

### User Story 4 — Workspace and Store Names Are Consistent Across Both Apps (Priority: P2)

A user moving between Core Platform and Shops sees the same workspace name —
"Mustafa's Co." — displayed consistently in both apps. In the Shops app topbar,
the store is additionally identified with the branch name "Maadi Main" (without
the interpunct separator that could read as two separate items). The naming
creates a sense of a unified account rather than two disconnected UIs.

**Why this priority**: Inconsistent naming breaks the illusion of a connected
product. A user who sees "Mustafa's Co." in one app and a different name in another
immediately loses confidence that they are viewing the same workspace.

**Independent Test**: Open Core Platform topbar — workspace selector shows "Mustafa's
Co.". Open Shops app topbar — store selector shows "Mustafa's Co." and branch shows
"Maadi Main". Both names match exactly and neither uses an unexpected separator or
casing.

**Acceptance Scenarios**:

1. **Given** a user reads the Core Platform topbar workspace selector, **When** they
   look at the workspace name, **Then** it reads "Mustafa's Co." exactly.

2. **Given** a user reads the Shops app topbar store selector, **When** they look at
   the store name, **Then** it reads "Mustafa's Co." exactly.

3. **Given** a user reads the Shops app branch selector, **When** they look at the
   branch name, **Then** it reads "Maadi Main" (without special separators that
   imply two items).

---

### User Story 5 — Shops Onboarding Has No Broken or Hardcoded External Links (Priority: P2)

A user on the Shops onboarding page sees a back affordance (if present) that uses
`href="#"`. No hardcoded `localhost` or absolute URLs appear anywhere in either app.
All navigation that would require real cross-app routing is visual-only or uses
`href="#"`.

**Why this priority**: Hardcoded localhost URLs are a quality defect that becomes
visible to any reviewer who inspects the source or opens the app in a non-local
environment. This must be confirmed clean.

**Independent Test**: Inspect the Shops onboarding page source — no `localhost` or
absolute URL appears. Both apps pass a source-level text search for `localhost`. The
onboarding page has a "Back" or "← Platform" link using `href="#"` if present.

**Acceptance Scenarios**:

1. **Given** a developer searches both apps for `localhost`, **When** they scan all
   source files, **Then** zero results are found.

2. **Given** a user views the Shops onboarding page, **When** they look for a way to
   go back, **Then** any back link or button uses `href="#"` — no hardcoded URL.

3. **Given** both apps are built for production, **When** the build completes,
   **Then** both `pnpm --filter core-platform build` and
   `pnpm --filter shops-app build` exit with code 0.

---

### Edge Cases

- What happens if the user clicks "Open Shops" in Core Platform multiple times —
  since it is `href="#"`, nothing happens beyond the link being followed to the
  current page anchor. No navigation loop or error.
- What happens if the user opens the Shops sidebar on mobile — the "Back to Platform"
  link must be visible in the mobile drawer as well as the desktop sidebar.
- What happens if the workspace name contains an apostrophe — "Mustafa's Co." renders
  correctly as HTML-escaped `&apos;` in JSX where required.
- What happens if a user right-clicks "Open Shops" or "Back to Platform" and selects
  "Open in new tab" — since `href="#"`, this opens the same page in a new tab. This
  is acceptable behaviour for this phase.

---

## Requirements

### Functional Requirements

- **FR-001**: The Shops card on Core Platform `/dashboard/apps` MUST display a button
  labelled "Open Shops" (not the generic "Open"). The button MUST use `href="#"` or
  be a visual-only `type="button"` with no real navigation side-effect.

- **FR-002**: The Shops card on Core Platform `/dashboard/apps` MUST include a visible
  label, chip, or subtitle indicating it opens the Shops business app (e.g.
  "Business management · POS · Commerce").

- **FR-003**: The Shops card MUST be visually distinguished from "Coming Soon" cards —
  it MUST NOT show a "Coming Soon" badge and its button MUST have an active/enabled
  style.

- **FR-004**: Core Platform `/dashboard` MUST include a new "Enabled apps" section or
  card listing Shops as active for the current workspace. The section MUST be
  visually scoped and clearly mock/placeholder.

- **FR-005**: The Shops app sidebar header back link MUST be clearly labelled "Back
  to Platform" (or include that phrase in its accessible label). It MUST use
  `href="#"`. It MUST be visible on both desktop and mobile viewports.

- **FR-006**: The Shops app topbar store selector MUST display "Mustafa's Co." as the
  store name — matching the workspace name used in Core Platform.

- **FR-007**: The Shops app topbar branch selector MUST display "Maadi Main" as the
  branch label. The format MUST be consistent (no special separators that imply two
  separate items in an ambiguous way).

- **FR-008**: The Shops app onboarding page MUST NOT contain any hardcoded `localhost`
  or absolute external URLs. Any back/return navigation element MUST use `href="#"`.

- **FR-009**: No file in `apps/core-platform` or `apps/shops-app` MAY contain a
  hardcoded `localhost` URL string.

- **FR-010**: Both `pnpm --filter core-platform build` and
  `pnpm --filter shops-app build` MUST exit with code 0 after all changes.

---

## Success Criteria

### Measurable Outcomes

- **SC-001**: A reviewer moving through Core Platform `/dashboard` → `/dashboard/apps`
  → Shops card can clearly identify the "Open Shops" action and understand it connects
  to the Shops business app — within 5 seconds of viewing the card.

- **SC-002**: A reviewer inside the Shops app can identify the "Back to Platform" link
  in the sidebar within 5 seconds of viewing the sidebar.

- **SC-003**: The workspace name "Mustafa's Co." appears identically in both apps'
  topbars — zero discrepancy between Core Platform and Shops App.

- **SC-004**: A text search for `localhost` across all source files in both apps
  returns zero results.

- **SC-005**: Both apps build cleanly — `pnpm --filter core-platform build` and
  `pnpm --filter shops-app build` each exit 0.

---

## Assumptions

- Cross-app routing (Core Platform → Shops and Shops → Core Platform) is **visual
  only** in this phase. No subdomain routing, no `window.location` calls, no real
  URL-based navigation between apps exists or will be introduced.
- All links that would normally navigate between apps use `href="#"` as the
  placeholder target. This is intentional and expected.
- The workspace name "Mustafa's Co." is the canonical mock name for both apps and
  must be used consistently — it is not configurable from user input in this phase.
- The Shops branch label "Maadi Main" is the canonical mock branch name and is
  updated from the current "Maadi · Main" to remove the interpunct separator for
  cleaner presentation.
- The Shops app sidebar already has a back link (chevron-left button with `href="#"`)
  added in feature 011. This feature upgrades the label to clearly read
  "Back to Platform".
- The "Enabled apps" section on the Core Platform dashboard is a new visual-only
  card, not a replacement of the existing metric cards or activity feed.
- No new npm packages are introduced in either app.
- The `AppCard` component in Core Platform accepts an `href` prop or a similar
  mechanism to make the Shops button distinct — this is a UI-only change.
