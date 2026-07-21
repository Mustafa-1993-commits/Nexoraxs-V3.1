# ADR-042: Pre-registration Business Discovery

## Status

Proposed

Review posture: **Proposed for Authority Review**

Date drafted: 2026-07-22

Principal decision: Whether Nexoraxs should add an optional, governed, pre-registration Business
Discovery Preview that remains outside formal Business DNA until separately authorized import and
review.

> This ADR is non-authoritative while Proposed. It does not amend or supersede Genesis, a Freeze,
> or an Accepted ADR, and it does not authorize implementation.

## Context

Nexoraxs is a Business Operating Intelligence Platform. Its current frozen Customer Journey is
account-first: a Visitor reaches the Marketing Website, creates an account or signs in, creates a
Workspace, creates a Business, completes the official Business Architect flow, publishes Core
Business DNA, receives Recommendations, reaches Product Hub, and then follows governed commercial
and Operating System lifecycles.

The existing architecture establishes that:

- Workspace is the customer and tenant boundary and may contain multiple Businesses.
- Business DNA belongs to exactly one Business and is software-independent.
- Business Architect is a resumable governed pipeline for one Workspace, one Business, and one
  initiating actor.
- raw input, Candidate Facts, inferred facts, review, publication, and versioned Business DNA are
  distinct.
- Recommendations are capability-first, explainable, optional, and governed.
- Product Hub composes owner projections and coordinates product discovery/handoff; it does not
  own Business DNA, canonical Recommendations, Operating System setup, or operational facts.
- `Core Workspace Ready` and `Operating System Ready` are separate.
- Workspace Entitlement, OS Subscription, installation, setup, configuration, activation,
  readiness, and operational access are distinct.
- authentication mechanisms, complete role/Permission catalogs, delegation, privacy/retention
  policy, confidence/scoring, health definitions, and exact setup-effort models remain partly
  deferred.

The proposed product opportunity is to demonstrate useful business understanding before account
creation without treating anonymous answers as canonical truth or creating an ungoverned product
funnel.

## Problem

The frozen account-first Customer Journey provides no governed pre-registration stage for
adaptive business understanding, a limited value summary, or later evidence reuse. Adding such a
stage affects more than acquisition UX. It raises architectural questions about anonymous data
ownership and lifecycle, identity and claim, target-Business authorization, evidence provenance,
Business Architect import, terminology, Recommendation semantics, Security/Privacy policy,
failure/recovery, and authority precedence.

A pre-registration experience designed without a durable decision could:

- create or imply Business DNA before a formal Business exists;
- bypass Business Architect review/publication;
- make Entry Intent or a product landing page manufacture fit;
- combine session claim with target-Business authorization;
- invent a role, Permission, verification mechanism, retention duration, or scoring formula;
- grant or imply Core or Operating System readiness;
- collapse Product Hub, Marketplace, Billing/Subscription, and Operating System ownership; or
- silently contradict the frozen Customer Journey.

The repository also contains an unresolved authority-precedence inconsistency: the Constitution
states a freeze-first order, while the Milestone Lifecycle, ADR governance, and Core Freeze say
Genesis remains ultimate authority. This ADR does not resolve that inconsistency.

## Decision

### Decision proposal

Subject to Architecture Review and explicit acceptance, Nexoraxs would recognize **Business
Discovery Preview** as an optional, pre-registration value demonstration.

The proposed experience would:

1. gather minimum necessary, non-canonical evidence through adaptive questions and permitted
   context;
2. distinguish visitor-provided answers, observed context, inferred assumptions, missing or
   contradictory evidence, and provenance;
3. when evidence is sufficient, present a non-canonical **Business Health Snapshot**, limited
   summary, or clearly labeled provisional guidance;
4. converge with the existing account path at Create Account or Sign In, while allowing a Visitor
   to skip Discovery entirely;
5. resolve identity verification conditionally under existing/future approved Identity authority;
6. separate proof of control of an anonymous Discovery session (**claim**) from authorization to
   attach eligible evidence to one selected formal Business (**import**);
