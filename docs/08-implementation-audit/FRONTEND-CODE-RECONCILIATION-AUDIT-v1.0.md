# NexoraXS Frontend Code Reconciliation Audit v1.0

**Audit type:** Existing-code architecture reconciliation

**Audit date:** 2026-07-14

**Scope:** `apps/landing`, `apps/core-platform`, `apps/commerce`, `packages/ui`,
`packages/types`, `packages/shared`, `packages/auth`, `packages/sdk`, relevant root configuration,
and existing frontend tests

**Method:** Static, read-only repository inspection

**Constitution:** NexoraXS Constitution v2.0.0

**Outcome:** Incremental reconciliation is viable; no repository-wide rewrite is recommended.

## Authority and audit method

The audit applied the required authority order:

1. `docs/99-architecture-freeze/`;
2. `docs/00-governance/`, including Accepted ADRs and the canonical glossary;
3. `docs/01-genesis/`;
4. approved milestone baselines under `docs/02-core-platform/` through
   `docs/07-global-platform/`;
5. `.specify/memory/constitution.md` v2.0.0; and
6. `AGENTS.md`.

Historical material under `docs/archives/` was not used as authority. Proposal, Patch, and Review
documents were used only where their controlling Freeze incorporates them or where provenance was
needed to understand a frozen decision.

No conflict was found between the controlling sources that required stopping an audited boundary.
The current Constitution and `AGENTS.md` both preserve the frozen hierarchy
`Workspace -> Business -> Business Unit -> Department / Branch`. The conflicts identified below
are implementation-to-authority conflicts, not conflicts between controlling authorities.

The most directly applicable accepted decisions are:

- ADR-004: Business and Business Unit are distinct, and legacy synonym models require an explicit
  migration decision;
- ADR-020: Product Hub composes owner-provided projections and does not own underlying domain data;
- ADR-023: OS Subscription is Workspace-scoped, operational use is separately scoped, and the exact
  successor to legacy `OSEnablement` remains unresolved;
- ADR-024 and ADR-025: each OS owns its operational domain and integrations are optional and
  contract-based;
- ADR-033: modular-monolith co-deployment does not permit boundary bypass;
- ADR-034: every protected operation resolves explicit tenant and resource scope;
- ADR-037: navigation preserves context but the destination reauthorizes it;
- ADR-040: Core owns organization identity while each OS owns operational data; the exact
  organization write protocol remains open.

The audit did not run builds, linters, or browser tests because those tools can create caches,
reports, or build artifacts and the task permits only the audit document as a repository change.
Existing configuration and test source were inspected statically.

## Classification key

Only the required classifications are used in this report:

| Classification | Audit use |
|---|---|
| Keep | Compatible and safe to retain as-is |
| Improve | Correct general boundary, but bounded quality or structure work is needed |
| Reconcile | Conflicts with the frozen architecture and needs a governed compatibility plan |
| Legacy-compatible | Temporarily necessary behavior or representation that must remain compatible |
| Remove later | Retire only after a replacement, characterization, and migration exist |
| Missing | Required boundary or capability is absent |

## 1. Executive Summary

### Overall repository condition

The frontend is a viable modular-monorepo prototype with three independently routed Next.js
applications, strict TypeScript configurations, shared type and presentation packages, a useful
Commerce domain slice, and one substantive Commerce E2E scenario. The repository can continue by
incremental development, but not safely by extending the current state plane without first
stabilizing its ownership boundaries.

The repository's condition is therefore **structurally viable but boundary-unstable**. The route
and app split points in the right direction; the in-browser mock implementation beneath those
routes currently behaves like one shared mutable database and duplicates Core authority inside
Commerce.

### Strongest existing foundations

- `apps/landing`, `apps/core-platform`, and `apps/commerce` are separate workspaces and do not
  import source directly from one another.
- Commerce has an independently navigable route group and owns meaningful operational UI for POS,
  Products, Inventory, Orders, Customers, Invoices, Returns, Transfers, Reports, and Setup.
- Commerce inventory, transfer, return, invoice-history, and reporting behavior has a valuable
  end-to-end characterization test in `tests/e2e/commerce-044.spec.ts`.
- `packages/ui` contains presentation-only primitives and branding; `packages/types` contains no
  executable business behavior.
- All inspected application and package TypeScript configurations enable `strict` mode.
- Mock storage is concentrated behind `packages/shared/src/mock-db/storage.ts` and application
  providers rather than being imported directly by ordinary page components.
- Core and Commerce already expose a `useApp` facade, so pages do not need to know whether data
  comes from local storage or a future API.
- Direction switching, logical CSS properties, reduced-motion handling on Landing, and scattered
  ARIA semantics provide useful accessibility and RTL foundations.

### Highest-risk architectural conflicts

1. **Business/BusinessUnit conflation.** There is no canonical `Business` type or store. The
   `BusinessUnit` type carries business name, activity, Commerce preset, OS, subscription, and
   branch fields, while the UI labels it “Business.” This is the exact legacy condition governed
   by ADR-004 and cannot be fixed by a rename.
2. **Core writes Commerce truth.** `apps/core-platform/lib/store/AppProvider.tsx` loads, exposes,
   and writes Commerce Setup, Product, Order, Invoice, and Customer collections.
3. **Commerce writes Core truth.** `apps/commerce/lib/store/AppProvider.tsx` creates Users,
   Workspaces, OS Subscriptions, `OSEnablement`, BusinessUnits, and Branches. Its URL handoff also
   reconstructs Core-owned facts from client-controlled query parameters.
4. **Shared package owns domain behavior.** `packages/shared` contains Commerce tax/document
   calculations, inventory/transfer/return builders, reports, subscription/enablement selection,
   preset recommendations, and organization checks. This is more than shared utilities and makes
   the responsible owner unclear.
5. **Commercial and operational lifecycle conflation.** Selecting a plan creates an active
   Workspace-scoped `OSEnablement`, while Product Hub readiness is derived from subscription and
   local Commerce setup state. ADR-023 explicitly forbids treating subscription as operational
   authorization and leaves the successor model deferred.
6. **Client context is trusted as authority.** All tenant collections are loaded into each
   provider, route guards are client-only, context switches accept IDs without an authorization
   boundary, and some writes search global collections before scoping. This is acceptable only as
   clearly bounded mock behavior, not as a production security model.
7. **Canonical calculations are partly UI-supplied.** POS calculates monetary totals in the page
   and `createOrder` accepts those totals; the owner boundary does not recompute or validate them.
8. **Required quality gates are incomplete.** Arabic/English coverage is partial, formatting is
   often hardcoded to EGP/English locales, accessibility evidence is incomplete, and automated
   coverage is limited to one Commerce E2E flow.

### Development safety and rewrite position

Safe incremental development **can continue** if changes preserve current behavior, add
characterization first, and stop adding new canonical models or cross-owner writes to the existing
providers. No rewrite is recommended. The current UI, routing, Commerce workflows, styling, mock
storage keys, and provider-facing page contracts are reusable. The correct treatment is to
stabilize seams, separate owner behavior behind those seams, and migrate only through approved
specifications.

## 2. Audit Matrix

