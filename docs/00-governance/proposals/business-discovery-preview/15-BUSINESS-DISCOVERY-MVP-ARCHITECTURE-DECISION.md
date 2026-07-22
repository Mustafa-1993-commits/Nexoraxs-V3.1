# Business Discovery MVP Architecture Decision (BD-001)

| Metadata | Value |
|---|---|
| Status | **Proposed for Human Approval** |
| Scope | Business Discovery MVP architecture decisions |
| Authority | **Non-authoritative until approved through Governance** |
| Implementation authorization | **None** |
| ADR impact | Prepares a later ADR-042 reconciliation task |
| Freeze impact | None in this task |
| Code impact | None |
| Owner | Product Owner / Human Architecture Authority |
| Date | 2026-07-22 |
| Related ADR | [ADR-042 — Pre-Registration Business Discovery](../../ADR/ADR-042-pre-registration-business-discovery.md) |
| Supersedes | Nothing |

> **Governance warning:** This is a bounded human decision proposal. It does not accept ADR-042,
> amend a Freeze, change the authoritative Customer Journey, authorize implementation, or make the
> wider Business Discovery Preview proposal implementation-authoritative. No Business Discovery
> implementation may begin from this document.

## 1. Decision posture and evidence

### 1.1 Purpose

This document records the recommended minimum MVP behavior needed for a later human review of
ADR-042. It separates:

- **accepted authority** already established by Governance or a Freeze;
- **proposed recommendation** introduced by BD-001 for Human Approval;
- **unresolved decision** that must remain open; and
- **future implementation concern** that belongs in later policy, specification, contract, plan,
  task, or implementation work.

Approval of this document would approve only this recommended decision set for use in a separate
ADR-042 reconciliation task. It would not make ADR-042 Accepted and would not authorize code.

### 1.2 Verified accepted constraints

The following constraints are inherited rather than decided here:

1. The current authoritative journey is account-first: a visitor signs up or logs in before
   Workspace creation, Business creation, Business Architect, Business DNA, Recommendations, and
   Product Hub. See [Genesis Customer Journey, “The Journey at a Glance” and Phases 1–5](../../../01-genesis/11-CUSTOMER-JOURNEY.md).
2. Workspace is the customer and tenant boundary and may contain multiple Businesses; a Workspace
   may exist before its first Business. See [ADR-003, “Decision”](../../ADR/ADR-003-workspace-customer-multi-business-boundary.md).
3. Business DNA belongs to exactly one Business, is software-independent, and is not anonymous
   questionnaire output. See [ADR-005, “Decision”](../../ADR/ADR-005-business-dna-business-scoped-software-independent.md).
4. Humans retain authority over material Business facts and consequential AI or Recommendation
   outputs. See [ADR-014, “Decision” and “Consequences”](../../ADR/ADR-014-human-control-over-recommendations-and-ai.md).
5. Business Architect is the governed, resumable route from raw and imported evidence through
   Candidate Facts and human review to published Business DNA; direct publication from answers is
   prohibited. See [ADR-016, “Decision”](../../ADR/ADR-016-business-architect-governed-pipeline.md).
6. Core Workspace Ready and Operating System Ready are separate outcomes; Discovery cannot grant
   either one. See [ADR-018, “Decision”](../../ADR/ADR-018-separate-core-and-os-readiness.md).
7. Core Organization Registry owns canonical organization identity and parent relationships while
   an Operating System owns its operational records and behavior. Business and Business Unit remain
   distinct. See [ADR-040, “Decision”](../../ADR/ADR-040-core-organization-identity-os-operational-data.md)
   and [Core Platform Freeze, §§3.1 and 5.1](../../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md).
8. Authentication is not authorization; client-provided scope is only an input, canonical owners
   make final decisions, tokens are limited-purpose evidence, and security failure grants no access.
   See [Core Permission Model, §§3–5](../../../02-core-platform/05-PERMISSION-MODEL.md) and
   [Core Security Model, §§3, 5.3–5.7, and 5.20](../../../02-core-platform/08-SECURITY-MODEL.md).
9. Canonical writes pass through the owning domain; projections and temporary compositions never
   acquire write authority. See [Core Data Ownership, §§3 and 5.4–5.5](../../../02-core-platform/04-DATA-OWNERSHIP.md)
   and [Core Platform Freeze, §§5.2 and 5.7](../../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md).
10. Material architecture change requires an Accepted ADR, Architecture Review, and updated Freeze.
    Proposal approval does not automatically accept an ADR. See [Architectural Milestone Lifecycle,
    Phases 2–4](../../MILESTONE-LIFECYCLE.md) and [Core Platform Freeze, §7](../../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md).

ADR-042 itself is **Proposed**, explicitly non-authoritative, and grants no implementation
authorization. The Business Discovery Preview proposal family is likewise proposal evidence, not
implementation authority. See [ADR-042, “Status,” “Authority,” and “Implementation Status”](../../ADR/ADR-042-pre-registration-business-discovery.md)
and [Preview Proposal, §§2–3 and 25](./00-BUSINESS-DISCOVERY-PREVIEW-PROPOSAL.md).

### 1.3 Repository verification limitation

The required path `docs/00-governance/CURRENT-AUTHORITY.md` was not present in the inspected
repository state on 2026-07-22. This document therefore makes no authority claim based on that
missing entry point. It relies on the cited accepted ADRs, frozen sources, Governance lifecycle,
and current Genesis journey. The absence must be reconciled separately and is not repaired by
BD-001 because this task is restricted to exactly this new file.

The recorded conflict between “Freeze-first” and “Genesis-ultimate” precedence also remains open.
BD-001 does not select either rule. See [Conflict and Gate Map, BDP-C01](./13-CONFLICT-AND-OPEN-QUESTION-GATE-MAP.md)
and [Open Questions Register, OQ-GOV-001](./02-OPEN-QUESTIONS-REGISTER.md).

## 2. Decision summary

All decisions in this table are **recommendations**, not current authority.

