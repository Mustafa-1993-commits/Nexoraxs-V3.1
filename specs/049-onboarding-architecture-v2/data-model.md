# Data Model: Onboarding Architecture v2

## User

Represents the authenticated person creating or operating a Workspace.

**Key fields**
- `id`
- `name`
- `email`
- `languagePreference`

**Relationships**
- May own or belong to one or more Workspaces through Workspace membership.

## Workspace

Represents a company or group.

**Key fields**
- `id`
- `name`
- `country`
- `currency`
- `timezone`
- `language`

**Owns**
- Members
- Billing
- Storage
- BusinessUnits
- OSSubscriptions
- OSEnablements

```text
Workspace
|-- Businesses
|   |-- CommerceSetup
|   |-- Branches
|   |-- Warehouses (future)
|   `-- Employees (future)
|-- OSSubscriptions
`-- OSEnablements
```

**Validation rules**
- Workspace Name is required.
- Country is required.
- Currency and Timezone default from Country but remain editable.
- Workspace must not be typed by business activity or OS.

## BusinessUnit

Internal entity displayed to users as Business.

**Key fields**
- `id`
- `workspaceId`
- `name`
- `businessActivity`
- `status`

**Relationships**
- Belongs to one Workspace.
- Owns one or more Branches.
- Owns CommerceSetup when Commerce OS is enabled for the Business.
- May have one or more OSEnablements.

**Validation rules**
- Business Name is required.
- `businessActivity` is required for recommendations.
- `businessActivity` is recommendation metadata only and may suggest OS products, presets, and sample defaults.
- `businessActivity` must not force or auto-enable an OS.
- `businessActivity` must not change ownership, permissions, plan limits, or operational behavior.
- UI must display Business, not BusinessUnit, Business Unit, BU, or Default Business Unit.
- A Business is not operationally active until it has exactly one Main Branch.

## Branch

Represents an operational location under one Business.

**Key fields**
- `id`
- `workspaceId`
- `businessUnitId`
- `name`
- `city`
- `address`
- `isMain`

**Owns**
- Operational Address
- POS operational scope
- Inventory operational scope
- Orders operational scope
- Invoices operational scope
- Reports operational scope
- Transfers operational scope
- Returns operational scope

**Validation rules**
- Branch belongs to exactly one BusinessUnit.
- Exactly one Main Branch is required before the Business becomes operationally active.
- Zero Main Branches is invalid for active operation.
- More than one Main Branch under the same Business is invalid.
- Same Branch name may exist under different Businesses.
- Same Branch name may be blocked within the same Business if the implementation enforces unique Business-scoped Branch names.
- Branch Address is operational and distinct from Billing Address.

## OperatingSystem

Represents an independent software product.

**Known values**
- Commerce OS
- HR OS
- CRM OS
- Healthcare OS
- Gym OS
- Maintenance OS

**Relationships**
- Has independent plans.
- Has independent setup experience.
- Has independent dashboard and workflows.

## OSSubscription

Workspace-level license and billing record for an Operating System.

**Key fields**
- `id`
- `workspaceId`
- `osId`
- `planId`
- `status`
- `trial`
- `renewal`
- `billing`

**Relationships**
- Belongs to one Workspace.
- References one Operating System.
- Has many OSEnablements for different Businesses or operational scopes.

```text
Workspace
`-- Commerce OSSubscription
    |-- OSEnablement -> Business A
    |-- OSEnablement -> Business B
    `-- OSEnablement -> Business C
```

**Validation rules**
- Created when the user chooses a plan.
- Is Workspace-level and does not decide where the OS runs.
- Existing Workspace + OS subscription is reused for another Business unless the user explicitly changes plan.

## OSEnablement

Operational activation of an Operating System.

**Key fields**
- `id`
- `workspaceId`
- `osId`
- `osSubscriptionId`
- `scope`
- `businessUnitId`
- `branchIds`
- `status`
- `setupVersion`
- `setupCompletedAt`
- `setupCompletedBy`

**Scopes**
- `workspace`
- `business`
- `branch`

**Relationships**
- Belongs to one Workspace.
- References one OSSubscription.
- Is operational scope-level.
- May reference a BusinessUnit when scope is Business or Branch.
- May reference Branch IDs when scope is Branch or when a business-scoped OS needs branch availability.

**Validation rules**
- Created when OS setup or activation is launched.
- One OSSubscription can have many OSEnablements.
- `setupVersion` records the setup contract/version used for activation.
- `setupCompletedAt` records when setup reaches active/completed status.
- `setupCompletedBy` records the user who completed setup.
- Commerce MVP uses Business scope by default.
- Branch-scoped enablement is architecture-ready for future plans or features.
- HR may use Workspace scope.
- CRM may use Workspace or Business scope.
- Status must distinguish setup required, active, disabled, and locked or unavailable states as applicable.

## CommerceSetup

Business-owned Commerce OS configuration.

**Key fields**
- `id`
- `workspaceId`
- `businessUnitId`
- `osSubscriptionId`
- `displayName`
- `legalName`
- `logo`
- `phone`
- `email`
- `website`
- `billingAddress`
- `billingCity`
- `billingCountry`
- `commercialRegistration`
- `taxRegistration`
- `commercePreset`
- `sellingMode`
- `vatRegistered`
- `vatNumber`
- `vatRate`
- `pricesIncludeVat`
- `invoiceTemplate`
- `receiptTemplate`
- `invoiceNumbering`
- `barcodeRules`
- `categories`
- `units`

**Relationships**
- Belongs to one BusinessUnit.
- References the Workspace and OSSubscription.
- Applies across Branches within that Business unless future branch-level overrides are explicitly introduced.
- Is unique per Business for Commerce OS.

**Validation rules**
- Must not belong to Branch.
- Business has exactly one CommerceSetup for Commerce OS once Commerce setup exists.
- Branch never owns CommerceSetup.
- Branch owns operational records only.
- Billing Address is legal identity and remains distinct from Branch Address.
- Commerce Preset is suggested from `businessActivity` and may be overridden.
- Confirmed preset generates defaults for categories, units, templates, numbering, reports, and barcode rules.

## Product Hub Status Model

Product Hub must keep these state dimensions distinct:

- Availability state: `available`, `coming soon`, `locked`
- Subscription state: `not subscribed`, `subscribed`, `trial`, `active`, `past due`, `cancelled`
- Enablement state: `not enabled`, `setup required`, `active`, `disabled`

```text
Workspace
-> Business
-> Product Hub
-> Operating System
-> Launch
-> OS Setup
```

## State Transitions

### Core onboarding

```text
Unauthenticated
-> Authenticated
-> Language selected
-> Workspace created
-> Business created
-> Product Hub ready
```

### Commerce launch

```text
OS available
-> Plan chosen
-> OSSubscription created or reused
-> OSEnablement created for Business
-> Commerce setup required
-> Commerce setup complete
-> Commerce dashboard active
```

### Business operational state

```text
Business created
-> Main Branch missing
-> exactly one Main Branch created or selected
-> Business operationally active
```

## Architecture Freeze

After Spec 049 approval, Workspace, Business/BusinessUnit, Branch, `businessActivity`, Product Hub, OSSubscription, OSEnablement, CommerceSetup ownership, Commerce Preset, and Billing Address vs Branch Address are frozen architecture concepts. Future specs must extend these entities and relationships rather than redesigning or replacing them unless an approved Architecture RFC explicitly allows the change.
