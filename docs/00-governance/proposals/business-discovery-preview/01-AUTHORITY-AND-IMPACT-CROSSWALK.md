# Business Discovery Preview — Authority and Impact Crosswalk

| Metadata | Value |
|---|---|
| Version | v0.1 |
| Status | **Proposed for Authority Review** |
| Date | 2026-07-22 |
| Artifact type | Non-authoritative authority analysis and traceability register |
| Parent proposal | [Business Discovery Preview Proposal](./00-BUSINESS-DISCOVERY-PREVIEW-PROPOSAL.md) |
| Related ADR | [ADR-042](../../ADR/ADR-042-pre-registration-business-discovery.md) — Proposed |
| Open questions | [Open Questions Register](./02-OPEN-QUESTIONS-REGISTER.md) |

> This crosswalk records authority and impact. It does not approve the proposal and does not
> authorize modification of any listed source or affected document.

## 1. Purpose and Method

This artifact carries the Stage A Authority Review into the Wave 1 proposal package. It:

- classifies materially relevant repository sources;
- preserves the unresolved authority-precedence inconsistency;
- records every material conflict without silently choosing a new rule;
- connects proposal decisions to supporting and conflicting authority;
- identifies conceptual impact on ontology, state, UX, Security, Privacy, permissions, data,
  Product Hub, Marketplace, Operating Systems, readiness, and future implementation; and
- provides stable traceability identifiers for Architecture Review and later authorized waves.

Classifications describe how each source applies to this proposal. Age alone does not reduce
authority. Historical sources remain intact and are not silently superseded.

## 2. Authority Inventory Summary

### 2.1 Authoritative

| Source | Relevant authority |
|---|---|
| [Core Platform Freeze v1.0 / Documentation Baseline v1.0.1](../../../99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md) | Frozen Core manifest, guarantees, Accepted ADR set, and current Customer Journey inclusion |
| [Business Brain Freeze v1.0](../../../99-architecture-freeze/BUSINESS-BRAIN-FREEZE-v1.0.md) | Decision/AI boundary and deferred health, confidence, scoring, privacy, and lifecycle detail |
| Other applicable files under `docs/99-architecture-freeze/` | Controlling Marketplace, Commerce, architecture-program, and readiness baselines within their scope |
| [Architectural Milestone Lifecycle](../../MILESTONE-LIFECYCLE.md) | Proposal-first process, review/approval, bounded documentation waves, Freeze, and readiness gates |
| [ADR governance](../../ADR/README.md) | ADR lifecycle, numbering, status, and conflict/supersession rules |
| [Canonical Glossary](../../glossary/GLOSSARY.md) | Canonical terminology, ownership, scopes, and preserved ambiguities |
| Accepted ADRs under `docs/00-governance/ADR/` | Durable accepted decisions, especially ADR-003 through ADR-005, ADR-013 through ADR-028, ADR-034, ADR-037, ADR-038, and ADR-040 |
| [Genesis Constitution](../../../01-genesis/02-CONSTITUTION.md) | Product constitutional principles and ownership boundaries |
| [Genesis Business DNA](../../../01-genesis/03-BUSINESS-DNA.md) | Business-scoped, software-independent Business DNA |
| [Genesis Capabilities](../../../01-genesis/04-CAPABILITIES.md) | Capability-first reasoning |
| [Genesis Business Brain](../../../01-genesis/06-BUSINESS-BRAIN.md) | Business understanding and deterministic intelligence direction |
| [Genesis Recommendation Engine](../../../01-genesis/07-RECOMMENDATION-ENGINE.md) | Recommendation purpose and explainability |
| [Genesis Ontology](../../../01-genesis/10-NEXORAXS-ONTOLOGY.md) | Workspace, Business, Business Unit, Department, Branch, Business DNA, and product ontology |
| [Genesis Customer Journey](../../../01-genesis/11-CUSTOMER-JOURNEY.md) | Current account-first journey, official Business Architect, Recommendations, readiness, Product Hub, OS setup, and growth |
| [Genesis Workspace Lifecycle](../../../01-genesis/12-WORKSPACE-LIFECYCLE.md) | Workspace creation and lifecycle boundary |
| [Genesis Product Hub](../../../01-genesis/13-PRODUCT-HUB.md) | Product Hub purpose, inputs, outputs, lifecycle, setup handoff, and Marketplace connection |
| [Genesis Subscription Model](../../../01-genesis/14-SUBSCRIPTION-MODEL.md) | Plans, subscription, and entitlement separation |
| [Genesis Business Lifecycle](../../../01-genesis/15-BUSINESS-LIFECYCLE.md) | Formal Business lifecycle |
| [Genesis Operating System Lifecycle](../../../01-genesis/16-OPERATING-SYSTEM-LIFECYCLE.md) | Installation, setup, activation, readiness, operation, pause/archive/removal |
| [Genesis Marketplace Architecture](../../../01-genesis/17-MARKETPLACE-ARCHITECTURE.md) | Marketplace boundary and governed assets |
| [Core Platform Architecture](../../../02-core-platform/02-CORE-PLATFORM-ARCHITECTURE.md) | Business Architect pipeline, state, ownership, Product Hub coordination, readiness criteria |
| [Core Domain Model](../../../02-core-platform/03-DOMAIN-MODEL.md) | Canonical aggregates, Business Architect Session, Candidate Facts, Business DNA and provenance |
| [Core Data Ownership](../../../02-core-platform/04-DATA-OWNERSHIP.md) | Single-owner write rules and projection boundaries |
| [Core Permission Model](../../../02-core-platform/05-PERMISSION-MODEL.md) | Authentication/Authorization separation, explicit scope, deferred roles/delegation |
| [Core Security Model](../../../02-core-platform/08-SECURITY-MODEL.md) | Identity, session, authorization, data protection, and deferred Security/Privacy mechanisms |
| [NexoraXS Constitution](../../../../.specify/memory/constitution.md) | Current freeze-first authority order and engineering governance |

