"use client";

function computeStrength(password: string): number {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;
  return score;
}

const LABELS = ["Too weak", "Weak", "Fair", "Good", "Strong"];

export function PasswordStrength({ password }: { password: string }) {
  if (!password) return null;
  const strength = computeStrength(password);
  return (
    <div>
      <div className="nx-pw-meter">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`nx-pw-bar${i < strength ? ` on${Math.min(strength - 1, 3)}` : ""}`} />
        ))}
      </div>
      <div className="nx-pw-label">{LABELS[strength]}</div>
    </div>
  );
}
