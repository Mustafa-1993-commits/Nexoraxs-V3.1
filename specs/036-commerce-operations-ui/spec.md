# Feature Specification: Commerce Operations — Slide-overs, Detail Pages, Charts & Empty States

**Feature Branch**: `036-commerce-operations-ui`
**Created**: 2026-05-19
**Status**: Draft
**App**: `apps/shops-app`

---

## Overview

The five Commerce OS operations pages (Products, Inventory, Customers, Orders, Reports)
currently display mock data tables with no interactive panels, no detail views, and no
meaningful chart visualisations. Every page also lacks an empty state — if a user arrives
before adding any data, they see nothing. This feature upgrades all five pages to their
full UI specification as defined in the UX Master Plan, without touching the backend.

All interactions remain mock-only: slide-overs open and close, forms render but do not
submit, detail pages show static data, charts use inline CSS or SVG — no external
charting library is introduced.

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 — Add Product via Slide-over Panel (Priority: P1) 🎯 MVP

A merchant on the Products page clicks "Add product". A slide-over panel animates in
from the right side of the screen. The panel contains a form with fields: Name, SKU
(with auto-generate toggle), Category (dropdown), Price, Cost, Stock quantity, Unit,
Description, and Status (Active/Draft toggle). The merchant can fill in the fields and
click "Save product" — the panel closes. They can also click the × button or press
Escape to dismiss without saving. All fields are visually complete but the save action
is a mock (no data persists).

**Why this priority**: The Add Product flow is the primary data-entry action on the
Products page and the most expected interactive element after a table view exists.
Without it, the page feels unfinished even to a first-time demo viewer.

**Independent Test**: Navigate to `/products`. Click "Add product". A slide-over panel
appears from the right. All form fields are visible and interactive. Clicking × or
pressing Escape closes the panel. "Save product" button is present (disabled or fires
a close action). No page navigation occurs.

**Acceptance Scenarios**:

1. **Given** the user is on `/products`, **When** they click "Add product", **Then**
   a slide-over panel slides in from the right within 300ms.
2. **Given** the slide-over is open, **When** the user views the form, **Then** fields
   for Name, SKU, Category, Price, Cost, Stock, Unit, Description, and Status are all
   visible.
3. **Given** the slide-over is open, **When** the user clicks the × button, **Then**
   the panel slides out and the products table is visible again.
4. **Given** the slide-over is open, **When** the user presses Escape, **Then** the
   panel closes.
5. **Given** the slide-over is open, **When** the user clicks "Save product", **Then**
   the panel closes (mock save — no data persists).
6. **Given** the slide-over is open on mobile (375px), **When** the user views it,
   **Then** the panel occupies full screen width with no horizontal overflow.

---

### User Story 2 — Edit Product via Row Action (Priority: P2)

A merchant clicks the "Edit" action button on any product row in the table. The same
slide-over panel opens, pre-filled with that product's mock data (name, category,
price, stock). The merchant can review the pre-filled values. Saving or closing behaves
identically to the add flow.

**Why this priority**: Edit is the natural companion to Add. Without it, the Actions
column in the table has no visual purpose.

**Independent Test**: Navigate to `/products`. Click "Edit" on any product row.
The slide-over opens with the product's name, category, price, and stock pre-filled.

**Acceptance Scenarios**:

1. **Given** the products table is visible, **When** the user clicks "Edit" on a row,
   **Then** the slide-over opens with that product's data pre-filled.
2. **Given** the slide-over is pre-filled, **When** the user views the Name field,
   **Then** it contains the product name from that row.
3. **Given** the pre-filled slide-over, **When** the user clicks "Save product",
   **Then** the panel closes (mock — no data change).

---

### User Story 3 — Stock Adjustment on Inventory Page (Priority: P1)

A merchant on the Inventory page clicks "Adjust stock" on any product row. A slide-over
opens with: the product name (read-only), current stock level displayed prominently,
an Adjustment Type selector (Add stock / Remove stock / Set exact), a Quantity input,
a Reason dropdown (Restock · Damaged · Sold · Correction · Other), and a Note text
field. Clicking "Apply adjustment" closes the panel (mock). A read-only stock history
log below the table shows the last 5 mock adjustments.

**Why this priority**: Stock adjustment is the primary action on the Inventory page.
Without it, the inventory table is read-only with no purpose.

**Independent Test**: Navigate to `/inventory`. Click "Adjust stock" on any row.
A slide-over opens with current stock, adjustment type, quantity, reason, and note
fields. "Apply adjustment" closes it. Stock history is visible below the table.

