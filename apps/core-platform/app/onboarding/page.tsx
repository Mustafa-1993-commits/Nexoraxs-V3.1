"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  Box,
  Building2,
  Check,
  Clock3,
  Cpu,
  Dumbbell,
  GitBranch,
  HeartPulse,
  Moon,
  Pill,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
  Stethoscope,
  Sun,
  Utensils,
  UsersRound,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";
import { useApp } from "@/lib/store";
import { OPERATING_SYSTEMS, ONB_PLANS } from "@/lib/store";
import { PhaseStepper } from "@/components/onboarding/PhaseStepper";

const STEP_KEYS = ["workspace", "chooseos", "plan"] as const;
type StepKey = (typeof STEP_KEYS)[number];
const CORE_COUNT = 3;
const STEP_LABELS: Record<StepKey, string> = {
  workspace: "Workspace",
  chooseos: "Operating System",
  plan: "Plan",
};

interface FormState {
  lang: "en" | "ar";
  name: string;
  country: string;
  currency: string;
  tz: string;
  chosenOS: string | null;
  plan: string | null;
}

interface CountryOption {
  code: string;
  flag: string;
  name: string;
  regionId: string;
  currencyCode: string;
  currencyLabel: string;
  currencySymbol: string;
  timezone: string;
  timezoneCity: string;
  gmtOffset: string;
}

