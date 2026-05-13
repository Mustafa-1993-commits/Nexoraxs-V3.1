"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ModeCard } from "@/components/onboarding/ModeCard";
import { setMode, type ShopsMode } from "@/lib/mode";

const modes: { mode: ShopsMode; title: string; description: string; icon: string }[] = [
  {
    mode: "business",
    title: "Business Management",
    icon: "🏢",
    description:
      "Manage internal operations — inventory, staff, and reporting for a physical or hybrid business.",
  },
  {
    mode: "store",
    title: "Online Store",
    icon: "🛒",
    description:
      "Run a customer-facing storefront — product listings, cart, and orders for e-commerce.",
  },
  {
    mode: "both",
    title: "Both",
    icon: "✦",
    description:
      "Access all Business Management and Online Store features in one unified workspace.",
  },
];

export default function OnboardingPage() {
  const [selected, setSelected] = useState<ShopsMode | null>(null);
  const router = useRouter();

  const handleContinue = () => {
    if (!selected) return;
    setMode(selected);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Top brand bar */}
      <header className="border-b border-white/5 bg-[#0a0a0f]/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-lg text-sm font-bold text-white"
              style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6,#06b6d4)" }}
            >
              S
            </div>
            <span className="text-sm font-semibold text-white">
              Nexora<span className="gradient-text">XS</span>{" "}
              <span className="text-white/50 font-normal">Shops</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-xl px-4 pb-16 pt-14">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="chip mb-3 text-white/30">{"// onboarding"}</p>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Choose your shop mode
          </h1>
          <p className="mt-3 text-sm text-white/50">
            Select how you want to use NexoraXS Shops. You can change this later in Settings.
          </p>
        </div>

        {/* Mode cards */}
        <div className="space-y-3">
          {modes.map((m) => (
            <ModeCard
              key={m.mode}
              mode={m.mode}
              title={m.title}
              description={m.description}
              icon={m.icon}
              selected={selected === m.mode}
              onSelect={setSelected}
            />
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6">
          <button
            type="button"
            onClick={handleContinue}
            disabled={!selected}
            className={`w-full rounded-xl py-3 text-sm font-semibold text-white transition-all ${
              selected
                ? "btn-primary"
                : "cursor-not-allowed border border-white/10 bg-white/5 text-white/30"
            }`}
          >
            Continue →
          </button>
        </div>

        {/* Footer links */}
        <div className="mt-10 flex justify-center gap-6">
          <a href="#" className="text-xs text-white/30 transition-colors hover:text-white/60">
            Documentation
          </a>
          <a href="#" className="text-xs text-white/30 transition-colors hover:text-white/60">
            Support
          </a>
        </div>
      </main>
    </div>
  );
}
