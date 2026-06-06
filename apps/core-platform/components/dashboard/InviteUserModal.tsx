"use client";

import { useEffect, useRef, useState } from "react";
import { getBUName, getBranchName } from "@/lib/core-session";

const WORKSPACE_ROLES = ["Owner", "Admin", "Member"] as const;
const OS_OPTIONS      = ["Commerce OS"] as const;

const COMMERCE_OS_ROLES = [
  "Commerce Admin",
  "Branch Manager",
  "Cashier",
  "Inventory Manager",
  "Accountant",
  "Viewer",
] as const;

export interface MockTeamMember {
  id: string;
  email: string;
  name?: string;
  workspaceRole: string;
  osAccess: string;
  businessUnitAccess: string;
  branchAccess: string;
  osRole: string;
  status: "active" | "pending";
}

interface Props {
  open: boolean;
  onClose: () => void;
  onInvite: (member: MockTeamMember) => void;
}

const EMPTY_FORM = {
  email: "", name: "", workspaceRole: "Member" as string,
  os: "Commerce OS" as string, buAccess: "All" as string,
  branchAccess: "All" as string, osRole: COMMERCE_OS_ROLES[0] as string,
  emailError: "",
};

export function InviteUserModal({ open, onClose, onInvite }: Props) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const upd = (p: Partial<typeof EMPTY_FORM>) => setForm((f) => ({ ...f, ...p }));

  const buName     = getBUName()     ?? null;
  const branchName = getBranchName() ?? null;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (open) setForm(EMPTY_FORM);
  }, [open]);

  if (!open) return null;

  function handleSubmit() {
    if (!form.email.trim()) { upd({ emailError: "Email is required" }); return; }
    upd({ emailError: "" });
    onInvite({
      id: `mock-${Date.now()}`,
      email: form.email.trim(),
      name:  form.name.trim() || undefined,
      workspaceRole: form.workspaceRole,
      osAccess: form.os,
      businessUnitAccess: form.buAccess,
      branchAccess: form.branchAccess,
      osRole: form.osRole,
      status: "pending",
    });
    onClose();
  }

  function handleBackdropClick(e: React.MouseEvent) {
    if (e.target === backdropRef.current) onClose();
  }

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
    >
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0f1017] p-6 shadow-2xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Invite user</h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-white/40 transition-colors hover:bg-white/5 hover:text-white"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          {/* Email */}
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-white/45">Email *</span>
            <input
              type="email"
              autoFocus
              value={form.email}
              onChange={(e) => upd({ email: e.target.value, emailError: "" })}
              placeholder="colleague@example.com"
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-blue-500/50"
            />
            {form.emailError && <p className="mt-1 text-xs text-rose-400">{form.emailError}</p>}
          </label>

          {/* Name */}
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-white/45">Name (optional)</span>
            <input
              value={form.name}
              onChange={(e) => upd({ name: e.target.value })}
              placeholder="Full name"
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-blue-500/50"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Workspace role */}
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-white/45">Workspace role</span>
              <select
                value={form.workspaceRole}
                onChange={(e) => upd({ workspaceRole: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-blue-500/50"
              >
                {WORKSPACE_ROLES.map((r) => (
                  <option key={r} value={r} className="bg-[#0f1017] text-white">{r}</option>
                ))}
              </select>
            </label>

            {/* Operating System */}
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-white/45">Operating System</span>
              <select
                value={form.os}
                onChange={(e) => upd({ os: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-blue-500/50"
              >
                {OS_OPTIONS.map((o) => (
                  <option key={o} value={o} className="bg-[#0f1017] text-white">{o}</option>
                ))}
              </select>
            </label>

            {/* Business Unit */}
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-white/45">Business Unit</span>
              <select
                value={form.buAccess}
                onChange={(e) => upd({ buAccess: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-blue-500/50"
              >
                <option value="All" className="bg-[#0f1017] text-white">All</option>
                {buName && (
                  <option value={buName} className="bg-[#0f1017] text-white">{buName}</option>
                )}
              </select>
            </label>

            {/* Branch */}
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-white/45">Branch</span>
              <select
                value={form.branchAccess}
                onChange={(e) => upd({ branchAccess: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-blue-500/50"
              >
                <option value="All" className="bg-[#0f1017] text-white">All</option>
                {branchName && (
                  <option value={branchName} className="bg-[#0f1017] text-white">{branchName}</option>
                )}
              </select>
            </label>
          </div>

          {/* OS Role */}
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-white/45">OS Role</span>
            <select
              value={form.osRole}
              onChange={(e) => upd({ osRole: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-blue-500/50"
            >
              {COMMERCE_OS_ROLES.map((r) => (
                <option key={r} value={r} className="bg-[#0f1017] text-white">{r}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/10"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Send Invite
          </button>
        </div>
      </div>
    </div>
  );
}
