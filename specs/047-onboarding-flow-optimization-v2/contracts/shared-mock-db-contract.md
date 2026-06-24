# Contract: Shared Mock DB Architecture Alignment

## Purpose

Define the shared mock-store contract for Target Architecture v2 alignment. Core Platform and Commerce OS must use this contract through shared data access and app providers; pages/components must not read browser storage directly.

## Collections

### `businessUnits`

Represents product-language Businesses.

Required additions:

- `industryType: string`

Compatibility:

- Existing `preset` and `presetId` remain for Commerce compatibility.
- Existing records without `industryType` must use a fallback value without wiping storage.

### `branches`

Represents physical locations under a Business.

Required invariant:

- Every Branch has `workspaceId` and `businessUnitId`.
- Branch filtering and uniqueness use `businessUnitId`.

### `osSubscriptions`

Represents workspace-purchased licenses.

Required invariant:

- OSSubscription is not used as the only indicator of where an OS is active.

### `osEnablements`

New/updated collection representing where a subscribed OS is used.

Required fields:

```ts
interface OSEnablement {
  id: string;
  workspaceId: string;
  osId: string;
  osSubscriptionId: string;
  scope: "workspace" | "business" | "branch";
  businessUnitId: string | null;
  branchIds: string[];
  status: "active" | "disabled" | "locked";
  createdAt: string;
  updatedAt: string;
}
```

## Required Selectors

### `getWorkspaceOSEnablements(workspaceId)`

Returns all OSEnablements for a workspace.

Rules:

- Must return an empty list when none exist.
- Must not infer enablements from unrelated workspaces.

### `getBusinessOSEnablements(workspaceId, businessUnitId)`

Returns OSEnablements that apply to a Business.

Rules:

- Include business-scoped enablements for the Business.
- Include branch-scoped enablements whose `businessUnitId` matches.
- Workspace-scoped enablements may be included only when the calling workflow explicitly needs inherited workspace usage.

### `getCurrentOSEnablement(input)`

Returns the best matching OSEnablement for current workspace, OS, optional Business, and optional Branch.

Matching priority:

1. Active branch-scoped enablement including the active branch.
2. Active business-scoped enablement for the active Business.
3. Active workspace-scoped enablement for the Workspace.
4. `null` when none apply.

### `isOSEnabledForBusiness(workspaceId, osId, businessUnitId)`

Returns true only when an active OSEnablement applies to the Business.

Rules:

- Disabled and locked enablements return false.
- Subscription alone is insufficient.

## Seed Data Contract

Seed data must include:

- A Commerce OS subscription for the seeded workspace.
- An active Commerce OSEnablement scoped to the seeded current Business.
- `industryType` on the seeded Business.

## Compatibility Contract

For older local/demo data:

- If a Commerce OS subscription exists and the current Business exists but no Commerce enablement exists, create or expose a compatible active business-scoped enablement.
- If a Business lacks `industryType`, use a fallback based on existing metadata for display and selectors until the record is saved.
- Never clear local/session storage as part of alignment.

## Handoff Contract

Core -> Commerce handoff must include enough context to resolve:

- current user
- current workspace
- Commerce OS subscription
- current OS id
- current Business if already selected
- current Branch if already selected
- current OSEnablement if available

If OSEnablement is missing but subscription and Business exist, the receiver or shared helper must create or surface the compatible enablement.
