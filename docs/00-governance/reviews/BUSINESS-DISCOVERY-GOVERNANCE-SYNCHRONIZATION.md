# Business Discovery Governance Synchronization

| Metadata | Value |
|---|---|
| Status | **Completed** |
| Scope | Post-acceptance Governance synchronization for ADR-042 |
| Authority basis | Accepted [ADR-042](../ADR/ADR-042-pre-registration-business-discovery.md) and [ADR-042 Human Architecture Review](./ADR-042-HUMAN-ARCHITECTURE-REVIEW.md) |
| Implementation authorization | **None** |
| Freeze impact | Deferred to separate governed task |
| Code impact | None |
| Date | 2026-07-22 |
| Owner | Governance / Human Architecture Authority |

## 1. Executive summary

ADR-042 is Accepted at architecture-decision level. This synchronization applies that decision to
the current Customer Journey and the two Business Discovery decision registers while preserving
their historical evidence. The account-first journey remains valid; the optional Discovery-first
branch is now recorded in the governed Customer Journey.

Implementation remains unauthorized. No Architecture Freeze or readiness record was changed.

> **Architecture decision synchronization is complete, but Freeze synchronization is still
> pending and blocks implementation.**

## 2. Authority basis

### Accepted ADR authority

- [ADR-042 — Pre-Registration Business Discovery](../ADR/ADR-042-pre-registration-business-discovery.md)
  is Accepted and defines the optional additive material journey branch, ownership, claim,
  authorization, Candidate Fact, privacy, recovery, and downstream-effect boundaries.
- Applicable Accepted ADRs cited by ADR-042 remain controlling within their respective scopes;
  this synchronization does not amend them.

### Human Architecture Review

- [ADR-042 Human Architecture Review](./ADR-042-HUMAN-ARCHITECTURE-REVIEW.md) approved ADR-042 for
  Accepted status with no blocking architecture findings and explicitly retained downstream
  Governance and implementation gates.

### Product Owner decision inputs

- [BD-001 — Business Discovery MVP Architecture Decision](../proposals/business-discovery-preview/15-BUSINESS-DISCOVERY-MVP-ARCHITECTURE-DECISION.md)
  supplied the approved MVP baseline and 29 conditional Open Question closures.
- [BD-002 — Remaining Business Discovery Architecture Decisions](../proposals/business-discovery-preview/16-BUSINESS-DISCOVERY-REMAINING-ARCHITECTURE-DECISIONS.md)
  approved that baseline, resolved six additional ADR-acceptance blockers, and supplied the five
  required conflict decisions. These documents are decision inputs, not Accepted ADRs.

### Genesis and historical sources

- [Genesis Customer Journey](../../01-genesis/11-CUSTOMER-JOURNEY.md) is the current governed
  Customer Journey and receives the scoped ADR-042 amendment in this synchronization.
- The [Customer Journey v2 Proposal](../proposals/business-discovery-preview/03-CUSTOMER-JOURNEY-V2-PROPOSAL.md)
  and the original v1.0 journey meaning remain preserved as proposal/history; neither silently
  replaces accepted authority.

### Freeze sources

- [Core Platform Architecture Freeze v1.0](../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md)
  and [Business Brain Freeze v1.0](../../99-architecture-freeze/BUSINESS-BRAIN-FREEZE-v1.0.md)
  remain unchanged. Their successor/amendment impact must be decided in a separate governed task.

### Governance and proposal sources

- [Milestone Lifecycle](../MILESTONE-LIFECYCLE.md) and the [ADR governance rules](../ADR/README.md)
  require explicit authority changes, preservation of history, and downstream Freeze/readiness
  work for material change.
- The [Open Questions Register](../proposals/business-discovery-preview/02-OPEN-QUESTIONS-REGISTER.md)
  and [Conflict Map](../proposals/business-discovery-preview/13-CONFLICT-AND-OPEN-QUESTION-GATE-MAP.md)
  began as non-authoritative proposal-era traceability sources. Their original descriptions and
  statuses remain preserved while current dispositions are added.

## 3. Files changed

