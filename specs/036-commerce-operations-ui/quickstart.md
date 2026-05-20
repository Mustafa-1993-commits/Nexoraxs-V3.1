# Quickstart: Commerce Operations UI

**Branch**: `036-commerce-operations-ui` | **Date**: 2026-05-19

---

## Prerequisites

- `pnpm --filter shops-app dev` running on `http://localhost:3002`
- Onboarding completed (`shops_onboarding_done = "true"` in sessionStorage)
- Open DevTools → Application → Session Storage to confirm

---

## Verification Scenarios

### Scenario 1 — Products Slide-over

1. Navigate to `http://localhost:3002/products`
2. Click **"Add product"** → slide-over opens from right ✅
3. Verify all fields visible: Name, SKU (+ Generate button), Category, Price, Cost, Stock, Unit, Description, Status ✅
4. Press **Escape** → slide-over closes ✅
5. Click **"Edit"** on any product row → slide-over opens pre-filled with product name + category ✅
6. Click **"Save product"** → slide-over closes ✅

### Scenario 2 — Products Empty State

1. Navigate to `http://localhost:3002/products?empty=true`
2. Verify: no table visible, empty state icon + "No products yet" heading + "Add product" button ✅
3. Click "Add product" in empty state → slide-over opens ✅

### Scenario 3 — Inventory Stock Adjustment

1. Navigate to `http://localhost:3002/inventory`
2. Verify: stock table with Product, Category, Current Stock, Min Stock, Status, Actions columns ✅
3. Click **"Adjust stock"** on any row → slide-over opens ✅
4. Verify: product name + current stock displayed prominently ✅
5. Verify: 3 adjustment type buttons, quantity input, reason dropdown, note field ✅
6. Click **"Apply adjustment"** → slide-over closes ✅
7. Scroll below table → stock history log visible with 5 entries ✅
8. Navigate to `http://localhost:3002/inventory?empty=true` → empty state visible ✅

### Scenario 4 — Customer Slide-over + Detail Page

1. Navigate to `http://localhost:3002/customers`
2. Click **"View"** on any customer row → slide-over opens ✅
3. Verify: avatar initials, name, segment badge, phone, email, total spent, order count, 3 recent orders ✅
4. Click **"View full profile →"** → navigates to `/customers/c1` (or similar) ✅
5. On detail page: verify back link, customer header, 5-order history table ✅
6. Click **"← Back to customers"** → returns to `/customers` ✅
7. Navigate to `http://localhost:3002/customers?empty=true` → empty state ✅

### Scenario 5 — Orders Detail Panel

1. Navigate to `http://localhost:3002/orders`
2. Click any order row → detail panel appears on right (desktop) ✅
3. Verify: order ID, date, status badge, customer name, items list, total, payment badge ✅
4. Click **×** on panel → table returns to full width ✅
5. Resize to 375px → click order row → full-screen slide-over appears ✅
6. Navigate to `http://localhost:3002/orders?empty=true` → empty state ✅

### Scenario 6 — Reports Period Tabs

1. Navigate to `http://localhost:3002/reports`
2. Verify: three tabs visible — Today, This Week (active), This Month ✅
3. Click **"Today"** → stat card values change to lower numbers ✅
4. Click **"This Month"** → stat card values change to higher numbers ✅
5. Verify: bar chart heights change when switching periods ✅
6. Verify: category donut chart visible (3 colour segments) ✅
7. Verify: top 5 products table visible below donut ✅
8. Navigate to `http://localhost:3002/reports?empty=true` → empty state ✅

### Scenario 7 — Mobile Responsive (375px)

1. Set DevTools device to 375px width
2. Open each slide-over → full screen width, no horizontal overflow ✅
3. `/orders` at 375px → clicking a row opens slide-over (not side panel) ✅
4. `/reports` at 375px → stat cards stack, bar chart fits in container ✅

---

## Build Gate

After all scenarios pass:

```bash
# From repo root
pnpm --filter shops-app lint     # must exit 0
pnpm tsc --noEmit                # in apps/shops-app, must exit 0
pnpm --filter shops-app build    # must exit 0
```

Confirm all routes in build output:
- `/products`
- `/inventory`
- `/orders`
- `/customers`
- `/customers/[id]`
- `/reports`

---

## Git Commit

```bash
git add \
  specs/036-commerce-operations-ui/ \
  apps/shops-app/components/operations/ \
  apps/shops-app/app/\(app\)/products/page.tsx \
  apps/shops-app/app/\(app\)/inventory/page.tsx \
  apps/shops-app/app/\(app\)/customers/page.tsx \
  apps/shops-app/app/\(app\)/customers/\[id\]/page.tsx \
  apps/shops-app/app/\(app\)/orders/page.tsx \
  apps/shops-app/app/\(app\)/reports/page.tsx \
  AGENTS.md

git commit -m "feat(shops-app): commerce operations UI — slide-overs, order detail, report charts, empty states"
```
