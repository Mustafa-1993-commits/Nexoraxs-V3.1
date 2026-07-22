# ADR-042 Human Architecture Review

| Metadata | Value |
|---|---|
| Review status | **Completed** |
| Reviewed ADR | [ADR-042 — Pre-registration Business Discovery](../ADR/ADR-042-pre-registration-business-discovery.md) |
| Reviewer authority | Human Architecture Authority |
| Review type | Architecture and Governance Disposition |
| Date | 2026-07-22 |
| ADR revision reviewed | Reconciled Proposed revision from commit `6321dfb542f5be9dd43740353653c204acbe58fe` (blob `d3e972ef966fbbf0429b9cab12fc4e8661d7d2bb`) |
| Branch/commit basis | `main` at `b4eb066e0d1f2e5027ad4f24491810b386f31d15` |
| Implementation authorization | **None** |
| Freeze modification | **None** |
| Journey modification | **None** |
| Code impact | **None** |

## 1. Executive Conclusion

### Approved for Accepted status

ADR-042 is internally coherent and contains no unresolved blocking architecture issue. It adds an
optional material branch without replacing the account-first journey; preserves canonical
ownership, tenant isolation, human control, Business Architect Candidate Fact review, and Business
DNA publication boundaries; and keeps implementation expressly unauthorized. This review
authorizes only the ADR status transition from `Proposed` to `Accepted`.

