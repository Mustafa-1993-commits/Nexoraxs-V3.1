// @deprecated — use lib/store/ instead
const THEME_KEY   = "core_theme";
const THEME_EVENT = "nexoraxs:theme-change";

export type Theme = "light" | "dark";

export function getTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return sessionStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
}

export function setTheme(value: Theme): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(THEME_KEY, value);
  window.dispatchEvent(new Event(THEME_EVENT));
}

export function subscribeToTheme(cb: () => void): () => void {
  window.addEventListener(THEME_EVENT, cb);
  return () => window.removeEventListener(THEME_EVENT, cb);
}