| Path / Area | Current Responsibility | Architectural Owner | Classification | Evidence | Risk | Recommended Treatment | Priority |
|---|---|---|---|---|---|---|---|
| Root `package.json`, `pnpm-workspace.yaml` | Defines apps/packages workspace and common scripts | Engineering tooling | Keep | Workspaces are `apps/*` and `packages/*`; pnpm is pinned | Low | Preserve workspace split | P3 |
| `turbo.json` | Build, dev, lint task graph | Engineering tooling | Improve | No test/typecheck task; build output covers `.next/**` only | Medium | Add quality tasks only through a dedicated tooling spec/change | P2 |
| App-local `pnpm-lock.yaml` files | Per-app dependency locks inside a root workspace | Engineering tooling | Improve | Locks exist in all three applications | Low | Establish one documented workspace lock policy before dependency work | P3 |
| `playwright.config.ts` | Commerce E2E execution | Test infrastructure | Improve | Commerce-only server; always headed with 2-second `slowMo`; Chromium only | Medium | Separate CI-safe defaults from optional manual visual mode | P2 |
| `apps/landing/src/app` | Marketing composition and metadata | Landing | Keep | No application-state or domain imports | Low | Preserve route and semantic page composition | P3 |
| `apps/landing/src/sections` | Static marketing sections | Landing | Improve | Product/pricing content is local and English-only | Medium | Keep content presentational; add bilingual/content ownership and a11y coverage | P2 |
| `apps/core-platform/app/(auth routes)` | Registration, login, verification, password UI | Core Platform | Improve | Correct app owner; backed only by plaintext browser mock auth | High | Preserve UI; characterize flows; replace auth implementation behind a Core-owned auth boundary | P1 |
| `apps/core-platform/app/onboarding/page.tsx` | Workspace, OS, Plan onboarding | Core Platform | Reconcile | Completes onboarding without canonical Business; `selectPlan` also activates legacy enablement | High | Freeze behavior; specify canonical Business/BU compatibility and lifecycle separation before change | P0 |
| `apps/core-platform/app/dashboard` | Core shell, Product Hub, billing, team, settings, integrations | Core Platform | Improve | Correct routes; Product Hub reads raw Commerce collections and derives readiness locally | High | Retain routes; consume owner projections through a stable client boundary | P1 |
| `apps/core-platform/app/dashboard/apps/page.tsx` | Product Hub composition and Commerce routing | Core Product Hub | Reconcile | Reads `orders`/`products`; treats BusinessUnit count as Businesses; constructs query handoff | High | Preserve page; replace raw facts with projections and governed handoff incrementally | P0 |
| `apps/core-platform/lib/store/AppProvider.tsx` | One provider for Core and Commerce mock state/actions | Split: Core plus Commerce owners | Reconcile | Lines 86–110 expose Commerce writes; lines 506–618 implement them | Critical | Characterize interface, then separate owner clients without changing page behavior | P0 |
| `apps/core-platform/lib/commerce-url.ts` | Core-to-Commerce setup navigation | Core Product Hub issues; Commerce revalidates | Reconcile | Serializes identity, organization, subscription, enablement, and email into query parameters | Critical | Keep temporarily; mark untrusted; replace under a contract/handoff spec | P0 |
| Core client dashboard guard | Client-side auth/onboarding routing | Core identity/readiness | Legacy-compatible | `app/dashboard/layout.tsx` redirects using provider booleans | High | Retain for mock UX; never treat as authorization; characterize redirects | P1 |
| Legacy Core helpers/components | Older session/theme/locale/onboarding path | Historical Core implementation | Remove later | `core-session.ts`, `core-theme.ts`, `locale.ts`, `CoreProvider`, old onboarding steps; most are unreachable | Medium | Inventory live consumers, add tests, then retire after replacement is proven | P2 |
| `InviteUserModal.tsx` legacy lookup | Team access UI with old session-name helpers | Core access | Legacy-compatible | Active modal calls `getBUName` and `getBranchName` from `core-session.ts` | Medium | Keep until current provider supplies equivalent display projections | P1 |
| `apps/commerce/app/(commerce)` | Commerce operational routes | Commerce OS | Keep | Routes correspond to frozen Commerce responsibilities | Low | Preserve route ownership and independent navigation | P3 |
| `apps/commerce/app/setup/page.tsx` | Commerce setup and preset UI | Commerce Setup; Core organization identity remains external | Reconcile | Calls `createBusinessUnit`; hardcodes preset categories, tax defaults, countries, and EGP-oriented previews | High | Keep UX; move authoritative decisions behind Commerce owner seam; do not rename or migrate BU | P0 |
| `apps/commerce/app/(commerce)/pos/page.tsx` | POS interaction and checkout | Commerce POS/Orders/Payments/Taxes | Reconcile | Page computes tax/totals and sends them into `createOrder`; owner does not revalidate totals | Critical | Preserve UI; make owner action validate canonical monetary result behind same facade | P0 |
| Commerce inventory/transfer/return behavior | Branch stock, transfer, return operations | Commerce Inventory/Transfers/Returns | Keep | Owner-local operations and E2E coverage preserve branch and invoice history behavior | Medium | Protect with characterization while relocating shared builders | P1 |
| `apps/commerce/lib/store/AppProvider.tsx` | Commerce plus duplicated Core state and actions | Split: Commerce and Core owners | Reconcile | Creates Core facts and applies URL handoff; loads all tenant collections | Critical | Stabilize Commerce facade, then remove Core writes behind compatibility adapter | P0 |
| Commerce client route guard | Redirects based on local context/setup | Commerce for OS readiness; Core for identity/access | Legacy-compatible | `(commerce)/layout.tsx` trusts local provider and hardcoded Core URLs | High | Keep for mock UX; add route characterization; replace with authorized handoff/session later | P1 |
| App-local shell/context components | Navigation and Workspace/BU/Branch selector UI | Respective app presentation | Improve | Correct UI location; selectors can switch unvalidated IDs | High | Preserve visuals; route selections through validated context client | P1 |
| Duplicate app-local UI groups | Avatar, Badge, Toast, locale/theme/notification controls, CoreShell | Shared presentation where stable | Improve | Several Core/Commerce files are byte-identical | Low | Do not consolidate first; move only after visual/behavior tests | P3 |
| `packages/ui` | UI primitives, icons, branding, theme exports | Shared presentation | Improve | No business logic; `LogoApp = "core" | "shops"` retains deprecated name; Input error semantics limited | Medium | Preserve primitives; later remove deprecated alias after usage proof and improve accessibility | P2 |
| `packages/types/src/core.ts` | Shared Core-facing TypeScript contracts | Contract package; canonical owners remain Core/OS | Reconcile | Missing Business; BusinessUnit embeds OS, subscription, preset, branches; legacy `OSEnablement` shape | Critical | Freeze compatibility types; introduce no canonical replacement without approved spec | P0 |
| `packages/types/src/commerce.ts` | Commerce contract shapes | Commerce OS | Improve | Strong explicit scope; Product combines catalog and branch stock; Customer includes branch identity | High | Characterize semantics; split only through versioned compatibility work | P1 |
| `packages/shared/src/mock-db/storage.ts` | Browser mock storage adapter | Temporary test/mock infrastructure | Legacy-compatible | Centralizes local/session storage access | Medium | Keep storage keys and behavior stable until client adapters replace it | P1 |
| `packages/shared/src/mock-db/schema.ts` | Keys, translations, catalogs, plans, presets, locale data | Multiple owners | Reconcile | Mixes presentation dictionary, Core commercial catalogs, and Commerce presets | High | Preserve data; expose through owner-scoped clients before relocation | P1 |
| `packages/shared/src/mock-db/seed.ts` | Seeds entire Core and Commerce mock database | Multiple owners | Legacy-compatible | One combined seed; BusinessUnit acts as Business; plaintext demo credentials | High | Keep for characterization; label mock-only; do not promote shape to backend | P0 |
| `packages/shared/src/mock-db/actions.ts` | Generic helpers plus media and Commerce builders | Multiple owners | Reconcile | Builds MediaAsset, StockMovement, Transfer, Return | High | Move behavior behind owners only after facade tests; keep pure utilities shared | P1 |
| `packages/shared/src/mock-db/selectors.ts` | Reports, tax, lifecycle, recommendation, address, scope selectors | Multiple owners | Reconcile | Contains Commerce reports and Core enablement/organization decisions | High | Partition by owner behind current exports, preserving compatibility | P1 |
| `packages/shared/src/commerce/documents.ts` | Tax/document calculations | Commerce Taxes/Documents | Reconcile | Commerce canonical calculation sits in generic shared package | High | Retain algorithm; relocate ownership behind a Commerce client in a bounded change | P1 |
| `packages/auth` | Required shared auth helpers only | Core identity/auth integration helper | Missing | Directory does not exist | High | Define only when Core auth integration begins; no domain state in package | P1 |
| `packages/sdk` | Required API clients/fetch helpers only | Contract/client integration | Missing | Directory does not exist; no fetch/axios calls exist | High | Establish before Laravel integration around owner contracts | P1 |
| App to `@nexoraxs/ui` dependency | Shared presentation import | Shared UI | Keep | Only package imports; no app-to-app source imports | Low | Preserve dependency direction | P3 |
| App to `@nexoraxs/types` dependency | Shared contract import | Shared types | Keep | Types imported through package | Low | Preserve; version/migrate incompatible contracts explicitly | P3 |
| App to `@nexoraxs/shared` dependency | Shared mock and domain logic import | Multiple owners | Reconcile | Both apps import one broad barrel exporting Core and Commerce behavior | High | Narrow imports through owner-facing facades before backend work | P1 |
| Arabic/English and RTL/LTR | Partial locale dictionary and direction switching | Platform quality plus app content owners | Improve | `lang`/`dir` switch exists; many strings and date/currency formats are hardcoded | High | Complete translations and locale-aware formatting with acceptance tests | P1 |
| Accessibility | Semantic fragments and partial ARIA | Platform quality plus app UI owners | Improve | Useful labels/roles exist; no automated a11y tests or complete modal/focus/error semantics | High | Add route-level criteria and tests before broad UI refactors | P1 |
| `tests/e2e/commerce-044.spec.ts` | Commerce behavior characterization | Commerce quality | Keep | Covers branch isolation, transfer, returns, immutable invoice, reports | Low | Protect and make it CI-friendly; do not delete during boundary work | P0 |
| Missing test layers | Core, Landing, packages, tenant, localization, accessibility | Respective owners and quality gate | Missing | Only one test file found | Critical | Add characterization before state/boundary refactoring | P0 |