### 2.2 Supporting

| Source | Supporting use |
|---|---|
| [Design Philosophy](../../../10-design-intelligence/01-DESIGN-PHILOSOPHY.md) | Understand before recommending; customer experience principles |
| [Core Observability](../../../02-core-platform/09-OBSERVABILITY.md) | Future failure, correlation, minimization, and operational evidence obligations |
| [Documentation Policy](../../../11-execution/09-DOCUMENTATION-POLICY.md) | Documentation synchronization and traceability |
| [Frontend Code Reconciliation Audit](../../../08-implementation-audit/FRONTEND-CODE-RECONCILIATION-AUDIT-v1.0.md) | Current implementation/documentation drift context; not proposal approval |

### 2.3 Historical or Conflicting References

| Source | Classification | Treatment |
|---|---|---|
| [`docs/genesis/11-CUSTOMER-JOURNEY.md`](../../../genesis/11-CUSTOMER-JOURNEY.md) | Historical / Conflicting duplicate | Preserve for traceability; do not use to override the frozen `docs/01-genesis` journey |
| [`docs/NexoraXS_Platform_Documentation_v5_3_Final_Master_Architecture.md`](../../../NexoraXS_Platform_Documentation_v5_3_Final_Master_Architecture.md) | Historical / Conflicting master narrative | Preserve; do not use as controlling authority where it conflicts with Freeze/Governance/Genesis |
| Files under `docs/archives/` | Historical | Provenance only; never authority for the proposed change |
| Earlier proposals, reviews, audits, and reconciliation reports | Historical or Supporting by scope | Use for provenance and discovered risk, not silent authority changes |

### 2.4 Draft / Proposed

| Source | Classification | Authority effect |
|---|---|---|
| [Business Discovery Preview Proposal](./00-BUSINESS-DISCOVERY-PREVIEW-PROPOSAL.md) | Proposed for Authority Review | None while Proposed |
| [ADR-042](../../ADR/ADR-042-pre-registration-business-discovery.md) | Proposed | None while Proposed |
| [Open Questions Register](./02-OPEN-QUESTIONS-REGISTER.md) | Proposed governance register | Records unresolved decisions; does not decide them |
| [ADR-041](../../ADR/ADR-041-global-localization-internationalized-representation.md) | Proposed | Occupies its ADR number but is not accepted authority |

### 2.5 Missing or Requires Clarification

| Missing/unclear authority | Classification | Consequence |
|---|---|---|
| Single consistent authority-precedence model | Requires Clarification | BDP-C01 blocks architecture acceptance |
| Anonymous Discovery ownership and lifecycle authority | Missing | No canonical anonymous-session owner, states, or retention policy may be inferred |
| Claim proof, replay, duplicate, dispute, and cross-device recovery policy | Missing | Claim cannot be designed or implemented |
| Target-Business import permission and conflict policy | Missing / Requires Clarification | Import grants, selectors, overwrite, and partial behavior cannot be invented |
| Personal-data classification and anonymous privacy-right process | Missing / Deferred | Retention, deletion/anonymization, export, residency, and legal hold cannot be decided here |
| Canonical Business Health, fit, confidence, and setup-effort models | Missing / Deferred | Exact numeric claims are prohibited |
| Provisional guidance relationship to canonical Recommendation lifecycle | Requires Clarification | Output must not be called a canonical Recommendation |
| Complete role catalog and consultant/partner delegation semantics | Missing / Deferred | Persona labels cannot grant permissions |
| Verification mechanism and triggering policy | Missing / Deferred | Journey must remain conditional and mechanism-neutral |

## 3. Authority-Precedence Inconsistency

The repository does not currently express one consistent precedence rule:

- `.specify/memory/constitution.md:67-83` states: Freeze, Governance, Genesis, approved milestone
  baselines, Constitution, then lower-level guidance.
- `docs/00-governance/MILESTONE-LIFECYCLE.md:17-30`,
  `docs/00-governance/ADR/README.md:1-18`, and
  `docs/99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md:35-37` state that Genesis remains the
  ultimate authority while also recognizing Governance, Accepted ADRs, Freeze, and approved
  milestone artifacts.

This Wave 1 package does not choose between those statements. Both candidate precedence models
lead to the same immediate operational conclusion: the frozen/current account-first Customer
Journey controls today, and a Proposed document cannot change it. The distinction matters for
which source must be amended first and how a later acceptance/supersession chain is recorded.

**Required handling:** Architecture Governance must decide OQ-GOV-001 before ADR-042 can be
Accepted or any affected authority is edited.

## 4. Conflict Register

Status values in this register are `Resolved by existing authority`, `Proposed resolution`, or
`Human decision required`. A proposed resolution is non-authoritative and is not implementation
permission.

