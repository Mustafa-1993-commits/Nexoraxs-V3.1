"use client";

import { useState, type InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "className"> {
  error?: string;
}

export function PasswordInput({ error, ...props }: PasswordInputProps) {
  const [show, setShow] = useState(false);
  return (
    <div className="nx-pw-wrap">
      <input
        {...props}
        type={show ? "text" : "password"}
        className={`nx-input${error ? " nx-input-err" : ""}`}
      />
      <button
        type="button"
        className="nx-pw-toggle"
        onClick={() => setShow((s) => !s)}
        aria-label={show ? "Hide password" : "Show password"}
        tabIndex={-1}
      >
        {show ? <EyeOff size={15} /> : <Eye size={15} />}
      </button>
      {error && <div className="nx-field-error" style={{ marginTop: 5 }}>{error}</div>}
    </div>
  );
}