| Decision area | Recommended MVP decision | Rationale | Authority compatibility | Remaining follow-up |
|---|---|---|---|---|
| Journey position | Add optional Discovery-first entry while preserving direct account-first entry. | Demonstrates value before registration without coercing all visitors. | Preserves the current path; adding the branch still requires governed journey change. [Current journey](../../../01-genesis/11-CUSTOMER-JOURNEY.md) | Resolve BDP-C01/C02 and reconcile ADR-042 later. |
| Anonymous session | Permit a temporary, minimum-data session identified by an opaque high-entropy credential; create no canonical or operational entity. | Enables pre-registration continuity without treating a visitor as a tenant or customer. | Consistent with token, minimization, and fail-closed constraints. [Security Model §§3 and 5.7](../../../02-core-platform/08-SECURITY-MODEL.md) | Approve temporary-data owner, threat model, persistence, and expiry policy. |
| Discovery output | Use `DiscoverySnapshot` as a working name for a temporary proposal, never Business, Business DNA, classification truth, Recommendation, entitlement, or configuration. | Prevents anonymous output from acquiring canonical meaning. | Preserves Business DNA and ownership. [ADR-005](../../ADR/ADR-005-business-dna-business-scoped-software-independent.md) | Terminology review and later glossary work. |
| Human control | Mark raw versus inferred information; allow correction, rejection, and explicit confirmation before import. | Protects customer truth and explainability. | Required by [ADR-014](../../ADR/ADR-014-human-control-over-recommendations-and-ai.md). | Define detailed review UX only after authority and specification. |
| Registration and verification | Require an authenticated, identity-verified user before final claim or canonical creation. | An anonymous completion is not proof of identity or tenant authority. | Compatible with [Security Model §§5.3–5.5](../../../02-core-platform/08-SECURITY-MODEL.md). | Identity owner selects approved mechanisms and recovery policy. |
| Claim | Bind one eligible temporary session to one verified authenticated user using an atomic, auditable, non-reusable claim; fail closed on doubt. | Prevents replay, cross-user attachment, and client-ID trust. | Preserves explicit context, Audit, and owner checks. | Approve claim/temporary-data ownership and security policy. |
| Canonical creation | After verification, create or select a permitted Workspace and create/select Business only through Core-owned contracts. | Discovery is not an anonymous organization registry. | Required by [ADR-003](../../ADR/ADR-003-workspace-customer-multi-business-boundary.md), [ADR-040](../../ADR/ADR-040-core-organization-identity-os-operational-data.md), and the Core Freeze. | Resolve exact create/import Permission. |
| Import | Import only explicitly accepted items as provenance-bearing Business Architect Candidate Fact inputs; never publish or overwrite directly. | Keeps the governed evidence-to-DNA pipeline intact. | Required by [ADR-016](../../ADR/ADR-016-business-architect-governed-pipeline.md). | Detailed contract, conflict taxonomy, and merge algorithm are later work. |
| Existing Business | Require explicit target selection, permission, field-by-field conflict review, partial acceptance, and Audit; no silent merge. | Protects established Business truth and history. | Preserves canonical owner control and versioning. | Permission and rejection-retention decisions remain blocking. |
| Existing users | Any eligible visitor/user may produce a proposal, but target selection, creation, confirmation, and import are separately authorized actions. | Persona labels do not prove scope. | Required by Core Permission and Security models. | Full permission matrix remains later specification work. |
| Consent and privacy | Disclose temporary storage and inference purpose; minimize data; require explicit consent before claim/import; permit abandon/delete; separate anonymous and canonical records until claim. | Establishes a minimum privacy posture without inventing law. | Compatible with [Security Model §§3.7 and 5.17](../../../02-core-platform/08-SECURITY-MODEL.md). | Privacy/Legal approval, classification, legal basis, rights, retention values, residency. |
| Recovery | Permit recovery only when possession, identity, current authorization, expiry, and state remain valid; otherwise restart or fail closed. | Conversion recovery must not weaken tenant isolation. | Required by Security invariants and Freeze §5.8. | Mechanisms, assurance level, and operational limits are later policy. |
| Subscription and pricing | Discovery creates no Plan, subscription, entitlement, product access, activation, setup, or readiness; any product/plan guidance is explainable and non-binding. | Keeps commercial and operational lifecycles separate. | Required by [ADR-018](../../ADR/ADR-018-separate-core-and-os-readiness.md) and [Core Freeze §5.4](../../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md). | Downstream Product Hub/commercial routing is separate work. |
| Analytics | Allow minimized funnel events separated from canonical identity; an analytics identifier never proves identity or authorization. | Supports measurement without creating a shadow identity system. | Compatible with data minimization and non-owning projections. | Approve event inventory, consent/purpose, retention, and access. |
| Technology | Select no framework, database, authentication method, token format, storage product, API, schema, or infrastructure. | BD-001 is a logical architecture proposal only. | Technology details remain deferred by the Core Freeze and Security Model. | Later accepted authority, specification, and implementation decisions. |

## 3. Journey position and entry paths

### 3.1 Proposed Path A — Discovery-first

```text
Visitor
→ Start Business Discovery
→ Temporary anonymous session
→ Guided business questions
→ Discovery preview
→ Create account
→ Verify identity
→ Claim discovery session
→ Confirm proposed business facts
→ Create Workspace and Business
→ Continue through Business Architect
→ Business DNA
→ Recommendations
→ Product Hub
```

### 3.2 Preserved Path B — Account-first

```text
Visitor
→ Sign Up / Login
→ Create Workspace
→ Create Business
→ Business Architect
→ Business DNA
→ Recommendations
→ Product Hub
```

Business Discovery is optional. “Skip,” direct signup, login, abandonment, or a failed preview must
route to Path B without requiring a Snapshot, claim, or import. Discovery must never become a hidden
gate to account creation, Workspace creation, Business Architect, or Product Hub.

Path B reflects the current authoritative account-first journey. Path A is only the recommendation
being prepared for later Governance. This document does not modify
[the current Customer Journey](../../../01-genesis/11-CUSTOMER-JOURNEY.md) or approve
[Customer Journey v2 Proposal](./03-CUSTOMER-JOURNEY-V2-PROPOSAL.md).

## 4. Anonymous session and Discovery output

### 4.1 Temporary anonymous session

The recommended anonymous session:

- is temporary and purpose-limited;
- is addressed through an opaque, high-entropy session credential whose value must not appear in
  ordinary URLs, logs, analytics, Events, prompts, or errors;
- does not trust identity, user, Workspace, Business, Business Unit, role, subscription, or
  Permission values from query parameters or other browser assertions;
- creates no User, Workspace, Workspace Membership, Business, Business Unit, Branch, subscription,
  entitlement, Business DNA, or operational record;
- stores only the answers, consent/version references, provenance, and minimum security/lifecycle
  metadata needed to provide Discovery, resume, delete, claim, and audit the claim boundary;
- has state-specific expiry under a future approved retention policy;
- allows explicit abandonment and deletion of eligible unclaimed working data; and
- is invalidated or blocked when integrity, possession, expiry, or ownership cannot be established.

The MVP permits multiple independent anonymous sessions. It never silently merges, replaces, or
reassigns them. A user chooses an eligible session explicitly; abuse/rate limits are later Security
policy. No final persistence or token technology is selected here.

### 4.2 `DiscoverySnapshot` working concept

`DiscoverySnapshot` is the recommended working term for the versioned temporary result produced
from a specific set of answers and inference-source references. It is a presentation and transfer
proposal, not a newly accepted canonical platform concept. The final name remains subject to
ontology and API/domain specification after Governance.

A Discovery Snapshot is **not**:

- a canonical Business or Business Unit;
- Business DNA or a Business DNA Snapshot;
- an authoritative industry, capability, or compliance classification;
- a canonical Recommendation or binding product/plan decision;
- a Plan, subscription, entitlement, readiness state, or paid-capability grant;
- an Operating System installation, configuration, activation, or operational record; or
- authority for any canonical write.

