# Business Discovery Preview — Wave 4 Traceability and Human Review Register

**Status:** Proposed for Authority Review

## 1. Wave 4 Scope and Exclusions

| Metadata | Value |
|---|---|
| Version | v0.1 |
| Status | **Proposed for Authority Review** |
| Date | 2026-07-22 |
| Artifact type | Non-authoritative Wave 4 scope, traceability, validation, and human-review register |
| Review owner | Nexoraxs Architecture Governance |
| Governing decision | [Human Architecture Review Decision — Wave 3](./HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-3.md) |
| Governing decision commit | `ca739e4f64db6a0f89ff16a5b3f04b2c1a88ba76` |
| Reviewed Wave 3 commit | `70b68d64d5e99a5b2821bff6dee75e431abde61b` |
| Related ADR | [ADR-042](../../ADR/ADR-042-pre-registration-business-discovery.md) — **Proposed** |

> **Planning-only boundary:** Wave 4 groups and traces candidate future reviews. It does not
> authorize any batch, authority edit, ADR disposition, conflict resolution, Open Question
> resolution, Freeze successor, readiness action, implementation planning, or implementation.
> Listing a path, dependency, reviewer, or outcome does not select it. All existing authority and
> proposal artifacts remain unchanged.

Wave 4 creates only:

1. [11-AUTHORITY-INTEGRATION-BATCH-PLAN.md](./11-AUTHORITY-INTEGRATION-BATCH-PLAN.md)
2. [12-AUTHORITY-EVIDENCE-AND-PREREQUISITE-MATRIX.md](./12-AUTHORITY-EVIDENCE-AND-PREREQUISITE-MATRIX.md)
3. [13-CONFLICT-AND-OPEN-QUESTION-GATE-MAP.md](./13-CONFLICT-AND-OPEN-QUESTION-GATE-MAP.md)
4. [14-WAVE-4-TRACEABILITY-AND-HUMAN-REVIEW-REGISTER.md](./14-WAVE-4-TRACEABILITY-AND-HUMAN-REVIEW-REGISTER.md)

Wave 4 excludes final authority wording; source edits; architecture acceptance; ADR-042
acceptance; supersession, deprecation, or historical labeling; implementation specifications;
technical or physical design; detailed UX; engineering work; and every later wave.

### 1.1 Planning identifier boundary

`AIB-01` through `AIB-12` are planning references only. They are not canonical Governance IDs,
accepted decisions, enums, runtime states, database values, API values, workflows, state machines,
implementation requirements, or engineering tasks. `AC` and `SM` retain their Wave 3 review-only
meaning. No identifier authorizes a batch merely by existing.

## 2. Source Package Traceability

### 2.1 Human gate chain

| Gate | Reviewed commit | Repository decision record | Decision-record commit | Bounded effect |
|---|---|---|---|---|
| Wave 1 review | `53183fd48cb1828dd0424a41b1194729d82c5616` | [Human Architecture Review Decision — Wave 1](./HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-1.md) | `99356c754ae9ba8ca80aa89ac7f08a4d9f22b5ef` | Authorized Wave 2 proposal documentation only |
| Wave 2 review | `368c043e75422d10b3e6abc38548937b080d52ff` | [Human Architecture Review Decision — Wave 2](./HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-2.md) | `9970fdc77cadb6b55a6516107809bec1701631fb` | Authorized Wave 3 governance-integration strategy only |
| Wave 3 review | `70b68d64d5e99a5b2821bff6dee75e431abde61b` | [Human Architecture Review Decision — Wave 3](./HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-3.md) | `ca739e4f64db6a0f89ff16a5b3f04b2c1a88ba76` | Authorizes this bounded Wave 4 Authority Integration Planning package only |

### 2.2 Proposal artifact chain

