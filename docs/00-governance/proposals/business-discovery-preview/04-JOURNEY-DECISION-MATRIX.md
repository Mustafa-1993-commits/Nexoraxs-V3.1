# Business Discovery Journey Decision Matrix

| Metadata | Value |
|---|---|
| Version | v0.1 |
| Status | **Proposed for Authority Review** |
| Date | 2026-07-22 |
| Review owner | Nexoraxs Architecture Governance |
| Reviewed Wave 1 commit | `53183fd48cb1828dd0424a41b1194729d82c5616` |
| Human review evidence | [Human Architecture Review Decision](./HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-1.md) |
| Journey proposal | [Customer Journey v2 Proposal](./03-CUSTOMER-JOURNEY-V2-PROPOSAL.md) |
| Related ADR | [ADR-042](../../ADR/ADR-042-pre-registration-business-discovery.md) — **Proposed** |

> **Non-authoritative review-aid notice:** This matrix is a proposal-level routing review aid. It
> is not an approved rules engine, decision table, state machine, interaction contract,
> implementation specification, test oracle, or persistence model. Outcomes identify choices and
> safe boundaries for human review; they do not select deferred policy.

> **Conceptual-state notice:** Discovery Progress, Snapshot Status, Lifecycle Status, Claim Status,
> Import Status, and Replacement relationship/status remain independent conceptual dimensions.
> Labels are examples only, unreserved, non-canonical, non-persistent, and not approved API terms,
> schema values, or state-machine contracts.

> **Package-wide logical-owner disclaimer:** Every Logical Owner or ownership-handoff label in the
> Wave 2 package is a review construct only. It does not define or change canonical domain
> ownership, service ownership, bounded contexts, data ownership, deployment ownership, or
> implementation responsibility. Controlling Accepted authority remains unchanged.

> **Package-wide identifier disclaimer:** `JY`, `JD`, and `EC` identifiers are review
> cross-references only. They are not workflows, state machines, APIs, persistence models, runtime
> behavior, contracts, tests, or implementation specifications.

## 1. Matrix Use

Each decision ID is stable for Wave 2 review. `Known inputs` means information a future governed
decision may need, not fields or a contract. `Possible outcomes` lists reviewable routes rather
than an algorithm. `Classification` uses:

- **Inherited** — the cited boundary is already controlled by Accepted authority; this label does
  not make the row's proposed routing authoritative.
- **Proposed** — Wave 1 authorized it only for Wave 2 documentation review.
- **Unresolved** — an Open Question or conflict prevents selection.

No row is intended to define a Permission name, identity mechanism, scoring formula, retention
value, retry protocol, or implementation default.

## 2. Acquisition and Discovery Decisions