## 3. Application Review

### 3.1 Landing

#### Keep

- The application is independent and imports no Core or Commerce implementation state.
- `src/app/page.tsx` is a simple composition root; section-level components are presentation-only.
- The page uses semantic sectioning, useful image alternatives, decorative `aria-hidden`, FAQ
  `aria-expanded`/`aria-controls`, and reduced-motion CSS.
- Core navigation uses `NEXT_PUBLIC_CORE_PLATFORM_URL` with a local-development fallback rather
  than importing Core code.

#### Improve

- `src/app/layout.tsx` fixes the document language to English, and all inspected marketing content
  is English-only. Arabic and RTL are therefore not first-class at this surface.
- Static product, feature, and pricing arrays are appropriate marketing content, but they must
  never be treated as canonical Product/Plan records. A future integration should consume a
  presentation contract, not share Core's mutable store.
- Accessibility needs automated evidence for keyboard navigation, color contrast, menu focus,
  motion preference, and responsive reflow.
- Local metadata describes a “Business Operating System” while the frozen identity is a Business
  Operating Intelligence Platform. This is an editorial/product-language alignment item, not a
  reason to change architecture.

#### Reconcile

No ownership or cross-app code violation was found in Landing.

#### Legacy-compatible / Remove later

The fallback `http://localhost:3001` is useful for local compatibility. It should remain until
environment configuration is validated across local, preview, and production environments.

#### Missing

- Arabic content and RTL acceptance evidence;
- Landing-specific E2E and accessibility coverage;
- an explicit boundary for any future dynamic Product/Plan presentation.

### 3.2 Core Platform

#### Keep

- Auth, onboarding, Workspace, Product Hub, billing, team/access, settings, and integrations routes
  are located in the correct application.
- Core shell navigation remains separate from Commerce navigation.
- Product Hub is the user-facing launcher and setup router, which is the correct responsibility.
- Workspace defaults for country, currency, timezone, and language are represented separately from
  Commerce billing and Branch operational address fields.

#### Improve

- The client dashboard guard is useful mock UX but is not an authorization boundary.
- Product Hub should retain its current page and journey, but receive purpose-specific Commerce
  projections rather than raw Products and Orders.
- Team/access UI needs explicit permission, Workspace, Business, Business Unit, Branch, and OS
  context. The current static role assignments are mock-only.
- Most visible strings remain English even when document direction changes.

#### Reconcile

- `lib/store/AppProvider.tsx` violates Core's boundary by owning Commerce setup and operational
  writes. Core may display or route Commerce state, but it cannot create Commerce Products,
  Orders, Invoices, or Customers.
- `app/dashboard/apps/page.tsx` derives Product Hub activity from raw Commerce collections. This
  bypasses the frozen projection/contract boundary.
- `lib/commerce-url.ts` exports identity and organization data in the query string. Navigation
  context is not authority; the destination must reauthorize and retrieve owner facts.
- `selectPlan` creates an active `OSEnablement`, conflating subscription with activation.
- Current onboarding creates Workspace, selects OS/Plan, and declares completion without creating
  canonical Business. That does not satisfy the frozen hierarchy and cannot be repaired by treating
  the later BusinessUnit as Business.
- `createBranch` can temporarily persist a Branch with an empty `businessUnitId`, then
  `createBusinessUnit` retrofits it. This violates the canonical parent invariant during the flow.

#### Legacy-compatible

- Browser-local auth/session and the query handoff are required for the current mock multi-app
  demonstration. They should remain temporarily, explicitly marked non-authoritative.
- `OSEnablement` data must be preserved for compatibility while ADR-023's successor remains
  deferred. No new feature should promote it to a canonical model.
- `InviteUserModal.tsx` still depends on legacy session display-name helpers; remove that dependency
  only after a current projection provides the same behavior.

#### Remove later

- `components/CoreProvider.tsx`, `components/dashboard/DashboardOnboardingGuard.tsx`,
  `components/dashboard/LanguageSwitcher.tsx`, the old onboarding step components, and their old
  `core-session`, `core-theme`, and `locale` helpers appear superseded or mostly unreachable.
- They must not be deleted until import reachability, route behavior, and session-key compatibility
  are characterized. `InviteUserModal` proves that part of the old helper surface is still live.

#### Missing

- a canonical Business representation and a governed compatibility mapping to the legacy
  BusinessUnit-as-Business store;
- owner-provided Product Hub projections;
- a secure, short-lived, reauthorized setup handoff;
- Core-owned auth/client boundaries suitable for Laravel Sanctum;
- explicit authorization and tenant-scope tests;
- separated commercial, installation, setup, activation, readiness, and access projections.

### 3.3 Commerce OS

#### Keep

- The independent `(commerce)` route group and setup route are appropriate Commerce-owned
  surfaces.
