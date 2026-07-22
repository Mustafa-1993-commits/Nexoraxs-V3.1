# Business Discovery Preview — Governance Integration Strategy

## 1. Metadata

| Metadata | Value |
|---|---|
| Version | v0.1 |
| Status | **Proposed for Authority Review** |
| Date | 2026-07-22 |
| Artifact type | Non-authoritative governance-integration review aid |
| Review owner | Nexoraxs Architecture Governance |
| Refined Wave 1 reviewed commit | `53183fd48cb1828dd0424a41b1194729d82c5616` |
| Wave 2 reviewed commit | `368c043e75422d10b3e6abc38548937b080d52ff` |
| Wave 2 gate record | [Human Architecture Review Decision — Wave 2](./HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-2.md) |
| Related ADR | [ADR-042](../../ADR/ADR-042-pre-registration-business-discovery.md) — **Proposed** |

## 2. Non-authoritative Notice

> **Proposal-only review-aid boundary:** This file is non-authoritative. It does not authorize an
> edit to any listed authority. A listed document is a review candidate, not an approved target.
> A sequence is a proposed governance sequence, not a mandatory workflow. A successor candidate
> is not an approved supersession relationship. A migration candidate is not a content migration
> instruction. A dependency is a review dependency, not an implementation dependency. A
> checkpoint is a human-review checkpoint, not an automated gate. No content in this file may be
> promoted automatically into Genesis, a Freeze, an ADR, detailed UX, an implementation plan, or
> an engineering task.

Wave 3 records how later Governance **could** examine authority impact if a future human decision
accepts some or all of the Business Discovery proposal. It does not accept the proposal, dispose
ADR-042, resolve a conflict or Open Question, or establish an authority-change sequence.

## 3. Purpose and Scope

This strategy provides a bounded review framework for:

- identifying authority domains that may require review if the proposal is later accepted;
- classifying candidate clarification, amendment, successor, supersession, ADR, Freeze, or
  historical-labeling paths without selecting one;
- preserving dependencies among Governance, Genesis, frozen milestones, and proposed artifacts;
- keeping decision, provenance, and historical records intact; and
- defining conditional human-review checkpoints before any separately authorized authority work.

The strategy does not draft replacement language, direct content movement, establish a canonical
term, or define technical or operational behavior.

## 4. Governing Inputs and Reviewed SHAs

### 4.1 Proposal sequence inputs

| Input | Repository reference | Review significance |
|---|---|---|
| Wave 1 proposal | [00-BUSINESS-DISCOVERY-PREVIEW-PROPOSAL.md](./00-BUSINESS-DISCOVERY-PREVIEW-PROPOSAL.md) | Defines the proposal boundary and non-goals; remains Proposed |
| Wave 1 authority crosswalk | [01-AUTHORITY-AND-IMPACT-CROSSWALK.md](./01-AUTHORITY-AND-IMPACT-CROSSWALK.md) | Governing conflict statuses and initial authority inventory |
| Wave 1 Open Questions | [02-OPEN-QUESTIONS-REGISTER.md](./02-OPEN-QUESTIONS-REGISTER.md) | Governing register of all 50 unresolved questions |
| Wave 1 human gate | [HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-1.md](./HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-1.md) | Reviewed commit `53183fd48cb1828dd0424a41b1194729d82c5616`; authorized Wave 2 documentation only |
| Wave 2 Customer Journey proposal | [03-CUSTOMER-JOURNEY-V2-PROPOSAL.md](./03-CUSTOMER-JOURNEY-V2-PROPOSAL.md) | Detailed non-authoritative journey review aid |
| Wave 2 decision matrix | [04-JOURNEY-DECISION-MATRIX.md](./04-JOURNEY-DECISION-MATRIX.md) | Proposal routing review aid; `JD` identifiers remain review-only |
| Wave 2 edge-case matrix | [05-EDGE-CASE-AND-RECOVERY-MATRIX.md](./05-EDGE-CASE-AND-RECOVERY-MATRIX.md) | Recovery review aid; `EC` identifiers remain review-only |
| Wave 2 traceability register | [06-WAVE-2-TRACEABILITY-AND-REVIEW-REGISTER.md](./06-WAVE-2-TRACEABILITY-AND-REVIEW-REGISTER.md) | Wave 2 preservation and authority-impact preview |
| Wave 2 human gate | [HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-2.md](./HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-2.md) | Reviews commit `368c043e75422d10b3e6abc38548937b080d52ff`; authorizes this bounded Wave 3 package only |
| Principal proposed ADR | [ADR-042](../../ADR/ADR-042-pre-registration-business-discovery.md) | Remains **Proposed** and has no authority effect |