The accepted decision does not silently amend the current Customer Journey or an Architecture
Freeze. The current account-first source remains controlling until the separately governed
Customer Journey synchronization, Freeze successor or amendment, and readiness work required by
[ADR-042, “Governance and Implementation Gates”](../ADR/ADR-042-pre-registration-business-discovery.md#governance-and-implementation-gates)
is completed.

## 2. Scope Reviewed

This review covered:

- the complete reconciled ADR-042 architecture decision, journeys, ownership, claim,
  authorization, Candidate Fact, privacy, retention, recovery, commercial, readiness, and
  non-implementation boundaries;
- the approved Product Owner/Human decision inputs in
  [BD-001](../proposals/business-discovery-preview/15-BUSINESS-DISCOVERY-MVP-ARCHITECTURE-DECISION.md)
  and
  [BD-002](../proposals/business-discovery-preview/16-BUSINESS-DISCOVERY-REMAINING-ARCHITECTURE-DECISIONS.md);
- the historical open-question and conflict evidence in the
  [Open Questions Register](../proposals/business-discovery-preview/02-OPEN-QUESTIONS-REGISTER.md)
  and
  [Conflict and Open Question Gate Map](../proposals/business-discovery-preview/13-CONFLICT-AND-OPEN-QUESTION-GATE-MAP.md);
- ADR lifecycle and architecture change control;
- applicable Accepted ADRs, Genesis journey authority, Core Platform ownership/permission/security
  sources, and Core Platform and Business Brain Freezes; and
- the consistency and acceptance-readiness dimensions in section 4.

Outside this review are Customer Journey or source synchronization, register updates, Freeze
amendment/successor work, readiness validation, exact Security/Permission/Privacy/Identity/
retention policies, specifications, contracts, plans, tasks, implementation, deployment, and
commercial or operational activation.

`docs/00-governance/CURRENT-AUTHORITY.md` was checked but does not exist at the reviewed commit.
No authority conclusion in this review relies on that absent file.

## 3. Authority Basis

| Authority level | Sources used | Review use |
|---|---|---|
| Frozen architecture | [Core Platform Freeze §§2, 5, and 7](../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md#2-frozen-scope); [Business Brain Freeze §§7–13 and 18](../../99-architecture-freeze/BUSINESS-BRAIN-FREEZE-v1.0.md#7-governing-authorities) | Controls the currently frozen ownership, security, Business DNA, Business Brain, readiness, and change-control scope. A material additive change requires an Accepted ADR, Architecture Review, updated Freeze, and readiness validation. |
| Accepted ADR authority | [ADR-003](../ADR/ADR-003-workspace-customer-multi-business-boundary.md#decision), [ADR-004](../ADR/ADR-004-genesis-organization-hierarchy.md#decision), [ADR-005](../ADR/ADR-005-business-dna-business-scoped-software-independent.md#decision), [ADR-014](../ADR/ADR-014-human-control-over-recommendations-and-ai.md#decision), [ADR-016](../ADR/ADR-016-business-architect-governed-pipeline.md#decision), [ADR-018](../ADR/ADR-018-separate-core-and-os-readiness.md#decision), [ADR-034](../ADR/ADR-034-explicit-tenant-and-resource-scope.md#decision), [ADR-038](../ADR/ADR-038-append-only-audit-history.md#decision), and [ADR-040](../ADR/ADR-040-core-organization-identity-os-operational-data.md#decision) | Tests canonical hierarchy, ownership, human control, Candidate Fact/DNA separation, explicit resource scope, Audit history, and commercial/OS boundaries. |
| Governance process | [ADR lifecycle and Review Workflow](../ADR/README.md#adr-lifecycle); [Milestone Lifecycle §§2, 5, 6, and 8](../MILESTONE-LIFECYCLE.md#2-governing-rules) | Defines the `Proposed` to `Accepted` transition and requires review, explicit approval, updated Freeze, and readiness for material architecture change. |
| Genesis foundation | [Genesis Constitution Principles 6, 7, and 16](../../01-genesis/02-CONSTITUTION.md#principle-6); [Genesis Customer Journey, “Journey Overview” and Phases 2–8](../../01-genesis/11-CUSTOMER-JOURNEY.md#journey-overview) | Supplies foundational explainability, infer-before-asking, human-control principles and the current account-first journey that remains unchanged in this task. |
| Approved milestone sources | [Core Data Ownership §§3 and 5](../../02-core-platform/04-DATA-OWNERSHIP.md#3-principles), [Core Permission Model §§3 and 5](../../02-core-platform/05-PERMISSION-MODEL.md#3-principles), and [Core Security Model §§3 and 5](../../02-core-platform/08-SECURITY-MODEL.md#3-principles) | Tests unique write ownership, Authentication/Authorization separation, current target scope, secret handling, tenant isolation, data minimization, Audit, and safe failure. |
| Product Owner/Human decision input | [BD-001 decision posture and evidence](../proposals/business-discovery-preview/15-BUSINESS-DISCOVERY-MVP-ARCHITECTURE-DECISION.md#1-decision-posture-and-evidence); [BD-002 baseline approval and approved decisions](../proposals/business-discovery-preview/16-BUSINESS-DISCOVERY-REMAINING-ARCHITECTURE-DECISIONS.md#2-approval-of-the-bd-001-baseline) | Approved decision input for reconciliation and this review. These sources were not treated as Accepted ADR authority. |
| Proposed/historical evidence | [Open Questions Register](../proposals/business-discovery-preview/02-OPEN-QUESTIONS-REGISTER.md), [Conflict and Open Question Gate Map](../proposals/business-discovery-preview/13-CONFLICT-AND-OPEN-QUESTION-GATE-MAP.md), and related Business Discovery proposal records | Preserves issue provenance and shows later synchronization needs. These sources were not treated as implementation authority or as overriding Accepted/Frozen sources. |

For this reconciliation, the scoped precedence in
[ADR-042, “Scoped authority precedence”](../ADR/ADR-042-pre-registration-business-discovery.md#scoped-authority-precedence-for-this-reconciliation)
is acceptable because it preserves Freeze scope, Genesis foundation, historical records, and
explicit conflict governance, while expressly declining to rewrite repository Governance
globally.

## 4. Review Matrix

| Review dimension | Result | Evidence | Finding | Blocking? | Required follow-up |
|---|---|---|---|---|---|
| 1. Authority alignment | Pass with non-blocking follow-up | [ADR Context and scoped precedence](../ADR/ADR-042-pre-registration-business-discovery.md#accepted-and-frozen-authority); [Core Freeze §7](../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md#7-change-control) | ADR-042 preserves current sources and uses the required ADR/review path; it does not claim to amend a Freeze or globally rewrite Governance. | No | AR-042-F01, AR-042-F02, AR-042-F03 |
| 2. Scope clarity | Pass | [ADR Decision](../ADR/ADR-042-pre-registration-business-discovery.md#decision); [Explicit Non-implementation Statement](../ADR/ADR-042-pre-registration-business-discovery.md#explicit-non-implementation-statement) | Optional pre-registration Discovery architecture is bounded; technology, policy values, delivery artifacts, and runtime behavior are excluded. | No | None for acceptance. |
| 3. Journey compatibility | Pass with non-blocking follow-up | [ADR Journey Paths](../ADR/ADR-042-pre-registration-business-discovery.md#journey-paths); [Genesis journey](../../01-genesis/11-CUSTOMER-JOURNEY.md#journey-overview) | Path B preserves the current account-first journey. Path A is an additive material branch whose source synchronization remains explicit. | No | AR-042-F01, AR-042-F03 |
| 4. Domain ownership | Pass | [ADR Ownership](../ADR/ADR-042-pre-registration-business-discovery.md#ownership); [Core Data Ownership §5.2](../../02-core-platform/04-DATA-OWNERSHIP.md#52-canonical-source-of-truth-map) | Discovery owns temporary responsibility only; all canonical owners and write boundaries remain explicit and singular. | No | None for acceptance. |
| 5. Identity and claim security | Pass with non-blocking follow-up | [ADR Identity verification and atomic claim](../ADR/ADR-042-pre-registration-business-discovery.md#identity-verification-and-atomic-claim); [Core Security §§5.4–5.7](../../02-core-platform/08-SECURITY-MODEL.md#54-authentication) | Verified identity, atomic binding, replay/double-claim defense, secret handling, and fail-closed behavior are mandatory; mechanisms remain properly deferred. | No | AR-042-F04 |
| 6. Authorization and tenant isolation | Pass with non-blocking follow-up | [ADR Workspace and Business selection](../ADR/ADR-042-pre-registration-business-discovery.md#workspace-and-business-selection); [Core Permission §§3 and 5.8](../../02-core-platform/05-PERMISSION-MODEL.md#3-principles); [ADR-034](../ADR/ADR-034-explicit-tenant-and-resource-scope.md#decision) | Claim grants no tenant authority; explicit targets and current target-scoped Permission are required and revalidated. | No | AR-042-F05 |
| 7. Candidate Fact and Business DNA integrity | Pass | [ADR Human control pipeline](../ADR/ADR-042-pre-registration-business-discovery.md#human-control-and-mandatory-candidate-fact-pipeline); [ADR-016](../ADR/ADR-016-business-architect-governed-pipeline.md#decision) | Discovery output can enter only as provenance-bearing Candidate Fact input; direct or silent Business DNA publication is prohibited. | No | None for acceptance. |
| 8. Human control | Pass | [ADR Human control pipeline](../ADR/ADR-042-pre-registration-business-discovery.md#human-control-and-mandatory-candidate-fact-pipeline); [ADR-014](../ADR/ADR-014-human-control-over-recommendations-and-ai.md#decision) | User-provided and inferred facts are distinguished and support correction, rejection, partial acceptance, and governed review. | No | None for acceptance. |
| 9. Privacy and data minimization | Pass with non-blocking follow-up | [ADR Privacy purpose and classification](../ADR/ADR-042-pre-registration-business-discovery.md#approved-architecture-purpose); [Core Security §§3.7 and 5.17](../../02-core-platform/08-SECURITY-MODEL.md#37-minimize-and-separate-sensitive-data) | Purpose is narrow, secondary use requires separate authority, sensitive data is minimized, and ordinary telemetry/prompts/training are prohibited. | No | AR-042-F06 |
| 10. Retention, deletion, Audit, backup, and legal hold | Pass with non-blocking follow-up | [ADR Rights, Audit, backups, and legal hold](../ADR/ADR-042-pre-registration-business-discovery.md#rights-audit-backups-and-legal-hold); [ADR-038](../ADR/ADR-038-append-only-audit-history.md#decision) | Architectural hierarchy is complete; jurisdictional periods, backup values, rights process, and legal-hold procedure remain policy work. | No | AR-042-F06 |
| 11. Recovery and failure handling | Pass with non-blocking follow-up | [ADR Recovery outcomes and state checkpoints](../ADR/ADR-042-pre-registration-business-discovery.md#recovery-outcomes); [Core Security §5.20](../../02-core-platform/08-SECURITY-MODEL.md#520-security-invariants) | Required failure cases fail closed without weakening proof, isolation, authorization, expiry, or Audit. Detailed mechanisms remain deferred. | No | AR-042-F04 |
| 12. Commercial and entitlement separation | Pass | [ADR Commercial boundaries](../ADR/ADR-042-pre-registration-business-discovery.md#commercial-readiness-and-operating-system-boundaries); [ADR-018](../ADR/ADR-018-separate-core-and-os-readiness.md#decision) | Discovery creates no Plan, subscription, entitlement, billing, payment, or paid access effect. | No | None for acceptance. |
| 13. Readiness and OS separation | Pass | [ADR Commercial/readiness/OS boundaries](../ADR/ADR-042-pre-registration-business-discovery.md#commercial-readiness-and-operating-system-boundaries); [Core Freeze §5.4](../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md#54-product-hub-and-lifecycle) | Discovery does not mark Core or OS readiness, configure an OS, or create operational data. | No | AR-042-F03 before implementation. |
| 14. Observability boundaries | Pass with non-blocking follow-up | [ADR Classification and handling](../ADR/ADR-042-pre-registration-business-discovery.md#classification-and-handling); [Core Security §§5.7 and 7.5](../../02-core-platform/08-SECURITY-MODEL.md#57-token-strategy) | Minimized funnel measurement is allowed, but identifiers and content cannot become identity, authorization, or unrestricted telemetry. | No | AR-042-F07 |
| 15. Implementation-boundary discipline | Pass | [ADR Explicit Non-implementation Statement](../ADR/ADR-042-pre-registration-business-discovery.md#explicit-non-implementation-statement) | No API, schema, mechanism, UI, plan, task, code, or runtime behavior is approved, and acceptance alone grants none. | No | AR-042-F08 |
| 16. Governance completeness | Pass with non-blocking follow-up | [ADR Governance gates](../ADR/ADR-042-pre-registration-business-discovery.md#governance-and-implementation-gates); [Milestone Lifecycle §§5 and 8](../MILESTONE-LIFECYCLE.md#5-adr-usage) | ADR review/status disposition is complete; all source, Freeze, readiness, policy, and delivery gates remain explicit. | No | AR-042-F01 through AR-042-F08 |
| 17. Internal consistency | Pass | [ADR Decision](../ADR/ADR-042-pre-registration-business-discovery.md#decision), [Ownership](../ADR/ADR-042-pre-registration-business-discovery.md#ownership), and [Compatibility](../ADR/ADR-042-pre-registration-business-discovery.md#compatibility-and-preserved-records) | No material contradiction exists among the optional journey, ownership, claim, import, privacy, lifecycle, and governance sections. | No | None for acceptance. |
| 18. Terminology consistency | Pass with non-blocking follow-up | [ADR DiscoverySnapshot definition](../ADR/ADR-042-pre-registration-business-discovery.md#discoverysnapshot); [ADR-004](../ADR/ADR-004-genesis-organization-hierarchy.md#decision); [ADR-005](../ADR/ADR-005-business-dna-business-scoped-software-independent.md#decision) | Workspace, Business, Business Unit, Candidate Fact, Business DNA, and Recommendation meanings are preserved; `DiscoverySnapshot` is explicitly provisional. | No | Final implementation/domain name and glossary/source synchronization through AR-042-F01/F08. |
| 19. Link and evidence integrity | Pass | [ADR Related Documents](../ADR/ADR-042-pre-registration-business-discovery.md#related-documents); this review section 3 | Material statements trace to existing repository files and headings; link validation passed. | No | Keep links synchronized in later source updates. |
| 20. Acceptance readiness | Pass | [ADR lifecycle](../ADR/README.md#adr-lifecycle); sections 4–7 of this review | Every blocking criterion passes. Remaining items are policy, synchronization, readiness, specification, or implementation gates allowed to follow ADR acceptance. | No | Approve `Accepted` status only; retain every downstream gate. |

## 5. Blocking Findings

**No blocking architecture findings remain for ADR acceptance.**

No `AR-042-Bxx` finding is issued.

## 6. Non-blocking Follow-ups

| ID | Follow-up | Why it does not block ADR acceptance |
|---|---|---|
| AR-042-F01 | Publish the governed Customer Journey successor or amendment and synchronize every identified affected authority source. | ADR-042 preserves the account-first source and does not claim current Journey synchronization; the work is required before implementation. |
| AR-042-F02 | Synchronize the Open Questions Register and Conflict and Open Question Gate Map with the accepted decision while preserving their historical records. | The reconciled ADR contains the decisions and provenance; stale register statuses do not create a contradiction inside the ADR. |
| AR-042-F03 | Complete the required Freeze amendment or successor and readiness validation. | [Core Freeze §7](../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md#7-change-control) requires ADR acceptance and review before the updated Freeze; those later gates remain implementation-blocking. |
| AR-042-F04 | Approve the Security threat model plus Identity, session-control, claim, and recovery policy. | ADR-042 fixes the architectural invariants while mechanisms, factors, lifetimes, abuse controls, and recovery proof remain intentionally deferred. |
| AR-042-F05 | Approve the logical-action Permission catalog, exact Permission identifiers, role mapping, and target-scoped enforcement policy. | Authentication/Authorization separation, deny-by-default posture, and current owner checks are already mandatory; catalog detail is later policy. |
| AR-042-F06 | Obtain Privacy/Legal approval for classification, jurisdictional legal basis, rights, residency, retention, deletion, backups, legal hold, encryption, key management, and support access. | ADR-042 establishes purpose limitation and safe architecture boundaries without inventing jurisdiction-specific conclusions or values. |
| AR-042-F07 | Approve the minimized analytics/observability inventory, redaction, correlation, access, retention, and consent rules. | The ADR already prohibits secret/content leakage and use of analytics as identity or authorization evidence. |
| AR-042-F08 | Complete the feature specification, Constitution Check, contracts, implementation plan, tasks, test obligations, and explicit implementation authorization. | ADR acceptance is an architecture-decision gate, not delivery authorization. |

## 7. Acceptance Criteria Evaluation

- [x] Discovery-first is optional.
- [x] The account-first path is preserved.
- [x] The anonymous session remains temporary and non-canonical.
- [x] `DiscoverySnapshot` remains provisional and non-canonical.
- [x] Verified identity is required before claim.
- [x] Claim binds only to one verified User.
- [x] Workspace selection or Core-owned creation is explicit.
- [x] Business selection or Core-owned creation is explicit.
- [x] Current target authorization is revalidated when import executes.
- [x] Imported evidence enters the Business Architect Candidate Fact pipeline.
- [x] Direct Business DNA publication is prohibited.
- [x] Field-level human review is mandatory.
- [x] Partial acceptance is supported.
- [x] Provenance and source versions are preserved.
- [x] Privacy purpose is limited to preview, claim, and optional authorized import.
- [x] Participation, storage, claim/import, account, privacy, marketing, analytics, and secondary-use decisions are separated.
- [x] Eligible temporary data is deletable and expires under approved policy.
- [x] Audit evidence is minimized and excludes secret session credentials.
- [x] Restored backups reapply deletion tombstones or equivalent suppression before activation.
- [x] Legal hold requires approved legal authority and documented scope.
- [x] Discovery has no subscription effect.
- [x] Discovery has no entitlement effect.
- [x] Discovery has no Core or OS readiness effect.
- [x] Discovery has no OS installation, configuration, activation, or access effect.
- [x] Discovery creates no operational data.
- [x] ADR acceptance provides no implementation authorization.

**Acceptance criteria result: 26 of 26 pass.**

## 8. Governance Disposition

ADR-042 is **Approved for Accepted status**. This disposition authorizes only the status transition
and acceptance metadata/history entry in ADR-042.

It does not authorize implementation or a Customer Journey, Freeze, readiness, register, policy,
specification, contract, plan, task, commercial, entitlement, OS, or operational change. The
current Journey and frozen baselines remain unchanged by this review. Sections 6 and 9 identify
the mandatory downstream governance work.

## 9. Downstream Work

### Required before implementation

1. Customer Journey successor or amendment.
2. Exact affected-source synchronization.
3. Open-question and conflict-register updates that preserve history.
4. Applicable Freeze successor or amendment.
5. Readiness validation.
6. Security threat model.
7. Permission catalog approval.
8. Privacy/Legal approval.
9. Identity and recovery policy.
10. Retention and backup policy.
11. Feature specification.
12. Constitution Check.
13. Implementation plan.
14. Task breakdown.
15. API/domain/data contracts.
16. Explicit implementation authorization.

### Not authorized by this review

- code;
- schemas;
- APIs;
- UI implementation;
- infrastructure;
- migrations;
- deployment;
- commercial activation;
- OS configuration; or
- entitlement activation.

## 10. Final Review Statement

The Human Architecture Review of the reconciled ADR-042 is complete. ADR-042 is approved to move
from `Proposed` to `Accepted` at the architecture-decision level only. No blocking architecture
finding remains, and the non-blocking follow-ups are mandatory gates before implementation.

**Implementation remains unauthorized.** This review has no Freeze, Customer Journey, register,
authority-index, code, commercial, entitlement, readiness, Operating System, or operational
effect.
