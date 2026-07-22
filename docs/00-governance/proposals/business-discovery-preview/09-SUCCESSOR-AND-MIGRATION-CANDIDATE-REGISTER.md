# Business Discovery Preview — Successor and Migration Candidate Register

## 1. Metadata, Definitions, and Boundaries

| Metadata | Value |
|---|---|
| Version | v0.1 |
| Status | **Proposed for Authority Review** |
| Date | 2026-07-22 |
| Artifact type | Non-authoritative documentation-relationship review aid |
| Review owner | Nexoraxs Architecture Governance |
| Governing Wave 2 decision | [Human Architecture Review Decision — Wave 2](./HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-2.md) |
| Reviewed Wave 2 commit | `368c043e75422d10b3e6abc38548937b080d52ff` |
| Related ADR | [ADR-042](../../ADR/ADR-042-pre-registration-business-discovery.md) — **Proposed** |

> **Proposal-only review-aid boundary:** This file is non-authoritative. It does not authorize an
> edit to any listed authority. A listed document is a review candidate, not an approved target.
> A sequence is a proposed governance sequence, not a mandatory workflow. A successor candidate
> is not an approved supersession relationship. A migration candidate is not a content migration
> instruction. A dependency is a review dependency, not an implementation dependency. A
> checkpoint is a human-review checkpoint, not an automated gate. No content in this file may be
> promoted automatically into Genesis, a Freeze, an ADR, detailed UX, an implementation plan, or
> an engineering task.

For this register:

- **successor candidate** means a possible future versioned documentation relationship requiring
  a separate human decision; it does not replace the source;
- **amendment candidate** means a possible bounded edit proposal requiring a separate decision;
- **migration candidate** means content/provenance concerns that reviewers may need to map if a
  later documentation relationship is authorized; it is not a data, system, or content-movement
  instruction;
- **historical-labeling candidate** means possible relationship metadata only; Wave 3 does not
  change any source's status; and
- **current action** means what Wave 3 records for review, never an authorized change.

`SM` identifiers are review cross-references only. They are not work items, workflows, state
machines, contracts, migration operations, or implementation specifications.

## 2. Candidate Successor Relationships

No target is selected in this section. `Target not selected` is intentional because BDP-C01,
BDP-C02, OQ-GOV-001, and OQ-GOV-002 remain open.

