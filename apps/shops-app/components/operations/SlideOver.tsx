"use client";

import { useEffect } from "react";
import { Icon } from "@nexoraxs/ui";

interface SlideOverProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  width?: "md" | "lg";
}

export default function SlideOver({
  open,
  onClose,
  title,
  children,
  footer,
  width = "md",
}: SlideOverProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed inset-y-0 right-0 z-50 flex flex-col border-l border-white/10 bg-[#0d0d14] transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        } w-full ${width === "lg" ? "md:max-w-lg" : "md:max-w-md"}`}
      >
        <div className="flex flex-shrink-0 items-center justify-between border-b border-white/10 px-5 py-4">
          <h2 className="text-base font-semibold text-white">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-1 text-white/50 transition-colors hover:text-white"
          >
            <Icon name="x" className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">{children}</div>
        {footer && (
          <div className="flex-shrink-0 border-t border-white/10 px-5 py-4">
            {footer}
          </div>
        )}
      </div>
    </>
  );
}
