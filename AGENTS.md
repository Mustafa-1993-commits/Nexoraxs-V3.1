# NexoraXS — Agent Instructions (AGENTS.md)

> This file is the single source of truth for any AI agent (Claude Code, Codex, or other)
> working on the NexoraXS platform. Read this fully before writing any code.

---

## Project Documentation

| Document | Path | Purpose |
|----------|------|---------|
| Master Plan | `docs/NexoraXS-Master-Plan.docx` | Full roadmap — Phases 0–5 |
| UX Master Plan | `docs/NexoraXS-UX-Master-Plan.docx` | All screens, flows, states |

---

## 1. Project Identity

| Field        | Value                                               |
|--------------|-----------------------------------------------------|
| Project      | NexoraXS — Modular SaaS Platform                   |
| Version      | v3 (active development)                             |
| Repo         | git@github.com:Mustafa-1993-commits/nexoraxs-v3.git |
| Owner        | Mustafa Mohamed                                     |
| Domain       | https://www.nexoraxs.com                            |
| Architecture | Modular Monolith (NOT microservices)                |
| Strategy     | Spec-Driven Development via Specify CLI             |

---

## 2. What NexoraXS Is (and Is NOT)

### ✅ IS:
- A **SaaS Platform** hosting independent Operating Systems per business domain
- **Core Platform** = shared infrastructure (Auth, Billing, Workspaces, Teams)
- **Commerce OS** = first product — Modular Commerce Operating System
- **Clinics OS** = future separate product (healthcare domain — completely independent)
- Multi-tenant platform using `workspace_id` isolation
- Business Operating System: one login, multiple domain OSes

### ❌ IS NOT:
- A giant ERP monolith
- A microservices architecture (do NOT suggest this)
- A Kubernetes cluster (do NOT suggest this)
- A single-app product
- "Shops app" is a temporary UI label — the domain is **Commerce**, not Shops

---

## 3. Platform Architecture Vision

```
NexoraXS SaaS Platform
│
├── Core Platform (app.nexoraxs.com)
│   ├── Auth & Sessions
│   ├── Workspaces & Teams
│   ├── Billing & Subscriptions
│   ├── OS Launcher (Commerce, Clinics, ...)
│   ├── Notifications
│   └── Permissions Core
│
├── Commerce OS (shops.nexoraxs.com → future: commerce.nexoraxs.com)
│   ├── Commerce Core (Products, Inventory, Orders, Customers, Payments)
│   ├── POS Module
│   ├── Delivery Module (future)
│   ├── Online Store Module (future)
│   ├── Kitchen Module (future)
│   ├── Repairs Module (future)
│   └── Add-on Registry (future)
│
└── Clinics OS (clinics.nexoraxs.com) — FUTURE — fully separate product
    ├── Patients & Medical Records
    ├── Appointments
    ├── Prescriptions
    └── Insurance & Compliance
```

> **Why separate?** Commerce and Healthcare are fundamentally different domains —
> different data models, workflows, permissions, security, and UX.
> They share only the Core Platform infrastructure.

---

## 4. Monorepo Structure

```
nexoraxs-v3/
├── apps/
│   ├── landing/          → nexoraxs.com (Marketing site)
│   ├── core-platform/    → app.nexoraxs.com (Auth, Workspace, Billing)
│   ├── shops-app/        → shops.nexoraxs.com (Commerce OS — current UI label: Shops)
│   │                        ⚠ Domain = commerce (not shops). Rename deferred post UI-phase.
│   ├── clinics-app/      → (future — completely separate OS)
│   └── restaurants-app/  → (deprecated concept — absorbed into Commerce OS modules)
│
├── packages/
│   ├── ui/               → Shared component library (ShadCN-based)
│   ├── sdk/              → API clients, fetch helpers, shared services
│   ├── auth/             → Shared auth helpers and clients
│   ├── types/            → Shared TypeScript types across all apps
│   └── shared/           → Shared utilities and constants
│
├── backend/              → Laravel API (api.nexoraxs.com)
├── infra/                → Docker, Nginx configs
├── docs/                 → Documentation
└── .specify/             → Specify CLI (spec-driven workflow)
```

---

## 5. Commerce OS — Domain Model

### Core Principle: Commerce = Core + Modules

