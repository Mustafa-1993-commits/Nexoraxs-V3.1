"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";
import { useApp } from "@/lib/store";

export default function WelcomePage() {
  const { isHydrated, isAuthenticated, currentUserDisplayName } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (!isHydrated) return;
    if (!isAuthenticated) { router.replace("/login"); return; }
    // Auto-advance to onboarding after 2.5s
    const t = setTimeout(() => router.push("/onboarding"), 2500);
    return () => clearTimeout(t);
  }, [isHydrated, isAuthenticated, router]);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--bg)",
      gap: 24,
      padding: 24,
      textAlign: "center",
    }}>
      <div style={{
        width: 72, height: 72, borderRadius: 24,
        background: "var(--accent)", color: "#fff",
        display: "grid", placeItems: "center",
        boxShadow: "0 0 40px var(--accent)44",
        animation: "nx-pop .4s ease",
      }}>
        <Sparkles size={34} />
      </div>

      <div>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>
          Welcome{currentUserDisplayName ? `, ${currentUserDisplayName.split(" ")[0]}` : ""}!
        </h1>
        <p style={{ fontSize: 15, color: "var(--text-2)", maxWidth: 400, lineHeight: 1.6 }}>
          Your NexoraXS account is ready. Let&apos;s take a quick moment to set up your workspace.
        </p>
      </div>

      <p style={{ fontSize: 13, color: "var(--text-3)" }}>Taking you to setup…</p>
    </div>
  );
}
