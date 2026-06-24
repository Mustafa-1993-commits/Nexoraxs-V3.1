# Data Model: Target Architecture v2 Alignment

## Workspace

Represents a company/group.

### Fields

| Field | Type | Notes |
|-------|------|-------|
| `id` | string | Stable workspace identifier |
| `name` | string | Company/group name |
| `country` | string | Workspace country |
| `currency` | string | Workspace default currency |
| `timezone` | string | Workspace default timezone |
| `language` | string | Workspace/user default language |
| `ownerUserId` | string | Owning user |
| `createdAt` | string | ISO timestamp |

### Relationships

- Owns Users/Members through WorkspaceMember.
- Owns Businesses, represented internally by BusinessUnit.
- Owns OSSubscriptions.
- Owns WorkspaceStorageUsage.
- Owns billing/subscription state.

## Business (internal BusinessUnit)

Represents a brand, activity, or business line inside a workspace. In current code this remains `BusinessUnit`.

### Fields

| Field | Type | Notes |
|-------|------|-------|
| `id` | string | Stable business/internal business unit identifier |
| `workspaceId` | string | Parent workspace |
| `name` | string | User-facing business/brand/activity name |
| `industryType` | string | Business classification independent of OS |
| `branchIds` | string[] | Branches belonging to this business |
| `branchId` | string | Current/primary legacy branch pointer retained for compatibility |
| `osSubscriptionId` | string | Legacy/current subscription pointer; not the source of usage truth after OSEnablement |
| `os` / `osId` / `selectedOS` | string | Legacy/current OS hints retained for compatibility |
| `preset` / `presetId` | string | Commerce-specific metadata only |
| `createdAt` | string | ISO timestamp |

### Relationships

- Belongs to one Workspace.
- Has many Branches.
- May have many OSEnablements.
- May have Commerce setup metadata if Commerce OS is enabled.

### Validation Rules

- User-facing UI calls this Business, Brand, Activity, or Store.
- `industryType` must not be derived from Commerce preset when a distinct value exists.
- Existing records missing `industryType` use a non-destructive fallback based on current metadata until explicitly saved.

## Branch

Represents a physical location under a Business.

### Fields

| Field | Type | Notes |
|-------|------|-------|
| `id` | string | Stable branch identifier |
| `workspaceId` | string | Parent workspace |
| `businessUnitId` | string | Parent business/internal BusinessUnit |
| `name` | string | Branch/location name |
| `city` | string | Optional city |
| `country` | string | Optional country |
| `currency` | string | Optional branch currency |
| `isMain` | boolean | Main branch marker for this business |
| `createdAt` | string | ISO timestamp |

### Relationships

- Belongs to one Workspace.
- Belongs to one Business.
- May be referenced by branch-scoped OSEnablement.

### Validation Rules

- Branch cannot exist without `businessUnitId`.
- Branch names may repeat across different businesses.
- Duplicate branch-name checks are scoped to `businessUnitId`, not workspace-wide.

## OSSubscription

Represents a license purchased by a Workspace.

### Fields

| Field | Type | Notes |
|-------|------|-------|
| `id` | string | Stable subscription identifier |
| `workspaceId` | string | Workspace that purchased the license |
| `os` / `osId` | string | Operating system identifier |
| `plan` / `planId` | string | Plan tier/plan identifier |
| `status` | string | Trialing/active/past due/canceled or mapped equivalent |
| `startedAt` | string | ISO timestamp |
| `trialEndsAt` | string | Optional date |
| `renewsAt` | string | Optional date |

### Relationships

- Belongs to one Workspace.
- Has one or more OSEnablements over time or scope.

### Validation Rules

- Subscription does not imply actual OS usage by itself.
- Product Hub may show subscription state, but business/branch usage comes from OSEnablement.

## OSEnablement

Represents where a subscribed OS is actually used.

### Fields

| Field | Type | Notes |
|-------|------|-------|
| `id` | string | Stable enablement identifier |
| `workspaceId` | string | Parent workspace |
| `osId` | string | Operating system being enabled |
| `osSubscriptionId` | string | Purchased license backing this usage |
| `scope` | `"workspace" \| "business" \| "branch"` | Usage scope |
| `businessUnitId` | `string \| null` | Required for business/branch scopes |
| `branchIds` | `string[]` | Branches included for branch scope; empty for workspace/business scope |
| `status` | `"active" \| "disabled" \| "locked"` | Usage lifecycle state |
| `createdAt` | string | ISO timestamp |
| `updatedAt` | string | ISO timestamp |

### Relationships

- Belongs to one Workspace.
- Belongs to one OSSubscription.
- May reference one Business.
- May reference one or more Branches under that Business.

### Validation Rules

- `workspaceId` must match the linked OSSubscription workspace.
- Business-scoped enablement requires `businessUnitId`.
- Branch-scoped enablement requires `businessUnitId` and one or more `branchIds`.
- Every branch in `branchIds` must belong to the same `businessUnitId` and `workspaceId`.
- Active Commerce MVP workspaces must have an active Commerce OSEnablement for the current business.

### State Transitions

| From | To | Meaning |
|------|----|---------|
| active | disabled | User/admin disables OS usage for that scope |
| disabled | active | Usage is re-enabled |
| active | locked | Plan/payment/access state blocks usage |
| locked | active | Blocking condition is resolved |

## Industry Type

Business-level classification.

### Examples

- fashion
- pharmacy
- restaurant
- supermarket
- electronics
- cosmetics
- medical_supplies
- other

### Rule

Industry Type describes the business and is not owned by Commerce OS.

## Commerce Preset

Commerce-only operational template.

### Examples

- retail
- pharmacy
- restaurant_cafe
- supermarket
- electronics_mobile
- clothing_fashion
- cosmetics
- medical_supplies
- other

### Rule

Commerce Preset may seed categories, units, modules, and document recommendations, but it must not replace Business industry type.
