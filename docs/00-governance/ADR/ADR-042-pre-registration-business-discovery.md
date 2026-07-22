# ADR-042: Pre-registration Business Discovery

| Metadata | Value |
|---|---|
| Status | **Accepted** |
| Review posture | **Accepted by Human Architecture Review** |
| Date drafted | 2026-07-22 |
| Date reconciled | 2026-07-22 |
| Acceptance date | 2026-07-22 |
| Human Architecture Review | [ADR-042 Human Architecture Review](../reviews/ADR-042-HUMAN-ARCHITECTURE-REVIEW.md) |
| Principal decision | Business Discovery as an optional additive material pre-registration journey branch |
| Implementation authorization | **None** |
| Acceptance effect | Architecture-decision status only; no code, specifications, plans, tasks, Journey changes, Freeze changes, readiness changes, commercial activation, entitlement, OS configuration, or operational behavior is authorized |
| Product Owner decision input | [BD-001](../proposals/business-discovery-preview/15-BUSINESS-DISCOVERY-MVP-ARCHITECTURE-DECISION.md) and [BD-002](../proposals/business-discovery-preview/16-BUSINESS-DISCOVERY-REMAINING-ARCHITECTURE-DECISIONS.md) |
| Supersedes | Nothing |

## Status

**Accepted**