### BDP-C01 — Freeze-first versus Genesis-ultimate precedence

| Field | Record |
|---|---|
| Existing Authority | Constitution declares Freeze → Governance → Genesis; Milestone Lifecycle, ADR governance, and Core Freeze state Genesis remains ultimate. |
| Proposed Change | None in Wave 1; request one governing interpretation and correction path. |
| Rationale | Review, supersession, and edit order must be deterministic. |
| Impact | Entire proposal lifecycle, ADR acceptance, Genesis/Freeze update sequence. |
| Risk | Conflicting reviewers could approve incompatible authority paths. |
| Dependency | OQ-GOV-001; Architecture Governance. |
| Recommended handling | Publish an explicit precedence ruling through authorized Governance; align contradictory statements without rewriting history. |
| Decision owner | Architecture Governance / constitutional authority. |
| Classification | Technical Governance. |
| Status | **Human decision required**. |

### BDP-C02 — Frozen account-first journey versus pre-registration Discovery

| Field | Record |
|---|---|
| Existing Authority | Genesis Customer Journey and Core Freeze place Sign Up / Login before Workspace, Business, and Business Architect. |
| Proposed Change | Add an optional Discovery branch before account creation, converging at Create Account or Sign In. |
| Rationale | Demonstrate business understanding and value before commitment. |
| Impact | Acquisition, identity entry, journey diagrams, resume/navigation, Freeze manifest, later UX. |
| Risk | Silent implementation would violate the frozen journey. |
| Dependency | OQ-GOV-002; ADR-042 Architecture Review and acceptance; successor/updated authority and readiness validation. |
| Recommended handling | Keep proposal non-authoritative; if approved, update named authority through Governance and a successor/updated Freeze. |
| Decision owner | Product Architecture and Architecture Governance. |
| Classification | Product / Architecture / UX. |
| Status | **Human decision required**. |

### BDP-C03 — Direct-answer-to-Business-DNA wording versus Candidate Fact pipeline

| Field | Record |
|---|---|
| Existing Authority | Genesis Customer Journey says every answer updates Business DNA; ADR-016 and Core architecture distinguish raw input, Candidate Facts, inferred facts, review, and publication. |
| Proposed Change | Treat Discovery output only as non-canonical evidence eligible for later authorized Candidate Fact import. |
| Rationale | Preserve provenance, review, correction, and Business-scoped publication. |
| Impact | Evidence terminology, Business Architect integration, Genesis wording if later approved. |
| Risk | Anonymous or unreviewed answers could be treated as published truth. |
| Dependency | OQ-IMP-001 through OQ-IMP-003; Governance interpretation of existing sources. |
| Recommended handling | Apply the accepted governed pipeline to all imported Discovery evidence; record the Genesis wording conflict for an authorized clarification. |
| Decision owner | Core Business Architect / Business DNA authority / Architecture Governance. |
| Classification | Architecture / Data Governance. |
| Status | **Proposed resolution**; authority wording still needs human disposition. |

### BDP-C04 — Proposal-first lifecycle versus detailed documentation in the same wave

| Field | Record |
|---|---|
| Existing Authority | Milestone Lifecycle requires Proposal, Architecture Review, Approval, then detailed Documentation Waves. |
| Proposed Change | Wave 1 creates only the proposal, crosswalk, open questions, and Proposed ADR-042. |
| Rationale | Preserve proposal-first governance and prevent premature implementation contracts. |
| Impact | Customer Journey v2, decision matrix, edge cases, Genesis/Freeze updates, readiness validation. |
| Risk | Detailed documents could be mistaken for approved architecture. |
| Dependency | Explicit proposal approval and later bounded wave authorization. |
| Recommended handling | Stop after the four Wave 1 files; do not start later documents. |
| Decision owner | Architecture Governance. |
| Classification | Technical Governance. |
| Status | **Resolved by existing authority for Wave 1**; later-wave approval remains open. |

### BDP-C05 — Unsupported numeric scores and setup-time claims

| Field | Record |
|---|---|
| Existing Authority | Genesis Product Hub contains example percentages, scores, and a precise setup-time example; Business Brain Freeze defers health, confidence, scoring, uncertainty, and partial-result models. |
| Proposed Change | Prohibit exact numeric claims in Discovery until an Accepted explainable model exists; allow carefully reviewed qualitative evidence language. |
| Rationale | Avoid false precision, misleading conversion, and untestable claims. |
| Impact | Snapshot, product cards, provisional guidance, UX content, later test evidence. |
| Risk | Commercial misrepresentation and incorrect decision signals. |
| Dependency | OQ-REC-002 and OQ-REC-004; Business Brain/Recommendation and Product review. |
| Recommended handling | Treat Genesis numbers as examples, not an authorized calculation model; establish a model through Governance before use. |
| Decision owner | Business Brain / Recommendation authority with Product, Data, UX, and Governance. |
| Classification | Product / UX / Data Governance / Commercial. |
| Status | **Proposed resolution**; model decision remains open. |

### BDP-C06 — Canonical Recommendation lifecycle versus provisional guidance

