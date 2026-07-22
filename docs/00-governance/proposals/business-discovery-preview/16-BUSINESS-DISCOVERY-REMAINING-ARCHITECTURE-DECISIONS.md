# Business Discovery Remaining Architecture Decisions (BD-002)

| Metadata | Value |
|---|---|
| Status | **Approved Product Owner Decision for Governance Reconciliation** |
| Scope | Remaining Business Discovery architecture decisions |
| Authority | **Decision input to Governance; not an Accepted ADR** |
| Implementation authorization | **None** |
| ADR impact | Defines mandatory reconciliation inputs for ADR-042 |
| Freeze impact | Requires later governed successor or amendment review |
| Code impact | None |
| Owner | Product Owner / Human Architecture Authority |
| Date | 2026-07-22 |
| Related documents | [BD-001](./15-BUSINESS-DISCOVERY-MVP-ARCHITECTURE-DECISION.md) and [ADR-042](../../ADR/ADR-042-pre-registration-business-discovery.md) |
| Supersedes | Nothing |

> **Decision boundary:** This record approves the BD-001 MVP baseline and closes the named
> questions and conflicts at the Product Owner/Human Architecture decision level for ADR-042
> reconciliation. It is not an Accepted ADR, does not modify any source register or authority,
> does not accept ADR-042, and does not authorize implementation.

## 1. Purpose and authority posture

BD-002 supplies the remaining bounded human decisions required to prepare a later reconciliation
of ADR-042. It does not perform that reconciliation. The later ADR task must keep ADR-042
**Proposed** during editing and review, and only the approved ADR lifecycle may change its status.
See [ADR Governance, “ADR Lifecycle” and “Review Workflow”](../../ADR/README.md) and
[Milestone Lifecycle, §§4–5](../../MILESTONE-LIFECYCLE.md).

This record distinguishes four effects:

1. **Approved Product Owner decision:** the direction selected here for continued Governance.
2. **Accepted authority preserved:** an existing Accepted ADR or Freeze rule that this decision
   must not change.
3. **Repository synchronization still required:** a later authorized task must update ADR-042,
   journey authority, registers, and/or Freeze material as applicable.
4. **Implementation remains blocked:** no runtime behavior, contract, policy mechanism, or code is
   authorized by this record.

### 1.1 Accepted constraints preserved

The approved decisions below preserve these established boundaries:

- Workspace is the tenant/customer boundary and may exist before its first Business.
  [ADR-003](../../ADR/ADR-003-workspace-customer-multi-business-boundary.md)
- The canonical hierarchy keeps Business distinct from Business Unit, and Core owns canonical
  organization identities while an Operating System owns operational data.
  [ADR-040](../../ADR/ADR-040-core-organization-identity-os-operational-data.md) and
  [Core Freeze §§3.1 and 5.1](../../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md)
- Humans retain authority over material Business facts and consequential outputs.
  [ADR-014](../../ADR/ADR-014-human-control-over-recommendations-and-ai.md)
- Business Architect distinguishes raw input, Candidate Facts, inferred facts, review, and
  published Business DNA; it rejects direct answer-to-publication behavior.
  [ADR-016](../../ADR/ADR-016-business-architect-governed-pipeline.md)
- Core Workspace Ready and Operating System Ready remain separate, and Discovery grants neither.
  [ADR-018](../../ADR/ADR-018-separate-core-and-os-readiness.md)
- Canonical owners alone authorize and write their state; projections and orchestration do not
  acquire write authority. [Core Data Ownership §§3–5](../../../02-core-platform/04-DATA-OWNERSHIP.md)
- Authentication, role labels, hierarchy, tokens, and client-supplied identifiers never substitute
  for current resource authorization. [Core Permission Model §§3–5](../../../02-core-platform/05-PERMISSION-MODEL.md)
  and [Core Security Model §§3 and 5.3–5.7](../../../02-core-platform/08-SECURITY-MODEL.md)
- Audit Records are append-only and minimized; retention, export, deletion, and legal hold require
  later approved policy. [Core Security Model §§5.12 and 5.17](../../../02-core-platform/08-SECURITY-MODEL.md)
- Material change requires an ADR, Architecture Review, an updated Freeze, and readiness
  validation. [Core Freeze §7](../../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md)

The [current Genesis Customer Journey](../../../01-genesis/11-CUSTOMER-JOURNEY.md) remains
account-first until later governed authority synchronization is complete. The
[Customer Journey v2 Proposal](./03-CUSTOMER-JOURNEY-V2-PROPOSAL.md) remains a non-authoritative
review aid.

## 2. Approval of the BD-001 baseline

The Product Owner / Human Architecture Authority approves the
[BD-001 Business Discovery MVP Architecture Decision](./15-BUSINESS-DISCOVERY-MVP-ARCHITECTURE-DECISION.md)
as the decision baseline for continued Governance and ADR-042 reconciliation.

This approval means:

- the optional Discovery-first and preserved account-first paths are the selected MVP direction;
- the anonymous session, non-canonical `DiscoverySnapshot`, human-control, verified claim,
  authorized target selection, Candidate Fact import, existing-Business review, privacy minimum,
  recovery, analytics, lifecycle separation, and exclusions in BD-001 are approved as the
  Product Owner decision baseline;
