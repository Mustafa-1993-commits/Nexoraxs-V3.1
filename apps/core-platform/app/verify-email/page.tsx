"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { useApp } from "@/lib/store";
import { AuthShell } from "@/components/auth/AuthShell";

export default function VerifyEmailPage() {
  const { currentUser, showToast } = useApp();
  const [resent, setResent] = useState(false);

  function handleResend() {
    setResent(true);
    showToast("Verification email resent!", "success");
  }

  return (
    <AuthShell title="Verify your email" narrow>
      <div style={{ textAlign: "center" }}>
        <div style={{ width: 60, height: 60, borderRadius: 18, background: "var(--accent-weak)", color: "var(--accent)", display: "grid", placeItems: "center", margin: "0 auto 20px" }}>
          <Mail size={28} />
        </div>
        <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.6, marginBottom: 20 }}>
          We sent a verification link to <strong>{currentUser?.email || "your email"}</strong>.
          Check your inbox and click the link to continue.
        </p>
        <button
          type="button"
          className="nx-auth-btn"
          onClick={handleResend}
          disabled={resent}
          style={{ marginBottom: 16 }}
        >
          {resent ? "Email resent!" : "Resend email"}
        </button>
        <div className="nx-auth-below" style={{ marginTop: 8 }}>
          Already verified?{" "}
          <Link href="/onboarding" className="nx-link">Continue</Link>
        </div>
      </div>
    </AuthShell>
  );
}
