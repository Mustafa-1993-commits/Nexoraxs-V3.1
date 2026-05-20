"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Badge, Icon } from "@nexoraxs/ui";
import SlideOver from "@/components/operations/SlideOver";
import { MOCK_PRODUCTS } from "@/lib/mock-data/products";

type Product = (typeof MOCK_PRODUCTS)[number];

const MIN_STOCK: Record<string, number> = {
  "p-001": 20,
  "p-002": 20,
  "p-003": 20,
  "p-004": 20,
  "p-005": 20,
  "p-006": 10,
  "p-007": 8,
  "p-008": 20,
  "p-009": 5,
};

const MOCK_STOCK_HISTORY = [
  {
    date: "3 Jan 2026 14:22",
    product: "Espresso Beans 1kg",
    type: "Restock",
    qty: "+50",
    note: "Weekly restock",
    user: "Mustafa",
  },
  {
    date: "3 Jan 2026 11:08",
    product: "Oat Milk Carton",
    type: "Restock",
    qty: "+24",
    note: "New supplier order",
    user: "Sara",
  },
  {
    date: "2 Jan 2026 19:45",
    product: "Cold Brew",
    type: "Damaged",
    qty: "-3",
    note: "Broken bottles",
    user: "Ahmed",
  },
  {
    date: "2 Jan 2026 10:12",
    product: "Iced Latte",
    type: "Correction",
    qty: "+8",
    note: "Count correction",
    user: "Mustafa",
  },
  {
    date: "1 Jan 2026 16:30",
    product: "Croissant",
    type: "Sold",
    qty: "-12",
    note: "End-of-day close",
    user: "Omar",
  },
] as const;

function AdjustForm({ product }: { product: Product | null }) {
  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <p className="text-xs text-white/40">Adjusting stock for</p>
        <p className="mt-1 text-base font-semibold text-white">
          {product?.name ?? "—"}
        </p>
        <div className="mt-3 flex items-center gap-3">
          <span className="text-xs text-white/40">Current stock</span>
          <span className="font-mono text-2xl font-bold text-white">
            {product?.stock ?? 0}
          </span>
          <span className="text-xs text-white/40">units</span>
        </div>
      </div>
      <div>
        <label className="mb-2 block text-xs font-medium text-white/60">
          Adjustment type *
        </label>
        <div className="grid grid-cols-3 gap-2">
          {["Add stock", "Remove stock", "Set exact"].map((t, i) => (
            <button
              key={t}
              type="button"
              className={`rounded-xl border px-2 py-2.5 text-xs transition-colors hover:border-blue-500/50 hover:text-white ${
                i === 0
                  ? "border-blue-500/50 bg-blue-500/10 text-blue-300"
                  : "border-white/10 bg-white/5 text-white/60"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium text-white/60">
          Quantity *
        </label>
        <input
          type="number"
          min="1"
          placeholder="0"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium text-white/60">
          Reason *
        </label>
        <select className="w-full rounded-xl border border-white/10 bg-[#0d0d14] px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none">
          <option value="">Select reason</option>
          {["Restock", "Damaged", "Sold", "Correction", "Other"].map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium text-white/60">
          Note
        </label>
        <textarea
          rows={2}
          placeholder="Optional note"
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-blue-500 focus:outline-none"
        />
      </div>
    </div>
  );
}

function stockBadge(stock: number) {
  if (stock === 0) return <Badge variant="error">Out of Stock</Badge>;
  if (stock <= 5) return <Badge variant="warning">Low Stock</Badge>;
  return <Badge variant="success">In Stock</Badge>;
}

function userInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function InventoryContent() {
  const [adjustOpen, setAdjustOpen] = useState(false);
  const [adjustProduct, setAdjustProduct] = useState<Product | null>(null);
  const searchParams = useSearchParams();
  const showEmpty = searchParams.get("empty") === "true";

  if (showEmpty) {
    return (
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
  }

  return (
    <div>
      <div className="mb-6">
        <p className="chip mb-2 text-gray-500">{"// inventory"}</p>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Inventory
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Track stock levels and make adjustments.
        </p>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-white/5">
              <tr className="font-mono text-[10px] uppercase tracking-wider text-gray-500">
                <th className="px-5 py-4 text-left">Product</th>
                <th className="px-5 py-4 text-left">Category</th>
                <th className="px-5 py-4 text-left">Current Stock</th>
                <th className="px-5 py-4 text-left">Min Stock</th>
                <th className="px-5 py-4 text-left">Status</th>
                <th className="py-3 pr-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {MOCK_PRODUCTS.map((product) => (
                <tr
                  key={product.id}
                  className="transition-colors hover:bg-white/[0.02]"
                >
                  <td className="px-5 py-4 text-sm font-medium text-white">
                    {product.name}
                  </td>
                  <td className="px-5 py-4">
                    <Badge variant="default">{product.category}</Badge>
                  </td>
                  <td className="px-5 py-4 font-mono text-sm font-semibold text-white">
                    {product.stock}
                  </td>
                  <td className="px-5 py-4 font-mono text-xs text-gray-400">
                    {MIN_STOCK[product.id] ?? 20}
                  </td>
                  <td className="px-5 py-4">{stockBadge(product.stock)}</td>
                  <td className="py-3 pr-4 text-right">
                    <button
                      type="button"
                      onClick={() => {
                        setAdjustProduct(product);
                        setAdjustOpen(true);
                      }}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50 transition-colors hover:text-white"
                    >
                      Adjust stock
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-4 text-center font-mono text-[11px] text-amber-400/80">
        Sample data
      </p>

      {/* Stock history log */}
      <div className="card mt-6 p-5">
        <p className="chip mb-3 text-gray-500">{"// stock history"}</p>
        <h2 className="text-lg font-semibold text-white">Recent adjustments</h2>
        <div className="mt-4 divide-y divide-white/5">
          {MOCK_STOCK_HISTORY.map((entry, i) => (
            <div key={i} className="flex items-start gap-4 py-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white">
                {userInitials(entry.user)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-white">
                    {entry.product}
                  </span>
                  <Badge variant="default">{entry.type}</Badge>
                </div>
                <p className="mt-0.5 text-xs text-white/40">
                  {entry.note} · {entry.date}
                </p>
              </div>
              <span
                className={`flex-shrink-0 font-mono text-sm font-semibold ${
                  entry.qty.startsWith("+") ? "text-emerald-400" : "text-rose-400"
                }`}
              >
                {entry.qty}
              </span>
            </div>
          ))}
        </div>
      </div>

      <SlideOver
        open={adjustOpen}
        onClose={() => setAdjustOpen(false)}
        title="Adjust stock"
        footer={
          <button
            type="button"
            onClick={() => setAdjustOpen(false)}
            className="w-full rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Apply adjustment
          </button>
        }
      >
        <AdjustForm product={adjustProduct} />
      </SlideOver>
    </div>
  );
}

export default function InventoryPage() {
  return (
    <Suspense>
      <InventoryContent />
    </Suspense>
  );
}
