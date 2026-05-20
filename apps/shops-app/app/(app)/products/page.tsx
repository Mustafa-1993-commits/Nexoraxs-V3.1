"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Badge, Icon } from "@nexoraxs/ui";
import SlideOver from "@/components/operations/SlideOver";
import { MOCK_PRODUCTS } from "@/lib/mock-data/products";

type Product = (typeof MOCK_PRODUCTS)[number];

const statusVariant: Record<
  Product["status"],
  "success" | "warning" | "error"
> = {
  active: "success",
  low_stock: "warning",
  out_of_stock: "error",
};

const statusLabel: Record<Product["status"], string> = {
  active: "Active",
  low_stock: "Low Stock",
  out_of_stock: "Out of Stock",
};

function ProductForm({ product }: { product: Product | null }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="mb-1.5 block text-xs font-medium text-white/60">
          Product name *
        </label>
        <input
          type="text"
          defaultValue={product?.name ?? ""}
          placeholder="e.g. Iced Latte"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium text-white/60">
          SKU
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            defaultValue={product ? `SKU-${product.id.toUpperCase()}` : ""}
            placeholder="Auto-generate"
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-blue-500 focus:outline-none"
          />
          <button
            type="button"
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white/50 transition-colors hover:text-white"
          >
            Generate
          </button>
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium text-white/60">
          Category *
        </label>
        <select
          defaultValue={product?.category ?? ""}
          className="w-full rounded-xl border border-white/10 bg-[#0d0d14] px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
        >
          <option value="">Select category</option>
          {["Beverages", "Food", "Bakery", "Supplies"].map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-white/60">
            Price (EGP) *
          </label>
          <input
            type="number"
            defaultValue={product?.price ?? ""}
            placeholder="0.00"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-white/60">
            Cost (EGP)
          </label>
          <input
            type="number"
            placeholder="0.00"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-white/60">
            Stock qty *
          </label>
          <input
            type="number"
            defaultValue={product?.stock ?? ""}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-white/60">
            Unit
          </label>
          <select className="w-full rounded-xl border border-white/10 bg-[#0d0d14] px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none">
            {["piece", "kg", "litre", "box", "pack"].map((u) => (
              <option key={u}>{u}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium text-white/60">
          Description
        </label>
        <textarea
          rows={3}
          placeholder="Optional product description"
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
        <span className="text-sm text-white/70">Status</span>
        <div className="flex gap-2">
          {(["Active", "Draft"] as const).map((s) => (
            <button
              key={s}
              type="button"
              className={`rounded-lg px-3 py-1 text-xs font-medium transition-colors ${
                (product?.status === "active" ? "Active" : "Draft") === s
                  ? "bg-blue-600 text-white"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductsContent() {
  const [slideOverOpen, setSlideOverOpen] = useState(false);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const searchParams = useSearchParams();
  const showEmpty = searchParams.get("empty") === "true";

  if (showEmpty) {
    return (
      <>
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
            <Icon name="package" className="h-9 w-9 text-white/25" />
          </div>
          <h2 className="text-xl font-semibold text-white">No products yet</h2>
          <p className="mt-2 max-w-xs text-sm text-white/40">
            Add your first product to start selling on NexoraXS
          </p>
          <button
            type="button"
            onClick={() => {
              setEditProduct(null);
              setSlideOverOpen(true);
            }}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            <Icon name="plus" className="h-4 w-4" />
            Add product
          </button>
        </div>
        <SlideOver
          open={slideOverOpen}
          onClose={() => setSlideOverOpen(false)}
          title="Add product"
          width="lg"
          footer={
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setSlideOverOpen(false)}
                className="flex-1 rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm text-white/60 transition-colors hover:text-white"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setSlideOverOpen(false)}
                className="flex-1 rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Save product
              </button>
            </div>
          }
        >
          <ProductForm product={null} />
        </SlideOver>
      </>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <p className="chip mb-2 text-gray-500">{"// products"}</p>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Products
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Manage your product catalogue and inventory.
        </p>
      </div>

      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
          <Icon name="search" className="h-4 w-4 text-gray-500" />
          <input
            disabled
            className="bg-transparent text-sm text-gray-400 outline-none placeholder:text-gray-600"
            placeholder="Search products…"
            aria-label="Search (preview only)"
          />
        </div>
        <button
          type="button"
          onClick={() => {
            setEditProduct(null);
            setSlideOverOpen(true);
          }}
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
        >
          <Icon name="plus" className="h-4 w-4" />
          Add product
        </button>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-white/5">
              <tr className="font-mono text-[10px] uppercase tracking-wider text-gray-500">
                <th className="px-5 py-4 text-left">Product</th>
                <th className="px-5 py-4 text-left">Category</th>
                <th className="px-5 py-4 text-left">Status</th>
                <th className="px-5 py-4 text-left">Stock</th>
                <th className="px-5 py-4 text-left">Price</th>
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
                  <td className="px-5 py-4">
                    <Badge variant={statusVariant[product.status]}>
                      {statusLabel[product.status]}
                    </Badge>
                  </td>
                  <td className="px-5 py-4 font-mono text-xs text-gray-400">
                    {product.stock}
                  </td>
                  <td className="px-5 py-4 text-sm text-white">
                    EGP {product.price.toFixed(2)}
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <button
                      type="button"
                      onClick={() => {
                        setEditProduct(product);
                        setSlideOverOpen(true);
                      }}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50 transition-colors hover:text-white"
                    >
                      Edit
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

      <SlideOver
        open={slideOverOpen}
        onClose={() => setSlideOverOpen(false)}
        title={editProduct ? "Edit product" : "Add product"}
        width="lg"
        footer={
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setSlideOverOpen(false)}
              className="flex-1 rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm text-white/60 transition-colors hover:text-white"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => setSlideOverOpen(false)}
              className="flex-1 rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Save product
            </button>
          </div>
        }
      >
        <ProductForm product={editProduct} />
      </SlideOver>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  );
}