const COUNTRY_OPTIONS: CountryOption[] = [
  { code: "EG", flag: "🇪🇬", name: "Egypt", regionId: "mena", currencyCode: "EGP", currencyLabel: "Egyptian Pound", currencySymbol: "E£", timezone: "Africa/Cairo", timezoneCity: "Cairo", gmtOffset: "GMT+2" },
  { code: "SA", flag: "🇸🇦", name: "Saudi Arabia", regionId: "mena", currencyCode: "SAR", currencyLabel: "Saudi Riyal", currencySymbol: "﷼", timezone: "Asia/Riyadh", timezoneCity: "Riyadh", gmtOffset: "GMT+3" },
  { code: "AE", flag: "🇦🇪", name: "United Arab Emirates", regionId: "mena", currencyCode: "AED", currencyLabel: "UAE Dirham", currencySymbol: "د.إ", timezone: "Asia/Dubai", timezoneCity: "Dubai", gmtOffset: "GMT+4" },
  { code: "QA", flag: "🇶🇦", name: "Qatar", regionId: "mena", currencyCode: "QAR", currencyLabel: "Qatari Riyal", currencySymbol: "﷼", timezone: "Asia/Qatar", timezoneCity: "Doha", gmtOffset: "GMT+3" },
  { code: "KW", flag: "🇰🇼", name: "Kuwait", regionId: "mena", currencyCode: "KWD", currencyLabel: "Kuwaiti Dinar", currencySymbol: "د.ك", timezone: "Asia/Kuwait", timezoneCity: "Kuwait", gmtOffset: "GMT+3" },
  { code: "JO", flag: "🇯🇴", name: "Jordan", regionId: "mena", currencyCode: "JOD", currencyLabel: "Jordanian Dinar", currencySymbol: "د.ا", timezone: "Asia/Amman", timezoneCity: "Amman", gmtOffset: "GMT+3" },
  { code: "MA", flag: "🇲🇦", name: "Morocco", regionId: "mena", currencyCode: "MAD", currencyLabel: "Moroccan Dirham", currencySymbol: "د.م.", timezone: "Africa/Casablanca", timezoneCity: "Casablanca", gmtOffset: "GMT+1" },
  { code: "ZA", flag: "🇿🇦", name: "South Africa", regionId: "africa", currencyCode: "ZAR", currencyLabel: "South African Rand", currencySymbol: "R", timezone: "Africa/Johannesburg", timezoneCity: "Johannesburg", gmtOffset: "GMT+2" },
  { code: "GB", flag: "🇬🇧", name: "United Kingdom", regionId: "europe", currencyCode: "GBP", currencyLabel: "British Pound", currencySymbol: "£", timezone: "Europe/London", timezoneCity: "London", gmtOffset: "GMT+0" },
  { code: "DE", flag: "🇩🇪", name: "Germany", regionId: "europe", currencyCode: "EUR", currencyLabel: "Euro", currencySymbol: "€", timezone: "Europe/Berlin", timezoneCity: "Berlin", gmtOffset: "GMT+1" },
  { code: "FR", flag: "🇫🇷", name: "France", regionId: "europe", currencyCode: "EUR", currencyLabel: "Euro", currencySymbol: "€", timezone: "Europe/Paris", timezoneCity: "Paris", gmtOffset: "GMT+1" },
  { code: "US", flag: "🇺🇸", name: "United States", regionId: "north_america", currencyCode: "USD", currencyLabel: "US Dollar", currencySymbol: "$", timezone: "America/New_York", timezoneCity: "New York", gmtOffset: "GMT-5" },
  { code: "CA", flag: "🇨🇦", name: "Canada", regionId: "north_america", currencyCode: "CAD", currencyLabel: "Canadian Dollar", currencySymbol: "$", timezone: "America/Toronto", timezoneCity: "Toronto", gmtOffset: "GMT-5" },
  { code: "BR", flag: "🇧🇷", name: "Brazil", regionId: "south_america", currencyCode: "BRL", currencyLabel: "Brazilian Real", currencySymbol: "R$", timezone: "America/Sao_Paulo", timezoneCity: "Sao Paulo", gmtOffset: "GMT-3" },
  { code: "IN", flag: "🇮🇳", name: "India", regionId: "asia", currencyCode: "INR", currencyLabel: "Indian Rupee", currencySymbol: "₹", timezone: "Asia/Kolkata", timezoneCity: "Kolkata", gmtOffset: "GMT+5:30" },
  { code: "CN", flag: "🇨🇳", name: "China", regionId: "asia", currencyCode: "CNY", currencyLabel: "Chinese Yuan", currencySymbol: "¥", timezone: "Asia/Shanghai", timezoneCity: "Shanghai", gmtOffset: "GMT+8" },
  { code: "JP", flag: "🇯🇵", name: "Japan", regionId: "asia", currencyCode: "JPY", currencyLabel: "Japanese Yen", currencySymbol: "¥", timezone: "Asia/Tokyo", timezoneCity: "Tokyo", gmtOffset: "GMT+9" },
  { code: "AU", flag: "🇦🇺", name: "Australia", regionId: "oceania", currencyCode: "AUD", currencyLabel: "Australian Dollar", currencySymbol: "$", timezone: "Australia/Sydney", timezoneCity: "Sydney", gmtOffset: "GMT+10" },
];

const ALL_CURRENCIES = Array.from(
  new Map(COUNTRY_OPTIONS.map((country) => [country.currencyCode, {
    code: country.currencyCode,
    countryCode: country.currencyCode === "EUR" ? "EU" : country.code,
    label: country.currencyLabel,
    symbol: country.currencySymbol,
  }])).values(),
).sort((a, b) => a.code.localeCompare(b.code));

const ALL_TIMEZONES = Array.from(
  new Map(COUNTRY_OPTIONS.map((country) => [country.timezone, {
    timezone: country.timezone,
    countryCode: country.code,
    city: country.timezoneCity,
    gmtOffset: country.gmtOffset,
  }])).values(),
).sort((a, b) => a.timezone.localeCompare(b.timezone));

function countryByCode(code: string): CountryOption | undefined {
  return COUNTRY_OPTIONS.find((country) => country.code === code);
}

function countryLabel(country: CountryOption): string {
  return country.name;
}

function timezoneLabel(item: { timezone: string; countryCode: string; city: string; gmtOffset: string }): string {
  return `${item.city} — ${item.gmtOffset}`;
}