### 4.2 Current authority inputs

Wave 3 treats the following as current sources to be reviewed, not as approved edit targets:

- [NexoraXS Constitution](../../../../.specify/memory/constitution.md);
- [Architectural Milestone Lifecycle](../../MILESTONE-LIFECYCLE.md);
- [Canonical Glossary](../../glossary/GLOSSARY.md);
- [Genesis Customer Journey](../../../01-genesis/11-CUSTOMER-JOURNEY.md) and related Genesis
  documents;
- [Core Platform Architecture](../../../02-core-platform/02-CORE-PLATFORM-ARCHITECTURE.md),
  [Domain Model](../../../02-core-platform/03-DOMAIN-MODEL.md),
  [Data Ownership](../../../02-core-platform/04-DATA-OWNERSHIP.md),
  [Permission Model](../../../02-core-platform/05-PERMISSION-MODEL.md),
  [Security Model](../../../02-core-platform/08-SECURITY-MODEL.md), and
  [Observability](../../../02-core-platform/09-OBSERVABILITY.md);
- the [Business Brain documentation baseline](../../../03-business-brain/) and
  [Business Brain Freeze](../../../99-architecture-freeze/BUSINESS-BRAIN-FREEZE-v1.0.md);
- the [Core Platform Freeze](../../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md);
- the [Marketplace Freeze](../../../99-architecture-freeze/MARKETPLACE-v1.0-FREEZE.md) and
  [Marketplace Readiness](../../../99-architecture-freeze/MARKETPLACE-READINESS.md); and
- the [Commerce OS Freeze](../../../99-architecture-freeze/COMMERCE-OS-v1.0-FREEZE.md) and
  [Commerce OS Readiness](../../../99-architecture-freeze/COMMERCE-OS-READINESS.md).

## 5. Current Authority State

| Authority condition | Current state preserved by Wave 3 |
|---|---|
| Authority precedence | Freeze-first versus Genesis-ultimate wording remains inconsistent under BDP-C01 and OQ-GOV-001. Wave 3 chooses neither expression. |
| Current Customer Journey | The frozen/current account-first journey remains controlling today. The proposed pre-registration branch has no authority effect. |
| ADR-042 | **Proposed**; not Accepted, not an authority amendment, and not an implementation source. |
| Wave 1 and Wave 2 | Non-authoritative proposal and review-aid documentation only. |
| Accepted ADRs | Unchanged and controlling within their accepted scope. |
| Genesis | Unchanged; no Wave 3 content replaces or interprets Genesis authoritatively. |
| Frozen baselines | Core Platform, Business Brain, Commerce OS, and Marketplace freezes remain unchanged and controlling within their scopes. |
| Conflicts | BDP-C01 through BDP-C15 retain their exact Wave 1 statuses. |
| Open Questions | All 50 questions remain open with their original identifiers and statuses. |

Both competing precedence expressions lead to the same immediate result: no Proposed Wave 1,
Wave 2, or Wave 3 artifact changes current authority. Their difference remains material to any
future edit and successor sequence and therefore requires human disposition before such work.

## 6. Preserved Conflicts and Open Questions

