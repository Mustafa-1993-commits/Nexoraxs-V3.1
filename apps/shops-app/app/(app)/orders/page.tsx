"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Badge, Icon } from "@nexoraxs/ui";
import SlideOver from "@/components/operations/SlideOver";

type OrderStatus = "Paid" | "Refund" | "Pending";

interface OrderItem {
  name: string;
  qty: number;
  unitPrice: string;
  lineTotal: string;
}

interface MockOrder {
  id: string;
  customer: string;
  items: number;
  total: string;
  method: "cash" | "card" | "wallet";
  time: string;
  timestamp: string;
  status: OrderStatus;
  lineItems: OrderItem[];
}

const statusColor: Record<OrderStatus, "success" | "error" | "warning"> = {
  Paid: "success",
  Refund: "error",
  Pending: "warning",
};

const MOCK_ORDERS: MockOrder[] = [
  {
    id: "#ORD-10428",
    customer: "Aya Hassan",
    items: 3,
    total: "EGP 1,240",
    method: "card",
    time: "12:42",
    timestamp: "3 Jan 2026 · 12:42",
    status: "Paid",
    lineItems: [
      { name: "Iced Latte", qty: 2, unitPrice: "EGP 38.50", lineTotal: "EGP 77.00" },
      { name: "Chicken Sandwich", qty: 2, unitPrice: "EGP 48.00", lineTotal: "EGP 96.00" },
      { name: "Croissant", qty: 3, unitPrice: "EGP 24.00", lineTotal: "EGP 72.00" },
    ],
  },
  {
    id: "#ORD-10427",
    customer: "Walk-in",
    items: 1,
    total: "EGP 95",
    method: "cash",
    time: "12:38",
    timestamp: "3 Jan 2026 · 12:38",
    status: "Paid",
    lineItems: [
      { name: "Cold Brew", qty: 2, unitPrice: "EGP 44.00", lineTotal: "EGP 88.00" },
      { name: "Paper Cups", qty: 1, unitPrice: "EGP 7.00", lineTotal: "EGP 7.00" },
    ],
  },
  {
    id: "#ORD-10426",
    customer: "Omar Khaled",
    items: 7,
    total: "EGP 3,610",
    method: "card",
    time: "12:21",
    timestamp: "3 Jan 2026 · 12:21",
    status: "Refund",
    lineItems: [
      { name: "Espresso Beans 1kg", qty: 5, unitPrice: "EGP 210.00", lineTotal: "EGP 1,050.00" },
      { name: "Oat Milk Carton", qty: 6, unitPrice: "EGP 42.00", lineTotal: "EGP 252.00" },
      { name: "Caramel Syrup", qty: 3, unitPrice: "EGP 35.00", lineTotal: "EGP 105.00" },
    ],
  },
  {
    id: "#ORD-10425",
    customer: "Layla N.",
    items: 2,
    total: "EGP 540",
    method: "wallet",
    time: "12:11",
    timestamp: "3 Jan 2026 · 12:11",
    status: "Paid",
    lineItems: [
      { name: "Avocado Toast", qty: 2, unitPrice: "EGP 60.00", lineTotal: "EGP 120.00" },
      { name: "Iced Latte", qty: 2, unitPrice: "EGP 38.50", lineTotal: "EGP 77.00" },
    ],
  },
  {
    id: "#ORD-10424",
    customer: "Walk-in",
    items: 3,
    total: "EGP 870",
    method: "cash",
    time: "11:58",
    timestamp: "3 Jan 2026 · 11:58",
    status: "Paid",
    lineItems: [
      { name: "Chicken Sandwich", qty: 3, unitPrice: "EGP 48.00", lineTotal: "EGP 144.00" },
      { name: "Cold Brew", qty: 2, unitPrice: "EGP 44.00", lineTotal: "EGP 88.00" },
    ],
  },
  {
    id: "#ORD-10423",
    customer: "Hany M.",
    items: 5,
    total: "EGP 2,150",
    method: "card",
    time: "11:42",
    timestamp: "3 Jan 2026 · 11:42",
    status: "Pending",
    lineItems: [
      { name: "Espresso Beans 1kg", qty: 2, unitPrice: "EGP 210.00", lineTotal: "EGP 420.00" },
      { name: "Oat Milk Carton", qty: 3, unitPrice: "EGP 42.00", lineTotal: "EGP 126.00" },
      { name: "Avocado Toast", qty: 2, unitPrice: "EGP 60.00", lineTotal: "EGP 120.00" },
    ],
  },
];

const methodLabel: Record<MockOrder["method"], string> = {
  cash: "Cash",
  card: "Card",
  wallet: "Wallet",
};

