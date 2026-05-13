# Feature Specification: Core Platform UI QA

**Feature Branch**: `009-core-platform-ui-qa`
**Created**: 2026-05-13
**Status**: Draft
**Scope**: `apps/core-platform` only — visual QA and polish; no backend, no API calls, no new packages, no auth logic. Landing and shops-app are out of scope.

---

## User Scenarios & Testing

### User Story 1 — Workspaces Page Background Matches the Dashboard (Priority: P1)

A user navigating from login to the workspace selector sees a background that feels
visually consistent with the rest of the platform. The `/workspaces` page no longer
shows a grid overlay or visual treatment distinct from the authenticated dashboard
area — both share the same dark, neutral background style.

**Why this priority**: The visual inconsistency between `/workspaces` and
`/dashboard` creates a jarring transition and undermines the sense of a unified
product. This is the primary polish item for this QA pass.

**Independent Test**: Open `/workspaces`. Confirm no grid pattern or background
texture is visible on the page. Then navigate to `/dashboard`. The dark background
colour and ambient feel should be indistinguishable between the two pages.

**Acceptance Scenarios**:

1. **Given** a user lands on `/workspaces`, **When** they view the page background,
   **Then** no grid lines, dot patterns, or decorative background overlays are
   visible — only the standard dark neutral background shared with the dashboard.

2. **Given** a user transitions from `/workspaces` to `/dashboard`, **When** the
   dashboard loads, **Then** the background colour and ambient visual style appear
   consistent — no sudden shift in background treatment.

3. **Given** a user views `/workspaces` on mobile, **When** they scroll the page,
   **Then** the background remains uniform with no tiling, banding, or artefacts.

---

### User Story 2 — Mobile Sidebar Is Polished and Fully Functional (Priority: P1)

A user on a small screen (phone or narrow viewport) can open and close the sidebar
navigation using a visible hamburger button, navigate to any section, and see the
correct active state highlighted. The sidebar closes automatically after a link is
tapped and does not obscure content unexpectedly.

**Why this priority**: Mobile is a first-class surface. A broken or visually rough
mobile navigation directly reduces usability for any user on a phone or tablet.

**Independent Test**: Resize the browser to a mobile viewport (< 768 px wide).
Open `/dashboard`. Tap the hamburger icon — the sidebar slides in. Tap a nav link
— the sidebar closes and the correct page loads with the active link highlighted.
Tap the backdrop — the sidebar closes without navigating.

**Acceptance Scenarios**:

1. **Given** a user is on a mobile viewport, **When** they view any `/dashboard/**`
   page, **Then** a hamburger icon is visible in the top-left corner and the sidebar
   is hidden by default.

2. **Given** a user taps the hamburger icon, **When** the sidebar opens, **Then** a
   dark backdrop covers the page content and the sidebar slides in from the left.

3. **Given** the sidebar is open and the user taps a nav link, **When** the new
   page loads, **Then** the sidebar closes automatically and the tapped link appears
   highlighted as the active state.

4. **Given** the sidebar is open, **When** the user taps the backdrop, **Then** the
   sidebar closes without any navigation occurring.

5. **Given** a user is on a mobile viewport, **When** they view the topbar, **Then**
   the search input is hidden and the topbar does not overflow horizontally.

---

### User Story 3 — Navigation Active States Are Correct on All Routes (Priority: P2)

A user navigating between dashboard sections (Dashboard, App Launcher, Plan &
Billing, Settings) sees the correct sidebar link highlighted for the current page
at all times. No link is highlighted when it should not be, and the active
highlight does not persist on the wrong item after navigation.

**Why this priority**: Incorrect or missing active states make the navigation feel
broken and make it harder for users to orient themselves within the product.

**Independent Test**: Visit `/dashboard`, `/dashboard/apps`, `/dashboard/billing`,
and `/dashboard/settings` in sequence. On each page, exactly one sidebar link has
the active highlight style. Navigate back and forward — the highlight follows the
current route exactly.

**Acceptance Scenarios**:

1. **Given** a user is on `/dashboard`, **When** they view the sidebar, **Then**
   only "Dashboard" is shown as active.

2. **Given** a user navigates to `/dashboard/apps`, **When** the page loads,
   **Then** only "App Launcher" is highlighted in the sidebar.

3. **Given** a user navigates to `/dashboard/billing`, **When** the page loads,
   **Then** only "Plan & billing" is highlighted.

4. **Given** a user navigates to `/dashboard/settings`, **When** the page loads,
   **Then** only "Settings" is highlighted.

5. **Given** a user uses the browser back button to return to a previous page,
   **When** the page renders, **Then** the sidebar active state matches the current
   URL correctly.

---

### User Story 4 — All Dashboard Pages Are Responsive at Every Breakpoint (Priority: P2)

A user viewing any `/dashboard/**` page on desktop, tablet, or mobile sees a
layout that is correctly proportioned, readable, and free of overflow, clipping,
or misaligned elements. Cards, buttons, and content sections adapt appropriately
to the available width.

**Why this priority**: Responsive correctness is a baseline quality bar. Visual
breakage at common screen widths is a regression that affects real users.