- POS, Products, Inventory, Orders, Customers, Invoices, Returns, Transfers, Reports, and Commerce
  Settings align with the frozen Commerce domains.
- Inventory and return logic preserves Branch scope, records movements, and keeps invoice monetary
  history unchanged after returns. The existing E2E test protects these behaviors.
- Commerce can run its core workflow without another OS.
- Setup distinguishes Commerce billing identity/address from Branch operational address.

#### Improve

- `AppProvider` is too large and combines hydration, persistence, auth, context, setup, catalog,
  inventory, orders, documents, returns, media, localization, and notifications. The page-facing
  facade should remain stable while internals become owner-scoped.
- Product catalog identity and Branch inventory are partially combined in `CommerceProduct` via
  `branchId` and `stock`, despite the separate `BranchInventory` model. This requires semantic
  characterization before any type change.
- Transactional Customer has `branchId`, while provider lists are BusinessUnit-filtered; the
  intended canonical scope must be traced to the frozen Commerce model in a separate spec.
- Hardcoded country/city lists, EGP labels, `en-GB` formatting, and English strings prevent full
  globalization and bilingual operation.
- Route and context guards need a validated receiving boundary rather than trusting local session
  and query state.

#### Reconcile

- Commerce duplicates Core identity, Workspace, subscription, organization, membership, and
  enablement stores and write actions.
- `applyCommerceHandoffFromUrl` creates Core-owned facts from query parameters, including a User,
  Workspace, OS Subscription, enablement, Branch, and BusinessUnit. This is ownership leakage and a
  security issue, although it remains necessary for the mock demonstration until replaced.
- Commerce setup calls `createBusinessUnit` while presenting “Create or select a Business.” It
  creates no canonical Business and stores Commerce preset/activity on the BusinessUnit.
- Creating Branch identity directly in Commerce conflicts with ADR-040's Core organization owner;
  the future Core contract is explicitly deferred and must not be invented by this audit.
- POS computes tax and totals in the page and the write action accepts them. The Commerce owner
  must validate canonical totals at the write boundary, even when the caller is Commerce UI.
- `createInvoice` can select an Order by ID from the full collection without first enforcing the
  current Workspace, BusinessUnit, and Branch scope.

#### Legacy-compatible

- Current localStorage/sessionStorage data, handoff query keys, `BusinessUnit` IDs, and
  `OSEnablement` records support the working demo and E2E flow. They must remain until replacement
  adapters and migrations are proven.
- Hardcoded Core URLs are acceptable only as local-development compatibility. They must not become
  production contract assumptions.

#### Remove later

- The Commerce copy of Core shell components should be removed only after navigation correctly
  routes to Core or consumes a stable shared presentation primitive.
- Duplicated app-local presentation components can be consolidated after visual and interaction
  characterization; this is not first-phase work.

#### Missing

- a Commerce-owned client/service boundary that validates write commands and can switch from mocks
  to Laravel without changing pages;
- an authorized Core context client for identity, organization, subscription, and permissions;
- explicit Business context alongside BusinessUnit and Branch context;
- route, command, and projection scope tests;
- comprehensive bilingual, accessibility, and failure-state coverage.

## 4. Shared Packages Review

### 4.1 `packages/ui`

**Classification: Improve.** The package is presentation-only and contains no observed domain
logic, which is compatible with its required boundary. Branding, Button, Input, Badge, Card, Icon,
and Logo can remain.

Bounded improvements:

- `components/Logo.tsx` exposes the deprecated `shops` app name, and `Icon.tsx` contains a
  `shops-app` comment. No active use was found. Retire the alias only after consumer and release
  compatibility checks.
- `Input` renders an error visually but does not bind it using `aria-describedby`/`aria-invalid`.
- `ButtonProps` narrows native button attributes, limiting accessibility and test metadata.
- Several app-local components duplicate presentational behavior instead of using this package.
  Consolidation is useful but lower priority than ownership stabilization.

No ownerless business logic was found here.

### 4.2 `packages/types`

**Classification: Reconcile.** The package remains contract-only at runtime, but some contracts
encode the legacy architecture:

- `BusinessUnit` is the only business-like organization type and includes subscription, OS,
  activity, preset, and Branch collections. There is no `Business` type.
- `OSEnablement` looks canonical even though ADR-023 explicitly leaves its successor unresolved.
- `CommerceProduct` combines catalog facts with a `branchId` and fallback stock while separate
  `BranchInventory` exists.
- `CommerceCustomer` includes Branch identity while UI/provider behavior appears BusinessUnit-wide.

These types are compatibility contracts and should not be directly renamed. Any replacement must
be versioned and accompanied by a storage/API/data migration specification.

### 4.3 `packages/shared`

**Classification: Reconcile.** The package does not stay utility/constants-only. Its barrel exports
the entire mock database and domain behavior from multiple owners:

- Core/commercial behavior: OS and Plan catalogs, `OSEnablement` normalization and selection,
  plan mapping, organization name checks, and business-to-preset recommendation;
- Commerce behavior: tax/document computation, sales reports, inventory lookup, stock movement,
  transfer and return construction, Commerce billing address, and preset defaults;
- shared/mock infrastructure: storage adapters, IDs, dates, locale dictionary, seed data, and media
  compression/quota helpers.

The pure storage and primitive helpers are safe foundations. The owner-specific behavior should be
called through owner-specific app facades first, then physically relocated in bounded changes.
Moving files before stabilizing those call contracts would add regression risk without fixing the
actual boundary.

### 4.4 `packages/auth`

**Classification: Missing.** No package exists. Before backend authentication, a shared package may
provide auth/session integration helpers only. Core remains the identity owner; the package must not
become a second user/session store or authorization owner.

### 4.5 `packages/sdk`

**Classification: Missing.** No package exists, and no `fetch`, axios, or API base URL use was found
in the audited apps/packages. Before Laravel integration, a client-only boundary is required for
versioned owner contracts, error mapping, context propagation, and compatibility. It should replace
the storage adapter beneath existing app facades, not force page rewrites.

### 4.6 Cross-package dependency assessment

- App -> `@nexoraxs/ui`: **Keep**. Presentation dependency points inward correctly.
- App -> `@nexoraxs/types`: **Keep** as a dependency direction, while legacy contract shapes are
  reconciled through versioning rather than silent edits.
- App -> `@nexoraxs/shared`: **Reconcile** because the broad barrel grants both applications access
  to multiple owners' behavior and storage.
- `@nexoraxs/shared` -> `@nexoraxs/types`: **Keep** mechanically, but owner-specific behavior must
  be removed from the generic shared package over time.
- App -> another app: **Keep**. No direct source import was found.

## 5. Business / BusinessUnit Compatibility Register

The register below treats “Business” UI text as a label, not proof of canonical ownership. The
current compatibility dependency is the browser key `nexoraxs.db.businessUnits`, session key
`nexoraxs.session.currentBusinessUnitId`, `BusinessUnit` TypeScript contract, and related route/test
behavior. None of the treatments authorizes a direct rename or data migration.

