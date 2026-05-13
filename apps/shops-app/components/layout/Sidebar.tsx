"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/dashboard",  icon: "◈" },
  { label: "Products",  href: "/products",   icon: "⬡" },
  { label: "Orders",    href: "/orders",     icon: "◻" },
  { label: "Customers", href: "/customers",  icon: "◉" },
  { label: "Reports",   href: "/reports",    icon: "◫" },
  { label: "Settings",  href: "/settings",   icon: "◌" },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-3.5 z-40 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#0a0a0f]/80 backdrop-blur-sm md:hidden"
        aria-label="Open navigation"
      >
        <span className="flex flex-col gap-1.5">
          <span className="h-0.5 w-5 bg-white/70 rounded" />
          <span className="h-0.5 w-5 bg-white/70 rounded" />
          <span className="h-0.5 w-5 bg-white/70 rounded" />
        </span>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-64 flex-col border-r border-white/5 bg-[#0a0a0f] transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Brand */}
        <div className="flex h-16 items-center justify-between border-b border-white/5 px-5">
          <div className="flex items-center gap-2.5">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-lg text-sm font-bold text-white"
              style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6,#06b6d4)" }}
            >
              S
            </div>
            <span className="text-sm font-semibold text-white">
              Nexora<span className="gradient-text">XS</span>{" "}
              <span className="text-white/50 font-normal">Shops</span>
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-white/40 hover:text-white md:hidden"
            aria-label="Close navigation"
          >
            ✕
          </button>
        </div>

        {/* Nav */}
        <div className="flex-1 overflow-y-auto px-3 py-5">
          <p className="chip mb-2 px-3 text-white/30">Store</p>
          <nav className="space-y-0.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`nav-item flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm
                    ${isActive ? "nav-item-active" : "text-white/50 hover:bg-white/5 hover:text-white"}`}
                >
                  <span className="text-base leading-none flex-shrink-0">{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Beta card */}
        <div className="border-t border-white/5 p-3">
          <div
            className="rounded-xl border border-white/10 p-4"
            style={{
              background:
                "linear-gradient(135deg,rgba(59,130,246,0.1),rgba(139,92,246,0.05),transparent)",
            }}
          >
            <p className="text-xs font-semibold text-white mb-1">✦ NexoraXS Shops</p>
            <p className="text-[11px] leading-relaxed text-white/40">
              Foundation release. Full commerce features coming soon.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
