"use client";

import Link from "next/link";
import { Store, Stethoscope, Users, GitBranch, Dumbbell, Wrench, ExternalLink } from "lucide-react";
import { useApp } from "@/lib/store";
import { OPERATING_SYSTEMS } from "@/lib/store";
import { commerceDashboardUrl, commerceSetupUrl } from "@/lib/commerce-url";

const OS_ICONS: Record<string, React.ReactNode> = {
  store: <Store size={28} />,
  stethoscope: <Stethoscope size={28} />,
  "users-round": <Users size={28} />,
  "git-branch": <GitBranch size={28} />,
  dumbbell: <Dumbbell size={28} />,
  wrench: <Wrench size={28} />,
};

export default function ProductHubPage() {
  const {
    currentUser,
    currentWorkspace,
    currentBU,
    currentBranch,
    currentOSSubscription,
    subscriptions,
    isCommerceSetupComplete,
    isOnboardingComplete,
  } = useApp();

  const activeOsIds = subscriptions.map((s) => s.osId);
  const setupHref = commerceSetupUrl({
    user: currentUser,
    workspace: currentWorkspace,
    businessUnit: currentBU,
    branch: currentBranch,
    subscription: currentOSSubscription,
  });

  return (
    <div className="nx-main-scroll">
      <div style={{ padding: "24px 28px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)" }}>Product Hub</h1>
          <p style={{ fontSize: 13, color: "var(--text-2)", marginTop: 4 }}>
            Your active and available Operating Systems.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 18 }}>
          {OPERATING_SYSTEMS.map((os) => {
            const isActive = activeOsIds.includes(os.id);
            const isAvailable = os.status === "available";
            const isSoon = os.status === "soon";
            const setupDone = isActive && isCommerceSetupComplete;

            return (
              <div
                key={os.id}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--r-lg)",
                  padding: "22px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  opacity: isSoon ? 0.65 : 1,
                  boxShadow: isActive ? `0 0 0 2px ${os.accent}40` : "var(--sh-sm)",
                  transition: "box-shadow 0.2s",
                }}
              >
                {/* Icon + badge row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 52, height: 52, borderRadius: "var(--r)",
                      background: `${os.accent}18`,
                      color: os.accent,
                      display: "grid", placeItems: "center",
                    }}
                  >
                    {OS_ICONS[os.icon] ?? <Store size={28} />}
                  </div>
                  {isActive && (
                    <span
                      className="nx-badge tone-accent"
                      style={{ fontSize: 11, background: `${os.accent}18`, color: os.accent, border: `1px solid ${os.accent}40` }}
                    >
                      Active
                    </span>
                  )}
                  {isSoon && (
                    <span className="nx-badge tone-neutral" style={{ fontSize: 11 }}>Coming Soon</span>
                  )}
                </div>

                {/* Text */}
                <div>
                  <div style={{ fontWeight: 800, fontSize: 16, color: "var(--text)", marginBottom: 4 }}>{os.name}</div>
                  <div style={{ fontSize: 11.5, color: os.accent, fontWeight: 600, marginBottom: 6 }}>{os.tagline}</div>
                  <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.5 }}>{os.desc}</p>
                </div>

                {/* CTA */}
                {isAvailable && (
                  <div style={{ marginTop: "auto" }}>
                    {isActive && setupDone ? (
                      <Link
                        href={commerceDashboardUrl()}
                        style={{
                          display: "inline-flex", alignItems: "center", gap: 8,
                          background: os.accent, color: "#fff",
                          padding: "9px 16px", borderRadius: "var(--r-sm)",
                          fontSize: 13, fontWeight: 700, textDecoration: "none",
                        }}
                      >
                        <ExternalLink size={14} />Open Commerce OS
                      </Link>
                    ) : isActive && !setupDone ? (
                      <Link
                        href={setupHref}
                        style={{
                          display: "inline-flex", alignItems: "center", gap: 8,
                          background: os.accent, color: "#fff",
                          padding: "9px 16px", borderRadius: "var(--r-sm)",
                          fontSize: 13, fontWeight: 700, textDecoration: "none",
                        }}
                      >
                        Complete Setup
                      </Link>
                    ) : (
                      <Link
                        href={isOnboardingComplete ? setupHref : "/onboarding"}
                        style={{
                          display: "inline-flex", alignItems: "center", gap: 8,
                          background: "var(--surface-2)", color: "var(--text)",
                          border: "1px solid var(--border)",
                          padding: "9px 16px", borderRadius: "var(--r-sm)",
                          fontSize: 13, fontWeight: 600, textDecoration: "none",
                        }}
                      >
                        Set Up
                      </Link>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