| Field | Record |
|---|---|
| Existing Authority | Recommendations are capability-first, explainable, optional, and follow governed generation/review/acceptance or rejection; no canonical `Provisional Recommendation` type exists. |
| Proposed Change | Use presentation-only `provisional guidance` before official Recommendation conditions are met. |
| Rationale | Provide early value without creating an unapproved Recommendation class. |
| Impact | Terminology, Snapshot UX, Product Hub handoff, staleness, analytics. |
| Risk | Guidance could be persisted or presented as canonical fit. |
| Dependency | OQ-REC-001 and OQ-REC-003; glossary and Recommendation-owner review. |
| Recommended handling | Keep guidance outside the canonical Recommendation lifecycle unless a later Accepted decision explicitly integrates it. |
| Decision owner | Recommendation owner / Architecture Governance / Product. |
| Classification | Product / Architecture / UX / Data Governance. |
| Status | **Proposed resolution**; human terminology decision required. |

### BDP-C07 — Missing anonymous session, claim, import, retention, and privacy authority

| Field | Record |
|---|---|
| Existing Authority | Core Security defines general identity, authorization, session, and data-protection principles but defers mechanisms and detailed policy; no anonymous Discovery aggregate exists. |
| Proposed Change | Recognize conceptual separate progress, Snapshot, lifecycle, claim, import, and replacement dimensions without physical design. |
| Rationale | Expose independent concerns and prevent a misleading overloaded enum. |
| Impact | Identity, Security, Privacy, data lifecycle, provenance, Audit, future contracts. |
| Risk | Unauthorized claim/import, privacy harm, noncompliant retention, or inconsistent retry. |
| Dependency | OQ-SES-001 through OQ-SES-006; OQ-PRV-001 through OQ-PRV-006. |
| Recommended handling | Keep conceptual only; obtain policy and owner decisions before detailed design. |
| Decision owner | Identity and Access, Security, Privacy/Legal, Data Governance, Architecture Governance. |
| Classification | Security / Privacy / Data Governance / Architecture. |
| Status | **Human decision required**. |

### BDP-C08 — Persona labels versus deferred permissions and delegation

| Field | Record |
|---|---|
| Existing Authority | Core Permission Model defines explicit scope and owner authorization but defers complete role catalogs and delegation. |
| Proposed Change | Treat named personas only as UX archetypes; derive actions from canonical Authorization Context. |
| Rationale | Journey analysis needs personas without inventing grants. |
| Impact | Routing, selectors, invitations, consultant/partner experience, copy. |
| Risk | Persona names could become accidental roles or privilege. |
| Dependency | OQ-AUT-001 through OQ-AUT-003. |
| Recommended handling | Do not map persona to Permission until the owning authority approves it. |
| Decision owner | Identity and Access / Permission owners / Architecture Governance. |
| Classification | Security / UX / Architecture. |
| Status | **Resolved by existing authority at principle level**; detailed routing requires human decisions. |

### BDP-C09 — Conditional verification versus deferred mechanisms

| Field | Record |
|---|---|
| Existing Authority | Core Security requires approved identity proof but defers methods, factors, providers, recovery, and step-up rules. |
| Proposed Change | Include a conditional, mechanism-neutral verification-resolution branch. |
| Rationale | Avoid assuming verification is universally required or selecting an unapproved mechanism. |
| Impact | Sign-up/sign-in, recovery, claim, cross-device resume, Security UX. |
| Risk | Premature mechanism choice or a bypass of required proof. |
| Dependency | OQ-ID-001 through OQ-ID-003. |
| Recommended handling | Let future approved Identity policy decide requirement and mechanism; deny protected continuation safely when unresolved. |
| Decision owner | Core Identity and Access / Security. |
| Classification | Security / UX. |
| Status | **Proposed resolution**; mechanism remains open. |

### BDP-C10 — Deferred privacy, retention, deletion, anonymization, residency, export, and legal hold

| Field | Record |
|---|---|
| Existing Authority | Core Security requires purpose/minimization and future-approved lifecycle policy; Business Brain Freeze defers detailed policy. |
| Proposed Change | State obligations and open questions only; choose no values or mechanisms. |
| Rationale | Anonymous evidence creates privacy obligations before tenant context exists. |
| Impact | Collection notice, persistence, claim, import, export/email, deletion, logs, analytics, backup, Audit. |
| Risk | Regulatory, contractual, trust, security, and operational harm. |
| Dependency | OQ-PRV-001 through OQ-PRV-006; Privacy/Legal, Security, and Data Governance review. |
| Recommended handling | Complete data classification and policy decisions before detailed architecture or implementation. |
| Decision owner | Privacy/Legal, Security, Data Governance, Architecture Governance. |
| Classification | Privacy / Security / Data Governance. |
| Status | **Human decision required**. |

### BDP-C11 — Product Hub coordination versus Operating System ownership

| Field | Record |
|---|---|
| Existing Authority | Product Hub owns discovery/composition/handoff; Operating Systems own setup and operational facts; commercial and readiness states are distinct. |
| Proposed Change | Route only governed downstream outputs to Product Hub; preserve OS-owned setup and readiness. |
| Rationale | Early guidance must not collapse product choice, subscription, installation, setup, or readiness. |
| Impact | Product Hub presentation, subscription handoff, installation initiation, recovery, OS routing. |
| Risk | Core/Product Hub could absorb OS domain behavior or imply readiness. |
| Dependency | OQ-ECO-001 through OQ-ECO-003. |
| Recommended handling | Preserve Accepted ADR-018 through ADR-026; document only compatible UX routing after approval. |
| Decision owner | Product Hub, commercial owner, applicable OS owner, Architecture Governance. |
| Classification | Architecture / Commercial / UX. |
| Status | **Resolved by existing authority** at boundary level. |

