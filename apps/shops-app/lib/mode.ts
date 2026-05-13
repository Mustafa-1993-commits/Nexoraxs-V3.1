export type ShopsMode = "business" | "store" | "both";

const KEY = "shops_mode";

export function setMode(mode: ShopsMode): void {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(KEY, mode);
  }
}

export function getMode(): ShopsMode | null {
  if (typeof window === "undefined") return null;
  const value = sessionStorage.getItem(KEY);
  if (value === "business" || value === "store" || value === "both") {
    return value;
  }
  return null;
}

export function clearMode(): void {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(KEY);
  }
}
