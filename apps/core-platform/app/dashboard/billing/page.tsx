"use client";

import { CreditCard, TrendingUp, CheckCircle2, Clock } from "lucide-react";
import { useApp } from "@/lib/store";

export default function BillingPage() {
  const { COMMERCE_PLAN, showToast } = useApp();

  return (
    <div className="nx-main-scroll">
      <div style={{ padding: "24px 28px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)" }}>Plan &amp; Billing</h1>
          <p style={{ fontSize: 13, color: "var(--text-2)", marginTop: 4 }}>
            Manage your subscription and plan details.
          </p>
        </div>

        {COMMERCE_PLAN ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {/* Current plan card */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-lg)", padding: "24px 28px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 140, height: 140, borderRadius: "50%", background: "radial-gradient(circle, var(--accent), transparent 70%)", opacity: 0.12, pointerEvents: "none" }} />
              <div style={{ position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "var(--r)", background: "var(--accent-weak)", color: "var(--accent)", display: "grid", placeItems: "center" }}>
                    <CreditCard size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: "var(--text-2)", marginBottom: 2 }}>Current Plan</div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "var(--text)" }}>{COMMERCE_PLAN.name}</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
                  <span className="nx-badge tone-success" style={{ fontSize: 12 }}>{COMMERCE_PLAN.status}</span>
                  {COMMERCE_PLAN.renew && COMMERCE_PLAN.renew !== "—" && (
                    <span className="nx-badge tone-neutral" style={{ fontSize: 12, display: "inline-flex", alignItems: "center", gap: 5 }}>
                      <Clock size={11} />Renews {COMMERCE_PLAN.renew}
                    </span>
                  )}
                  {COMMERCE_PLAN.total !== null && (
                    <span className="nx-badge tone-neutral" style={{ fontSize: 12 }}>
                      {COMMERCE_PLAN.total === 0 ? "Free" : `${COMMERCE_PLAN.total} EGP/mo`}
                    </span>
                  )}
                </div>

                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-2)", marginBottom: 10 }}>Plan Limits</div>
                  <div style={{ display: "flex", gap: 24 }}>
                    <div><div style={{ fontSize: 11, color: "var(--text-3)" }}>Business Units</div><div style={{ fontSize: 15, fontWeight: 700 }}>{COMMERCE_PLAN.limits.businessUnits === 99 ? "Unlimited" : COMMERCE_PLAN.limits.businessUnits}</div></div>
                    <div><div style={{ fontSize: 11, color: "var(--text-3)" }}>Branches</div><div style={{ fontSize: 15, fontWeight: 700 }}>{COMMERCE_PLAN.limits.branches === 99 ? "Unlimited" : COMMERCE_PLAN.limits.branches}</div></div>
                    <div><div style={{ fontSize: 11, color: "var(--text-3)" }}>Users</div><div style={{ fontSize: 15, fontWeight: 700 }}>{COMMERCE_PLAN.limits.users === 99 ? "Unlimited" : COMMERCE_PLAN.limits.users}</div></div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    className="nx-btn-primary"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "9px 16px" }}
                    onClick={() => showToast("Upgrade flow coming soon", "info")}
                  >
                    <TrendingUp size={14} />Upgrade Plan
                  </button>
                  <button
                    className="nx-btn"
                    style={{ fontSize: 13, padding: "9px 16px" }}
                    onClick={() => showToast("Contact support to cancel your subscription", "info")}
                  >
                    Cancel subscription
                  </button>
                </div>
              </div>
            </div>

            {/* Invoice history placeholder */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r)", padding: "20px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 16 }}>Invoice History</div>
              <div style={{ textAlign: "center", padding: "40px 24px", color: "var(--text-3)" }}>
                <CheckCircle2 size={32} style={{ marginBottom: 8, display: "block", margin: "0 auto 10px", opacity: 0.3 }} />
                <div style={{ fontSize: 13, fontWeight: 600 }}>No invoices yet</div>
                <div style={{ fontSize: 12, marginTop: 4 }}>Billing invoices will appear here when available.</div>
              </div>
            </div>
          </div>
        ) : (
          /* No active plan */
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-lg)", padding: "40px 32px", textAlign: "center" }}>
            <div style={{ width: 60, height: 60, borderRadius: "var(--r-lg)", background: "var(--accent-weak)", color: "var(--accent)", display: "grid", placeItems: "center", margin: "0 auto 20px" }}>
              <CreditCard size={28} />
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>No active subscription</div>
            <p style={{ fontSize: 13, color: "var(--text-2)", maxWidth: 340, margin: "0 auto 20px" }}>
              Complete onboarding to activate your Commerce OS plan and view billing details here.
            </p>
            <button
              className="nx-btn-primary"
              onClick={() => showToast("Complete onboarding to activate a plan", "info")}
            >
              Get started
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