```
Commerce Core (always present)
├── Products & Categories
├── Inventory
├── Orders
├── Customers
├── Payments
├── Taxes
├── Reports
├── Branches
└── Employees

Commerce Modules (enabled per workspace)
├── POS            → plan: starter+
├── Delivery       → plan: pro+
├── Online Store   → plan: pro+
├── Kitchen        → plan: business+
├── Repairs        → plan: business+
├── Loyalty        → plan: business+
└── Appointments   → plan: business+
```

### 5.1 Commerce Core — Immutable Layer (CRITICAL)

The Commerce Core is the **immutable foundation** — it is always present for every workspace regardless of plan or business type. No module may bypass or replace it.

**Immutable Core entities:**

| Entity | Responsibility |
|--------|---------------|
| Products & Categories | Catalog management, variants, pricing |
| Inventory | Stock levels, adjustments, alerts |
| Orders | Order lifecycle, statuses, history |
| Customers | Customer profiles, segments, history |
| Payments | Payment records, methods, refunds |
| Taxes | Tax rates, rules per branch |
| Reports | Sales analytics, exports |
| Branches | Multi-location management |
| Employees | Staff accounts, roles per branch |

**Rules for the immutable core:**
- ✅ Every module builds **on top of** the Core — never around it
- ✅ `Delivery` extends `Orders` — it does NOT replace it
- ✅ `Kitchen` extends `Orders` — it adds queue management, not a new order system
- ✅ `POS` creates `Orders` via the Core `Orders` engine — not a separate transaction system
- ❌ No module creates its own parallel orders, customers, or inventory tables
- ❌ No module bypasses the Core payment recording layer

### 5.2 Module Lifecycle States

Every module has a lifecycle state stored in the workspace config:

```typescript
type ModuleState =
  | "enabled"     // Active and visible in navigation
  | "disabled"    // Installed but hidden — user turned it off
  | "trial"       // Time-limited access — billing pending
  | "locked"      // Requires plan upgrade to enable
  | "deprecated"  // Legacy — no new installs allowed

// Module config shape (UI phase: sessionStorage | Backend phase: DB)
interface CommerceModule {
  id: string;
  name: string;
  state: ModuleState;
  plan_required: "starter" | "pro" | "business";
  nav?: NavItem;        // undefined = no sidebar entry
}
```

**State → UI behaviour:**

| State | Sidebar | Settings | Badge |
|-------|---------|----------|-------|
| `enabled` | Visible + clickable | Toggle off | — |
| `disabled` | Hidden | Toggle on | — |
| `trial` | Visible + clickable | Countdown | `Trial` |
| `locked` | Hidden or greyed | Upgrade CTA | `Upgrade` |
| `deprecated` | Hidden | Read-only | `Deprecated` |

> **Current phase (UI):** States are mock values in sessionStorage.
> **Backend phase:** States are persisted per `workspace_id` with billing integration.

### 5.3 Business Presets (Onboarding — NOT separate apps)

Business Type is a **smart starter preset only** — it configures defaults, not domain boundaries.

| Preset | Recommended Modules |
|--------|-------------------|
| Restaurant / Cafe | POS + Kitchen + Delivery |
| Electronics Store | POS + Repairs + IMEI |
| Clothing / Fashion | POS + Online Store + Variants |
| Supermarket | POS + Inventory |
| Pharmacy | POS + Inventory |
| Service Business | Appointments + Repairs |

> Business Type does NOT create separate apps or separate databases.
> It is a configuration layer above the same Commerce Core.

---

## 6. Add-on Ready Architecture (Critical — Apply From Day One)

We are NOT building a Marketplace now. We ARE building an **Add-on Ready Architecture**.

### What this means in practice:

**Every Commerce Module must have:**
```typescript
interface CommerceModule {
  id: string;              // e.g. "pos", "delivery", "kitchen"
  name: string;
  state: ModuleState;      // see Section 5.2
  plan_required: "starter" | "pro" | "business";
  nav?: NavItem;           // undefined = no sidebar entry for this module
}
```

**NavItem contract — every module that adds navigation must conform to this shape:**
```typescript
interface NavItem {
  label: string;           // Display text in sidebar, e.g. "Point of Sale"
  href: string;            // Route path, e.g. "/pos"
  icon: IconName;          // Icon name from @nexoraxs/ui, e.g. "scan-line"
  permission?: string;     // Optional guard, e.g. "pos.sales.view"
  badge?: string;          // Optional badge text, e.g. "Trial", "New"
}
```

