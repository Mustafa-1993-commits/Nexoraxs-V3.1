"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { MailCheck } from "lucide-react";
import { useApp } from "@/lib/store";
import { AuthShell } from "@/components/auth/AuthShell";

const CODE_LENGTH = 6;
const AUTO_SUBMIT_DELAY_MS = 150;

export default function VerifyEmailPage() {
  const { isHydrated, isAuthenticated, currentUser, showToast } = useApp();
  const router = useRouter();
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [code, setCode] = useState<string[]>(Array.from({ length: CODE_LENGTH }, () => ""));
  const [error, setError] = useState("");
  const [resent, setResent] = useState(false);

  const email = currentUser?.email ?? "";
  const codeValue = useMemo(() => code.join(""), [code]);
  const isComplete = /^\d{6}$/.test(codeValue);

  useEffect(() => {
    if (!isHydrated) return;
    if (!isAuthenticated || !email) router.replace("/register");
  }, [email, isAuthenticated, isHydrated, router]);

  useEffect(() => {
    if (!isComplete) return;
    const timer = window.setTimeout(() => router.push("/welcome"), AUTO_SUBMIT_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [isComplete, router]);

  function focusInput(index: number) {
    inputRefs.current[index]?.focus();
    inputRefs.current[index]?.select();
  }

  function handleChange(index: number, value: string) {
    setError("");
    const digit = value.replace(/\D/g, "").slice(-1);
    setCode((prev) => {
      const next = [...prev];
      next[index] = digit;
      return next;
    });
    if (digit && index < CODE_LENGTH - 1) focusInput(index + 1);
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Backspace") return;
    if (code[index]) {
      setCode((prev) => {
        const next = [...prev];
        next[index] = "";
        return next;
      });
      return;
    }
    if (index > 0) focusInput(index - 1);
  }

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    e.preventDefault();
    setError("");
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, CODE_LENGTH);
    if (!pasted) return;
    setCode(Array.from({ length: CODE_LENGTH }, (_, index) => pasted[index] ?? ""));
    focusInput(Math.min(pasted.length, CODE_LENGTH) - 1);
  }

  function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    if (!isComplete) {
      setError("Enter the 6-digit verification code.");
      return;
    }
    router.push("/welcome");
  }

  function handleResend() {
    setResent(true);
    showToast("Verification email resent.", "success");
  }

  return (
    <AuthShell title="Verify your email" subtitle={email ? `We sent a 6-digit code to ${email}.` : "We sent a 6-digit code to your email."} narrow>
      <form onSubmit={handleVerify} className="nx-auth-verify">
        <div className="nx-auth-verify-icon" aria-hidden="true">
          <MailCheck size={28} />
        </div>

        {error && (
          <div className="nx-auth-banner" style={{ background: "var(--danger-weak)", borderColor: "var(--danger)", color: "var(--danger)" }}>
            {error}
          </div>
        )}

        <div className="nx-auth-otp" aria-label="Verification code">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(node) => {
                inputRefs.current[index] = node;
              }}
              className="nx-auth-otp-input"
              inputMode="numeric"
              autoComplete={index === 0 ? "one-time-code" : "off"}
              pattern="[0-9]*"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              aria-label={`Digit ${index + 1}`}
            />
          ))}
        </div>

        <button type="submit" className="nx-auth-btn" disabled={!isComplete}>
          Continue
        </button>

        <div className="nx-auth-verify-actions">
          <span>Didn&apos;t get the code?</span>
          <button type="button" className="nx-link" onClick={handleResend} disabled={resent}>
            {resent ? "Email resent" : "Resend email"}
          </button>
        </div>

        <button type="button" className="nx-auth-under-link" onClick={() => router.push("/register")}>
          Wrong address? Change email
        </button>
      </form>
    </AuthShell>
  );
}