| Exact file / path | Current behavior | UI label | Underlying model / type / store | Compatibility dependency | Classification | Safe short-term treatment | Required future migration decision | Affected routes, state, mock data, types, tests |
|---|---|---|---|---|---|---|---|---|
| `packages/types/src/core.ts` | Defines the only business-like entity and attaches OS, subscription, preset, activity, and Branch IDs | N/A | `BusinessUnit` | All Core/Commerce provider contracts and persisted BU rows | Reconcile | Freeze shape; document as legacy compatibility | Specify canonical Business and BusinessUnit IDs, parent relation, field allocation, versioning, and migration | Every context route; all mock state; E2E seed |
| `packages/types/src/index.ts` | Re-exports legacy `BusinessUnit` and no `Business` | N/A | Type barrel | All package/app type imports | Reconcile | Preserve export until versioned replacement exists | Define additive compatibility/export strategy without duplicate truth | Both stores and all typed consumers |
| `packages/types/src/commerce.ts` | Scopes Commerce models to `businessUnitId`; CommerceSetup supplies user-facing business identity fields | Business / Business Identity | Commerce types plus legacy BU reference | Existing setup, documents, POS, inventory, reports | Legacy-compatible | Keep IDs and billing semantics stable | Decide mapping of canonical Business, operational BusinessUnit, Commerce setup, and billing/legal identity | Commerce routes and test fixtures |
| `packages/shared/src/mock-db/schema.ts` | Persists BU keys and translates `business_unit` as “Business” | Business | `businessUnits`, `currentBusinessUnitId`, dictionary | Existing sessions/local storage and UI translations | Reconcile | Do not change keys or translation in place | Define compatibility labels and new canonical keys/version migration | Both apps, all mock sessions |
| `packages/shared/src/mock-db/seed.ts` | Seeds `Mustafa Pharmacy` as BusinessUnit with activity/preset/OS/subscription | Business in UI | Combined Core/Commerce mock DB | Demo mode and Commerce E2E assumptions | Legacy-compatible | Keep fixture; label non-canonical and add characterization | Define canonical Business seed, child BusinessUnit seed, and deterministic ID migration | Demo flows, Product Hub, Commerce, E2E |
| `packages/shared/src/mock-db/selectors.ts` | Derives industry, enablement, setup, and Branch checks from BusinessUnit | Business in helper names | `BusinessUnit`, `OSEnablement`, Branch collections | Both providers and setup flow | Reconcile | Preserve results through facade; stop adding semantics | Decide which selectors belong to Business, BU, Core lifecycle, or Commerce | Setup, Product Hub, context switching, tests |
| `packages/shared/src/mock-db/actions.ts` | Builds scoped records using `businessUnitId` but has no Business context | No direct label | Commerce/Media record builders | Provider write paths | Improve | Retain IDs; require explicit Business context only after approved contract | Decide compatibility command/record context during migration | Commerce writes and future SDK DTOs |
| `packages/shared/src/mock-db/index.ts` | Exposes BU and business-named selectors from broad shared barrel | N/A | Cross-owner barrel | Both app store barrels | Reconcile | Keep exports while facades are characterized | Decide owner-specific export/client boundaries | All app store imports |
| `apps/core-platform/lib/store/AppProvider.tsx` | Loads, creates, selects, and mutates BU; retrofits a Branch parent; treats BU as current business | Business in pages/shells | `BusinessUnit[]`, current BU session, shared storage | Core onboarding, Product Hub, Commerce handoff | Reconcile | Freeze public API and storage behavior; add tests; no rename | Separate canonical Business creation, BU creation, ancestry, and legacy mapping under Core contract | Core onboarding/dashboard; Commerce setup; all mock data; E2E indirectly |
| `apps/core-platform/lib/store/index.ts` | Re-exports `BusinessUnit`, BU state, and mixed Core/Commerce helpers | N/A | App facade barrel | All Core pages/components | Reconcile | Preserve imports; narrow behind compatible facade later | Version facade around Business and BU contexts | All Core routes |
| `apps/core-platform/lib/commerce-url.ts` | Serializes current BU as the setup “business” context | Business in destination | BU ID/name/preset/activity in query | Current cross-origin local mock handoff | Legacy-compatible | Keep temporarily; treat query as untrusted compatibility data | Define authorized handoff containing distinct Business and BU references | Product Hub -> `/setup`; sessions and URL tests |
| `apps/core-platform/app/dashboard/apps/page.tsx` | Counts BUSINESS_UNITS as “Businesses,” displays currentBU, and routes it to Commerce | Businesses / Business | `BUSINESS_UNITS`, `currentBU` | Current Product Hub cards, plan limits, activity | Reconcile | Preserve display while marking projection legacy; no model inference | Define Product Hub projection with distinct Business and operational BU counts/context | `/dashboard/apps`, mock orders/products, future tests |
| `apps/core-platform/app/dashboard/page.tsx` | Displays current BU as business/dashboard context | Business | `currentBU` | Existing dashboard context | Legacy-compatible | Keep label and value until projection exists | Define distinct Business and BU display/navigation context | `/dashboard` and context tests |
| `apps/core-platform/app/dashboard/billing/page.tsx` | Uses BU counts/plan limits and Business-facing copy | Businesses | `BUSINESS_UNITS`, Plan limits | Existing billing mock | Legacy-compatible | Keep limits presentation; do not declare canonical scope | Decide whether each limit applies to Business, BU, or both and map legacy values | `/dashboard/billing`, catalogs, tests |
| `apps/core-platform/app/dashboard/team/page.tsx` | Presents BU access as Business access | Business | WorkspaceMember `businessUnitId` and form aliases | Current team/invite UI | Reconcile | Preserve display; label storage semantics internally | Define grants for Business versus BU and migration of assignments | `/dashboard/team`, members, Invite modal, auth tests |
| `apps/core-platform/components/dashboard/InviteUserModal.tsx` | Reads legacy BU/Branch names and submits `businessUnitAccess` | Business | `core-session` BU keys and form string | Active invite modal | Legacy-compatible | Keep until current access projection replaces helper | Define distinct Business/BU access assignment contract | Team route, old session helpers, tests |
| `apps/core-platform/components/shell/ContextSwitcher.tsx` | Lists BU records as Business choices, then Branches | Business | `BUSINESS_UNITS`, `setCurrent(currentBusinessUnitId)` | Current Core navigation state | Reconcile | Preserve visible behavior; validate selection through future client | Define selector hierarchy and compatibility mapping for Business -> BU -> Branch | Core shell, sessions, route guards |
| `apps/core-platform/components/onboarding/steps/StepBusinessUnit.tsx` | Old step collects business name/industry into BU session keys | Business / legacy Business Unit wording | `core-session` BU name/industry | Superseded onboarding artifacts | Remove later | Do not reactivate; retain until reachability tests prove safe removal | Decide whether any stored values require migration or can expire | Old onboarding components and session data |
| `apps/core-platform/components/onboarding/OnboardingStepper.tsx` | Old navigation vocabulary includes BusinessUnit-era step | Business-related onboarding | Presentation enum/labels | Superseded onboarding components | Remove later | Keep inert; do not use as canonical journey | Same migration decision as legacy onboarding removal | Old component tests/reachability |
| `apps/core-platform/app/onboarding/page.tsx` | Creates Workspace/Plan but no Business, then calls flow complete | No Business creation step | Core provider plus legacy later Commerce BU creation | Current onboarding and Product Hub transition | Reconcile | Freeze flow; characterize before changing | Specify when canonical Business and BU are created and how existing sessions continue | `/onboarding`, `/dashboard/apps`, Commerce `/setup`, E2E additions |
| `apps/commerce/lib/store/AppProvider.tsx` | Reads/creates BU as Business, scopes Commerce to it, and reconstructs it from URL | Business throughout Commerce | Duplicated `BusinessUnit[]` and shared storage | Entire Commerce route context and demo | Reconcile | Preserve BU IDs/storage; isolate Core writes behind compatibility client | Define read-only Core context plus approved organization write protocol and data migration | All Commerce routes, mock DB, E2E |
| `apps/commerce/lib/store/index.ts` | Re-exports BU type/context and business selectors | N/A | Commerce facade barrel | All Commerce pages/components | Reconcile | Keep API stable while splitting internals | Version facade to expose distinct Business/BU context | Every Commerce route |
| `apps/commerce/app/setup/page.tsx` | “Create or select a Business” calls `createBusinessUnit`; activity and preset are stored on BU | Business | `BusinessUnit` plus `CommerceSetup` | Current first-run flow and Product Hub copy | Reconcile | Preserve UX and IDs; do not add a second Business row ad hoc | Separate approved spec for Business creation/selection, BU operation, preset ownership, and migration | `/setup`, provider, schema, seed, future setup tests |
| `apps/commerce/components/shell/ContextSwitcher.tsx` | Displays BU records as Businesses and selects BU then Branch | Business | `BUSINESS_UNITS`, currentBU, currentBranch | All Commerce operational navigation | Reconcile | Keep interaction; add characterization and validated scope seam | Define Business-aware navigation while retaining existing BU IDs | Commerce shell and all routes |
| `apps/commerce/app/(commerce)/dashboard/page.tsx` | Uses Commerce setup/current BU as business identity/readiness display | Business identity | `CommerceSetup`, currentBU, Business billing resolver | Existing dashboard/setup completeness | Legacy-compatible | Preserve presentation and billing fields | Decide explicit Business vs Commerce trading identity vs BU display precedence | `/dashboard`, setup state, localization tests |
| `apps/commerce/app/(commerce)/settings/page.tsx` | Links Business Identity settings and displays Business storage language | Business Identity | `CommerceSetup` plus Workspace storage | Existing Commerce settings | Legacy-compatible | Keep Commerce-owned operational settings | Define which organization fields are references versus Commerce-owned billing/configuration | `/settings`, `/setup` |
| `apps/commerce/app/(commerce)/settings/documents/page.tsx` | Renders Business name/address in Commerce documents | Business | `CommerceSetup` | Receipt/invoice previews | Legacy-compatible | Preserve document output | Define canonical organization/trading/billing identity projection into Commerce documents | Document settings and snapshot tests |
| `apps/commerce/app/(commerce)/invoices/[id]/document/page.tsx` | Falls back from Commerce setup to currentBU for document business name | Business | `CommerceSetup` + `currentBU` | Existing invoice rendering | Legacy-compatible | Preserve fallback ordering until migration spec | Define frozen precedence and historic snapshot behavior during identity migration | Invoice document route and regression tests |
| `apps/commerce/app/(commerce)/returns/[id]/document/page.tsx` | Uses setup/currentBU for return-document business identity | Business | `CommerceSetup` + `currentBU` | Existing return document/E2E | Legacy-compatible | Preserve output and E2E | Define identity snapshot migration without altering historical documents | Return document route and E2E |
| `apps/commerce/app/(commerce)/invoices/page.tsx`, `invoices/[id]/page.tsx` | Displays setup/Workspace fallback as Business | Business / Business Name | Commerce setup, invoice, Workspace fallback | Current invoice list/detail | Legacy-compatible | Keep display fallbacks | Define distinct trading identity and tenant display fallback contract | Invoice list/detail and visual tests |
| `apps/commerce/app/(commerce)/pos/success/page.tsx` | Prints Commerce setup as business identity | Commerce Business | `CommerceSetup` | Sale completion output | Legacy-compatible | Preserve receipt behavior | Same document identity/snapshot decision | POS success and E2E extensions |
| `packages/ui/src/components/Logo.tsx` and `Icon.tsx` | Retains `shops`/`shops-app` compatibility name for Commerce presentation | Commerce OS visually | `LogoApp = "core" | "shops"` | Potential legacy consumers; no active use found | Remove later | Do not extend; remove after package-consumer proof | Decide deprecation window/version bump only, not organization migration | Shared UI consumers and visual tests |
| `tests/e2e/commerce-044.spec.ts` | Uses seeded BU-scoped Commerce state indirectly and raw storage keys directly | Branch names; no explicit Business label assertion | Combined mock DB and BU seed | Only behavioral safety net | Legacy-compatible | Keep unchanged initially; add explicit compatibility characterization beside it | Update fixtures only with approved migration and dual-version expectations | Commerce storage, routes, invoice/return behavior |

