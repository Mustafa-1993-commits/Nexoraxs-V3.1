"use client";

import type { ReactNode } from "react";
import Link from "next/link";

interface AuthShellProps {
  title: string;
  subtitle?: string;
  footer?: ReactNode;
  narrow?: boolean;
  children: ReactNode;
}

export function AuthShell({ title, subtitle, footer, narrow, children }: AuthShellProps) {
  return (
    <div className="nx-auth">
      <div className="nx-auth-glow" />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.038) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.038) 1px, transparent 1px)", backgroundSize: "54px 54px", WebkitMaskImage: "radial-gradient(ellipse 75% 55% at 50% 0%, #000 25%, transparent 72%)", maskImage: "radial-gradient(ellipse 75% 55% at 50% 0%, #000 25%, transparent 72%)", pointerEvents: "none" }} />

      <div className={`nx-auth-stage${narrow ? " narrow" : ""}`}>
        {/* Logo wordmark */}
        <Link href="/" className="nx-auth-logo" style={{ textDecoration: "none" }}>
          <svg width="76" height="32" viewBox="0 0 120 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#6366f1" />
            <path d="M6 24L12 10L18 20L22 14L28 24H6Z" fill="white" fillOpacity=".9" />
            <text x="40" y="22" fontFamily="system-ui" fontWeight="800" fontSize="16" fill="white" letterSpacing="-0.02em">NexoraXS</text>
          </svg>
        </Link>

        {/* Auth card */}
        <div className="nx-auth-card nx-pop">
          <div className="nx-auth-card-head">
            <div className="nx-auth-title">{title}</div>
            {subtitle && <div className="nx-auth-sub">{subtitle}</div>}
          </div>
          {children}
        </div>

        {footer && footer}

        <p className="nx-auth-legal">
          By continuing, you agree to NexoraXS&apos;s{" "}
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
