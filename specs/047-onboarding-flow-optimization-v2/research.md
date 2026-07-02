# Research: Target Architecture v2 Alignment

## Decision 1: Keep BusinessUnit as the internal Business entity for this feature

**Decision**: Add fields and documentation to the existing BusinessUnit model instead of globally renaming every symbol to Business.

**Rationale**: The current MVP already uses BusinessUnit for Commerce scoping, branch filtering, products, orders, invoices, and setup. A global rename would have a high blast radius and is not required for product-language alignment. The spec explicitly allows treating BusinessUnit as the internal Business entity for now.

**Alternatives considered**:
- Rename all BusinessUnit symbols to Business immediately: rejected because it risks breaking working MVP flows and should be a dedicated safe-rename effort.
- Add a separate Business model beside BusinessUnit: rejected because it creates duplicate sources of truth.

## Decision 2: Add OSEnablement as the subscription-to-usage relationship

**Decision**: Introduce `OSEnablement` as a shared core/platform record that connects a workspace-owned OS subscription to workspace, business, or branch usage scope.

**Rationale**: Constitution Article VI states OS subscriptions are workspace-level and subscribed OS products may be enabled for one or more Business Units and Branches. The existing model jumps from subscription to current business context. `OSEnablement` fills that missing relationship without changing the subscription contract.

**Alternatives considered**:
- Store enabled business IDs directly on OSSubscription: rejected because usage scope is not the purchased license and can become multi-scope.
- Store enabled OS IDs on BusinessUnit only: rejected because workspace-scoped OS enablements such as HR or CRM would not fit cleanly.

## Decision 3: Represent branch-scoped enablements with branchIds

**Decision**: `OSEnablement` uses `branchIds: string[]` for branch scope, with `businessUnitId` required when branch scope is used.

**Rationale**: The target spec names `branchIds` as the required shape. It supports enabling an OS for one or more selected branches under the same business and avoids one record per branch unless the product later needs per-branch status history.

**Alternatives considered**:
- Single `branchId`: rejected because user input requires `branchIds`.
- One enablement record per branch: rejected for MVP because it duplicates shared status and makes common business-level reasoning harder.

## Decision 4: Industry Type belongs to Business, Commerce Preset remains Commerce-only

**Decision**: Add `industryType` to BusinessUnit/Business and keep `preset`/`presetId` as Commerce-specific metadata.

**Rationale**: Industry type classifies the business independent of OS. Commerce preset seeds Commerce operational defaults and cannot become a cross-OS concept without coupling HR, CRM, or future OS products to Commerce.

**Alternatives considered**:
- Reuse `presetId` as industry type: rejected because it makes Commerce the master classifier for all OS products.
- Move presets into Workspace: rejected because a workspace may contain multiple different businesses.

## Decision 5: Preserve existing local/demo storage with compatibility fallbacks

**Decision**: Seed new records and add fallback behavior for existing workspaces/subscriptions that do not yet have OSEnablement or industryType.

**Rationale**: The user explicitly requires not wiping localStorage and preserving existing mock data. Existing MVP records should remain valid.

**Alternatives considered**:
- Clear localStorage and reseed: rejected by requirement.
- Require users to rerun onboarding: rejected because existing MVP flow must keep working.

## Decision 6: Keep validation in shared selectors/helpers

**Decision**: Put enablement and branch/business validation in shared mock-db selectors/helpers rather than page-level storage logic.

**Rationale**: AGENTS.md and the active architecture require pages/components to avoid direct localStorage/sessionStorage reads. Shared selectors also keep Core and Commerce behavior consistent.

**Alternatives considered**:
- Implement validation in individual pages: rejected because it duplicates rules and violates storage-access discipline.