### Compatibility conclusion

The current BusinessUnit record is both an operational scope and a legacy container for
Business-like fields. It must remain temporarily, but it must not receive additional canonical
responsibilities. The required future decision is not “rename BusinessUnit to Business.” It is a
governed specification covering canonical IDs, ancestry, source ownership, field allocation,
compatibility reads, data backfill, rollback, API/version behavior, route context, mock fixtures,
and test migration.

## 6. Boundary Violations

### Confirmed violations and gaps

| Boundary | File-level evidence | Assessment | Classification |
|---|---|---|---|
| Core writes Commerce operational state | `apps/core-platform/lib/store/AppProvider.tsx:86-110`, `506-618` exposes and implements Commerce Setup, Product, Order, Invoice, Customer writes | Direct ownership violation | Reconcile |
| Commerce writes Core state | `apps/commerce/lib/store/AppProvider.tsx:214-353`, `640-775` reconstructs or creates User, Workspace, Subscription, enablement, Branch, BusinessUnit and duplicates Core actions | Direct ownership and authorization violation | Reconcile |
| Product Hub reads raw Commerce state | `apps/core-platform/app/dashboard/apps/page.tsx:17-80` reads `orders` and `products` for activity | Bypasses owner projection boundary | Reconcile |
| Shared package owns domain behavior | `packages/shared/src/mock-db/index.ts:28-78` exports Core lifecycle selectors and Commerce calculations/builders | Ownerless/multi-owner business logic | Reconcile |
| Shared package owns Commerce tax/doc logic | `packages/shared/src/commerce/documents.ts:3-110` | Wrong package ownership despite reusable algorithm | Reconcile |
| Business/BU canonical concepts duplicated by label | `packages/types/src/core.ts:24-38`, `schema.ts:65-66`, Commerce setup `547-557`, `624-675` | Business absent; BU presented as Business | Reconcile |
| Subscription implies active enablement | Core provider `403-453` | Violates lifecycle separation; legacy successor unresolved | Reconcile |
| Product Hub readiness collapses states | Product Hub `37-41`; Core provider `282-285` | Subscription/setup/readiness/access are under-specified | Reconcile |
| Handoff trusts client-controlled facts | `lib/commerce-url.ts:26-61`; Commerce provider `214-353` | Query parameters become persisted Core state | Reconcile |
| Explicit context incomplete | All providers store Workspace/BU/Branch but no Business; `setCurrent` accepts IDs without owner authorization | ADR-004/ADR-034 gap | Reconcile |
| Tenant collections loaded globally | Core provider `165-187`; Commerce provider `371-399` | Browser holds all mock rows and filters after load | Legacy-compatible |
| Write scope validation incomplete | Commerce `createInvoice` at `1228-1246` locates order by global ID without current-context check | Cross-tenant risk if multiple tenants are loaded | Reconcile |
| UI supplies canonical monetary totals | POS `53`, `65-77`; provider `1155-1187` accepts VAT/subtotal/total/net | Owner boundary does not recalculate or validate | Reconcile |
| UI owns setup defaults | Commerce setup `18-40`, `80-175` hardcodes location, preset categories, tax and recommendations | Domain/configuration decisions are embedded in page | Improve |
| Mock credentials are plaintext | Core provider `336-352`; seed `100-103` | Acceptable only as explicitly non-production mock | Legacy-compatible |
| Mock storage leaks into tests | `tests/e2e/commerce-044.spec.ts:13-20`, `49-78` reads/writes raw storage | Couples tests to schema; valuable characterization | Legacy-compatible |
| Deprecated architecture name | `packages/ui/src/components/Logo.tsx:3,42-65`; `Icon.tsx:4` | `shops` alias remains despite Commerce naming | Remove later |
| Hardcoded environment routing | Core `commerce-url.ts:3`; Commerce layout `15-23`; setup `78`; shell/menu helpers | Local URLs could leak into non-local builds | Improve |
| Locale/currency assumptions | `selectors.ts:9-15`, many Commerce `en-GB` calls, Product Price `(EGP)` labels | Workspace currency/language not consistently honored | Improve |
| Test/quality coverage | Only `tests/e2e/commerce-044.spec.ts`; no Core/Landing/unit/a11y/i18n/tenant tests | Mandatory quality gates lack evidence | Missing |
| SDK/auth abstraction | `packages/sdk` and `packages/auth` absent; no network client calls found | Backend replacement boundary not yet implemented | Missing |