7. import only eligible evidence, with provenance, into the official Business Architect pipeline
   as draft or Candidate Fact evidence; and
8. require existing authorized review, confirmation, correction, rejection, publication,
   Recommendation, and readiness rules to run at their governed points.

### Proposed journey boundary

```text
Visitor
→ Marketing Entry
├─ Start Business Discovery Preview
│  → Adaptive Discovery
│  → Non-canonical Snapshot or Limited Summary
│  → Save and Continue
│  → Create Account or Sign In
│
└─ Skip Discovery
   → Create Account or Sign In

→ Resolve Identity Verification Requirement
→ Create or Select Workspace
→ Create or Select Business
→ Resolve Discovery Session Claim, when applicable
→ Authorize and Import Discovery Evidence, when applicable
→ Continue Official Business Architect
→ Review, Confirm, Correct, or Reject Evidence
→ Publish Core Business DNA according to existing authority
→ Generate Recommendations according to existing authority
→ Evaluate Core Workspace Ready according to existing authority
→ Product Hub and authorized downstream journeys
```

Discovery remains optional. The Skip branch does not pass through Snapshot, claim, or import.
Marketplace remains a recurring authorized discovery/growth destination according to its existing
boundary, not merely the last node in one linear journey.

### Proposed conceptual state boundary

Anonymous Discovery would be reasoned about through independent conceptual dimensions rather than
one overloaded enum:

- Discovery Progress: examples include Not Started, In Progress, Completed, and Abandoned.
- Snapshot Status: examples include Not Requested, Pending, Generated, Limited Result, Failed,
  and Stale.
- Lifecycle Status: examples include Active, Expired, Deleted, and Anonymized.
- Claim Status: examples include Unclaimed, Claim Pending, Claimed, Claim Failed, and Claim
  Disputed.
- Import Status: examples include Not Eligible, Eligible, Import Pending, Imported, Import
  Failed, and Rejected.
- Replacement Status: examples include Current, Replaced, and Superseded by Newer Discovery.

These labels are proposal concepts only. Their exact names, transitions, terminal behavior,
concurrency, and policy relationships require approval. Replacement should be treated as a
relationship unless future approved authority decides otherwise.

## Decision Boundaries

If accepted as proposed, this decision would establish only the following durable boundaries:

- Discovery is optional and may occur before registration.
- Discovery is not Business Architect and an anonymous Discovery flow is not a Business Architect
  Session.
- Discovery Evidence is not Business DNA.
- A Business Health Snapshot is non-canonical presentation and not a Business DNA Snapshot.
- Provisional guidance is not a new canonical Recommendation state.
- Entry Intent may influence presentation but is not fit, confidence, Business DNA, or
  Recommendation evidence.
- Claim proves only authorized control of an anonymous Discovery session.
- Import is separate, requires a formal Business and current target-Business authorization, and
  cannot publish Business DNA.
- Imported evidence retains provenance and enters the governed pre-publication Business Architect
  path as draft or Candidate Fact evidence.
- Discovery does not create Workspace, Business, Workspace Membership, entitlement, subscription,
  installation, activation, or readiness.
- Existing `Core Workspace Ready` criteria are referenced, not changed.
- Product Hub, Marketplace, Billing/Subscription, and Operating System boundaries remain intact.
- Independent conceptual session dimensions are preferred to an overloaded linear enum.

This decision would not select a data owner for physical anonymous records, storage mechanism,
contract shape, retention period, claim proof, identity mechanism, Permission, scoring formula,
health model, setup-time model, or failure transition.

## Compatibility with Existing Authority

### Compatible inherited boundaries

The proposal is designed to preserve:

- [ADR-003](./ADR-003-workspace-customer-multi-business-boundary.md),
  [ADR-004](./ADR-004-genesis-organization-hierarchy.md), and
  [ADR-005](./ADR-005-business-dna-business-scoped-software-independent.md): formal organization
  hierarchy and Business-scoped Business DNA.
- [ADR-013](./ADR-013-capability-first-explainable-recommendations.md) and
  [ADR-014](./ADR-014-human-control-over-recommendations-and-ai.md): capability-first,
  explainable, optional Recommendations and human authority.