The term `Business Health Snapshot` is not used for this MVP because it collides semantically with
Business DNA Snapshot and depends on a health model that the Business Brain Freeze leaves deferred.
See [Business Brain Freeze, §§13.2–13.3](../../../99-architecture-freeze/BUSINESS-BRAIN-FREEZE-v1.0.md)
and [Open Questions Register, OQ-ONT-001/OQ-REC-005](./02-OPEN-QUESTIONS-REGISTER.md).

### 4.3 Result quality, version, and unsupported cases

- Pending generation is labeled pending and never forces registration.
- Failure or timeout offers safe retry, restart, or direct Path B; it does not fabricate output.
- Insufficient, contradictory, unsupported, or missing Knowledge/Rules produces a clearly limited
  result, a coverage-gap explanation, or no guidance. It does not assert false fit.
- Editing an answer after generation creates a new result revision; it does not mutate the viewed
  revision invisibly.
- Each viewed, claimed, and imported item retains the applicable Snapshot revision and source
  versions so differences remain explainable.
- A Snapshot is stale for import when its answers changed or a referenced governed source version
  is no longer accepted for that use. It must be labeled and reviewed, regenerated, or withheld
  under later owner policy; it is never silently treated as current.

## 5. Human control, identity, and claim

### 5.1 Confirmation boundary

Every answer and inference remains a proposal until a properly authorized authenticated user
confirms it for a selected target. The experience must:

- distinguish user-provided answers from inferred facts;
- identify inference rationale and source/version references at an appropriate level;
- show exactly what is proposed for import;
- allow correction, rejection, and item-level acceptance;
- preserve the viewed and submitted revisions; and
- avoid silent creation or overwrite of Business identity, Business DNA, permission, commercial,
  configuration, or operational facts.

AI and Rules may explain or propose. They cannot directly create or overwrite canonical Business
identity, Business DNA, or any consequential owner-controlled fact. This preserves
[ADR-014](../../ADR/ADR-014-human-control-over-recommendations-and-ai.md) and
[ADR-016](../../ADR/ADR-016-business-architect-governed-pipeline.md).

### 5.2 Registration and identity verification

An anonymous visitor may complete Discovery and see a preview without an account. Registration and
identity verification are required before final claim, canonical Workspace/Business creation, or
import. Questionnaire completion alone creates none of those entities.

BD-001 selects no OTP, magic-link, password, social-login, identity provider, factor, cookie,
storage, or recovery technology. Core Identity and Access must later approve the mechanism and
assurance policy because the Security Model explicitly leaves them deferred.

### 5.3 Conceptual claim rule

For MVP architecture, authorized control of a Discovery session requires all of the following:

1. a valid, unexpired, purpose-bound, one-time anonymous session credential;
2. verified control of the authenticated account;
3. continuity or recovery evidence accepted by future Security policy—possession of a copied token
   alone is insufficient;
4. an eligible, unclaimed session state;
5. atomic replay/double-claim protection; and
6. a successful server-side binding and Audit record.

Claim binds the temporary session to one authenticated User; it does not attach the data to a
Workspace or Business, prove Membership, or authorize import. Browser-provided user, Workspace,
Business, Business Unit, role, Permission, or analytics identifiers are never sufficient evidence.
Wrong-account, disputed, expired, replayed, or unverifiable attempts fail closed as `claim_blocked`
or `invalidated`, disclose no session content, and preserve only approved security/Audit evidence.

Claim and import are separate. A claimed but unimported session may resume only while policy-valid,
may be explicitly deleted where permitted, and must expire under a future approved policy rather
than remain linked indefinitely.

## 6. Workspace, Business, and import boundaries

### 6.1 Canonical organization creation

After authentication, verification, and claim, the user must create or select an authorized
Workspace context and then create or select an authorized Business context. Workspace, Business,
Business Unit, Branch, identity, Membership, and authorization boundaries remain Core-owned.

- A new Workspace is created only through its Core owner.
- A Business is created only through its Core owner and only when the user is authorized.
- Business Unit is never substituted for Business.
- Discovery never anonymously creates organization identities or operational records.
- Failure to establish an authorized target leaves the Snapshot unimported or routes to safe
  recovery; it never selects another tenant or creates an implicit target.

### 6.2 New and existing Business import

Import means submitting explicitly accepted evidence into the governed Business Architect pipeline
as provenance-bearing Candidate Fact inputs. It does not mean publishing Business DNA.

For a new or existing Business, import must:

1. name the selected target Business and revalidate current Workspace Membership, target lifecycle,
   and exact action Permission at execution;
2. show a field-by-field proposal, source type, Snapshot revision, and relevant source versions;
3. identify conflicts with existing Business facts, Business Architect drafts/Candidate Facts, and
   published Business DNA;
4. leave existing canonical data unchanged until each proposed item is explicitly accepted;
5. permit partial acceptance while recording deterministic per-item outcomes;
6. retain parallel provenance rather than silently coalescing conflicting evidence;
7. treat retry of the same accepted evidence idempotently and return the prior outcome rather than
   duplicating it;
8. stop, deny, or require reselection when the target is deleted, suspended, archived, changed, or
   no longer authorized; and
9. produce correlated claim/import/Audit evidence without storing secret credentials.

If a Business already has published Business DNA, accepted Discovery evidence starts a governed
review/draft path. It never modifies the published snapshot directly. A later merge/conflict
algorithm, exact Permission, rejection-retention policy, contract, and schema remain out of scope.

## 7. Persona and context outcomes

These are bounded routing outcomes, not a full Permission matrix. “Owner” and “Admin” labels do not
grant an operation by themselves; every import/create action still requires the exact approved
Permission and target-owner validation.

| Persona/context | Discovery | Claim | Target outcome | Import outcome | Safe denial/recovery |
|---|---|---|---|---|---|
| Anonymous visitor | May start, answer, preview, abandon, or delete eligible unclaimed data. | Must register and verify identity first. | No canonical target exists anonymously. | Not allowed anonymously. | Continue Path B, restart, delete, or let expire. |
| Newly registered user | May resume a valid session after verification. | Allowed only with required possession/continuity proof. | With no Workspace, follow Core Workspace creation; then create Business if authorized. | Only after explicit target and Permission. | Preserve claim within policy or delete; never auto-create from questionnaire completion. |
| Existing Workspace Owner | May create a proposal. | Subject to the same claim proof. | Must explicitly select a permitted Workspace and create/select Business. | Allowed only if the exact action Permission is granted; title alone is insufficient. | Deny or request a different authorized target. |
| Existing Workspace Admin | May create a proposal. | Subject to the same claim proof. | Must select one permitted Workspace/Business. | Allowed only if explicit scoped Permission permits create/import. | View-only or deny when the action Permission is absent. |
| Invited employee | May create a proposal but gains no client authority from the invitation label. | May claim only their own eligible session. | May view permitted contexts; no Business creation/import unless explicitly granted. | Default deny without exact scoped Permission. | Preserve proposal within policy, request an authorized actor, or delete. |
| User with multiple Workspaces | May create a proposal. | Subject to the same claim proof. | Must explicitly select one currently authorized Workspace, then one Business or permitted creation path; no inferred default. | Scoped only to the selected revalidated target. | Reselect or deny if context is invalid/suspended/changed. |
| Unauthorized or view-only user | May generate a non-canonical proposal if otherwise eligible. | Claim does not elevate access. | May view only what existing authority permits. | Creation, confirmation, or import is denied. | No data disclosure or fallback target; request authorized action through later governed UX. |
| Expired-session user | May start a new session or use direct Path B. | Expired session cannot be claimed. | No target is inferred or created. | Not allowed from expired evidence. | Disclose expiry without content leakage; restart. |