function OrderDetailContent({
  order,
  onClose,
  showCloseBtn,
}: {
  order: MockOrder;
  onClose: () => void;
  showCloseBtn?: boolean;
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-start justify-between border-b border-white/10 p-4">
        <div>
          <p className="font-mono text-sm font-semibold text-white">{order.id}</p>
          <p className="text-xs text-white/40">{order.timestamp}</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant={statusColor[order.status]}>{order.status}</Badge>
          {showCloseBtn && (
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1 text-white/40 transition-colors hover:text-white"
              aria-label="Close"
            >
              <Icon name="x" className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
      <div className="border-b border-white/10 p-4">
        <p className="text-xs text-white/40">Customer</p>
        <p className="mt-1 text-sm font-medium text-white">{order.customer}</p>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
          Items
        </p>
        <div className="space-y-3">
          {order.lineItems.map((item, i) => (
            <div key={i} className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="text-sm text-white">{item.name}</p>
                <p className="text-xs text-white/40">
                  {item.qty} × {item.unitPrice}
                </p>
              </div>
              <p className="flex-shrink-0 text-sm font-medium text-white">
                {item.lineTotal}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-1.5 border-t border-white/10 p-4">
        <div className="flex justify-between text-sm text-white/60">
          <span>Subtotal</span>
          <span>{order.total}</span>
        </div>
        <div className="flex justify-between text-base font-semibold text-white">
          <span>Total</span>
          <span>{order.total}</span>
        </div>
        <div className="flex items-center gap-2 pt-1">
          <Badge variant={order.method === "card" ? "info" : "default"}>
            {methodLabel[order.method]}
          </Badge>
        </div>
      </div>
      <div className="border-t border-white/10 p-4">
        <button
          type="button"
          disabled
          className="w-full cursor-not-allowed rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm text-white/30"
        >
          Print receipt
        </button>
      </div>
    </div>
  );
}

function OrdersContent() {
  const [selectedOrder, setSelectedOrder] = useState<MockOrder | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const searchParams = useSearchParams();
  const showEmpty = searchParams.get("empty") === "true";

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (showEmpty) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
          <Icon name="receipt" className="h-9 w-9 text-white/25" />
        </div>
        <h2 className="text-xl font-semibold text-white">No orders yet</h2>
        <p className="mt-2 max-w-xs text-sm text-white/40">
          Open POS to make your first sale
        </p>
        <a
          href="/pos"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Open POS →
        </a>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <p className="chip mb-2 text-gray-500">{"// orders"}</p>
        <h1 className="text-3xl font-bold tracking-tight text-white">Orders</h1>
        <p className="mt-2 text-sm text-gray-400">
          Track and manage customer orders.{" "}
          <span className="font-mono text-[11px] text-amber-400/80">
            Sample data
          </span>
        </p>
      </div>

      <div className={`flex gap-5 ${selectedOrder ? "lg:flex-row" : ""}`}>
        {/* Orders table */}
        <div
          className={`min-w-0 ${selectedOrder ? "lg:flex-1" : "w-full"}`}
        >
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-white/5">
                  <tr className="font-mono text-[10px] uppercase tracking-wider text-gray-500">
                    <th className="px-5 py-4 text-left">Order</th>
                    <th className="px-5 py-4 text-left">Customer</th>
                    <th className="px-5 py-4 text-left">Items</th>
                    <th className="px-5 py-4 text-left">Total</th>
                    <th className="px-5 py-4 text-left">Method</th>
                    <th className="px-5 py-4 text-left">Status</th>
                    <th className="px-5 py-4 text-left">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {MOCK_ORDERS.map((order) => (
                    <tr
                      key={order.id}
                      onClick={() =>
                        setSelectedOrder(
                          selectedOrder?.id === order.id ? null : order
                        )
                      }
                      className={`cursor-pointer transition-colors hover:bg-white/[0.03] ${
                        selectedOrder?.id === order.id
                          ? "bg-white/[0.05]"
                          : ""
                      }`}
                    >
                      <td className="px-5 py-4 font-mono text-xs text-gray-400">
                        {order.id}
                      </td>
                      <td className="px-5 py-4 text-sm font-medium text-white">
                        {order.customer}
                      </td>
                      <td className="px-5 py-4 font-mono text-xs text-gray-400">
                        {order.items}
                      </td>
                      <td className="px-5 py-4 text-sm text-white">
                        {order.total}
                      </td>
                      <td className="px-5 py-4 text-sm text-gray-300">
                        {methodLabel[order.method]}
                      </td>
                      <td className="px-5 py-4">
                        <Badge variant={statusColor[order.status]}>
                          {order.status}
                        </Badge>
                      </td>
                      <td className="px-5 py-4 font-mono text-xs text-gray-400">
                        {order.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Desktop detail panel */}
        {selectedOrder && isDesktop && (
          <div className="hidden w-[360px] flex-shrink-0 lg:block">
            <div className="card h-full overflow-hidden">
              <OrderDetailContent
                order={selectedOrder}
                onClose={() => setSelectedOrder(null)}
                showCloseBtn
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile slide-over */}
      <SlideOver
        open={!!selectedOrder && !isDesktop}
        onClose={() => setSelectedOrder(null)}
        title="Order detail"
      >
        {selectedOrder && (
          <div className="-m-5">
            <OrderDetailContent
              order={selectedOrder}
              onClose={() => setSelectedOrder(null)}
            />
          </div>
        )}
      </SlideOver>
    </div>
  );
}

export default function OrdersPage() {
  return (
    <Suspense>
      <OrdersContent />
    </Suspense>
  );
}
