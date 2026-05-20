import Link from "next/link";
import { Badge } from "@nexoraxs/ui";
import {
  MOCK_CUSTOMERS,
  MOCK_CUSTOMER_ORDERS,
} from "@/lib/mock-data/customers";

type OrderStatus = "Paid" | "Refund" | "Pending";

const statusVariant: Record<OrderStatus, "success" | "error" | "warning"> = {
  Paid: "success",
  Refund: "error",
  Pending: "warning",
};

const segmentVariant = {
  VIP: "purple" as const,
  Regular: "info" as const,
  New: "success" as const,
};

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

interface Props {
  params: { id: string };
}

export default function CustomerDetailPage({ params }: Props) {
  const customer =
    MOCK_CUSTOMERS.find((c) => c.id === params.id) ?? MOCK_CUSTOMERS[0];

  return (
    <div>
      {/* Back link */}
      <Link
        href="/customers"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-white/40 transition-colors hover:text-white"
      >
        ← Back to customers
      </Link>

      {/* Customer header */}
      <div className="card mb-6 p-6">
        <div className="flex flex-wrap items-start gap-5">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-2xl font-bold text-white">
            {initials(customer.name)}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-bold tracking-tight text-white">
                {customer.name}
              </h1>
              <Badge variant={segmentVariant[customer.segment]}>
                {customer.segment}
              </Badge>
            </div>
            <div className="mt-2 flex flex-wrap gap-4 text-sm text-white/50">
              <span>{customer.phone}</span>
              <span>{customer.email}</span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">
                {customer.orders}
              </p>
              <p className="text-xs text-white/40">Total orders</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-white">{customer.spend}</p>
              <p className="text-xs text-white/40">Total spent</p>
            </div>
          </div>
        </div>
      </div>

      {/* Orders history */}
      <div className="card overflow-hidden">
        <div className="border-b border-white/5 px-5 py-4">
          <p className="chip mb-1 text-gray-500">{"// orders"}</p>
          <h2 className="text-lg font-semibold text-white">Order history</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-white/5">
              <tr className="font-mono text-[10px] uppercase tracking-wider text-gray-500">
                <th className="px-5 py-4 text-left">Order ID</th>
                <th className="px-5 py-4 text-left">Date</th>
                <th className="px-5 py-4 text-left">Items</th>
                <th className="px-5 py-4 text-left">Total</th>
                <th className="px-5 py-4 text-left">Payment</th>
                <th className="px-5 py-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {MOCK_CUSTOMER_ORDERS.map((order) => (
                <tr
                  key={order.id}
                  className="transition-colors hover:bg-white/[0.02]"
                >
                  <td className="px-5 py-4 font-mono text-xs text-gray-400">
                    {order.id}
                  </td>
                  <td className="px-5 py-4 text-sm text-white">{order.date}</td>
                  <td className="px-5 py-4 font-mono text-xs text-gray-400">
                    {order.items}
                  </td>
                  <td className="px-5 py-4 text-sm font-medium text-white">
                    {order.total}
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-300">
                    {order.method}
                  </td>
                  <td className="px-5 py-4">
                    <Badge variant={statusVariant[order.status]}>
                      {order.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
