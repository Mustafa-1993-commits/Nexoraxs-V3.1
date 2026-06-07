"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Users, Plus, X } from "lucide-react";
import { useApp } from "@/lib/store";

type CustomerTag = "VIP" | "Regular" | "New";

function customerTag(count: number, spent: number): CustomerTag {
  if (spent >= 10000 || count >= 10) return "VIP";
  if (count >= 2) return "Regular";
  return "New";
}

const TAG_COLORS: Record<CustomerTag, { bg: string; color: string }> = {
  VIP: { bg: "rgba(234,179,8,.15)", color: "#ca8a04" },
  Regular: { bg: "rgba(79,70,229,.12)", color: "var(--accent)" },
  New: { bg: "rgba(100,116,139,.12)", color: "var(--text-2)" },
};

export default function CustomersPage() {
  const { customers, orders, createCustomer, showToast, money } = useApp();
  const [q, setQ] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", notes: "" });

  const customerMetrics = useMemo(() => {
    const map: Record<string, { count: number; spent: number }> = {};
    orders.forEach((o) => {
      if (!o.customerId) return;
      if (!map[o.customerId]) map[o.customerId] = { count: 0, spent: 0 };
      map[o.customerId].count++;
      map[o.customerId].spent += o.total || 0;
    });
    return map;
  }, [orders]);

  const activeThisMonth = useMemo(() => {
    const start = new Date();
    start.setDate(1); start.setHours(0,0,0,0);
    return new Set(orders.filter((o) => o.customerId && new Date(o.createdAt) >= start).map((o) => o.customerId)).size;
  }, [orders]);

  const newThisWeek = useMemo(() => {
    const start = new Date();
    start.setDate(start.getDate() - 6); start.setHours(0,0,0,0);
    return customers.filter((c) => c.createdAt && new Date(c.createdAt) >= start).length;
  }, [customers]);

  const filtered = customers.filter((c) => !q || c.name.toLowerCase().includes(q.toLowerCase()) || (c.phone || "").includes(q) || (c.email || "").toLowerCase().includes(q.toLowerCase())).slice().reverse();

  function handleAdd() {
    if (!form.name.trim()) { showToast("Name is required", "warn"); return; }
    createCustomer(form);
    showToast("Customer added", "success");
    setForm({ name: "", phone: "", email: "", notes: "" });
    setShowAdd(false);
  }

  return (
    <div className="nx-main-scroll">
      <div style={{ padding: "24px 28px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
          <h1 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)" }}>Customers</h1>
          <button className="nx-btn-primary" onClick={() => setShowAdd(true)} style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 16px" }}>
            <Plus size={16} />Add Customer
          </button>
        </div>

        {/* KPI summary row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 20 }}>
          {[
            { label: "Total Customers", value: customers.length },
            { label: "Active This Month", value: activeThisMonth },
            { label: "New This Week", value: newThisWeek },
          ].map(({ label, value }) => (
            <div key={label} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r)", padding: "14px 18px" }}>
              <div style={{ fontSize: 11.5, color: "var(--text-3)", marginBottom: 4 }}>{label}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "var(--text)" }}>{value}</div>
            </div>
          ))}
        </div>

        <div style={{ position: "relative", marginBottom: 18 }}>
          <Search size={14} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "var(--text-3)" }} />
          <input className="nx-input" style={{ paddingLeft: 32, fontSize: 13, maxWidth: 360 }} placeholder="Search by name, phone, email…" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 24px", color: "var(--text-3)" }}>
            <Users size={40} style={{ opacity: 0.3, display: "block", margin: "0 auto 12px" }} />
            <div style={{ fontWeight: 600 }}>{customers.length === 0 ? "No customers yet" : "No customers match your search"}</div>
            {customers.length === 0 && <button className="nx-btn-primary" onClick={() => setShowAdd(true)} style={{ marginTop: 12 }}>Add first customer</button>}
          </div>
        ) : (
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r)", overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)", background: "var(--surface-2)" }}>
                  {["Name", "Phone", "Email", "Orders", "Spent", "Tag", "Added"].map((h) => (
                    <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontSize: 12, fontWeight: 600, color: "var(--text-2)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((c) => {
                  const metrics = customerMetrics[c.id] || { count: 0, spent: 0 };
                  const tag = customerTag(metrics.count, metrics.spent);
                  const tagStyle = TAG_COLORS[tag];
                  return (
                    <tr key={c.id} style={{ borderBottom: "1px solid var(--border)", cursor: "pointer" }}
                      onClick={() => { window.location.href = `/customers/${c.id}`; }}>
                      <td style={{ padding: "11px 14px" }}>
                        <Link href={`/customers/${c.id}`} style={{ fontWeight: 600, fontSize: 13, color: "var(--text)", textDecoration: "none" }} onClick={(e) => e.stopPropagation()}>
                          {c.name}
                        </Link>
                      </td>
                      <td style={{ padding: "11px 14px", fontSize: 12.5, color: "var(--text-2)" }}>{c.phone || "—"}</td>
                      <td style={{ padding: "11px 14px", fontSize: 12.5, color: "var(--text-2)" }}>{c.email || "—"}</td>
                      <td style={{ padding: "11px 14px", fontSize: 12.5, color: "var(--text-2)" }}>{metrics.count}</td>
                      <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: metrics.spent > 0 ? 600 : 400, color: metrics.spent > 0 ? "var(--text)" : "var(--text-3)" }}>
                        {metrics.spent > 0 ? money(metrics.spent) : "—"}
                      </td>
                      <td style={{ padding: "11px 14px" }}>
                        <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 7px", borderRadius: 99, background: tagStyle.bg, color: tagStyle.color }}>{tag}</span>
                      </td>
                      <td style={{ padding: "11px 14px", fontSize: 12, color: "var(--text-3)" }}>{c.createdAt ? new Date(c.createdAt).toLocaleDateString() : "—"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showAdd && (
        <div className="nx-modal-scrim">
          <div className="nx-modal" style={{ maxWidth: 400 }}>
            <div className="nx-modal-head">
              <h3 className="nx-modal-title">Add Customer</h3>
              <button className="nx-icon-btn" onClick={() => setShowAdd(false)}><X size={18} /></button>
            </div>
            <div className="nx-modal-body">
              <div className="nx-form-grid">
                <Field label="Full name *"><input className="nx-input" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="Ahmed Hassan" autoFocus /></Field>
                <Field label="Phone"><input className="nx-input" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} placeholder="01000000000" /></Field>
                <Field label="Email"><input className="nx-input" type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder="ahmed@email.com" /></Field>
                <Field label="Notes"><textarea className="nx-input" rows={2} value={form.notes} onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))} placeholder="Optional notes…" /></Field>
              </div>
            </div>
            <div className="nx-modal-foot">
              <button className="nx-btn" onClick={() => setShowAdd(false)}>Cancel</button>
              <button className="nx-btn-primary" onClick={handleAdd}>Add customer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="nx-field"><label className="nx-field-label">{label}</label>{children}</div>;
}