- BD-001's 29 questions marked “closed upon human approval” are now approved as closed **for
  ADR-042 MVP reconciliation**; and
- the decisions in this record resolve BD-001's six remaining acceptance-blocking questions.

This approval does **not** edit the source
[Open Questions Register](./02-OPEN-QUESTIONS-REGISTER.md). Its entries retain their historical
status until a separately authorized synchronization task records the deciding artifact, date,
owner, rationale, and effects. The BD-001 file itself is also preserved unchanged.

This approval does not make ADR-042 Accepted and does not authorize implementation.

## 3. Approved remaining decisions

### 3.1 Decision 1: Operational authority precedence

For **Business Discovery reconciliation only**, use this operational precedence:

```text
1. Applicable Architecture Freeze
2. Accepted ADRs and Governance decisions
3. Genesis within the scope not superseded or amended by accepted authority
4. Included milestone sources
5. Constitution and general principles
6. Specifications, plans, tasks, and implementation artifacts
```

Interpretation:

- Genesis remains foundational.
- A Freeze governs only the scope it expressly approves.
- A Freeze must not be interpreted as silently rewriting unrelated Genesis principles.
- Accepted historical records remain available; later decisions must not rewrite history to hide
  a change.
- When controlling sources conflict, an explicit governed successor, amendment, or Accepted ADR
  is required before the affected meaning changes.
- This decision gives reviewers one bounded precedence rule for Business Discovery reconciliation.
  It does not amend the Constitution, Milestone Lifecycle, ADR Governance, Core Freeze, or global
  repository Governance.

This decision reconciles the local use of [Constitution Principle I](../../../../.specify/memory/constitution.md)
with the Genesis-foundational language in [Milestone Lifecycle §2](../../MILESTONE-LIFECYCLE.md)
and [Core Freeze §2](../../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md) without claiming
to settle their repository-wide wording. It resolves **OQ-GOV-001** and **BDP-C01** at the
Business Discovery decision level.

### 3.2 Decision 2: Journey change classification

Discovery-first is classified as an:

> **Optional additive material journey branch**

It does not replace the current account-first journey. It is nevertheless a material architecture
change because it introduces:

- anonymous pre-registration state;
- claim and transfer behavior;
- a new entry path into canonical onboarding;
- privacy and retention boundaries;
- new authorization checks; and
- new failure, interruption, and recovery paths.

The branch is compatible in intent with the current route because direct account-first entry
remains available, but it is not merely an editorial patch. Before implementation authorization,
later Governance must:

1. reconcile and accept ADR-042 through its own lifecycle;
2. update or publish the governed Customer Journey successor;
3. identify the exact affected authority files and clauses;
4. conduct a non-modifying Architecture Review;
5. publish the required Freeze amendment or successor baseline; and
6. complete readiness validation.

This classification follows the material-change rules in
[Milestone Lifecycle §§5 and 8](../../MILESTONE-LIFECYCLE.md) and
[Core Freeze §7](../../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md). It resolves
**OQ-GOV-002** and **BDP-C02** at the decision level.

### 3.3 Decision 3: Candidate Fact pipeline

Any interpretation that anonymous answers or Discovery output may publish directly to Business
DNA is rejected. The mandatory pipeline is:

```text
Anonymous answers
→ DiscoverySnapshot
→ Authenticated claim
→ Authorized target selection
→ Explicit field confirmation
→ Business Architect Candidate Fact inputs
→ Governed human review
→ Published Business DNA
```

The phrase “Every answer updates the Business DNA” in
[Genesis Customer Journey, Phase 6](../../../01-genesis/11-CUSTOMER-JOURNEY.md) cannot be applied
literally to anonymous Discovery or used to bypass the accepted Candidate Fact pipeline. The later
journey and ADR reconciliation tasks must correct that conflict through governed successor wording;
this task does not modify the Genesis source.

Imported evidence remains distinguishable, provenance-bearing, pre-publication material under
[ADR-016](../../ADR/ADR-016-business-architect-governed-pipeline.md), with human authority preserved
by [ADR-014](../../ADR/ADR-014-human-control-over-recommendations-and-ai.md). This resolves
**BDP-C03** at the decision level.

### 3.4 Decision 4: Temporary data and claim ownership boundary

#### Discovery responsibility

A bounded logical Discovery capability owns only:

- anonymous session lifecycle;
- raw temporary answers;
- temporary inferred facts;
- `DiscoverySnapshot` revisions;
- anonymous disclosure and consent evidence required for that temporary purpose;
- orchestration of the claim request; and
- orchestration of import proposals.

“Capability” here is a logical responsibility, not an approved service, deployment unit, database,
API, package, or runtime boundary.

Discovery does not own:

- canonical identity or User;
- Workspace or Workspace Membership;
- Business, Business Unit, Department, or Branch;
- Permission or final resource authorization;
- canonical Business facts, Candidate Facts after accepted intake, or published Business DNA;
- Plans, subscriptions, entitlements, installation, activation, or readiness;
- OS configuration; or
- operational data.

#### Canonical owners

