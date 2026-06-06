"use client";

import { useEffect, useSyncExternalStore } from "react";
import { getLocale, subscribeToLocale } from "@/lib/locale";
import { getTheme, subscribeToTheme } from "@/lib/core-theme";

export function CoreProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribeToLocale, getLocale, () => "en" as const);
  const theme  = useSyncExternalStore(subscribeToTheme,  getTheme,  () => "dark" as const);

  useEffect(() => {
    document.documentElement.dir  = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <>{children}</>;
}