Consultant collaboration, partner/reseller delegation, and client ownership models are outside this
MVP decision. No such actor may act for a client merely by claiming a role or possessing a URL.

## 8. Conceptual state transitions and recovery

### 8.1 State model interpretation

The names below are **conceptual journey checkpoints**, not a final aggregate, enum, schema, or API.
They must not be collapsed into one overloaded implementation state machine. Later design must keep
at least Discovery progress, session lifecycle, identity/claim, and import outcome independently
observable, as recommended by [Preview Proposal §§11–13](./00-BUSINESS-DISCOVERY-PREVIEW-PROPOSAL.md).

Happy-path checkpoints:

```text
active
→ preview_ready
→ registration_required
→ identity_verified
→ claimed
→ imported
```

Alternative terminal or blocked outcomes:

```text
expired
abandoned
deleted
claim_blocked
invalidated
```

`import_failed` is an import outcome from which an authorized retry may be possible; it does not
unclaim or transfer the session.

### 8.2 State transition table

| Initial state | Triggering event | Resulting state | Canonical entities created | Allowed next action | Failure behavior |
|---|---|---|---|---|---|
| No session | Visitor starts Discovery after disclosure | `active` | None | Answer, save within policy, abandon, delete | Fail without account/tenant creation; offer Path B or restart. |
| `active` | Minimum answer set produces a valid limited/full result | `preview_ready` | None | View/correct/reject, continue to registration, abandon/delete | Pending/failure/insufficient output is labeled; retry/restart/Path B. |
| `preview_ready` | Visitor chooses to continue with the proposal | `registration_required` | None | Register/login and verify | Do not create Workspace/Business or expose account data. |
| `registration_required` | Core-approved authentication and required verification succeed | `identity_verified` | User/session only as owned by Core account flow; no Workspace/Business from Discovery | Prove session control and claim | Verification failure/expiry stays unclaimed; use approved recovery or Path B. |
| `identity_verified` | Server validates credential, continuity, expiry, state, and atomic uniqueness | `claimed` | Claim/Audit evidence only; no Workspace/Business/DNA | Select/create permitted Workspace and Business; review proposal | Wrong account, replay, copied token, expiry, or dispute becomes `claim_blocked`/`invalidated`; no content disclosure. |
| `claimed` | User lacks Workspace and is permitted to create one | `claimed` (target preparation) | Workspace only through Core-owned contract | Create/select Business if authorized | Preserve claimed state within policy; no implicit tenant creation or fallback. |
| `claimed` | User selects/creates permitted Business and accepts eligible items | `imported` for accepted items | Business only if separately created through Core; imported Candidate Fact evidence through Business Architect; no published DNA | Continue Business Architect review | Per-item failures are recorded; unaccepted items remain unchanged; no silent partial canonical overwrite. |
| `claimed` | Import is interrupted or owning contract fails | `import_failed` outcome; claim remains valid if policy permits | No unconfirmed Business/DNA change; any committed item has explicit recorded outcome | Safe idempotent retry or owner-directed recovery | Do not replay blindly, duplicate evidence, transfer target, or publish. |
| Any unclaimed live state | User abandons | `abandoned` | None | Delete or restart within policy | Expire according to policy; no contact/marketing reuse. |
| Any eligible unclaimed state | Verified deletion request using session control | `deleted` | None | Start new session or Path B | If control cannot be proved, disclose no data and use approved rights process. |
| Any live unclaimed/claimed state | Expiry policy reached | `expired` | None from expiry | Restart; claimed records handled by approved retention/Audit policy | No claim/import; no access through stale token. |
| Any state | Integrity/provenance corruption or security invalidation | `invalidated` | None | Restart or Security-approved recovery | Fail closed and retain only approved evidence. |

### 8.3 Recovery principles

- Browser refresh or accidental tab close may resume only with a valid, policy-permitted session;
  otherwise restart safely.
- Account created but identity not verified remains `registration_required`; no claim or canonical
  creation occurs.
- Verified account with an interrupted claim retries the atomic claim check; it never assumes the
  prior attempt failed.
- Already claimed sessions return the same authorized outcome to the same owner or fail without
  disclosure to anyone else.
- Duplicate registration follows Core Identity and Access recovery; Discovery does not create a
  second identity or disclose account existence.
- A token copied to another browser is insufficient by itself; future policy must require accepted
  continuity/recovery evidence or block the claim.
- Signing into a different account does not transfer a session; re-proof or restart is required.
- Import failure after claim preserves the claim and deterministic item outcomes, enabling a safe
  authorized retry within policy.
- Abandonment before registration creates no canonical customer record and no marketing consent.

Recovery must never weaken ownership verification, authorization, tenant isolation, or Audit.

### 8.4 Edge-case disposition

| Edge case | MVP disposition | Canonical effect | Later detail required |
|---|---|---|---|
| Expired session | Deny claim/import; offer restart or Path B. | None. | Expiry values and notices. |
| Stolen/copied token | Token alone is insufficient; require approved continuity/recovery proof or block without disclosure. | None. | Threat model and recovery mechanism. |
| Double claim | Atomic uniqueness returns the existing outcome only to the same authorized owner; otherwise block/Audit. | No duplicate claim or entity. | Idempotency key/window mechanics. |
| Wrong account | Do not transfer or reveal session; require correct-account recovery or restart. | None. | Identity conflict UX. |
| Multiple Workspaces | Require explicit selection of one currently authorized Workspace and target Business/create path. | Only owner-contract changes explicitly requested. | Selector UI and suspension/invitation cases. |
| Insufficient permission | Allow proposal/claim as applicable but deny creation/import; never infer authority from role label. | None from denied action. | Exact Permission catalog and escalation UX. |
| Existing Business conflict | Show parallel field-level proposal and existing value; require explicit item disposition. | Existing value unchanged until accepted through owner pipeline. | Conflict taxonomy and merge algorithm. |
| Partial import | Record accepted/rejected/failed outcomes per item with provenance; do not imply whole-Snapshot publication. | Only successfully accepted Candidate Fact inputs. | Contract and transaction boundaries. |
| Interrupted import | Preserve claim and committed item outcomes; retry idempotently when still authorized. | No duplicate or silent rollback/overwrite. | Retry and reconciliation mechanics. |
| Deletion request | Delete eligible unclaimed working data after control proof; reconcile claimed/Audit data under approved rights policy. | No Business/DNA deletion by Discovery. | Privacy/legal-hold/backup policy. |
| Direct signup without Discovery | Follow current account-first Path B with no Snapshot, claim, or import. | Normal Core-owned account/organization flow only. | None for ADR-042 MVP architecture. |

