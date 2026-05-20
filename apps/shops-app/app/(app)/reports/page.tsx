"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Icon } from "@nexoraxs/ui";
import { StatCard } from "@/components/dashboard/StatCard";

type Period = "today" | "week" | "month";

const PERIOD_DATA = {
  today: {
    revenue: "EGP 12,840",
    orders: "94",
    customers: "11",
    avgTicket: "EGP 137",
    bars: [12, 28, 45, 62, 88, 72, 55, 40, 30, 82, 95, 78, 60, 45, 55, 70, 85, 92, 76, 58, 42, 30, 18, 8],
    labels: Array.from({ length: 24 }, (_, i) =>
      i % 6 === 0 ? String(i).padStart(2, "0") : ""
    ),
  },
  week: {
    revenue: "EGP 168,420",
    orders: "1,284",
    customers: "86",
    avgTicket: "EGP 755",
    bars: [45, 62, 78, 55, 92, 88, 40],
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  month: {
    revenue: "EGP 724,100",
    orders: "5,210",
    customers: "341",
    avgTicket: "EGP 810",
    bars: [72, 85, 91, 68],
    labels: ["Wk 1", "Wk 2", "Wk 3", "Wk 4"],
  },
} as const;

const PERIOD_STATS = {
  today: [
    { label: "Revenue today", icon: "trending-up" as const, color: "#3b82f6", trend: "+5%", spark: "M0,22 L14,18 L28,15 L42,16 L56,12 L70,14 L84,9 L100,4" },
    { label: "Orders today", icon: "receipt" as const, color: "#8b5cf6", trend: "+8%", spark: "M0,20 L14,19 L28,17 L42,18 L56,14 L70,15 L84,11 L100,8" },
    { label: "New customers", icon: "users" as const, color: "#06b6d4", trend: "+2%", spark: "M0,22 L14,20 L28,18 L42,19 L56,15 L70,16 L84,12 L100,9" },
    { label: "Avg. ticket", icon: "banknote" as const, color: "#10b981", trend: "+1%", spark: "M0,20 L14,19 L28,18 L42,17 L56,16 L70,15 L84,14 L100,13" },
  ],
  week: [
    { label: "Revenue this week", icon: "trending-up" as const, color: "#3b82f6", trend: "+12%", spark: "M0,22 L14,18 L28,15 L42,16 L56,12 L70,14 L84,9 L100,4" },
    { label: "Orders this week", icon: "receipt" as const, color: "#8b5cf6", trend: "+8%", spark: "M0,20 L14,19 L28,17 L42,18 L56,14 L70,15 L84,11 L100,8" },
    { label: "New customers", icon: "users" as const, color: "#06b6d4", trend: "+23%", spark: "M0,22 L14,20 L28,18 L42,19 L56,15 L70,16 L84,12 L100,9" },
    { label: "Avg. ticket", icon: "banknote" as const, color: "#10b981", trend: "+4%", spark: "M0,20 L14,19 L28,18 L42,17 L56,16 L70,15 L84,14 L100,13" },
  ],
  month: [
    { label: "Revenue this month", icon: "trending-up" as const, color: "#3b82f6", trend: "+18%", spark: "M0,22 L14,18 L28,15 L42,16 L56,12 L70,14 L84,9 L100,4" },
    { label: "Orders this month", icon: "receipt" as const, color: "#8b5cf6", trend: "+14%", spark: "M0,20 L14,19 L28,17 L42,18 L56,14 L70,15 L84,11 L100,8" },
    { label: "New customers", icon: "users" as const, color: "#06b6d4", trend: "+31%", spark: "M0,22 L14,20 L28,18 L42,19 L56,15 L70,16 L84,12 L100,9" },
    { label: "Avg. ticket", icon: "banknote" as const, color: "#10b981", trend: "+6%", spark: "M0,20 L14,19 L28,18 L42,17 L56,16 L70,15 L84,14 L100,13" },
  ],
} as const;

function ReportsContent() {
  const [period, setPeriod] = useState<Period>("week");
  const searchParams = useSearchParams();
  const showEmpty = searchParams.get("empty") === "true";

  if (showEmpty) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
          <Icon name="chart-bar" className="h-9 w-9 text-white/25" />
        </div>
        <h2 className="text-xl font-semibold text-white">No data yet</h2>
        <p className="mt-2 max-w-xs text-sm text-white/40">
          Make your first sale to see reports here
        </p>
        <a
          href="/pos"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Open POS
        </a>
      </div>
    );
  }

  const data = PERIOD_DATA[period];
  const statMeta = PERIOD_STATS[period];

  const stats = [
    { label: statMeta[0].label, value: data.revenue, trend: statMeta[0].trend, icon: statMeta[0].icon, color: statMeta[0].color, sub: "vs last period", spark: statMeta[0].spark },
    { label: statMeta[1].label, value: data.orders, trend: statMeta[1].trend, icon: statMeta[1].icon, color: statMeta[1].color, sub: "all branches", spark: statMeta[1].spark },
    { label: statMeta[2].label, value: data.customers, trend: statMeta[2].trend, icon: statMeta[2].icon, color: statMeta[2].color, sub: "this period", spark: statMeta[2].spark },
    { label: statMeta[3].label, value: data.avgTicket, trend: statMeta[3].trend, icon: statMeta[3].icon, color: statMeta[3].color, sub: "per order", spark: statMeta[3].spark },
  ];

  return (
    <div>
      <div className="mb-6">
        <p className="chip mb-2 text-gray-500">{"// reports"}</p>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Reports
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Analyse your store performance and trends.{" "}
          <span className="font-mono text-[11px] text-amber-400/80">
            Sample data
          </span>
        </p>
      </div>

      {/* Period tabs */}
      <div className="mb-5 flex w-fit gap-1 rounded-xl border border-white/10 bg-white/5 p-1">
        {(["today", "week", "month"] as Period[]).map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setPeriod(p)}
            className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
              period === p
                ? "bg-blue-600 text-white"
                : "text-white/40 hover:text-white"
            }`}
          >
            {p === "today" ? "Today" : p === "week" ? "This Week" : "This Month"}
          </button>
        ))}
      </div>

      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Charts row */}
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        {/* Bar chart */}
        <div className="card p-5">
          <p className="chip mb-2 text-gray-500">{"// sales by period"}</p>
          <h2 className="text-lg font-semibold text-white">
            {period === "today"
              ? "Today by hour"
              : period === "week"
              ? "This week by day"
              : "This month by week"}
          </h2>
          <div className="mt-4 flex h-44 items-end gap-1.5">
            {data.bars.map((pct, i) => (
              <div
                key={i}
                className="flex flex-1 flex-col items-center gap-1.5"
              >
                <div className="flex w-full items-end" style={{ height: "100%" }}>
                  <div
                    className="w-full rounded-t bg-blue-500/70 transition-all duration-300"
                    style={{ height: `${pct}%` }}
                  />
                </div>
                <span className="font-mono text-[9px] text-gray-600">
                  {data.labels[i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top categories */}
        <div className="card p-5">
          <p className="chip mb-2 text-gray-500">{"// top categories"}</p>
          <h2 className="text-lg font-semibold text-white">By revenue</h2>
          <div className="mt-4 divide-y divide-white/5">
            {[
              { name: "Beverages", revenue: "EGP 82,100", orders: "706 orders" },
              { name: "Food", revenue: "EGP 54,920", orders: "311 orders" },
              { name: "Bakery", revenue: "EGP 18,400", orders: "268 orders" },
            ].map((category) => (
              <div
                key={category.name}
                className="flex items-center justify-between py-3"
              >
                <div>
                  <div className="text-sm font-medium text-white">
                    {category.name}
                  </div>
                  <div className="text-xs text-gray-500">{category.orders}</div>
                </div>
                <div className="text-sm text-white">{category.revenue}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second row: donut + top products */}
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        {/* Category donut */}
        <div className="card p-5">
          <p className="chip mb-2 text-gray-500">{"// by category"}</p>
          <h2 className="text-lg font-semibold text-white">Revenue split</h2>
          <div className="mt-4 flex items-center gap-6">
            <div className="relative h-32 w-32 flex-shrink-0">
              <div
                className="h-full w-full rounded-full"
                style={{
                  background:
                    "conic-gradient(#3b82f6 0% 48%, #8b5cf6 48% 81%, #06b6d4 81% 100%)",
                }}
              />
              <div className="absolute inset-3 rounded-full bg-[#0d0d14]" />
            </div>
            <div className="space-y-2">
              {[
                { label: "Beverages", pct: "48%", color: "bg-blue-500" },
                { label: "Food", pct: "33%", color: "bg-purple-500" },
                { label: "Bakery", pct: "19%", color: "bg-cyan-500" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-2">
                  <div className={`h-2.5 w-2.5 rounded-full ${c.color}`} />
                  <span className="text-sm text-white">{c.label}</span>
                  <span className="ml-auto text-sm text-white/50">{c.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top products */}
        <div className="card p-5">
          <p className="chip mb-2 text-gray-500">{"// top products"}</p>
          <h2 className="text-lg font-semibold text-white">Best sellers</h2>
          <div className="mt-4 divide-y divide-white/5">
            {[
              { rank: 1, name: "Iced Latte", units: 482, revenue: "EGP 18,546" },
              { rank: 2, name: "Chicken Sandwich", units: 311, revenue: "EGP 14,928" },
              { rank: 3, name: "Croissant", units: 268, revenue: "EGP 6,432" },
              { rank: 4, name: "Cold Brew", units: 224, revenue: "EGP 9,856" },
              { rank: 5, name: "Espresso Beans", units: 47, revenue: "EGP 9,870" },
            ].map((p) => (
              <div key={p.rank} className="flex items-center gap-3 py-2.5">
                <span className="w-5 text-center font-mono text-xs text-white/30">
                  {p.rank}
                </span>
                <span className="flex-1 text-sm text-white">{p.name}</span>
                <span className="text-xs text-white/40">{p.units} sold</span>
                <span className="text-sm font-medium text-white">
                  {p.revenue}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReportsPage() {
  return (
    <Suspense>
      <ReportsContent />
    </Suspense>
  );
}
