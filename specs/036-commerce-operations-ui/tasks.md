# Tasks: Commerce Operations UI — Slide-overs, Detail Pages, Charts & Empty States

**Branch**: `036-commerce-operations-ui`
**App**: `apps/shops-app`
**Input**: Design documents from `specs/036-commerce-operations-ui/`
**Prerequisites**: spec.md ✅ | plan.md ✅

**Tests**: Not requested — manual browser verification per quickstart.md.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependency)
- **[Story]**: US1=Products, US2=EditProduct, US3=Inventory, US4=Customers,
  US5=Orders, US6=Reports, US7=EmptyStates

---

## Phase 1: Setup — Generic SlideOver Component

**Purpose**: Build the reusable slide-over shell that all page-specific panels depend on.
All user story phases that use a slide-over block on this phase.

⚠️ **CRITICAL**: T001 must complete before T004, T006, T008, T011.

- [x] T001 Create `apps/shops-app/components/operations/SlideOver.tsx` —
  `"use client"` directive at top; define props interface:
  ```typescript
  interface SlideOverProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    width?: "md" | "lg";
  }
  ```
  Implementation:
  - Backdrop: `<div className="fixed inset-0 bg-black/60 z-40 transition-opacity" onClick={onClose}>`
    — render only when `open` (conditional render or opacity-0 pointer-events-none)
  - Panel: `<div className={`fixed inset-y-0 right-0 z-50 flex flex-col bg-[#0d0d14] border-l border-white/10 transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"} w-full ${width === "lg" ? "md:max-w-lg" : "md:max-w-md"}`}>`
  - Header: `<div className="flex items-center justify-between border-b border-white/10 px-5 py-4 flex-shrink-0">` containing `<h2 className="text-base font-semibold text-white">{title}</h2>` and × button importing `<Icon name="x" className="h-5 w-5 text-white/50 hover:text-white" />` from `@nexoraxs/ui`
  - Body: `<div className="flex-1 overflow-y-auto p-5">{children}</div>`
  - Footer: `{footer && <div className="border-t border-white/10 px-5 py-4 flex-shrink-0">{footer}</div>}`
  - Escape key: `useEffect(() => { const handler = (e: KeyboardEvent) => { if (e.key === "Escape" && open) onClose(); }; window.addEventListener("keydown", handler); return () => window.removeEventListener("keydown", handler); }, [open, onClose]);`
  - Export: `export default SlideOver`

**Checkpoint**: `SlideOver` component file created and compiles — import it in a temporary
test to confirm TypeScript resolves with zero errors.

---

## Phase 2: Products Page — Add/Edit Slide-over + Empty State (US1 + US2 + US7)

**Purpose**: Upgrade `/products` with a functional slide-over panel and empty state.

⚠️ Depends on T001 (SlideOver.tsx must exist).

- [x] T002 [US1] Convert `apps/shops-app/app/(app)/products/page.tsx` to Client Component —
  add `"use client"` directive at top; add imports:
  ```typescript
  import { useState } from "react";
  import { useSearchParams } from "next/navigation";
  import { Icon, Badge } from "@nexoraxs/ui";
  import SlideOver from "@/components/operations/SlideOver";
  import { MOCK_PRODUCTS } from "@/lib/mock-data/products";
  ```
  Add state:
  ```typescript
  const [slideOverOpen, setSlideOverOpen] = useState(false);
  const [editProduct, setEditProduct] = useState<typeof MOCK_PRODUCTS[number] | null>(null);
  const searchParams = useSearchParams();
  const showEmpty = searchParams.get("empty") === "true";
  ```

- [x] T003 [US7] Add empty state to `apps/shops-app/app/(app)/products/page.tsx` —
  immediately after state declarations, before the main return:
  ```tsx
  if (showEmpty) return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
        <Icon name="package" className="h-9 w-9 text-white/25" />
      </div>
      <h2 className="text-xl font-semibold text-white">No products yet</h2>
      <p className="mt-2 max-w-xs text-sm text-white/40">
        Add your first product to start selling on NexoraXS
      </p>
      <button type="button" onClick={() => { setEditProduct(null); setSlideOverOpen(true); }}
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
        <Icon name="plus" className="h-4 w-4" />
        Add product
      </button>
    </div>
  );
  ```

- [x] T004 [US1] Add ProductSlideOver inline in `apps/shops-app/app/(app)/products/page.tsx` —
  define a `ProductForm` component above the page export (same file):
  ```tsx
  function ProductForm({ product }: { product: typeof MOCK_PRODUCTS[number] | null }) {
    return (
      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-white/60">Product name *</label>
          <input type="text" defaultValue={product?.name ?? ""} placeholder="e.g. Iced Latte"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        {/* SKU */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-white/60">SKU</label>
          <div className="flex gap-2">
            <input type="text" defaultValue={product ? `SKU-${product.id.toUpperCase()}` : ""}
              placeholder="Auto-generate"
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-blue-500 focus:outline-none" />
            <button type="button"
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white/50 hover:text-white transition-colors">
              Generate
            </button>
          </div>
        </div>
        {/* Category */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-white/60">Category *</label>
          <select defaultValue={product?.category ?? ""}
            className="w-full rounded-xl border border-white/10 bg-[#0d0d14] px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none">
            <option value="">Select category</option>
            {["Beverages", "Food", "Bakery", "Supplies"].map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        {/* Price + Cost */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-white/60">Price (EGP) *</label>
            <input type="number" defaultValue={product?.price ?? ""}
              placeholder="0.00"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-blue-500 focus:outline-none" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-white/60">Cost (EGP)</label>
            <input type="number" placeholder="0.00"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-blue-500 focus:outline-none" />
          </div>
        </div>
        {/* Stock + Unit */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-white/60">Stock qty *</label>
            <input type="number" defaultValue={product?.stock ?? ""}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-blue-500 focus:outline-none" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-white/60">Unit</label>
            <select className="w-full rounded-xl border border-white/10 bg-[#0d0d14] px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none">
              {["piece", "kg", "litre", "box", "pack"].map(u => <option key={u}>{u}</option>)}
            </select>
          </div>
        </div>
        {/* Description */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-white/60">Description</label>
          <textarea rows={3} placeholder="Optional product description"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-blue-500 focus:outline-none resize-none" />
        </div>
        {/* Status */}
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <span className="text-sm text-white/70">Status</span>
          <div className="flex gap-2">
            {(["Active", "Draft"] as const).map(s => (
              <button key={s} type="button"
                className={`rounded-lg px-3 py-1 text-xs font-medium transition-colors ${
                  (product?.status ?? "Active") === s
                    ? "bg-blue-600 text-white"
                    : "text-white/40 hover:text-white"
                }`}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
  ```
  
  In the main page JSX, add `<SlideOver>` after the table:
  ```tsx
  <SlideOver
    open={slideOverOpen}
    onClose={() => setSlideOverOpen(false)}
    title={editProduct ? "Edit product" : "Add product"}
    width="lg"
    footer={
      <div className="flex gap-3">
        <button type="button" onClick={() => setSlideOverOpen(false)}
          className="flex-1 rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm text-white/60 hover:text-white transition-colors">
          Cancel
        </button>
        <button type="button" onClick={() => setSlideOverOpen(false)}
          className="flex-1 rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
          Save product
        </button>
      </div>
    }
  >
    <ProductForm product={editProduct} />
  </SlideOver>
  ```

- [x] T005 [US1] Update "Add product" button in `apps/shops-app/app/(app)/products/page.tsx` —
  change the existing disabled "Add product" button to:
  ```tsx
  <button type="button" onClick={() => { setEditProduct(null); setSlideOverOpen(true); }}
    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors">
    <Icon name="plus" className="h-4 w-4" />
    Add product
  </button>
  ```

- [x] T006 [US2] Add Edit action to product rows in `apps/shops-app/app/(app)/products/page.tsx` —
  add an Actions column to the products table. Each row gets:
  ```tsx
  <td className="py-3 pr-4 text-right">
    <button type="button"
      onClick={() => { setEditProduct(product); setSlideOverOpen(true); }}
      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50 hover:text-white transition-colors">
      Edit
    </button>
  </td>
  ```
  Add corresponding `<th className="py-3 pr-4 text-right font-mono text-[10px] uppercase tracking-wider text-gray-500">Actions</th>` to the table header.

**Checkpoint**: Navigate to `/products`. Click "Add product" → slide-over opens with empty form.
Click "Edit" on a row → slide-over opens pre-filled. Navigate to `/products?empty=true` → empty state.

---

## Phase 3: Inventory Page — Stock Adjustment Slide-over + History (US3 + US7)

**Purpose**: Create or upgrade `/inventory` with stock adjustment slide-over and history log.

⚠️ Depends on T001 (SlideOver.tsx).

- [x] T007 [US3] Create or rewrite `apps/shops-app/app/(app)/inventory/page.tsx` —
  `"use client"` directive; imports including `SlideOver` from `@/components/operations/SlideOver`
  and `MOCK_PRODUCTS` from `@/lib/mock-data/products`; state:
  ```typescript
  const [adjustOpen, setAdjustOpen] = useState(false);
  const [adjustProduct, setAdjustProduct] = useState<typeof MOCK_PRODUCTS[number] | null>(null);
  const searchParams = useSearchParams();
  const showEmpty = searchParams.get("empty") === "true";
  ```
  
  **Empty state** (render before main content if `showEmpty`):
  ```tsx
  if (showEmpty) return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
        <Icon name="boxes" className="h-9 w-9 text-white/25" />
      </div>
      <h2 className="text-xl font-semibold text-white">Add products first</h2>
      <p className="mt-2 max-w-xs text-sm text-white/40">
        Your inventory will appear here once you&apos;ve added products
      </p>
    </div>
  );
  ```
  
  **Stock table** — same header/chip pattern; table columns: Product, Category, Current Stock,
  Min Stock, Status, Actions:
  - Status badge: stock > 5 → `<Badge variant="success">In Stock</Badge>`;
    1–5 → `<Badge variant="warning">Low Stock</Badge>`;
    0 → `<Badge variant="error">Out of Stock</Badge>`
  - Min Stock column: static mock values (e.g. Espresso Beans = 10, Oat Milk = 8, others = 20)
  - Actions: `<button onClick={() => { setAdjustProduct(product); setAdjustOpen(true); }}>Adjust stock</button>`
  
  **Stock Adjustment SlideOver** — inline `AdjustForm` component:
  ```tsx
  function AdjustForm({ product }: { product: typeof MOCK_PRODUCTS[number] | null }) {
    return (
      <div className="space-y-5">
        {/* Product info (read-only) */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs text-white/40">Adjusting stock for</p>
          <p className="mt-1 text-base font-semibold text-white">{product?.name ?? "—"}</p>
          <div className="mt-3 flex items-center gap-3">
            <span className="text-xs text-white/40">Current stock</span>
            <span className="font-mono text-2xl font-bold text-white">{product?.stock ?? 0}</span>
            <span className="text-xs text-white/40">units</span>
          </div>
        </div>
        {/* Adjustment type */}
        <div>
          <label className="mb-2 block text-xs font-medium text-white/60">Adjustment type *</label>
          <div className="grid grid-cols-3 gap-2">
            {["Add stock", "Remove stock", "Set exact"].map(t => (
              <button key={t} type="button"
                className="rounded-xl border border-white/10 bg-white/5 px-2 py-2.5 text-xs text-white/60 hover:border-blue-500/50 hover:text-white transition-colors first:border-blue-500/50 first:bg-blue-500/10 first:text-blue-300">
                {t}
              </button>
            ))}
          </div>
        </div>
        {/* Quantity */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-white/60">Quantity *</label>
          <input type="number" min="1" placeholder="0"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-blue-500 focus:outline-none" />
        </div>
        {/* Reason */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-white/60">Reason *</label>
          <select className="w-full rounded-xl border border-white/10 bg-[#0d0d14] px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none">
            <option value="">Select reason</option>
            {["Restock", "Damaged", "Sold", "Correction", "Other"].map(r => <option key={r}>{r}</option>)}
          </select>
        </div>
        {/* Note */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-white/60">Note</label>
          <textarea rows={2} placeholder="Optional note"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-blue-500 focus:outline-none resize-none" />
        </div>
      </div>
    );
  }
  ```
  
  **Stock history log** — define `MOCK_STOCK_HISTORY` constant (5 entries per plan.md data);
  render below the main table as a `.card p-5` with chip `// stock history` and a
  `divide-y divide-white/5` list; each row: date, product name, type badge, qty
  (green if "+", rose if "-"), note, user avatar initials.
  
  SlideOver footer:
  ```tsx
  footer={
    <button type="button" onClick={() => setAdjustOpen(false)}
      className="w-full rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors">
      Apply adjustment
    </button>
  }
  ```

**Checkpoint**: `/inventory` loads with stock table. "Adjust stock" opens the slide-over with
product name, current stock display, type selector, quantity, reason. `/inventory?empty=true`
shows empty state.

---

## Phase 4: Customers Page — View Slide-over + Detail Page (US4 + US7)

**Purpose**: Upgrade `/customers` with a view slide-over and create `/customers/[id]`.

⚠️ Depends on T001 (SlideOver.tsx).

- [x] T008 [US4] Convert `apps/shops-app/app/(app)/customers/page.tsx` to Client Component —
  add `"use client"`; add imports for `SlideOver`, `useState`, `useSearchParams`;
  define `MOCK_CUSTOMERS` constant (5 customers per plan.md data model — include `id`,
  `name`, `phone`, `email`, `segment`, `spend`, `orders`, `lastOrder`);
  add state: `const [viewOpen, setViewOpen] = useState(false)` and
  `const [selectedCustomer, setSelectedCustomer] = useState<...| null>(null)`;
  add empty state JSX (icon: "users", heading: "No customers yet",
  subtext: "They'll appear here after your first sale",
  CTA: "Add customer" — disabled button `cursor-not-allowed opacity-50`).

- [x] T009 [US4] Add customer "View" action and slide-over to `/customers` page —
  add a "View" button to each customer row that calls
  `() => { setSelectedCustomer(customer); setViewOpen(true); }`;
  add `<SlideOver open={viewOpen} onClose={() => setViewOpen(false)} title="Customer profile">` containing:
  ```tsx
  {selectedCustomer && (
    <div className="space-y-5">
      {/* Avatar + name */}
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white">
          {selectedCustomer.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{selectedCustomer.name}</h3>
          <Badge variant={
            selectedCustomer.segment === "VIP" ? "purple" :
            selectedCustomer.segment === "New" ? "info" : "default"
          }>{selectedCustomer.segment}</Badge>
        </div>
      </div>
      {/* Contact */}
      <div className="space-y-2 rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center gap-3">
          <Icon name="smartphone" className="h-4 w-4 text-white/30" />
          <span className="text-sm text-white">{selectedCustomer.phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <Icon name="search" className="h-4 w-4 text-white/30" />
          <span className="text-sm text-white">{selectedCustomer.email}</span>
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs text-white/40">Total spent</p>
          <p className="mt-1 text-lg font-bold text-white">{selectedCustomer.spend}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs text-white/40">Total orders</p>
          <p className="mt-1 text-lg font-bold text-white">{selectedCustomer.orders}</p>
        </div>
      </div>
      {/* Recent orders */}
      <div>
        <p className="mb-3 text-xs font-medium text-white/40 uppercase tracking-wider">Recent orders</p>
        <div className="space-y-2">
          {[
            { id: "#ORD-10428", date: "3 Jan · 14:22", items: 3, total: "EGP 152.50" },
            { id: "#ORD-10391", date: "28 Dec · 11:05", items: 2, total: "EGP 87.00" },
            { id: "#ORD-10344", date: "21 Dec · 16:48", items: 5, total: "EGP 214.00" },
          ].map(o => (
            <div key={o.id} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
              <div>
                <p className="text-xs font-mono text-white">{o.id}</p>
                <p className="text-[11px] text-white/30">{o.date} · {o.items} items</p>
              </div>
              <p className="text-sm font-semibold text-white">{o.total}</p>
            </div>
          ))}
        </div>
      </div>
      {/* View full profile link */}
      <a href={`/customers/${selectedCustomer.id}`}
        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/60 hover:text-white transition-colors">
        View full profile
        <Icon name="arrow-up-right" className="h-4 w-4" />
      </a>
    </div>
  )}
  ```

- [x] T010 [US4] Create `apps/shops-app/app/(app)/customers/[id]/page.tsx` —
  Server Component; define same `MOCK_CUSTOMERS` constant (or import a shared version);
  define `MOCK_CUSTOMER_ORDERS` (5 orders per customer — static array);
  find customer by `params.id` or fall back to `MOCK_CUSTOMERS[0]`;
  page layout: full-width with back link, customer header (avatar, name, badge, spend, orders),
  contact info section, and a 5-row orders history table (columns: Order ID, Date, Items,
  Total, Payment Method, Status badge).
  Back link: `<a href="/customers" className="...">← Back to customers</a>`

**Checkpoint**: `/customers` — "View" on any row opens slide-over with name, badge, spend, 3 orders.
"View full profile →" navigates to `/customers/c1`. The detail page renders with back link and
5-order table.

---

## Phase 5: Orders Page — Clickable Rows + Detail Panel (US5 + US7)

**Purpose**: Make order rows clickable and show a detail side panel / slide-over.

- [x] T011 [US5] Convert `apps/shops-app/app/(app)/orders/page.tsx` to Client Component —
  add `"use client"`; add `useState` and `useSearchParams` imports;
  define `MockOrder` type with `id`, `customer`, `items`, `total`, `method`, `status`,
  `timestamp`, `lineItems: { name: string; qty: number; unitPrice: string; lineTotal: string }[]`;
  define `MOCK_ORDERS` array (6 orders, each with 2–3 line items);
  add state: `const [selectedOrder, setSelectedOrder] = useState<MockOrder | null>(null)`;
  add `showEmpty` from `useSearchParams`.
  
  **Empty state** (icon: "receipt", heading: "No orders yet",
  subtext: "Open POS to make your first sale",
  CTA: `<a href="/pos" className="...">Open POS →</a>`).

- [x] T012 [US5] Add order detail panel to `apps/shops-app/app/(app)/orders/page.tsx` —
  Wrap the orders section in a responsive container:
  ```tsx
  <div className={`flex gap-5 ${selectedOrder ? "lg:flex-row" : ""}`}>
    {/* Orders table — shrinks when panel open */}
    <div className={selectedOrder ? "lg:flex-1 lg:min-w-0" : "w-full"}>
      {/* existing table JSX */}
    </div>

    {/* Desktop detail panel */}
    {selectedOrder && (
      <div className="hidden lg:block w-[360px] flex-shrink-0">
        <OrderDetailContent order={selectedOrder} onClose={() => setSelectedOrder(null)} />
      </div>
    )}
  </div>

  {/* Mobile slide-over */}
  <SlideOver open={!!selectedOrder && /* isMobile check via CSS hidden/shown */}
    onClose={() => setSelectedOrder(null)} title="Order detail">
    {selectedOrder && <OrderDetailContent order={selectedOrder} onClose={() => setSelectedOrder(null)} />}
  </SlideOver>
  ```
  
  Define `OrderDetailContent` component in the same file:
  ```tsx
  function OrderDetailContent({ order, onClose }: { order: MockOrder; onClose: () => void }) {
    return (
      <div className="card h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <div>
            <p className="font-mono text-sm font-semibold text-white">{order.id}</p>
            <p className="text-xs text-white/40">{order.timestamp}</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant={order.status === "Paid" ? "success" : order.status === "Refund" ? "error" : "warning"}>
              {order.status}
            </Badge>
            <button type="button" onClick={onClose}
              className="rounded-lg p-1 text-white/40 hover:text-white transition-colors lg:hidden">
              <Icon name="x" className="h-5 w-5" />
            </button>
          </div>
        </div>
        {/* Customer */}
        <div className="border-b border-white/10 p-4">
          <p className="text-xs text-white/40">Customer</p>
          <p className="mt-1 text-sm font-medium text-white">{order.customer}</p>
        </div>
        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">Items</p>
          <div className="space-y-2">
            {order.lineItems.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white">{item.name}</p>
                  <p className="text-xs text-white/40">{item.qty} × {item.unitPrice}</p>
                </div>
                <p className="text-sm font-medium text-white">{item.lineTotal}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Totals */}
        <div className="border-t border-white/10 p-4 space-y-1.5">
          <div className="flex justify-between text-sm text-white/60">
            <span>Subtotal</span><span>{order.total}</span>
          </div>
          <div className="flex justify-between text-base font-semibold text-white">
            <span>Total</span><span>{order.total}</span>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <Badge variant={order.method === "cash" ? "default" : "info"}>
              {order.method === "cash" ? "Cash" : order.method === "card" ? "Card" : "Wallet"}
            </Badge>
          </div>
        </div>
        {/* Print button */}
        <div className="border-t border-white/10 p-4">
          <button type="button" disabled
            className="w-full cursor-not-allowed rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm text-white/30">
            Print receipt
          </button>
        </div>
      </div>
    );
  }
  ```
  
  Make each `<tr>` in the orders table clickable:
  ```tsx
  <tr onClick={() => setSelectedOrder(order)}
    className={`cursor-pointer transition-colors hover:bg-white/[0.03] ${
      selectedOrder?.id === order.id ? "bg-white/[0.05]" : ""
    }`}>
  ```

**Checkpoint**: `/orders` — clicking a row shows a detail panel on the right (desktop) or opens
slide-over (mobile). Order ID, items, total visible. `/orders?empty=true` shows empty state.

---

## Phase 6: Reports Page — Period Tabs + Enhanced Charts (US6 + US7)

**Purpose**: Upgrade `/reports` with interactive period tabs and better chart visuals.

- [x] T013 [US6] Convert `apps/shops-app/app/(app)/reports/page.tsx` to Client Component —
  add `"use client"`; add `useState` and `useSearchParams` imports;
  define period data and state:
  ```typescript
  type Period = "today" | "week" | "month";
  const [period, setPeriod] = useState<Period>("week");
  const searchParams = useSearchParams();
  const showEmpty = searchParams.get("empty") === "true";
  
  const PERIOD_DATA = {
    today: {
      revenue: "EGP 12,840", orders: "94", customers: "11", avgTicket: "EGP 137",
      bars: [12, 28, 45, 62, 88, 72, 55, 40, 30, 82, 95, 78,
             60, 45, 55, 70, 85, 92, 76, 58, 42, 30, 18, 8],
      // 24 hourly bars for "today"
    },
    week: {
      revenue: "EGP 168,420", orders: "1,284", customers: "86", avgTicket: "EGP 755",
      bars: [45, 62, 78, 55, 92, 88, 40],
      // 7 daily bars Mon–Sun
    },
    month: {
      revenue: "EGP 724,100", orders: "5,210", customers: "341", avgTicket: "EGP 810",
      bars: [72, 85, 91, 68],
      // 4 weekly bars Week 1–4
    },
  } as const;
  ```
  
  **Empty state**:
  ```tsx
  if (showEmpty) return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
        <Icon name="chart-bar" className="h-9 w-9 text-white/25" />
      </div>
      <h2 className="text-xl font-semibold text-white">No data yet</h2>
      <p className="mt-2 max-w-xs text-sm text-white/40">
        Make your first sale to see reports here
      </p>
      <a href="/pos" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
        Open POS
      </a>
    </div>
  );
  ```

- [x] T014 [US6] Add period tabs and update stat cards in `/reports` page —
  period tabs rendered below the page header:
  ```tsx
  <div className="mb-5 flex gap-1 rounded-xl border border-white/10 bg-white/5 p-1 w-fit">
    {(["today", "week", "month"] as Period[]).map(p => (
      <button key={p} type="button" onClick={() => setPeriod(p)}
        className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
          period === p
            ? "bg-blue-600 text-white"
            : "text-white/40 hover:text-white"
        }`}>
        {p === "today" ? "Today" : p === "week" ? "This Week" : "This Month"}
      </button>
    ))}
  </div>
  ```
  
  Update the 4 stat cards to use `PERIOD_DATA[period]` values instead of hardcoded strings.
  The `StatCard` component's `value` prop becomes `PERIOD_DATA[period].revenue` etc.

- [x] T015 [US6] Upgrade bar chart in `/reports` page — replace the existing static 7-bar
  weekly chart with a dynamic chart driven by `PERIOD_DATA[period].bars`:
  - For "today": 24 bars with label "00 06 12 18 24" shown at intervals
  - For "week": 7 bars with Mon–Sun labels
  - For "month": 4 bars with "Week 1" – "Week 4" labels
  - Bar label array derived from period:
    ```typescript
    const barLabels = period === "today"
      ? Array.from({length: 24}, (_, i) => i % 6 === 0 ? `${String(i).padStart(2,"0")}` : "")
      : period === "week"
      ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      : ["Wk 1", "Wk 2", "Wk 3", "Wk 4"];
    ```
  - Bar rendering: same CSS div-bar pattern, but height driven by `PERIOD_DATA[period].bars[i]`
  - Transition: add `transition-all duration-300` on each bar div so height animates when period changes

- [x] T016 [US6] Add revenue-by-category donut + top products table in `/reports` page —
  Add below the existing two-column grid a second row with two cards:
  
  **Category donut** (CSS conic-gradient):
  ```tsx
  <div className="card p-5">
    <p className="chip mb-2 text-gray-500">// by category</p>
    <h2 className="text-lg font-semibold text-white">Revenue split</h2>
    <div className="mt-4 flex items-center gap-6">
      <div className="relative h-32 w-32 flex-shrink-0">
        <div className="h-full w-full rounded-full" style={{
          background: "conic-gradient(#3b82f6 0% 48%, #8b5cf6 48% 81%, #06b6d4 81% 100%)"
        }} />
        <div className="absolute inset-3 rounded-full bg-[#0d0d14]" />
      </div>
      <div className="space-y-2">
        {[
          { label: "Beverages", pct: "48%", color: "bg-blue-500" },
          { label: "Food",      pct: "33%", color: "bg-purple-500" },
          { label: "Bakery",    pct: "19%", color: "bg-cyan-500" },
        ].map(c => (
          <div key={c.label} className="flex items-center gap-2">
            <div className={`h-2.5 w-2.5 rounded-full ${c.color}`} />
            <span className="text-sm text-white">{c.label}</span>
            <span className="ml-auto text-sm text-white/50">{c.pct}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
  ```
  
  **Top products table**:
  ```tsx
  <div className="card p-5">
    <p className="chip mb-2 text-gray-500">// top products</p>
    <h2 className="text-lg font-semibold text-white">Best sellers</h2>
    <div className="mt-4 divide-y divide-white/5">
      {[
        { rank: 1, name: "Iced Latte",       units: 482, revenue: "EGP 18,546" },
        { rank: 2, name: "Chicken Sandwich", units: 311, revenue: "EGP 14,928" },
        { rank: 3, name: "Croissant",        units: 268, revenue: "EGP 6,432" },
        { rank: 4, name: "Cold Brew",        units: 224, revenue: "EGP 9,856" },
        { rank: 5, name: "Espresso Beans",   units: 47,  revenue: "EGP 9,870" },
      ].map(p => (
        <div key={p.rank} className="flex items-center gap-3 py-2.5">
          <span className="w-5 text-center font-mono text-xs text-white/30">{p.rank}</span>
          <span className="flex-1 text-sm text-white">{p.name}</span>
          <span className="text-xs text-white/40">{p.units} sold</span>
          <span className="text-sm font-medium text-white">{p.revenue}</span>
        </div>
      ))}
    </div>
  </div>
  ```

**Checkpoint**: `/reports` — three period tabs visible. Clicking each tab updates stat card values.
Bar chart height changes per period. Donut and top-products table visible.
`/reports?empty=true` shows empty state.

---

## Phase 7: Build Gate

- [x] T017 Run `pnpm --filter shops-app lint` from repo root — fix all errors to exit 0
- [x] T018 [P] Run `pnpm tsc --noEmit` in `apps/shops-app` — must exit 0
- [x] T019 Run `pnpm --filter shops-app build` — must exit 0; confirm all new routes in output:
  `/products`, `/inventory`, `/orders`, `/customers`, `/customers/[id]`, `/reports`

**Checkpoint**: All three commands exit 0. All 6 routes listed in Next.js build output.

---

## Dependencies & Execution Order

```
T001 (SlideOver.tsx)
  │
  ├── T002 → T003 → T004 → T005 → T006  [Products — sequential in same file]
  ├── T007                                [Inventory — independent]
  ├── T008 → T009                        [Customers page]
  ├── T010                               [Customers detail — independent of T009]
  └── T011 → T012                        [Orders]

T013 → T014 → T015 → T016               [Reports — sequential in same file]

T001..T016 all done → T017 → T018 [P] → T019
```

### Parallel Opportunities

- After T001: T002 (Products), T007 (Inventory), T008 (Customers), T011 (Orders), T013 (Reports)
  can all start in parallel (different files)
- T010 (customers/[id]) can run parallel to T009 (same feature, different file)
- T017 and T018 (lint + tsc) run in parallel

---

## Implementation Strategy

### MVP First (P1 stories)

1. T001 — SlideOver.tsx (unblocks everything)
2. T002–T006 — Products (most visible, sets the pattern)
3. T007 — Inventory
4. T011–T012 — Orders
5. T008–T009 — Customers slide-over
6. **STOP and VALIDATE**: all four P1 slide-overs work

### Then P2

7. T010 — Customer detail page
8. T013–T016 — Reports period tabs + charts
9. T003, T007 (empty states already in), complete remaining page empty states
10. T017–T019 — Build gate

---

## Notes

- `"use client"` is required on all five page files — they all use `useSearchParams`
  for the `?empty=true` flag. This is the only way to read query params in the App Router.
- `useSearchParams()` must be wrapped in `<Suspense>` if the parent is a Server Component.
  Since these pages are fully converted to Client Components, no Suspense wrapper is needed.
- Do NOT inline `MOCK_CUSTOMERS` in both `page.tsx` and `[id]/page.tsx` — define it once
  in a file like `apps/shops-app/lib/mock-data/customers.ts` and import from both.
- `MOCK_PRODUCTS` already exists in `apps/shops-app/lib/mock-data/products.ts` — import
  from there for both Products and Inventory pages; do not re-define the array.
- The order detail panel uses a fixed width on desktop (360px). Ensure the orders table
  uses `min-w-0` to shrink correctly when the panel opens.
- Bar chart height: use `style={{ height: \`${bar}%\` }}` — percentage of the chart
  container height, not pixel values. Keep container height fixed at `h-44`.
- Always mark tasks complete with `[x]` in this file after implementation.
