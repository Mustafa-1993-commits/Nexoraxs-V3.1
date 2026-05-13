# UI Route Contracts: Shops App Foundation

**Feature**: `010-shops-app-foundation`
**Date**: 2026-05-13

These contracts define the rendered output guarantee for each route in the Shops app
shell. They are UI contracts — not API contracts — describing what a user must see
when they navigate to each URL.

---

## Root (`/`)

| Property | Value |
|----------|-------|
| Renders | Redirect only — no visible content |
| Redirect target | `/onboarding` |
| Layout | None (redirect happens before render) |
| Error state | None expected |

---

## Onboarding (`/onboarding`)

| Property | Value |
|----------|-------|
| Renders | Full-page, no sidebar |
| Required elements | NexoraXS Shops branding; 3 mode cards; confirm button |
| Mode cards | "Business Management", "Online Store", "Both" (each with title + description) |
| Selected state | Exactly one card shows active/highlighted style |
| Confirm button | Disabled when no selection; navigates to `/dashboard` when active |
| Error state | Confirm blocked if no mode selected |

---

## Dashboard (`/dashboard`) — inside route group `(app)`

| Property | Value |
|----------|-------|
| Layout | Sidebar (pinned ≥768 px, drawer <768 px) + Topbar |
| Active nav link | "Dashboard" |
| Required body elements | Selected mode name (or onboarding prompt if no mode set); "next steps" / "getting started" section |
| Prohibited elements | Fake product tables, order lists, customer rows |
| Direct-nav state | Must render without errors even when no mode is stored |

---

## Products (`/products`) — inside route group `(app)`

| Property | Value |
|----------|-------|
| Layout | Sidebar + Topbar |
| Active nav link | "Products" |
| Required body elements | "Products" heading; placeholder message |
| Prohibited elements | Data tables, forms, real product data |

---

## Orders (`/orders`) — inside route group `(app)`

| Property | Value |
|----------|-------|
| Layout | Sidebar + Topbar |
| Active nav link | "Orders" |
| Required body elements | "Orders" heading; placeholder message |
| Prohibited elements | Order lists, status badges tied to real data |

---

## Customers (`/customers`) — inside route group `(app)`

| Property | Value |
|----------|-------|
| Layout | Sidebar + Topbar |
| Active nav link | "Customers" |
| Required body elements | "Customers" heading; placeholder message |
| Prohibited elements | Customer tables, contact data |

---

## Reports (`/reports`) — inside route group `(app)`

| Property | Value |
|----------|-------|
| Layout | Sidebar + Topbar |
| Active nav link | "Reports" |
| Required body elements | "Reports" heading; placeholder message |
| Prohibited elements | Charts, fake metrics |

---

## Settings (`/settings`) — inside route group `(app)`

| Property | Value |
|----------|-------|
| Layout | Sidebar + Topbar |
| Active nav link | "Settings" |
| Required body elements | "Settings" heading; placeholder message |
| Prohibited elements | Real settings forms or toggles |

---

## Sidebar Nav Contract

The sidebar MUST contain exactly these six links in order:

| Label | Route | Icon category |
|-------|-------|---------------|
| Dashboard | `/dashboard` | Overview / home |
| Products | `/products` | Inventory / box |
| Orders | `/orders` | Shopping / cart |
| Customers | `/customers` | People / user |
| Reports | `/reports` | Analytics / chart |
| Settings | `/settings` | Config / gear |

Active state rule: `pathname === route` → apply `nav-item-active` style. Exactly
one link is active at a time.

## Mobile Sidebar Contract

| Viewport | Sidebar state |
|----------|--------------|
| < 768 px | Hidden; hamburger button visible top-left |
| ≥ 768 px | Pinned; always visible; no hamburger |

Hamburger tap → sidebar slides in + backdrop appears.
Backdrop tap or nav link tap → sidebar closes.