| Wave | Exact committed artifacts | Wave 4 use | Authority effect |
|---|---|---|---|
| Wave 1 | [Proposal](./00-BUSINESS-DISCOVERY-PREVIEW-PROPOSAL.md); [Authority Crosswalk](./01-AUTHORITY-AND-IMPACT-CROSSWALK.md); [Open Questions](./02-OPEN-QUESTIONS-REGISTER.md); [ADR-042](../../ADR/ADR-042-pre-registration-business-discovery.md) | Proposal boundary, conflicts, questions, authority impact, alternatives | None; remains Proposed |
| Wave 2 | [Customer Journey v2 Proposal](./03-CUSTOMER-JOURNEY-V2-PROPOSAL.md); [Decision Matrix](./04-JOURNEY-DECISION-MATRIX.md); [Edge Cases](./05-EDGE-CASE-AND-RECOVERY-MATRIX.md); [Traceability Register](./06-WAVE-2-TRACEABILITY-AND-REVIEW-REGISTER.md) | Review scenarios, decisions, recovery coverage, owner boundaries | None; review aids only |
| Wave 3 | [Governance Strategy](./07-GOVERNANCE-INTEGRATION-STRATEGY.md); [Authority Classification](./08-AUTHORITY-CHANGE-CLASSIFICATION-MATRIX.md); [Successor/Migration Candidates](./09-SUCCESSOR-AND-MIGRATION-CANDIDATE-REGISTER.md); [Dependency/Register](./10-WAVE-3-DEPENDENCY-AND-REVIEW-GATE-REGISTER.md) | Candidate classifications, successor relationships, sequencing, review dependencies | None; review aids only |
| Wave 4 | [Batch Plan](./11-AUTHORITY-INTEGRATION-BATCH-PLAN.md); [Evidence Matrix](./12-AUTHORITY-EVIDENCE-AND-PREREQUISITE-MATRIX.md); [Gate Map](./13-CONFLICT-AND-OPEN-QUESTION-GATE-MAP.md); this register | Planning groups, evidence prerequisites, gate mapping, review handoff | None; planning aids only |

## 3. Proposed Batch Traceability