**Navigation must be module-driven — never hardcoded:**
```typescript
// ✅ CORRECT — generated from enabled modules
const navItems = enabledModules
  .filter(m => m.state === "enabled" || m.state === "trial")
  .filter(m => m.nav !== undefined)
  .map(m => m.nav as NavItem);

// ❌ WRONG — never do this
if (isRestaurant) showKitchenLink()
if (hasDelivery) showDeliveryLink()
if (businessType === "electronics") showRepairsLink()
```

**Feature flags from day one:**
```typescript
// In workspace config / sessionStorage (UI phase)
// In database (backend phase)
{
  "modules": {
    "pos":          { "state": "enabled" },
    "delivery":     { "state": "locked",   "plan_required": "pro" },
    "kitchen":      { "state": "locked",   "plan_required": "business" },
    "online_store": { "state": "disabled" }
  }
}
```

**Permissions must be module-aware:**
```
// Format: {module}.{resource}.{action}
pos.sales.create
pos.cash.manage
delivery.orders.view
delivery.drivers.manage
kitchen.queue.manage
repairs.tickets.create
```

> **Current phase (UI):** Module config lives in sessionStorage as mock data.
> **Backend phase:** Module config lives in the database with full billing integration.

---

## 6A. Workspace Type Rule (CRITICAL)

**Never create typed workspaces.** A workspace is always generic — business type is a preset config, not a type.

```typescript
// ✅ CORRECT
interface Workspace {
  id: string;
  name: string;
  business_preset: "restaurant" | "electronics" | "fashion" | "supermarket" | "pharmacy" | "service";
  enabled_modules: Record<string, ModuleState>;
}

// ❌ WRONG — never create these
interface RestaurantWorkspace { ... }
interface PharmacyWorkspace { ... }
interface ShopWorkspace { ... }
interface ElectronicsWorkspace { ... }
```

**The business_preset drives only:**
- Default module suggestions during onboarding
- Default categories seeded on first run
- Suggested settings (e.g. table management for restaurants)

**The business_preset does NOT drive:**
- Routes or navigation structure
- Separate data models or tables
- Separate permission systems
- Separate UI layouts

---

## 6B. POS Architecture Rules (CRITICAL)

POS is a **Transaction Engine** — not just a screen. These rules apply from the UI phase and must be respected in the backend phase.

### UI Requirements (apply now):
```
keyboard-first       → Every action must be triggerable without a mouse
barcode-ready        → Barcode input field always focused and ready
fast checkout        → Target: < 3 taps from product search to payment confirm
optimistic cart      → Cart updates instantly on add — no loading spinner
```

### System Requirements (backend phase):
```
offline-tolerant     → Queue failed transactions locally, sync when reconnected
receipt generation   → PDF/thermal receipt from Order record
session isolation    → Each POS session tied to workspace_id + branch_id + employee_id
```

### POS → Core relationship:
```
POS creates → Orders (via Commerce Core Orders engine)
POS records → Payments (via Commerce Core Payments layer)
POS reads   → Products (from Commerce Core Catalog)
POS adjusts → Inventory (via Commerce Core Inventory layer)
```

> POS is an **input layer** on top of Commerce Core — it never owns its own data.
> An Order created from POS is identical to an Order from Online Store or Delivery.

### What POS is NOT:
- ❌ A separate order management system
- ❌ A separate inventory tracker
- ❌ A standalone app (it lives inside Commerce OS)
- ❌ The only place orders can be created

---

## 7. Technology Stack

### Frontend
| Technology   | Version  | Usage                              |
|--------------|----------|------------------------------------|
| Next.js      | 16.x     | All frontend apps                  |
| React        | 19.x     | UI framework                       |
| TypeScript   | 5.x      | All frontend code (strict mode)    |
| TailwindCSS  | 4.x      | Styling system                     |
| ShadCN UI    | latest   | Component library (in packages/ui) |
| pnpm         | 9.15.9   | Package manager                    |
| Turborepo    | 2.x      | Monorepo build system              |

### Backend
| Technology      | Usage                                      |
|-----------------|--------------------------------------------|
| Laravel         | Main API (api.nexoraxs.com)                |
| Laravel Sanctum | Session-based auth across subdomains       |
| PostgreSQL      | Primary database                           |
| Redis           | Cache, queues, sessions                    |