- Core Identity and Access owns authentication, verified User identity, sessions, Workspace
  Membership, and shared authorization foundations.
- Core authorization foundations evaluate Membership and shared Permission context; the canonical
  resource owner makes the final resource/action decision.
- Core Workspace Management, Business Registry, and Organization Registry own Workspace, Business,
  and organization identities according to their accepted boundaries.
- Core Business Architect owns Candidate Fact intake and the review workflow.
- Core Business DNA Registry owns published Business DNA.
- Core Audit Service owns authoritative append-only Audit Records.
- Privacy/Legal policy governs data rights, retention, deletion, backup, and legal-hold behavior;
  policy governance does not transfer business-fact ownership.

These allocations preserve the source-of-truth map in
[Core Data Ownership §5.2](../../../02-core-platform/04-DATA-OWNERSHIP.md) and the security-owner
boundaries in [Core Security Model §§4 and 6](../../../02-core-platform/08-SECURITY-MODEL.md).

#### Claim boundary

The Discovery capability may request and record a claim binding only after:

1. verified authentication by Core Identity and Access;
2. valid session-control evidence;
3. replay and double-claim protection;
4. expiry and lifecycle validation;
5. atomic binding of the eligible Discovery session to the verified User; and
6. required Audit emission without recording the secret credential.

Claim binds a Discovery session to one User only. It does not attach the session to a Workspace or
Business, create Membership, grant a Permission, select a target, or authorize import. A secret
session credential, browser identifier, analytics identifier, URL parameter, role label, or
client-supplied resource ID is never sufficient authority.

This resolves the ownership component of **BDP-C07**. Token format, storage, expiry values,
recovery mechanisms, concurrency implementation, and physical contracts remain later approved
Security/implementation policy.

### 3.5 Decision 5: Logical permission baseline

The action classes below are approved logical authorization requirements. They are not final
Permission string names, role definitions, API operations, or grants. A later Permission catalog
may reuse an existing authoritative action only when it is semantically exact; otherwise it must
use the applicable governed process.

Required action classes:

1. claim one's own eligible Discovery session;
2. create Workspace through Core;
3. create Business in a selected Workspace;
4. select a target Business;
5. propose Discovery import;
6. review Candidate Facts;
7. accept Candidate Facts;
8. reject Candidate Facts;
9. correct Candidate Facts; and
10. publish Business DNA.

Each protected action is evaluated independently, in its current context, by the owning domain.
Claim never grants the later actions; review does not imply publication; a role label does not
imply any action. This follows [Core Permission Model §§3.1–3.7 and 5.8](../../../02-core-platform/05-PERMISSION-MODEL.md).

Approved baseline outcomes:

- An anonymous visitor may start, answer, preview, abandon, and delete eligible unclaimed session
  data; no protected canonical action is granted.
- A verified User may claim only that User's own valid session after session-control proof.
- A Workspace Owner may create/select a Business and import only when the exact action Permission
  and current scope permit it.
- A Workspace Admin receives no automatic import authority from the title; the exact Permission is
  required.
- An employee is denied create/import by default unless explicitly granted at the required scope.
- A view-only User is denied create/import.
- A User with multiple Workspaces must explicitly select one currently authorized Workspace.
- Import into an existing Business requires exact target-scoped authorization and field-level
  confirmation.
- Publication to Business DNA remains a separately authorized Business Architect/Business DNA
  action after governed review.

This resolves **OQ-AUT-001**, the Permission component of **BDP-C07**, and the remaining
persona/permission detail of **BDP-C08** at the logical architecture level. Final string names,
role contents, direct grants, denial precedence, delegation, and UI remain outside this decision.

### 3.6 Decision 6: Rejection and retention

The approved rejection boundary is:

- rejecting a proposed fact prevents its import;
- rejection does not modify existing canonical data;
- partial acceptance is allowed and produces explicit per-item outcomes;
- rejected raw content must not be retained indefinitely;
- minimum rejection-outcome evidence may be retained only to prove the decision, support Audit,
  prevent accidental duplicate import, or avoid presenting the same rejected proposal again where
  approved policy permits;
- retained evidence is purpose-limited and minimized and contains no secret session credential;
- eligible unclaimed temporary session data remains deletable and expires;
- after accepted import, provenance follows Business Architect and Audit retention policy; and
- deletion, legal hold, backup expiry, and rights handling follow approved Privacy/Legal policy.

The actor rejecting an item must possess the applicable target-scoped action Permission from
Decision 5. Rejection evidence is not permission to keep the full rejected questionnaire forever
and is not canonical Business truth. This resolves **OQ-IMP-005** at the architecture-decision
level while leaving numerical retention periods and mechanisms to later approved policy.

### 3.7 Decision 7: Privacy classification, purpose, legal basis, and consent separation

#### Approved purpose

Discovery data may be collected only to:

- provide an optional pre-registration Business Discovery preview;
- allow the user to claim that temporary session; and
- allow optional authorized import into Business Architect.

#### Required separation

The following are separate decisions and evidence records where applicable:

- participation disclosure;
- temporary-storage acknowledgement;
- claim/import consent;
- account terms;
- privacy notice;
- marketing consent;
- analytics consent where legally required; and
- any future model-training or secondary-use consent.

