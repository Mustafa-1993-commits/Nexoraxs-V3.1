"use client";

import { useState } from "react";
import {
  setWorkspaceName,
  setWorkspaceCountry,
  setWorkspaceCurrency,
  setWorkspaceTimezone,
  getWorkspaceName,
  getWorkspaceCountry,
  getWorkspaceCurrency,
  getWorkspaceTimezone,
} from "@/lib/core-session";

interface CountryDefault { currency: string; timezone: string; }

const COUNTRY_DEFAULTS: Record<string, CountryDefault> = {
  "Egypt":                { currency: "EGP", timezone: "Africa/Cairo"      },
  "Saudi Arabia":         { currency: "SAR", timezone: "Asia/Riyadh"       },
  "United Arab Emirates": { currency: "AED", timezone: "Asia/Dubai"        },
  "Kuwait":               { currency: "KWD", timezone: "Asia/Kuwait"       },
  "Qatar":                { currency: "QAR", timezone: "Asia/Qatar"        },
  "Jordan":               { currency: "JOD", timezone: "Asia/Amman"        },
  "Bahrain":              { currency: "BHD", timezone: "Asia/Bahrain"      },
  "Morocco":              { currency: "MAD", timezone: "Africa/Casablanca" },
  "United Kingdom":       { currency: "GBP", timezone: "Europe/London"     },
  "United States":        { currency: "USD", timezone: "America/New_York"  },
  "Germany":              { currency: "EUR", timezone: "Europe/Berlin"     },
  "Other":                { currency: "",    timezone: ""                  },
};

const COUNTRIES = Object.keys(COUNTRY_DEFAULTS);

interface Errors { name?: string; country?: string; currency?: string; timezone?: string; }

export function StepWorkspace({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [name,     setName]     = useState(getWorkspaceName()     ?? "");
  const [country,  setCountry]  = useState(getWorkspaceCountry()  ?? "Egypt");
  const [currency, setCurrency] = useState(getWorkspaceCurrency() ?? COUNTRY_DEFAULTS["Egypt"].currency);
  const [timezone, setTimezone] = useState(getWorkspaceTimezone() ?? COUNTRY_DEFAULTS["Egypt"].timezone);
  const [errors,   setErrors]   = useState<Errors>({});

  function handleCountryChange(c: string) {
    setCountry(c);
    const def = COUNTRY_DEFAULTS[c];
    if (def) { setCurrency(def.currency); setTimezone(def.timezone); }
  }

  function validate(): boolean {
    const e: Errors = {};
    if (!name.trim())     e.name     = "Workspace name is required";
    if (!country.trim())  e.country  = "Country is required";
    if (!currency.trim()) e.currency = "Currency is required";
    if (!timezone.trim()) e.timezone = "Timezone is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleContinue() {
    if (!validate()) return;
    setWorkspaceName(name.trim());
    setWorkspaceCountry(country);
    setWorkspaceCurrency(currency.trim());
    setWorkspaceTimezone(timezone.trim());
    onNext();
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="chip mb-2 text-white/30">{"// step 2 of 4"}</p>
        <h2 className="text-2xl font-bold tracking-tight text-white">Create your workspace</h2>
        <p className="mt-2 text-sm leading-relaxed text-white/55">
          Your workspace is the account container for your team and Operating Systems.
        </p>
      </div>

      <div className="space-y-4">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-white/45">Workspace name *</span>
          <input
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Mustafa Group"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-blue-500/50"
          />
          {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-white/45">Country *</span>
          <select
            value={country}
            onChange={(e) => handleCountryChange(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-blue-500/50"
          >
            {COUNTRIES.map((c) => (
              <option key={c} value={c} className="bg-[#0f1017] text-white">{c}</option>
            ))}
          </select>
          {errors.country && <p className="mt-1 text-xs text-rose-400">{errors.country}</p>}
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-white/45">Currency *</span>
            <input
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              placeholder="EGP"
              className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-blue-500/50"
            />
            {errors.currency && <p className="mt-1 text-xs text-rose-400">{errors.currency}</p>}
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-white/45">Timezone *</span>
            <input
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              placeholder="Africa/Cairo"
              className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-blue-500/50"
            />
            {errors.timezone && <p className="mt-1 text-xs text-rose-400">{errors.timezone}</p>}
          </label>
        </div>
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
