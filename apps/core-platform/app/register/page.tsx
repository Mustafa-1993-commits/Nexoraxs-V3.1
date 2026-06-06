"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/lib/store";
import { AuthShell } from "@/components/auth/AuthShell";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { PasswordStrength } from "@/components/auth/PasswordStrength";
import { SocialAuth } from "@/components/auth/SocialAuth";

export default function RegisterPage() {
  const { createUser, isAuthenticated } = useApp();
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) router.replace("/welcome");
  }, [isAuthenticated, router]);

  if (isAuthenticated) return null;

  function validate(): string {
    if (!fullName.trim()) return "Full name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Enter a valid email address.";
    if (password.length < 8) return "Password must be at least 8 characters.";
    if (password !== confirm) return "Passwords do not match.";
    return "";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validate();
    if (err) { setError(err); return; }
    setLoading(true);
    const result = createUser({ fullName: fullName.trim(), email, password });
    setLoading(false);
    if (result === "email_taken") {
      setError("An account with this email already exists.");
    } else {
      router.push("/welcome");
    }
  }

  return (
    <AuthShell title="Create your account" subtitle="Start your free NexoraXS trial today.">
      <SocialAuth />
      <form onSubmit={handleSubmit} className="nx-auth-form-fields" style={{ marginTop: 4 }}>
        {error && (
          <div className="nx-auth-banner" style={{ background: "var(--danger-weak)", borderColor: "var(--danger)", color: "var(--danger)" }}>
            {error}
          </div>
        )}

        <div className="nx-field">
          <label className="nx-field-label" htmlFor="fullName">Full name</label>
          <input
            id="fullName"
            className="nx-input"
            type="text"
            placeholder="Mustafa Hassan"
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

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
          <label className="nx-field-label" htmlFor="password">Password</label>
          <PasswordInput
            id="password"
            placeholder="At least 8 characters"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordStrength password={password} />
        </div>

        <div className="nx-field">
          <label className="nx-field-label" htmlFor="confirm">Confirm password</label>
          <PasswordInput
            id="confirm"
            placeholder="Repeat password"
            autoComplete="new-password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>

        <button type="submit" className="nx-auth-btn" disabled={loading} style={{ marginTop: 8 }}>
          {loading ? "Creating account…" : "Create account"}
        </button>
      </form>

      <div className="nx-auth-below">
        Already have an account?{" "}
        <Link href="/login" className="nx-link">Sign in</Link>
      </div>
    </AuthShell>
  );
}