| Stable ID | Source document | Candidate target or successor | Relationship under review | Content potentially affected | Content explicitly preserved | Conflict/Open Question dependencies | Risks | Human decision required | Current action |
|---|---|---|---|---|---|---|---|---|---|
| SM-001 | [Genesis Customer Journey](../../../01-genesis/11-CUSTOMER-JOURNEY.md) | Target not selected; possible future amended source or separately versioned Genesis journey successor | Amendment versus successor, subject to precedence/change-class decision | Account-first entry, proposed optional branch, convergence, evidence handoff, recurring Marketplace | Existing phases, formal Business/Business Architect boundary, Recommendations, Core/OS readiness separation, downstream lifecycles, source history | BDP-C01, BDP-C02, BDP-C03, BDP-C13; OQ-GOV-001, OQ-GOV-002 | Duplicate authority, concealed conflict, or lost current journey meaning | Architecture Governance; Product Architecture; Genesis authority | Record candidate only; select no relationship |
| SM-002 | [Core Platform Architecture](../../../02-core-platform/02-CORE-PLATFORM-ARCHITECTURE.md) | Target not selected; possible future clarification/amendment or successor Core baseline source | In-place clarification versus successor documentation | Formal-context convergence, evidence import explanation, existing readiness evaluation point | Business Architect pipeline, Candidate Fact/review/publication separation, Core Workspace Ready criteria, owner boundaries | BDP-C02, BDP-C03, BDP-C07, BDP-C11; OQ-GOV-002, OQ-IMP group, OQ-ECO-001 | Accidental pipeline/readiness redefinition | Architecture Governance; Core Platform; Business Architect; Business DNA | Record candidate only; no Core change |
| SM-003 | [Core Platform Freeze v1.0](../../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md) | Target not selected; possible future versioned Core Freeze successor | Successor relationship only after separately accepted underlying authority | Frozen manifest, guarantees, changed-scope record, remaining deferrals | Entire current Freeze, accepted ADR history, Genesis and baseline provenance | BDP-C01, BDP-C02; OQ-GOV-001, OQ-GOV-002 | Premature Freeze replacement or hidden baseline drift | Architecture Governance; Core Platform; Documentation Governance | Record conditional candidate only; Freeze unchanged |
| SM-004 | [Business Brain baseline](../../../03-business-brain/) and [Business Brain Freeze v1.0](../../../99-architecture-freeze/BUSINESS-BRAIN-FREEZE-v1.0.md) | Target not selected; possible clarification or future Freeze successor only if accepted scope changes frozen meaning | No-impact confirmation versus successor relationship | Health/evidence-strength wording, provisional guidance boundary, freshness relationship | Decision and Recommendation ownership, deterministic inputs, deferrals, all frozen guarantees | BDP-C05, BDP-C06, BDP-C15; OQ-SNP group, OQ-REC group | Converting presentation guidance into Business Brain or Recommendation authority | Business Brain; Recommendations; Data Governance; Architecture Governance | Record conditional candidate; no impact selected |
| SM-005 | [Marketplace Freeze v1.0](../../../99-architecture-freeze/MARKETPLACE-v1.0-FREEZE.md) | Target not selected; possible future successor only if separately accepted authority alters frozen Marketplace meaning | No-impact confirmation versus successor relationship | Product Hub/Marketplace recurrence and journey references | Marketplace bounded context, discovery/asset ownership, Product Hub separation, scoped lifecycle, source history | BDP-C11, BDP-C13; OQ-ECO-002, OQ-ECO-004 | Ownership transfer or access-rule invention | Marketplace; Product Hub; Architecture Governance | Record conditional candidate; Freeze unchanged |
| SM-006 | [Commerce OS Freeze v1.0](../../../99-architecture-freeze/COMMERCE-OS-v1.0-FREEZE.md) | Target not selected; possible future successor only if separately accepted authority alters OS meaning | No-impact confirmation versus successor relationship | Journey references to installation, setup, activation, OS readiness, and recovery ownership | Commerce independence, OS facts, setup ownership, Core/OS readiness separation, frozen history | BDP-C11; OQ-ECO-001, OQ-ECO-003 | Core journey could absorb OS behavior or imply readiness | Commerce OS; Operating Systems; Architecture Governance | Record conditional candidate; Freeze unchanged |
| SM-007 | [Architecture Program Completion Record](../../../99-architecture-freeze/NEXORAXS-ARCHITECTURE-v1.x-COMPLETE.md) | Target not selected; possible future relationship note after separately approved successor baselines | Relationship to possible future successor baselines | Program completion references and baseline manifest | Current completion record and every existing Freeze's provenance/status | BDP-C01, BDP-C02; OQ-GOV-001, OQ-GOV-002 | Reopening completed architecture by implication | Architecture Governance; Documentation Governance | Record dependency only; no relationship selected |

## 3. Candidate Amendment Relationships

An amendment candidate is not a proposed wording change. This section records only the possible
relationship and preserved content.

