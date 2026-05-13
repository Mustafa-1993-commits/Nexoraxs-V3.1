# Research: Shops Operations QA

**Feature**: 018-shops-operations-qa
**Date**: 2026-05-14

Static code audit of the 017 implementation across all five pages.

---

## Issue 1 (CONFIRMED BUG — FR-006): Reports bar chart — missing height reference on bar wrapper

**File**: `apps/shops-app/app/(app)/reports/page.tsx`, bar chart section

**Observed structure**:
```jsx
<div className="mt-4 flex h-44 items-end gap-2">     {/* 176px container */}
  <div className="flex flex-1 flex-col items-center gap-1.5">   {/* column — auto height */}
    <div className="flex w-full items-end">                      {/* wrapper — auto height */}
      <div className="w-full rounded-t bg-blue-500/70"
           style={{ height: `${day.pct}%` }} />                 {/* bar — 45% of... what? */}
    </div>
    <span>Mon</span>
  </div>
</div>
```

**Root cause**: `height: X%` on the bar div requires its containing block to have a definite height. The bar wrapper `div` has `height: auto` (no explicit height). In CSS, a percentage height against an auto parent resolves to `height: auto`, which means 0 for an element with no content. Result: all bars have 0 height.

**Comparison with dashboard chart** (which works):
```jsx
<div className="flex h-44 items-end gap-1.5">
  <div className="flex flex-1 flex-col items-center">
    <div className="flex w-full items-end gap-0.5" style={{ height: "100%" }}>  {/* <-- this */}
      <div style={{ height: `${v}%` }} />
    </div>
  </div>
</div>
```

The dashboard adds `style={{ height: "100%" }}` to the bar wrapper. In Chrome's Flexbox implementation, when a flex item has `height: 100%` and the flex container has a definite cross-axis size (`h-44` = 176px), Chrome resolves 100% against the flex container's height. This is not strictly spec-required but is Blink's rendering behaviour. The bar then renders at `X%` of 176px.

**Decision**: Apply the same pattern as the dashboard — add `style={{ height: "100%" }}` to the bar wrapper div in the reports page. This is a 1-line change.

**Fix**:
```jsx
<div className="flex w-full items-end" style={{ height: "100%" }}>
  <div className="w-full rounded-t bg-blue-500/70" style={{ height: `${day.pct}%` }} />
</div>
```

---

## Issue 2 (CONFIRMED ISSUE — FR-004): Customer card text — no truncation at narrow widths

**File**: `apps/shops-app/app/(app)/customers/page.tsx`

**Observed structure**:
```jsx
<div className="card flex items-center gap-4 p-4">
  <div>   {/* avatar — 40px fixed */}
  <div className="min-w-0 flex-1">
    <div className="text-sm font-semibold text-white">{customer.name}</div>     {/* no truncate */}
    <div className="text-xs text-gray-500">{customer.contact}</div>             {/* no truncate */}
    <div className="text-xs text-gray-400">Last order: {customer.lastOrder}</div>  {/* no truncate */}
  </div>
  <div className="flex-shrink-0">{customer.spend}</div>
  <div className="flex flex-wrap">{badges}</div>
```

**Analysis at 375px**: With 16px padding on each side, available width = 343px. Content:
- Avatar: 40px
- Gap: 16px
- Spend column (flex-shrink-0): ~90px ("EGP 22,100")
- Gap: 16px
- Badges column: ~50px ("VIP")
- Gap: 16px
- Name column (flex-1 min-w-0): 343 - 40 - 16 - 90 - 16 - 50 - 16 = **115px**

"Mariam Hassan" at 14px font ≈ 108px — fits in 115px, just barely. "mariam@example.com" at 12px font ≈ 130px — does NOT fit in 115px.

**Decision**: Add `truncate` class to name, contact, and lastOrder text elements. The `min-w-0` is already present on the parent (`min-w-0 flex-1`), which is required for `truncate` to work inside a flex container. This is a CSS-only fix — no structural changes.

**Fix**: Add `className="... truncate"` to the three text divs in the customer info section.

---

## Issue 3 (PASS): Products table overflow on mobile

**File**: `apps/shops-app/app/(app)/products/page.tsx`

**Observed**: `<div className="card overflow-hidden"> <div className="overflow-x-auto">` wraps the table. The `overflow-x-auto` container scrolls the table horizontally. The `overflow-hidden` on the card prevents bleed. ✅ No action.

---

## Issue 4 (PASS): Orders table overflow on mobile + grid stack

**File**: `apps/shops-app/app/(app)/orders/page.tsx`

**Observed**: Table wrapper has `overflow-x-auto`. The grid uses `lg:grid-cols-3`, which stacks single-column at 375px. Orders table renders full-width, detail panel appears below. ✅ No action.

---

## Issue 5 (PASS): All interactive controls disabled

**Files**: All 5 pages

**Observed**:
- `/products`: Search input has `disabled`. "Add product" button has `disabled`.
- `/settings`: "Save changes" button has `disabled`. "Invite member" button has `disabled`. "Edit" chip has `cursor-not-allowed`.
- Advanced toggles: Static `span` elements — no `onClick`, no state.
- All action buttons on orders, customers pages: No `onClick` handlers beyond visual demo buttons that use `disabled`.

✅ No action.

---

## Issue 6 (PASS): No localhost or external URLs

**Grep result**: Zero matches across all 5 page files. ✅ No action.

---

## Issue 7 (PASS): Badge color consistency

**Products**: Active→emerald, Low Stock→amber, Draft→gray (via `statusColor` map)
**Orders**: Paid→emerald, Refund→rose, Pending→amber (via `statusColor` map)
**Customers**: VIP→purple, Regular→blue, New→emerald (via `segmentColor` map)
**Settings**: Active badge→emerald, placeholder→gray

No contradictions across pages. ✅ No action.

---

## Issue 8 (PASS): Mock data labels visible

All 5 pages have at minimum one amber mono annotation or `"// chip"` label in the header section, visible on first load without scrolling. ✅ No action.

---

## Issue 9 (PASS): Sidebar active state

The Sidebar uses `usePathname()` and compares `pathname === item.href`. Routes: `/dashboard`, `/products`, `/orders`, `/customers`, `/reports`, `/settings`. All five pages have matching nav items in the Sidebar operations array. ✅ No action.

---

## Fix Summary

| # | Issue | Status | File | Fix |
|---|-------|--------|------|-----|
| 1 | Bar chart bars — 0px height | **FIX** | `reports/page.tsx` | Add `style={{ height: "100%" }}` to bar wrapper |
| 2 | Customer text truncation at 375px | **FIX** | `customers/page.tsx` | Add `truncate` to name, contact, lastOrder divs |
| 3–9 | All other areas | **PASS** | — | No action |

Total: **2 files to modify**, **0 new files**.
