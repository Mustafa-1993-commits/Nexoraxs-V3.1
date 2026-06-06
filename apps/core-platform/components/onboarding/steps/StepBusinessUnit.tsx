"use client";

import { useState } from "react";
import { setBUName, setBUIndustry, getBUName, getBUIndustry } from "@/lib/core-session";

const BU_INDUSTRIES = [
  "Retail / General",
  "Retail / Pharmacy",
  "Restaurant / Cafe",
  "Supermarket",
  "Electronics / Mobile",
  "Cosmetics",
  "Medical Supplies",
  "Other",
] as const;

interface Errors { name?: string; industry?: string; }

export function StepBusinessUnit({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [name,     setName]     = useState(getBUName()     ?? "");
  const [industry, setIndustry] = useState(getBUIndustry() ?? "");
  const [errors,   setErrors]   = useState<Errors>({});

  function validate(): boolean {
    const e: Errors = {};
    if (!name.trim())     e.name     = "Business unit name is required";
    if (!industry.trim()) e.industry = "Industry is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleContinue() {
    if (!validate()) return;
    setBUName(name.trim());
    setBUIndustry(industry);
    onNext();
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="chip mb-2 text-white/30">{"// step 3 of 4"}</p>
        <h2 className="text-2xl font-bold tracking-tight text-white">Create your business unit</h2>
        <p className="mt-2 text-sm leading-relaxed text-white/55">
          A business unit represents one business line or activity in your workspace.
        </p>
      </div>

      <div className="space-y-4">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-white/45">Business unit name *</span>
          <input
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Mustafa Pharmacy"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-blue-500/50"
          />
          {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-white/45">Industry *</span>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-blue-500/50"
          >
            <option value="" className="bg-[#0f1017] text-white/40">Select industry…</option>
            {BU_INDUSTRIES.map((ind) => (
              <option key={ind} value={ind} className="bg-[#0f1017] text-white">{ind}</option>
            ))}
          </select>
          {errors.industry && <p className="mt-1 text-xs text-rose-400">{errors.industry}</p>}
        </label>
      </div>

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex min-w-[7rem] items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.05]"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleContinue}
          className="inline-flex min-w-[8rem] items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
