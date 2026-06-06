// @deprecated — use components/shell/Shell.tsx instead
"use client";

import { usePathname } from "next/navigation";
import { Icon } from "@nexoraxs/ui";
import { LocaleToggle }          from "@/components/dashboard/LocaleToggle";
import { ThemeToggle }           from "@/components/dashboard/ThemeToggle";
import { NotificationsDropdown } from "@/components/dashboard/NotificationsDropdown";
import { UserMenuDropdown }      from "@/components/dashboard/UserMenuDropdown";

const titles: Record<string, string> = {
  "/dashboard":               "Dashboard",
  "/dashboard/apps":          "Product Hub",
  "/dashboard/billing":       "Plan & Billing",
  "/dashboard/team":          "Team & Access",
  "/dashboard/integrations":  "Integrations",
  "/dashboard/settings":      "Settings",
};

export function Topbar() {
  const pathname = usePathname();
  const title = titles[pathname] ?? "Dashboard";

  return (
    <header className="sticky top-0 z-30 h-16 border-b border-white/5 bg-[#0a0a0f]/85 backdrop-blur-xl">
      <div className="flex h-full items-center gap-2 pl-20 pr-3 sm:gap-4 md:px-6 lg:px-8">
        {/* Workspace switcher */}
        <button className="flex max-w-[8.5rem] items-center gap-2.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 transition-colors hover:bg-white/10 sm:max-w-none">
          <div
            className="flex h-6 w-6 items-center justify-center rounded-md text-[11px] font-bold text-white"
            style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)" }}
          >
            M
          </div>
          <div className="min-w-0 text-left leading-tight">
            <div className="font-mono text-[11px] text-white/40">Workspace</div>
            <div className="truncate text-xs font-medium text-white">
              Mustafa&apos;s Co.
            </div>
          </div>
          <Icon name="chevron-down" className="ml-1 h-3.5 w-3.5 text-white/40" />
        </button>

        <span className="hidden text-white/20 sm:block">/</span>
        <span className="hidden text-sm font-medium text-white/80 sm:block">
          {title}
        </span>

        <div className="flex-1" />

        {/* Search */}
        <div className="hidden w-56 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 md:flex">
          <Icon name="search" className="h-4 w-4 flex-shrink-0 text-white/30" />
          <input
            className="flex-1 bg-transparent text-sm text-white/80 outline-none placeholder:text-white/30"
            placeholder="Search…"
          />
        </div>

        <div className="flex items-center gap-2">
          <LocaleToggle />
          <ThemeToggle />
          <NotificationsDropdown />
          <UserMenuDropdown />
        </div>
      </div>
    </header>
  );
}