- [ADR-015](./ADR-015-infer-before-asking-conversational-configuration.md): infer before asking and
  conversational configuration.
- [ADR-016](./ADR-016-business-architect-governed-pipeline.md): resumable governed pipeline,
  Candidate Facts, provenance, review, and publication separation.
- [ADR-018](./ADR-018-separate-core-and-os-readiness.md): separate Core and OS readiness.
- [ADR-019](./ADR-019-product-hub-discovery-and-os-handoff.md) and
  [ADR-020](./ADR-020-product-hub-composition-not-data-ownership.md): Product Hub composition and
  OS setup handoff.
- [ADR-023](./ADR-023-workspace-subscription-business-unit-operation.md) through
  [ADR-026](./ADR-026-standard-operating-system-lifecycle.md): commercial/operational lifecycle
  and OS ownership separation.
- [ADR-027](./ADR-027-marketplace-bounded-context-within-core.md) and
  [ADR-028](./ADR-028-immutable-marketplace-assets-scoped-state.md): Marketplace boundary and
  scoped customer state.
- [ADR-034](./ADR-034-explicit-tenant-and-resource-scope.md): explicit scope for protected
  operations.
- [ADR-037](./ADR-037-context-preserving-navigation.md),
  [ADR-038](./ADR-038-append-only-audit-history.md), and
  [ADR-040](./ADR-040-core-organization-identity-os-operational-data.md): context-preserving
  navigation, critical Audit, and owner boundaries.

### Incompatible or unresolved boundaries

- The optional pre-registration branch conflicts with the account-first sequence in the frozen
  [Genesis Customer Journey](../../01-genesis/11-CUSTOMER-JOURNEY.md).
- Genesis language that every answer updates Business DNA is in tension with the accepted
  Candidate Fact/review/publication pipeline when applied literally to anonymous Discovery.
- Authority precedence is inconsistent across the
  [Constitution](../../../.specify/memory/constitution.md),
  [Milestone Lifecycle](../MILESTONE-LIFECYCLE.md),
  [ADR governance](./README.md), and
  [Core Platform Freeze](../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md).
- Anonymous-session claim/import and detailed Privacy/Security policy do not yet have approved
  authority.
- Business Health, confidence, scoring, conflict, uncertainty, partial results, and setup-effort
  models remain deferred.

## Known Conflicts