| Planning batch | Planned subject | Wave 3 references | Primary conflicts | Primary Open Questions | Wave 4 artifacts | Next authority effect |
|---|---|---|---|---|---|---|
| AIB-01 | Authority precedence and change class | AC-001, AC-002; SM-008 | BDP-C01, BDP-C04 | OQ-GOV-001 through OQ-GOV-003 | Batch Plan §AIB-01; Evidence Matrix AIB-01; Gate Map | None; separate human review required |
| AIB-02 | Canonical terminology and ontology | AC-003, AC-006, AC-007; SM-009, SM-010 | BDP-C03, BDP-C14, BDP-C15 | OQ-ONT-001 through OQ-ONT-003; OQ-REC-005 | Batch Plan §AIB-02; Evidence Matrix AIB-02; Gate Map | None; separate human review required |
| AIB-03 | Discovery Evidence, Business Architect, and Business DNA | AC-006, AC-012, AC-013, AC-014, AC-027; SM-002, SM-010, SM-011, SM-019 | BDP-C03, BDP-C07, BDP-C10, BDP-C15 | OQ-SES and OQ-IMP groups; applicable OQ-PRV; OQ-ECO-001 | Batch Plan §AIB-03; Evidence Matrix AIB-03; Gate Map | None; separate human review required |
| AIB-04 | Identity, Authorization, Security, Privacy, and Observability | AC-014, AC-015, AC-016, AC-017, AC-027; SM-011, SM-012, SM-019 | BDP-C07 through BDP-C10 | OQ-ID, OQ-AUT, OQ-SES, OQ-PRV groups; OQ-IMP-004/005 | Batch Plan §AIB-04; Evidence Matrix AIB-04; Gate Map | None; separate human review required |
| AIB-05 | Business Brain and Recommendation | AC-018, AC-020, AC-027; SM-004 | BDP-C05, BDP-C06, BDP-C15 | OQ-SNP and OQ-REC groups | Batch Plan §AIB-05; Evidence Matrix AIB-05; Gate Map | None; separate human review required |
| AIB-06 | Product Hub and Marketplace | AC-008, AC-011, AC-021, AC-022; SM-005, SM-013 | BDP-C06, BDP-C11, BDP-C13 | OQ-REC-001/003; OQ-ECO-002/004/005 | Batch Plan §AIB-06; Evidence Matrix AIB-06; Gate Map | None; separate human review required |
| AIB-07 | Commercial, Operating System, and readiness boundaries | AC-009, AC-010, AC-023, AC-024, AC-027; SM-006, SM-013 | BDP-C11 | OQ-REC-004; OQ-ECO-001/003/005 | Batch Plan §AIB-07; Evidence Matrix AIB-07; Gate Map | None; separate human review required |
| AIB-08 | Genesis Customer Journey change class | AC-005 through AC-011; SM-001, SM-018, SM-022 | BDP-C01 through BDP-C03, BDP-C11, BDP-C13, BDP-C15 | OQ-GOV-001 through OQ-GOV-003; OQ-PRD-003 through OQ-PRD-005; OQ-ONT and OQ-ECO groups | Batch Plan §AIB-08; Evidence Matrix AIB-08; Gate Map | None; no Genesis edit |
| AIB-09 | ADR-042 disposition | AC-004, AC-027; SM-014, SM-021 | BDP-C01 through BDP-C15 | All 50 Open Questions as applicable to disposition/deferral | Batch Plan §AIB-09; Evidence Matrix AIB-09; Gate Map | None; ADR remains Proposed |
| AIB-10 | Freeze impact and successor classification | AC-019 through AC-021, AC-023, AC-028; SM-003 through SM-007 | BDP-C01, BDP-C02, BDP-C05, BDP-C06, BDP-C11, BDP-C13 | OQ-GOV-001/002; affected OQ-REC and OQ-ECO items | Batch Plan §AIB-10; Evidence Matrix AIB-10; Gate Map | None; no Freeze action |
| AIB-11 | Readiness alignment | AC-022, AC-024, AC-028; SM-003 through SM-007 consequences | BDP-C02, BDP-C11 | OQ-ECO-001 through OQ-ECO-003 | Batch Plan §AIB-11; Evidence Matrix AIB-11; Gate Map | None; no readiness action |
| AIB-12 | Duplicate-document relationship and historical-labeling review | AC-025, AC-026; SM-015, SM-016, SM-017, SM-020, SM-021, SM-022 | BDP-C12 | OQ-GOV-004 | Batch Plan §AIB-12; Evidence Matrix AIB-12; Gate Map | None; no labeling/deprecation action |

## 4. Protected Authority Verification Register

Listing a protected source records the Wave 4 verification boundary; it does not designate an
edit target.

| Protected authority class | Verified current path(s) | Current state relevant to Wave 4 | Wave 4 result |
|---|---|---|---|
| Constitution | [`.specify/memory/constitution.md`](../../../../.specify/memory/constitution.md) | Applicable authority-order statement; BDP-C01 remains open | Unchanged |
| Milestone Lifecycle | [`docs/00-governance/MILESTONE-LIFECYCLE.md`](../../MILESTONE-LIFECYCLE.md) | Current proposal/review/wave/Freeze governance | Unchanged |
| Canonical glossary | [`docs/00-governance/glossary/GLOSSARY.md`](../../glossary/GLOSSARY.md) | Canonical terminology; proposed Discovery terms remain non-canonical | Unchanged |
| ADR-042 | [`docs/00-governance/ADR/ADR-042-pre-registration-business-discovery.md`](../../ADR/ADR-042-pre-registration-business-discovery.md) | **Proposed** | Unchanged; not accepted |
| Accepted ADRs | [`docs/00-governance/ADR/`](../../ADR/) | Accepted decisions retain individual scope and status | Unchanged |
| Genesis | [`docs/01-genesis/`](../../../01-genesis/) | Current Genesis authority, including account-first Customer Journey | Unchanged |
| Core Platform | [`docs/02-core-platform/`](../../../02-core-platform/) | Approved/frozen Core baseline; existing authority remains controlling | Unchanged |
| Business Brain | [`docs/03-business-brain/`](../../../03-business-brain/) | Approved/frozen Business Brain baseline | Unchanged |
| Freeze manifests | [`docs/99-architecture-freeze/`](../../../99-architecture-freeze/) | Current frozen architecture baselines | Unchanged |
| Readiness records | [Core](../../../99-architecture-freeze/CORE-PLATFORM-v1.0.1-READINESS.md); [Business Brain](../../../99-architecture-freeze/BUSINESS-BRAIN-READINESS.md); [Marketplace](../../../99-architecture-freeze/MARKETPLACE-READINESS.md); [Commerce OS](../../../99-architecture-freeze/COMMERCE-OS-READINESS.md) | Existing readiness evidence in original scope | Unchanged |
| Wave 1 package and decision | Files listed in §2 | Proposed package and recorded bounded decision | Unchanged |
| Wave 2 package and decision | Files listed in §2 | Proposed review aids and recorded bounded decision | Unchanged |
| Wave 3 package and decision | Files listed in §2 | Proposed review aids and recorded bounded decision | Unchanged |

