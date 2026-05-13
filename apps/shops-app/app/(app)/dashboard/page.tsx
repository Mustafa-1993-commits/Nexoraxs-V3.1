"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getMode, type ShopsMode } from "@/lib/mode";

const modeLabels: Record<ShopsMode, string> = {
  business: "Business Management",
  store: "Online Store",
  both: "Business Management + Online Store",
};

const nextSteps: Record<ShopsMode, { title: string; description: string; icon: string }[]> = {
  business: [
    { title: "Set up your inventory", description: "Add your products and stock levels.", icon: "📦" },
    { title: "Invite your team", description: "Add staff members and assign roles.", icon: "👥" },
    { title: "Configure reports", description: "Choose which metrics matter most.", icon: "📊" },
  ],
  store: [
    { title: "Add your first product", description: "Create a product listing for your store.", icon: "🛍️" },
    { title: "Customize your storefront", description: "Set your store name, logo, and colours.", icon: "🎨" },
    { title: "Set up payments", description: "Connect a payment provider to accept orders.", icon: "💳" },
  ],
  both: [
    { title: "Add your first product", description: "Create a listing visible in-store and online.", icon: "📦" },
    { title: "Invite your team", description: "Add staff members and assign roles.", icon: "👥" },
    { title: "Connect payments", description: "Accept orders online and track in-store sales.", icon: "💳" },
  ],
};

export default function DashboardPage() {
  const [mode] = useState<ShopsMode | null>(() =>
    typeof window === "undefined" ? null : getMode()
  );
  const router = useRouter();

  if (mode === null) {
    return (
      <div>
        <div className="mb-8">
          <p className="chip mb-2 text-white/30">{"// dashboard"}</p>
          <h1 className="text-3xl font-bold tracking-tight text-white">Welcome to Shops</h1>
          <p className="mt-2 text-sm text-white/50">
            Complete onboarding to personalise your dashboard.
          </p>
        </div>
        <div className="card p-8 text-center">
          <p className="text-4xl mb-4">✦</p>
          <p className="text-lg font-semibold text-white mb-2">No mode selected</p>
          <p className="text-sm text-white/50 mb-6">
            Choose a shop mode to unlock your personalised dashboard and next steps.
          </p>
          <button
            type="button"
            onClick={() => router.push("/onboarding")}
            className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white"
          >
            Complete onboarding →
          </button>
        </div>
      </div>
    );
  }

  const steps = nextSteps[mode];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <p className="chip mb-2 text-white/30">{"// dashboard"}</p>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Welcome back, Mustafa.
        </h1>
        <p className="mt-2 text-sm text-white/50">
          Your store is running in{" "}
          <span className="gradient-text font-semibold">{modeLabels[mode]}</span> mode.
        </p>
      </div>

      {/* Mode status card */}
      <div
        className="card mb-6 p-6"
        style={{
          background:
            "linear-gradient(135deg,rgba(59,130,246,0.08),rgba(139,92,246,0.04),transparent)",
        }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="chip rounded-full border border-emerald-500/20 bg-emerald-500/15 px-2 py-0.5 text-emerald-300">
            Active
          </span>
          <span className="text-sm font-semibold text-white">{modeLabels[mode]}</span>
        </div>
        <p className="text-xs text-white/40">
          Foundation release — full commerce features are being built.
        </p>
      </div>

      {/* Getting started */}
      <div className="card p-6">
        <p className="chip mb-1 text-white/30">{"// getting started"}</p>
        <h2 className="text-lg font-semibold text-white mb-5">Next steps</h2>
        <div className="space-y-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xl">
                {step.icon}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white">{step.title}</p>
                <p className="mt-0.5 text-xs text-white/40">{step.description}</p>
              </div>
              <span className="chip text-white/20">Coming soon</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