**Acceptance Scenarios**:

1. **Given** the user is on `/inventory`, **When** they click "Adjust stock",
   **Then** a slide-over opens showing the product name and current stock level.
2. **Given** the slide-over is open, **When** the user views the Adjustment Type,
   **Then** three options are available: Add stock, Remove stock, Set exact.
3. **Given** the slide-over is open, **When** the user clicks "Apply adjustment",
   **Then** the panel closes (mock).
4. **Given** the user is on `/inventory`, **When** they scroll below the main table,
   **Then** a stock history log shows at least 5 mock adjustment entries.

---

### User Story 4 — Customer Slide-over + Detail View (Priority: P1)

A merchant on the Customers page clicks "View" on any customer row. A slide-over panel
opens showing: customer name (large heading), contact info (phone, email), segment
badge, total spent, total orders, and a mini purchase history list (last 3 orders with
date, items, amount). A "View full profile →" link appears at the bottom of the
slide-over — clicking it navigates to a dedicated customer detail page at
`/customers/[id]` showing the same info in a full-page layout with an expanded orders
history table (5 mock orders).

**Why this priority**: Customer details are frequently accessed in commerce operations.
The slide-over provides quick lookup without leaving the list; the full profile handles
deeper review.

**Independent Test**: Navigate to `/customers`. Click "View" on any customer row.
A slide-over opens with contact info, segment badge, spend, and 3 recent orders.
Clicking "View full profile →" navigates to `/customers/[id]`. The detail page renders
with a full orders history table.

**Acceptance Scenarios**:

1. **Given** the user clicks "View" on a customer row, **When** the slide-over opens,
   **Then** the customer's name, phone, email, segment badge, total spent, and order
   count are all visible.
2. **Given** the slide-over is open, **When** the user views the purchase history,
   **Then** at least 3 recent orders are listed with date, item count, and amount.
3. **Given** the user clicks "View full profile →", **When** navigation occurs,
   **Then** they land on `/customers/[id]` with a full-page layout.
4. **Given** the user is on `/customers/[id]`, **When** the page loads, **Then**
   a table of at least 5 mock orders is visible.
5. **Given** the user is on `/customers/[id]`, **When** they click "← Back to customers",
   **Then** they return to `/customers`.

---

### User Story 5 — Order Detail Side Panel (Priority: P1)

A merchant on the Orders page clicks any order row. A detail panel appears to the right
of the table (on desktop) or slides in from the right (on mobile). The panel shows:
order ID, date and time, status badge, customer name, list of items ordered (name ×
qty → line total), subtotal, discount (if any), total, payment method badge, and a
"Print receipt" button (disabled). On mobile the panel is a full-screen slide-over.

**Why this priority**: Order detail is accessed constantly in day-to-day operations —
refunds, reprints, customer queries. Without a detail view, the orders table is
read-only and useless for operators.

**Independent Test**: Navigate to `/orders`. Click any order row. On desktop: a detail
panel appears to the right; the table shrinks. On mobile: a slide-over opens. The panel
shows order ID, customer, items, total, and payment method. "Print receipt" button is
present but disabled.

**Acceptance Scenarios**:

1. **Given** the user clicks an order row, **When** the detail panel opens, **Then**
   the order ID, date, customer name, and status badge are visible.
2. **Given** the detail panel is open, **When** the user views the items list, **Then**
   each line shows product name, quantity, unit price, and line total.
3. **Given** the detail panel is open, **When** the user views the footer, **Then**
   subtotal, discount (if applicable), grand total, and payment method are shown.
4. **Given** the user is on mobile (375px), **When** they click an order row, **Then**
   the detail appears as a full-screen slide-over.
5. **Given** the detail panel is open, **When** the user clicks ×, **Then** the panel
   closes and the full orders table is visible.

---

### User Story 6 — Reports — Period Filters + Enhanced Charts (Priority: P2)

The Reports page is upgraded with period filter tabs (Today / This Week / This Month)
that visually switch between mock data sets, an enhanced sales chart with two data
series (this period vs last period rendered as grouped bars), a donut chart for revenue
by category, and a top-products table ranked by units sold. The filter tabs are
interactive (client-side state switch, no API call) — clicking a tab updates the stat
cards and charts to show different mock numbers.

**Why this priority**: Reports without interactive filters feel like a static mockup.
Period switching with visual chart changes demonstrates the intended UX for demo and
investor review purposes.