The authoritative conflict record is maintained in the proposal package's
[Authority and Impact Crosswalk](../proposals/business-discovery-preview/01-AUTHORITY-AND-IMPACT-CROSSWALK.md#4-conflict-register).
The conflicts are:

1. BDP-C01 — Freeze-first versus Genesis-ultimate precedence.
2. BDP-C02 — Frozen account-first journey versus pre-registration Discovery.
3. BDP-C03 — Direct-answer-to-Business-DNA wording versus Candidate Fact pipeline.
4. BDP-C04 — Proposal-first lifecycle versus detailed documentation in the same wave.
5. BDP-C05 — Unsupported numeric scores and setup-time claims.
6. BDP-C06 — Canonical Recommendation lifecycle versus provisional guidance.
7. BDP-C07 — Missing anonymous session, claim, import, retention, and privacy authority.
8. BDP-C08 — Persona labels versus deferred permissions and delegation.
9. BDP-C09 — Conditional verification versus deferred mechanisms.
10. BDP-C10 — Deferred privacy/data-lifecycle policy.
11. BDP-C11 — Product Hub coordination versus Operating System ownership.
12. BDP-C12 — Duplicate or legacy journey and master-architecture documents.
13. BDP-C13 — Marketplace as a recurring destination.
14. BDP-C14 — Canonical Nexoraxs product-identity terminology.
15. BDP-C15 — Business Health Snapshot versus Business DNA Snapshot.

No human-decision conflict is resolved by this Proposed ADR.

## Consequences

### Positive consequences

- Visitors could receive meaningful evidence-based value before registration.
- Registration could become a way to save and continue value rather than the first value gate.
- The formal Business and Business-scoped Business DNA boundary would remain intact.
- Later Business Architect effort could be reduced without bypassing review/publication.
- Claim and import would be visibly separate, reducing authorization ambiguity.
- Evidence provenance, inference labels, correction, and staleness would become explicit journey
  concerns.
- The proposal would avoid forcing every persona through a Prospective Owner journey.
- Capability-first reasoning would remain prior to products, plans, Marketplace Assets, or AI.
- Orthogonal conceptual state dimensions would avoid misleading lifecycle coupling.

### Negative consequences

- The acquisition journey and frozen documentation would require a governed architecture change.
- Anonymous evidence creates substantial Security, Privacy, lifecycle, support, and operational
  complexity before a tenant context exists.
- Claim and import add new failure, dispute, concurrency, replay, authorization, and audit concerns.
- Snapshot/provisional-guidance terminology may confuse users unless carefully reviewed and
  localized.
- Evidence can become stale between collection, Snapshot, claim, import, and Business Architect
  review.
- Later implementation would cross several logical owners and require explicit contracts without
  collapsing ownership.
- Conversion benefits are unproven and must not justify excessive collection or false precision.

## Risks

| Risk | Required treatment before acceptance or implementation |
|---|---|
| Authority path is selected informally | Resolve OQ-GOV-001 and OQ-GOV-002 through Governance. |
| Anonymous output appears canonical | Approve collision-safe terminology and explicit non-canonical UX. |
| Session claim enables account takeover or cross-user reassignment | Approve proof, replay, concurrency, dispute, expiry, and recovery policy. |
| Claim is treated as Business import authorization | Require a separate current target-Business authorization decision. |
| Evidence overwrites draft or published Business DNA | Approve conflict/versioning/review rules; never direct-write. |
| Retention or deletion is guessed | Approve data classification, purpose, rights, lifecycle, residency, and legal-hold policy. |
| Numeric output produces false precision | Prohibit numbers until an Accepted explainable model exists. |
| Provisional guidance becomes product-first Recommendation | Preserve capability-first order and keep guidance outside the canonical Recommendation lifecycle unless separately accepted. |
| Persona becomes role | Resolve actions only through canonical Authorization Context and owner policy. |
| Product Hub absorbs OS setup | Preserve Accepted Product Hub/OS boundaries and readiness separation. |
| Detailed documents or code proceed before approval | Enforce Milestone Lifecycle and stop after the Wave 1 package. |

## Security and Privacy Implications

The proposed decision would introduce anonymous evidence collection and therefore require, before
implementation:

- approved purpose, data classification, minimization, notice, and legal basis;
- explicit separation of Discovery participation, service communication, analytics permission,
  and marketing consent;
- secure same-device and any cross-device recovery/claim proof;
- protection from enumeration, interception, replay, duplicate/concurrent claim, dispute, and
  silent reassignment;
- current target-Business authorization at import, not merely authentication or historical claim;
- policy for retention, expiry, deletion, anonymization, export, correction, residency, legal
  hold, backup, and support access;
- minimized and purpose-bound logs, analytics, traces, errors, prompts, AI context, and Audit;
- auditable consequential operations where approved policy requires them; and
- Arabic/English, RTL/LTR, accessibility, safe failure, and recovery behavior.

This ADR selects none of the mechanisms or policy values above. Anonymous participation is not
marketing consent.

## Data Ownership and Provenance Implications

While Proposed, this ADR creates no new canonical data owner.

If accepted, a later approved architecture must identify the logical owner of temporary anonymous
Discovery evidence without transferring ownership of:

- User identity, Authentication, or Workspace Membership from Core Identity and Access;
- Workspace/Business identity from Core Organization Registry;
- Candidate Facts and review workflow from Core Business Architect;
- Business DNA from Core Business DNA Registry;
- Decisions/Recommendations from their existing governed owners;
- Product composition from Product Hub;
- Marketplace state from Marketplace;
- commercial state from Billing/Subscription owners; or
- operational setup, readiness, and facts from the applicable Operating System.

Eligible imported evidence would retain source, time, original answer versus inference,
assumptions, applicable Snapshot/Rules/Knowledge version references, transformation history, and
review outcome as approved. Claim would not alter evidence classification. Import would not erase
anonymous provenance or publish Business DNA. Corrections and rejections would follow future
approved provenance, Audit, retention, and privacy policy.

## Alternatives Considered

### Mandatory Account First

Retain the current journey without pre-registration value. This remains the authoritative baseline
while the ADR is Proposed. It avoids anonymous claim/import complexity but does not address the
proposed value-before-commitment opportunity.

### Discovery as Business Architect

Rejected as a proposal alternative because Business Architect requires one selected formal
Business and an authorized governed pipeline context.

### Discovery Publishes Business DNA

Rejected because anonymous evidence cannot own or publish Business-scoped Business DNA and must
not bypass review/provenance.

### Product-Specific Discovery Only

Rejected because Entry Intent or a landing page must not manufacture fit, and Capabilities and
business understanding precede product options.

### Direct Dashboard after Sign-up

Rejected because it bypasses formal Business context, Business Architect, Business DNA,
Recommendations, readiness, commercial, installation, and setup states and risks an empty
dashboard.

### Entry Intent Determines Recommendation

Rejected because Entry Intent is presentation context, not Recommendation evidence.

### One Linear Anonymous-session Enum

Rejected because progress, Snapshot, lifecycle, claim, import, and replacement can change
independently.

### Claim and Business Import as One Indistinguishable Action

Rejected because proof of session control does not grant authority over any formal Business.

### No Persistence or Import

Retained as an option for future review. It reduces privacy and claim complexity but may reduce
resume value and later Business Architect effort. This ADR does not select it.

## Dependencies

1. Resolution of authority precedence and the change classification.
2. Proposal Architecture Review across Product, Architecture, Enterprise UX, Identity and Access,
   Security, Privacy/Legal, Data Governance, Recommendation/Business Brain, Product Hub,
   Marketplace, Commercial, and Operating System ownership.
3. Disposition of the terminology, identity, claim, import, privacy, Snapshot, confidence,
   Recommendation, Marketplace, commercial, and readiness questions in the
   [Open Questions Register](../proposals/business-discovery-preview/02-OPEN-QUESTIONS-REGISTER.md).
4. Explicit approval of a named proposal version and later documentation-wave scope.
5. If Accepted, authorized changes to the applicable Genesis/Core/Glossary/Freeze sources and
   readiness validation.
6. Separate implementation authorization and Spec Kit artifacts after architecture authority is
   complete.

## Open Questions

The following groups block disposition at different gates:

- OQ-GOV-001 through OQ-GOV-004 — precedence, change path, later waves, and legacy sources.
- OQ-PRD-001 through OQ-PRD-005 — value, email timing, existing Users, context gaps, and
  skip/restart behavior.
- OQ-ONT-001 through OQ-ONT-003 — proposed terms and product-name governance.
- OQ-ID-001 through OQ-ID-003 — conditional verification, mechanisms, storage-free operation,
  and cross-device recovery.
- OQ-AUT-001 through OQ-AUT-003 — import/confirmation Permissions, selectors, and delegated
  client work.
- OQ-SES-001 through OQ-SES-006 — claim proof, concurrency/replay, multiple sessions,
  persistence/expiry, concurrent edits, and claimed-not-imported lifecycle.
- OQ-IMP-001 through OQ-IMP-006 — eligibility/idempotency, draft/published conflicts, Business
  lifecycle, rejection/provenance, and version changes.
- OQ-PRV-001 through OQ-PRV-006 — classification, consent, retention, rights, export/email,
  residency, and secondary-system use.
- OQ-SNP-001 through OQ-SNP-004 — failure/limited results, staleness, versioning, and unsupported
  evidence.
- OQ-REC-001 through OQ-REC-005 — guidance/Recommendation semantics, confidence, freshness,
  setup effort, and Business Health.
- OQ-ECO-001 through OQ-ECO-005 — readiness evaluation, Marketplace/Product Hub, downstream
  recovery, pre-official presentation, and non-recommended selection.

## Approval Requirements

ADR-042 may become Accepted only after:

1. Architecture Governance resolves the precedence inconsistency and classifies the required
   Genesis/Freeze change path.
2. The Business Discovery Preview Proposal receives a formal, non-modifying Architecture Review.
3. All proposal-blocking questions are decided or explicitly accepted as conditions through an
   authorized process.
4. Product, Enterprise UX, Identity and Access, Security, Privacy/Legal, Data Governance,
   Business Architect/Business DNA, Business Brain/Recommendation, Product Hub/Marketplace,
   Commercial/Billing, and Operating System owners review their boundaries.
5. The proposal decision, conflicts, risks, deferrals, and affected-authority manifest receive
   explicit human approval.
6. The ADR status is explicitly changed from Proposed to Accepted through ADR governance.

Acceptance of the proposal alone would not automatically accept ADR-042. Acceptance of ADR-042
would not automatically authorize detailed documentation, authority edits, a Freeze, readiness,
or implementation.

## Supersession Impact if Later Accepted

While Proposed, ADR-042 supersedes nothing.

If later Accepted, it would change the authoritative interpretation that the customer acquisition
journey is account-first only by adding an optional pre-registration branch. The exact documents
and clauses amended or superseded—and whether a Genesis revision, successor Core baseline,
successor Freeze, or combination is required—must be determined by OQ-GOV-001, OQ-GOV-002, and
the approving Architecture Review. Existing Accepted ADRs listed under Compatibility are intended
to remain intact; any actual conflict with an Accepted ADR must be explicitly named and governed
before acceptance.

Historical documents must remain available and must not be rewritten to conceal the change.

## Explicit Non-implementation Statement

This ADR creates no implementation contract. It defines no API, Event, schema, table, field,
route, component, service, package, storage or cookie mechanism, token, deployment, migration,
Permission grant, role, retention duration, scoring formula, setup-time model, readiness rule,
test, or runtime behavior. No application or implementation work is authorized while ADR-042 is
Proposed.

## Related Documents

### Proposal package

- [Business Discovery Preview Proposal](../proposals/business-discovery-preview/00-BUSINESS-DISCOVERY-PREVIEW-PROPOSAL.md)
- [Authority and Impact Crosswalk](../proposals/business-discovery-preview/01-AUTHORITY-AND-IMPACT-CROSSWALK.md)
- [Open Questions Register](../proposals/business-discovery-preview/02-OPEN-QUESTIONS-REGISTER.md)

### Controlling and relevant authority

- [NexoraXS Constitution](../../../.specify/memory/constitution.md)
- [Architectural Milestone Lifecycle](../MILESTONE-LIFECYCLE.md)
- [ADR Governance](./README.md)
- [Canonical Glossary](../glossary/GLOSSARY.md)
- [Core Platform Freeze](../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md)
- [Business Brain Freeze](../../99-architecture-freeze/BUSINESS-BRAIN-FREEZE-v1.0.md)
- [Genesis Business DNA](../../01-genesis/03-BUSINESS-DNA.md)
- [Genesis Ontology](../../01-genesis/10-NEXORAXS-ONTOLOGY.md)
- [Genesis Customer Journey](../../01-genesis/11-CUSTOMER-JOURNEY.md)
- [Genesis Product Hub](../../01-genesis/13-PRODUCT-HUB.md)
- [Genesis Subscription Model](../../01-genesis/14-SUBSCRIPTION-MODEL.md)
- [Genesis Operating System Lifecycle](../../01-genesis/16-OPERATING-SYSTEM-LIFECYCLE.md)
- [Genesis Marketplace Architecture](../../01-genesis/17-MARKETPLACE-ARCHITECTURE.md)
- [Core Platform Architecture](../../02-core-platform/02-CORE-PLATFORM-ARCHITECTURE.md)
- [Core Domain Model](../../02-core-platform/03-DOMAIN-MODEL.md)
- [Core Data Ownership](../../02-core-platform/04-DATA-OWNERSHIP.md)
- [Core Permission Model](../../02-core-platform/05-PERMISSION-MODEL.md)
- [Core Security Model](../../02-core-platform/08-SECURITY-MODEL.md)