Marketing consent is never inferred from Discovery participation, temporary storage, account
creation, claim, import, or analytics choice.

#### Classification baseline

Until Privacy/Legal approves a more specific classification, raw answers and inferred facts are
treated as potentially personal, confidential, or commercially sensitive. The session credential
is a secret credential.

Raw answers, Snapshot content, inferred sensitive content, and secret credentials must not appear
in ordinary logs, analytics, traces, support tools, prompts, or learning datasets. Secondary use
requires a separately approved purpose, legal basis/consent as applicable, access boundary,
minimization, and retention policy.

#### Legal-basis boundary

Privacy/Legal must select and approve the final jurisdiction-specific legal basis before
implementation authorization. Architecture must support consent or another approved legal basis
without hard-coding an unsupported legal conclusion. This record does not claim compliance with a
specific jurisdiction or regulation.

These requirements apply [Core Security Model §5.17](../../../02-core-platform/08-SECURITY-MODEL.md)
to the new pre-tenant collection boundary. They resolve **OQ-PRV-001**, the Privacy component of
**BDP-C07**, and part of **BDP-C10** at the architecture-decision level.

### 3.8 Decision 8: Rights, Audit, backups, and legal hold

The approved hierarchy is:

1. Delete eligible temporary working data when a valid deletion request or expiry applies.
2. Minimize and separate security/Audit evidence from working content.
3. Audit Records must not include raw questionnaire content unless an approved exceptional policy
   explicitly requires it.
4. Backup copies expire through the approved backup-retention lifecycle; normal deletion does not
   require unsafe ad hoc mutation of immutable backups.
5. A restored backup must reapply deletion tombstones or an equivalent suppression policy before
   affected data becomes active.
6. Legal hold suspends deletion only under approved legal authority and documented scope.
7. User-facing disclosure must distinguish deleted working data, retained minimized Audit/security
   evidence, temporary backup persistence, and legal-hold exceptions.
8. A rights request must be verified without disclosing session content to an unverified requester.

Append-only Audit remains governed by
[Core Security Model §5.12](../../../02-core-platform/08-SECURITY-MODEL.md) and
[Core Data Ownership §§5.10 and 5.13](../../../02-core-platform/04-DATA-OWNERSHIP.md). Detailed
verification method, deletion/anonymization mechanism, backup schedule, tombstone mechanism,
retention value, and legal-hold procedure remain future approved policy.

This resolves **OQ-PRV-003** and the remaining architecture component of **BDP-C10**.

## 4. Remaining decision resolution table

| Blocking item | Approved decision | Owner | Effect on ADR-042 | Later follow-up |
|---|---|---|---|---|
| OQ-GOV-001 / BDP-C01 | Use the bounded six-level operational precedence in Decision 1; Genesis remains foundational and scope-limited Freeze authority is explicit. | Product Owner / Human Architecture Authority; later Architecture Governance synchronization | Replace ADR-042's unresolved-precedence statement with the bounded decision and global-governance caveat. | Formal source synchronization; no global Governance rewrite in the ADR task. |
| OQ-GOV-002 / BDP-C02 | Classify Discovery-first as an optional additive material journey branch that preserves account-first. | Product Owner / Human Architecture Authority; Architecture Governance for change control | State materiality, compatibility boundary, and mandatory successor/amendment gates. | Exact affected-source manifest, Architecture Review, successor/amendment, readiness. |
| BDP-C03 | Anonymous answers can reach published DNA only through confirmed Candidate Fact intake and governed review. | Core Business Architect; Core Business DNA Registry at publication | Replace any direct-answer ambiguity with the mandatory pipeline. | Later journey/source wording synchronization. |
| BDP-C07 — ownership | Discovery owns only temporary session/evidence responsibilities and orchestration; accepted Core owners retain canonical state. | Discovery logical responsibility plus named canonical owners | Add an explicit ownership and claim-to-User-only section. | Physical contract, threat model, mechanisms, and owner review. |
| OQ-AUT-001 / BDP-C07 / BDP-C08 | Approve ten logical action classes; role/persona labels grant nothing automatically. | Core Identity and Access foundations; each resource owner makes final decision | Add action boundaries and persona outcomes without inventing strings or roles. | Permission catalog, action names, role mapping, segregation-of-duties review. |
| OQ-IMP-005 | Rejection blocks import, preserves canonical data, permits partial acceptance, and retains only minimized justified evidence. | Core Business Architect, Audit Service, Privacy/Legal policy owners | Add rejection authority, outcome, provenance, and minimization boundaries. | Numeric retention and deletion/Audit reconciliation policy. |
| OQ-PRV-001 / BDP-C07 / BDP-C10 | Approve bounded purpose, consent separation, sensitive-by-default classification, secret-token handling, and later legal-basis selection. | Privacy/Legal, Security, Data Governance, Product; Discovery for temporary enforcement | Add purpose, classification, separation, prohibited secondary systems, and no unsupported legal conclusion. | Jurisdiction/data inventory review and approved legal basis before implementation. |
| OQ-PRV-003 / BDP-C10 | Delete eligible working data; separate minimized Audit; expire backups by policy; reapply tombstones; scope legal hold; verify rights requester. | Privacy/Legal, Security, Audit, Storage/Data Lifecycle | Add rights/Audit/backup/legal-hold hierarchy. | Mechanisms, schedules, retention values, disclosures, and legal procedures. |

