export interface MockCustomer {
  id: string;
  name: string;
  phone: string;
  email: string;
  segment: "VIP" | "Regular" | "New";
  spend: string;
  orders: number;
  lastOrder: string;
}

export const MOCK_CUSTOMERS: MockCustomer[] = [
  {
    id: "c1",
    name: "Aya Hassan",
    phone: "+20 100 123 4567",
    email: "aya@example.com",
    segment: "VIP",
    spend: "EGP 18,420",
    orders: 47,
    lastOrder: "3 Jan 2026",
  },
  {
    id: "c2",
    name: "Omar Khaled",
    phone: "+20 111 234 5678",
    email: "omar@example.com",
    segment: "Regular",
    spend: "EGP 7,610",
    orders: 21,
    lastOrder: "2 Jan 2026",
  },
  {
    id: "c3",
    name: "Layla Nasser",
    phone: "+20 122 345 6789",
    email: "layla@example.com",
    segment: "New",
    spend: "EGP 540",
    orders: 2,
    lastOrder: "2 Jan 2026",
  },
  {
    id: "c4",
    name: "Ahmed Samy",
    phone: "+20 100 456 7890",
    email: "ahmed@example.com",
    segment: "Regular",
    spend: "EGP 4,320",
    orders: 14,
    lastOrder: "1 Jan 2026",
  },
  {
    id: "c5",
    name: "Mariam Hassan",
    phone: "+20 111 567 8901",
    email: "mariam@example.com",
    segment: "VIP",
    spend: "EGP 22,100",
    orders: 58,
    lastOrder: "30 Dec 2025",
  },
];

export const MOCK_CUSTOMER_ORDERS = [
  {
    id: "#ORD-10428",
    date: "3 Jan 2026",
    items: 3,
    total: "EGP 1,240",
    method: "Visa",
    status: "Paid" as const,
  },
  {
    id: "#ORD-10391",
    date: "28 Dec 2025",
    items: 2,
    total: "EGP 87.00",
    method: "Cash",
    status: "Paid" as const,
  },
  {
    id: "#ORD-10344",
    date: "21 Dec 2025",
    items: 5,
    total: "EGP 214.00",
    method: "Mada",
    status: "Paid" as const,
  },
  {
    id: "#ORD-10298",
    date: "12 Dec 2025",
    items: 1,
    total: "EGP 44.00",
    method: "Cash",
    status: "Refund" as const,
  },
  {
    id: "#ORD-10241",
    date: "4 Dec 2025",
    items: 4,
    total: "EGP 360.00",
    method: "Visa",
    status: "Paid" as const,
  },
];
