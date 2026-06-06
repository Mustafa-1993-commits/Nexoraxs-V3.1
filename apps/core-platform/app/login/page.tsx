"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { useApp } from "@/lib/store";
import { AuthShell } from "@/components/auth/AuthShell";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { SocialAuth } from "@/components/auth/SocialAuth";

function LoginForm() {
  const { loginUser, isAuthenticated, isOnboardingComplete } = useApp();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetBanner, setResetBanner] = useState(searchParams.get("reset") === "success");

  useEffect(() => {
    if (isAuthenticated) {
      if (isOnboardingComplete) router.replace("/dashboard/apps");
      else router.replace("/onboarding");
    }
  }, [isAuthenticated, isOnboardingComplete, router]);

  useEffect(() => {
    if (resetBanner) {
      const t = setTimeout(() => setResetBanner(false), 4000);
      return () => clearTimeout(t);
    }
  }, [resetBanner]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = loginUser(email, password);
    setLoading(false);
    if (result === "invalid_credentials") {
      setError("Invalid email or password.");
    }
  }

  return (
    <AuthShell title="Sign in to NexoraXS" subtitle="Welcome back — your workspace is ready.">
      {resetBanner && (
        <div className="nx-auth-banner">
          <CheckCircle size={16} />
          Password reset successfully — you can now sign in.
        </div>
      )}

      <SocialAuth />
      <form onSubmit={handleSubmit} className="nx-auth-form-fields" style={{ marginTop: 4 }}>
        {error && (
          <div className="nx-auth-banner" style={{ background: "var(--danger-weak)", borderColor: "var(--danger)", color: "var(--danger)" }}>
            {error}
          </div>
        )}

        <div className="nx-field">
          <label className="nx-field-label" htmlFor="email">Email</label>
          <input
            id="email"
            className="nx-input"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="nx-field">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <label className="nx-field-label" htmlFor="password">Password</label>
            <Link href="/forgot-password" className="nx-link" style={{ fontSize: 12 }}>Forgot password?</Link>
          </div>
          <PasswordInput
            id="password"
            placeholder="Your password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="nx-auth-btn" disabled={loading} style={{ marginTop: 8 }}>
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>

      <div className="nx-auth-below">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="nx-link">Create account</Link>
      </div>
    </AuthShell>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