## 5. File-level Change Register

| Path | Wave 4 action | Status | Authority effect |
|---|---|---|---|
| `docs/00-governance/proposals/business-discovery-preview/11-AUTHORITY-INTEGRATION-BATCH-PLAN.md` | Created | Proposed for Authority Review | None |
| `docs/00-governance/proposals/business-discovery-preview/12-AUTHORITY-EVIDENCE-AND-PREREQUISITE-MATRIX.md` | Created | Proposed for Authority Review | None |
| `docs/00-governance/proposals/business-discovery-preview/13-CONFLICT-AND-OPEN-QUESTION-GATE-MAP.md` | Created | Proposed for Authority Review | None |
| `docs/00-governance/proposals/business-discovery-preview/14-WAVE-4-TRACEABILITY-AND-HUMAN-REVIEW-REGISTER.md` | Created | Proposed for Authority Review | None |
| Every pre-existing repository file | No action | Unchanged | None |

Exactly four new files are within scope. No existing file is authorized for modification.

## 6. Unresolved Conflict and Open Question Verification

| Register | Governing source | Expected | Verified in Wave 4 gate map | Changed | Resolved |
|---|---|---:|---:|---:|---:|
| Conflict IDs | [Wave 1 Crosswalk §4](./01-AUTHORITY-AND-IMPACT-CROSSWALK.md#4-conflict-register) | 15 | 15, BDP-C01 through BDP-C15 | 0 | 0 |
| Open Question IDs | [Wave 1 Open Questions](./02-OPEN-QUESTIONS-REGISTER.md) | 50 | 50, individually indexed | 0 | 0 |

The [Gate Map](./13-CONFLICT-AND-OPEN-QUESTION-GATE-MAP.md) preserves exact conflict status text
and Open Question status text. BDP-C01 and BDP-C02 remain expressly unresolved.

## 7. Implementation-leakage Review

| Prohibited content class | Wave 4 review result |
|---|---|
| Application or infrastructure code | Not created or modified |
| APIs, routes, Events, messages, services, packages, or technical contracts | Not designed |
| Schemas, tables, fields, persistence, database models, or migrations | Not designed |
| Runtime workflows or state machines | Not designed |
| Detailed UX, pages, screens, interactions, or acceptance tests | Not specified |
| Engineering tasks, estimates, implementation phases, rollout, or release plans | Not created |
| Identity, Permission, claim, import, privacy, retention, scoring, Recommendation, or readiness mechanisms/values | Not selected |
| Final authority replacement wording | Not created |
| Authority edit or implementation authorization | Not granted |

Batch descriptions name review subjects and evidence only. They do not define technical behavior,
physical design, policy values, or implementation ownership.

## 8. Required Human Architecture Review Checklist

An unchecked item requires explicit human evidence. Completing a checkbox does not itself approve
the package or authorize a batch.

| Discipline | Required Wave 4 review | Status |
|---|---|---|
| Architecture Governance | Validate batch boundaries, precedence stop condition, candidate classes, and no automatic progression | ☐ Pending human review |
| Documentation Governance | Validate exact paths, provenance, duplicate treatment, links, and no replacement wording | ☐ Pending human review |
| Product Architecture | Validate journey/product batch groupings and capability-first preservation | ☐ Pending human review |
| Enterprise UX | Validate terminology/journey evidence scope without creating detailed UX | ☐ Pending human review |
| Core Platform | Validate organization, Business Architect, Core readiness, and owner-boundary evidence | ☐ Pending human review |
| Business Architect / Business DNA | Validate Candidate Fact, provenance, review/publication, and Snapshot distinction evidence | ☐ Pending human review |
| Business Brain / Recommendations | Validate provisional-guidance, health, confidence, freshness, and Recommendation deferrals | ☐ Pending human review |
| Identity and Access | Validate identity, claim, context, authorization, role, and delegation decision boundaries | ☐ Pending human review |
| Security | Validate threat-evidence prerequisites and no mechanism inference | ☐ Pending human review |
| Privacy / Legal | Validate purpose, rights, retention, consent, residency, and legal-hold evidence prerequisites | ☐ Pending human review |
| Data Governance | Validate evidence taxonomy, ownership, provenance, version, conflict, and minimization prerequisites | ☐ Pending human review |
| Product Hub / Marketplace | Validate composition, recurrence, access, and ownership boundaries | ☐ Pending human review |
| Commercial / Billing | Validate entitlement/subscription separation and evidence scope | ☐ Pending human review |
| Operating Systems | Validate setup, activation, readiness, failure-owner, and independence boundaries | ☐ Pending human review |
| Readiness reviewers | Validate conditional AIB-11 placement and no current readiness change | ☐ Pending human review |

## 9. Exact Next-gate Decision Fields

The next gate is a Human Architecture Review of the complete committed Wave 4 package. Before a
decision record may be created, the human input must provide:

1. exact committed Wave 4 package SHA;
2. exact decision authority;
3. exactly one explicit disposition;
4. accepted review scope;
5. required refinements, or `None`;
6. the preserved status of BDP-C01 through BDP-C15;
7. the preserved status of all 50 Open Questions;
8. whether any bounded next documentation step is authorized;
9. exact title, files or document classes, allowed scope, exclusions, and required subsequent
   human gate when a next step is authorized; and
10. explicit confirmation that no authority edit or implementation is inferred.

The decision must distinguish among:

- acceptance of Wave 4 planning for governance progression;
- authorization of a particular future review batch;
- authorization to prepare a future authority proposal;
- acceptance of an authority change; and
- implementation authorization.

These are not equivalent. No missing field may be inferred from the package, HEAD, branch state,
commit message, prior review, or absence of objections.

## 10. No-automatic-next-step Rule

`No Wave 5 or authority-editing documentation/implementation step is authorized by Wave 4 creation.`

Wave 4 does not authorize AIB-01 or any other batch to start. A separate repository-traceable
Human Architecture Review decision must review the complete committed Wave 4 package and name the
exact bounded next action, if any.

## 11. Wave 4 Validation Record

The execution completion report for this package must record:

| Validation item | Required evidence |
|---|---|
| Branch and gate | Exact branch; committed Wave 3 decision path/commit; exact Wave 4 authorization |
| File scope | Four authorized new files; zero existing modifications; zero out-of-scope changes |
| Status | `Proposed for Authority Review` in every Wave 4 file |
| Links and tables | Local links resolve; Markdown table columns are consistent |
| Whitespace | `git diff --check` and per-untracked-file checks report no issue |
| Conflicts and questions | 15 unique BDP conflict IDs and 50 unique Open Question IDs; exact statuses preserved |
| Protected authority | ADR-042 Proposed; Genesis, Freeze, readiness, Accepted ADRs, Core, prior waves, and decision records unchanged |
| Leakage | No prohibited authority wording, detailed design, policy value, or implementation-shaped artifact |
| Later work | No Wave 5 file or authority-editing work |
| Repository operations | No commit, push, merge, or pull request |

The remaining next gate is:

`Human Architecture Review of the complete bounded Wave 4 Authority Integration Planning package.`