### Infrastructure
| Technology     | Usage                    |
|----------------|--------------------------|
| Docker Compose | Local + Production       |
| Ubuntu 24.04   | VPS / WSL2 dev machine   |
| Cloudflare     | DNS + CDN                |

---

## 8. Local Development Ports

| App              | Port  | URL                       |
|------------------|-------|---------------------------|
| landing          | 3000  | http://localhost:3000     |
| core-platform    | 3001  | http://localhost:3001     |
| shops-app        | 3002  | http://localhost:3002     |
| backend (Laravel)| 8080  | http://localhost:8080     |

---

## 9. Domain Map

| Domain                      | App           | Purpose                        |
|-----------------------------|---------------|--------------------------------|
| nexoraxs.com                | landing       | Marketing, pricing, docs       |
| app.nexoraxs.com            | core-platform | Auth, workspace, billing       |
| admin.nexoraxs.com          | admin panel   | Internal ops (future)          |
| api.nexoraxs.com            | backend       | Laravel REST API               |
| shops.nexoraxs.com          | shops-app     | Commerce OS (current domain)   |
| commerce.nexoraxs.com       | shops-app     | Commerce OS (future domain — post UI-phase rename) |
| clinics.nexoraxs.com        | clinics-app   | Clinics OS (future)            |

---

## 10. Architecture Rules (CRITICAL — Never Violate)

### Core Platform (app.nexoraxs.com) — ALLOWED:
- Authentication & sessions
- Workspace creation and management
- OS Launcher (enabling/disabling Commerce OS, Clinics OS, etc.)
- Billing & subscriptions
- Team management & permissions core
- Notifications (platform-level)
- Shared platform settings

### Core Platform — FORBIDDEN (business logic belongs in domain OSes):
- ❌ Products, inventory, orders
- ❌ Sales, purchases, customers
- ❌ Any commerce logic
- ❌ Any clinics logic
- ❌ Any module-specific logic

### Commerce OS (shops-app) — Domain Boundary:
- ✅ All commerce logic lives here
- ✅ Restaurants, pharmacies, electronics — ALL are Commerce presets, not separate apps
- ❌ Never put healthcare / clinics logic here
- ❌ Never put HR / CRM logic here

### Shared Packages Rules:
- `packages/ui` → UI components ONLY, no business logic
- `packages/sdk` → API clients and fetch helpers ONLY
- `packages/types` → TypeScript interfaces/types ONLY
- `packages/auth` → Auth helpers ONLY
- Each app imports from packages, never from another app directly

### Multi-Tenancy Rule:
- Every database table that holds business data MUST have `workspace_id`
- Always filter queries by `workspace_id` — never expose cross-tenant data
- Example:
  ```sql
  SELECT * FROM products WHERE workspace_id = :workspace_id
  ```

---

## 11. Coding Standards

### TypeScript
- Strict mode enabled in all apps (`"strict": true` in tsconfig)
- No `any` types — use proper interfaces from `packages/types`
- Always type function parameters and return values
- Use `interface` for objects, `type` for unions/primitives

### React / Next.js
- Use App Router (`app/` directory) — NOT Pages Router
- Server Components by default; use `"use client"` only when needed
- Keep components small and focused (single responsibility)
- Co-locate component styles, tests, and types with the component

### File Naming
- Components: `PascalCase.tsx` (e.g., `WorkspaceSwitcher.tsx`)
- Utilities/hooks: `camelCase.ts` (e.g., `useWorkspace.ts`)
- Constants: `SCREAMING_SNAKE_CASE` in a `constants.ts` file
- Folders: `kebab-case/`

### Import Order (always in this sequence):
```typescript
// 1. React / Next.js
import { useState } from 'react'
import { useRouter } from 'next/navigation'

// 2. Third-party packages
import { Button } from '@nexoraxs/ui'

// 3. Internal packages
import { type Workspace } from '@nexoraxs/types'

// 4. Local imports (relative)
import { WorkspaceCard } from './WorkspaceCard'
```

### API Calls
- Always use the SDK from `packages/sdk` — never call `api.nexoraxs.com` directly from components
- All API errors must be handled gracefully with user-friendly messages
- Use loading and error states in every data-fetching component