### BDP-C12 — Duplicate or legacy journey and master-architecture documents

| Field | Record |
|---|---|
| Existing Authority | Frozen `docs/01-genesis/11-CUSTOMER-JOURNEY.md` controls; duplicate `docs/genesis/...`, root master architecture, and archives retain historical/conflicting content. |
| Proposed Change | None in Wave 1; cite legacy files as provenance only. |
| Rationale | Preserve history and avoid accidental duplicate authority. |
| Impact | Search, links, reviewer interpretation, later documentation update plan. |
| Risk | A contributor may edit or follow the wrong journey. |
| Dependency | OQ-GOV-004; documentation-governance review. |
| Recommended handling | Add explicit relationship/deprecation metadata only through a separately authorized documentation-governance action; never silently rewrite history. |
| Decision owner | Documentation Governance / Architecture Governance. |
| Classification | Technical Governance. |
| Status | **Human decision required** for cleanup; current authority selection is resolved by Freeze. |

### BDP-C13 — Marketplace as recurring destination

| Field | Record |
|---|---|
| Existing Authority | Genesis journey shows Marketplace in Growth; Product Hub and Marketplace authority also permit ongoing discovery, acquisition, update, and removal journeys. |
| Proposed Change | Show Marketplace as a recurring authorized discovery/growth destination rather than only the terminal step of one chain. |
| Rationale | Reflect lifecycle recurrence without transferring ownership. |
| Impact | Journey diagrams, navigation, Product Hub/Marketplace relationship. |
| Risk | A new diagram could overstate pre-readiness access or collapse bounded contexts. |
| Dependency | OQ-ECO-002; Product Hub and Marketplace owner review. |
| Recommended handling | Clarify recurrence in a later approved Customer Journey wave while preserving access, entitlement, applicability, and route authority. |
| Decision owner | Product Hub / Marketplace / Architecture Governance. |
| Classification | Product / Architecture / UX. |
| Status | **Proposed resolution**. |

### BDP-C14 — Canonical Nexoraxs product identity terminology

| Field | Record |
|---|---|
| Existing Authority | Canonical glossary defines Nexoraxs Platform as a Business Operating Intelligence Platform; repository titles contain `NexoraXS` and `Nexoraxs` variants. |
| Proposed Change | Use `Nexoraxs Business Operating Intelligence Platform` in proposal statements; do not rename existing files or authority. |
| Rationale | Avoid product-category drift while preserving historical spelling. |
| Impact | Proposal metadata, future customer-facing copy, glossary review. |
| Risk | Silent brand/ontology renaming or inconsistent search terms. |
| Dependency | OQ-ONT-003; Product/Documentation Governance. |
| Recommended handling | Apply current canonical product definition; resolve branding capitalization separately without rewriting history. |
| Decision owner | Product authority / Documentation Governance. |
| Classification | Product / Technical Governance. |
| Status | **Resolved by existing authority** for category; spelling governance requires clarification. |

### BDP-C15 — Business Health Snapshot versus Business DNA Snapshot

| Field | Record |
|---|---|
| Existing Authority | Business DNA Snapshot is a canonical published, versioned view of one Business DNA identity; no canonical Business Health Snapshot exists. |
| Proposed Change | Use Business Health Snapshot only as proposed, non-canonical presentation terminology. |
| Rationale | Describe early value without mislabeling it as published Business DNA. |
| Impact | Glossary, UX labels, Snapshot staleness/versioning, accessibility and localization. |
| Risk | Visitors or implementers may treat anonymous output as published Business DNA. |
| Dependency | OQ-ONT-001 and OQ-SNP-003; glossary/UX review. |
| Recommended handling | Require explicit non-canonical labeling; rename if Architecture Review finds collision risk unacceptable. |
| Decision owner | Product, Enterprise UX, Business DNA owner, Documentation Governance. |
| Classification | Product / UX / Data Governance. |
| Status | **Human decision required**. |

## 5. Decision-to-Authority Crosswalk