| ID | Decision point | Known inputs | Assumptions rejected for proposal review | Possible review outcomes | Authority / dependency | Logical owner (review construct) | Customer-visible consequence | Proposed failure-safe boundary | Audit / traceability consideration | Classification |
|---|---|---|---|---|---|---|---|---|---|---|
| JD-001 | Start versus Skip Discovery | Entry source; customer choice; permitted presentation context | Entry Intent proves fit; Discovery is mandatory | Start optional preview; Skip directly to Create Account or Sign In | Wave 1 §§4, 8; BDP-C02; OQ-PRD-001 | Marketing Website | Customer explicitly chooses the branch | If choice cannot be persisted, keep both paths available without implying completion | Preserve permitted entry/choice context only under future policy | Proposed; conflict open |
| JD-002 | Evidence sufficient, insufficient, or contradictory | Visitor-provided answers; permitted observations; inferences; missing/conflicting evidence; applicable version references | A completion percentage or number proves sufficiency | Sufficient for working-term presentation; minimum follow-up; limited result; continue without Snapshot | OQ-SNP-001, OQ-SNP-004, OQ-REC-002; BDP-C05 | Proposed Discovery capability | Receives an explainable result or a clear limitation | The proposal would not fabricate confidence, fit, or canonical truth | Preserve source/inference/conflict provenance as future policy allows | Unresolved |
| JD-003 | Snapshot, limited summary, or continue without Snapshot | JD-002 outcome; presentation freshness; customer choice | Snapshot is Business DNA, Recommendation, or readiness | Business Health Snapshot (working term); Limited Summary; Continue without Snapshot | OQ-SNP-001 through OQ-SNP-004; OQ-ONT-001; BDP-C15 | Proposed Discovery capability | Sees non-canonical value or continues without it | Withhold or limit result when unsafe/unsupported; account-first remains available | Record generating source/version references only if later approved | Proposed routes; terminology unresolved |
| JD-004 | Anonymous persistence available or unavailable | Customer choice; client capability; future consent/purpose; lifecycle policy | Cookies/storage exist; lack of storage blocks account-first path | Future-approved resume; non-persistent continuation; explicit restart; Create Account or Sign In | OQ-ID-003, OQ-SES-004, OQ-PRV-001, OQ-PRV-002 | Proposed Discovery capability / Privacy / Identity | Resume may be available or clearly unavailable | The proposal would not weaken identity/privacy or silently track to preserve progress | A later persistence decision would need to cite purpose and lifecycle policy | Unresolved |
| JD-005 | Resume permitted, expired, stale, or replaced | Future-approved session reference; lifecycle; version/freshness; replacement relationship | A link/device proves ownership; latest session silently replaces another | Resume; limited/stale view; restart; Create Account or Sign In; future-approved recovery | OQ-PRD-005, OQ-SES-002 through OQ-SES-005, OQ-SNP-002 | Proposed Discovery capability / Identity | Continues, restarts, or receives a safe explanation | The proposal would not expose another session/account or silently reassign | Trace original/replacement relationship only under approved policy | Unresolved |

## 3. Identity and Formal Context Decisions

| ID | Decision point | Known inputs | Assumptions rejected for proposal review | Possible review outcomes | Authority / dependency | Logical owner (review construct) | Customer-visible consequence | Proposed failure-safe boundary | Audit / traceability consideration | Classification |
|---|---|---|---|---|---|---|---|---|---|---|
| JD-006 | Create Account versus Sign In | Customer choice; whether identity already exists as resolved safely | Email or Entry Intent reveals account existence | Create Account; Sign In; safe recovery; exit | OQ-ID-002; Core Security §5.4 | Core Identity and Access | Enters the appropriate identity flow without account disclosure | Generic safe failure and recovery | Authentication activity follows accepted/future Audit authority | Inherited identity boundary; mechanism unresolved |
| JD-007 | Identity verification required or not required | Authenticated context; future-approved risk/policy result | Verification is universal, optional by convenience, or satisfied by Discovery | Required approved verification/recovery; already satisfied/not required; stop safely | OQ-ID-001, OQ-ID-002; BDP-C09 | Core Identity and Access | Continues or is asked to resolve identity under approved policy | The proposed path would not continue protected work while required proof is unresolved | Record only policy-required evidence; mechanism deferred | Unresolved |
| JD-008 | No, one, or multiple authorized Workspaces | Current authenticated identity; Membership/lifecycle; authorized context candidates | Authentication, last-used context, or identifier grants Workspace access | Create under existing authority; confirm one; select among authorized; recover/deny | OQ-PRD-004, OQ-AUT-002; ADR-003, ADR-034, ADR-037 | Workspace Management / Identity and Access / Navigation | Creates or selects an explicit Workspace context | The proposal would not choose an unauthorized/default target and would preserve a safe exit | Context changes and protected actions follow accepted Audit policy | Inherited boundary; routing detail unresolved |
| JD-009 | No, one, or multiple authorized Businesses | Selected Workspace; current Business lifecycle and authorization | Workspace hierarchy grants Business access; Workspace is Business | Create under existing authority; confirm one; select; recover/deny | OQ-PRD-003, OQ-PRD-004, OQ-AUT-002; ADR-004, ADR-005, ADR-034 | Organization Registry / Authorization owner | Creates or selects an explicit Business | The proposed path would defer import until one formal, current, authorized Business exists | Preserve selected context and decision trace under accepted policy | Inherited boundary; routing detail unresolved |

## 4. Claim Decisions

