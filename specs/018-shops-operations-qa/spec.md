# Feature Specification: Shops Operations QA

**Feature Branch**: `018-shops-operations-qa`
**Created**: 2026-05-14
**Status**: Draft

## User Scenarios & Testing *(mandatory)*

### User Story 1 — All Five Routes Render Correctly (Priority: P1) 🎯 MVP

A user navigates to each of the five operations routes (`/products`, `/orders`, `/customers`, `/reports`, `/settings`) and each page renders its mock content without error. No blank screens, no crashes, no "coming soon" placeholders remaining, no broken imports.

**Why this priority**: If any route is broken, the entire operations suite is incomplete. This is the minimum bar for shipping.

**Independent Test**: Navigate to each route in sequence. Each page loads and displays mock content. The browser console shows zero React errors. No "Oops" or Next.js error overlay appears.

**Acceptance Scenarios**:

1. **Given** the user navigates to `/products`, **When** the page loads, **Then** a product table with at least 5 rows is visible and no JS error appears in the console.
2. **Given** the user navigates to `/orders`, **When** the page loads, **Then** an orders table with at least 5 rows AND an order detail panel are visible.
3. **Given** the user navigates to `/customers`, **When** the page loads, **Then** aggregate stats and a customer list with at least 5 entries are visible.
4. **Given** the user navigates to `/reports`, **When** the page loads, **Then** 4 metric cards and a bar chart are visible.
5. **Given** the user navigates to `/settings`, **When** the page loads, **Then** 4 settings sections are visible and branch/currency/mode values reflect sessionStorage (or fallback defaults).

---

### User Story 2 — Mobile Layout at 375px (Priority: P1)

At 375px viewport width, each of the five pages is fully readable — no horizontal scrollbar, no clipped buttons, no overflowing text, no layout breakage. Tables scroll horizontally when needed rather than breaking the page layout.

**Why this priority**: 375px is the minimum supported viewport (iPhone SE). Operations staff often check on mobile. A broken mobile layout blocks use in the field.

**Independent Test**: Using Chrome DevTools, set viewport to 375px. Navigate to each of the five routes. No horizontal scrollbar on the `body`. All headings, badges, and buttons are visible without horizontal scrolling. Where tables are present, they scroll only within their container (not the full page).

**Acceptance Scenarios**:

1. **Given** a 375px viewport, **When** `/products` loads, **Then** the product table is contained within `overflow-x-auto` — page body does not scroll horizontally.
2. **Given** a 375px viewport, **When** `/orders` loads, **Then** the orders table scrolls within its container; the order detail panel is below the table (not beside it); both are fully visible.
3. **Given** a 375px viewport, **When** `/customers` loads, **Then** each customer card is readable — name and contact text truncates or wraps without breaking the layout; spend amount and segment badge remain visible.
4. **Given** a 375px viewport, **When** `/reports` loads, **Then** the 4 metric cards display in a 2-column or 1-column grid without horizontal overflow; the bar chart and category table stack vertically.
5. **Given** a 375px viewport, **When** `/settings` loads, **Then** all 4 settings sections stack vertically and are fully readable.

---

### User Story 3 — All Controls Are Visual-Only (Priority: P1)

Every interactive-looking element on the five pages — search bars, filter chips, "Add product" buttons, "Invite member" links, toggles, "Save changes" — is either `disabled`, produces no side effect when clicked, or uses `href="#"`. No form submits. No data is written to any store.

**Why this priority**: A non-functional control that appears functional misleads users into thinking the app has capabilities it does not. Every such element must be clearly inert.

**Independent Test**: On each page, attempt to interact with every button, input, and link. Verify: no navigation away from the current page (except sidebar links), no form submission, no toast/alert from data being saved, no error from a missing handler.

**Acceptance Scenarios**:

1. **Given** the `/products` page, **When** the user clicks "Add product", **Then** nothing happens (button is `disabled`).
2. **Given** the `/products` page, **When** the user clicks or types in the search input, **Then** nothing happens (input is `disabled`).
3. **Given** the `/settings` page, **When** the user clicks "Save changes", **Then** nothing happens (button is `disabled`).
4. **Given** the `/settings` page, **When** the user clicks "Edit" on Store Profile or "Invite member", **Then** nothing happens (elements are visually disabled).
5. **Given** the `/settings` page, **When** the user clicks the Advanced section toggles, **Then** nothing happens (toggles are static visual elements, not interactive).
6. **Given** any page with mock action buttons (`href="#"`), **When** the user clicks them, **Then** no navigation error occurs.

---

### User Story 4 — Mock Data Labelling and Content Quality (Priority: P2)

Every page clearly communicates that its data is mock/foundation — through chip labels, amber mono text annotations, or footnotes. No metric or number is presented as "live" or "real-time". No external links exist. No localhost URLs appear in any JSX. Status badges use consistent colours across all pages.

**Why this priority**: A demo or staging environment must never be mistaken for production data. Honest labelling is a quality gate for any foundation screen.

**Independent Test**: On each page, locate the mock data indicator. Confirm it is visible without scrolling (or within one scroll of the top). Check all `<a>` and `href` attributes — zero must point to localhost or external domains.

**Acceptance Scenarios**:

1. **Given** any of the five pages, **Then** at least one visible mock/foundation label is present (chip, amber mono annotation, or footnote).
2. **Given** the `/reports` page, **Then** "mock data" is visible both in the page header subtitle and in the chart section footer.
3. **Given** all five pages, **Then** zero `<a>` tags point to `localhost`, `http://`, or `https://` external domains.
4. **Given** status badges across `/products` and `/orders`, **Then** the same badge colour convention is used: Active/Paid → emerald, Low Stock/Pending → amber, Refund/Draft → rose/gray — no contradictions.
5. **Given** the `/customers` page, **Then** segment badges use the established convention: VIP → purple, Regular → blue, New → emerald.

---

### User Story 5 — Sidebar Active States and Topbar Responsiveness (Priority: P2)

When the user navigates to any of the five pages, the correct sidebar navigation item is highlighted as active. The Topbar renders correctly on all five pages — branch name reads from sessionStorage, "Open POS" button is visible, search input is disabled. The mobile hamburger menu opens and closes the sidebar correctly from all five pages.

**Why this priority**: Sidebar active state tells the user where they are. A broken active state breaks spatial orientation in the app. Topbar consistency is a shared-component quality gate.

**Independent Test**: Navigate to `/products`. The "Products" sidebar item should be highlighted (active state) and "Dashboard" should not. Repeat for each of the four remaining pages. On mobile (375px), tap the hamburger, verify the sidebar opens; tap the overlay, verify it closes.

**Acceptance Scenarios**:

1. **Given** the user navigates to `/products`, **Then** the "Products" sidebar item has the active style and no other item does.
2. **Given** the user navigates to `/orders`, **Then** "Orders" is active in the sidebar.
3. **Given** the user navigates to `/customers`, **Then** "Customers" is active in the sidebar.
4. **Given** the user navigates to `/reports`, **Then** "Reports" is active in the sidebar.
5. **Given** the user navigates to `/settings`, **Then** "Settings" is active in the sidebar.
6. **Given** a 375px viewport on any of the five pages, **When** the hamburger button is tapped, **Then** the sidebar opens; when the backdrop is tapped, the sidebar closes.
7. **Given** any of the five pages, **Then** the Topbar branch selector shows the correct branch (from sessionStorage or fallback) and the "Open POS" button is visible.

---

### Edge Cases