ADR-042 was accepted at the architecture-decision level by the
[Human Architecture Review](../reviews/ADR-042-HUMAN-ARCHITECTURE-REVIEW.md) on 2026-07-22 under
the [ADR lifecycle](./README.md#adr-lifecycle). The review authorizes this status transition only.
Acceptance does not amend the current Customer Journey or an Architecture Freeze and does not
authorize implementation.

> **Implementation authorization: None.** No code may be written from this ADR alone. This ADR
> defines no implementation contract. Acceptance of ADR-042 does not by itself authorize
> implementation. Customer Journey synchronization, exact affected-source synchronization, an
> applicable Freeze amendment or successor, readiness validation, approved Security/Privacy/
> Permission policies, a feature specification, Constitution Check, plan, tasks, contracts, and
> explicit implementation authorization would still be required.

## Reconciliation Note

This revision reconciles ADR-042 with two Product Owner / Human Architecture decision inputs:

- [BD-001 — Business Discovery MVP Architecture Decision](../proposals/business-discovery-preview/15-BUSINESS-DISCOVERY-MVP-ARCHITECTURE-DECISION.md), whose MVP baseline and 29 conditional question closures were approved for ADR reconciliation by BD-002; and
- [BD-002 — Remaining Business Discovery Architecture Decisions](../proposals/business-discovery-preview/16-BUSINESS-DISCOVERY-REMAINING-ARCHITECTURE-DECISIONS.md), which resolves the remaining six questions and five conflicts at the Product Owner decision level.

BD-001 and BD-002 are decision input to Governance, not Accepted ADRs. Following the
[Human Architecture Review](../reviews/ADR-042-HUMAN-ARCHITECTURE-REVIEW.md), this ADR is
**Accepted at the architecture-decision level only**, and no implementation is authorized. The
prior ADR proposal history remains preserved through Git history and the related proposal
documents. This reconciliation and acceptance do not modify the Customer Journey, a Freeze, an
earlier Accepted ADR, the Open Questions Register, or the Conflict and Open Question Gate Map.

## Context

### Accepted and frozen authority

The current accepted baseline establishes the following constraints:

1. Workspace is the customer and tenant boundary and may contain multiple Businesses.
   [ADR-003, “Decision”](./ADR-003-workspace-customer-multi-business-boundary.md#decision)
2. The canonical hierarchy is Workspace → Business → Business Unit → Department/Branch;
   Business and Business Unit are distinct.
   [ADR-004, “Decision”](./ADR-004-genesis-organization-hierarchy.md#decision)
3. Business DNA belongs to exactly one Business, is software-independent, and remains separate
   from Recommendations and configuration.
   [ADR-005, “Decision”](./ADR-005-business-dna-business-scoped-software-independent.md#decision)
4. Humans retain authority over material Business facts and consequential AI or Recommendation
   outcomes.
   [ADR-014, “Decision”](./ADR-014-human-control-over-recommendations-and-ai.md#decision)
5. Business Architect is the resumable governed pipeline that keeps raw input, Candidate Facts,
   inferred facts, review, and published Business DNA distinct.
   [ADR-016, “Decision”](./ADR-016-business-architect-governed-pipeline.md#decision)
6. Core Workspace Ready and Operating System Ready are separate outcomes.
   [ADR-018, “Decision”](./ADR-018-separate-core-and-os-readiness.md#decision)
7. Core owns canonical organization identity while the applicable Operating System owns its
   operational data and behavior.
   [ADR-040, “Decision”](./ADR-040-core-organization-identity-os-operational-data.md#decision)
8. Canonical owners alone validate and write their state; projections and orchestration never
   gain write authority.
   [Core Data Ownership §§3.1, 3.5, and 5.4](../../02-core-platform/04-DATA-OWNERSHIP.md#3-principles)
9. Authentication, role labels, hierarchy, tokens, and client-provided identifiers are not
   authorization. The resource owner makes the final current-context decision.
   [Core Permission Model §§3 and 5.8](../../02-core-platform/05-PERMISSION-MODEL.md#3-principles)
10. Security requires minimum-purpose data, secret protection, tenant isolation, safe failure,
    current owner authorization, and minimized append-only Audit evidence.
    [Core Security Model §§3, 5.7, 5.12, 5.17, and 5.20](../../02-core-platform/08-SECURITY-MODEL.md#3-principles)
11. A material architecture change requires an ADR, Architecture Review, and an updated Freeze;
    historical authority is preserved.
    [Core Platform Freeze §7](../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md#7-change-control)

The current [Genesis Customer Journey, “Journey Overview” and Phases 2–8](../../01-genesis/11-CUSTOMER-JOURNEY.md#journey-overview)
is account-first. It moves from Marketing Website to Sign Up / Login, Workspace, Business,
Business Architect, Business DNA, Recommendations, and Product Hub. That account-first path
remains controlling until later governed journey and Freeze synchronization is completed.

The Business Brain Freeze also leaves health, confidence, conflict, uncertainty, partial-result,
Permission, privacy, retention, and implementation mechanisms deferred.
[Business Brain Freeze §§13.3 and 13.5](../../99-architecture-freeze/BUSINESS-BRAIN-FREEZE-v1.0.md#13-deferred-decisions)
This ADR does not resolve those mechanism or model questions by implication.

### Product Owner decision input

BD-001 selected a bounded MVP baseline. BD-002 approved that baseline for continued Governance,
resolved its remaining decision blockers, and instructed this reconciliation. Those records do
not independently amend accepted or frozen authority. They supply approved Product Owner/Human
Architecture input for the completed Human Architecture Review; they have no independent
Accepted ADR authority.

### Historical proposal evidence

The original [Business Discovery Preview Proposal](../proposals/business-discovery-preview/00-BUSINESS-DISCOVERY-PREVIEW-PROPOSAL.md),
[Customer Journey v2 Proposal](../proposals/business-discovery-preview/03-CUSTOMER-JOURNEY-V2-PROPOSAL.md),
[Open Questions Register](../proposals/business-discovery-preview/02-OPEN-QUESTIONS-REGISTER.md),
[Edge Case and Recovery Matrix](../proposals/business-discovery-preview/05-EDGE-CASE-AND-RECOVERY-MATRIX.md),
and [Conflict and Open Question Gate Map](../proposals/business-discovery-preview/13-CONFLICT-AND-OPEN-QUESTION-GATE-MAP.md)
remain non-authoritative historical/proposal evidence. This ADR cites but does not silently
rewrite their statuses.

## Problem

The account-first baseline has no governed way to demonstrate business understanding before
registration. Adding pre-registration Discovery is not merely a new page: it introduces
anonymous temporary state, temporary data ownership, session-control and identity-transfer
behavior, privacy and retention obligations, recovery outcomes, explicit Workspace/Business
target authorization, and an import boundary into canonical onboarding.

Without a durable decision, Discovery could create canonical organization state anonymously,
make token possession equivalent to identity or Permission, treat an inferred result as Business
DNA, bypass Business Architect review, overwrite an existing Business, or imply commercial,
readiness, or Operating System effects. Those outcomes conflict with the accepted and frozen
authority cited above.

## Decision

At the architecture-decision level, Nexoraxs adopts:

> **Business Discovery as an optional additive material pre-registration journey branch**

The branch is **optional** because the current account-first path remains fully available. It is
**additive** because it converges into the existing governed onboarding pipeline rather than
replacing it. It is **material** because it adds:

- anonymous pre-registration state;
- temporary data ownership;
- session claim and identity-transfer behavior;
- privacy and retention boundaries;
- failure and recovery states;
- current target authorization; and
- import into canonical onboarding.

Discovery never becomes mandatory. Direct signup, login, skip, abandonment, failed Discovery,
unsupported Discovery, and expired sessions continue through the account-first path without a
`DiscoverySnapshot`, claim, or import.

### Scoped authority precedence for this reconciliation

For Business Discovery reconciliation only, this ADR applies the operational precedence approved
as Product Owner decision input in [BD-002 §3.1](../proposals/business-discovery-preview/16-BUSINESS-DISCOVERY-REMAINING-ARCHITECTURE-DECISIONS.md#31-decision-1-operational-authority-precedence):

```text
1. Applicable Architecture Freeze
2. Accepted ADRs and Governance decisions
3. Genesis within scope not superseded or amended by accepted authority
4. Included milestone sources
5. Constitution and general principles
6. Specifications, plans, tasks, and implementation artifacts
```

Genesis remains foundational. A Freeze controls only its expressly approved scope and must not be
read as silently rewriting unrelated Genesis principles. Historical sources remain preserved.
Conflicting authority requires an explicit governed successor, amendment, or Accepted ADR.

This scoped decision closes BDP-C01/OQ-GOV-001 for ADR-042 reconciliation; it does **not** globally
redefine repository Governance or edit the differing wording in
[Constitution Principle I](../../../.specify/memory/constitution.md#i-frozen-architecture-is-authoritative),
[Milestone Lifecycle §2](../MILESTONE-LIFECYCLE.md#2-governing-rules),
[ADR Governance](./README.md#purpose), or the
[Core Platform Freeze §2](../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md#2-frozen-scope).

## Journey Paths

### Path A — Discovery-first

```text
Visitor
→ Start Business Discovery
→ Temporary anonymous session
→ Guided business questions
→ Discovery preview
→ Create account or log in
→ Verify identity
→ Claim Discovery session
→ Select or create an authorized Workspace context
→ Select or create an authorized Business context
→ Review and confirm proposed facts
→ Import accepted evidence into Business Architect Candidate Facts
→ Governed human review
→ Publish Business DNA through the existing governed pipeline
→ Recommendations
→ Product Hub
```

### Path B — Account-first

```text
Visitor
→ Sign Up / Login
→ Create or select Workspace
→ Create or select Business
→ Business Architect
→ Business DNA
→ Recommendations
→ Product Hub
```

Path B preserves the existing
[Genesis journey sequence](../../01-genesis/11-CUSTOMER-JOURNEY.md#journey-overview).
Path A is the material additive decision accepted by this ADR. Acceptance still requires a
separately governed Customer Journey successor or amendment and applicable Freeze work before
implementation; this ADR does not perform that synchronization.

## Architecture Boundaries

### Anonymous Discovery session

An anonymous visitor may begin and complete a bounded Discovery preview without an account. The
session:

- is temporary and purpose-limited;
- uses an opaque, high-entropy session credential that is treated as secret and must not appear
  in an ordinary URL, log, analytic event, trace, prompt, error, or Audit value;
- does not trust User, Workspace, Business, role, Permission, subscription, tenant, or other
  identity asserted through URL parameters or the browser;
- creates no canonical User, Workspace, Business, Business Unit, Branch, Membership, Business
  DNA, subscription, entitlement, OS configuration, readiness, or operational record;
- stores only the minimum raw answers, inference and provenance references, disclosure/consent
  version evidence, and lifecycle/security metadata required for the approved Discovery purpose;
- supports abandonment, expiry, invalidation, and deletion of eligible unclaimed working data;
  and
- fails closed when integrity, session control, ownership, expiry, or authorization cannot be
  established.

This ADR selects no database, framework, cookie, credential format, storage engine,
authentication technology, or physical deployment boundary. Those remain later policy and
specification concerns, consistent with the deferred mechanisms in
[Core Security Model §8](../../02-core-platform/08-SECURITY-MODEL.md#8-future-extension-points).

### `DiscoverySnapshot`

`DiscoverySnapshot` is a provisional working architecture concept. It is:

- temporary;
- versioned;
- non-canonical;
- a proposal derived from raw answers and governed inference-source references; and
- usable only for preview, claim, human review, and a later import proposal.

It is not:

- a Business or Business Unit;
- Business DNA or a Business DNA Snapshot;
- a canonical industry classification;
- a Plan, subscription decision, entitlement, readiness result, or paid-capability grant;
- Operating System configuration or operational data;
- a binding or canonical Recommendation; or
- authority for a canonical write.

The final implementation/domain name may be refined through later ontology and specification
work without changing this architectural meaning. This ADR does not introduce a canonical
Business Health concept; that model remains deferred by
[Business Brain Freeze §13.3](../../99-architecture-freeze/BUSINESS-BRAIN-FREEZE-v1.0.md#133-insight-and-candidate-semantics).

### Human control and mandatory Candidate Fact pipeline

Anonymous answers and Discovery output must never publish directly to Business DNA. The mandatory
pipeline is:

```text
Anonymous answers
→ DiscoverySnapshot
→ Verified authenticated User
→ Atomic claim
→ Authorized Workspace and Business target selection
→ Field-level human review
→ Explicit acceptance or rejection
→ Provenance-bearing Business Architect Candidate Fact inputs
→ Governed review
→ Published Business DNA
```

The experience must distinguish user-provided answers from inferred facts, show what was inferred,
allow correction and rejection, allow partial acceptance, and preserve the applicable source and
version provenance. It must never silently overwrite a canonical Business fact or modify published
Business DNA directly. Imported material is Candidate Fact input—not truth—and remains governed by
[ADR-014](./ADR-014-human-control-over-recommendations-and-ai.md) and
[ADR-016](./ADR-016-business-architect-governed-pipeline.md).

The phrase “Every answer updates the Business DNA” in
[Genesis Customer Journey Phase 6](../../01-genesis/11-CUSTOMER-JOURNEY.md#phase-6) must not be
applied literally to anonymous Discovery. BDP-C03 is closed at this ADR’s decision level by the
Candidate Fact pipeline; the conflicting source wording remains for later governed Customer
Journey synchronization.

## Ownership

### Discovery temporary responsibility

A bounded logical Discovery capability owns only temporary responsibility for:

- anonymous session lifecycle;
- raw temporary answers;
- temporary inferred facts;
- `DiscoverySnapshot` revisions;
- temporary disclosure and consent evidence;
- claim-request orchestration; and
- import-proposal orchestration.

“Capability” is a logical responsibility, not an approved service, database, package, API, or
deployment unit.

### Canonical owners preserved

| Concern | Canonical owner and boundary |
|---|---|
| Authentication and verified User identity | Core Identity and Access. Discovery consumes a verification result and never writes User identity. |
| Membership and Permission foundations | Core Identity and Access; the canonical resource owner makes the final resource/action decision. |
| Workspace and Business entities | Core Workspace Management and Core Business Registry through owner-controlled contracts. |
| Business Unit, Department, and Branch identity | Core Organization Registry; Business Unit never substitutes for Business. |
| Candidate Fact intake and governed review | Core Business Architect. |
| Published Business DNA | Core Business DNA Registry. |
| Authoritative Audit Records | Core Audit Service; records remain append-only and minimized. |
| Classification, legal basis, rights, retention, backup, residency, and legal hold | Approved Privacy/Legal, Security, Data Governance, and Storage policies; policy governance does not transfer fact ownership. |
| Plans, subscriptions, entitlements, billing, and commercial lifecycle | Existing product and commercial owners. |
| OS configuration, readiness, and operational data | The applicable Operating System and existing readiness owners. |

These boundaries follow the canonical source-of-truth map in
[Core Data Ownership §5.2](../../02-core-platform/04-DATA-OWNERSHIP.md#52-canonical-source-of-truth-map).
Discovery acquires no write authority over any canonical domain.

## Identity, Claim, and Authorization

### Identity verification and atomic claim

Registration or login and identity verification are required before final claim. Claim must:

1. bind one eligible temporary session to one verified User;
2. validate session state, expiry, integrity, and valid session-control evidence;
3. be atomic and deterministic under retry;
4. prevent replay, double claim, and cross-user transfer;
5. commit only atomically with required Audit emission, without recording the secret credential;
   and
6. fail closed without disclosing session content or another account when ownership cannot be
   proved.

Possession of a copied token alone is not sufficient where later approved Security policy
requires continuity or recovery proof. Claim binds **only to the User**. It does not bind
automatically to a Workspace or Business, create Membership, grant Permission, create an
entitlement, select a target, or authorize import.

### Workspace and Business selection

After claim, the User must explicitly create or select an authorized Workspace and Business
context:

- no Workspace or Business is created anonymously;
- Workspace creation uses only the Core Workspace owner’s contract;
- Business creation uses only the Core Business owner’s contract;
- Business Unit is not a substitute for Business;
- a multi-Workspace User explicitly selects one currently authorized Workspace;
- the system never infers a fallback tenant or target Business;
- import revalidates target lifecycle, Membership, Permission, and authorization when it executes;
  and
- deleted, suspended, archived, changed, or unauthorized targets are denied or safely reselected.

Canonical hierarchy and ownership come from [ADR-004](./ADR-004-genesis-organization-hierarchy.md)
and [ADR-040](./ADR-040-core-organization-identity-os-operational-data.md); current resource checks
come from [Core Permission Model §§5.5 and 5.8](../../02-core-platform/05-PERMISSION-MODEL.md#55-scope-model).

### Logical permission baseline

The following are separate logical action classes, not final Permission strings or role grants:

1. claim one’s own eligible Discovery session;
2. create Workspace through Core;
3. create Business in a selected Workspace;
4. select a target Business;
5. propose Discovery import;
6. review Candidate Facts;
7. accept Candidate Facts;
8. reject Candidate Facts;
9. correct Candidate Facts; and
10. publish Business DNA.

Each protected action is evaluated independently in its current context. Authentication does not
imply authorization; claim does not imply import; review does not imply publication; a title does
not imply Permission. This follows
[Core Permission Model §§3.1–3.7](../../02-core-platform/05-PERMISSION-MODEL.md#3-principles).

| Persona/context | Approved logical outcome |
|---|---|
| Anonymous visitor | May start, answer, preview, abandon, and delete eligible unclaimed working data; may not claim or perform a canonical action. |
| Verified User | May claim only that User’s own valid session after required session-control proof; verification alone grants no target authority. |
| Workspace Owner | Title alone is insufficient; each create, select, import, review, or publication action requires its exact current Permission. |
| Workspace Admin | Receives no automatic import authority; the exact target-scoped Permission is required. |
| Employee | Create and import are denied by default unless explicitly granted at the required scope. |
| View-only User | Create, import, and Candidate Fact mutations are denied. |
| Multi-Workspace User | Must explicitly select one authorized Workspace and then one authorized Business or creation path. |
| Existing-Business import | Requires exact target-scoped Permission and does not confer separate Business DNA publication authority. |

Final Permission identifiers, role contents, direct grants, deny precedence, delegation, and
segregation-of-duties detail remain later catalog/policy work.

## Candidate Fact Import

### Existing Business and field-level review

Import into a new or existing Business must:

- require explicit target Business selection;
- require current target-scoped Permission at execution;
- show field-by-field proposals with existing and proposed values;
- identify conflicts with canonical facts, current Candidate Facts/drafts, and published Business
  DNA;
- preserve existing canonical data until an authorized user explicitly accepts an item;
- allow partial acceptance;
- record accepted, rejected, failed, and skipped outcomes per item;
- preserve the originating answers/inferences, `DiscoverySnapshot` revision, and governed source
  versions as provenance;
- support deterministic, idempotent retry without duplicate Candidate Facts;
- never silently merge; and
- never overwrite published Business DNA directly.

An interrupted or partial import preserves the claim and explicit per-item outcomes. It does not
imply whole-Snapshot success or publication. Detailed schemas, merge algorithms, transaction
design, APIs, and UX are outside this ADR.

### Rejection and retention

- A rejected proposed fact is not imported.
- Rejection does not modify existing canonical data.
- Partial acceptance is permitted.
- Raw rejected content must not be retained indefinitely.
- Minimized rejection-outcome evidence may be retained only for decision proof, Audit,
  idempotency, duplicate prevention, or permitted suppression of the same rejected proposal.
- Retained rejection/Audit evidence must not contain a secret session credential.
- Eligible unclaimed temporary data remains deletable and expires.
- Accepted imported provenance follows Business Architect and Audit retention policy.
- Deletion, privacy rights, backup retention, and legal hold follow approved policy.

This closes OQ-IMP-005 at the architecture-decision level without selecting a numeric retention
period or mechanism. Canonical writes and history remain governed by
[Core Data Ownership §§5.4 and 5.10](../../02-core-platform/04-DATA-OWNERSHIP.md#54-write-model-rules)
and [ADR-038](./ADR-038-append-only-audit-history.md).

## Privacy, Purpose, and Retention

### Approved architecture purpose

Discovery data may be used only to:

- provide an optional pre-registration Business Discovery preview;
- allow the User to claim that temporary session; and
- allow optional authorized import into Business Architect.

### Disclosure and consent separation

Before collection, the experience must clearly disclose temporary storage, the purpose of
inference, the expiry posture, and the fact that no canonical Business exists. A versioned,
explicit claim/import choice must be recorded before claim or import; that product choice remains
separate from the jurisdiction-specific legal basis that Privacy/Legal must approve.

The following are separate decisions and, where applicable, separate evidence records:

- participation disclosure;
- temporary-storage acknowledgement;
- claim/import consent;
- account terms;
- privacy notice;
- marketing consent;
- analytics consent where legally required; and
- any future model-training or secondary-use consent.

Marketing consent must never be inferred from Discovery participation, temporary storage,
registration, claim, import, or an analytics choice.

### Classification and handling

Until approved Privacy/Legal classification says otherwise, raw answers and inferred facts are
treated as potentially personal, confidential, or commercially sensitive. The session credential
is secret. Raw answers, `DiscoverySnapshot` content, inferred sensitive content, and secret
credentials must not appear in ordinary:

- logs;
- analytics;
- traces;
- support tooling;
- prompts; or
- learning or training datasets.

Anonymous analytics may capture minimized purpose-approved funnel events, but analytics
identifiers never become identity, session-control, tenant, or authorization evidence and remain
separate from canonical identity until an approved claim or consent permits linkage. Content use
or another secondary purpose requires separate approved purpose, legal basis/consent, access,
minimization, and retention.

Privacy/Legal must select and approve the final jurisdiction-specific legal basis before
implementation authorization. Architecture must support consent or another approved legal basis
without hard-coding an unsupported legal conclusion. This ADR invents no statutory text or
jurisdiction-specific retention duration.

### Rights, Audit, backups, and legal hold

1. Delete eligible temporary working data when valid deletion or expiry applies.
2. Minimize and separate security/Audit evidence from working content.
3. Audit Records should not contain raw questionnaire content by default; an exceptional policy
   must be explicit and approved.
4. Backup copies expire through the approved backup-retention lifecycle.
5. Normal deletion does not require unsafe ad hoc mutation of immutable backup media.
6. Restored backups reapply deletion tombstones or equivalent suppression before affected data
   becomes active.
7. Legal hold suspends deletion only under approved legal authority and documented scope.
8. Rights verification must not disclose session content to an unverified requester.
9. User-facing disclosure distinguishes deleted working data, retained minimized Audit/security
   evidence, temporary backup persistence, and legal-hold exceptions.

These decisions apply the deferred-policy boundary in
[Core Security Model §§5.12 and 5.17](../../02-core-platform/08-SECURITY-MODEL.md#512-audit-security)
without pretending to supply the missing policy values or mechanisms.

## Recovery and Conceptual State Model

The governing principle is:

> **Recovery must never weaken identity proof, ownership proof, tenant isolation, authorization,
> expiry, or Audit.**

### Recovery outcomes

| Condition | Required conceptual outcome |
|---|---|
| Browser refresh | Resume only when the session credential, integrity, lifecycle, and policy remain valid; otherwise restart or use Path B. |
| Accidental tab closure | Same as refresh; no completion, claim, or import is inferred. |
| Expired session | Deny claim/import without disclosing content; allow restart or Path B. |
| Account created but identity not verified | Remain `registration_required`; no claim, Workspace/Business creation from Discovery, or import. |
| Verified account with interrupted claim | Retry the atomic claim check; never assume the earlier operation failed. |
| Already claimed session | Return the existing outcome only to the same verified owner when policy permits; otherwise deny without disclosure. |
| Duplicate registration | Use Core Identity recovery; Discovery creates no second identity and reveals no account existence. |
| Copied token | Token possession alone is insufficient where continuity/recovery proof is required; block or re-prove safely. |
| Different signed-in account | Do not transfer or disclose the session; require correct-account recovery or restart. |
| Interrupted import | Preserve claim and committed per-item outcomes; revalidate and retry idempotently when authorized. |
| Partial import | Show accepted/rejected/failed/skipped item outcomes; never imply whole-Snapshot import or publication. |
| Invalid target | Deny and require explicit authorized reselection; never choose a fallback tenant or Business. |
| Permission revoked | Deny the protected action on revalidation; claim remains separate and canonical data is unchanged. |
| User abandonment | Create no canonical customer, commercial, readiness, or operational state; delete/expire eligible working data under policy. |
| User deletion request | Verify control/rights without disclosure, delete eligible working data, and apply the approved Audit/backup/legal-hold hierarchy. |

### Conceptual state checkpoints

Happy path:

```text
active
→ preview_ready
→ registration_required
→ identity_verified
→ claimed
→ target_selected
→ import_review
→ imported
```

Alternative states or outcomes:

```text
expired
abandoned
deleted
claim_blocked
invalidated
import_failed
partially_imported
```

| Initial checkpoint | Trigger | Result | Canonical entities created by Discovery | Allowed next action | Failure posture |
|---|---|---|---|---|---|
| No session | Visitor starts after disclosure | `active` | None | Answer, abandon, delete, or Path B | Fail without canonical creation. |
| `active` | Valid limited/full preview is available | `preview_ready` | None | Review/correct, register, abandon, delete | Label failure/insufficiency; retry, restart, or Path B. |
| `preview_ready` | Visitor chooses save/continue | `registration_required` | None | Register/login and verify | Keep session unclaimed; no organization creation. |
| `registration_required` | Core authentication and required verification succeed | `identity_verified` | Core-owned User/session only through the account flow; none by Discovery | Prove session control and claim | Approved identity recovery or Path B. |
| `identity_verified` | Atomic eligibility/control checks succeed | `claimed` | Claim/Audit evidence only | Select/create authorized Workspace and Business | `claim_blocked` or `invalidated`; no disclosure. |
| `claimed` | Explicit authorized targets are established | `target_selected` | Workspace/Business only if separately created through Core owner contracts | Review field-level import proposal | Deny/reselect without fallback. |
| `target_selected` | User begins item review | `import_review` | None | Accept/reject/correct items | Preserve source/canonical data and allow safe exit. |
| `import_review` | Owner accepts eligible confirmed items | `imported` or `partially_imported` | Candidate Fact inputs through Business Architect only; no published DNA | Governed Business Architect review | Record per-item `import_failed` outcomes; retry safely. |
| Any eligible state | Expiry, abandonment, deletion, or integrity invalidation | Applicable alternative state | None | Restart, Path B, or approved recovery | Fail closed and retain only permitted minimized evidence. |

These names are conceptual checkpoints for architecture review, not a final database enum, API,
schema, or one overloaded aggregate. Later design must keep progress, session lifecycle, claim,
target, and import outcomes distinguishable.

## Commercial, Readiness, and Operating System Boundaries

Discovery completion, claim, target selection, or import must not:

- select or activate a Plan or subscription;
- create an entitlement;
- grant paid capability or product access;
- bypass Product Hub;
- mark Core Workspace Ready;
- mark an Operating System Ready;
- install, configure, or activate an Operating System;
- create billing or payment state; or
- create operational records.

Discovery may show explainable, non-binding product or Plan guidance only. It is not a canonical
Recommendation. Canonical Recommendations and Product Hub remain downstream of governed Business
Architect review and published Business DNA, consistent with
[ADR-005](./ADR-005-business-dna-business-scoped-software-independent.md) and
[ADR-018](./ADR-018-separate-core-and-os-readiness.md).

## Compatibility and Preserved Records

At the Product Owner decision level, BD-001 and BD-002 close the six formerly blocking questions
OQ-GOV-001, OQ-GOV-002, OQ-AUT-001, OQ-IMP-005, OQ-PRV-001, and OQ-PRV-003 for ADR-042
reconciliation. BD-002 also approves BD-001’s 29 conditional closures for this reconciliation.

The same inputs close BDP-C01, BDP-C02, BDP-C03, BDP-C07, and BDP-C10 at the architecture-decision
level represented in this ADR:

| Conflict | ADR-042 decision-level disposition | Repository synchronization still required |
|---|---|---|
| BDP-C01 | Scoped Business Discovery precedence is defined; no global Governance rewrite is claimed. | Yes—later Governance synchronization must preserve the scope and history. |
| BDP-C02 | Discovery-first is an optional additive material branch; account-first remains. | Yes—Customer Journey and applicable Freeze successor/amendment. |
| BDP-C03 | Candidate Fact/human-review pipeline controls; direct DNA publication is prohibited. | Yes—later journey wording synchronization. |
| BDP-C07 | Temporary ownership, claim-to-User-only, target authorization, permissions, and privacy purpose are defined conceptually. | Yes—threat model, policies, contracts, and register synchronization. |
| BDP-C10 | Rights/Audit/backup/legal-hold architecture hierarchy is defined. | Yes—jurisdiction-specific policy, values, mechanisms, and register synchronization. |

The source [Open Questions Register](../proposals/business-discovery-preview/02-OPEN-QUESTIONS-REGISTER.md)
and [Conflict and Open Question Gate Map](../proposals/business-discovery-preview/13-CONFLICT-AND-OPEN-QUESTION-GATE-MAP.md)
remain unchanged and preserve their historical open statuses. Their later synchronization is a
separate governed task. Decision-level closure does not authorize implementation; all applicable
implementation-blocking policy items remain gates.

## Consequences

### Positive

- Provides useful value before registration while preserving direct account-first onboarding.
- Preserves human control and explainability over proposed facts.
- Protects tenant isolation by separating claim from target authorization.
- Preserves Core organization ownership, Business Architect, and Business DNA boundaries.
- Prevents anonymous output from becoming canonical truth, commercial state, or OS state.
- Supports explicit recovery, provenance, field-level review, partial acceptance, and Audit.

### Negative and cost

- Adds a temporary data lifecycle and deletion/expiry obligations.
- Adds claim security, replay, concurrency, dispute, and account-recovery complexity.
- Adds privacy, legal-basis, retention, backup, and legal-hold policy obligations.
- Adds current target Permission checks and field-level conflict review.
- Expands recovery, abuse, edge-case, localization, accessibility, Audit, and observability testing.
- Requires a governed Customer Journey successor/amendment, Freeze work, and readiness validation.

### Neutral

- Selects no technology, database, framework, identity provider, or storage mechanism.
- Approves no API, Event, schema, route, token format, or UI design.
- Approves no implementation estimate or delivery plan.
- Creates no automatic commercial, readiness, entitlement, configuration, or operational effect.

## Alternatives Considered

| Alternative | Disposition | Reason |
|---|---|---|
| 1. Keep account-first only | Rejected as the sole future journey; preserved as Path B | It avoids anonymous complexity but does not provide the approved optional pre-registration value path. |
| 2. Make Discovery mandatory | Rejected | It removes customer choice, makes failure/unsupported cases an onboarding gate, and replaces rather than extends the current journey. |
| 3. Create Workspace or Business anonymously | Rejected | Anonymous completion is neither verified identity nor authorization and cannot write Core organization state. |
| 4. Publish Discovery directly to Business DNA | Rejected | It bypasses Candidate Facts, provenance, human review, and the Business DNA owner. |
| 5. Offer Discovery only after registration | Rejected as the primary design; remains compatible as optional account-first assistance | It does not meet the pre-registration value objective, although Path B may later offer governed assistance. |
| 6. Allow token possession alone to claim | Rejected | A copied credential cannot by itself establish identity, continuity, or safe ownership transfer. |
| 7. Auto-merge into an existing Business | Rejected | It risks silent conflict, unauthorized overwrite, provenance loss, and cross-target errors. |
| 8. Treat Discovery output as a canonical Recommendation | Rejected | The output lacks the governed Business DNA, Business Brain, Recommendation, and human-review conditions required by accepted authority. |

## Remaining Open Policy and Specification Questions

This reconciliation does not claim every implementation-policy question is solved. The following
remain later policy/specification concerns and are not permission to implement:

- exact authentication and identity-verification mechanism;
- session persistence technology;
- numeric expiry and retention periods;
- final Permission identifiers and role mappings;
- API and schema design;
- concurrency control and transaction mechanics;
- rate limits and abuse prevention;
- exact legal basis by jurisdiction;
- residency and cross-border transfer policy;
- encryption and key-management mechanisms;
- backup retention values and restore procedure;
- support-access policy;
- analytics event inventory and approved linkage;
- final UI, localization, RTL/LTR, accessibility, and interaction design; and
- final `DiscoverySnapshot` implementation/domain name.

These items must be resolved at their proper Governance, policy, architecture, or specification
gate. No framework default or implementation task may decide them silently.

## Governance and Implementation Gates

ADR-042 is Accepted at the architecture-decision level. The first two gates below were completed
by the [Human Architecture Review](../reviews/ADR-042-HUMAN-ARCHITECTURE-REVIEW.md); all remaining
applicable gates must still complete before implementation:

1. Human Architecture Review — **completed 2026-07-22**.
2. ADR status decision through Governance — **Accepted 2026-07-22**.
3. Customer Journey successor or amendment.
4. Exact affected-source synchronization.
5. Open-question and conflict-register synchronization.
6. Required Freeze amendment or successor.
7. Readiness validation.
8. Security threat model.
9. Permission catalog approval.
10. Privacy/Legal policy approval.
11. Identity and recovery policy.
12. Retention and backup policy.
13. Feature specification.
14. Constitution Check.
15. Implementation plan.
16. Task breakdown.
17. API/domain/data contracts.
18. Explicit implementation authorization.

The lifecycle and change controls are governed by
[Milestone Lifecycle §§4–5 and 8](../MILESTONE-LIFECYCLE.md#4-milestone-lifecycle-phases),
[ADR Governance, “Review Workflow”](./README.md#review-workflow), and
[Core Platform Freeze §7](../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md#7-change-control).
No Customer Journey, Freeze, register, policy, specification, plan, task, or implementation work
is authorized by this reconciliation.

## Explicit Non-implementation Statement

ADR-042 creates no API, Event, schema, table, field, endpoint, route, component, service, package,
database, storage mechanism, cookie, token format, identity mechanism, Permission string, role,
retention duration, legal text, backup schedule, UI design, infrastructure choice, deployment,
migration, specification, plan, task, test, or runtime behavior.

No code may be written from this ADR alone. **Implementation remains unauthorized. ADR acceptance
does not authorize implementation.**

## Related Documents

### Product Owner decision input—not Accepted ADR authority

- [BD-001 — Business Discovery MVP Architecture Decision](../proposals/business-discovery-preview/15-BUSINESS-DISCOVERY-MVP-ARCHITECTURE-DECISION.md)
- [BD-002 — Remaining Business Discovery Architecture Decisions](../proposals/business-discovery-preview/16-BUSINESS-DISCOVERY-REMAINING-ARCHITECTURE-DECISIONS.md)

### Accepted and frozen authority

- [ADR Governance](./README.md)
- [ADR-003 — Workspace Is the Customer and Tenant Boundary](./ADR-003-workspace-customer-multi-business-boundary.md)
- [ADR-004 — Adopt the Genesis Organization Hierarchy](./ADR-004-genesis-organization-hierarchy.md)
- [ADR-005 — Business DNA Is Business-Scoped and Software-Independent](./ADR-005-business-dna-business-scoped-software-independent.md)
- [ADR-014 — Humans Retain Authority Over Consequential Decisions](./ADR-014-human-control-over-recommendations-and-ai.md)
- [ADR-016 — Business Architect Is a Resumable Governed Pipeline](./ADR-016-business-architect-governed-pipeline.md)
- [ADR-018 — Core Workspace Ready and Operating System Ready Are Separate](./ADR-018-separate-core-and-os-readiness.md)
- [ADR-038 — Critical Audit History Is Append-Only](./ADR-038-append-only-audit-history.md)
- [ADR-040 — Core Owns Organization Identity and Operating Systems Own Operational Data](./ADR-040-core-organization-identity-os-operational-data.md)
- [Genesis Customer Journey](../../01-genesis/11-CUSTOMER-JOURNEY.md)
- [Core Data Ownership](../../02-core-platform/04-DATA-OWNERSHIP.md)
- [Core Permission Model](../../02-core-platform/05-PERMISSION-MODEL.md)
- [Core Security Model](../../02-core-platform/08-SECURITY-MODEL.md)
- [Core Platform Freeze](../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md)
- [Business Brain Freeze](../../99-architecture-freeze/BUSINESS-BRAIN-FREEZE-v1.0.md)

### Governance process and historical proposal evidence

- [NexoraXS Constitution](../../../.specify/memory/constitution.md)
- [Architectural Milestone Lifecycle](../MILESTONE-LIFECYCLE.md)
- [Business Discovery Preview Proposal](../proposals/business-discovery-preview/00-BUSINESS-DISCOVERY-PREVIEW-PROPOSAL.md)
- [Open Questions Register](../proposals/business-discovery-preview/02-OPEN-QUESTIONS-REGISTER.md)
- [Customer Journey v2 Proposal](../proposals/business-discovery-preview/03-CUSTOMER-JOURNEY-V2-PROPOSAL.md)
- [Edge Case and Recovery Matrix](../proposals/business-discovery-preview/05-EDGE-CASE-AND-RECOVERY-MATRIX.md)
- [Conflict and Open Question Gate Map](../proposals/business-discovery-preview/13-CONFLICT-AND-OPEN-QUESTION-GATE-MAP.md)

## Decision History

| Date | Status | Change |
|---|---|---|
| 2026-07-22 | Proposed | Initial Business Discovery ADR drafted for authority review. |
| 2026-07-22 | Proposed | Reconciled with BD-001 and BD-002; added the optional material branch, ownership, claim, authorization, Candidate Fact, privacy, recovery, lifecycle, and Governance boundaries. No implementation authorized. |
| 2026-07-22 | Accepted | Human Architecture Review completed with no blocking architecture findings. ADR accepted at the architecture-decision level only; implementation remains blocked by Customer Journey, source synchronization, register, Freeze, readiness, policy, specification, planning, task, contract, and explicit authorization gates. |