function FlagIcon({ countryCode }: { countryCode: string }) {
  return (
    <span
      className={`fi fi-${countryCode.toLowerCase()}`}
      aria-hidden="true"
      style={{ width: 20, height: 14, borderRadius: 2, boxShadow: "0 0 0 1px color-mix(in srgb, var(--border), transparent 35%)" }}
    />
  );
}

function FlagOption({ countryCode, children }: { countryCode: string; children: ReactNode }) {
  return (
    <span className="nx-location-option" style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
      <FlagIcon countryCode={countryCode} />
      <span className="nx-location-copy" style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
        <span className="nx-location-main" style={{ fontWeight: 800, fontSize: 14, lineHeight: 1.2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{children}</span>
        <span className="nx-location-sub" style={{ color: "var(--text-3)", fontSize: 11.5, lineHeight: 1.2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Country / Market</span>
      </span>
    </span>
  );
}

function CurrencyOption({ currency }: { currency: { code: string; countryCode: string; label: string; symbol: string } }) {
  return (
    <span className="nx-location-option" style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
      <span className="nx-currency-mark" aria-hidden="true" style={{ minWidth: 38, height: 30, borderRadius: 8, display: "grid", placeItems: "center", background: "var(--accent-weak)", color: "var(--accent)", fontWeight: 900, fontSize: 13, flexShrink: 0 }}>{currency.symbol}</span>
      <span className="nx-location-copy" style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
        <span className="nx-location-main" style={{ fontWeight: 800, fontSize: 14, lineHeight: 1.2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{currency.code}</span>
        <span className="nx-location-sub" style={{ color: "var(--text-3)", fontSize: 11.5, lineHeight: 1.2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{currency.label}</span>
      </span>
    </span>
  );
}

function TimezoneOption({ item }: { item: { timezone: string; countryCode: string; city: string; gmtOffset: string } }) {
  return (
    <span className="nx-location-option" style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
      <span className="nx-time-mark" aria-hidden="true" style={{ width: 32, height: 32, borderRadius: 999, display: "grid", placeItems: "center", background: "var(--surface-2)", color: "var(--text-2)", border: "1px solid var(--border)", flexShrink: 0 }}><Clock3 size={15} /></span>
      <span className="nx-location-copy" style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
        <span className="nx-location-main" style={{ fontWeight: 800, fontSize: 14, lineHeight: 1.2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{timezoneLabel(item)}</span>
        <span className="nx-location-sub" style={{ color: "var(--text-3)", fontSize: 11.5, lineHeight: 1.2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.timezone}</span>
      </span>
    </span>
  );
}

function FlagSelect<T extends string>({
  value,
  items,
  onChange,
  render,
}: {
  value: T;
  items: T[];
  onChange: (value: T) => void;
  render: (value: T) => ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <button
        type="button"
        className="nx-location-card selected"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        style={{
          width: "100%",
          minHeight: 82,
          padding: "14px 14px",
          border: "1px solid var(--border)",
          borderRadius: "var(--r)",
          background: open ? "var(--surface-2)" : "var(--surface)",
          color: "var(--text)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          textAlign: "start",
          boxShadow: "var(--sh-sm)",
          cursor: "pointer",
        }}
      >
        {render(value)}
        <span className="nx-location-chevron" style={{ color: "var(--text-3)", fontSize: 12, flexShrink: 0 }}>▾</span>
      </button>
      {open && (
        <div
          role="listbox"
          style={{
            position: "absolute",
            insetInline: 0,
            top: "calc(100% + 6px)",
            zIndex: 30,
            maxHeight: 230,
            overflowY: "auto",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "var(--r-sm)",
            boxShadow: "var(--sh-lg)",
            padding: 4,
          }}
        >
          {items.map((item) => {
            const active = item === value;
            return (
              <button
                key={item}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => { onChange(item); setOpen(false); }}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                  padding: "9px 10px",
                  border: 0,
                  borderRadius: 8,
                  background: active ? "var(--accent-weak)" : "transparent",
                  color: "var(--text)",
                  font: "inherit",
                  cursor: "pointer",
                  textAlign: "start",
                }}
              >
                {render(item)}
                {active && <Check size={13} style={{ color: "var(--accent)", flexShrink: 0 }} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

const iconMap: Record<string, LucideIcon> = {
  box: Box,
  cpu: Cpu,
  dumbbell: Dumbbell,
  "git-branch": GitBranch,
  "heart-pulse": HeartPulse,
  pill: Pill,
  shirt: Shirt,
  "shopping-bag": ShoppingBag,
  "shopping-cart": ShoppingCart,
  sparkles: Sparkles,
  store: Store,
  stethoscope: Stethoscope,
  utensils: Utensils,
  "users-round": UsersRound,
  wrench: Wrench,
};

function CatalogIcon({ name, size = 19 }: { name: string; size?: number }) {
  const Icon = iconMap[name] ?? Box;
  return <Icon size={size} strokeWidth={1.8} />;
}

function planPriceParts(price: string): { amount: string; per?: string } {
  if (price === "Free") return { amount: "Free", per: "14-day trial" };
  if (price === "Custom") return { amount: "Custom", per: "Contact sales" };
  return { amount: price.replace(" EGP/mo", ""), per: "EGP / mo" };
}

export default function OnboardingPage() {
  const {
    isHydrated, isAuthenticated, isOnboardingComplete,
    lang, setLang, theme, toggleTheme, showToast, logoutUser,
    createWorkspace, selectOS, selectPlan, completeOnboarding,
  } = useApp();
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [f, setF] = useState<FormState>({
    lang,
    name: "",
    country: "EG",
    currency: "EGP",
    tz: "Africa/Cairo",
    chosenOS: null,
    plan: null,
  });
  const [manualLocation, setManualLocation] = useState({
    currency: false,
    timezone: false,
  });

  const upd = (patch: Partial<FormState>) => setF((p) => ({ ...p, ...patch }));

  function applyCountry(nextCountryCode: string) {
    const country = countryByCode(nextCountryCode);
    if (!country) return;
    setF((prev) => ({
      ...prev,
      country: country.code,
      currency: manualLocation.currency ? prev.currency : country.currencyCode,
      tz: manualLocation.timezone ? prev.tz : country.timezone,
    }));
  }

  function changeCurrency(currency: string) {
    setManualLocation((prev) => ({ ...prev, currency: true }));
    upd({ currency });
  }

  function changeTimezone(tz: string) {
    setManualLocation((prev) => ({ ...prev, timezone: true }));
    upd({ tz });
  }

  useEffect(() => {
    if (!isHydrated) return;
    if (!isAuthenticated) { router.replace("/login"); return; }
    if (isOnboardingComplete) { router.replace("/dashboard/apps"); return; }
  }, [isHydrated, isAuthenticated, isOnboardingComplete, router]);

  const cur = STEP_KEYS[step] as StepKey;
  const isLast = step === STEP_KEYS.length - 1;
  const stepLabels = STEP_KEYS.map((k) => STEP_LABELS[k]);

  const canNext = (() => {
    if (cur === "workspace") return !!f.name.trim();
    if (cur === "chooseos") return !!f.chosenOS;
    if (cur === "plan") return !!f.plan;
    return true;
  })();

  const osObj = OPERATING_SYSTEMS.find((o) => o.id === f.chosenOS);
  const osName = osObj?.name || "your operating system";
  const countryCodes = COUNTRY_OPTIONS.map((country) => country.code);
  const currencyCodes = ALL_CURRENCIES.map((currency) => currency.code);
  const timezoneValues = ALL_TIMEZONES.map((tz) => tz.timezone);

  function renderCountry(code: string) {
    const country = countryByCode(code) ?? COUNTRY_OPTIONS[0];
    return <FlagOption countryCode={country.code}>{countryLabel(country)}</FlagOption>;
  }

  function renderCurrency(code: string) {
    const currency = ALL_CURRENCIES.find((item) => item.code === code) ?? ALL_CURRENCIES[0];
    return <CurrencyOption currency={currency} />;
  }

  function renderTimezone(timezone: string) {
    const item = ALL_TIMEZONES.find((tz) => tz.timezone === timezone) ?? ALL_TIMEZONES[0];
    return <TimezoneOption item={item} />;
  }

  function finish() {
    createWorkspace({
      name: f.name,
      country: countryByCode(f.country)?.name || f.country,
      currency: f.currency || "EGP",
      timezone: f.tz || "Africa/Cairo",
    });
    selectOS(f.chosenOS!);
    selectPlan(f.plan as "starter" | "pro" | "business");
    completeOnboarding();
    if (f.chosenOS === "commerce") {
      showToast("Workspace ready — continue Commerce OS setup from the Product Hub.", "success");
      router.push("/dashboard/apps");
    } else {
      showToast(`${osName} is coming soon — Commerce OS is the active system in this MVP.`, "info");
      router.push("/dashboard");
    }
  }

  function next() {
    if (isLast) { finish(); return; }
    setStep((s) => s + 1);
  }
  function back() {
    if (step > 0) { setStep((s) => s - 1); return; }
    router.push("/welcome");
  }
  function signOut() { logoutUser(); router.push("/login"); }

  return (
    <div className="nx-onb">
      {/* Top bar */}
      <div className="nx-onb-bar">
        <span style={{ fontWeight: 800, fontSize: 17, color: "var(--accent)", letterSpacing: "-.02em" }}>NexoraXS</span>
        <span className="nx-spacer" />
        <button className="nx-icon-btn" onClick={toggleTheme} title="Toggle theme">
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <div className="nx-langswitch" style={{ background: "var(--surface-3)" }}>
          <button
            className={lang === "en" ? "on" : ""}
            style={{ color: lang === "en" ? "var(--text)" : "var(--text-3)" }}
            onClick={() => { setLang("en"); upd({ lang: "en" }); }}
          >EN</button>
          <button
            className={lang === "ar" ? "on" : ""}
            style={{ color: lang === "ar" ? "var(--text)" : "var(--text-3)" }}
            onClick={() => { setLang("ar"); upd({ lang: "ar" }); }}
          >ع</button>
        </div>
        <button className="nx-link" style={{ fontSize: 13 }} onClick={signOut}>Sign out</button>
      </div>

      {/* Phase stepper */}
      <div style={{ padding: "22px 24px 6px", display: "flex", justifyContent: "center" }}>
        <PhaseStepper steps={stepLabels} current={step} coreCount={CORE_COUNT} />
      </div>

      {/* Body */}
      <div className="nx-onb-body" style={{ paddingTop: 18 }}>
        <div
          key={cur}
          className={["nx-onb-card", cur === "plan" || cur === "chooseos" ? "wide" : ""].filter(Boolean).join(" ")}
        >
          {/* ── Step: Workspace ── */}
          {cur === "workspace" && (
            <>
              <span className="nx-eyebrow">Your company</span>
              <h1 className="nx-onb-h" style={{ marginTop: 8 }}>Create your workspace</h1>
              <p className="nx-onb-sub">The workspace is your company or group — the home for billing, teams and every operating system.</p>
              <div className="nx-form-grid" style={{ marginTop: 22 }}>
                <div className="nx-field">
                  <label className="nx-field-label">Workspace name</label>
                  <div className="nx-input-wrap">
                    <Building2 size={16} className="nx-input-icon" />
                    <input
                      className="nx-input has-icon"
                      value={f.name}
                      onChange={(e) => upd({ name: e.target.value })}
                      placeholder="Acme Group"
                    />
                  </div>
                  <div className="nx-field-hint">e.g. Mustafa Group — your parent company, not a single shop.</div>
                </div>
                <div className="nx-location-section" style={{ display: "grid", gap: 10 }}>
                  <div className="nx-field-label">Location &amp; Defaults</div>
                  <div className="nx-location-grid" style={{ display: "grid", gap: 12 }}>
                    <div className="nx-field">
                      <FlagSelect
                        value={f.country}
                        items={countryCodes}
                        onChange={applyCountry}
                        render={renderCountry}
                      />
                    </div>
                    <div className="nx-field">
                      <FlagSelect
                        value={f.currency}
                        items={currencyCodes}
                        onChange={changeCurrency}
                        render={renderCurrency}
                      />
                    </div>
                    <div className="nx-field">
                      <FlagSelect
                        value={f.tz}
                        items={timezoneValues}
                        onChange={changeTimezone}
                        render={renderTimezone}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ── Step: Choose OS ── */}
          {cur === "chooseos" && (
            <>
              <span className="nx-eyebrow">Product Hub</span>
              <h1 className="nx-onb-h" style={{ marginTop: 8 }}>Choose an operating system</h1>
              <p className="nx-onb-sub">Pick the system to set up first. You can add more to {f.name} anytime — each has its own subscription.</p>
              <div className="nx-hub-grid" style={{ marginTop: 22 }}>
                {OPERATING_SYSTEMS.map((os) => {
                  const avail = os.status === "available";
                  const on = f.chosenOS === os.id;
                  return (
                    <button
                      key={os.id}
                      className={["nx-choice", on ? "on" : "", !avail ? "disabled" : ""].filter(Boolean).join(" ")}
                      style={{ flexDirection: "column", alignItems: "flex-start", gap: 10, padding: 16 }}
                      onClick={() => avail && upd({ chosenOS: os.id })}
                      disabled={!avail}
                    >
                      <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <span
                          className="nx-choice-ic"
                          style={{ background: os.accent + "1a", color: os.accent }}
                        >
                          <CatalogIcon name={os.icon} />
                        </span>
                        <span className={`nx-badge ${avail ? "tone-pos" : "tone-neutral"}`} style={{ fontSize: 11 }}>
                          {avail ? "Available" : "Soon"}
                        </span>
                      </div>
                      <span style={{ fontWeight: 700, fontSize: 14 }}>{os.name}</span>
                      <span style={{ fontSize: 11.5, color: "var(--text-2)", lineHeight: 1.4, fontWeight: 600 }}>{os.tagline}</span>
                      {on && <span className="nx-choice-check" style={{ insetBlockStart: 16, insetInlineEnd: 16 }}><Check size={13} /></span>}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* ── Step: Plan ── */}
          {cur === "plan" && (
            <>
              <span className="nx-eyebrow">{osName}</span>
              <h1 className="nx-onb-h" style={{ marginTop: 8 }}>Choose a plan</h1>
              <p className="nx-onb-sub">Start free for 14 days. Pick the plan for {osName} — you only pay for the systems you switch on.</p>
              <div className="nx-plan-grid">
                {ONB_PLANS.map((p) => {
                  const price = planPriceParts(p.price);
                  return (
                    <button
                      key={p.key}
                      className={"nx-choice nx-plan-choice" + (f.plan === p.key ? " on" : "")}
                      onClick={() => upd({ plan: p.key })}
                    >
                      {p.popular && <span className="nx-plan-pop">Recommended</span>}
                      <span className="nx-plan-name">{p.name}</span>
                      <span className="nx-plan-price">
                        {price.amount}
                        {price.per ? <span>{price.per}</span> : null}
                      </span>
                      <span className="nx-plan-tagline">{p.tagline}</span>
                      <span className="nx-plan-sep" />
                      <span className="nx-plan-features">
                        {p.features.map((ft) => (
                          <span key={ft}>
                            <Check size={13} strokeWidth={2.1} />{ft}
                          </span>
                        ))}
                      </span>
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* Nav actions */}
          <div className="nx-onb-actions">
            <button className="nx-btn" onClick={back} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <ArrowLeft size={16} />Back
            </button>
            <button
              className="nx-btn-primary"
              disabled={!canNext}
              onClick={next}
              style={{ display: "flex", alignItems: "center", gap: 8 }}
            >
              {isLast ? "Finish setup" : "Continue"}
              {isLast ? <Check size={16} /> : <ArrowRight size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
