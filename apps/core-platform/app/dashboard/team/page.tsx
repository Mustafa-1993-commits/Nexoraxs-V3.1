"use client";

import { useState } from "react";
import { UserPlus } from "lucide-react";
import { useApp } from "@/lib/store";
import { InviteUserModal, type MockTeamMember } from "@/components/dashboard/InviteUserModal";

export default function TeamPage() {
  const { currentUser, currentUserDisplayName, currentWorkspace } = useApp();
  const [modalOpen, setModalOpen] = useState(false);
  const [invited, setInvited] = useState<MockTeamMember[]>([]);

  const owner: MockTeamMember = {
    id: currentUser?.id ?? "owner",
    email: currentUser?.email ?? "owner@nexoraxs.local",
    name: currentUserDisplayName,
    workspaceRole: "Owner",
    osAccess: "Commerce OS",
    businessUnitAccess: "All",
    branchAccess: "All",
    osRole: "Commerce Admin",
    status: "active",
  };

  const allMembers = [owner, ...invited];

  return (
    <div className="nx-main-scroll">
      <div style={{ padding: "24px 28px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)" }}>Team &amp; Access</h1>
            <p style={{ fontSize: 13, color: "var(--text-2)", marginTop: 4 }}>
              Manage workspace members for {currentWorkspace?.name ?? "your workspace"}.
            </p>
          </div>
          <button
            className="nx-btn-primary"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 16px", fontSize: 13 }}
            onClick={() => setModalOpen(true)}
          >
            <UserPlus size={15} />Invite User
          </button>
        </div>

        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r)", overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto auto", gap: 16, padding: "10px 18px", background: "var(--surface-2)", borderBottom: "1px solid var(--border)" }}>
            {["Member", "OS Access", "Role", "Status"].map((h) => (
              <div key={h} style={{ fontSize: 11.5, fontWeight: 600, color: "var(--text-2)" }}>{h}</div>
            ))}
          </div>

          {allMembers.map((m) => (
            <div key={m.id} style={{ display: "grid", gridTemplateColumns: "1fr auto auto auto", gap: 16, padding: "14px 18px", borderBottom: "1px solid var(--border)", alignItems: "center" }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 13, color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {m.name ?? m.email}
                </div>
                {m.name && (
                  <div style={{ fontSize: 12, color: "var(--text-3)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.email}</div>
                )}
                <div style={{ fontSize: 11.5, color: "var(--text-3)" }}>{m.workspaceRole}</div>
              </div>
              <span className="nx-badge tone-accent" style={{ fontSize: 11, whiteSpace: "nowrap" }}>{m.osAccess}</span>
              <span style={{ fontSize: 12, color: "var(--text-2)", whiteSpace: "nowrap" }}>{m.osRole}</span>
              <span
                className={`nx-badge ${m.status === "active" ? "tone-success" : "tone-warn"}`}
                style={{ fontSize: 11 }}
              >
                {m.status === "active" ? "Active" : "Pending"}
              </span>
            </div>
          ))}
        </div>
      </div>

      <InviteUserModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onInvite={(m) => { setInvited((prev) => [...prev, m]); }}
      />
    </div>
  );
}
