"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Badge, Icon } from "@nexoraxs/ui";
import SlideOver from "@/components/operations/SlideOver";
import {
  MOCK_CUSTOMERS,
  type MockCustomer,
} from "@/lib/mock-data/customers";

const segmentVariant: Record<
  MockCustomer["segment"],
  "purple" | "info" | "success"
> = {
  VIP: "purple",
  Regular: "info",
  New: "success",
};

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function CustomersContent() {
  const [viewOpen, setViewOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] =
    useState<MockCustomer | null>(null);
  const searchParams = useSearchParams();
  const showEmpty = searchParams.get("empty") === "true";

  if (showEmpty) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
          <Icon name="users" className="h-9 w-9 text-white/25" />
        </div>
        <h2 className="text-xl font-semibold text-white">No customers yet</h2>
        <p className="mt-2 max-w-xs text-sm text-white/40">
          They&apos;ll appear here after your first sale
        </p>
        <button
          type="button"
          disabled
          className="mt-6 inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-blue-600/50 px-5 py-2.5 text-sm font-semibold text-white/50"
        >
          Add customer
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <p className="chip mb-2 text-gray-500">{"// customers"}</p>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Customers
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          View and manage your customer base.{" "}
          <span className="font-mono text-[11px] text-amber-400/80">
            Sample data
          </span>
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        {[
          { label: "Total customers", value: "1,284" },
          { label: "Active this month", value: "847" },
          { label: "New this week", value: "23" },
        ].map((item) => (
          <div key={item.label} className="card px-4 py-3 text-center">
            <div className="text-lg font-bold text-white">{item.value}</div>
            <div className="font-mono text-[10px] text-gray-500">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {MOCK_CUSTOMERS.map((customer) => (
          <div
            key={customer.id}
            className="card flex items-center gap-4 p-4"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/60 to-blue-500/60 text-xs font-semibold text-white">
              {initials(customer.name)}
            </div>

            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-white">
                {customer.name}
              </div>
              <div className="truncate text-xs text-gray-500">
                {customer.email}
              </div>
              <div className="truncate text-xs text-gray-400">
                Last order: {customer.lastOrder}
              </div>
            </div>

            <div className="flex-shrink-0 text-sm font-semibold text-white">
              {customer.spend}
            </div>

            <div className="flex flex-wrap items-center justify-end gap-2">
              <Badge variant={segmentVariant[customer.segment]}>
                {customer.segment}
              </Badge>
              <button
                type="button"
                onClick={() => {
                  setSelectedCustomer(customer);
                  setViewOpen(true);
                }}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50 transition-colors hover:text-white"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      <SlideOver
        open={viewOpen}
        onClose={() => setViewOpen(false)}
        title="Customer profile"
      >
        {selectedCustomer && (
          <div className="space-y-5">
            {/* Avatar + name */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white">
                {initials(selectedCustomer.name)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {selectedCustomer.name}
                </h3>
                <Badge variant={segmentVariant[selectedCustomer.segment]}>
                  {selectedCustomer.segment}
                </Badge>
              </div>
            </div>
            {/* Contact */}
            <div className="space-y-2 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3">
                <Icon
                  name="smartphone"
                  className="h-4 w-4 flex-shrink-0 text-white/30"
                />
                <span className="text-sm text-white">
                  {selectedCustomer.phone}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Icon
                  name="search"
                  className="h-4 w-4 flex-shrink-0 text-white/30"
                />
                <span className="text-sm text-white">
                  {selectedCustomer.email}
                </span>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/40">Total spent</p>
                <p className="mt-1 text-lg font-bold text-white">
                  {selectedCustomer.spend}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/40">Total orders</p>
                <p className="mt-1 text-lg font-bold text-white">
                  {selectedCustomer.orders}
                </p>
              </div>
            </div>
            {/* Recent orders */}
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
                Recent orders
              </p>
              <div className="space-y-2">
                {[
                  {
                    id: "#ORD-10428",
                    date: "3 Jan · 14:22",
                    items: 3,
                    total: "EGP 152.50",
                  },
                  {
                    id: "#ORD-10391",
                    date: "28 Dec · 11:05",
                    items: 2,
                    total: "EGP 87.00",
                  },
                  {
                    id: "#ORD-10344",
                    date: "21 Dec · 16:48",
                    items: 5,
                    total: "EGP 214.00",
                  },
                ].map((o) => (
                  <div
                    key={o.id}
                    className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
                  >
                    <div>
                      <p className="font-mono text-xs text-white">{o.id}</p>
                      <p className="text-[11px] text-white/30">
                        {o.date} · {o.items} items
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-white">
                      {o.total}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* View full profile */}
            <a
              href={`/customers/${selectedCustomer.id}`}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/60 transition-colors hover:text-white"
            >
              View full profile
              <Icon name="arrow-up-right" className="h-4 w-4" />
            </a>
          </div>
        )}
      </SlideOver>
    </div>
  );
}

export default function CustomersPage() {
  return (
    <Suspense>
      <CustomersContent />
    </Suspense>
  );
}