Wave 3 preserves the complete conflict record in the
[Wave 1 Crosswalk §4](./01-AUTHORITY-AND-IMPACT-CROSSWALK.md#4-conflict-register). It neither
reclassifies nor closes BDP-C01 through BDP-C15.

Wave 3 also preserves the complete [Open Questions Register](./02-OPEN-QUESTIONS-REGISTER.md):

| Register | Preserved IDs | Wave 3 treatment |
|---|---|---|
| Governance and precedence | OQ-GOV-001 through OQ-GOV-004 | Review dependencies only |
| Product and journey | OQ-PRD-001 through OQ-PRD-005 | Review dependencies only |
| Ontology and terminology | OQ-ONT-001 through OQ-ONT-003 | Review dependencies only |
| Identity and account lifecycle | OQ-ID-001 through OQ-ID-003 | Review dependencies only |
| Authorization and persona routing | OQ-AUT-001 through OQ-AUT-003 | Review dependencies only |
| Anonymous ownership and claim | OQ-SES-001 through OQ-SES-006 | Review dependencies only |
| Evidence import and Business DNA conflict | OQ-IMP-001 through OQ-IMP-006 | Review dependencies only |
| Privacy, Security, and data lifecycle | OQ-PRV-001 through OQ-PRV-006 | Review dependencies only |
| Snapshot behavior | OQ-SNP-001 through OQ-SNP-004 | Review dependencies only |
| Confidence and Recommendation semantics | OQ-REC-001 through OQ-REC-005 | Review dependencies only |
| Ecosystem and readiness | OQ-ECO-001 through OQ-ECO-005 | Review dependencies only |

The complete item-by-item preservation indexes appear in
[10-WAVE-3-DEPENDENCY-AND-REVIEW-GATE-REGISTER.md](./10-WAVE-3-DEPENDENCY-AND-REVIEW-GATE-REGISTER.md).

## 7. Candidate Authority-impact Domains

The table identifies possible review scope only. It does not conclude that any listed source
requires a change.

| Candidate domain | Actual current sources | Potential review question if the proposal is later accepted | Principal dependencies |
|---|---|---|---|
| Constitution and Milestone Lifecycle | [Constitution](../../../../.specify/memory/constitution.md); [Milestone Lifecycle](../../MILESTONE-LIFECYCLE.md) | Which precedence interpretation and change class would govern later authority work? | BDP-C01, BDP-C04; OQ-GOV-001 through OQ-GOV-003 |
| Genesis journey and product architecture | [Customer Journey](../../../01-genesis/11-CUSTOMER-JOURNEY.md); [Product Hub](../../../01-genesis/13-PRODUCT-HUB.md); [Subscription Model](../../../01-genesis/14-SUBSCRIPTION-MODEL.md); [OS Lifecycle](../../../01-genesis/16-OPERATING-SYSTEM-LIFECYCLE.md); [Marketplace Architecture](../../../01-genesis/17-MARKETPLACE-ARCHITECTURE.md) | Would a clarification, amendment, or successor proposal be appropriate, and which content would remain intact? | BDP-C02, BDP-C11, BDP-C13; OQ-GOV-002, OQ-ECO-001 through OQ-ECO-005 |
| Core Platform authority | [Core Architecture](../../../02-core-platform/02-CORE-PLATFORM-ARCHITECTURE.md); [Domain Model](../../../02-core-platform/03-DOMAIN-MODEL.md); [Data Ownership](../../../02-core-platform/04-DATA-OWNERSHIP.md) | Would existing formal-context, evidence, provenance, and owner boundaries need only confirmation or a future clarification proposal? | BDP-C03, BDP-C07; OQ-IMP-001 through OQ-IMP-006 |
| Business Architect and Business DNA authority | [Genesis Business DNA](../../../01-genesis/03-BUSINESS-DNA.md); [ADR-005](../../ADR/ADR-005-business-dna-business-scoped-software-independent.md); [ADR-016](../../ADR/ADR-016-business-architect-governed-pipeline.md) | How could later authority describe pre-formal Discovery Evidence without changing Candidate Fact, review, publication, and version ownership? | BDP-C03, BDP-C15; OQ-ONT-002, OQ-IMP-001 through OQ-IMP-006 |
| Business Brain and Recommendation authority | [Business Brain baseline](../../../03-business-brain/); [Business Brain Freeze](../../../99-architecture-freeze/BUSINESS-BRAIN-FREEZE-v1.0.md); [ADR-013](../../ADR/ADR-013-capability-first-explainable-recommendations.md); [ADR-014](../../ADR/ADR-014-human-control-over-recommendations-and-ai.md) | Would provisional guidance, evidence strength, freshness, or health wording require clarification while canonical Recommendations remain unchanged? | BDP-C05, BDP-C06, BDP-C15; OQ-REC-001 through OQ-REC-005 |
| Product Hub and Marketplace authority | [Genesis Product Hub](../../../01-genesis/13-PRODUCT-HUB.md); [Genesis Marketplace](../../../01-genesis/17-MARKETPLACE-ARCHITECTURE.md); [Marketplace Freeze](../../../99-architecture-freeze/MARKETPLACE-v1.0-FREEZE.md) | Would recurring destination wording require clarification while preserving composition, Marketplace, and source-owner boundaries? | BDP-C06, BDP-C11, BDP-C13; OQ-ECO-002, OQ-ECO-004, OQ-ECO-005 |
| Billing/Subscription and Operating System authority | [Subscription Model](../../../01-genesis/14-SUBSCRIPTION-MODEL.md); [OS Lifecycle](../../../01-genesis/16-OPERATING-SYSTEM-LIFECYCLE.md); [Commerce OS Freeze](../../../99-architecture-freeze/COMMERCE-OS-v1.0-FREEZE.md) | Would later journey authority need only cross-reference existing commercial and OS lifecycle separation? | BDP-C11; OQ-ECO-001, OQ-ECO-003 |
| Privacy, Security, Authorization, Audit, and Data Governance | [Permission Model](../../../02-core-platform/05-PERMISSION-MODEL.md); [Security Model](../../../02-core-platform/08-SECURITY-MODEL.md); [Observability](../../../02-core-platform/09-OBSERVABILITY.md); [ADR-034](../../ADR/ADR-034-explicit-tenant-and-resource-scope.md); [ADR-038](../../ADR/ADR-038-append-only-audit-history.md) | Which independent future policy decisions would be prerequisites before any detailed design? | BDP-C07 through BDP-C10; OQ-ID, OQ-AUT, OQ-SES, OQ-IMP, OQ-PRV groups |
| Canonical terminology and glossary authority | [Canonical Glossary](../../glossary/GLOSSARY.md) | Are the proposed terms acceptable, particularly Business Health Snapshot (working term), without colliding with Business DNA Snapshot? | BDP-C14, BDP-C15; OQ-ONT-001 through OQ-ONT-003 |
| ADR-042 lifecycle | [ADR-042](../../ADR/ADR-042-pre-registration-business-discovery.md); [ADR governance](../../ADR/README.md) | Should ADR-042 later be revised, accepted, rejected, or otherwise disposed under governance after prerequisite decisions? | BDP-C01 through BDP-C15; all blocking OQs |
| Freeze successor strategy | [Core Freeze](../../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md); [Business Brain Freeze](../../../99-architecture-freeze/BUSINESS-BRAIN-FREEZE-v1.0.md); [Marketplace Freeze](../../../99-architecture-freeze/MARKETPLACE-v1.0-FREEZE.md); [Commerce OS Freeze](../../../99-architecture-freeze/COMMERCE-OS-v1.0-FREEZE.md) | Which, if any, frozen baseline would need a future successor after separately approved underlying authority changes? | BDP-C01, BDP-C02, BDP-C11; OQ-GOV-001, OQ-GOV-002 |

## 8. Proposed Governance Integration Principles

Subject to human disposition, a later governance process could use these review principles:

1. **Preserve current authority until changed explicitly.** Proposal artifacts would have no
   effect on current Genesis, Freeze, or Accepted ADR meaning.
2. **Resolve precedence before selecting edit order.** BDP-C01 and OQ-GOV-001 would remain a stop
   boundary for an authority-change sequence.
3. **Separate architecture disposition from document editing.** Accepting, rejecting, or revising
   ADR-042 would be distinct from authorizing edits to any affected source.
4. **Classify before drafting.** Each affected source could first receive a human-selected change
   class such as no impact, clarification, amendment, successor, or new ADR.
5. **Keep working terms provisional.** Business Health Snapshot (working term), Discovery
   Evidence, and other proposal terminology would remain non-canonical until explicit review.
6. **Preserve ownership and lifecycle boundaries.** Candidate journey changes would not silently
   transfer Business DNA, Recommendation, Product Hub, Marketplace, commercial, or OS ownership.
7. **Preserve provenance.** Earlier proposals, reviews, decisions, and frozen baselines would
   remain traceable even if a later successor is authorized.
8. **Use bounded human decisions.** Each authority proposal, edit, successor, Freeze, and
   readiness action would need its own explicit scope and review evidence.
9. **Revalidate after each accepted authority change.** Cross-document terminology, conflicts,
   Open Questions, and traceability could be checked before any later step.
10. **Keep implementation downstream.** Authority integration would be completed through
    separately authorized work before implementation planning could be considered.

These are proposed review principles only, not a binding change process.

## 9. Proposed Review Sequencing

The following sequence is conditional and non-authoritative. It is not approval for any step and
is not a mandatory workflow.

| Proposed order | Candidate governance review | Dependencies considered | Possible review output, only if separately authorized | Human checkpoint / stop boundary |
|---:|---|---|---|---|
| 1 | Confirm authority precedence and applicable change classes | BDP-C01; OQ-GOV-001, OQ-GOV-002 | Recorded human interpretation and candidate-source scope | Stop if precedence or scope remains ambiguous |
| 2 | Resolve or explicitly defer blocking terminology and journey conflicts | BDP-C02, BDP-C03, BDP-C06, BDP-C14, BDP-C15; OQ-GOV-002, OQ-ONT-001 through OQ-ONT-003 | Bounded human dispositions or explicit deferrals | Stop before drafting authority text when terminology or journey scope is unselected |
| 3 | Determine ADR-042 disposition | All BDP conflicts and applicable Open Questions | Revise, accept, reject, or defer ADR-042 under ADR governance | Separate human ADR decision required |
| 4 | Determine the Genesis change class | BDP-C02, BDP-C03, BDP-C13; OQ-GOV-002 | Confirm no impact, clarification proposal, amendment proposal, or successor proposal | Separate human authorization before any Genesis edit |
| 5 | Review Core, Business Brain, Product Hub, Marketplace, Commercial, and OS authority impact | BDP-C03, BDP-C05 through BDP-C11, BDP-C13; domain OQs | Per-source no-impact confirmation or bounded future authority proposal | Each affected owner and Architecture Governance review required |
| 6 | Determine whether any successor Freeze proposal is warranted | Outcomes of steps 1 through 5 | Candidate successor-Freeze scope and baseline relationship | Separate human authorization before drafting or changing a Freeze |
| 7 | Determine duplicate and legacy-document treatment | BDP-C12; OQ-GOV-004 | Preserve unchanged, add a future relationship notice, or prepare a historical-labeling proposal | Documentation Governance decision required |
| 8 | Revalidate cross-document traceability | All BDP conflicts; all 50 OQs; accepted dispositions | Updated review crosswalk showing accepted, rejected, and deferred relationships | Stop on unexplained conflict or missing provenance |
| 9 | Seek explicit authority-edit authorization | Accepted outputs from earlier checkpoints | Exact permitted file manifest and bounded edit purpose | No authority edit without a separate human decision |
| 10 | Complete separately authorized authority-edit and review waves before considering implementation planning | Accepted authority and any successor Freeze/readiness evidence | Future authority baseline, if ever approved | Separate human gate required; implementation remains outside Wave 3 |

## 10. Proposed Decision Checkpoints

| Checkpoint | Human decision question | What this checkpoint does not authorize |
|---|---|---|
| Wave 3 Architecture Review | Is this strategy a suitable map for later governance decisions? | Architecture acceptance, authority edits, ADR disposition, or a later wave |
| Precedence checkpoint | Which authority-order interpretation governs and how is inconsistency handled? | Editing the Constitution, Milestone Lifecycle, Genesis, or Freeze |
| Terminology and scope checkpoint | Which working terms and proposal boundaries are accepted, revised, rejected, or deferred? | Glossary edits or UX specifications |
| ADR-042 checkpoint | What is ADR-042's explicit governance disposition? | Automatic Genesis/Freeze changes or implementation |
| Authority-class checkpoint | Which actual sources have no impact or are clarification, amendment, successor, or other candidates? | Drafting or applying those changes |
| Authority-edit checkpoint | Which exact files and bounded changes, if any, may be prepared? | Changes outside the named manifest or automatic acceptance |
| Freeze checkpoint | Is a versioned successor Freeze appropriate after accepted source changes? | Rewriting an existing Freeze or skipping readiness review |
| Readiness checkpoint | Is the resulting authority set internally traceable and free of blocking inconsistency? | Implementation authorization by Wave 3 |
| Implementation-planning checkpoint | Does a later accepted baseline authorize a separate specification/planning process? | Any implementation unless a separate human decision says so |

## 11. Stop Conditions

A future governance sequence would stop at the affected boundary when:

- BDP-C01 or OQ-GOV-001 leaves the controlling precedence/edit order ambiguous;
- the proposed change class or exact source manifest has no human disposition;
- ADR-042 remains Proposed where a later step depends on acceptance;
- a conflict or Open Question needed for the proposed action remains unresolved and has not been
  explicitly deferred by an authorized human decision;
- a proposed edit would silently change an Accepted ADR, Genesis, a Freeze, or a controlling
  milestone baseline;
- a successor relationship would obscure provenance or lack a named predecessor;
- terminology would be made canonical without ontology and glossary review;
- the scope begins to define technical behavior, detailed UX, policy values, or engineering work;
  or
- a separate human checkpoint has not authorized the next bounded action.

These stop conditions describe review discipline; they are not automated gates.

## 12. Explicit Exclusions

Wave 3 does not:

- accept the Business Discovery architecture or ADR-042;
- modify or authorize modification of the Constitution, Milestone Lifecycle, Genesis, a Freeze,
  an Accepted ADR, or an approved milestone baseline;
- resolve, merge, rename, or close BDP-C01 through BDP-C15 or any of the 50 Open Questions;
- select a canonical name, authority owner, role, Permission, identity mechanism, policy value,
  score, Recommendation classification, or readiness rule;
- define detailed UX, implementation architecture, technical contracts, physical data, runtime
  behavior, release work, or engineering tasks;
- prescribe replacement text, content movement, deprecation, supersession, or historical status;
  or
- authorize Wave 4 or any later documentation or implementation step.

## 13. Human Review Readiness

This strategy is prepared for the **Human Architecture Review of the bounded Wave 3 Governance
integration strategy package**. That statement means only that the required review aids and
preservation boundaries are present. It does not mean the architecture, an authority-change path,
ADR-042, or a next wave is ready for approval.

The detailed candidate classifications, documentation-relationship candidates, dependencies,
conflict preservation, Open Question preservation, and reviewer coverage are recorded in:

- [Authority Change Classification Matrix](./08-AUTHORITY-CHANGE-CLASSIFICATION-MATRIX.md);
- [Successor and Migration Candidate Register](./09-SUCCESSOR-AND-MIGRATION-CANDIDATE-REGISTER.md); and
- [Wave 3 Dependency and Review Gate Register](./10-WAVE-3-DEPENDENCY-AND-REVIEW-GATE-REGISTER.md).
