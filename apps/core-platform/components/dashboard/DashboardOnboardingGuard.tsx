"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isOnboardingDone } from "@/lib/core-session";

export function DashboardOnboardingGuard() {
  const router = useRouter();

  useEffect(() => {
    if (!isOnboardingDone()) {
      router.replace("/onboarding");
    }
  }, [router]);

  return null;
}