| File | Previous role/status | New role/status | Reason | Authority reference |
|---|---|---|---|---|
| [Genesis Customer Journey](../../01-genesis/11-CUSTOMER-JOURNEY.md) | v1.0 Foundation; account-first journey | v1.1 Foundation amended by Accepted ADR-042; both paths governed; implementation and Freeze warnings explicit | Synchronize the accepted optional material branch without erasing account-first | [ADR-042](../ADR/ADR-042-pre-registration-business-discovery.md); [Review](./ADR-042-HUMAN-ARCHITECTURE-REVIEW.md) |
| [Open Questions Register](../proposals/business-discovery-preview/02-OPEN-QUESTIONS-REGISTER.md) | v0.1 proposed register; all original rows open | v0.2 synchronized register; original rows preserved; 50 current dispositions added | Record 35 resolved architecture questions and retain 15 deferred/outside-MVP items | BD-001; BD-002; ADR-042 |
| [Conflict Map](../proposals/business-discovery-preview/13-CONFLICT-AND-OPEN-QUESTION-GATE-MAP.md) | v0.1 proposed planning index; Wave 4 statuses open/unchanged | v0.2 synchronized traceability index; historical map preserved; six current dispositions added | Remove resolved conflicts from ADR-acceptance-blocker status without overstating implementation readiness | BD-002; ADR-042; Review |
| This report | Did not exist | Completed Governance synchronization record | Record method, evidence, outcomes, and deferred gates | ADR-042; Review |

No ADR file, Freeze, code, specification, plan, task, schema, API, UI, or infrastructure artifact
was changed.

## 4. Customer Journey synchronization

### Chosen method

A **scoped governed amendment to the existing Genesis Customer Journey** was selected. Repository
Governance requires an explicit approved authority path and historical preservation but does not
mandate a separate successor filename. BD-002, Accepted ADR-042, and the Human Architecture Review
require a Customer Journey successor **or amendment**. Updating the existing controlling journey
is therefore the smallest unambiguous synchronization and avoids creating competing journey files.

The amendment:

- preserves the existing account-first route as Path B;
- adds the optional Discovery-first route as Path A;
- preserves all downstream Product Hub, commercial, OS setup, operations, growth, and Marketplace
  stages;
- corrects only the Business DNA handoff affected by ADR-042 so Discovery evidence enters as
  Candidate Facts through governed human review;
- records ADR-042 and its Human Architecture Review in metadata and revision history; and
- states that Freeze synchronization, readiness validation, and implementation authorization are
  still pending.

### Governed paths

```text
Path A — Optional Discovery-first

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
```

```text
Path B — Existing account-first

Visitor
→ Sign Up / Login
→ Create or select Workspace
→ Create or select Business
→ Business Architect
→ Business DNA
→ Recommendations
→ Product Hub
```

Discovery remains optional and may be skipped, abandoned, failed, expired, or unsupported. No
anonymous canonical entity is created; the Snapshot remains temporary; claim requires verified
identity and binds only to User; target selection is authorized; import creates Candidate Fact
inputs only; and Discovery has no subscription, entitlement, readiness, OS, or operational effect.

## 5. Open-question synchronization

The original 50 question rows and IDs are unchanged. Their original Wave 1 `Status` cells remain
historical evidence; the new post-acceptance table in the register is the current status source.

