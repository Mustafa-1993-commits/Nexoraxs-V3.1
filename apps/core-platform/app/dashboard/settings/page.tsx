"use client";

import { useState } from "react";
import Link from "next/link";
import { Settings, Building2, Globe, Users, CreditCard } from "lucide-react";
import { useApp } from "@/lib/store";
import { COUNTRIES, CURRENCIES, TIMEZONES } from "@/lib/store";
import { LocaleToggle } from "@/components/dashboard/LocaleToggle";
import { ThemeToggle } from "@/components/dashboard/ThemeToggle";

export default function SettingsPage() {
  const { currentWorkspace, currentUser, currentUserDisplayName, showToast } = useApp();
  const [saving, setSaving] = useState(false);
  const [wsName, setWsName] = useState(currentWorkspace?.name ?? "");
  const [country, setCountry] = useState(currentWorkspace?.country ?? "Egypt");
  const [currency, setCurrency] = useState(currentWorkspace?.currency ?? "EGP");
  const [timezone, setTimezone] = useState(currentWorkspace?.timezone ?? "Africa/Cairo");

  function handleSave() {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      showToast("Workspace settings saved", "success");
    }, 600);
  }

  return (
    <div className="nx-main-scroll">
      <div style={{ padding: "24px 28px", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)" }}>Platform Settings</h1>
          <p style={{ fontSize: 13, color: "var(--text-2)", marginTop: 4 }}>
            Workspace and account configuration.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {/* Workspace section */}
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r)", padding: "22px 24px" }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 18 }}>
              <Building2 size={16} style={{ color: "var(--accent)" }} />
              <div style={{ fontWeight: 700, fontSize: 15 }}>Workspace</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div className="nx-field" style={{ gridColumn: "1 / -1" }}>
                <label className="nx-field-label">Workspace name</label>
                <input className="nx-input" value={wsName} onChange={(e) => setWsName(e.target.value)} placeholder="My Workspace" />
              </div>
              <div className="nx-field">
                <label className="nx-field-label">Country</label>
                <select className="nx-input" value={country} onChange={(e) => setCountry(e.target.value)}>
                  {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="nx-field">
                <label className="nx-field-label">Currency</label>
                <select className="nx-input" value={currency} onChange={(e) => setCurrency(e.target.value)}>
                  {CURRENCIES.map((c) => <option key={c.code} value={c.code}>{c.code} — {c.name}</option>)}
                </select>
              </div>
              <div className="nx-field" style={{ gridColumn: "1 / -1" }}>
                <label className="nx-field-label">Timezone</label>
                <select className="nx-input" value={timezone} onChange={(e) => setTimezone(e.target.value)}>
                  {TIMEZONES.map((tz) => <option key={tz} value={tz}>{tz}</option>)}
                </select>
              </div>
            </div>
            <div style={{ marginTop: 18 }}>
              <button
                className="nx-btn-primary"
                style={{ fontSize: 13, padding: "9px 18px" }}
                onClick={handleSave}
                disabled={saving}
              >
                {saving ? "Saving…" : "Save changes"}
              </button>
            </div>
          </div>

          {/* Account section */}
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r)", padding: "22px 24px" }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16 }}>
              <Settings size={16} style={{ color: "var(--accent)" }} />
              <div style={{ fontWeight: 700, fontSize: 15 }}>Account</div>
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              <div>
                <div style={{ fontSize: 11.5, color: "var(--text-3)", marginBottom: 3 }}>Name</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{currentUserDisplayName}</div>
              </div>
              <div>
                <div style={{ fontSize: 11.5, color: "var(--text-3)", marginBottom: 3 }}>Email</div>
                <div style={{ fontSize: 13, color: "var(--text)" }}>{currentUser?.email ?? "—"}</div>
              </div>
            </div>
          </div>

          {/* Language & Appearance */}
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r)", padding: "22px 24px" }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 18 }}>
              <Globe size={16} style={{ color: "var(--accent)" }} />
              <div style={{ fontWeight: 700, fontSize: 15 }}>Language &amp; Appearance</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>Interface language</div>
                  <div style={{ fontSize: 12, color: "var(--text-2)", marginTop: 2 }}>Switches language and text direction instantly.</div>
                </div>
                <LocaleToggle />
              </div>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>Theme</div>
                  <div style={{ fontSize: 12, color: "var(--text-2)", marginTop: 2 }}>Toggle between light and dark mode.</div>
                </div>
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r)", padding: "22px 24px" }}>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>Quick links</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link href="/dashboard/team" style={{ display: "flex", gap: 10, alignItems: "center", padding: "10px 14px", background: "var(--surface-2)", borderRadius: "var(--r-sm)", border: "1px solid var(--border)", textDecoration: "none", color: "var(--text)" }}>
                <Users size={16} style={{ color: "var(--accent)" }} />
                <span style={{ fontSize: 13, fontWeight: 600 }}>Team &amp; Access</span>
              </Link>
              <Link href="/dashboard/billing" style={{ display: "flex", gap: 10, alignItems: "center", padding: "10px 14px", background: "var(--surface-2)", borderRadius: "var(--r-sm)", border: "1px solid var(--border)", textDecoration: "none", color: "var(--text)" }}>
                <CreditCard size={16} style={{ color: "var(--accent)" }} />
                <span style={{ fontSize: 13, fontWeight: 600 }}>Billing</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