---

## 12. Git Workflow

### Branch Strategy:
```
main         → production-ready code only
develop      → integration branch
feature/*    → new features (e.g., feature/workspace-creation)
hotfix/*     → urgent production fixes
```

### Commit Message Format (Conventional Commits):
```
feat(core-platform): add workspace creation flow
fix(shops-app): resolve inventory pagination bug
chore(packages/ui): update Button component variants
docs: update AGENTS.md with Commerce OS vision
```

### Rules:
- Never commit directly to `main`
- Never commit `.next/` build folders (add to .gitignore)
- Never commit `node_modules/`
- Always run `pnpm lint` before committing
- Always use explicit paths — never `git add .`
  ```bash
  # ✅ Correct
  git add AGENTS.md specs/030-feature/plan.md apps/shops-app/app/dashboard/page.tsx
  # ❌ Wrong
  git add .
  ```

---

## 13. .gitignore Requirements

The following MUST be in `.gitignore`:
```
.next/
node_modules/
*.local
.env
.env.*
!.env.example
```

---

## 14. Shared Authentication (Critical Config)

Because apps run on different subdomains, session must be shared:

### Laravel `.env`:
```env
SESSION_DOMAIN=.nexoraxs.com
SANCTUM_STATEFUL_DOMAINS=app.nexoraxs.com,shops.nexoraxs.com,clinics.nexoraxs.com,commerce.nexoraxs.com,admin.nexoraxs.com
```

### CORS allowed origins:
```env
ALLOWED_ORIGINS=https://app.nexoraxs.com,https://shops.nexoraxs.com,https://commerce.nexoraxs.com,https://clinics.nexoraxs.com,https://admin.nexoraxs.com
```

---

## 15. MVP Scope — What to Build Now

### Current Phase: UI Phase (NO backend yet)
All screens are built with mock data and sessionStorage. Backend starts only after UI phase is complete.

### Core Platform MVP:
- [x] Register / Login pages (UI mock)
- [x] Workspace creation flow (UI mock)
- [x] Workspace selector
- [x] App Launcher / OS Launcher
- [x] Dashboard shell
- [x] Billing page (UI mock)
- [x] Settings page (UI mock)
- [ ] Email verification screen
- [ ] Forgot password screen
- [ ] App Launcher card states (Locked / Coming Soon / Active)

### Commerce OS MVP:
- [x] Onboarding — Business Type selection
- [x] Onboarding — Sales Model selection
- [x] Onboarding — Store Setup
- [x] Dashboard shell + metrics
- [x] Products page (mock data)
- [x] Orders page (mock data)
- [x] Customers page (mock data)
- [x] Reports page (mock data)
- [x] Settings page (mock data)
- [ ] POS Screen
- [ ] Cart & Checkout
- [ ] Receipt

### Landing MVP:
- [x] Hero section
- [x] Features section
- [x] Apps / OSes section
- [x] Pricing section (Coming Soon)
- [x] FAQ section
- [x] Footer
- [x] SEO & metadata
- [x] Mobile responsive

---

## 16. What NOT to Build (Yet)

- ❌ Backend / API (wait for UI phase completion)
- ❌ Real authentication (mock only in UI phase)
- ❌ Clinics OS (completely separate future product)
- ❌ Marketplace / Add-on ecosystem (architecture ready, not built)
- ❌ Driver tracking / logistics
- ❌ AI modules
- ❌ Complex event system
- ❌ Microservices
- ❌ Kubernetes configs
- ❌ Rename `shops-app` → `commerce-os` (deferred post UI-phase)

---

## 17. Specify CLI Workflow

This project uses Specify for spec-driven development. Always follow this order:

```
/speckit.constitution  → Establish project principles
/speckit.specify       → Create baseline spec
/speckit.clarify       → Resolve ambiguities (optional)
/speckit.plan          → Create implementation plan
/speckit.checklist     → Validate requirements (optional)
/speckit.tasks         → Generate actionable tasks
/speckit.analyze       → Cross-check consistency (optional)
/speckit.implement     → Execute implementation
```

Agent commands are located in: `.agents/commands/`

---

## 18. Backend Architecture (Laravel) — Planned