## 9. Data classification, consent, privacy, and analytics

### 9.1 Data classification table

The proposed “owning domain” entries for Discovery-specific data are intentionally provisional.
Governance must approve that ownership before ADR-042 acceptance; this table does not create a new
canonical owner.

| Data | Temporary or canonical | Anonymous or authenticated | Authoritative or proposed | Owning domain | Retention posture |
|---|---|---|---|---|---|
| Raw answer | Temporary | Anonymous before claim; claim-linked afterward | User-provided evidence, not canonical Business fact | **Proposed:** bounded Discovery responsibility; owner unresolved | Minimum purpose/state-based lifetime; delete/expire when eligible. |
| Inferred fact | Temporary | Anonymous before claim; claim-linked afterward | Proposed inference with rationale/source, never customer truth | **Proposed:** bounded Discovery responsibility; inference sources remain with their accepted owners | Same as source session/Snapshot; no unrelated reuse. |
| Discovery Snapshot | Temporary, versioned proposal | Anonymous before claim; claim-linked afterward | Proposed/non-canonical | **Proposed:** bounded Discovery responsibility; owner unresolved | Expire/delete by state and purpose; imported provenance handled separately. |
| Consent record | Temporary session evidence before claim; owner-controlled canonical compliance/Audit evidence only if later policy requires it | Anonymous-session-bound or authenticated, depending on event | Authoritative only that a disclosed choice occurred; not a Business fact or blanket legal basis | **Unresolved:** future Privacy/Discovery/Audit contract | Retain only as required by approved purpose, rights, and Audit/legal policy. |
| Claim record | Canonical security linkage/Audit evidence, not Business data | Authenticated | Authoritative claim outcome only | **Unresolved:** Core Identity and Access plus future approved claim boundary; Audit Service owns Audit Record | Policy-based, protected, append-only where it is Audit; no indefinite working-data retention implied. |
| Canonical Business fact | Canonical | Authenticated and authorized target context | Authoritative only after owner-controlled acceptance | Core Business/Organization owner for identity; applicable canonical Core owner for its fact | Governed canonical lifecycle, version, correction, and Audit policy. |
| Business DNA proposal | Canonical owner-managed pre-publication Candidate Fact/draft evidence; not published DNA | Authenticated and Business-scoped | Proposed until governed human review/publication | Core Business Architect; Business DNA Registry owns published Business DNA | Preserve provenance and review history under accepted Business Architect/DNA policy. |
| Analytics event | Non-canonical telemetry | Anonymous/pseudonymous before permitted linkage; authenticated only under approved purpose | Observational, never identity/authorization truth | Analytics/Observability intake as non-owning consumer | Minimized event inventory, purpose-specific expiry/aggregation; no raw answer content by default. |

### 9.2 Consent and privacy minimum

Before collection, the MVP must disclose that answers are temporarily stored, the purpose of
inference, expected expiry posture, and the fact that no canonical Business exists yet. It must:

- collect only data necessary for the stated Discovery purpose;
- keep anonymous Discovery data separate from canonical customer records until a valid claim;
- obtain explicit, versioned consent before claim/import, without treating participation as
  marketing consent;
- allow abandonment and deletion of eligible unclaimed sessions;
- support retention expiry rather than indefinite preservation;
- prohibit reuse for marketing, model learning, or another unrelated purpose without separate
  approved purpose and consent/legal basis;
- prohibit anonymous email delivery/export in this MVP; contact information belongs to the later
  Core account flow and is not implied marketing consent;
- prohibit support personnel from viewing answer/Snapshot content by default; any exceptional
  access requires separately approved purpose, least privilege, and Audit; and
- reconcile access, correction, deletion, anonymization, export, backup, legal hold, and Audit only
  through future Privacy/Legal and Security policy.

This document does not select a jurisdiction, legal basis, statutory notice, residency, processor,
encryption product, retention duration, deletion mechanism, or legal-hold rule. Those cannot be
inferred from generic architecture principles. Privacy/Legal must approve the data inventory,
purpose/legal basis, rights handling, and jurisdictional policy before ADR-042 acceptance.

### 9.3 Analytics boundary

Funnel measurement may record minimized events such as Discovery started, preview reached,
registration chosen, claim outcome category, and import outcome category. Before an approved claim
or separate consent, analytics must remain separated from canonical identity. Analytics IDs,
browser IDs, campaign parameters, and correlation IDs never establish session ownership, User
identity, Workspace Membership, Business authority, role, or Permission.

Raw answers, Snapshot content, secret session credentials, inferred sensitive attributes, and
tenant data do not enter ordinary analytics, logs, traces, support tooling, AI context, or learning.
Any later content-bearing secondary use requires its own approved purpose, minimization, access,
retention, and consent/legal basis.

## 10. Subscription, pricing, and product lifecycle

Completing, claiming, or importing Discovery does not:

- select a binding Plan or activate a subscription;
- create Workspace Entitlement or OS Subscription state;
- grant paid capability or product access;
- install, configure, activate, or make an Operating System Ready;
- make Core Workspace Ready;
- bypass Business Architect, Business DNA review, Recommendations, Product Hub, or OS-owned setup;
  or
- create billing, payment, pricing acceptance, or operational data.

Discovery may show explainable non-binding product or plan proposals, clearly separated from a
canonical Recommendation. In the recommended journey, Product Hub remains downstream of Business
Architect, Business DNA, and the governed Recommendation stage. Product Hub owns no provisional
Discovery truth, and existing readiness criteria remain unchanged.

## 11. MVP exclusions

The following are outside this MVP architecture decision:

- autonomous AI Business creation;
- paid Discovery;
- consultant collaboration;
- reseller ownership;
- shared multi-user anonymous sessions;
- advanced confidence scoring or numeric health/fit scores;
- setup-effort estimation;
- cross-Workspace automatic import;
- automatic merge into existing Business DNA;
- product or subscription activation;
- downstream selection rules for a non-recommended Operating System;
- OS configuration;
- operational data creation;
- detailed frontend design;
- API schema;
- database schema;
- infrastructure selection;
- implementation task planning;
- duplicate/historical document cleanup; and
- a full Permission, privacy, legal, commercial, or operational policy.

## 12. Open-question disposition

### 12.1 Classification rule

The source [Open Questions Register](./02-OPEN-QUESTIONS-REGISTER.md) remains unchanged and open.
“Closed” below means **recommended to be treated as closed for the ADR-042 MVP decision only if the
Human Architecture Authority approves BD-001**. It is not a claim that repository Governance has
already closed the question.

Categories:

