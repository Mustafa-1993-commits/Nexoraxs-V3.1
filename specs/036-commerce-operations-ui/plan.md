# Implementation Plan: Commerce Operations UI — Slide-overs, Detail Pages, Charts & Empty States

**Branch**: `036-commerce-operations-ui` | **Date**: 2026-05-19 | **Spec**: [spec.md](spec.md)

---

## Summary

Upgrade all five Commerce OS operations pages with their full UI as defined in the UX
Master Plan. Five deliverables:

1. **Products** — Add/Edit slide-over panel
2. **Inventory** — Stock Adjustment slide-over + history log
3. **Customers** — View slide-over + `/customers/[id]` detail page
4. **Orders** — Clickable row → detail side panel
5. **Reports** — Period filter tabs + enhanced CSS charts
6. **Empty States** — `?empty=true` variant on all five pages

All changes are confined to `apps/shops-app`. No new npm packages. No backend calls.
All interactions are mock-only (panels open/close; forms render but do not persist).

---

## Constitution Check

| Principle | Status | Notes |
|-----------|--------|-------|
| I — Modular Monolith | ✅ PASS | All changes inside `apps/shops-app` |
| II — Multi-Tenant Isolation | ✅ N/A | No database — mock only |
| III — App Boundary Enforcement | ✅ PASS | Imports only from `@nexoraxs/ui` and within `apps/shops-app` |
| IV — Type Safety | ✅ PASS | Strict mode; all slide-over state typed; no `any` |
| V — SDK-First API Access | ✅ N/A | No API calls |
| VI — Spec-Driven Development | ✅ PASS | Spec written first |

**Gate result: PASS**

---

## Technical Context

**Language/Version**: TypeScript 5.x, strict mode
**Framework**: Next.js 16.x App Router, React 19.x
**UI**: TailwindCSS 4.x + `@nexoraxs/ui` (Icon, Badge, Button, Input, Card)
**State**: `useState` for slide-over open/close and selected item; `useSearchParams`
for `?empty=true`; `useSearchParams` + `useState` for period filter tabs
**Storage**: None — all mock, no persistence
**New routes**: `/customers/[id]` (dynamic segment inside existing `(app)` group)
**Constraints**: No new npm packages; no canvas; no Recharts/Chart.js; no external
animation library — CSS `transition` only

---

## Project Structure

### Documentation

```
specs/036-commerce-operations-ui/
├── spec.md          ✅ written
├── plan.md          ← this file
├── research.md
├── data-model.md
├── quickstart.md
└── tasks.md
```

### Source Code — Files Created / Modified

```
apps/shops-app/
│
├── app/(app)/
│   ├── products/
│   │   └── page.tsx              MODIFY — "use client"; add slide-over state;
│   │                             add Add/Edit slide-over; add empty state
│   │
│   ├── inventory/
│   │   └── page.tsx              CREATE (if missing) or MODIFY — "use client";
│   │                             stock table + Adjust Stock slide-over + history log;
│   │                             add empty state
│   │
│   ├── customers/
│   │   ├── page.tsx              MODIFY — "use client"; add View slide-over;
│   │   │                         add empty state
│   │   └── [id]/
│   │       └── page.tsx          CREATE — customer detail page
│   │
│   ├── orders/
│   │   └── page.tsx              MODIFY — "use client"; clickable rows;
│   │                             detail side panel; add empty state
│   │
│   └── reports/
│       └── page.tsx              MODIFY — "use client"; period tabs;
│                                 enhanced charts; donut; top-products; empty state
│
└── components/
    └── operations/               NEW directory
        ├── SlideOver.tsx         NEW — generic slide-over shell
        ├── ProductSlideOver.tsx  NEW — Add/Edit product form
        ├── StockAdjustSlideOver.tsx  NEW — stock adjustment form
        ├── CustomerSlideOver.tsx NEW — customer quick-view
        └── OrderDetailPanel.tsx  NEW — order detail (panel + slide-over)
```

---

## Component Design Decisions

### SlideOver (generic shell)

Reusable wrapper used by all slide-over variants. Props:
```typescript
interface SlideOverProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  width?: "md" | "lg"; // default "md" = max-w-md, "lg" = max-w-lg
}
```

- Backdrop: `fixed inset-0 bg-black/50 z-40` — click closes the panel
- Panel: `fixed inset-y-0 right-0 z-50 flex flex-col bg-[#0f0f17] border-l border-white/10`
- Width: `w-full md:max-w-md` (or `md:max-w-lg` for the product form)
- Animation: `transition-transform duration-300 ease-in-out` +
  `translate-x-full` (closed) → `translate-x-0` (open)
- Header: sticky, contains title + × button
- Body: `flex-1 overflow-y-auto p-5`
- Footer: sticky, contains action buttons

Escape key listener via `useEffect` — calls `onClose` when `open === true`.

### Form Fields in Slide-overs

All inputs use the `<Input>` component from `@nexoraxs/ui`. All selects use inline
Tailwind styling consistent with the existing dark theme (border-white/10,
bg-white/5). No form library — uncontrolled inputs or light `useState` per field.
No validation beyond HTML `required` attribute (not enforced on mock save).

### Reports — Period Data Architecture