## 5. Ownership table

| Data/action | Temporary owner | Canonical owner | Write authority | Audit responsibility |
|---|---|---|---|---|
| Anonymous session lifecycle | Discovery logical capability | No canonical Business owner; claim-linked session remains Discovery-owned lifecycle state | Discovery only within approved temporary policy | Discovery supplies outcome context; Audit Service owns required Audit Record. |
| Raw temporary answer | Discovery logical capability | None unless separately confirmed and accepted as Candidate Fact input | Discovery writes temporary evidence only | No raw content in ordinary Audit; record minimum lifecycle outcome where required. |
| Temporary inferred fact | Discovery logical capability | Source Knowledge/Rules retain their ownership; no canonical Business fact exists | Discovery records a temporary proposal with provenance | Record version/outcome references only where required. |
| `DiscoverySnapshot` revision | Discovery logical capability | None; non-canonical presentation/transfer proposal | Discovery creates immutable/logically versioned revisions under later policy | Claim/import may reference revision; Audit does not copy Snapshot content by default. |
| Temporary disclosure/consent evidence | Discovery logical capability | Future approved Privacy/Audit evidence owner as applicable | Discovery records the disclosed choice; cannot treat it as blanket consent | Audit Service owns any required authoritative Audit Record. |
| Claim request orchestration | Discovery logical capability | Core Identity owns verified User; Discovery owns session binding lifecycle | Discovery requests verified identity result and atomically binds only the eligible session | Claim attempt/result is auditable without secret credential. |
| Claim record/session-to-User binding | Discovery logical capability for binding record | Core Identity remains User source of truth | Discovery writes only binding outcome after Core verification; no Workspace/Business write | Audit Service owns authoritative claim Audit Record where required. |
| Workspace creation | None | Core Workspace Management | Core owner contract only | Core producer supplies critical action; Audit Service owns record. |
| Business creation/selection | None | Core Business Registry; Organization Registry for narrower identities | Core owner contract and current authorization only | Core producer supplies target/action/result references. |
| Workspace Membership and Permission context | None | Core Identity and Access foundations; resource owner for final action | Applicable canonical owner only | Critical access and authorization outcomes follow shared Audit pattern. |
| Import proposal | Discovery orchestrates proposal | Core Business Architect owns accepted intake | Discovery may offer; Business Architect alone accepts/rejects its write | Import attempt and per-item outcome are correlated and auditable. |
| Candidate Fact intake/review | None after accepted intake | Core Business Architect | Business Architect owner under exact target-scoped actions | Business Architect supplies review/outcome evidence; Audit Service owns Audit Records. |
| Published Business DNA | None | Core Business DNA Registry | Registry publication path only after governed review | Publication is auditable; prior history is preserved. |
| Subscription, entitlement, readiness, OS configuration, operational data | None | Existing commercial, readiness, and applicable OS owners | Discovery has no write authority | Existing owners retain their applicable Audit obligations. |

## 6. Permission outcomes

### 6.1 Action-class authority

These labels describe logical actions, not final Permission strings.

| Action class | Required context and proof | Final decision owner | Default/failure outcome | Audit posture |
|---|---|---|---|---|
| Claim own Discovery session | Verified User, valid own-session control, eligible lifecycle, replay protection | Discovery claim boundary using Core Identity verification | Deny without disclosure; no authority elevation | Record minimized claim result and correlation. |
| Create Workspace through Core | Verified User plus current Core creation policy | Core Workspace Management | Deny or route to Core recovery; Discovery creates nothing | Core-owned creation Audit where required. |
| Create Business in selected Workspace | Current Membership, selected Workspace, exact action authorization | Core Business Registry | Deny; no implicit Business or Business Unit | Record actor, Workspace, action, result. |
| Select target Business | Current authorized Workspace/Business visibility and target access | Core authorization foundations plus target owner | No fallback or inferred target | Record selection only where consequential/policy requires. |
| Propose Discovery import | Claimed session, explicit target, item confirmation, target-scoped action | Core Business Architect | Continue without import | Record attempt/result, not secret credential. |
| Review Candidate Facts | Selected Business and review action | Core Business Architect | View/decision denied without leaking unauthorized evidence | Review checkpoint follows governed Audit policy. |
| Accept Candidate Facts | Selected Business and accept action | Core Business Architect | No import/publication on denial | Item outcome and provenance retained as approved. |
| Reject Candidate Facts | Selected Business and reject action | Core Business Architect | Proposal remains unimported; canonical facts unchanged | Minimized rejection outcome under Decision 6. |
| Correct Candidate Facts | Selected Business and correct action | Core Business Architect | No silent overwrite | Correction creates provenance/history and applicable Audit. |
| Publish Business DNA | Completed governed review and separate publication action | Core Business DNA Registry | Remain pre-publication | Append-only publication/action evidence. |

### 6.2 Persona/context matrix

