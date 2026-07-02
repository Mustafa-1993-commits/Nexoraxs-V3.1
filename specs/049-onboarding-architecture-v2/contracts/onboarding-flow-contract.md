# Contract: Onboarding Architecture v2 Flow

This contract defines the expected user-visible flow and state handoffs for Spec 049. It is intentionally UI/data-contract oriented and does not require backend API work.

## 1. Core Onboarding Contract

### Entry

User has registered or logged in.

### Steps

```text
Welcome + Language
-> Create Workspace
-> Create Business
-> Product Hub
```

### Welcome + Language output

- `language`
- `direction`
- `dateFormat`
- `numberFormat`

### Create Workspace output

- `workspaceId`
- `workspaceName`
- `country`
- `currency`
- `timezone`

### Create Business output

- `businessUnitId`
- `businessName`
- `businessActivity`
- `workspaceId`

### Rules

- Core onboarding must not ask for Commerce Preset, tax configuration, templates, products, inventory, POS, orders, invoices, or reports.
- `businessActivity` is recommendation metadata only. It may suggest OS products, presets, and sample defaults, but must not change ownership, permissions, plan limits, or operational behavior.
- UI labels must use Business.

## 2. Product Hub Contract

### Required context

- Active `workspaceId`
- Active `businessUnitId` for OS launch

### Displays

- Workspace summary
- Businesses
- Operating Systems
- OS subscription status
- OS enablement/setup status
- Quick actions:
  - Add Business
  - Add Branch
  - Enable OS
  - Invite Members
  - Launch Operating System

### Product Hub status model

Product Hub must distinguish these dimensions rather than flattening them into one status:

- Availability state: `available`, `coming soon`, `locked`
- Subscription state: `not subscribed`, `subscribed`, `trial`, `active`, `past due`, `cancelled`
- Enablement state: `not enabled`, `setup required`, `active`, `disabled`

### Rules

- Product Hub may display recommendations and statuses.
- Product Hub operates with an active Business context for OS launch.
- Product Hub must not contain Commerce setup steps or Commerce business logic.
- Launching an OS transfers context to that OS setup experience.

```text
Workspace
-> Business
-> Product Hub
-> Operating System
-> Launch
-> OS Setup
```

## 3. OS Subscription Contract

### Created when

User chooses a plan for an Operating System.

### Required fields

- `workspaceId`
- `osId`
- `planId`
- `status`
- `trial`
- `renewal`
- `billing`

### Rules

- OSSubscription is Workspace-level.
- OSSubscription does not determine Business or Branch activation.
- One OSSubscription can have many OSEnablements.
- For the same Workspace and OS, launching another Business reuses the existing subscription unless the user explicitly changes plan.

## 4. OS Enablement Contract

### Created when

User launches setup or activation for an OS in a selected scope.

### Required fields

- `workspaceId`
- `osId`
- `osSubscriptionId`
- `scope`
- `status`
- `setupVersion`

### Scope-dependent fields

- `businessUnitId` is required when `scope` is `business` or `branch`.
- `branchIds` is required when `scope` is `branch`.
- `branchIds` is optional for business-scoped enablements when an OS needs to record allowed Branch availability.

### Completion fields

These fields are required only after setup reaches `active` or equivalent completed status:

- `setupCompletedAt`
- `setupCompletedBy`

### Scope rules

- Commerce OS normally uses Business scope.
- HR OS may use Workspace scope.
- CRM OS may use Workspace or Business scope.
- Future Operating Systems may define their own allowed scopes while preserving this relationship.
- OSEnablement is operational scope-level and records where a subscribed OS is actually used.
- Commerce MVP uses Business scope by default.
- Branch-scoped enablement is architecture-ready for future plans or features.
- `setupVersion` records the setup contract/version used.
- `setupCompletedAt` records setup completion time when status becomes active and remains unset while setup is incomplete.
- `setupCompletedBy` records the user who completed setup and remains unset while setup is incomplete.