Three mock datasets (today, week, month) defined as constants in the page file:
```typescript
const PERIOD_DATA = {
  today: { revenue: "EGP 12,840", orders: "94", customers: "11", avgTicket: "EGP 137" },
  week:  { revenue: "EGP 168,420", orders: "1,284", customers: "86", avgTicket: "EGP 755" },
  month: { revenue: "EGP 724,100", orders: "5,210", customers: "341", avgTicket: "EGP 810" },
} as const;
```

Bar chart: `weekData`, `todayData`, `monthData` arrays — each 7 bars (Mon–Sun) or
24 bars (hours for today) or 4 bars (Week 1–4 for month). Period tab switch updates
the active dataset via `useState`.

Category donut: CSS-only — a `conic-gradient` circle (no canvas). Three segments:
Beverages (48%), Food (33%), Bakery (19%). Label overlaid as absolute-positioned text.

### Order Detail Panel

On desktop (≥768px): two-column layout — orders table left (flex-shrink), detail
panel right (fixed width 360px). Clicking a row sets `selectedOrder` state. Panel
slides in with `transition-transform` from the right.

On mobile (<768px): full-screen slide-over using the generic `SlideOver` component.

### Customer Detail Page (`/customers/[id]`)

Static page — the `[id]` param is ignored in the mock; the page always renders the
first mock customer. This matches the spec assumption for the UI phase. In Phase 3
(real data), the ID will route to the correct customer.

Mock orders table on the detail page: 5 rows with full order detail columns.

### Empty State Component (inline, not extracted)

Each page defines its own empty state JSX inline (not a shared component) — the
message and CTA vary per page. Pattern:

```tsx
if (showEmpty) return (
  <div className="flex flex-col items-center justify-center py-32 text-center">
    <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 p-5">
      <Icon name="package" className="h-10 w-10 text-white/20" />
    </div>
    <h2 className="text-xl font-semibold text-white">No products yet</h2>
    <p className="mt-2 text-sm text-white/40 max-w-xs">
      Add your first product to start selling
    </p>
    <button onClick={() => setSlideOverOpen(true)}
      className="mt-6 btn-primary px-5 py-2.5 text-sm">
      Add product
    </button>
  </div>
);
```

`showEmpty` is derived from `useSearchParams().get("empty") === "true"`.

---

## Mock Data

### Products (reuse from `lib/mock-data/products.ts` — spec 031)

Products page and Inventory page both import `MOCK_PRODUCTS` from the existing
`apps/shops-app/lib/mock-data/products.ts`. No duplication.

### Customers (inline in `customers/page.tsx`)

```typescript
const MOCK_CUSTOMERS = [
  { id: "c1", name: "Aya Hassan",    phone: "+20 100 123 4567", email: "aya@example.com",
    segment: "VIP",     spend: "EGP 18,420", orders: 47, lastOrder: "3 Jan 2026" },
  { id: "c2", name: "Omar Khaled",   phone: "+20 111 234 5678", email: "omar@example.com",
    segment: "Regular", spend: "EGP 7,610",  orders: 21, lastOrder: "2 Jan 2026" },
  { id: "c3", name: "Layla Nasser",  phone: "+20 122 345 6789", email: "layla@example.com",
    segment: "New",     spend: "EGP 540",    orders: 2,  lastOrder: "2 Jan 2026" },
  { id: "c4", name: "Ahmed Samy",    phone: "+20 100 456 7890", email: "ahmed@example.com",
    segment: "Regular", spend: "EGP 4,320",  orders: 14, lastOrder: "1 Jan 2026" },
  { id: "c5", name: "Mariam Hassan", phone: "+20 111 567 8901", email: "mariam@example.com",
    segment: "VIP",     spend: "EGP 22,100", orders: 58, lastOrder: "30 Dec 2025" },
] as const;
```

### Orders (inline in `orders/page.tsx`)

Reuse the existing 6 mock orders already on the page. Add line-item detail per order:
```typescript
type OrderItem = { name: string; qty: number; unitPrice: string; lineTotal: string };
```
Each order gets 2–3 mock items for the detail panel.

### Stock History (inline in `inventory/page.tsx`)

```typescript
const MOCK_STOCK_HISTORY = [
  { date: "3 Jan 2026 14:22", product: "Espresso Beans 1kg", type: "Restock",   qty: "+50", note: "Weekly restock",    user: "Mustafa" },
  { date: "3 Jan 2026 11:08", product: "Oat Milk Carton",    type: "Restock",   qty: "+24", note: "New supplier order", user: "Sara"    },
  { date: "2 Jan 2026 19:45", product: "Cold Brew",          type: "Damaged",   qty: "-3",  note: "Broken bottles",    user: "Ahmed"   },
  { date: "2 Jan 2026 10:12", product: "Iced Latte",         type: "Correction", qty: "+8", note: "Count correction",  user: "Mustafa" },
  { date: "1 Jan 2026 16:30", product: "Croissant",          type: "Sold",      qty: "-12", note: "End-of-day close",  user: "Omar"    },
] as const;
```

---

## Implementation Order

Pages are independent — can be implemented in any order. Recommended sequence:

1. **SlideOver.tsx** (generic shell) — blocks all slide-over work
2. **Products** — highest visibility, most reviewed page
3. **Inventory** — reuses products mock data
4. **Orders** — detail panel (no new slide-over component needed)
5. **Customers** — slide-over + new dynamic route
6. **Reports** — period tabs + charts (independent of slide-overs)

All empty states added at the same time as each page (same `"use client"` conversion).