| ID | Decision point | Known inputs | Assumptions rejected for proposal review | Possible review outcomes | Authority / dependency | Logical owner (review construct) | Customer-visible consequence | Proposed failure-safe boundary | Audit / traceability consideration | Classification |
|---|---|---|---|---|---|---|---|---|---|---|
| JD-010 | Claim applicable or not applicable | Whether Discovery was skipped; possible anonymous session; authenticated context; customer intent | Every authenticated User has a session to claim | No claim; request claim resolution; decline/defer claim | OQ-SES-001, OQ-SES-006 | Core Identity and Access / proposed Discovery owner | Proceeds with or without claim | Continue official journey without Discovery Evidence | Trace applicability/outcome only if later policy requires it | Proposed; mechanism unresolved |
| JD-011 | Claim success, failure, expiry, dispute, duplicate, replay, or already claimed | Future-approved proof; session lifecycle; prior claim outcome; concurrency | Possession of an identifier proves control; failed claim reveals other owner | Claimed; return same deterministic outcome; safe denial; dispute/recovery; continue without import | OQ-SES-001, OQ-SES-002, OQ-SES-006; BDP-C07 | Core Identity and Access | Receives a safe claim outcome without Business attachment | The proposal would not silently reassign, disclose another account, or import | Consequential claim outcomes require future-approved trace/Audit treatment | Unresolved |

## 5. Import and Business Architect Decisions

| ID | Decision point | Known inputs | Assumptions rejected for proposal review | Possible review outcomes | Authority / dependency | Logical owner (review construct) | Customer-visible consequence | Proposed failure-safe boundary | Audit / traceability consideration | Classification |
|---|---|---|---|---|---|---|---|---|---|---|
| JD-012 | Evidence import eligible or ineligible | Claim outcome where applicable; source/version/provenance; lifecycle/freshness; target exists | Claimed means eligible; completed Discovery means importable | Eligible; ineligible; stale/review required; decline/defer | OQ-IMP-001, OQ-IMP-006; BDP-C03, BDP-C07 | Core Business Architect / proposed Discovery owner | May proceed to authorization or continue without evidence | The proposal would not silently transform or discard source evidence | Eligibility reasoning would remain explainable under future policy | Unresolved |
| JD-013 | Target-Business authorization allowed or denied | Authenticated actor; selected Workspace/Business; Membership/Permission/resource/lifecycle context | Persona, hierarchy, claim, invitation, or client ID grants authority | Allow one import action; deny; require context recovery; decline | OQ-AUT-001 through OQ-AUT-003; ADR-034 | Target resource authorization owner / Core Business Architect | Imports only when currently allowed | Denial reveals no unauthorized Business detail and continues without import | Protected decision and consequential outcome follow Audit authority | Inherited authorization boundary; Permission unresolved |
| JD-014 | Import success, failure, retry, duplicate, partial, or stale evidence | Eligible evidence; current authorization; provenance/version; prior outcome | Retry is safe automatically; partial result means publication | Imported as draft/Candidate Fact evidence; deterministic prior outcome; fail; future-approved retry; continue without import | OQ-IMP-001, OQ-IMP-006 | Core Business Architect | Continues with imported evidence or without it | The proposed failure path would publish nothing and preserve source/current canonical state | Import attempts/outcomes require future idempotency and Audit decision | Unresolved |
| JD-015 | Existing Business Architect Session absent or in progress | Selected Business; existing official Session state; actor authorization | Discovery is an official Session; import creates a completed Session | Start/resume official pipeline; enrich `in_progress`; create review obligation | ADR-016; OQ-IMP-001, OQ-IMP-002 | Core Business Architect | Enters/resumes governed Business Architect | The proposed integration would not jump to `published`, `analyzed`, or `completed` | Official pipeline retains accepted provenance/state evidence | Inherited pipeline; integration proposed |
| JD-016 | Imported evidence agrees, conflicts, or duplicates existing draft evidence | Candidate Facts; source/provenance; current draft/review context | Newest wins; imported always overrides; duplicate can be dropped without trace | Present agreement; flag conflict; retain distinguishable evidence; reject/defer under future policy | OQ-IMP-002, OQ-IMP-005 | Core Business Architect | Reviews explainable agreement/conflict/duplicate | The proposal would not silently merge or overwrite | Preserve source/disposition trace under approved policy | Unresolved |
| JD-017 | Imported evidence conflicts with published Business DNA | Published Business DNA Snapshot; new evidence; version/provenance; current authorization | Discovery overwrites published facts or creates a new version automatically | Disallow; create review requirement/draft; select eligible subset under future approval | OQ-IMP-003, OQ-IMP-005; BDP-C03 | Core Business Architect / Business DNA owner | The proposed path would route through formal review or continue without import | Published Business DNA remains unchanged | Preserve conflict and later review/publication history as governed | Unresolved |
| JD-018 | User confirms, corrects, or rejects imported evidence | Review Checkpoint; current authorization; evidence/provenance | Original anonymous answer equals current confirmation; rejection erases history automatically | Confirm; correct; reject some/all; defer review | OQ-AUT-001, OQ-IMP-005 | Core Business Architect | Exercises human control over evidence | The proposed path would not publish until accepted criteria are met | Review actor, source, and disposition follow accepted/future Audit policy | Inherited review boundary; Permission/retention unresolved |
| JD-019 | Official Business Architect completion and publication checks | Official pipeline state; reviewed Candidate Facts; validation; existing authoritative requirements | Import or Discovery completion satisfies publication | Resume required step; `publish_ready`; publish under existing owner; block safely | ADR-016; Core Architecture §3; OQ-ECO-001 | Core Business Architect / Business DNA owner | Continues review or receives governed publication result | The proposal would not treat false publication or skipped validation/review as a safe outcome | Accepted pipeline and publication provenance apply | Inherited |

