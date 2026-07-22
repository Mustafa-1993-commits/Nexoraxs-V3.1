# Core Platform Architecture v1.1 Freeze

| Metadata | Value |
|---|---|
| Architecture version | Core Platform Architecture v1.1 |
| Documentation baseline | Core Platform Documentation Baseline v1.1 |
| Freeze date | 2026-07-22 |
| Freeze status | **FROZEN — READINESS VALIDATION PENDING** |
| Change class | Backward-compatible minor architecture extension |
| Freeze mechanism | Versioned successor |
| Supersedes | [Core Platform Architecture v1.0 Freeze](./CORE-PLATFORM-v1.0-FREEZE.md) as the current Core Platform baseline |
| Change authority | [Accepted ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md) |
| Human Architecture Review | [ADR-042 Human Architecture Review](../00-governance/reviews/ADR-042-HUMAN-ARCHITECTURE-REVIEW.md) |
| Synchronized Customer Journey | [Customer Journey v1.1](../01-genesis/11-CUSTOMER-JOURNEY.md) |
| Readiness authorization | **None** |
| Implementation authorization | **None** |
| Owner | Human Architecture Authority / Governance |

## 1. Freeze Declaration

Core Platform Architecture v1.1 is the current frozen Core Platform architecture baseline. It
incorporates the complete Core Platform Architecture v1.0 baseline by reference and freezes the
bounded Business Discovery architecture accepted by ADR-042.

This is a **versioned successor**, not an in-place amendment to the historical v1.0 artifact and
not a documentation-only Freeze Alignment Patch. The change is material because it introduces an
anonymous pre-registration state, claim boundary, privacy lifecycle, authorization checks,
recovery states, and a new route into canonical onboarding. It is backward-compatible because
the existing account-first journey and every canonical owner remain preserved.

The mechanism follows:

- the [Milestone Lifecycle architecture version rules](../00-governance/MILESTONE-LIFECYCLE.md#62-architecture-versions),
  which classify backward-compatible architectural extensions as minor versions;
- the [Milestone Lifecycle minor-change rules](../00-governance/MILESTONE-LIFECYCLE.md#82-minor-architectural-change),
  which require an ADR, review, approval, and updated minor Freeze;
- the [Patch policy](../00-governance/MILESTONE-LIFECYCLE.md#72-forbidden-patch-content),
  which prohibits a documentation Patch from introducing architecture; and
- [Core Platform Architecture v1.0 change control](./CORE-PLATFORM-v1.0-FREEZE.md#7-change-control),
  which requires a new versioned Freeze artifact for a future material architectural change.

> **Architecture Freeze synchronization does not authorize implementation.**

Core Platform Documentation Baseline v1.0.1 readiness remains historical readiness evidence for
the predecessor v1.0 baseline. It is not readiness evidence for v1.1. A separate v1.1 readiness
validation is required.

## 2. Authority and Baseline Composition

### 2.1 Controlling decision chain

The Business Discovery addition is governed by:

1. [Accepted ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md);
2. [ADR-042 Human Architecture Review](../00-governance/reviews/ADR-042-HUMAN-ARCHITECTURE-REVIEW.md),
   which recorded zero blocking architecture findings and authorized acceptance only;
3. [Customer Journey v1.1](../01-genesis/11-CUSTOMER-JOURNEY.md), which synchronizes both journey
   paths;
4. [Business Discovery Governance Synchronization](../00-governance/reviews/BUSINESS-DISCOVERY-GOVERNANCE-SYNCHRONIZATION.md),
   which preserves proposal history and records the remaining gates; and
5. this successor Freeze, which records the approved change in the controlling Core Platform
   baseline.

The Product Owner decision records
[BD-001](../00-governance/proposals/business-discovery-preview/15-BUSINESS-DISCOVERY-MVP-ARCHITECTURE-DECISION.md)
and
[BD-002](../00-governance/proposals/business-discovery-preview/16-BUSINESS-DISCOVERY-REMAINING-ARCHITECTURE-DECISIONS.md)
remain non-authoritative proposal history and decision input. They do not independently control
this Freeze.

### 2.2 Inherited predecessor baseline

Except for the explicit Business Discovery additions in this document, Core Platform
Architecture v1.1 incorporates and preserves:

- every frozen decision, guarantee, deferral, ownership boundary, and allowed-evolution rule in
  [Core Platform Architecture v1.0](./CORE-PLATFORM-v1.0-FREEZE.md);
- the documentation-only alignment recorded by
  [Core Platform Documentation Baseline v1.0.1](./CORE-PLATFORM-v1.0.1-READINESS.md);
- the accepted organization, Business DNA, human-control, Business Architect, readiness, and
  Core/OS ownership decisions in
  [ADR-003](../00-governance/ADR/ADR-003-workspace-customer-multi-business-boundary.md),
  [ADR-005](../00-governance/ADR/ADR-005-business-dna-business-scoped-software-independent.md),
  [ADR-014](../00-governance/ADR/ADR-014-human-control-over-recommendations-and-ai.md),
  [ADR-016](../00-governance/ADR/ADR-016-business-architect-governed-pipeline.md),
  [ADR-018](../00-governance/ADR/ADR-018-separate-core-and-os-readiness.md), and
  [ADR-040](../00-governance/ADR/ADR-040-core-organization-identity-os-operational-data.md); and
- the canonical owner, Permission, and Security boundaries in
  [Core Data Ownership](../02-core-platform/04-DATA-OWNERSHIP.md),
  [Core Permission Model](../02-core-platform/05-PERMISSION-MODEL.md), and
  [Core Security Model](../02-core-platform/08-SECURITY-MODEL.md).

The v1.0 Freeze remains preserved as historical authority for its release. Where this v1.1
Freeze expressly adds or qualifies Business Discovery behavior, v1.1 controls for that scope.
No unrelated v1.0 meaning is rewritten.

### 2.3 Affected and unaffected milestone Freezes

The changed scope is the Core Platform onboarding and Business Architect intake boundary.
Therefore this successor changes only the Core Platform Freeze.

[Business Brain Architecture v1.0](./BUSINESS-BRAIN-FREEZE-v1.0.md) remains unchanged:
Business Discovery contributes only reviewed Candidate Facts to the existing Business Architect
pipeline; Business DNA publication and downstream Business Brain behavior retain their existing
owners and meaning. Commerce OS, Marketplace, AI Expert Network, and Global Platform Freezes are
also unchanged.

## 3. Journey Classification and Frozen Paths

Business Discovery is:

> **An optional additive material pre-registration journey branch**

It does not replace account-first onboarding. Discovery may be skipped, abandoned, fail, expire,
or be unsupported, and the User may proceed by the account-first path without a
DiscoverySnapshot, claim, or import.

### 3.1 Path A — Optional Discovery-first

~~~text
Visitor
→ Start Business Discovery
→ Temporary anonymous session
→ Guided business questions
→ Discovery preview
→ Create account or log in
→ Verify identity
→ Claim Discovery session
→ Select or create an authorized Workspace
→ Select or create an authorized Business
→ Review and confirm proposed facts
→ Import accepted evidence into Business Architect Candidate Facts
→ Governed human review
→ Publish Business DNA
→ Recommendations
→ Product Hub
~~~

### 3.2 Path B — Account-first

~~~text
Visitor
→ Sign Up / Login
→ Create or select Workspace
→ Create or select Business
→ Business Architect
→ Business DNA
→ Recommendations
→ Product Hub
~~~

Both paths are governed by
[Customer Journey v1.1, “Journey Overview”](../01-genesis/11-CUSTOMER-JOURNEY.md#journey-overview).
Path A converges into the existing governed pipeline. Path B remains valid and unchanged in
principle.

## 4. Non-canonical Discovery Boundary

The following boundaries are frozen:

- an anonymous Discovery session is temporary, purpose-limited, expiring, and eligible for
  abandonment and deletion under approved policy;
- DiscoverySnapshot is a versioned, temporary, non-canonical proposal;
- Discovery creates no anonymous User, Workspace, Business, Business Unit, Department, Branch,
  Membership, or Permission;
- Discovery has no direct write authority over canonical Business identity or Business facts;
- Discovery does not create, overwrite, or publish Business DNA;
- Discovery does not select or activate a Plan or subscription;
- Discovery does not create or grant an entitlement;
- Discovery does not alter Workspace Ready or Operating System Ready;
- Discovery does not install or configure an Operating System; and
- Discovery does not create operational data.

DiscoverySnapshot is not a Business, Business Unit, Business DNA, Business DNA Snapshot,
canonical industry classification, Recommendation, commercial decision, entitlement, readiness
result, OS configuration, or operational record. Its final implementation name may change
without changing this frozen meaning.

## 5. Claim Boundary

The claim boundary is frozen as follows:

1. registration or login and verified identity are required before final claim;
2. claim binds one eligible temporary session to one verified User;
3. claim is atomic, auditable, replay-resistant, and double-claim-resistant;
4. session integrity, control evidence, state, and expiry are validated;
5. copied credential possession alone is not identity or authorization;
6. claim fails closed when ownership cannot be established;
7. claim binds **only to User**;
8. claim does not bind automatically to a Workspace or Business;
9. claim creates no Membership, Permission, subscription, or entitlement; and
10. target selection and import authorization remain separate actions.

The session credential is opaque, high-entropy, and secret. It must not be treated as tenant,
User, Workspace, Business, role, Permission, subscription, or entitlement proof. Client
assertions and URL parameters are authorization inputs at most, never proof of access.

## 6. Candidate Fact and Human-Control Boundary

The mandatory pipeline is:

~~~text
Anonymous answers
→ DiscoverySnapshot
→ Verified claim
→ Authorized Workspace and Business selection
→ Field-level human review
→ Accepted Candidate Facts
→ Business Architect governed review
→ Business DNA publication
~~~

The following guarantees are frozen:

- imported facts remain provenance-bearing Business Architect Candidate Fact inputs, not truth;
- user-provided answers and inferred facts are distinguishable;
- the User can review, correct, accept, and reject proposals;
- partial acceptance is allowed;
- rejected facts are not imported and do not modify canonical data;
- existing and proposed field values and conflicts are shown before acceptance;
- silent merge is prohibited;
- canonical overwrite without explicit authorized review is prohibited;
- source and inference versions remain traceable; and
- only the Business DNA Registry publishes Business DNA after the governed Business Architect
  process.

Discovery never writes or publishes Business DNA directly.

These guarantees preserve
[ADR-014 human authority](../00-governance/ADR/ADR-014-human-control-over-recommendations-and-ai.md)
and the
[ADR-016 Candidate Fact pipeline](../00-governance/ADR/ADR-016-business-architect-governed-pipeline.md).

## 7. Ownership Boundary

| Data or action | Frozen owner or responsibility | Discovery boundary |
|---|---|---|
| Anonymous session lifecycle, raw temporary answers, temporary inferred facts, DiscoverySnapshot revisions | Bounded Discovery capability, temporarily | Owns only the purpose-limited working lifecycle |
| Temporary disclosure and consent evidence | Discovery capability under approved Privacy/Legal policy | Records only evidence required for temporary purpose |
| Claim and import proposal orchestration | Discovery capability | Requests owner actions; gains no canonical write authority |
| Authentication and verified User identity | Core Identity | Discovery consumes a verified result |
| Membership and Permission evaluation | Core Authorization and final canonical resource owner | Discovery cannot grant or infer authority |
| Workspace and Business | Core Organization/Business owners | Created or selected only through owner-controlled contracts |
| Business Unit, Department, and Branch | Core Organization Registry | Business Unit never substitutes for Business |
| Candidate Fact intake and governed review | Business Architect | Discovery submits only accepted evidence |
| Published Business DNA | Business DNA Registry | Discovery never publishes or overwrites it |
| Authoritative Audit Records | Audit | Discovery emits minimized evidence through the Audit owner |
| Classification, legal basis, rights, retention, backup, residency, and legal hold | Approved Privacy/Legal, Security, Data Governance, and Storage policy | Discovery implements later approved policy |
| Plans, subscriptions, entitlements, billing, and commercial lifecycle | Product and subscription domains | Discovery has no activation authority |
| OS configuration and operational data | Applicable OS owner | Discovery has no write authority |

Every canonical fact retains one owner. Orchestration, preview, Snapshot, analytics, search, logs,
traces, and read models do not become a source of truth.

## 8. Authorization and Tenant-Isolation Boundary

Authentication is not authorization. The following are frozen:

- explicit Workspace selection is required after claim;
- explicit Business selection is required before import;
- no fallback Workspace, Business, or tenant may be inferred;
- each action requires its exact current resource- and target-scoped Permission;
- Workspace Owner or Workspace Admin titles do not replace the exact Permission check;
- Employee and view-only Users are denied create/import by default unless explicitly authorized;
- multi-Workspace Users must select one currently authorized Workspace;
- existing-Business import requires current Permission for that exact Business;
- authorization, Membership, target lifecycle, and tenant context are revalidated when import
  executes; and
- suspended, deleted, archived, changed, or unauthorized targets are denied or safely
  reselected.

Logical action classes remain distinct: claim own session, create Workspace, create Business,
select target Business, propose import, review Candidate Facts, accept, reject, correct, and
publish Business DNA. Exact Permission identifiers remain deferred.

The final canonical owner enforces its invariants even when an earlier boundary has authenticated
the User or applied a coarse check. No URL, token, role label, hierarchy, client identifier, or
prior authorization result can weaken tenant isolation.

## 9. Privacy, Security, Audit, Backup, and Legal-Hold Boundary

Architecture-level requirements are frozen:

- the purpose is limited to optional pre-registration preview, optional verified claim, and
  optional authorized import into Business Architect;
- temporary data collection and retention are minimized to that purpose;
- raw answers and inferred facts are treated as potentially personal, confidential, or
  commercially sensitive until approved classification establishes otherwise;
- the session credential is a secret;
- raw answers, Snapshot content, and secret credentials are excluded from ordinary logs,
  analytics, traces, support tools, prompts, and learning or training datasets;
- participation disclosure, temporary-storage acknowledgement, claim/import consent, account
  terms, privacy notice, marketing consent, analytics consent where required, and any
  model-training or secondary-use consent remain separate;
- marketing, model-training, or other secondary use is never inferred from Discovery
  participation;
- unclaimed temporary working data supports expiry, abandonment, invalidation, and deletion;
- rejected raw content is not retained indefinitely;
- minimized rejection, claim, Security, and Audit evidence may be retained only under approved
  policy and must exclude secret credentials and raw questionnaire content by default;
- backup copies expire under an approved lifecycle;
- restored backups reapply deletion tombstones or equivalent suppression before data becomes
  active;
- legal hold suspends deletion only under approved legal authority and documented scope;
- rights verification does not disclose session content to an unverified requester; and
- integrity, ownership, expiry, identity, and authorization validation fail closed.

No numeric retention period, jurisdiction-specific legal basis, technology, or operational
mechanism is selected by this Freeze.

## 10. Commercial, Readiness, and Operating System Boundary

Discovery completion, claim, or import:

- does not select or activate a Plan or subscription;
- does not create or grant an entitlement;
- does not grant paid capability access;
- does not create billing, payment, invoice, or settlement state;
- does not bypass Product Hub;
- does not mark Core Workspace Ready;
- does not mark an Operating System Ready;
- does not install, activate, or configure an Operating System; and
- does not create operational records.

Discovery may show explainable, non-binding product or Plan guidance only. Canonical
Recommendations and Product Hub remain downstream of governed Business Architect review and
published Business DNA. Core and OS readiness remain distinct under
[ADR-018](../00-governance/ADR/ADR-018-separate-core-and-os-readiness.md).

## 11. Recovery Boundary

The frozen recovery principle is:

> **Recovery must never weaken identity proof, ownership proof, tenant isolation, authorization,
> expiry, or Audit.**

| Condition | Frozen conceptual outcome |
|---|---|
| Expired session | Reject claim/import without exposing content; allow a safe restart |
| Interrupted claim | Resume or retry only after current identity, session state, and ownership validation |
| Already claimed session | Return a safe idempotent outcome to the owning User; deny another User |
| Wrong signed-in User | Block claim and disclose no session content |
| Copied token | Token possession alone is insufficient where continuity or recovery proof is required |
| Duplicate registration | Resolve through Core Identity without creating a second claim or tenant |
| Interrupted import | Preserve committed item outcomes and permit authorized idempotent retry |
| Partial import | Record accepted, rejected, failed, and skipped items; never roll silent values into canonical state |
| Invalid target | Deny and require authorized reselection |
| Revoked Permission | Deny at execution-time revalidation |
| Abandonment | Expire or delete eligible unclaimed working data under approved policy |
| Deletion request | Verify the requester; delete eligible working data and preserve only approved minimized evidence |

This table is a set of architecture checkpoints, not a database enum, API contract, UI design, or
final recovery algorithm.

## 12. Explicitly Non-frozen Implementation Detail

This Freeze does not select:

- authentication or identity-verification technology;
- session persistence or storage technology;
- cookie, credential, or token format;
- database or persistence schema;
- API, Event, or message design;
- final DiscoverySnapshot implementation name;
- exact Permission strings;
- expiry, retention, or backup durations;
- encryption algorithms or key-management mechanisms;
- rate limits, bot controls, or abuse-prevention thresholds;
- concurrency, transaction, or idempotency mechanisms;
- UI, content, accessibility, or localization design;
- analytics or observability event inventory;
- infrastructure, framework, vendor, or deployment model;
- implementation estimates; or
- plan and task breakdown.

These remain policy, specification, planning, contract, and implementation concerns. Their
deferral is not permission to choose them in code.

## 13. Unchanged Frozen Areas

All Core Platform v1.0 guarantees remain unchanged except for the explicit additive onboarding
scope in this successor. In particular, v1.1 does not change:

- the Workspace → Business → Business Unit → Department/Branch hierarchy;
- Workspace tenant isolation or Business-scoped Business DNA;
- canonical owner and owner-only write rules;
- Core Identity, Authorization, Organization, Business Architect, Business DNA Registry, Audit,
  commercial, Product Hub, or OS ownership;
- Business Architect publication, Business Brain, Recommendation, Configuration, or AI
  boundaries;
- Product Hub and commercial lifecycle separation;
- Core Workspace Ready and Operating System Ready separation;
- independent Operating System ownership and operation;
- Marketplace or AI Expert Network ownership;
- API/Event ownership and compatibility principles;
- modular-monolith evolution rules;
- any predecessor Deferred Decision not expressly resolved by Accepted ADR-042; or
- any Commerce OS, Marketplace, AI Expert Network, Global Platform, or Business Brain frozen
  architecture.

ADR-042 does not silently amend an unrelated Genesis principle or predecessor Freeze guarantee.

## 14. Readiness and Implementation Gate

**Freeze synchronized; readiness validation is still pending.** Core Platform Architecture v1.1
is not implementation-ready by virtue of this Freeze.

Before implementation, all of the following are required:

1. v1.1 readiness validation;
2. Security threat model;
3. approved Permission catalog;
4. Privacy/Legal approval, including jurisdiction-specific legal basis;
5. identity and recovery policy;
6. retention and backup policy;
7. observability policy and telemetry inventory;
8. approved feature specification;
9. Constitution Check;
10. implementation plan;
11. dependency-ordered task breakdown;
12. approved API, domain, data, owner/consumer, and Audit contracts;
13. risk-appropriate test strategy; and
14. explicit implementation authorization.

No code, schema, API, UI, infrastructure, migration, deployment, commercial activation,
entitlement activation, OS configuration, readiness state, or operational behavior is authorized
by this document.

## 15. Change Control and Successor Evolution

Future changes to the Business Discovery boundary or any inherited v1.0 guarantee must follow
the [Milestone Lifecycle](../00-governance/MILESTONE-LIFECYCLE.md) and this successor baseline:

~~~text
Identified architectural need
→ ADR or applicable governed decision
→ Architecture Review
→ explicit approval
→ updated or successor Freeze
→ readiness validation
~~~

A documentation-only Patch may clarify but may not alter architecture, ownership, journey
classification, claim meaning, authorization, Candidate Fact handling, privacy guarantees,
readiness, or implementation authority. Historical ADRs, proposals, reviews, Journey revisions,
and predecessor Freezes remain preserved.

## 16. Freeze Integrity Validation

| Condition | Result | Evidence |
|---|---|---|
| Accepted material decision represented | PASS | ADR-042 and its Human Architecture Review |
| Backward-compatible minor version treatment | PASS | account-first preserved; no canonical owner changes |
| Historical Core v1.0 Freeze preserved | PASS | new successor file; predecessor unmodified |
| Both journey paths frozen | PASS | Section 3 |
| Anonymous and DiscoverySnapshot state non-canonical | PASS | Section 4 |
| Claim binds only to verified User | PASS | Section 5 |
| Candidate Fact pipeline mandatory | PASS | Section 6 |
| Direct Business DNA publication prohibited | PASS | Section 6 |
| Canonical ownership preserved | PASS | Section 7 |
| Authentication and authorization separate | PASS | Section 8 |
| Tenant and target authorization explicit | PASS | Section 8 |
| Privacy, Audit, backup, and legal-hold boundaries present | PASS | Section 9 |
| Subscription, entitlement, readiness, OS, and operational effects prohibited | PASS | Section 10 |
| Implementation mechanisms remain deferred | PASS | Section 12 |
| Unrelated frozen architecture preserved | PASS | Section 13 |
| v1.1 readiness completed | **NO — pending separate validation** | Section 14 |
| Implementation authorized | **NO** | Sections 1 and 14 |

## 17. Official Freeze Statement

# CORE PLATFORM ARCHITECTURE v1.1 IS FROZEN

Core Platform Architecture v1.1 is the current authoritative Core Platform architecture
baseline. It supersedes Core Platform Architecture v1.0 only as the current Core Platform
baseline and preserves v1.0 as historical frozen authority.

The newly frozen scope is limited to the optional additive material Business Discovery
pre-registration branch and its non-canonical session, claim, authorization, Candidate Fact,
privacy, recovery, commercial, readiness, and OS boundaries. Every unrelated predecessor
guarantee and every unaffected milestone Freeze remains unchanged.

Core Platform Architecture v1.1 has **no readiness authorization and no implementation
authorization**. A separate readiness validation and every gate in section 14 remain mandatory.

## References

- [Accepted ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md)
- [ADR-042 Human Architecture Review](../00-governance/reviews/ADR-042-HUMAN-ARCHITECTURE-REVIEW.md)
- [Business Discovery Governance Synchronization](../00-governance/reviews/BUSINESS-DISCOVERY-GOVERNANCE-SYNCHRONIZATION.md)
- [Customer Journey v1.1](../01-genesis/11-CUSTOMER-JOURNEY.md)
- [Milestone Lifecycle](../00-governance/MILESTONE-LIFECYCLE.md)
- [Core Platform Architecture v1.0 Freeze](./CORE-PLATFORM-v1.0-FREEZE.md)
- [Core Platform Documentation Baseline v1.0.1 Readiness](./CORE-PLATFORM-v1.0.1-READINESS.md)
- [Business Brain Architecture v1.0 Freeze](./BUSINESS-BRAIN-FREEZE-v1.0.md)
