"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/lib/store";
import { CoreShell } from "@/components/shell/CoreShell";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isHydrated, isAuthenticated, isOnboardingComplete } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (!isHydrated) return;
    if (!isAuthenticated) {
      router.replace("/login");
    } else if (!isOnboardingComplete) {
      router.replace("/onboarding");
    }
  }, [isHydrated, isAuthenticated, isOnboardingComplete, router]);

  if (!isHydrated || !isAuthenticated || !isOnboardingComplete) {
    return (
      <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#0c0e14" }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", border: "3px solid #4f46e5", borderTopColor: "transparent", animation: "nx-spin 0.8s linear infinite" }} />
      </div>
    );
  }

  return <CoreShell>{children}</CoreShell>;
}
