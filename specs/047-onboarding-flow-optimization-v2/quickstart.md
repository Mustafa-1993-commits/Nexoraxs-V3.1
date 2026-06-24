# Quickstart: Target Architecture v2 Alignment

## Purpose

Validate that Target Architecture v2 alignment preserves the MVP while adding explicit OS usage enablements.

## Manual Validation Flow

1. Start from existing demo or local data.
2. Confirm the current workspace still loads in Core Platform.
3. Open Product Hub and verify Commerce OS subscription state still appears.
4. Launch Commerce OS and confirm the current Commerce business and branch still load.
5. Inspect the shared data state through app/provider-visible data or dev tooling:
   - Workspace exists.
   - Current Business exists through internal BusinessUnit.
   - Current Branch has `businessUnitId`.
   - Commerce OS subscription exists.
   - Active Commerce OSEnablement exists for the current Business.
6. Confirm Commerce Dashboard, POS, Inventory, Orders, Invoices, Reports, and Settings still filter by active Business and Branch.
7. Confirm no touched user-facing UI says `BusinessUnit`, `Business Unit`, `BU`, or `Default Business Unit`.
8. Confirm Commerce preset remains Commerce setup metadata and Business has or derives an independent industry type.
9. Confirm repeated branch names are valid under different Businesses and branch lists stay scoped to the active Business.
10. In Commerce Settings, add a branch named `Nasr City` under the active Business.
11. Attempt to add another `Nasr City` branch under the same Business and verify validation blocks it.
12. Switch to or create another Business, add `Nasr City`, and verify it is allowed there.

## Validation Commands

Run when implementation tasks are complete:

```bash
pnpm --filter core-platform exec tsc --noEmit
pnpm --filter commerce exec tsc --noEmit
pnpm --filter core-platform build
pnpm --filter commerce build
```

Run lint commands if configured for the workspace:

```bash
pnpm lint
```

## Expected Result

- Existing MVP flows still work.
- OSEnablement exists as the subscription-to-usage link.
- BusinessUnit remains internally compatible but documented as product-language Business.
- No backend work is required.