| Stable ID | Source document | Candidate target or successor | Relationship under review | Content potentially affected | Content explicitly preserved | Conflict/Open Question dependencies | Risks | Human decision required | Current action |
|---|---|---|---|---|---|---|---|---|---|
| SM-008 | [NexoraXS Constitution](../../../../.specify/memory/constitution.md) and [Milestone Lifecycle](../../MILESTONE-LIFECYCLE.md) | Same sources or separate governance interpretation record; target not selected | Clarification/amendment path for precedence inconsistency | Authority-order wording and change sequencing | All unaffected constitutional principles, current lifecycle history, existing source text until authorized | BDP-C01, BDP-C04; OQ-GOV-001 through OQ-GOV-003 | Selecting the wrong authority order or silently strengthening a lower source | Constitutional authority; Architecture Governance | Record candidate relationship only |
| SM-009 | [Canonical Glossary](../../glossary/GLOSSARY.md) | Same source or future glossary successor; target not selected | Future terminology amendment or successor relationship | Business Discovery Preview, Business Health Snapshot (working term), Discovery Evidence, claim/import distinctions | Business DNA Snapshot, Candidate Fact, Business DNA, Recommendation, organization ontology, historical spelling | BDP-C14, BDP-C15; OQ-ONT-001 through OQ-ONT-003 | Canonical collision or accidental approval of working language | Product Architecture; Enterprise UX; Business DNA; Documentation Governance | Record candidate only; terms remain non-canonical |
| SM-010 | [Genesis Business DNA](../../../01-genesis/03-BUSINESS-DNA.md) | Same source or target selected by future Genesis decision | Possible clarification of Discovery Evidence relationship | Pre-formal evidence boundary and governed transition explanation | Business-scoped ownership, software independence, publication/versioning, Business DNA Snapshot meaning | BDP-C03, BDP-C15; OQ-ONT-002, OQ-IMP-001 through OQ-IMP-006 | Discovery answers treated as canonical truth | Business DNA; Business Architect; Data Governance; Genesis authority | Record candidate only; no text drafted |
| SM-011 | [Core Domain Model](../../../02-core-platform/03-DOMAIN-MODEL.md) and [Core Data Ownership](../../../02-core-platform/04-DATA-OWNERSHIP.md) | Same sources, a future separate ADR, or successor baseline; target not selected | Clarification versus independently governed decision | Conceptual evidence relationship, owner/provenance gap, import integration | Existing Business Architect Session, Candidate Fact, Business DNA, canonical-owner and projection rules | BDP-C03, BDP-C07, BDP-C10; OQ-SES, OQ-IMP, OQ-PRV groups | Creation of a physical model or owner without authority | Core Platform; Business Architect; Data Governance; Security/Privacy; Architecture Governance | Record candidates only; no owner/model selected |
| SM-012 | [Permission Model](../../../02-core-platform/05-PERMISSION-MODEL.md), [Security Model](../../../02-core-platform/08-SECURITY-MODEL.md), and [Observability](../../../02-core-platform/09-OBSERVABILITY.md) | Same sources, future independent ADRs, or successor baseline; target not selected | Clarification versus independent policy/ADR decisions | Claim/import authorization, lifecycle policy dependencies, Audit/observability relationships | Authentication/Authorization separation, explicit scope, least privilege, minimization, owner enforcement, current deferrals | BDP-C07 through BDP-C10; OQ-ID, OQ-AUT, OQ-SES, OQ-PRV groups | Invented Permission, identity proof, policy value, or telemetry design | Identity and Access; Security; Privacy/Legal; Data Governance; Observability | Record dependency only; no mechanism/value selected |
| SM-013 | [Genesis Product Hub](../../../01-genesis/13-PRODUCT-HUB.md), [Subscription Model](../../../01-genesis/14-SUBSCRIPTION-MODEL.md), [OS Lifecycle](../../../01-genesis/16-OPERATING-SYSTEM-LIFECYCLE.md), and [Genesis Marketplace](../../../01-genesis/17-MARKETPLACE-ARCHITECTURE.md) | Same sources or future authority selected under OQ-GOV-002 | Clarification/no-impact relationships across downstream owners | Provisional presentation, recurring Marketplace, owner-specific recovery references | Recommendation ownership, commercial separation, Product Hub composition, Marketplace boundary, OS setup/readiness ownership | BDP-C05, BDP-C06, BDP-C11, BDP-C13; OQ-REC group, OQ-ECO group | Collapsed boundaries, false Recommendation/readiness, or duplicate authority | Product Hub; Marketplace; Commercial/Billing; Operating Systems; Business Brain | Record candidate only; no routing or lifecycle rule selected |
| SM-014 | [ADR-042](../../ADR/ADR-042-pre-registration-business-discovery.md) | ADR-042 itself or a separately numbered future ADR if Governance requires decomposition; target not selected | Revision, acceptance, rejection, deferral, or separation of independently changeable decisions | Principal pre-registration decision and explicitly bounded sub-decisions | Proposed status until human disposition, all Known Conflicts, Open Questions, non-implementation boundary | BDP-C01 through BDP-C15; all blocking OQs | Silent acceptance, oversized ADR scope, or hidden conflict resolution | Architecture Governance and all affected disciplines | Record possible disposition relationships only; ADR remains Proposed |