### Specifically not found

- **Cross-app imports:** none found. Apps communicate through URLs and shared packages, not direct
  source imports.
- **Direct fetch/axios usage:** none found in the audited apps/packages.
- **Components importing `mock-db` directly:** ordinary pages/components use app-local store
  facades. Providers and app store barrels are the leak point, not leaf components.
- **Another OS domain inside Commerce:** no Healthcare, HR, CRM, Gym, or full Maintenance workflow
  was found in Commerce. Pharmacy and Restaurant/Cafe appear as Commerce preset/setup content.

### Mock data assessment

Mock data lives in `packages/shared/src/mock-db/{schema,seed,storage,actions,selectors}.ts` and is
loaded by both application providers. UI components generally import `useApp` or the app-local
store barrel, not raw mock collections. That is a useful replacement seam.

The mock stores expose significant domain behavior, not only static data. Commerce calculations,
inventory, transfers, returns, reports, organization checks, subscription/enablement selection,
and preset recommendations are all present. The storage adapter is stable enough to preserve as a
legacy implementation beneath a better client boundary.

Laravel can replace the mocks without rewriting the UI **if** the page-facing operations are first
characterized and split into owner-validating Core and Commerce clients/facades. Today, simply
replacing localStorage calls would be unsafe because the two providers expose different overlapping
behavior, canonical validation is sometimes performed in pages, and the common shared package
contains business logic. No additional generic Repository Pattern layer is required; the missing
abstraction is an owner-scoped client/contract boundary that can be implemented by the current
mock adapter and later by `packages/sdk`.

Mock structures that should remain temporarily:

- storage and session keys;
- seeded IDs and the existing BusinessUnit-as-Business fixture;
- `OSEnablement` compatibility records;
- the Commerce query handoff keys;
- Branch inventory, movement, transfer, return, Order, and Invoice fixtures;
- current `useApp` page-facing behavior;
- raw-storage E2E assertions as migration characterization.

## 7. Safe Refactor Sequence

No phase adds product features. Each phase should be its own reviewed Spec Kit feature or an
explicitly bounded sub-plan with a Constitution Check.

### Phase A — Characterization and safety tests

- **Goal:** Make current behavior observable before changing boundaries.
- **Files/areas:** `tests/e2e`, Core auth/onboarding/Product Hub routes, Commerce setup/handoff/POS,
  both providers, shared calculations, context switchers, localization and accessibility surfaces.
- **Prerequisites:** Freeze current mock keys, seeded IDs, public provider methods, route URLs, and
  expected E2E data.
- **Regression risks:** Tests may accidentally encode invalid architecture as a desired future
  model. Mark legacy expectations explicitly as compatibility, not canonical approval.
- **Validation required:** Core onboarding/handoff flow; Business label -> BusinessUnit storage;
  Workspace/BU/Branch switching; plan versus setup state; POS owner totals; Branch isolation;
  invoice immutability; Arabic direction/content; keyboard and a11y smoke; unauthorized context
  attempts.
- **Rollback:** Test-only changes can be reverted without runtime behavior changes. Preserve the
  existing Commerce 044 test unchanged while new tests are introduced.

### Phase B — Boundary stabilization

- **Goal:** Define stable page-facing Core and Commerce client/facade contracts without changing
  storage, routes, UI, or behavior.
- **Files/areas:** `apps/*/lib/store/index.ts`, both `AppProvider.tsx` files, Product Hub, Commerce
  setup/POS, and the broad `@nexoraxs/shared` import surface.
- **Prerequisites:** Phase A coverage and a responsibility map for every exposed provider method.
- **Regression risks:** Context hydration timing, stale closure behavior, redirects, toast timing,
  and cross-tab/mock storage behavior.
- **Validation required:** Existing route and E2E behavior remains byte/semantically equivalent;
  Core facade exposes no Commerce writes; Commerce facade invokes Core-owned context only through a
  compatibility boundary; owner writes validate scope and totals.
- **Rollback:** Keep the old providers behind a compatibility implementation and switch consumers
  back as one unit if contract tests fail. Do not change persisted keys in this phase.

### Phase C — Mock/client abstraction reconciliation

- **Goal:** Make browser mocks one implementation of stable owner clients so Laravel can replace
  them later.
- **Files/areas:** `packages/shared/src/mock-db`, `packages/shared/src/commerce/documents.ts`, future
  `packages/sdk`, future `packages/auth`, and application client implementations.
- **Prerequisites:** Phase B interfaces and owner validation; API contracts must follow Governance
  when backend integration begins.
- **Regression risks:** Report totals, tax rounding, stock movements, document numbering, return
  calculations, media quota behavior, and Product Hub projection freshness.
- **Validation required:** Contract tests execute the same behavior against mock clients; UI does
  not import storage; owner-specific code no longer lives in generic `packages/shared`; E2E remains
  green.
- **Rollback:** Retain the mock client implementation and old storage schema. The Laravel client can
  be disabled without reverting page code.

### Phase D — Business and BusinessUnit compatibility preparation

- **Goal:** Prepare, but do not execute, the migration from the legacy synonym model to the frozen
  hierarchy.
- **Files/areas:** Core/Commerce providers and context switchers, `packages/types`, shared seed and
  storage schema, onboarding/setup, Product Hub, team access, documents, and tests.
- **Prerequisites:** A dedicated approved specification that traces ADR-004, ADR-034, ADR-040, the
  Core Freeze, the Commerce Freeze, and all legacy occurrences in section 5.
- **Regression risks:** Duplicate truth, orphaned Branches, broken deep links, incorrect Business
  DNA scope, access expansion, document identity changes, fixture loss, and plan-limit changes.
- **Validation required:** Deterministic ancestry, one canonical owner per entity, compatibility
  reads, explicit Business and BU context, migration idempotency, authorization tests, historical
  document preservation, fixture/version tests, and rollback rehearsal.
- **Rollback:** The approved plan must retain legacy IDs/keys or a reversible mapping until all
  consumers and data are verified. No destructive rename or one-way migration is acceptable.

### Phase E — Later governed migrations

- **Goal:** Execute separately approved data/API/auth/lifecycle migrations after the relevant
  decisions exist.
- **Files/areas:** Laravel integration, Core organization writes, setup handoff, commercial and
  operational lifecycle projections, auth/session, deprecated helpers/names, and storage cleanup.
- **Prerequisites:** Applicable specs, Accepted ADR or Freeze update if architecture changes,
  compatibility and data migration plans, production telemetry, and rollback gates.