| Decision ID | Proposed decision | Supporting authority | Conflict(s) | State/ontology impact | UX/Security/Privacy impact | Future documentation impact | Review status |
|---|---|---|---|---|---|---|---|
| BDP-D01 | Optional pre-registration Discovery branch | Genesis trust/value philosophy; ADR-015 infer before asking | C01, C02, C04 | New proposed journey branch; no canonical entity | Acquisition value, accessible branch/convergence | Customer Journey and Freeze only after approval | Human decision required |
| BDP-D02 | Discovery never creates formal Core/commercial/readiness state | ADR-003–005, ADR-018, ADR-021–026 | C02, C11 | No Workspace, Business, DNA, subscription, installation, or readiness transition | Prevent misleading success states | Later journey/spec must state non-equivalence | Aligned principle; proposal acceptance pending |
| BDP-D03 | Discovery output is non-canonical evidence | ADR-005, ADR-016, Candidate Fact glossary | C03, C15 | Candidate Fact import only after formal context | Source labeling, correction, privacy notice | Business Architect integration detail after policy approval | Proposed resolution |
| BDP-D04 | Business Health Snapshot is non-canonical presentation | Business DNA Snapshot glossary boundary; Business Brain deferrals | C05, C15 | No Business DNA Snapshot or health aggregate created | Explicit labels; no numeric precision | Glossary/UX decision required | Human decision required |
| BDP-D05 | Use provisional guidance, not a new Recommendation status | ADR-013, Recommendation governance | C05, C06 | No canonical Recommendation transition | Avoid false authority/product funnel | Recommendation terminology decision | Human decision required |
| BDP-D06 | Identity verification is conditional and mechanism-neutral | Core Security authentication section | C09 | No new verification state machine approved | Recovery/accessibility/Security UX unresolved | Identity decision required | Proposed boundary only |
| BDP-D07 | Claim and import are separate operations | Permission/security owner authorization; ADR-034 | C07, C08, C09, C10 | Separate conceptual claim/import dimensions | Prevent account/session/tenant escalation | Security/Privacy/contract detail after approval | Human decision required |
| BDP-D08 | Import requires selected formal Business and current authorization | ADR-003–005, ADR-016, ADR-034, Permission Model | C03, C07, C08 | Imports draft/Candidate Facts; no publication | Selector, denial, audit, conflict UX | Permission and import policy required | Principle aligned; details open |
| BDP-D09 | Preserve provenance through import/review | ADR-016, ADR-038, glossary Provenance | C03, C07, C10 | Evidence source/version/history retained | Notice, correction, minimization, rights | Data governance policy required | Principle aligned; details open |
| BDP-D10 | Model orthogonal anonymous state dimensions | Separation-of-concerns and resumability principles | C07 | Proposed progress/Snapshot/lifecycle/claim/import/replacement dimensions | Clear recovery; privacy interactions open | Conceptual model only after approval | Human decision required |
| BDP-D11 | Entry Intent personalizes presentation only | Capability-first ADR-013 and product independence | C06 | No Business DNA or Recommendation evidence | Personalized relevance without fabricated fit | Future journey/UX glossary impact | Proposed resolution |
| BDP-D12 | Product Hub composes/hands off; OS owns setup/readiness | ADR-018–020, ADR-023–026 | C11 | Existing states unchanged | Recovery routes and ownership labels | No owner change; later journey clarification | Resolved by existing authority |
| BDP-D13 | Marketplace is recurring authorized destination | ADR-027–028; Genesis growth/Product Hub | C13 | No lifecycle or access rule changed | Non-linear discovery/growth navigation | Later journey wave only | Proposed clarification |
| BDP-D14 | No exact confidence/health/fit/setup-time numbers without model | Business Brain Freeze deferred decisions | C05 | No scoring state/model | Explainable qualitative output only | Model requires separate Governance | Proposed resolution |
| BDP-D15 | Persona names are UX archetypes only | Permission Model explicit scope and deferred roles | C08 | No role/Permission ontology change | Route based on current context, not persona | Persona matrix only after approval | Resolved by existing authority at principle level |

## 6. Impact Assessment

### 6.1 Impacted authoritative documents if later approved

Listing a document below does not authorize editing it.

| Document | Potential later impact | Required control before edit |
|---|---|---|
| `docs/01-genesis/11-CUSTOMER-JOURNEY.md` | Replace the account-first-only overview with an approved optional branch and convergence | Precedence ruling, proposal approval, Accepted ADR-042, explicit file authorization |
| `docs/01-genesis/03-BUSINESS-DNA.md` | Clarify that Discovery Evidence is outside Business DNA until governed publication | Same, plus Business DNA owner review |
| `docs/01-genesis/10-NEXORAXS-ONTOLOGY.md` | Add only approved proposed terms/relationships | Glossary and ontology approval |
| `docs/01-genesis/13-PRODUCT-HUB.md` | Clarify provisional presentation and recurring Marketplace journey without owner change | Product Hub/Marketplace review |
| `docs/01-genesis/12-WORKSPACE-LIFECYCLE.md` and `15-BUSINESS-LIFECYCLE.md` | Clarify account/Workspace/Business creation convergence and no pre-formal attachment | Core organization owner review |
| `docs/00-governance/glossary/GLOSSARY.md` | Define approved Discovery, Snapshot, evidence, Entry Intent, claim/import terms; avoid role/Recommendation synonyms | Terminology approval and accepted authority |
| `docs/00-governance/ADR/README.md` | Update current decision-set index to include permanent Proposed/decided ADRs | Separate governance editorial authorization |
| `docs/02-core-platform/02-CORE-PLATFORM-ARCHITECTURE.md` | Explain authorized import integration without redefining the pipeline | Accepted decision and documentation-wave authorization |
| `docs/02-core-platform/03-DOMAIN-MODEL.md` | Explain evidence/provenance relationship only; physical model remains separately governed | Data owner and architecture approval |
| `docs/02-core-platform/05-PERMISSION-MODEL.md` | Add approved import action/authorization semantics if required | Permission-owner and Security approval |
| `docs/02-core-platform/08-SECURITY-MODEL.md` | Add approved anonymous lifecycle, claim, privacy, and audit requirements | Security/Privacy policy approval |
| Controlling Freeze and readiness artifacts | Record accepted successor baseline and validate no blocking inconsistency | Architecture Review, Freeze process, readiness gate |

### 6.2 ADR impact