```
backend/
├── app/
├── domains/
│   ├── auth/           → Authentication, sessions, tokens
│   ├── workspaces/     → Workspace CRUD, user-workspace relations
│   ├── billing/        → Subscriptions, plans, payments
│   ├── notifications/  → Platform notifications
│   ├── commerce/       → Commerce OS domain logic
│   │   ├── core/       → Products, Inventory, Orders, Customers
│   │   ├── pos/        → POS module
│   │   ├── delivery/   → Delivery module (future)
│   │   └── modules/    → Module registry & feature flags
│   └── shared/         → Shared services, base classes
├── routes/
│   ├── api.php
│   └── web.php
└── tests/
```

### API Response Format (always use this structure):
```json
{
  "success": true,
  "data": {},
  "message": "Operation successful",
  "errors": null
}
```

---

## 19. Environment Variables

### Frontend apps (`.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_APP_URL=http://localhost:3001
NEXT_PUBLIC_COMMERCE_URL=http://localhost:3002
```

### Backend (`.env`):
```env
APP_NAME=NexoraXS
APP_URL=http://localhost:8080
DB_CONNECTION=pgsql
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=nexoraxs
DB_USERNAME=postgres
DB_PASSWORD=secret
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
SESSION_DRIVER=redis
SESSION_DOMAIN=.nexoraxs.com
```

---

## 20. Agent Behavior Rules

### Always:
- ✅ Read this file fully before starting any task
- ✅ Follow the MVP scope — build what's needed, nothing more
- ✅ Keep business logic inside its own OS (commerce logic → shops-app)
- ✅ Use shared packages from `packages/` for UI, types, SDK
- ✅ Add `workspace_id` to every business data table
- ✅ Write TypeScript — never plain JavaScript
- ✅ Use App Router (Next.js) — never Pages Router
- ✅ Follow conventional commit messages
- ✅ Build navigation as module-driven, never hardcoded conditionals
- ✅ Ask for clarification if a requirement is ambiguous

### Never:
- ❌ Add business logic to `core-platform`
- ❌ Call the API directly from components (use SDK)
- ❌ Use `any` type in TypeScript
- ❌ Suggest microservices or Kubernetes
- ❌ Break Docker setup or auth/session flow
- ❌ Commit `.next/` or `node_modules/` folders
- ❌ Import from one app into another app directly
- ❌ Over-engineer — keep it simple and maintainable
- ❌ Hardcode navigation items per business type (use module config)
- ❌ Put restaurants/pharmacies/electronics as separate apps (they are Commerce presets)
- ❌ Create typed workspaces (`RestaurantWorkspace`, `PharmacyWorkspace`, etc.) — Workspace is always generic
- ❌ Build POS as a standalone data store — it reads/writes via Commerce Core only
- ❌ Add loading spinners to cart operations — optimistic updates only
- ❌ Let any module create its own parallel Orders, Customers, or Inventory tables

---

## 21. Quick Reference Commands

```bash
# Install dependencies
pnpm install

# Run all apps in dev mode
pnpm dev

# Run specific app
pnpm --filter landing dev
pnpm --filter core-platform dev
pnpm --filter shops-app dev

# Build all
pnpm build

# Lint all
pnpm lint

# Add package to specific app
pnpm --filter shops-app add axios

# Add package to shared packages
pnpm --filter @nexoraxs/ui add class-variance-authority
```

---

## 22. Long-Term Vision

NexoraXS aims to become a **Business Operating System Platform** built on:

```
Core Platform (shared infrastructure)
+
Commerce OS (retail, restaurants, services, pharmacies, ...)
+
Clinics OS (healthcare — future)
+
[More domain OSes] (future)
```

Each OS is **independent**, sharing only Core Platform infrastructure.
The Add-on Marketplace (future) will allow third-party modules per OS.

**Current phase: UI Phase — Core Platform + Commerce OS (UI label: Shops)**

---

## 23. Active Feature Plan

<!-- SPECKIT START -->
**Current feature**: `036-commerce-operations-ui`
**Plan**: [specs/036-commerce-operations-ui/plan.md](specs/036-commerce-operations-ui/plan.md)
**Spec**: [specs/036-commerce-operations-ui/spec.md](specs/036-commerce-operations-ui/spec.md)
**Branch**: `036-commerce-operations-ui`
<!-- SPECKIT END -->

---

*Last updated: May 2026 | Maintained by Mustafa Mohamed*