## 4. Candidate Historical/Duplicate Document Treatment

The sources below remain unchanged. Wave 3 does not label them superseded, deprecated,
historical, or obsolete. It records only a possible future relationship-review candidate already
identified by BDP-C12 and OQ-GOV-004.

| Stable ID | Source document | Candidate target or successor | Relationship under review | Content potentially affected | Content explicitly preserved | Conflict/Open Question dependencies | Risks | Human decision required | Current action |
|---|---|---|---|---|---|---|---|---|---|
| SM-015 | [`docs/genesis/11-CUSTOMER-JOURNEY.md`](../../../genesis/11-CUSTOMER-JOURNEY.md) | Possible future governance index or relationship notice; target not selected | Duplicate-source labeling/linking | Reader guidance about controlling source | Complete source content, path, history, and current status | BDP-C12; OQ-GOV-004 | Wrong source selected or history rewritten | Documentation Governance; Architecture Governance | Preserve unchanged; record candidate only |
| SM-016 | [`docs/NexoraXS_Platform_Documentation_v5_3_Final_Master_Architecture.md`](../../../NexoraXS_Platform_Documentation_v5_3_Final_Master_Architecture.md) | Possible future governance index or relationship notice; target not selected | Master-narrative relationship labeling/linking | Reader guidance and cross-reference context | Complete source content, path, history, and current status | BDP-C12; OQ-GOV-004 | Master narrative mistaken for controlling frozen authority | Documentation Governance; Architecture Governance | Preserve unchanged; record candidate only |
| SM-017 | [`docs/archives/`](../../../archives/) | Possible future governance index; target not selected | Archive relationship/index treatment | Discovery and navigation metadata only | Archived content, provenance, paths, and existing classifications | BDP-C12; OQ-GOV-004 | Erasure of provenance or accidental authority promotion | Documentation Governance | Preserve unchanged; record candidate only |

## 5. Candidate Content Migration Concerns

`Content migration` in this section means review of documentary meaning and provenance if a
future authority proposal is separately authorized. It does not mean copying text, moving files,
changing data, or directing implementation.

| Stable ID | Source document | Candidate target or successor | Relationship under review | Content potentially affected | Content explicitly preserved | Conflict/Open Question dependencies | Risks | Human decision required | Current action |
|---|---|---|---|---|---|---|---|---|---|
| SM-018 | [Wave 2 Customer Journey proposal](./03-CUSTOMER-JOURNEY-V2-PROPOSAL.md) | Future authority target not selected | Candidate mapping of approved subset only; never automatic promotion | Optional branch, exits, convergence, ownership handoffs | Review-aid status; `JY` identifiers; failures and unresolved annotations remain non-authoritative | BDP-C02, BDP-C04; OQ-GOV-002, OQ-GOV-003 | Review diagrams treated as approved Genesis text | Architecture Governance; Product Architecture; Enterprise UX | Record concern only; no content movement |
| SM-019 | [Wave 2 Decision Matrix](./04-JOURNEY-DECISION-MATRIX.md) and [Edge-case Matrix](./05-EDGE-CASE-AND-RECOVERY-MATRIX.md) | Future detailed documentation target not selected | Candidate revalidation/recreation, not promotion | Decision and recovery coverage | `JD`/`EC` identifiers and Logical Owner labels remain review constructs only; every unresolved decision remains open | BDP-C04, BDP-C07 through BDP-C10; all relevant OQs | Matrices become rules engines, state machines, owner maps, or specifications | Architecture Governance; Enterprise UX; Security; Privacy/Legal | Record concern only; no migration instruction |
| SM-020 | [Wave 1 Crosswalk](./01-AUTHORITY-AND-IMPACT-CROSSWALK.md) and [Open Questions](./02-OPEN-QUESTIONS-REGISTER.md) | Future traceability register selected by later Governance | Preservation/forward-link relationship | Conflict status, question IDs, source citations, decisions and deferrals | BDP-C01 through BDP-C15 exactly; all 50 OQ IDs/statuses exactly; original Wave 1 records | All conflicts and Open Questions | Lost stable IDs or silent resolution during document evolution | Architecture Governance; Documentation Governance | Preserve and cross-reference only |
| SM-021 | [ADR-042](../../ADR/ADR-042-pre-registration-business-discovery.md) and Wave 1/2 proposal package | Future accepted/rejected authority record selected by Governance | Decision-provenance relationship | Rationale, alternatives, risks, review findings, approved/rejected subsets | Original Proposed artifacts and both Human Architecture Review records | BDP-C01 through BDP-C15; all applicable OQs | Proposal history rewritten to appear authoritative | Architecture Governance; Documentation Governance | Preserve provenance only |
| SM-022 | Current Genesis/Core/Business Brain/Product Hub/Marketplace/Commercial/OS authority cited in this register | Future authority target not selected | Cross-source compatibility mapping | Only content explicitly accepted by a later human decision | All unaffected terms, ownership, readiness, lifecycle, and frozen guarantees | BDP-C01 through BDP-C15; OQ-GOV-001, OQ-GOV-002 and domain OQs | Broad copy could introduce contradiction or erase owner-specific context | Every affected authority owner; Architecture Governance | Record concern only; no replacement text |