- **Regression risks:** Tenant leakage, authorization bypass, data loss, state divergence,
  unavailable OS setup, and broken historical documents.
- **Validation required:** Owner contract tests, server-side isolation, audit evidence, observability,
  backward compatibility, bilingual/a11y checks, production migration rehearsal, and readiness
  review.
- **Rollback:** Use versioned contracts and reversible rollout. Retain the last compatible read path
  until migration success criteria and data reconciliation are complete.

## 8. Do-Not-Touch Register

The following working foundations should not be changed during the first refactoring phase:

| Code / behavior | Why protect it | Classification |
|---|---|---|
| Separate `landing`, `core-platform`, and `commerce` applications | Correct independent app boundary; no direct cross-app imports | Keep |
| Commerce route group and route URLs | Correct OS ownership and working navigation | Keep |
| `tests/e2e/commerce-044.spec.ts` | Only substantial behavior characterization | Keep |
| Branch inventory, transfer, movement, return, and invoice-history behavior | Correct Commerce-owned behavior with regression evidence | Keep |
| Existing local/session storage keys and seeded IDs | Required for current mock compatibility and migration characterization | Legacy-compatible |
| Existing BusinessUnit IDs and UI “Business” label behavior | Must remain until a governed migration exists | Legacy-compatible |
| Existing `OSEnablement` rows | Successor semantics are deferred; deleting or promoting them would both be unsafe | Legacy-compatible |
| `useApp` imports in leaf pages | Valuable UI replacement seam; internals can change beneath it | Keep |
| `packages/shared/src/mock-db/storage.ts` adapter behavior | Centralized mock persistence and useful compatibility seam | Legacy-compatible |
| `packages/ui` primitives and theme exports | Presentation-only and architecture-compatible | Keep |
| `packages/types` import paths | Stable contract dependency direction; shapes need versioned migration, not import churn | Keep |
| Commerce billing address versus Branch operational address resolution | Correct separation already encoded | Keep |
| Direction switching and logical RTL CSS foundations | Useful basis for required bilingual quality | Keep |
| Landing semantic section structure and reduced-motion CSS | Good accessible presentation foundation | Keep |
| Core Product Hub route and user journey | Correct Core-owned surface; only its data boundary needs reconciliation | Keep |

## 9. Missing Foundations

### Required now for safe continued frontend development

1. Characterization tests for Core onboarding, Product Hub handoff, legacy BusinessUnit-as-Business
   behavior, context switching, POS totals, and tenant-scope rejection.
2. Stable owner-scoped Core and Commerce page-facing client/facade contracts, implemented initially
   by the existing mock storage.
3. Write-boundary validation for Commerce monetary totals, resource scope, and context rather than
   trusting page-calculated or selected values.
4. An explicit compatibility register in the next feature spec preventing silent BusinessUnit
   rename, duplicate Business truth, or unapproved `OSEnablement` evolution.
5. Arabic/English translation completion criteria, locale-aware currency/date formatting, RTL/LTR
   checks, and accessibility acceptance tests for every changed route.
6. A repeatable, CI-suitable test/typecheck task set. The current headed/slow E2E configuration is
   useful for manual review but not a sufficient automated quality gate.

### Required before backend integration

1. `packages/sdk` as a client-only home for versioned API clients and error/context mapping.
2. `packages/auth` as auth/session helpers only, backed by the Core identity boundary.
3. Server-side Workspace/Business/BusinessUnit/Branch/OS/resource authorization and owning-domain
   revalidation.
4. A secure setup handoff that carries references/context without treating browser parameters as
   proof or recreating Core truth in Commerce.
5. Owner-specific DTO mapping, version compatibility, idempotency, loading/error/empty states,
   retry/timeout behavior, and failure isolation.
6. Audit and observability integration for protected and consequential operations.
7. A governed organization write protocol for OS setup, because ADR-040 deliberately leaves the
   exact protocol open.
8. A decided replacement or compatibility treatment for legacy `OSEnablement`; ADR-023 does not
   authorize inventing it during implementation.

### Deferred

- Actual Business/BusinessUnit data migration until its dedicated specification and migration plan
  are approved.
- Retirement of local storage, old session helpers, `shops` aliases, and compatibility URLs until
  replacements are deployed and rollback is proven.
- Full Marketplace, AI Expert Network, Global Platform, and future OS frontend implementation.
- Optional cross-OS integrations.
- Physical deployment, infrastructure, and deferred technology choices not needed by the current
  frontend reconciliation.

## 10. Final Recommendation

### 1. Can the existing frontend continue to be developed safely?

**Yes, conditionally.** New work can proceed safely after Phase A characterization begins and if no
new feature adds canonical models, lifecycle shortcuts, or cross-owner writes to the monolithic
providers. High-risk onboarding, organization, subscription/readiness, handoff, permissions, and
canonical Commerce write changes should wait for the boundary feature.

### 2. What must be protected from unnecessary rewriting?

Protect the independent app routes, Product Hub journey, Commerce setup and operational UI,
inventory/transfer/return behavior, invoice history, existing E2E flow, `useApp` page contracts,
shared UI primitives, storage keys, seeded IDs, BusinessUnit compatibility data, and current
document/address behavior.

### 3. What is the first bounded refactor?

Add characterization and stabilize owner-scoped client/facade contracts behind the existing
`useApp` interfaces. The first runtime change should prevent Core from exposing Commerce writes and
prevent Commerce from writing Core facts, while leaving UI, routes, storage keys, and visible
behavior unchanged through compatibility adapters.

### 4. What legacy behavior must remain temporarily?

The BusinessUnit-as-Business storage model and UI label, current BusinessUnit IDs, local/session
storage schema, `OSEnablement` records, query handoff, mock auth, seeded demo data, and raw-storage
E2E assertions must remain until approved replacements and reversible migrations exist.

### 5. Is the mock layer replaceable by Laravel later without rewriting the UI?

**Yes.** Leaf UI already calls app-local facades rather than raw storage. Stabilizing those facades,
moving owner validation out of pages/shared code, and implementing the same contracts through
`packages/sdk` will allow Laravel to replace the mock adapter without rewriting route components.
The current provider internals are not directly swappable yet, but the page boundary is reusable.

### 6. What requires a separate Spec Kit feature and migration plan?

- canonical Business plus BusinessUnit hierarchy implementation and legacy data migration;
- organization write protocol during OS setup;
- subscription/install/setup/activation/readiness/access reconciliation and any successor to
  `OSEnablement`;
- secure Core-to-Commerce handoff and session/auth integration;
- Core/Commerce state ownership separation;
- shared-domain-logic relocation and SDK/auth introduction;
- eventual removal of old storage/session helpers and deprecated naming.

Any feature that changes the frozen architecture also requires the Governance path: ADR, explicit
approval, Architecture Review, updated or successor Freeze, and readiness validation.

### 7. What should the next `/speckit.specify` feature be?

Use the next feature for:

> **Frontend Boundary Stabilization and Legacy BusinessUnit Compatibility Characterization** —
> characterize the current Core-to-Commerce onboarding/handoff and BusinessUnit-as-Business
> behavior; define owner-scoped mock client facades; preserve all storage keys, IDs, routes, and UI;
> prevent new cross-owner writes; add tenant, lifecycle, POS-total, localization, accessibility, and
> rollback tests; do not perform the Business/BusinessUnit data migration.

This is the smallest safe feature that unlocks continued frontend work and prepares a later,
separate Business/BusinessUnit migration specification without guessing deferred architecture.