- **Closed by recommended MVP baseline** — this document selects a bounded architecture answer.
- **Deferred, not blocking ADR-042 MVP review** — later architecture/documentation detail is useful
  but is not required to judge the MVP decision.
- **Still blocking ADR-042 acceptance** — human/owner approval is required before acceptance.
- **Implementation-policy question** — the accepted boundary may precede later mechanism/value
  selection; no technology or schema is chosen here.
- **Outside MVP** — deliberately excluded from this decision.

### 12.2 All 50 questions

| ID | Topic | BD-001 classification | Recommended disposition / evidence |
|---|---|---|---|
| OQ-GOV-001 | Freeze-first vs Genesis-ultimate precedence | **Still blocking ADR-042 acceptance** | No rule selected; formal Governance interpretation remains required. [§1.3](#13-repository-verification-limitation) |
| OQ-GOV-002 | Governed change class for the journey | **Still blocking ADR-042 acceptance** | Human Architecture Review must decide Genesis amendment/successor baseline/other governed path and affected manifest. [§14](#14-remaining-approval-gates-and-product-owner-decisions) |
| OQ-GOV-003 | Later Customer Journey v2 wave file scope | **Deferred, not blocking ADR-042 MVP review** | A later authorization must name the exact files after change-class resolution; BD-001 modifies none. |
| OQ-GOV-004 | Labeling legacy duplicate documents | **Outside MVP** | Historical cleanup/labeling is explicitly excluded. [§11](#11-mvp-exclusions) |
| OQ-PRD-001 | Discovery value and success criteria | **Deferred, not blocking ADR-042 MVP review** | Product research/measurement definitions follow architecture approval; minimization remains mandatory. |
| OQ-PRD-002 | Anonymous email timing | **Closed by recommended MVP baseline** | No anonymous email request/delivery/export in MVP; account contact remains in Core account flow. [§9.2](#92-consent-and-privacy-minimum) |
| OQ-PRD-003 | Existing User and existing-Business import | **Closed by recommended MVP baseline** | Permitted as proposal, with explicit authorized target and field-level import; no silent merge. [§6.2](#62-new-and-existing-business-import) and [§7](#7-persona-and-context-outcomes) |
| OQ-PRD-004 | Resume with no Workspace/Business | **Closed by recommended MVP baseline** | Follow Core creation/select flow and defer import until an authorized Business exists. [§6.1](#61-canonical-organization-creation) and [§7](#7-persona-and-context-outcomes) |
| OQ-PRD-005 | Skip, abandon, restart, replace | **Closed by recommended MVP baseline** | Skip uses Path B; abandon/delete/expiry are explicit; restart creates a separate session; no silent replacement. [§3](#3-journey-position-and-entry-paths), [§4.1](#41-temporary-anonymous-session), and [§8](#8-conceptual-state-transitions-and-recovery) |
| OQ-ONT-001 | Preview/Snapshot terms | **Closed by recommended MVP baseline** | Use provisional `DiscoverySnapshot`; do not use Business Health Snapshot; it remains non-canonical. [§4.2](#42-discoverysnapshot-working-concept) |
| OQ-ONT-002 | Answer/inference/evidence/import terms | **Closed by recommended MVP baseline** | Raw answer, inferred fact, Snapshot, claim, and import are distinct; canonical Candidate Fact terminology begins only at owner-controlled import. [§5](#5-human-control-identity-and-claim), [§6.2](#62-new-and-existing-business-import), and [§9.1](#91-data-classification-table) |
| OQ-ONT-003 | Product spelling governance | **Deferred, not blocking ADR-042 MVP review** | Preserve historical titles; naming normalization requires separate Product/Documentation Governance. |
| OQ-ID-001 | Identity-verification condition | **Closed by recommended MVP baseline** | Verification is required before final claim or canonical creation/import. [§5.2](#52-registration-and-identity-verification) |
| OQ-ID-002 | Account/verification/recovery mechanism | **Implementation-policy question** | Core Identity and Access selects mechanisms after threat/accessibility/privacy review; none is selected here. |
| OQ-ID-003 | Cookie/storage-free and cross-device recovery | **Implementation-policy question** | Architecture requires safe recovery but leaves device persistence and cross-device mechanism to approved policy. [§8.3](#83-recovery-principles) |
| OQ-AUT-001 | Exact import and evidence Permissions | **Still blocking ADR-042 acceptance** | The action/resource Permission and actors who may accept/reject/publish require owner approval; role names are insufficient. [§7](#7-persona-and-context-outcomes) |
| OQ-AUT-002 | Selector and active-context outcomes | **Closed by recommended MVP baseline** | Zero/one/multiple/invalid context outcomes require explicit current authorization and never infer a fallback. [§7](#7-persona-and-context-outcomes) |
| OQ-AUT-003 | Invited/consultant/partner/reseller authority | **Closed by recommended MVP baseline** | Invited employee defaults to no create/import without exact Permission; consultant/partner/reseller delegation is outside MVP. [§7](#7-persona-and-context-outcomes) and [§11](#11-mvp-exclusions) |
| OQ-SES-001 | Proof of anonymous-session control | **Closed by recommended MVP baseline** | Valid one-time session credential + verified account + approved continuity/recovery evidence + atomic binding; copied token alone is insufficient. [§5.3](#53-conceptual-claim-rule) |
| OQ-SES-002 | Duplicate/concurrent/expired/replayed claim | **Closed by recommended MVP baseline** | Atomic idempotent same-owner outcome; otherwise block/invalidate without disclosure; expired cannot claim. [§5.3](#53-conceptual-claim-rule) and [§8.2](#82-state-transition-table) |
| OQ-SES-003 | Multiple active sessions/replacement | **Closed by recommended MVP baseline** | Multiple independent sessions are permitted; no silent merge/replacement; explicit selection. [§4.1](#41-temporary-anonymous-session) |
| OQ-SES-004 | Persistence and expiry values | **Implementation-policy question** | State/purpose-based expiry is required; mechanism and numeric durations await Security/Privacy policy. |
| OQ-SES-005 | Concurrent anonymous edits | **Implementation-policy question** | Revisions must not mutate viewed output invisibly; concurrency/locking and reconciliation mechanism belong to later contract work. [§4.3](#43-result-quality-version-and-unsupported-cases) |
| OQ-SES-006 | Claimed but unimported session | **Closed by recommended MVP baseline** | Remain claim-linked only while policy-valid; later authorized import, eligible deletion, or expiry; never indefinite. [§5.3](#53-conceptual-claim-rule) |
| OQ-IMP-001 | Eligibility/retry/duplicate/partial import | **Closed by recommended MVP baseline** | Explicit accepted items only; per-item outcomes, provenance, idempotent retry, no publication. [§6.2](#62-new-and-existing-business-import) |
| OQ-IMP-002 | Existing draft/concurrent-editor conflicts | **Closed by recommended MVP baseline** | Preserve parallel provenance, flag conflict, require explicit item review; no automatic overwrite. [§6.2](#62-new-and-existing-business-import) |
| OQ-IMP-003 | Import against published Business DNA | **Closed by recommended MVP baseline** | Start governed review/draft Candidate Fact path; never edit published DNA directly. [§6.2](#62-new-and-existing-business-import) |
| OQ-IMP-004 | Invalid/changed/unauthorized target | **Closed by recommended MVP baseline** | Revalidate at execution, deny/reselect on failure, never fall back silently. [§6.2](#62-new-and-existing-business-import) |
| OQ-IMP-005 | Rejection authority and retention | **Still blocking ADR-042 acceptance** | Depends on exact Permission plus Privacy/Audit/legal-hold reconciliation; BD-001 does not invent it. [§9.2](#92-consent-and-privacy-minimum) |
| OQ-IMP-006 | Source versions and staleness at import | **Closed by recommended MVP baseline** | Preserve original Snapshot/source versions; label and review/regenerate/withhold stale evidence. [§4.3](#43-result-quality-version-and-unsupported-cases) and [§6.2](#62-new-and-existing-business-import) |
| OQ-PRV-001 | Classification, purpose/legal basis, consent separation | **Still blocking ADR-042 acceptance** | Architecture minimum is proposed, but Privacy/Legal must approve inventory, classification, purpose/legal basis, and consent separation. [§9.2](#92-consent-and-privacy-minimum) |
| OQ-PRV-002 | Retention/expiry periods by state | **Implementation-policy question** | State/purpose-based expiry is required; jurisdictional/configured duration values are not selected. |
| OQ-PRV-003 | Anonymous rights vs Audit/backup/legal hold | **Still blocking ADR-042 acceptance** | Privacy/Legal, Security, Audit, and Storage must approve proof and reconciliation policy. [§9.2](#92-consent-and-privacy-minimum) |
| OQ-PRV-004 | Anonymous email/export | **Closed by recommended MVP baseline** | Prohibited in MVP; account flow may later use contact data for its separately disclosed purpose. [§9.2](#92-consent-and-privacy-minimum) |
| OQ-PRV-005 | Residency/encryption/key/processor policy | **Implementation-policy question** | No infrastructure or jurisdiction selection; later approved Global/Security/Privacy policy must control. |
| OQ-PRV-006 | Data in telemetry/support/AI/learning | **Closed by recommended MVP baseline** | Metadata-minimized telemetry only by default; no raw content or unrelated secondary use without separate approval. [§9.3](#93-analytics-boundary) |
| OQ-SNP-001 | Pending/failed/limited Snapshot | **Closed by recommended MVP baseline** | Label state; retry/restart/Path B; limited or withheld result; no fabricated output or forced registration. [§4.3](#43-result-quality-version-and-unsupported-cases) |
| OQ-SNP-002 | Snapshot staleness | **Closed by recommended MVP baseline** | Answer/source-version change makes import freshness review necessary; label and review/regenerate/withhold. [§4.3](#43-result-quality-version-and-unsupported-cases) |
| OQ-SNP-003 | Viewed/claimed/imported revisions | **Closed by recommended MVP baseline** | Preserve immutable viewed revision and source/version links; edits generate a new revision. [§4.3](#43-result-quality-version-and-unsupported-cases) |
| OQ-SNP-004 | Unsupported/multi-model/missing knowledge | **Closed by recommended MVP baseline** | Explain coverage gap; limited/no guidance; minimum follow-up only; never force fit. [§4.3](#43-result-quality-version-and-unsupported-cases) |
| OQ-REC-001 | Provisional guidance vs Recommendation | **Closed by recommended MVP baseline** | Discovery output is presentation-only and non-binding, never canonical Recommendation. [§4.2](#42-discoverysnapshot-working-concept) and [§10](#10-subscription-pricing-and-product-lifecycle) |
| OQ-REC-002 | Confidence model | **Outside MVP** | Advanced confidence scoring/numeric claims are excluded. [§11](#11-mvp-exclusions) |
| OQ-REC-003 | Guidance staleness | **Closed by recommended MVP baseline** | Snapshot source/version change triggers label and review/regeneration/withholding; canonical Recommendation lifecycle is untouched. [§4.3](#43-result-quality-version-and-unsupported-cases) |
| OQ-REC-004 | Setup-effort estimate | **Outside MVP** | Setup-effort estimation is excluded; no estimate or model is authorized. [§11](#11-mvp-exclusions) |
| OQ-REC-005 | Business Health concept | **Closed by recommended MVP baseline** | Do not create/use Business Health for MVP; use non-canonical `DiscoverySnapshot`. [§4.2](#42-discoverysnapshot-working-concept) |
| OQ-ECO-001 | Core readiness effect | **Closed by recommended MVP baseline** | Discovery grants no readiness and changes no accepted criterion; existing evaluation remains downstream. [§10](#10-subscription-pricing-and-product-lifecycle) |
| OQ-ECO-002 | Product Hub/Marketplace recurrence | **Deferred, not blocking ADR-042 MVP review** | Boundaries remain inherited; detailed recurring navigation is later journey/product work. |
| OQ-ECO-003 | Downstream commercial/OS recovery | **Deferred, not blocking ADR-042 MVP review** | Route to owning lifecycle and preserve context; detailed trial/payment/setup recovery is outside the Discovery decision. |
| OQ-ECO-004 | Product Hub before canonical Recommendation | **Closed by recommended MVP baseline** | Product Hub stays downstream; Discovery proposal is not relabeled as Recommendation or Product Hub truth. [§10](#10-subscription-pricing-and-product-lifecycle) |
| OQ-ECO-005 | Selecting a non-recommended OS | **Outside MVP** | Downstream product-selection rules are excluded and existing authority remains unchanged. [§11](#11-mvp-exclusions) |

### 12.3 Classification totals

- **Closed by recommended MVP baseline (29):** OQ-PRD-002–005; OQ-ONT-001–002;
  OQ-ID-001; OQ-AUT-002–003; OQ-SES-001–003 and OQ-SES-006; OQ-IMP-001–004 and
  OQ-IMP-006; OQ-PRV-004 and OQ-PRV-006; OQ-SNP-001–004; OQ-REC-001, OQ-REC-003,
  and OQ-REC-005; OQ-ECO-001 and OQ-ECO-004.
- **Deferred, not blocking ADR-042 MVP review (5):** OQ-GOV-003, OQ-PRD-001,
  OQ-ONT-003, OQ-ECO-002, and OQ-ECO-003.
- **Still blocking ADR-042 acceptance (6):** OQ-GOV-001, OQ-GOV-002, OQ-AUT-001,
  OQ-IMP-005, OQ-PRV-001, and OQ-PRV-003.
- **Implementation-policy questions (6):** OQ-ID-002, OQ-ID-003, OQ-SES-004,
  OQ-SES-005, OQ-PRV-002, and OQ-PRV-005.
- **Outside MVP (4):** OQ-GOV-004, OQ-REC-002, OQ-REC-004, and OQ-ECO-005.

## 13. Conflict disposition

The source register remains unchanged. “Avoided” means this recommended baseline does not repeat
the unsafe interpretation; it does not erase a conflict between existing sources.

| Conflict | Recommended baseline avoids it? | Remains unresolved? | Blocks ADR-042 acceptance? | Later Governance action required |
|---|---|---|---|---|
| BDP-C01 — Freeze-first vs Genesis-ultimate | **No selection; boundary avoided** by not deciding precedence. | **Yes.** | **Yes.** | Formal Human Governance interpretation, then align affected authority artifacts without rewriting history. |
| BDP-C02 — frozen account-first vs pre-registration Discovery | **Partly:** Path B is preserved, but Path A is still a proposed change. | **Yes.** | **Yes.** | Human Architecture Review classifies the change, reconciles ADR-042, names affected sources, and later issues required successor authority/Freeze. |
| BDP-C03 — direct answers to Business DNA vs Candidate Fact pipeline | **Yes:** import only to governed Candidate Fact inputs; no direct DNA. | **Yes, as conflicting authority wording.** | **Yes.** | Human disposition of the conflicting journey wording and later ADR/source synchronization. |
| BDP-C04 — proposal-first lifecycle vs detailed docs in same wave | **Yes:** BD-001 is one bounded proposal decision; no detailed wave or implementation artifact. | Later-wave authorization remains open. | No, provided sequencing remains governed. | Separate approval and exact file manifest before any documentation wave. |
| BDP-C05 — unsupported numeric scores/setup-time claims | **Yes:** both are excluded. | Model question remains outside MVP. | No. | Separate future architecture/model review before any score or estimate. |
| BDP-C06 — Recommendation lifecycle vs provisional guidance | **Yes:** Snapshot/guidance is explicitly non-canonical and non-binding. | Wider terminology/lifecycle may remain open. | No for the bounded MVP. | Reconcile terminology in ADR-042; later Recommendation-owner review for any canonical extension. |
| BDP-C07 — missing anonymous session/claim/import/retention/privacy authority | **Partly:** conceptual boundaries are proposed without technology. | **Yes:** owner, legal/privacy, Permission, and mechanisms remain unapproved. | **Yes.** | Approve the bounded owner/contract boundary, Security threat model, Permission, and Privacy/Legal policy before ADR acceptance. |
| BDP-C08 — persona labels vs deferred permission/delegation | **Yes at principle level:** roles never imply authority; selectors reauthorize. | Exact Permission and delegation details remain open. | No for persona routing; OQ-AUT-001 independently blocks acceptance. | Permission-owner approval, then later detailed matrix/specification. |
| BDP-C09 — conditional verification vs deferred mechanisms | **Yes:** identity verification is universally required before final claim; mechanism neutral. | Mechanism/recovery policy remains open. | No for logical MVP architecture. | Core Identity/Security selects the approved mechanism before implementation authorization. |
| BDP-C10 — deferred privacy/retention/rights/residency/export/legal hold | **Partly:** minimum boundaries are proposed and exact law/values are not invented. | **Yes.** | **Yes.** | Privacy/Legal, Security, Audit, Storage, and Global owners approve classification, basis, rights reconciliation, and policy. |
| BDP-C11 — Product Hub coordination vs OS ownership | **Yes:** no OS configuration/operational write; Product Hub remains a downstream coordinator. | Detailed routing remains open. | No. | Later Product Hub/OS owner routing review, preserving accepted lifecycle boundaries. |
| BDP-C12 — duplicate/legacy journey/master docs | **Yes for selection:** current cited Genesis journey remains controlling; no historical file is altered. | Cleanup/labeling remains open. | No for ADR-042 decision content. | Separate documentation-governance inventory and historical labeling task. |
| BDP-C13 — Marketplace as recurring destination | **Yes by non-scope:** no Marketplace route is redesigned. | Recurring journey treatment remains open. | No. | Later Product Hub/Marketplace/navigation review. |
| BDP-C14 — canonical Nexoraxs identity/spelling | **Yes:** new prose uses current repository spelling while preserving titles/paths. | Formal spelling policy remains open. | No. | Separate Product/Documentation Governance decision. |
| BDP-C15 — Business Health Snapshot vs Business DNA Snapshot | **Yes:** Business Health is not used; `DiscoverySnapshot` is explicitly non-canonical. | Final glossary name remains subject to review. | No for bounded MVP architecture. | Human ontology review and later glossary registration; do not rewrite historical proposals. |

The conflicts that remain blocking are **BDP-C01, BDP-C02, BDP-C03, BDP-C07, and BDP-C10**.
This classification follows the evidence in
[Conflict and Open-Question Gate Map, §§2–3](./13-CONFLICT-AND-OPEN-QUESTION-GATE-MAP.md)
while applying the bounded recommendations in this document.

## 14. Remaining approval gates and Product Owner decisions

ADR-042 must not be accepted until the applicable human authorities decide at least:

1. **Authority precedence and change class:** resolve OQ-GOV-001/OQ-GOV-002 and BDP-C01/C02,
   including the exact affected-source manifest.
2. **Conflicting journey wording:** reconcile direct-answer language with the accepted Candidate Fact
   pipeline (BDP-C03) without modifying accepted history silently.
3. **Temporary-data and claim ownership:** name the accountable owner and governed contract boundary
   for anonymous answers, Snapshot, consent, claim, and import coordination (BDP-C07).
4. **Authorization:** approve the exact resource/action Permission and actors for target creation,
   import, accept/reject/correct, and later publication (OQ-AUT-001/OQ-IMP-005).
5. **Privacy and legal posture:** approve data classification, purpose/legal basis, consent
   separation, rights proof/reconciliation, Audit/backup/legal-hold interaction, and jurisdictional
   policy (OQ-PRV-001/OQ-PRV-003; BDP-C10).
6. **ADR reconciliation:** decide whether this baseline is approved as written, conditionally
   approved, or revised; then separately update/review ADR-042 without treating BD-001 approval as
   ADR acceptance.

The missing `docs/00-governance/CURRENT-AUTHORITY.md` is also a repository ambiguity requiring
Documentation Governance attention, but BD-001 neither recreates nor modifies it.

## 15. Governance effect and non-authorization

This document:

- **does not accept ADR-042**;
- **does not modify the current Customer Journey authority**;
- **does not amend or supersede a Freeze**;
- **does not authorize code, schema, API, UI, infrastructure, specification, planning, tasks, or
  implementation**;
- records one recommended MVP decision set for Human Approval;
- preserves all historical, proposed, accepted, and frozen source files unchanged; and
- grants the wider Business Discovery Preview proposal **no implementation authority**.

If Human Governance approves this decision, the next action is a **separate ADR-042 reconciliation
task**. Even after a later ADR-042 acceptance, separate authority synchronization, applicable
successor Freeze and readiness validation, approved feature specification, Constitution Check,
plan, tasks, contracts/policies, and explicit implementation authorization are still required.

Until every applicable gate is approved, the current account-first journey remains controlling and
Business Discovery Preview must not be implemented from this document or any other Proposed source.
