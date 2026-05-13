"use client";

import { usePathname } from "next/navigation";

const titles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/products":  "Products",
  "/orders":    "Orders",
  "/customers": "Customers",
  "/reports":   "Reports",
  "/settings":  "Settings",
};

export function Topbar() {
  const pathname = usePathname();
  const title = titles[pathname] ?? "Dashboard";

  return (
    <header className="sticky top-0 z-30 h-16 border-b border-white/5 bg-[#0a0a0f]/85 backdrop-blur-xl">
      <div className="flex h-full items-center gap-4 pl-16 pr-4 md:px-6 lg:px-8">
        {/* App label */}
        <div className="flex items-center gap-2">
          <span className="hidden text-xs font-medium text-white/40 sm:block">
            NexoraXS Shops
          </span>
          <span className="hidden text-white/20 sm:block">/</span>
          <span className="hidden text-sm font-medium text-white/80 sm:block">
            {title}
          </span>
        </div>

        <div className="flex-1" />

        {/* Search — desktop only */}
        <div className="hidden w-52 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 md:flex">
          <svg className="h-4 w-4 flex-shrink-0 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            className="flex-1 bg-transparent text-sm text-white/80 outline-none placeholder:text-white/30"
            placeholder="Search…"
          />
        </div>

        {/* User pill */}
        <button className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 py-1 pl-1 pr-2 transition-colors hover:bg-white/10">
          <div
            className="flex h-7 w-7 items-center justify-center rounded-md text-xs font-semibold text-white"
            style={{ background: "linear-gradient(135deg,#8b5cf6,#3b82f6)" }}
          >
            MA
          </div>
          <div className="hidden text-left leading-tight sm:block">
            <div className="text-xs font-medium text-white">Mustafa A.</div>
            <div className="font-mono text-[10px] text-white/40">Owner</div>
          </div>
        </button>
      </div>
    </header>
  );
}