- What if the user has no sessionStorage (no onboarding completed) and navigates directly to `/settings`? The page must render with fallback values ("Maadi Main", "EGP", "Both") — no crash, no empty fields.
- What if a customer name is long (e.g., "Mariam Hassan") and the viewport is 375px? The text should truncate or wrap — not push other elements off-screen.
- What if the `/reports` CSS bar chart renders all bars at 0 height due to a percentage-height resolution issue? This would be a confirmed rendering bug requiring a fix. Verify with DevTools that bars have non-zero rendered heights.
- What if the sidebar is open on mobile and the user navigates to a new page via a sidebar link? The sidebar should close after navigation (the `onClick={() => setIsOpen(false)}` handler on each nav item ensures this — verify it still works).

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: All five routes (`/products`, `/orders`, `/customers`, `/reports`, `/settings`) MUST render without errors and display mock content.
- **FR-002**: All five pages MUST be free of horizontal overflow at 375px viewport width — the `body` must not have a horizontal scrollbar.
- **FR-003**: Tables on `/products` and `/orders` MUST be wrapped in `overflow-x-auto` so they scroll within their container on narrow viewports.
- **FR-004**: Customer card text (name, contact) MUST truncate or wrap gracefully at 375px — no text may push other elements off-screen.
- **FR-005**: All search inputs, filter controls, "Add product", "Save changes", "Edit", "Invite member" elements MUST be `disabled` or otherwise produce no side effect when interacted with.
- **FR-006**: The `/reports` CSS bar chart bars MUST have non-zero rendered height for each day — verified by inspecting the rendered DOM element heights in browser DevTools.
- **FR-007**: Every page MUST display at least one visible mock/foundation label (chip annotation or amber mono text) visible without scrolling past the first viewport.
- **FR-008**: Zero `<a>` or `href` attributes across all five pages MUST point to `localhost` or external domains.
- **FR-009**: Status badge colours MUST be consistent: Active/Paid → emerald; Low Stock/Pending → amber; Draft/Refund → rose/gray; VIP → purple; Regular → blue; New → emerald.
- **FR-010**: Sidebar active state MUST correctly highlight the current page's nav item on each of the five routes.
- **FR-011**: `pnpm lint` in `apps/shops-app` MUST exit with zero errors.
- **FR-012**: `pnpm tsc --noEmit` in `apps/shops-app` MUST exit with zero errors.
- **FR-013**: `pnpm --filter shops-app build` MUST exit with zero errors and list all five routes as compiled.
- **FR-014**: Only confirmed issues may be fixed. No new features, no refactoring beyond the fix scope.

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: All five routes load without error in a fresh browser session — verified by navigating to each URL and observing zero JS errors in the console.
- **SC-002**: At 375px viewport, none of the five pages produce a horizontal scrollbar on the `body` element — verified via Chrome DevTools device simulation.
- **SC-003**: The `/reports` bar chart bars each have a rendered `height` greater than 0 — verified by inspecting element computed styles in DevTools.
- **SC-004**: Zero `<a>` tags with `localhost` or external `http://`/`https://` hrefs exist across all five page files — verified by grep.
- **SC-005**: `pnpm lint` exits with zero errors.
- **SC-006**: `pnpm tsc --noEmit` exits with zero errors.
- **SC-007**: `pnpm --filter shops-app build` exits with zero errors and all five routes appear in build output.

---

## Assumptions

- The QA pass runs against the current implementation from branch `017-shops-operations-foundation` (merged or cherry-picked to `018-shops-operations-qa`). No new features are added — only confirmed bugs are fixed.
- Sidebar active state logic (`pathname === item.href`) was implemented in feature 010 and is assumed correct for `/dashboard`, `/products`, `/orders`, `/customers`, `/reports`, `/settings` — QA confirms it still works after the 017 page rewrites.
- The `overflow-x-auto` wrapper on the products and orders tables is already in place from 017 — QA verifies it is effective at 375px.
- The `/reports` bar chart percentage-height issue (bars potentially rendering at 0px) is the most likely code-level bug found during static audit. It is treated as "verify first, fix if confirmed."
- Customer card text truncation at 375px is a layout concern but may be acceptable if text wraps gracefully — fix only if it causes actual overflow of the card boundaries.
- The `/settings` page uses `useSyncExternalStore` for hydration safety — this is assumed correct and will not be changed unless a hydration warning is confirmed.
- No new packages, no new components, no cross-app imports are permitted. All fixes are minimal changes within existing files.