**Independent Test**: Navigate to `/reports`. Three tabs are visible: Today, This Week,
This Month. Clicking each tab updates the stat cards to different mock values. The bar
chart re-renders with the selected period's data. The category donut is visible. The
top-products table is visible.

**Acceptance Scenarios**:

1. **Given** the user is on `/reports`, **When** the page loads, **Then** three period
   tabs are visible: Today, This Week, This Month (This Week active by default).
2. **Given** the tabs are visible, **When** the user clicks "Today", **Then** the stat
   cards update to today's mock values (lower numbers than weekly).
3. **Given** the tabs are visible, **When** the user clicks "This Month", **Then** the
   stat cards update to monthly mock values (higher numbers than weekly).
4. **Given** the bar chart is visible, **When** the period changes, **Then** the bar
   heights visually change to reflect the selected period's data.
5. **Given** the page is on desktop, **When** the user views the layout, **Then** the
   stat cards, bar chart, donut chart, and top-products table are all visible without
   scrolling (above the fold at 1280px).

---

### User Story 7 — Empty States on All Commerce Pages (Priority: P2)

When a commerce page has no data to show (simulated by a toggle or a dedicated empty
state route), a friendly illustrated empty state is displayed instead of an empty table.
Each page has its own contextual message and a primary CTA button. The empty state is
always visible on a dedicated route variant (`?empty=true` query param) for demo
purposes.

**Why this priority**: Empty states are critical for first-time user experience. A blank
table is confusing; a guided empty state converts confusion into action.

**Independent Test**: Navigate to `/products?empty=true`. An illustrated empty state
is shown with "No products yet" heading, a subtext, and an "Add product" button that
opens the slide-over. Repeat for `/orders?empty=true`, `/customers?empty=true`,
`/inventory?empty=true`, `/reports?empty=true`.

**Acceptance Scenarios**:

1. **Given** the user navigates to `/products?empty=true`, **When** the page loads,
   **Then** an empty state with "No products yet" heading and "Add product" CTA is shown.
2. **Given** the user navigates to `/orders?empty=true`, **When** the page loads,
   **Then** an empty state with "No orders yet" heading and "Open POS" CTA is shown.
3. **Given** the user navigates to `/customers?empty=true`, **When** the page loads,
   **Then** an empty state with "No customers yet" heading and "Add customer" CTA is shown.
4. **Given** the user navigates to `/inventory?empty=true`, **When** the page loads,
   **Then** an empty state with "Add products first" heading is shown.
5. **Given** the user navigates to `/reports?empty=true`, **When** the page loads,
   **Then** an empty state with "No data yet — make your first sale" heading is shown.
6. **Given** any empty state CTA button is clicked, **When** the action fires, **Then**
   the relevant slide-over opens or navigation occurs as appropriate.

---

## Edge Cases

- **Slide-over with long content**: If the form inside a slide-over is taller than the
  viewport, the slide-over body scrolls independently while the header and footer remain
  fixed.
- **Escape key with nested modals**: If a confirmation modal is open inside a slide-over,
  Escape closes the modal first, then a second Escape closes the slide-over.
- **Mobile slide-over + virtual keyboard**: On mobile, opening a form slide-over and
  focusing an input should not cause layout shift — the slide-over must not be `position: fixed`
  at a height that conflicts with the virtual keyboard.
- **Empty state + query param on refresh**: If the user refreshes `/products?empty=true`,
  the empty state is still shown — the query param drives the state, not sessionStorage.
- **Customer detail page with unknown ID**: `/customers/unknown-id` renders with the
  first mock customer's data as a fallback — no 404 in the UI phase.
- **Order detail on very narrow mobile**: At 320px, the order items list wraps
  gracefully — line totals do not overflow the panel boundary.

---

## Requirements *(mandatory)*

### Functional Requirements

**Products:**
- **FR-001**: `/products` MUST have a functional "Add product" button that opens a slide-over.
- **FR-002**: The Add Product slide-over MUST contain fields: Name, SKU, Category, Price, Cost, Stock, Unit, Description, Status.
- **FR-003**: Each product row MUST have an "Edit" action that opens the slide-over pre-filled.
- **FR-004**: The slide-over MUST close on ×, Escape, and "Save product" click.

**Inventory:**
- **FR-005**: `/inventory` MUST have an "Adjust stock" button per row that opens a slide-over.
- **FR-006**: The Stock Adjustment slide-over MUST include: product name, current stock, Adjustment Type (3 options), Quantity input, Reason dropdown, Note field.
- **FR-007**: `/inventory` MUST display a stock history log with at least 5 mock entries below the table.