- ADR-042 is the proposed principal decision and remains non-authoritative.
- ADR-003, ADR-004, ADR-005, ADR-013 through ADR-020, ADR-023 through ADR-028, ADR-034,
  ADR-037, ADR-038, and ADR-040 are not modified or superseded by Wave 1.
- If accepted, ADR-042 would explicitly amend the account-first-only journey interpretation; its
  exact supersession relationship depends on OQ-GOV-001 and Architecture Review.
- If review reveals independently changeable decisions—such as a canonical anonymous-data owner,
  new Recommendation lifecycle state, or durable claim/import lifecycle—separate ADRs may be
  required rather than expanding ADR-042 silently.

### 6.3 Glossary and ontology impact

- `Business Discovery Preview`, `Business Health Snapshot`, `Discovery Evidence`, `Entry Intent`,
  claim, and import are proposed terms only.
- Business Health Snapshot must remain distinct from canonical Business DNA Snapshot.
- Anonymous Discovery must not be called Business Architect Session.
- Persona labels must not become canonical roles.
- No change is proposed to Workspace → Business → Business Unit → Department/Branch, Business DNA
  scope, Capability ownership, or OS operational ownership.

### 6.4 State-machine impact

- Existing Business Architect states remain unchanged:
  `not_started → in_progress → review_required → publish_ready → published → analyzed → completed`,
  with approved exceptional states.
- Imported evidence may enter or enrich the governed pre-publication pipeline only; it cannot
  jump to published/analyzed/completed.
- Proposed anonymous progress, Snapshot, lifecycle, claim, import, and replacement dimensions are
  conceptual and orthogonal. No transition table or physical enum is approved.
- Existing Recommendation, commercial, installation, activation, and readiness lifecycles remain
  unchanged.

### 6.5 UX impact

- Adds an optional, visibly branched acquisition path and a direct Skip route.
- Requires evidence-source labels, inference correction, missing/contradictory evidence,
  qualitative uncertainty, failure, staleness, and resume communication.
- Requires persona-aware destinations without assuming roles or forcing a single context.
- Requires Arabic/English, RTL/LTR, accessibility, keyboard/focus, error, empty, limited, and
  recovery design in a later authorized wave.
- Forbids unsupported numeric confidence, fit, health, and setup-time claims.

### 6.6 Security and Privacy impact

- Anonymous collection creates new purpose, minimization, consent separation, retention,
  deletion/anonymization, export, residency, legal-hold, security, and observability questions.
- Cross-device recovery and claim introduce account-disclosure, interception, replay, duplicate,
  concurrency, dispute, and reassignment risks.
- Import is a protected target-Business action and must re-resolve authorization at execution.
- Logs, analytics, prompts, exports, errors, and support tooling require data minimization and
  approved access.
- No Security or Privacy mechanism/value is selected by Wave 1.

### 6.7 Permission and authorization impact

- No role or Permission grant is introduced.
- Claim authority and target-Business import authority are distinct.
- Organization hierarchy resolution does not grant access.
- Multiple Workspace/Business contexts may require a selector; no default target is invented.
- Consultant/partner/client action requires an approved identity/delegation relationship and
  current resource authorization.

### 6.8 Data ownership and provenance impact

- A future approved Discovery Capability would logically own temporary anonymous Discovery
  evidence and Snapshot presentation, subject to policy; this is not yet a canonical data-owner
  decision.
- Core Business Architect owns imported Candidate Facts and review workflow after authorized
  import.
- Core Business DNA Registry remains the only canonical Business DNA owner.
- Import preserves source, time, version, inference, evidence, and transformation provenance.
- Read models, Product Hub, Marketplace, analytics, and AI context do not become sources of truth.

### 6.9 Product Hub, Marketplace, and Operating System impact

- Product Hub continues to compose and present governed owner projections and route handoffs.
- Marketplace remains its governed bounded context and may recur as an authorized discovery and
  growth destination.
- Operating Systems continue to own setup, configuration, activation, OS readiness, daily
  operation, and operational facts.
- Provisional guidance cannot create product entitlement, installation, setup, or readiness.

### 6.10 Readiness impact

- Discovery, Snapshot, claim, import, Business Architect progress, and Business DNA publication
  remain distinct from readiness.
- Existing `Core Workspace Ready` criteria in Core Platform authority are referenced, not
  rewritten.
- `Operating System Ready` is evaluated by the applicable OS after subscription/entitlement,
  installation, setup, configuration, and activation requirements under existing authority.

### 6.11 Conceptual future implementation impact

If and only if later authority approves implementation, future specifications would need to
address public experience, identity/claim, formal-context selection, target authorization,
provenance-preserving import, staleness/version checks, safe retries, privacy rights, audit,
observability, localization/accessibility, and owner contracts. This paragraph neither selects
mechanisms nor authorizes code, APIs, schemas, storage, routes, Events, or tests.

## 7. Traceability Matrix

Line references describe the repository at Wave 1 review time and may move after authorized edits.

