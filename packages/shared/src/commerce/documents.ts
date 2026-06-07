import type { OrderItem, CommerceSetup } from "@nexoraxs/types";

export function computeDoc(
  items: OrderItem[],
  setup: Partial<CommerceSetup>,
  discount = 0,
): {
  lines: Array<{ name: string; qty: number; price: number; vat: number; total: number }>;
  gross: number;
  subtotal: number;
  discount: number;
  net: number;
  vat: number;
  total: number;
  rate: number;
} {
  // rate is 0 if not VAT-registered — matches prototype computeDoc exactly
  const rate = setup.vatRegistered ? (+setup.vatRate! || 0) : 0;
  const incl = setup.pricesIncludeTax ?? true;
  let gross = 0;
  let taxableGross = 0;
  const lines = (items || []).map((i) => {
    const lineTotal = (+i.price || 0) * (+i.qty || 0);
    gross += lineTotal;
    if (i.taxable !== false) taxableGross += lineTotal;
    const lineVat =
      i.taxable !== false && rate > 0
        ? incl
          ? lineTotal - lineTotal / (1 + rate / 100)
          : lineTotal * (rate / 100)
        : 0;
    return { name: i.name, qty: i.qty, price: i.price, vat: lineVat, total: lineTotal };
  });
  // distribute discount proportionally onto taxable portion
  const afterDiscount = gross - discount;
  const taxablePortion =
    gross > 0 ? Math.max(0, taxableGross - discount * (taxableGross / gross)) : 0;
  const vat = incl
    ? taxablePortion - taxablePortion / (1 + rate / 100)
    : taxablePortion * (rate / 100);
  const net = afterDiscount - (incl ? vat : 0);
  const total = incl ? afterDiscount : afterDiscount + vat;
  return { lines, gross, subtotal: gross, discount, net, vat, total, rate };
}

export function fmtDate(iso: string | null | undefined): string {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}