## 6. Recommendation, Readiness, and Downstream Decisions

| ID | Decision point | Known inputs | Assumptions rejected for proposal review | Possible review outcomes | Authority / dependency | Logical owner (review construct) | Customer-visible consequence | Proposed failure-safe boundary | Audit / traceability consideration | Classification |
|---|---|---|---|---|---|---|---|---|---|---|
| JD-020 | Governed Recommendation generation or insufficient authority/evidence | Published Business DNA; governed Knowledge/Rules/Decision inputs; applicable authority | Snapshot, provisional guidance, Entry Intent, or import triggers canonical Recommendation | Generate through accepted process; remain unavailable/insufficient; resume governed review | ADR-013, ADR-014; OQ-REC-001 through OQ-REC-003 | Business Brain / Recommendation owner | Sees governed Recommendation or a clear governed absence | The proposal would not relabel provisional guidance or fabricate fit | Recommendation evidence, versions, rationale, and lifecycle follow owner authority | Inherited boundary; detailed semantics unresolved |
| JD-021 | Evaluate existing Core Workspace Ready criteria | Authenticated context; Workspace; selected Business; reviewed/published Core Business DNA; initial Recommendations from governed inputs | Discovery, claim, import, or publication alone grants readiness | Ready → Product Hub; Not ready → resume required Core step | ADR-018; Core Architecture §9.1; OQ-ECO-001 | Core readiness owner | Enters Product Hub or resumes Core work | The proposal would not introduce a generic onboarding-complete substitute | Readiness evaluation references pinned governed inputs | Inherited; timing confirmation open |
| JD-022 | Product Hub handoff and Marketplace revisit | Current authorized context; readiness; governed Recommendations; owner projections; customer choice | Product Hub owns source facts; Marketplace is terminal-only; access is implicit | Product Hub; Marketplace recurring visit; continue exploring; owner-specific recovery | ADR-019, ADR-020, ADR-027, ADR-028; OQ-ECO-002, OQ-ECO-004, OQ-ECO-005 | Product Hub / Marketplace | Discovers governed options and may return during growth | Explain stale/partial state and reauthorize context | Preserve owner/source and navigation context | Inherited boundaries; routing proposed/unresolved |
| JD-023 | Subscription, installation, setup, activation, or OS failure | Owner-provided commercial/installation/setup/readiness state; current context | Subscription implies Permission, installation, activation, readiness, or access | Route to Billing/Subscription, Product Hub, Marketplace, or OS recovery owner; continue exploring | ADR-018 through ADR-028; OQ-ECO-003 | Applicable commercial, Marketplace, Product Hub, or OS owner | Resumes the failed owner-specific step | The proposal would not change Business DNA, Recommendation evidence, or Core readiness | Owner records failure/recovery under accepted/future Audit rules | Inherited ownership; detailed recovery unresolved |