| Requirement / decision | Source authority and location | Target in proposal package | Journey/state affected | Logical owner | Conflict | Review status |
|---|---|---|---|---|---|---|
| TR-BDP-001 Optional pre-registration branch | `docs/01-genesis/11-CUSTOMER-JOURNEY.md:29-75,95-144`; `.specify/memory/constitution.md:67-83` | Proposal §§4, 8; ADR-042 Decision | Marketing → Authentication | Product / Architecture Governance | C01, C02 | Human decision required |
| TR-BDP-002 Formal Business owns DNA | `docs/00-governance/ADR/ADR-003...`; ADR-004; ADR-005; `docs/00-governance/glossary/GLOSSARY.md:124-167` | Proposal §§7, 9, 10 | Evidence → Business DNA | Core Business DNA Registry | C03, C15 | Inherited guardrail |
| TR-BDP-003 Candidate Fact pipeline | `docs/00-governance/ADR/ADR-016...:1-25`; `docs/00-governance/glossary/GLOSSARY.md:187-221`; `docs/02-core-platform/02-CORE-PLATFORM-ARCHITECTURE.md:210-268` | Proposal §§9–10 | Import/review/publication | Core Business Architect | C03 | Proposed compatible integration |
| TR-BDP-004 Claim separate from import | `docs/02-core-platform/05-PERMISSION-MODEL.md:39-65,81-110`; `docs/02-core-platform/08-SECURITY-MODEL.md:175-223`; ADR-034 | Proposal §12; ADR-042 | Claim and import dimensions | Identity / target resource owner | C07–C10 | Human decisions required |
| TR-BDP-005 Conditional verification | `docs/02-core-platform/08-SECURITY-MODEL.md:175-190` | Proposal §§8, 12 | Authentication | Core Identity and Access | C09 | Mechanism deferred |
| TR-BDP-006 Orthogonal states | ADR-016 resumability; `docs/02-core-platform/03-DOMAIN-MODEL.md:215-301` | Proposal §13 | Anonymous progress/Snapshot/lifecycle/claim/import/replacement | Owner unresolved | C07 | Conceptual proposal only |
| TR-BDP-007 No numeric precision | `docs/99-architecture-freeze/BUSINESS-BRAIN-FREEZE-v1.0.md:401-444`; `docs/01-genesis/13-PRODUCT-HUB.md:189-267` | Proposal §11 | Snapshot/guidance | Business Brain / Recommendation / Product | C05 | Proposed safeguard |
| TR-BDP-008 Provisional guidance distinction | ADR-013; ADR-014; Genesis Customer Journey `:179-200` | Proposal §§7, 11 | Pre-Recommendation presentation | Product / Recommendation owner | C06 | Human terminology decision |
| TR-BDP-009 Core readiness unchanged | `docs/02-core-platform/02-CORE-PLATFORM-ARCHITECTURE.md:480-510`; ADR-018; Genesis Journey `:179-202` | Proposal §§8, 19 | Core readiness resolution | Core readiness owner | C02, C11 | Inherited guardrail |
| TR-BDP-010 Product Hub composition | ADR-019; ADR-020; `docs/01-genesis/13-PRODUCT-HUB.md:51-125,163-185` | Proposal §§18–19 | Post-readiness discovery/handoff | Product Hub | C11 | Resolved by authority |
| TR-BDP-011 OS setup/readiness ownership | ADR-018; ADR-023–026; Genesis Journey `:217-254` | Proposal §§18–19 | Subscription → OS operation | Commercial owner / OS owner | C11 | Resolved by authority |
| TR-BDP-012 Marketplace recurrence | ADR-027–028; Genesis Journey `:260-267`; Genesis Product Hub `:309-351` | Proposal §§8, 18–19 | Growth/discovery return | Marketplace / Product Hub | C13 | Proposed clarification |
| TR-BDP-013 Persona is not Permission | `docs/02-core-platform/05-PERMISSION-MODEL.md:35-77`; `:81-110` | Proposal §14 | Persona routing | Identity / resource owner | C08 | Inherited principle; details deferred |
| TR-BDP-014 Privacy/data lifecycle | `docs/02-core-platform/08-SECURITY-MODEL.md:400-415`; Business Brain Freeze `:437-444` | Proposal §§15–17; Open Questions | Anonymous lifecycle | Privacy/Security/Data Governance | C07, C10 | Human decisions required |
| TR-BDP-015 Proposal-before-waves | `docs/00-governance/MILESTONE-LIFECYCLE.md:67-143,249-289,465-509` | Proposal §§23–24 | Governance lifecycle | Architecture Governance | C04 | Wave 1 conforms; approval pending |
| TR-BDP-016 Historical traceability | Constitution `:80-83`; Core Freeze manifest; legacy journey/master docs | Crosswalk §§2.3, 4 C12 | Documentation authority | Documentation Governance | C12 | Cleanup separately governed |
| TR-BDP-017 Product identity | `docs/00-governance/glossary/GLOSSARY.md:25-31` | Proposal metadata/§26 | All presentation | Product / Documentation Governance | C14 | Category inherited |
| TR-BDP-018 Snapshot terminology | Glossary `:151-158`; Business Brain Freeze `:421-427` | Proposal §11 | Snapshot presentation | Product / UX / Business DNA owner | C15 | Human decision required |

## 8. Review and Change Control

- Architecture Review must verify each conflict, decision, and source relationship.
- A reviewer may classify, reject, condition, or request revision; no conflict may be changed to
  resolved merely to advance the proposal.
- Any accepted change to an authoritative file requires a later explicit file list and approval.
- Any new canonical owner, lifecycle, term, Permission, contract, or readiness condition requires
  its applicable ADR/Governance process.
- This crosswalk remains non-authoritative while the package status is **Proposed for Authority
  Review**.