| Persona/context | Discovery and claim | Workspace/Business creation or selection | Import and Candidate Fact actions | Business DNA publication |
|---|---|---|---|---|
| Anonymous visitor | May start, answer, preview, abandon, and delete eligible unclaimed data; cannot claim until verified | None | None | None |
| Verified User | May claim only own valid session | May create/select only where current Core policy and exact actions allow | No import merely from verification | No publication merely from verification |
| Workspace Owner | Same own-session claim boundary | May create/select only when exact scoped action permits | May propose/review/accept/reject/correct only when each required action permits | Separate governed publication action required |
| Workspace Admin | Same own-session claim boundary | Title grants nothing automatically; exact action required | No automatic import/review authority; exact action required | Separate action required; title is insufficient |
| Employee | May claim own session | Create/select denied by default except explicitly granted access | Create/import denied by default; narrower review actions only if explicitly granted | Denied unless separately and explicitly authorized through governed policy |
| View-only User | May claim own session without access elevation | View only within existing authority; no creation | Import and Candidate Fact mutations denied | Denied |
| Multi-Workspace User | May claim own session | Must explicitly choose one currently authorized Workspace, then an authorized Business/create path | Import is restricted to the selected revalidated target | Separate target-scoped publication action required |
| Existing-Business import | Claim remains User-only | Target Business must be explicitly selected and currently authorized | Exact target-scoped import plus field-by-field actions; conflicts never merge silently | Existing DNA remains unchanged until separate governed review/publication |

## 7. Privacy and retention table

| Data | Classification baseline | Logical owner | Approved use | Retention/deletion posture | Prohibited or constrained handling |
|---|---|---|---|---|---|
| Raw answer | Potentially personal, confidential, or commercially sensitive | Discovery temporary responsibility | Produce optional preview and eligible import proposal | Purpose/state-based expiry; delete eligible working data; no indefinite rejection retention | No ordinary logs, analytics, traces, support, prompts, or learning datasets. |
| Inferred fact | Potentially sensitive proposed inference, never customer truth | Discovery temporary responsibility; source owners retain Knowledge/Rules | Explainable preview and eligible confirmed proposal | Expire/delete with temporary purpose; preserve source/version only when justified after import | No canonical write, silent reuse, or unapproved secondary use. |
| `DiscoverySnapshot` | Temporary non-canonical proposal | Discovery temporary responsibility | Present and transfer confirmed proposal | Revision/state-based expiry or deletion; imported provenance is separately retained | No Business DNA/Recommendation/readiness meaning; no ordinary telemetry content. |
| Session credential | Secret credential | Discovery/Security boundary under later mechanism owner | Prove eligible session control | Short, policy-limited lifecycle; revoke/expire/invalidate | Never in ordinary URLs, logs, analytics, traces, prompts, errors, or Audit value. |
| Consent evidence | Purpose/version-specific choice evidence; not blanket legal basis | Discovery temporarily; approved Privacy/Audit owner where authoritative evidence is required | Prove disclosed acknowledgement or consent for the named purpose | Retain only as required by approved purpose, legal basis, rights, and Audit policy | Must not imply marketing, analytics, account terms, or model-training consent. |
| Claim record | Authenticated session-to-User outcome; not Business authorization | Discovery binding lifecycle; Core Identity remains User owner | Prevent replay/double claim and support recovery/Audit | Policy-based protected retention; separate from raw content | No automatic Workspace/Business linkage and no secret credential. |
| Rejection evidence | Minimized decision/outcome reference, not canonical Business truth | Core Business Architect; Audit Service for Audit Record | Prove decision, prevent duplicate import, avoid repeat proposal where permitted | Retain minimum justified outcome; delete rejected raw content under policy | No indefinite full questionnaire retention or canonical overwrite. |
| Imported Candidate Fact provenance | Business-scoped pre-publication evidence | Core Business Architect | Governed review, correction, acceptance/rejection, publication preparation | Business Architect policy and applicable Audit/rights requirements | Never treated as published DNA merely because imported. |
| Audit Record | Append-only minimized accountability evidence | Core Audit Service | Critical action accountability and correlation | Future approved retention/export/legal-hold policy; corrections create later records | Raw questionnaire content excluded absent exceptional approved policy; never rewrite history. |
| Analytics event | Non-canonical minimized telemetry | Analytics/Observability as non-owning consumer | Purpose-approved funnel measurement | Purpose-specific expiry/aggregation under approved consent/legal basis | Identifier/content cannot establish identity, claim, Membership, target, or Permission. |
| Backup copy | Protected recovery copy, not an active source of truth | Approved Storage/backup owner; source owner retains data meaning | Approved recovery only | Expires by backup lifecycle; restored data reapplies deletion tombstone/equivalent suppression before activation | No ad hoc unsafe mutation; no bypass of deletion, scope, legal hold, or authorization. |

## 8. Question closure record

### 8.1 Six formerly blocking questions