### Relationship

```text
Workspace
|-- OSSubscription (Workspace-level license)
`-- Business (BusinessUnit internally)
    `-- OSEnablement (operational activation)
        |-- references OSSubscription
        `-- status
```

## 5. Commerce OS Setup Contract

### Entry context

- `workspaceId`
- `businessUnitId`
- `osSubscriptionId`
- `osEnablementId`
- `branchId` when available

### Steps

```text
Choose Plan
-> Business Identity
-> Commerce Preset
-> Branch + Tax
-> Review & Launch
-> Auto Configuration
-> Commerce Dashboard
```

### Business Identity input

Inherited:
- Business Name
- `businessActivity`

Editable:
- Display Name
- Legal Name
- Logo
- Phone
- Email
- Website
- Billing Address
- Billing City
- Billing Country
- Commercial Registration
- Tax Registration

### Commerce Preset input

- Suggested preset from `businessActivity`
- User-confirmed preset, either suggested or overridden

### Branch + Tax input

- Main Branch create/select
- Branch Name
- Branch City
- Branch Address
- VAT Registered
- VAT Number
- VAT Rate
- Prices Include VAT

### Review & Launch output

Review must show:
- Workspace
- Business
- Branch
- Plan
- Preset
- Selling Mode
- Tax
- Templates
- Numbering

### Auto Configuration output

Creates or confirms:
- Categories
- Units
- Invoice Template
- Receipt Template
- Invoice Numbering
- Barcode Rules
- Optional Sample Products

### CommerceSetup ownership rules

- CommerceSetup is unique per Business for Commerce OS.
- Business has exactly one CommerceSetup for Commerce OS once Commerce setup exists.
- CommerceSetup references the OSEnablement through `osEnablementId`.
- Branch never owns CommerceSetup.
- Branch owns operational records only.

## 6. Address Ownership Contract

### Workspace

Owns:
- Country
- Currency
- Timezone

### Business / CommerceSetup

Owns:
- Billing Address
- Billing City
- Billing Country
- Legal identity fields

### Branch

Owns:
- Operational Address
- City

### Rules

- Billing Address and Branch Address are distinct values.
- Defaults may be copied from Workspace or Branch, but user edits must be preserved.
- Every Business must have exactly one Main Branch before it becomes operationally active.
- Zero Main Branches is invalid for active operation.
- More than one Main Branch under the same Business is invalid.
- Branch names may repeat across different Businesses, but may be blocked within the same Business if implementation enforces unique Business-scoped Branch names.

## 7. Migration Contract

### Preserve

- Existing Users
- Existing Workspaces
- Existing BusinessUnits
- Existing Branches
- Existing CommerceSetups
- Existing OSSubscriptions
- Existing OSEnablements
- Existing Branch operational data

### Reinterpret

- BusinessUnit is displayed as Business.
- CommerceSetup is explicitly Business-owned.
- Product Hub status combines OSSubscription, OSEnablement, and setup completion.
- Existing compatible CommerceSetup records create or map to active OSEnablement records when the related Workspace-level OSSubscription can be identified or created safely.

### Validate

- Record counts remain stable unless new records are intentionally created.
- Every Branch belongs to one BusinessUnit.
- Every CommerceSetup belongs to one BusinessUnit.
- Every OSEnablement references a Workspace, OS, subscription, scope, status, and `setupVersion`; completed or active OSEnablements also record `setupCompletedAt` and `setupCompletedBy`.
- Existing Branch operational data remains untouched.
- No data loss is allowed.

## 8. Architecture Freeze Contract

After Spec 049 approval, the following concepts are frozen:

- Workspace
- Business / BusinessUnit
- Branch
- `businessActivity`
- Product Hub
- OSSubscription
- OSEnablement
- CommerceSetup ownership
- Commerce Preset
- Billing Address vs Branch Address

Future specs must extend these concepts and relationships. They must not redesign or replace them unless an Architecture RFC is approved.