## 7. Privacy, Rights, and Delegated-context Decisions

| ID | Decision point | Known inputs | Assumptions rejected for proposal review | Possible review outcomes | Authority / dependency | Logical owner (review construct) | Customer-visible consequence | Proposed failure-safe boundary | Audit / traceability consideration | Classification |
|---|---|---|---|---|---|---|---|---|---|---|
| JD-024 | Anonymous or authenticated deletion/export request | Request context; future-approved identity proof; data classification/lineage; legal/Audit constraints | Session identifier proves requester; deletion/export is immediate or universal | Acknowledge and route under future policy; request proof; deny safely; continue account-first independently | OQ-PRV-002 through OQ-PRV-005; ADR-038 | Privacy/Legal / Security / data owner / Audit | Receives a policy-governed response when available | The proposal would not permit unauthorized disclosure, export, or deletion | Rights handling would preserve required decision/Audit trace under future policy | Unresolved |
| JD-025 | Consultant, partner, reseller, or invited-user path | Authenticated identity; invitation/Membership/delegation relationship; target context; current authorization | Archetype or commercial relationship grants ownership or Permission | Authorized journey; require client action/context; deny; continue without protected action | OQ-AUT-001 through OQ-AUT-003 | Identity and Access / client Business authorization owner | Sees only currently authorized actions and destinations | The proposal would not infer claim/import/publication authority | Relationship and consequential decisions follow future-approved Audit/revocation policy | Inherited explicit-authorization principle; model unresolved |

## 8. Decision Preservation Summary

| Preservation rule | Covered decisions |
|---|---|
| Discovery is optional and account-first remains available | JD-001, JD-003 through JD-005 |
| Business Health Snapshot (working term) remains non-canonical | JD-002, JD-003, JD-020 |
| Claim and import remain separate | JD-010 through JD-014 |
| Formal Business and current authorization precede import | JD-008, JD-009, JD-012, JD-013 |
| Candidate Fact/review/publication boundary remains governed | JD-014 through JD-019 |
| Provisional guidance remains outside canonical Recommendation lifecycle | JD-003, JD-020 |
| Existing Core and OS readiness remain separate | JD-021, JD-023 |
| Persona labels do not create roles or Permissions | JD-008, JD-009, JD-013, JD-025 |
| Privacy, lifecycle, identity mechanisms, and scoring stay unresolved | JD-002 through JD-007, JD-011, JD-014, JD-024 |

## 9. Review Boundary

This matrix must not be translated directly into code, configuration, a policy engine, test cases,
database records, API contracts, schemas, route guards, Events, cookies, tokens, or workflow
states. It may be used only for Human Wave 2 Architecture Review and any later bounded step that
review explicitly authorizes.

## 10. Related Documents

- [Human Architecture Review Decision](./HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-1.md)
- [Wave 1 Proposal](./00-BUSINESS-DISCOVERY-PREVIEW-PROPOSAL.md)
- [Wave 1 Crosswalk](./01-AUTHORITY-AND-IMPACT-CROSSWALK.md)
- [Open Questions Register](./02-OPEN-QUESTIONS-REGISTER.md)
- [Customer Journey v2 Proposal](./03-CUSTOMER-JOURNEY-V2-PROPOSAL.md)
- [ADR-042 — Proposed](../../ADR/ADR-042-pre-registration-business-discovery.md)
- [Core Platform Architecture](../../../02-core-platform/02-CORE-PLATFORM-ARCHITECTURE.md)
- [Core Domain Model](../../../02-core-platform/03-DOMAIN-MODEL.md)
- [Core Permission Model](../../../02-core-platform/05-PERMISSION-MODEL.md)
- [Core Security Model](../../../02-core-platform/08-SECURITY-MODEL.md)