| Question | Decision-level result | Deciding section | Source-register status in this task |
|---|---|---|---|
| OQ-GOV-001 | **Resolved for ADR-042 MVP reconciliation** | [Decision 1](#31-decision-1-operational-authority-precedence) | Unmodified; later synchronization required |
| OQ-GOV-002 | **Resolved for ADR-042 MVP reconciliation** | [Decision 2](#32-decision-2-journey-change-classification) | Unmodified; later synchronization required |
| OQ-AUT-001 | **Resolved at logical action/owner level** | [Decision 5](#35-decision-5-logical-permission-baseline) | Unmodified; final Permission catalog remains later work |
| OQ-IMP-005 | **Resolved at rejection/retention architecture level** | [Decision 6](#36-decision-6-rejection-and-retention) | Unmodified; policy values/mechanisms remain later work |
| OQ-PRV-001 | **Resolved at purpose/classification/separation architecture level** | [Decision 7](#37-decision-7-privacy-classification-purpose-legal-basis-and-consent-separation) | Unmodified; Privacy/Legal selects jurisdiction-specific basis before implementation |
| OQ-PRV-003 | **Resolved at rights/Audit/backup/legal-hold architecture level** | [Decision 8](#38-decision-8-rights-audit-backups-and-legal-hold) | Unmodified; policy mechanisms remain later work |

### 8.2 BD-001's 29 conditional closures

The following are now approved as closed for ADR-042 MVP reconciliation:

- **Product/journey:** OQ-PRD-002, OQ-PRD-003, OQ-PRD-004, OQ-PRD-005.
- **Ontology:** OQ-ONT-001, OQ-ONT-002.
- **Identity:** OQ-ID-001.
- **Authorization:** OQ-AUT-002, OQ-AUT-003.
- **Session/claim:** OQ-SES-001, OQ-SES-002, OQ-SES-003, OQ-SES-006.
- **Import:** OQ-IMP-001, OQ-IMP-002, OQ-IMP-003, OQ-IMP-004, OQ-IMP-006.
- **Privacy:** OQ-PRV-004, OQ-PRV-006.
- **Snapshot:** OQ-SNP-001, OQ-SNP-002, OQ-SNP-003, OQ-SNP-004.
- **Recommendation:** OQ-REC-001, OQ-REC-003, OQ-REC-005.
- **Ecosystem/readiness:** OQ-ECO-001, OQ-ECO-004.

The source register is intentionally not rewritten in BD-002. Later synchronization must preserve
each stable ID and cite BD-001 and BD-002 as the deciding evidence.

### 8.3 Decisions still deferred or outside this MVP

BD-002 does not silently close the remaining BD-001 categories:

- **Deferred, non-blocking for ADR-042 MVP reconciliation:** OQ-GOV-003, OQ-PRD-001,
  OQ-ONT-003, OQ-ECO-002, OQ-ECO-003.
- **Implementation-policy questions:** OQ-ID-002, OQ-ID-003, OQ-SES-004, OQ-SES-005,
  OQ-PRV-002, OQ-PRV-005.
- **Outside MVP:** OQ-GOV-004, OQ-REC-002, OQ-REC-004, OQ-ECO-005.

These deferrals do not authorize implementation. Any item that the source register marks
implementation-blocking remains an implementation gate until approved at its proper level.

## 9. Conflict closure table

“Closed” below means closed at the Product Owner/Human Architecture decision level for ADR-042
reconciliation. The source Conflict Map remains unchanged in this task.

| Conflict | Decision-level status | Repository source synchronization still required? | Still blocks ADR-042 reconciliation? | Blocks implementation? |
|---|---|---|---|---|
| BDP-C01 — Freeze-first vs Genesis-ultimate | **Closed for Business Discovery reconciliation** by bounded operational precedence; no global Governance rewrite claimed | **Yes** — ADR-042 and later Governance records must state the scoped rule and caveat | **No** | **Yes** — ADR acceptance, authority synchronization, Freeze/readiness, and later delivery gates remain |
| BDP-C02 — account-first vs pre-registration Discovery | **Closed at decision level:** optional additive material branch; account-first preserved | **Yes** — reconcile ADR-042, publish/update governed journey, exact affected manifest, Freeze successor/amendment | **No** | **Yes** |
| BDP-C03 — direct answer-to-DNA vs Candidate Fact pipeline | **Closed at decision level:** Candidate Fact/human-review path controls; direct publication rejected | **Yes** — correct conflicting wording only in later authorized ADR/journey synchronization | **No** | **Yes** |
| BDP-C07 — missing anonymous session/claim/import/retention/privacy authority | **Closed at conceptual architecture level:** temporary owner, canonical owners, claim boundary, logical Permissions, and privacy purpose are approved | **Yes** — ADR-042 plus later contracts/policies and register synchronization | **No** | **Yes** — mechanisms, exact Permissions, threat model, legal basis, and policy approval remain |
| BDP-C10 — deferred privacy/rights/retention/backups/legal hold | **Closed at architecture-boundary level:** rights/Audit/backup/legal-hold hierarchy approved | **Yes** — ADR-042 and later Privacy/Legal/Security policy must incorporate it | **No** | **Yes** — jurisdiction-specific policy, values, mechanisms, and owner approval remain |

BDP-C08's remaining persona/permission detail is also settled at the logical decision level by
Decision 5, but its source-map synchronization remains a later task. Other non-blocking conflicts
retain the dispositions recorded in BD-001 and are not reopened here.

## 10. Mandatory ADR-042 reconciliation instructions

The later ADR-042 reconciliation task must update only its separately authorized scope. During
editing and review, ADR-042 must remain **Proposed**.

### 10.1 ADR-042 must include

1. **Status discipline:** keep status Proposed throughout editing and Architecture Review.
2. **Journey paths:** state the optional Discovery-first path and preserve the direct account-first
   path.
3. **Change classification:** identify Discovery-first as an optional additive material journey
   branch.
4. **Anonymous boundary:** define temporary, minimum-data, expiring anonymous session behavior and
   prohibit canonical/operational entity creation.
5. **Snapshot status:** use `DiscoverySnapshot` as a working non-canonical proposal, not Business,
   Business DNA, Recommendation, entitlement, readiness, configuration, or operational truth.
6. **Identity and claim:** require verified identity plus valid session control, replay protection,
   expiry validation, atomic binding, and Audit.
7. **Claim scope:** bind the session to one User only—not automatically to Workspace or Business—and
   grant no authorization.
8. **Target selection:** require explicit Workspace/Business selection and current target/resource
   authorization; never trust persona labels or client IDs.
9. **Candidate Fact import:** import only confirmed eligible items with provenance through Core
   Business Architect.
10. **No direct publication:** prohibit Discovery or import from publishing or overwriting Business
    DNA directly.
11. **Permission baseline:** include the ten logical action classes and persona/context outcomes
    without inventing final Permission strings or roles.
12. **Existing Business:** require field-level conflict display, explicit disposition, partial
    acceptance, unchanged canonical data until accepted, and Audit.
13. **Consent/privacy separation:** separate participation, temporary storage, claim/import,
    account terms, privacy notice, marketing, analytics where required, and future secondary use.
14. **Rights/data lifecycle:** include deletion of eligible working data, minimized Audit/security
    evidence, backup lifecycle and restore suppression, scoped legal hold, rights verification, and
    disclosure distinctions.
15. **No downstream effects:** state that Discovery creates no Plan, subscription, entitlement,
    readiness, product access, OS configuration, activation, or operational data.
16. **Governance consequences:** require the exact affected-authority manifest, governed Customer
    Journey successor/update, Architecture Review, Freeze successor/amendment review, and readiness
    validation.
17. **Implementation prohibition:** state that implementation remains prohibited until ADR
    acceptance, authority synchronization, applicable Freeze/readiness gates, approved Privacy/
    Security/Permission policy, feature specification, plan, tasks, Constitution Checks, and
    explicit implementation authorization are complete.

ADR-042 must cite BD-001 and BD-002 as decision evidence, preserve historical conflict/question IDs,
and distinguish architecture decisions from mechanism and policy-value deferrals.

### 10.2 The ADR-042 task must not

- modify application or infrastructure code;
- create API, database, Event, UI, schema, route, token, storage, or implementation specifications;
- silently modify Genesis, a Freeze, an Accepted ADR, or another frozen source;
- claim the feature is implementation-ready;
- infer final Permission strings, role contents, identity mechanisms, retention periods,
  jurisdictional legal basis, backup schedules, or legal-hold procedures;
- change ADR-042 to Accepted without Human Architecture Review and the approved ADR workflow;
- create feature specs, plans, tasks, tests, migrations, or implementation work; or
- erase or rewrite historical proposal, conflict, or question records.

## 11. Remaining Governance work

The decision blockers for preparing ADR-042 reconciliation are closed by BD-002, but the following
work remains mandatory and separately authorized:

1. Reconcile ADR-042 as Proposed using §10 of this record.
2. Conduct Human Architecture Review across Product, Architecture Governance, Identity and Access,
   Security, Privacy/Legal, Data Governance, Business Architect/Business DNA, Audit, Storage,
   Product Hub, commercial, and applicable OS boundaries.
3. Decide ADR-042's status only through ADR Governance.
4. After any acceptance, authorize an exact affected-source manifest and update/publish the
   governed Customer Journey successor without concealing historical wording.
5. Synchronize the Open Questions Register and Conflict Map through a separate authorized task,
   preserving IDs and historical status evidence.
6. Review and publish the required Freeze amendment or successor baseline.
7. Complete readiness validation.
8. Resolve implementation-policy questions, including identity/recovery mechanisms, persistence,
   concurrency, numeric retention, residency/security controls, final Permission catalog, threat
   model, backup schedule, rights procedures, and jurisdiction-specific legal basis.
9. Only after architecture authority is complete, create and approve the feature specification,
   plan, tasks, contracts, tests, and implementation authorization.

Approval of BD-001 and BD-002 is not approval of any later artifact or phase.

## 12. Explicit non-implementation statement

BD-002 creates no API, Event, schema, table, field, endpoint, route, component, service, package,
database, storage mechanism, token format, identity provider, Permission string, role, retention
duration, legal text, backup schedule, deployment, migration, UI, specification, plan, task, test,
or runtime behavior.

It does not accept ADR-042, amend the Customer Journey, modify a Freeze, or authorize code.

**Implementation remains prohibited.**