| Question ID | Previous status | New status | Resolution authority | Remaining policy or implementation work |
|---|---|---|---|---|
| OQ-GOV-001 | Open — human decision required | **Resolved — architecture question** | BD-002 §3.1; ADR-042; Review | Scoped precedent only; global Governance unchanged |
| OQ-GOV-002 | Open — human decision required | **Resolved — architecture question** | BD-002 §3.2; ADR-042; Review | Freeze successor/amendment and readiness pending |
| OQ-GOV-003 | Open — human decision required | **Deferred — documentation-governance detail** | BD-001 §12.3; BD-002 §8.3 | Any later detailed journey wave needs separate scope authorization |
| OQ-GOV-004 | Open — human decision required | **Outside MVP — separate Governance** | BD-001 §12.2; BD-002 §8.3 | Legacy duplicate labeling remains open |
| OQ-PRD-001 | Open — human decision required | **Deferred — product-policy/validation detail** | BD-001 §12.3; BD-002 §8.3 | Measures, research, and Privacy validation |
| OQ-PRD-002 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Any email use needs purpose, legal basis, UX, and threat review |
| OQ-PRD-003 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Permission identifiers and UX |
| OQ-PRD-004 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Resume UX and lifecycle contracts |
| OQ-PRD-005 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Expiry, restart/replacement policy, and UX |
| OQ-ONT-001 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Final implementation name/localization |
| OQ-ONT-002 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Final glossary and contract naming |
| OQ-ONT-003 | Open — human decision required | **Deferred — documentation-policy detail** | BD-001 §12.3; BD-002 §8.3 | Product-name normalization |
| OQ-ID-001 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Verification mechanism, expiry, recovery, step-up |
| OQ-ID-002 | Open — human decision required | **Deferred — Security design; implementation-blocking** | BD-001 §12.2; BD-002 §8.3; ADR-042 | Identity/provider/recovery mechanisms |
| OQ-ID-003 | Open — human decision required | **Deferred — Security/Privacy design; implementation-blocking** | BD-001 §12.2; BD-002 §8.3; ADR-042 | Persistence-free and cross-device policy |
| OQ-AUT-001 | Open — human decision required | **Resolved — logical architecture question** | BD-002 §3.5; ADR-042; Review | Permission catalog and segregation of duties |
| OQ-AUT-002 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Selector UI and full context-state policy |
| OQ-AUT-003 | Open — human decision required | **Resolved — MVP architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Future external delegation is outside MVP |
| OQ-SES-001 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Exact control proof/recovery mechanism |
| OQ-SES-002 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Concurrency/idempotency contracts |
| OQ-SES-003 | Open — human decision required | **Resolved — MVP architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Numeric limits and replacement UX |
| OQ-SES-004 | Open — human decision required | **Deferred — lifecycle/Security/Privacy; implementation-blocking** | BD-001 §12.2; BD-002 §8.3; ADR-042 | Persistence technology and numeric expiry |
| OQ-SES-005 | Open — human decision required | **Deferred — implementation detail; implementation-blocking** | BD-001 §12.2; BD-002 §8.3; ADR-042 | Concurrency/edit reconciliation |
| OQ-SES-006 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Exact claimed-data retention/resume values |
| OQ-IMP-001 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Outcomes, idempotency, retry, API/schema |
| OQ-IMP-002 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Conflict taxonomy and concurrent-editor UX |
| OQ-IMP-003 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Versioning and detailed merge algorithm |
| OQ-IMP-004 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Lifecycle recovery UX |
| OQ-IMP-005 | Open — human decision required | **Resolved — architecture question** | BD-002 §3.6; ADR-042; Review | Retention values, legal hold, exact authorization |
| OQ-IMP-006 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Version compatibility/staleness policy |
| OQ-PRV-001 | Open — human decision required | **Resolved — architecture baseline** | BD-002 §3.7; ADR-042; Review | Jurisdictional legal basis and Privacy/Legal approval |
| OQ-PRV-002 | Open — human decision required | **Deferred — Privacy/Legal policy; implementation-blocking** | BD-001 §12.2; BD-002 §8.3; ADR-042 | Numeric retention and expiry schedules |
| OQ-PRV-003 | Open — human decision required | **Resolved — architecture boundary** | BD-002 §3.8; ADR-042; Review | Rights/backup/legal-hold mechanisms and values |
| OQ-PRV-004 | Open — human decision required | **Resolved — MVP architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Future delivery requires purpose/consent/threat review |
| OQ-PRV-005 | Open — human decision required | **Deferred — legal/Security design; implementation-blocking** | BD-001 §12.2; BD-002 §8.3; ADR-042 | Residency, encryption, keys, processors, backup |
| OQ-PRV-006 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Observability inventory/redaction/access policy |
| OQ-SNP-001 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Failure taxonomy, reliability targets, UX |
| OQ-SNP-002 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Staleness/regeneration values |
| OQ-SNP-003 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Revision/comparison design |
| OQ-SNP-004 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Coverage criteria and UX |
| OQ-REC-001 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Presentation terminology |
| OQ-REC-002 | Open — human decision required | **Outside MVP — separate Governance** | BD-001 §12.2; BD-002 §8.3 | Confidence scoring remains excluded |
| OQ-REC-003 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Freshness/regeneration policy |
| OQ-REC-004 | Open — human decision required | **Outside MVP — separate Governance** | BD-001 §12.2; BD-002 §8.3 | Setup-effort estimation remains excluded |
| OQ-REC-005 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Future canonical health semantics |
| OQ-ECO-001 | Open — confirmation required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Freeze synchronization/readiness validation |
| OQ-ECO-002 | Open — human decision required | **Deferred — downstream journey detail** | BD-001 §12.3; BD-002 §8.3; ADR-042 | Product Hub/Marketplace recurring navigation |
| OQ-ECO-003 | Open — human decision required | **Deferred — commercial/OS recovery detail** | BD-001 §12.3; BD-002 §8.3; ADR-042 | Downstream owner failure routing |
| OQ-ECO-004 | Open — human decision required | **Resolved — architecture question** | BD-001 §12.2; BD-002 §8.2; ADR-042 | Final presentation UI |
| OQ-ECO-005 | Open — human decision required | **Outside MVP — separate Governance** | BD-001 §12.2; BD-002 §8.3 | Non-recommended OS selection remains excluded |