**Independent Test**: Open each dashboard page (`/dashboard`, `/dashboard/apps`,
`/dashboard/billing`, `/dashboard/settings`) at 375 px, 768 px, and 1280 px
viewport widths. No horizontal scrollbar, no clipped content, no overflowing
elements. Cards stack vertically on narrow viewports and arrange in a grid on wider
ones.

**Acceptance Scenarios**:

1. **Given** a user views any `/dashboard/**` page at a 375 px width, **When** they
   scroll vertically, **Then** no horizontal scrollbar appears and all content is
   reachable.

2. **Given** a user views any `/dashboard/**` page at a 768 px (tablet) width,
   **When** the layout renders, **Then** the sidebar is hidden behind the hamburger
   toggle and the main content fills the full width.

3. **Given** a user views `/dashboard` on a wide desktop, **When** the metric cards
   render, **Then** they display in a multi-column grid without overflow or gaps.

4. **Given** a user views any `/dashboard/**` page, **When** they interact with
   buttons and cards, **Then** hover states, focus rings, and active states are
   visible and clearly distinguishable.

---

### Edge Cases

- What happens if a user directly navigates to `/dashboard/settings` on mobile —
  does the sidebar still initialise in the closed state?
- What happens when the viewport is resized from mobile to desktop mid-session —
  does the sidebar correctly become visible without requiring a page reload?
- What happens if a user opens the mobile sidebar on `/workspaces` — this page has
  no sidebar, so this scenario does not apply; confirm no hamburger appears there.
- What happens when all workspace cards are scrolled past the fold on small screens —
  do the "Continue" and "New workspace" buttons remain accessible?

---

## Requirements

### Functional Requirements

- **FR-001**: The `/workspaces` page MUST NOT display any grid, dot-pattern, or
  decorative background overlay. Its background colour MUST visually match the
  `/dashboard` background.

- **FR-002**: The `/workspaces` page glow blobs (ambient colour accents) MUST be
  reviewed and either retained if consistent with the dashboard aesthetic or removed
  if they conflict with the target background treatment.

- **FR-003**: The mobile sidebar MUST render in a closed state by default on
  viewports narrower than 768 px across all `/dashboard/**` routes.

- **FR-004**: The mobile sidebar MUST open and close correctly via the hamburger
  button and the close (×) button without visual glitches or layout shift.

- **FR-005**: Tapping any navigation link in the mobile sidebar MUST close the
  sidebar automatically after navigation.

- **FR-006**: The active sidebar link MUST exactly match the current route on every
  `/dashboard/**` page, including when the user navigates using browser history.

- **FR-007**: The topbar search input MUST be hidden on viewports narrower than
  768 px and visible on wider viewports.

- **FR-008**: Every `/dashboard/**` page MUST render without horizontal overflow at
  375 px, 768 px, and 1280 px viewport widths.

- **FR-009**: All interactive elements (buttons, cards, nav links) MUST have clearly
  visible hover and focus states that meet visual-contrast expectations.

- **FR-010**: The `/workspaces` page layout MUST be verified for responsive
  correctness — workspace cards, the "Continue" button, and the "New workspace"
  button MUST all be reachable on mobile without horizontal scrolling.

---

## Success Criteria

### Measurable Outcomes

- **SC-001**: A reviewer walking through the `/workspaces` → `/dashboard` flow
  cannot visually distinguish the page background between the two screens — the
  transition feels seamless.

- **SC-002**: 100% of sidebar navigation links show the correct active state on
  their respective routes, with no false positives or false negatives.

- **SC-003**: All `/dashboard/**` pages and `/workspaces` render without a
  horizontal scrollbar at 375 px, 768 px, and 1280 px viewport widths.

- **SC-004**: The mobile sidebar opens and closes within a single tap, with no
  observable layout jank or animation glitch on a standard mobile device.

- **SC-005**: Every interactive element on every reviewed page has a visible hover
  or focus indicator — zero elements that appear unresponsive to user interaction.

---

## Assumptions

- The authoritative background colour for the platform is the dark neutral (`#0a0a0f`)
  used consistently across the dashboard layout — this is the target that `/workspaces`
  should match.
- Glow blobs on `/workspaces` may be retained if they are already used in a
  compatible style elsewhere, or removed if they are the source of the visual
  inconsistency — this is left to implementer judgement during the task.
- "Grid background" refers to any decorative repeating background pattern (CSS grid
  lines, dot matrix, or similar) that visually differs from the plain dark background
  used in `/dashboard`.
- The review covers the five routes in `apps/core-platform`: `/workspaces`,
  `/dashboard`, `/dashboard/apps`, `/dashboard/billing`, `/dashboard/settings`.
  The `/login` and `/register` pages are out of scope for this QA pass.
- No new packages, backend calls, or authentication logic will be introduced. All
  changes are limited to visual markup and layout within `apps/core-platform`.
- `AGENTS.md` will be updated to reflect 009 as the active feature — this is a
  developer housekeeping step, not a user-facing change, and will be tracked in
  tasks rather than this specification.