**Customers:**
- **FR-008**: `/customers` MUST have a "View" action per row that opens a slide-over.
- **FR-009**: The Customer slide-over MUST display: name, phone, email, segment badge, total spent, order count, last 3 orders.
- **FR-010**: The slide-over MUST include a "View full profile →" link navigating to `/customers/[id]`.
- **FR-011**: `/customers/[id]` MUST be a valid route rendering a full-page customer profile with a 5-order history table.
- **FR-012**: `/customers/[id]` MUST include a "← Back to customers" navigation link.

**Orders:**
- **FR-013**: `/orders` MUST have clickable rows that open an order detail panel.
- **FR-014**: The Order detail panel MUST display: order ID, date, status badge, customer name, items list, subtotal, total, payment method.
- **FR-015**: Each item in the detail panel MUST show: product name, quantity, unit price, line total.
- **FR-016**: The detail panel MUST have a × close button.
- **FR-017**: On mobile (≤768px) the detail panel MUST render as a full-screen slide-over.

**Reports:**
- **FR-018**: `/reports` MUST have three period filter tabs: Today, This Week (default), This Month.
- **FR-019**: Clicking a period tab MUST update the stat card values to period-specific mock data.
- **FR-020**: The bar chart MUST visually reflect the selected period's data.
- **FR-021**: A revenue-by-category visual (donut or horizontal bar) MUST be present.
- **FR-022**: A top-products table ranked by units sold MUST be present.

**Empty States:**
- **FR-023**: All five pages MUST display an empty state when the `?empty=true` query param is present.
- **FR-024**: Each empty state MUST include: an icon, a heading, a subtext, and a primary CTA button.
- **FR-025**: Empty state CTAs MUST trigger the relevant action (open slide-over or navigate to POS).

**Cross-cutting:**
- **FR-026**: All slide-overs MUST use CSS transition for open/close animation (no external animation library).
- **FR-027**: No new npm packages may be introduced.
- **FR-028**: No cross-app imports. All changes scoped to `apps/shops-app`.
- **FR-029**: All inputs and buttons inside slide-overs are visually interactive but mock — no data persistence.
- **FR-030**: All pages MUST remain responsive at 375px with no horizontal overflow.

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Clicking "Add product" on `/products` opens a slide-over within 300ms.
- **SC-002**: All 5 slide-overs/panels close when × is clicked or Escape is pressed.
- **SC-003**: `/customers/[id]` renders as a valid Next.js route with no 404.
- **SC-004**: Clicking a period tab on `/reports` updates at least 2 stat card values.
- **SC-005**: `/products?empty=true` renders an empty state — no data table visible.
- **SC-006**: `pnpm lint` in `apps/shops-app` exits with zero errors.
- **SC-007**: `pnpm tsc --noEmit` in `apps/shops-app` exits with zero errors.
- **SC-008**: `pnpm --filter shops-app build` exits with zero errors.
- **SC-009**: All 5 pages render at 375px without horizontal scrollbar.

---

## Assumptions

- The existing route files for `/products`, `/inventory`, `/customers`, `/orders`,
  `/reports` are already in place from specs 017–018. This feature modifies them.
- The `@nexoraxs/ui` package (from spec 032) is available — `Icon`, `Badge`, `Button`,
  `Input`, `Card` can all be imported from `@nexoraxs/ui`.
- The `apps/shops-app/lib/mock-data/products.ts` file exists (from spec 031) and can
  be reused as the product mock data source for the Products and Inventory pages.
- `apps/shops-app/lib/mode.ts` helpers (`getBranch`, `getCurrency`) are available for
  the Settings context in slide-overs.
- No new route groups are needed — all new routes (`/customers/[id]`) fit inside the
  existing `(app)` route group which wraps content in the Sidebar + Topbar layout.
- The `/inventory` route file exists; if not, it must be created as a new page file
  under `app/(app)/inventory/page.tsx`.
- Charts are implemented with CSS-only (div bars) or inline SVG — no canvas, no
  Recharts, no Chart.js, no external charting dependency.
- The `?empty=true` query param is read via `useSearchParams()` (Client Component) —
  pages that currently render as Server Components must be converted to Client Components
  only if they need to read the query param.
- The customer detail page at `/customers/[id]` uses a hardcoded mock customer array
  indexed by ID string — unknown IDs fall back to the first mock customer.
- The `Inventory` page may not exist yet in the current codebase — this feature creates
  it if missing, with a full mock stock table and the Adjust Stock slide-over.