Current totals: **35 resolved architecture questions**, **11 deferred questions**, and **4
outside-MVP questions**. The six former ADR-acceptance blockers cite BD-002 and ADR-042; the 29
conditional closures cite BD-001, BD-002, and ADR-042 in the synchronized register.

## 6. Conflict synchronization

Historical conflict descriptions remain intact in the Conflict Map. Current disposition is:

| Conflict ID | Previous status | New decision-level status | Source synchronization status | Implementation-blocking status | Remaining follow-up |
|---|---|---|---|---|---|
| BDP-C01 | Human decision required | **Resolved for Business Discovery reconciliation** | ADR/registers synchronized; no global precedence rewrite | **Blocked** | Separate Governance for any global precedence change |
| BDP-C02 | Human decision required | **Resolved — optional additive material branch** | Journey and registers synchronized; Freeze pending | **Blocked** | Freeze successor/amendment and readiness validation |
| BDP-C03 | Proposed resolution; wording pending | **Resolved — Candidate Fact pipeline required** | Journey wording and registers synchronized | **Blocked** | Preserve pipeline in future contracts/specification |
| BDP-C07 | Human decision required | **Resolved at architecture ownership boundary** | ADR/registers synchronized; policies/contracts pending | **Blocked** | Security, Privacy, identity, retention, contracts |
| BDP-C08 | Principle resolved; details open | **Resolved at logical permission/persona level** | ADR/registers synchronized; catalog pending | **Blocked** | Exact Permission catalog and delegation policy |
| BDP-C10 | Human decision required | **Resolved at privacy/data-lifecycle architecture level** | ADR/registers synchronized; legal/policy sources pending | **Blocked** | Privacy/Legal, rights, retention, backup, residency, observability, legal hold |

None remains an unresolved architecture blocker to ADR-042 reconciliation. All remain
implementation-blocking until their named downstream gates and the Freeze boundary are complete.

## 7. Authority index result

`docs/00-governance/CURRENT-AUTHORITY.md` did not exist on the latest `main` basis used for this
task, so it was not created or updated. The accepted ADR, Human Architecture Review, and amended
Customer Journey provide the current traceable authority references for this scope.

## 8. Deferred work

The following remain required before implementation:

1. Architecture Freeze amendment or successor.
2. Readiness validation against the resulting frozen baseline.
3. Security threat model.
4. Permission catalog approval.
5. Privacy/Legal approval, including jurisdiction-specific legal basis.
6. Identity and recovery policy.
7. Retention and backup policy, including deletion and legal-hold handling.
8. Observability policy and telemetry data inventory.
9. Approved feature specification.
10. Constitution Check.
11. Implementation plan.
12. Dependency-ordered tasks.
13. Approved API, domain, data, Audit, and owner/consumer contracts.
14. Risk-appropriate validation and test evidence.
15. Explicit implementation authorization.

This report does not authorize code, schemas, APIs, UI or infrastructure implementation,
migrations, deployment, commercial activation, entitlement activation, readiness changes, OS
configuration, or operational behavior.

## 9. Validation

- [x] Every changed file belongs to an allowed synchronization category.
- [x] Four files changed, within the maximum of five.
- [x] Exactly one synchronization report was created.
- [x] Both Customer Journey paths are present; account-first remains preserved.
- [x] All 50 Open Question IDs and their historical descriptions remain preserved.
- [x] The 35 resolved architecture questions and 15 deferred/outside-MVP questions have explicit
  current dispositions.
- [x] BDP-C01, BDP-C02, BDP-C03, BDP-C07, BDP-C10, and the BDP-C08 permission detail are
  synchronized without deleting their historical conflict descriptions.
- [x] ADR-042 is cited as Accepted and its Human Architecture Review is cited.
- [x] No Architecture Freeze, ADR, authority index, proposal decision input, code, specification,
  plan, task, schema, API, UI, or infrastructure source changed.
- [x] No policy or implementation detail was falsely represented as approved.
- [x] Implementation authorization remains **None**.

Final governance statement: the Customer Journey and Business Discovery decision registers are
synchronized with Accepted ADR-042. Historical evidence remains preserved. No Freeze, readiness,
commercial, entitlement, OS, operational, or code effect is created, and implementation remains
unauthorized.