## 6. Provenance-preservation Requirements

If a later human decision authorizes a documentation relationship, a future proposal could be
reviewed against these provenance concerns:

1. keep every existing source and commit reference discoverable;
2. identify the exact reviewed predecessor, accepted decision, and bounded changed scope;
3. distinguish unchanged inherited authority from newly accepted wording;
4. retain BDP-C01 through BDP-C15 and all Open Question dispositions without retroactive editing;
5. keep ADR-042's earlier Proposed state and review history visible after any future disposition;
6. identify any successor relationship explicitly rather than implying it through dates or file
   order;
7. preserve the Wave 1 and Wave 2 review-aid boundaries and Human Architecture Review records;
8. retain the canonical Business DNA, Candidate Fact, Recommendation, readiness, Product Hub,
   Marketplace, commercial, and OS ownership lineage; and
9. revalidate all local references and the controlling Freeze manifest after any separately
   authorized documentation action.

These are candidate review requirements only; Wave 3 authorizes no such action.

## 7. Candidate Rollback/Rejection Outcomes

| Future human disposition | Candidate documentation outcome for review | Authority effect in Wave 3 |
|---|---|---|
| Proposal rejected | Preserve current authority and the complete proposal/review history; close no source through this register | None |
| Proposal deferred | Preserve current authority, ADR-042 Proposed status, conflicts, Open Questions, and this candidate register | None |
| Proposal partially accepted | Consider only the explicitly accepted subset in a separately authorized authority proposal; leave all other content Proposed/open | None |
| Candidate amendment rejected | Keep the source unchanged and preserve the rejection record | None |
| Candidate successor rejected | Keep the current source/Freeze controlling and preserve the candidate history | None |
| Future proposed authority edit withdrawn before acceptance | Retain current authority and record the withdrawn proposal according to Governance | None |

No row prescribes a rollback operation, file restoration, or technical migration.

## 8. Explicit Non-authorization Statement

This register does not authorize a successor, amendment, supersession, historical label, content
movement, new ADR, Freeze, readiness action, implementation plan, or technical change. It marks no
document superseded, deprecated, historical, obsolete, or approved for editing. Every candidate
requires a separate human disposition, and any later authorized work would require its own exact
file scope and review gate.

Related Wave 3 records:

- [Governance Integration Strategy](./07-GOVERNANCE-INTEGRATION-STRATEGY.md)
- [Authority Change Classification Matrix](./08-AUTHORITY-CHANGE-CLASSIFICATION-MATRIX.md)
- [Wave 3 Dependency and Review Gate Register](./10-WAVE-3-DEPENDENCY-AND-REVIEW-GATE-REGISTER.md)
