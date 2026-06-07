"use client";

import { useState } from "react";
import { setLocale } from "@/lib/locale";

type LangOption = "en" | "ar";

const OPTIONS: { value: LangOption; label: string; sublabel: string }[] = [
  { value: "en", label: "English",  sublabel: "Left-to-right · EN" },
  { value: "ar", label: "العربية", sublabel: "Right-to-left · AR" },
];

export function StepLanguage({ onNext }: { onNext: () => void }) {
  const [selected, setSelected] = useState<LangOption | null>(null);

  function handleSelect(lang: LangOption) {
    setSelected(lang);
    setLocale(lang);
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="chip mb-2 text-white/30">{"// step 1 of 4"}</p>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Choose your language
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-white/55">
          Select the interface language. You can change this later from Settings.
        </p>
      </div>

      <div className="space-y-3">
        {OPTIONS.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => handleSelect(opt.value)}
            className={[
              "flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-colors",
              selected === opt.value
                ? "border-blue-500 bg-blue-500/10"
                : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]",
            ].join(" ")}
          >
            <div className="flex-1">
              <div className="text-sm font-semibold text-white">{opt.label}</div>
              <div className="mt-0.5 text-xs text-white/45">{opt.sublabel}</div>
            </div>
            <div
              className={[
                "h-5 w-5 rounded-full border-2 transition-colors",
                selected === opt.value
                  ? "border-blue-500 bg-blue-500"
                  : "border-white/20",
              ].join(" ")}
            />
          </button>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onNext}
          disabled={!selected}
          className="inline-flex min-w-[8rem] items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
