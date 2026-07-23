# Business Discovery Governed Implementation Plan

| Metadata | Value |
| --- | --- |
| Status | **Approved Implementation Plan Input** |
| Readiness blocker | **BD-RDY-D05** |
| Product scope | Optional pre-registration Business Discovery MVP |
| Authority basis | Accepted ADR-042, Core Platform Architecture v1.1 Freeze, approved Business Discovery Security/Permission/Policy inputs, approved Feature Specification, completed Constitution Check, governed D03 contracts, and completed D04 planning-readiness review |
| Reviewed artifacts | [Business Discovery MVP Feature Specification](../03-product-specifications/BUSINESS-DISCOVERY-MVP-FEATURE-SPECIFICATION.md); [Business Discovery Constitution Check](../00-governance/reviews/BUSINESS-DISCOVERY-CONSTITUTION-CHECK.md); [Business Discovery API / Domain / Data Contracts](../04-contracts/BUSINESS-DISCOVERY-API-DOMAIN-DATA-CONTRACTS.md); [Business Discovery Implementation Planning Readiness Review](../00-governance/reviews/BUSINESS-DISCOVERY-IMPLEMENTATION-PLANNING-READINESS.md) |
| Plan owner | Product Owner / Technical Architecture Authority |
| Date | 2026-07-23 |
| Version | 1.0 |
| Task authorization | **None** |
| Test authorization | **None** |
| Implementation authorization | **None** |
| Rollout authorization | **None** |
| Code impact | **None** |
| Supersedes | Nothing |
| Out of scope | Task breakdown, test creation, code, migrations, physical schema, API routes, infrastructure or deployment execution, rollout execution, and post-MVP capabilities |

> **Plan boundary:** This document governs how later design and delivery work must be organized.
> Activities below are planning units, not implementation tasks. No source path, physical API,
> schema, migration, infrastructure, test case, rollout configuration, estimate, staffing
> commitment, or implementation authorization is created here.

## 1. Executive Summary

### 1.1 Purpose and approved starting point

This plan converts the approved product behavior and technology-independent contracts into a
governed implementation strategy. It starts from:

- Accepted [ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md);
- the [Core Platform Architecture v1.1 Freeze](../99-architecture-freeze/CORE-PLATFORM-v1.1-FREEZE.md);
- D01's 114 functional requirements, 38 non-functional requirements, 13 personas, 12 journeys,
  17 states, 24 surfaces, 22 product errors, and 30 acceptance criteria;
- D02's approved Constitution Check and eight contract conditions;
- D03's 160 contract requirements, 11 conceptual types, 17 contract states, 30 operations,
  32 error contracts, 26 Audit events, 13 integration boundaries, and 17 Security invariants; and
- D04's decision `READY-FOR-IMPLEMENTATION-PLANNING-WITH-CONDITIONS`.

### 1.2 Implementation strategy

The strategy is **contract-first, owner-controlled, risk-ordered, and evidence-gated**:

1. confirm authority, owners, dependencies, and the decision calendar;
2. finalize Product inventories and bounded physical designs without changing contract meaning;
3. approve Security, Privacy/Legal, identity, authorization, data, infrastructure, accessibility,
   localization, Audit, and observability decisions;
4. pass the post-design Constitution Check;
5. obtain separate task-breakdown and test-strategy authorization;
6. obtain explicit implementation authorization;
7. only then execute future foundation, claim, targeting, Candidate Fact, recovery, deletion,
   hardening, and rollout-readiness phases; and
8. obtain separate rollout and production-activation approval.

The plan has nine phases, 22 workstreams, 15 milestones, 20 technical-design decisions, and
13 review gates. Product, Identity, Core Organization, Core Authorization, Business Architect,
Audit, Security, Privacy/Legal, Accessibility, Localization, Infrastructure, Support, Testing,
and Operations are hard dependencies. Coding is **not authorized**.

### 1.3 Final plan decision

**Decision: `APPROVED-IMPLEMENTATION-PLAN-WITH-CONDITIONS`.**

The ten conditions in §1.5 and the gates in §19 are binding. Task creation remains blocked until
§20 is satisfied. Testing, coding, rollout, and production activation remain separately gated.

### 1.4 Binding planning principles

1. Preserve accepted architecture.
2. Do not invent product behavior.
3. Separate Core Platform from OS behavior.
4. Permit no anonymous canonical writes.
5. Bind claim custody to one verified User only.
6. Require explicit Workspace and Business targets.
7. Permit no fallback tenant.
8. Revalidate current Permission before mutation.
9. Import accepted proposals as Candidate Facts only.
10. Permit no direct Business DNA publication.
11. Permit no silent merge or overwrite.
12. Embed Security and Privacy as workstreams.
13. Treat accessibility and localization as first-order work.
14. Keep authoritative Audit and ordinary telemetry separate.
15. Keep Legal and rollout decisions visible.
16. Keep task creation separately gated.
17. Keep implementation separately authorized.
18. Require evidence for every milestone.
19. Design high-risk paths before coding.
20. Return architecture-affecting plan changes to Governance.

### 1.5 Conditions on plan approval

| Condition | Binding requirement | Owner | Due gate | Failure effect |
| --- | --- | --- | --- | --- |
| BD-PLAN-C01 | Preserve the exact owner, journey, claim-to-User, Candidate Fact, Business DNA, commercial, readiness, and Core/OS boundaries. | Architecture and domain owners | Every gate | Stop and return to Governance |
| BD-PLAN-C02 | Approve final question and field inventories, sensitivity, exclusions, and Candidate Fact mapping before tasks. | Product, Business Architect, Privacy/Legal | BD-GATE-02 | Blocks task creation |
| BD-PLAN-C03 | Approve physical API, data, state, concurrency, idempotency, compatibility, and migration disposition without changing D03 meaning. | Technical Architecture and owners | BD-GATE-03 | Blocks task creation and coding |
| BD-PLAN-C04 | Approve identity, claim, custody-continuity, replay, recovery, and support mechanisms against the Threat Model. | Core Identity and Security | BD-GATE-04 | Blocks affected tasks and coding |
| BD-PLAN-C05 | Map all logical actions to exact runtime and workload authorization scopes with current revalidation. | Core Authorization and Security | BD-GATE-03/04 | Blocks privileged tasks and coding |
| BD-PLAN-C06 | Preserve Privacy/Legal gates for lawful basis, notices, rights, schedules, locations, processors, transfers, and regulated-data exclusion. | Privacy/Legal | BD-GATE-05 | Blocks affected processing and rollout |
| BD-PLAN-C07 | Approve infrastructure, encryption/key, backup/restore, abuse, telemetry, Audit, and safe-degradation designs. | Security, Infrastructure, Audit, Observability | BD-GATE-04/06 | Blocks affected tasks, coding, or rollout |
| BD-PLAN-C08 | Include Arabic/English, RTL/LTR, accessibility, responsive behavior, and versioned notice content in design and evidence. | Product Design, Accessibility, Localization, Legal | BD-GATE-07 | Blocks user-facing tasks and rollout |
| BD-PLAN-C09 | Pass the post-design Constitution Check and preserve a trace from every physical decision to D01–D04. | Architecture Governance | BD-GATE-08 | Blocks task authorization |
| BD-PLAN-C10 | Keep D06 task/test, explicit implementation, D07 rollout, and production activation as separate approvals. | Delivery Governance | BD-GATE-09–13 | Prohibits premature execution |

### 1.6 Authority map

| Authority role | Sources | Planning effect |
| --- | --- | --- |
| Accepted/frozen architecture | [Core Platform v1.1 Freeze](../99-architecture-freeze/CORE-PLATFORM-v1.1-FREEZE.md); [ADR-042](../00-governance/ADR/ADR-042-pre-registration-business-discovery.md); [ADR-003](../00-governance/ADR/ADR-003-workspace-customer-multi-business-boundary.md); [ADR-005](../00-governance/ADR/ADR-005-business-dna-business-scoped-software-independent.md); [ADR-014](../00-governance/ADR/ADR-014-human-control-over-recommendations-and-ai.md); [ADR-016](../00-governance/ADR/ADR-016-business-architect-governed-pipeline.md); [ADR-018](../00-governance/ADR/ADR-018-separate-core-and-os-readiness.md); [ADR-040](../00-governance/ADR/ADR-040-core-organization-identity-os-operational-data.md) | Fixes journey, organization, owner, claim, Candidate Fact, human-control, Business DNA, readiness and Core/OS boundaries. |
| Architecture/Governance evidence | [ADR-042 Human Architecture Review](../00-governance/reviews/ADR-042-HUMAN-ARCHITECTURE-REVIEW.md); [Readiness Validation](../00-governance/reviews/BUSINESS-DISCOVERY-READINESS-VALIDATION.md); [D02 Constitution Check](../00-governance/reviews/BUSINESS-DISCOVERY-CONSTITUTION-CHECK.md); [D04 Planning Readiness](../00-governance/reviews/BUSINESS-DISCOVERY-IMPLEMENTATION-PLANNING-READINESS.md) | Confirms acceptance, prior closure, conditions, allowed plan creation, and separate downstream gates. |
| Product and contract inputs | [D01 Feature Specification](../03-product-specifications/BUSINESS-DISCOVERY-MVP-FEATURE-SPECIFICATION.md); [D03 Contracts](../04-contracts/BUSINESS-DISCOVERY-API-DOMAIN-DATA-CONTRACTS.md) | Controls product behavior, acceptance, conceptual owners, states, operations, errors, data, Audit, integration and invariants. |
| Core baselines | [Data Ownership](../02-core-platform/04-DATA-OWNERSHIP.md); [Permission Model](../02-core-platform/05-PERMISSION-MODEL.md); [Security Model](../02-core-platform/08-SECURITY-MODEL.md) | Requires owner-controlled canonical writes, explicit scope, current authorization, tenant isolation, safe failure and consequential Audit. |
| Approved bounded policy | [Security Threat Model](../02-core-platform/security/BUSINESS-DISCOVERY-SECURITY-THREAT-MODEL.md); [Permission Catalog](../02-core-platform/security/BUSINESS-DISCOVERY-PERMISSION-CATALOG.md); [Policy Readiness Pack](../02-core-platform/security/BUSINESS-DISCOVERY-POLICY-READINESS-PACK.md) | Supplies binding Security, Permission, Privacy, identity, lifecycle, observability, encryption, residency and abuse-control planning constraints. |
| Genesis/product journey | [Customer Journey](../01-genesis/11-CUSTOMER-JOURNEY.md) | Preserves optional Discovery-first and complete account-first paths. |
| Delivery governance | [NexoraXS Constitution](../../.specify/memory/constitution.md); [plan template](../../.specify/templates/plan-template.md); [Development Lifecycle](../11-execution/01-DEVELOPMENT-LIFECYCLE.md); [Feature Execution Standard](../11-execution/03-FEATURE-EXECUTION-STANDARD.md); [Spec Kit Workflow](../11-execution/04-SPEC-KIT-WORKFLOW.md); [Execution Checklist](../11-execution/10-EXECUTION-CHECKLIST.md) | Requires pre/post-design Constitution checks, research for unknowns, exact owners/repository boundaries, risk-appropriate tests, change control, documentation sync and separate task/implementation/release gates. |

## 2. Scope Baseline

### 2.1 MVP in scope

The plan covers the optional Discovery-first path from temporary anonymous session through
answering, explainable preview, registration/login, verified claim, explicit authorized Workspace
and Business selection, field-level proposal decisions, Candidate Fact submission, import
outcomes, recovery, deletion, support, Audit, observability, accessibility, localization,
Security, Privacy, and later rollout readiness. The existing account-first path remains complete
and independently usable.

### 2.2 Out of scope

The plan excludes mandatory Discovery; anonymous canonical Workspace or Business creation;
direct or automatic Business DNA publication; silent canonical overwrite; cross-Business merge;
subscription, entitlement, billing, readiness, OS setup/configuration, or operational records;
unrestricted enrichment or model training; unsupported regulated-data collection; post-MVP
collaboration; Product Hub or Recommendation redesign; and any implementation artifact in this
task.

### 2.3 Non-negotiable boundaries

- Discovery owns temporary working responsibility, not canonical identity, organization,
  authorization, Business facts, Business DNA, commercial state, OS state, or operational data.
- Authentication never substitutes for target-scoped authorization.
- Session possession alone never proves claim authority.
- Workspace and Business selection are explicit; no default or fallback tenant exists.
- Candidate Facts enter Business Architect under current target authorization and human review.
- Business DNA Registry alone owns published Business DNA.
- Raw answers, preview content, Candidate Fact values, and secrets are excluded from ordinary
  telemetry.
- Recovery never weakens identity proof, custody proof, tenant isolation, authorization, expiry,
  or Audit.

Scope changes are controlled by the Freeze and Accepted ADRs. A behavior change returns to the
Feature Specification; a contract-semantic change returns to D03; an ownership, lifecycle,
boundary, or frozen-guarantee change requires Governance, an ADR where applicable, and Freeze
review.

## 3. Planning Assumptions Register

Only assumptions already established by approved sources appear here.

| Assumption ID | Supported assumption | Source | Confidence | Validation gate | Impact if false | Plan revision? |
| --- | --- | --- | --- | --- | --- | --- |
| BD-PLAN-ASM-001 | Discovery remains optional and account-first remains available. | Freeze §3; FS §§3–6 | High | BD-GATE-08 | Architecture and journey conflict | Yes; Governance first |
| BD-PLAN-ASM-002 | Anonymous session and Snapshot data remain temporary and non-canonical. | ADR-042 §§Decision/Boundaries; D03 §§1–4 | High | BD-GATE-03/08 | Canonical ownership breach | Yes; Governance first |
| BD-PLAN-ASM-003 | Claim binds only to a verified User and grants no tenant authority. | Freeze §5; D03 §§4–7 | High | BD-GATE-04/08 | Identity or tenant-isolation breach | Yes; Governance first |
| BD-PLAN-ASM-004 | Core owners expose governed Workspace, Business, Identity, and Permission contracts. | Data Ownership; Permission Model; D03 §20 | High at contract level | BD-GATE-03/06 | Required dependency unavailable | Yes; affected design stops |
| BD-PLAN-ASM-005 | Business Architect accepts provenance-bearing Candidate Fact inputs. | ADR-016; D03 §§8, 20 | High at contract level | BD-GATE-03 | Import boundary unavailable | Yes; affected design stops |
| BD-PLAN-ASM-006 | Partial per-item import outcomes are permitted; silent merge is not. | FS §§7.7–7.8; D03 §§8–10, 21 | High | BD-GATE-03 | Product/transaction semantics conflict | Yes |
| BD-PLAN-ASM-007 | Exact physical mechanisms may be selected within the approved contract meaning. | ADR-035/036; D04 §§7–8 | High | BD-GATE-03/08 | Physical choice changes architecture | Yes; escalate |
| BD-PLAN-ASM-008 | Security and policy inputs close architecture-policy blockers but not specialist implementation approval. | Threat Model; Permission Catalog; Policy Pack | High | BD-GATE-04/05 | Controls or Legal basis insufficient | Yes; affected work blocked |
| BD-PLAN-ASM-009 | Final numeric schedules, limits, and service targets are specialist decisions, not product behavior. | D03 §26; D04 §7 | High | BD-GATE-04–06/12 | Unsupported target would be embedded | Yes |
| BD-PLAN-ASM-010 | Arabic and English, RTL/LTR, and accessibility apply to every user-facing flow. | Constitution; AGENTS.md §12; FS §§15–16 | High | BD-GATE-07 | Product-quality violation | Yes |
| BD-PLAN-ASM-011 | No existing persisted Business Discovery MVP state requires migration unless future repository research proves otherwise. | New optional capability; D04 dependency review | Medium | BD-GATE-03 | Compatibility or migration scope emerges | Yes; add governed migration disposition |
| BD-PLAN-ASM-012 | Plan approval does not authorize tasks, tests, coding, rollout, or production. | D04 §13; delivery governance | High | BD-GATE-01/09–13 | Governance bypass | No; stop unauthorized action |

## 4. Implementation Workstreams

All workstream activities below are **plan items, not tasks**. Exact files, task IDs, tests,
technology, physical routes, schemas, infrastructure, and execution assignments belong to later
approved artifacts.

### 4.1 Workstream definitions and authority

| Workstream | Objective and scope | Out of scope | Source requirements / contracts | Owner and contributors | Prerequisites |
| --- | --- | --- | --- | --- | --- |
| BD-WS-01 — Product and UX finalization | Finalize bounded question/field/content/interaction inputs for all 24 surfaces and 12 journeys. | Architecture changes, visual implementation, task creation | FS §§3–6, 10–12, 15–16, 24; D03 §§8, 19 | Product Owner; Design, Business Architect, Privacy, Localization, Accessibility | Approved plan; scope baseline |
| BD-WS-02 — Discovery session lifecycle | Realize temporary session custody, integrity, states, expiry hooks, abandonment, invalidation, deletion eligibility, and evidence. | Canonical User/Workspace/Business ownership; physical choice in this plan | FS FR-001–010; D03 §§2–6, 9–10, 18 | Discovery domain owner; Identity, Security, Data, Privacy, Audit | WS-01 inventory inputs; TDD-003/005–007 |
| BD-WS-03 — Question and answer flow | Plan guided progression, save/correct/resume, validation, sensitivity, locale, and payload boundaries. | Final questions in this document; inference publication | FS FR-011–020; D03 §§2, 11, 14 | Product/Discovery; Design, Privacy, Localization, Security | WS-01; WS-02 lifecycle |
| BD-WS-04 — Preview and explainability | Plan versioned non-binding preview, provided/inferred labels, explanations, corrections, warnings, and stale handling. | Canonical Business facts, Business DNA, binding Recommendations | FS FR-021–030; D03 §§2, 8, 11 | Product/Discovery; inference owner, Privacy, Security, Accessibility | WS-03; source/provenance design |
| BD-WS-05 — Authentication and identity handoff | Plan registration/login continuity, verification reference, account switch, duplicate account, and failure handoff. | Identity-provider selection here; tenant authority | FS FR-031–038; D03 §§6, 20 | Core Identity; Discovery, Security, UX, Support | TDD-004; WS-02 |
| BD-WS-06 — Claim transaction | Plan atomic, idempotent, replay-resistant one-session/one-User custody transition and reconciliation. | Workspace/Business binding, Permission grant, support reassignment | FS FR-039–050; D03 §§4–6, 9–10, 21, 23 | Discovery/Identity; Security, Data, Audit, Support | WS-02, WS-05; TDD-005–007 |
| BD-WS-07 — Workspace and Business target selection | Plan explicit list/select/create handoffs, current target state, multi-Workspace UX, and current authorization. | Anonymous creation, fallback tenant, cross-tenant merge | FS FR-051–062; D03 §§7, 11, 20 | Core Organization/Core Authorization; Discovery, Security, UX | WS-06; TDD-001/008 |
| BD-WS-08 — Proposal comparison | Plan per-field existing/proposed comparison, provenance, explanation, conflict, correction, rejection, and partial acceptance. | Silent merge, bulk implicit acceptance, canonical mutation | FS FR-063–075; D03 §8 | Discovery/Product; Business owner, Business Architect, Privacy, UX | WS-01, WS-04, WS-07 |
| BD-WS-09 — Candidate Fact submission | Plan authorized provenance-bearing envelopes into Business Architect. | Direct Business DNA write/publication or truth assertion | FS FR-076–087; D03 §§8, 20–21 | Business Architect; Discovery, Authorization, Audit, Security | WS-08; physical BA contract |
| BD-WS-10 — Import orchestration | Plan per-item submission, idempotency, partial outcomes, duplicate/stale reconciliation, retry, and user results. | Silent overwrite, cross-Business import, rollback of committed owner facts | FS FR-076–087; D03 §§8–10, 13, 21 | Discovery/Business Architect; Data, Security, Audit, UX | WS-07–09; TDD-005–007 |
| BD-WS-11 — Deletion and rights | Plan verified requests, eligibility, owner propagation, holds, minimized evidence, backup suppression, and outcome proof. | Invented schedules, deletion of required Audit, canonical Business deletion | FS FR-088–094; D03 §§14, 18–20 | Privacy/Legal; Data owners, Audit, Operations, Support | TDD-011/012/017; Legal decisions |
| BD-WS-12 — Support recovery | Plan case-bound strong verification, least privilege, separation of duties, recovery outcomes, disputes, and Audit. | General browsing, silent edit, manual reassignment by default | FS FR-095–106; D03 §§4–6, 11, 20–21 | Support/Identity; Security, Privacy, Audit | WS-05/06; TDD-016 |
| BD-WS-13 — Permissions and tenant isolation | Plan runtime action mappings, subject/target scopes, workload identities, current revalidation, and safe denial. | Role/title grants, wildcard service access, cached proof as authority | FS §13; Permission Catalog; D03 §§7, 20, 23 | Core Authorization; Security, all owning services | TDD-008; integration owners |
| BD-WS-14 — Audit | Plan authoritative events, reason/outcome, correlation, tenant scope, prohibited fields, access, and failure guarantees. | Raw answers/secrets, mutable history, analytics substitution | FS FR-107–114; D03 §16; ADR-038 | Audit owner; Security, Privacy, domain producers | TDD-009; all consequential flows |
| BD-WS-15 — Telemetry and observability | Plan separated logs, metrics, traces, analytics, Security signals, correlation, redaction, alerts, and health. | Raw content, credentials, unrestricted identity, Audit replacement | FS FR-107–114; D03 §17; Policy Pack §7 | Observability; Security, Privacy, Audit, Support, Operations | TDD-010/018; dependency map |
| BD-WS-16 — Security and abuse controls | Map Threat Model controls to session, claim, target, import, support, keys, abuse, safe degradation, and review. | Vendor/algorithm/limit selection here; weaker recovery | Threat Model; D03 §§22–23 | Core Security; Identity, Authorization, Infrastructure, Privacy, QA | TDD-004–007/013–015 |
| BD-WS-17 — Privacy and Legal | Plan lawful basis, notices, classification, consent, rights, schedules, processors, regions, transfers, holds, and exclusions. | Unsupported global Legal conclusion or bundled consent | Policy Pack; D03 §§14, 18–20 | Privacy/Legal; Product, Security, Data, Operations | Product inventories; TDD-011/012/017 |
| BD-WS-18 — Accessibility and localization | Plan accessible interaction/error/recovery, bilingual content, RTL/LTR, locale facts, notice versions, and evidence. | Visual implementation or translation content in this task | FS §§15–16; Constitution; AGENTS.md §12 | Design/Accessibility/Localization; Product, Legal, QA | WS-01; final content dependencies |
| BD-WS-19 — Integration | Plan owner contracts, versioning, failure isolation, retries, minimization, correlation, and compatibility for all boundaries. | Direct tables/private services/cross-app imports | D03 §§15, 20–21; ADR-035/036 | Technical Architecture; all service owners | TDD-001/002; WS-05/07/09/11–17 |
| BD-WS-20 — Testing | Supply traceable inputs for later D06 test-strategy and task artifacts across all required categories. | Test cases, test code, tools, or execution now | FS §21; D03 §§22–24; Constitution | QA lead; Product, domains, Security, Privacy, Accessibility, Localization | Physical designs; all workstreams |
| BD-WS-21 — Infrastructure and operations | Plan hosting capabilities, persistence, keys, backups, residency enforcement, capacity, dependency recovery, and ownership. | Selecting cloud/vendor/region or creating configuration here | D03 §§17–21, 26; D04 §§6–8 | Infrastructure/Operations; Security, Privacy, Data, Architecture | TDD-003/012–015/017–018 |
| BD-WS-22 — Rollout and production readiness | Supply future flag, staged exposure, monitoring, rollback, support, incident, Legal, processor/region, and activation inputs. | Rollout configuration, deployment, or production approval | FS NFR/AC; D03 §§17–20, 23, 26 | Product/Operations; Security, Privacy, Support, Engineering, QA | All workstreams; BD-GATE-01–11 |

### 4.2 Workstream execution design

| Workstream | Major activities and planned deliverables | Technical decisions | Security / Privacy | Dependencies | Review gates, completion evidence, downstream task input, and blockers |
| --- | --- | --- | --- | --- | --- |
| BD-WS-01 | Govern inventory workshops; produce approved inventory, content, interaction, sensitivity, explanation, and localization design inputs. | Field identifiers/mapping and content versioning only through TDD register. | Minimize collection; exclude regulated data; separate consent. | Product, BA, Legal, Design | Gates 02/07; signed inventory and traceability; task inputs are surface/content packages; incomplete inventory blocks affected tasks. |
| BD-WS-02 | Produce physical lifecycle/state/custody design, retention hooks, recovery model, and owner mapping. | TDD-002/003/005–007/011. | Secret control proof, expiry, deletion, fail closed. | Identity, Data, Audit, Privacy | Gates 03–05/08; state/owner design and threat mapping; unresolved storage/custody blocks tasks. |
| BD-WS-03 | Produce question-flow state/validation/payload/locale design and resume behavior. | Inventory realization and physical validation mapping. | Sensitive-by-default; payload boundaries; no telemetry content. | WS-01/02/15/17/18 | Gates 02/03/07; trace to FR-011–020; missing inventory/classification blocks tasks. |
| BD-WS-04 | Produce preview generation/read/regeneration, explanation, provenance, correction, warning, stale, and provider-failure design. | Source/provider and confidence-category realization without changing semantics. | Minimized provider data; no analytics content; poisoning controls. | WS-03/15–17 | Gates 03–05/07; explainability and failure evidence; unapproved provider/data path blocks coding. |
| BD-WS-05 | Produce identity handoff, continuity, verification, account-switch, duplicate-account, and failure design. | TDD-004. | Phishing, stuffing, wrong-User, and enumeration controls. | Identity/Security/Support | Gates 03/04/08; Identity/Security approval; no compliant mechanism blocks tasks. |
| BD-WS-06 | Produce claim transaction, state guards, atomicity, idempotency, race, ambiguity, Audit, and recovery design. | TDD-005–007. | One-User custody, replay resistance, non-enumerating denial. | WS-02/05/13/14/16 | Gates 03/04/08; transaction proof and failure model; any partial claim or tenant grant is no-go. |
| BD-WS-07 | Produce target-selection/create handoff, authorization context, freshness, lifecycle denial, and multi-Workspace design. | TDD-001/008. | Exact Workspace/Business scope and revalidation. | Core Organization, Authorization, WS-13/19 | Gates 03/04/08; owner contract/evaluation proof; fallback or stale mutation is no-go. |
| BD-WS-08 | Produce ProposalSet/item, comparison refresh, decision, conflict, correction, and partial-acceptance design. | TDD-002/006. | Field minimization and sensitive display controls. | WS-01/04/07/17/18 | Gates 02/03/05/07; field mapping and UX evidence; silent merge is no-go. |
| BD-WS-09 | Produce Candidate Fact envelope realization, BA intake/result, provenance, compatibility, and authorization design. | TDD-001/002/008. | Exact Business scope; provenance integrity. | BA, WS-08/13/14/19 | Gates 03/04/08; BA owner approval and contract evidence; direct DNA write is no-go. |
| BD-WS-10 | Produce import transaction, partial-result, retry/reconcile, stale detection, duplicate protection, and result UX design. | TDD-005–007. | Revalidate target; prevent cross-tenant/duplicate import. | WS-07–09/13–16/19 | Gates 03/04/08; transaction/failure evidence; unresolved ambiguity blocks tasks. |
| BD-WS-11 | Produce lifecycle schedule hooks, deletion/hold/backup/processor propagation, tombstone, escalation, and evidence design. | TDD-011/012/017. | Verified requester, minimization, hold authority, restore suppression. | Legal, Data, Audit, Operations | Gates 05/06/08; Legal/owner approvals; schedule/location gaps block affected coding/rollout. |
| BD-WS-12 | Produce support case/access/recovery/dispute/runbook design and separation-of-duties review. | TDD-016. | Strong verification, JIT/time scope, no reassignment by default. | Identity, Security, Privacy, Audit | Gates 04/05/06/08; approved workflow and abuse review; unbounded support is no-go. |
| BD-WS-13 | Produce runtime permission map, workload scopes, decision context, freshness, deny, delegation/elevation, and Audit design. | TDD-008. | Deny first; no title/wildcard/fallback; current owner check. | All owner integrations | Gates 03/04/08; Authorization approval and matrix; missing mappings block privileged tasks. |
| BD-WS-14 | Produce Audit schema/naming, producer matrix, transaction coupling, failure, access, retention-class, and verification inputs. | TDD-009. | Tamper evidence, minimized payload, tenant isolation. | All consequential workstreams | Gates 03–05/08/10; Audit owner approval; unsafe or lossy evidence blocks coding. |
| BD-WS-15 | Produce telemetry inventory/allowlist, channel separation, correlation, health, alert, dashboard/runbook inputs, and leakage tests. | TDD-010/018. | No sensitive content; lawful analytics; scoped access/retention. | All runtime workstreams | Gates 04–06/10/12; approved allowlist and operations evidence; leakage blocks rollout. |
| BD-WS-16 | Produce control-to-threat matrix, abuse/key/session/claim/support designs, residual-risk disposition, review and penetration-readiness inputs. | TDD-004–007/013–015. | Entire workstream is Security-governed. | Identity, Authorization, Infra, Privacy | Gate 04 and 08/10; Security approval; unresolved Critical/High control gap blocks tasks/coding. |
| BD-WS-17 | Produce processing inventory, approvals, notice/consent, rights, schedules, region/processor/transfer, and production Legal checkpoint plan. | TDD-011/012/017. | Entire workstream is Privacy/Legal-governed. | Product, Data, Security, Operations | Gate 05 and 08/12; approval evidence; unresolved affected decision blocks processing/rollout. |
| BD-WS-18 | Produce accessible bilingual interaction/content specifications, notice versions, logical-direction patterns, and verification inputs. | Design-system realization only; no visual choice here. | Accessible recovery; no hidden consent; locale-safe data. | WS-01/03–05/07–12/17/20 | Gate 07/08/10; specialist approval; missing bilingual/accessibility design blocks UI tasks. |
| BD-WS-19 | Produce physical owner-integration contracts, version/compatibility/failure/retry/correlation/minimization decisions and dependency readiness evidence. | TDD-001/002 and owner-specific decisions. | Workload identity, current authorization, minimized boundary data. | All integration owners | Gates 03/04/06/08; owner sign-off; unavailable/incompatible owner contract blocks affected tasks. |
| BD-WS-20 | Produce D06 inputs: category/risk/requirement matrix, environments/data/fixture needs, failure injection, and evidence owners. | Test tools and exact cases remain later. | Negative Security/Privacy/tenant/leakage evidence required. | All workstreams | Gate 10; approved test-strategy input; no tests authorized by this plan. |
| BD-WS-21 | Produce infrastructure capability/design inputs for storage, keys, backup, residency, capacity, recovery, dependency isolation, and operations. | TDD-003/012–015/017–018. | Encryption, locations, least privilege, deletion restore, denial of wallet. | Security, Privacy, Data, Operations | Gate 06/08/12; approved capability design; unapproved location/key/backup blocks deployment. |
| BD-WS-22 | Produce D07 inputs: feature strategy, exposure stages, monitoring, rollback, support/incident/abuse/deletion readiness, ownership, and activation checklist. | TDD-019/020; actual rollout plan/configuration later. | Production Legal/Security/Privacy approval mandatory. | All workstreams | Gates 11–13; production-readiness evidence; no rollout authorized here. |

## 5. Product Inventory Finalization

This section plans inventory approval; it does not create the inventory or user-facing copy.

| Inventory planning area | Owner / approvers | Dependencies | Planned deliverable | Due gate | Effect if incomplete |
| --- | --- | --- | --- | --- | --- |
| Final question inventory | Product; Privacy/Legal, Design, Security | Approved scope and purpose | Versioned question inventory with purpose and journey mapping | BD-GATE-02 | Blocks question-flow, preview, data, localization, and test tasks |
| Final field inventory | Product/Business Architect; canonical Business owner, Privacy | D03 Proposal/Candidate Fact contracts | Versioned field and Candidate Fact eligibility mapping | BD-GATE-02/03 | Blocks proposal/import/data tasks |
| Required versus optional behavior | Product; Privacy, Accessibility | Question inventory and journey recovery | Requirement/optional/skip/unsupported behavior matrix | BD-GATE-02 | Blocks validation and UX tasks |
| Sensitivity classification | Privacy/Legal; Security, Data owners | Question/field inventories | Provisional-to-approved classification and handling map | BD-GATE-05 | Blocks affected persistence, telemetry, provider, and support work |
| Regulated-data exclusions | Privacy/Legal; Product, Security | Jurisdiction/context assessment | Prohibited/guarded category decision and escalation path | BD-GATE-05 | Blocks affected collection and production |
| Field eligibility and correction | Business Architect/Product; Business owner | Field inventory and owner contracts | Eligibility, provided/inferred, correction, comparison, rejection, partial-acceptance rules | BD-GATE-02/03 | Blocks Proposal/Candidate Fact tasks |
| Localization and explanations | Product/Localization/Design; Accessibility | Inventories and inference source map | Arabic/English labels, explanations, warnings, locale-neutral meaning rules | BD-GATE-07 | Blocks user-facing tasks and rollout |
| Consent/notice copy dependencies | Privacy/Legal; Product, Localization | Purpose, jurisdiction, processing inventory | Required copy/version/language/jurisdiction input register | BD-GATE-05/07 | Blocks affected flows and production activation |

## 6. Technical Design Decision Register

The register defines future choices and evaluation boundaries. It intentionally selects no
framework, protocol, database, queue, vendor, cloud, region, processor, algorithm, or numeric
profile.

| Decision ID | Future decision and source constraint | Owner / reviewers | Options to evaluate without selection | Evaluation criteria | Due milestone | Blocks tasks? | Blocks coding? | Blocks rollout? | Escalation rule |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BD-TDD-001 | Physical API protocol, resource grouping, route/version structure; preserve D03 §§11–13 and ADR-036. | API Architecture; domain owners, Security | Repository-approved request/operation patterns and compatible versioning forms | Owner boundary, context, idempotency, errors, compatibility, observability | BD-M03 | Yes | Yes | Yes | Semantic change returns to D03/Governance |
| BD-TDD-002 | Physical data model and migration/compatibility disposition; preserve eleven D03 conceptual types and ownership. | Data/Domain Architecture; Privacy, Security, owners | Owner-local aggregate mappings, separated projections/evidence, no-migration versus governed migration | Ownership, tenant scope, lifecycle, compatibility, deletion, provenance | BD-M03 | Yes | Yes | Yes if data affected | New canonical owner/lifecycle requires Governance |
| BD-TDD-003 | Temporary session storage/custody realization. | Discovery/Data; Security, Privacy, Infrastructure | Approved server-controlled persistence capabilities with expiry/invalidation and evidence separation | Secrecy, integrity, atomicity, deletion, availability, residency, recovery | BD-M03/04 | Yes | Yes | Yes | Canonicalization or unsupported location stops work |
| BD-TDD-004 | Identity verification, continuity, account-switch, and approved recovery mechanism. | Core Identity; Security, Privacy, Support | Repository-approved verification/continuity/recovery capabilities | Proof strength, phishing/replay resistance, accessibility, privacy, operability | BD-M04/07 | Yes | Yes | Yes | Weaker-than-normal recovery returns to Security/Governance |
| BD-TDD-005 | Claim atomicity and authoritative outcome mechanism. | Discovery/Data; Identity, Security, Audit | Owner-controlled conditional transition and equivalent atomic patterns | Single custody, deterministic retry, no partial success, Audit outcome | BD-M04/07 | Yes | Yes | Yes | Any partial/double claim is no-go |
| BD-TDD-006 | Concurrency and stale-state strategy. | Domain/Data; Security, BA, Audit | Approved optimistic/serialized owner decision patterns and reconciliation | Version guards, races, current reads, conflict UX, failure injection | BD-M03/07/08 | Yes | Yes | Yes | Contract-semantic deviation returns to D03 |
| BD-TDD-007 | Idempotency persistence, semantic-key lifecycle, and ambiguous-result reconciliation. | API/Domain/Data; Security, Privacy | Approved owner-local key/result persistence patterns | Actor/target scope, privacy, collision/reuse denial, retention, replay | BD-M03/07/08 | Yes | Yes | Yes | Duplicate canonical/Candidate Fact effect is no-go |
| BD-TDD-008 | Runtime User/service permission identifiers and exact target scopes. | Core Authorization; Security, domain owners | Repository-conforming granular mappings; no wildcard replacement | Action separation, scope, freshness, revocation, workload identity, Audit | BD-M03/07 | Yes | Yes | Yes | Broad/title/fallback privilege returns to Governance |
| BD-TDD-009 | Audit event names, schemas, producer/result rules, and commit-failure behavior. | Audit; Security, Privacy, domain owners | Approved append-only event forms and owner commit/correlation patterns | Completeness, minimization, tenant scope, tamper evidence, safe failure | BD-M03/04/10 | Yes | Yes | Yes | Raw content/secret or mutable history is no-go |
| BD-TDD-010 | Telemetry inventory, safe-field allowlist, correlation, access, alerts, and retention classes. | Observability; Security, Privacy, Operations | Approved separated log/metric/trace/analytics/Security channels | Purpose, minimization, tenant isolation, detectability, supportability | BD-M04/11 | Yes | Yes | Yes | Sensitive content or Audit substitution is no-go |
| BD-TDD-011 | Deletion orchestration and processor propagation. | Privacy/Data owners; Legal, Audit, Operations | Approved owner-coordination, status, retry/escalation, and proof patterns | Verified request, owner effects, minimized evidence, partial failure, rights | BD-M05/09 | Yes for affected work | Yes | Yes | Silent incomplete deletion or canonical overreach stops work |
| BD-TDD-012 | Backup restoration suppression and legal-hold interaction. | Operations/Privacy; Legal, Security, Audit | Approved tombstone/suppression and restore-validation capabilities | No resurrection, hold scope, evidence, restore safety, revocation | BD-M05/09/11 | Yes for affected work | Yes | Yes | Active restored deleted data is no-go |
| BD-TDD-013 | Encryption and key implementation. | Security/Infrastructure; Privacy, Operations | Repository-approved transit/at-rest/backup/key capabilities | Purpose separation, least access, rotation/revocation, recovery, Audit | BD-M04/05 | Yes | Yes | Yes | Missing approved protection blocks affected processing |
| BD-TDD-014 | Rate-limit and denial-of-wallet design. | Security/Operations; Privacy, Product | Approved anonymous/authenticated multi-dimension control patterns | Cost protection, privacy, non-enumeration, safe recovery, distribution | BD-M04/11 | Yes | Yes | Yes | Unsupported numeric profile or privacy overreach blocks approval |
| BD-TDD-015 | Bot, anomaly, challenge, safe-degradation, and false-positive recovery design. | Security/Product; Privacy, Accessibility, Support | Approved risk-based challenge/degradation patterns | Abuse resistance, accessibility, appeal, data minimization, availability | BD-M04/11 | Yes | Yes | Yes | Inaccessible-only or weaker-security recovery is no-go |
| BD-TDD-016 | Support tooling, case linkage, access elevation, dispute, and recovery runbook design. | Support/Identity; Security, Privacy, Audit | Approved case-bound, time-bound, least-privilege capabilities | Verification, separation of duties, traceability, no silent mutation | BD-M04/09/11 | Yes | Yes for support path | Yes | Reassignment/general browsing requires Governance |
| BD-TDD-017 | Regions, processors, subprocessors, transfer mechanism, and residency enforcement. | Privacy/Legal/Infrastructure; Security, Procurement | Legally approved deployment/processor candidates only | Lawful location/transfer, support/backup/provider paths, fail closed | BD-M05/11 | Conditional | Yes for affected processing | Yes | No approved location/processor disables affected path |
| BD-TDD-018 | Performance, availability, capacity, dependency, and operational service targets. | Product/Operations/Architecture; Security | Evidence-based target classes and safe dependency behavior | User outcome, cost, abuse, recoverability, observability, feasibility | BD-M03/11 | Yes | Yes where behavior depends | Yes | Unsupported numeric commitment is prohibited |
| BD-TDD-019 | Feature exposure/flag strategy. | Product/Operations/Engineering; Security, Privacy | Repository-approved bounded exposure and kill/safe-disable capabilities | Optional path, cohort safety, no hidden data use, monitoring, reversibility | BD-M11/15 | No | Before exposure code | Yes | Flag cannot bypass authority or become rollout approval |
| BD-TDD-020 | Rollback and data/lifecycle reconciliation strategy. | Operations/Architecture/Data; Security, Privacy, owners | Owner-safe disable, forward-fix, compatibility, and reconciliation patterns | No custody/data loss, Candidate Fact integrity, deletion/hold safety, support | BD-M11/15 | No | Before rollout-dependent work | Yes | Destructive or owner-bypassing rollback is no-go |

## 7. Phase and Milestone Model

Phases are governance and future-delivery boundaries. Phase 3 onward cannot execute until tasks,
tests, and explicit implementation authorization exist.

| Phase | Objective | Entry criteria | Included workstreams | Planned deliverables | Decision/validation gates | Exit criteria and blockers | Required approvals / implementation status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Phase 0 — Plan mobilization | Confirm authority, owners, dependencies, risks, decision calendar, and readiness. | D04 closed; branch and evidence current | All WS owners at intake | Owner/dependency map, decision calendar, risk baseline, pre-research Constitution evidence | BD-GATE-01; pre-research Constitution Check | Plan accepted; missing owner or authority conflict blocks exit | Product/Technical Architecture; **no implementation authorization** |
| Phase 1 — Product and contract finalization | Finalize Product inventories, UX detail, and bounded physical contract designs. | Phase 0; scope fixed | WS-01, 03, 04, 08, 18, 19 | Inventories, interaction/content inputs, physical API/data/compatibility proposals, migration disposition | BD-GATE-02/03/07 | Product/contract approvals; unresolved inventory or owner boundary blocks exit | Product, Architecture, owners, Accessibility/Localization; design only |
| Phase 2 — Security, Privacy, and platform design | Approve identity/claim, authorization, keys, abuse, lifecycle, Legal, infrastructure, Audit, telemetry, support, and risk treatments. | Phase 1 inputs available | WS-02, 05–07, 11–17, 19, 21 | Security design, processing map, Legal checkpoints, permission map, infrastructure and operational design inputs | BD-GATE-04/05/06 | No unresolved Critical/High design conflict; affected Legal gates assigned | Security, Privacy/Legal, Identity, Authorization, Infrastructure; design only |
| Phase 3 — Core implementation foundation | Future authorized realization of session lifecycle, states, answers, preview, Audit and observability foundations. | Gates 01–10 passed; D06 complete; explicit implementation authorization | WS-02–04, 14, 15, 20, 21 | Future code/contracts/configuration/tests—not created here | Future implementation and test checkpoints | Foundation evidence passes; otherwise stop/recover | Requires BD-GATE-11; **currently unauthorized** |
| Phase 4 — Identity, claim, and targeting | Future authorized realization of handoff, verification, claim, Workspace/Business selection, and revalidation. | Phase 3 foundation plus owner integrations | WS-05–07, 12–16, 19–21 | Future implementation and evidence | Security/Identity/Authorization reviews | Claim and tenant invariants pass; any ambiguity blocks | Requires BD-GATE-11; **currently unauthorized** |
| Phase 5 — Proposal and Candidate Fact pipeline | Future authorized realization of comparison, correction, decisions, Candidate Fact envelope, and BA handoff. | Phase 4 target context and permissions | WS-08–10, 13–15, 17–21 | Future implementation and evidence | BA/Business owner/Security/Privacy reviews | No silent merge/direct DNA; provenance and partial outcomes pass | Requires BD-GATE-11; **currently unauthorized** |
| Phase 6 — Import, recovery, deletion, and support | Future authorized realization of imports/retries, deletion/hold, support recovery, and safe degradation. | Phase 5 and approved owner procedures | WS-10–17, 19–21 | Future implementation, operational procedures, and evidence | Legal/Security/Operations checkpoints | Ambiguity reconciles; deletion/support/hold evidence passes | Requires BD-GATE-11; **currently unauthorized** |
| Phase 7 — Quality and operational hardening | Future authorized verification of Security, Privacy, accessibility, localization, performance, concurrency, failure, and operations. | Authorized implementation candidate with D06 strategy | WS-16–21 plus all affected WS | Future evidence, defect dispositions, runbooks, operational handoff | BD-GATE-10 and specialist reviews | All blocking findings close; required evidence complete | Requires BD-GATE-11; **currently unauthorized** |
| Phase 8 — Rollout readiness | Prepare—not execute—flags, monitoring, rollback, support, incidents, Legal/processor/region approval, and production review. | Verified candidate; Phase 7 exit | WS-11–22 | D07 rollout-readiness artifact and activation evidence package | BD-GATE-12/13 | Rollout readiness approved; production activation separately decided | Rollout/production **currently unauthorized** |

## 8. Milestone Register

| Milestone ID | Milestone and objective | Prerequisites | Deliverables | Approver | Completion evidence | Blocks next stage | Current status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| BD-M01 | Plan approved — fix governed strategy and gates. | D01–D04 approved | This plan and validation | Product Owner / Technical Architecture | D05 decision and clean one-file review | Product/design work | **Complete by this D05 decision** |
| BD-M02 | Product inventories approved. | BD-M01 | Approved question/field/content/classification input package | Product; BA; Privacy/Legal | Versions, approvals, traceability | Physical/UI/data tasks | Pending |
| BD-M03 | Physical contracts approved. | BD-M02 and owner research | API/data/state/compatibility/migration/idempotency/concurrency decisions | Technical Architecture and domain owners | TDD dispositions and contract review | Tasks and coding | Pending |
| BD-M04 | Security design approved. | BD-M02/03 inputs | Identity/claim/session/permission/key/abuse/support control design | Core Security with owners | Threat/control mapping; no Critical/High gap | Security-sensitive tasks/coding | Pending |
| BD-M05 | Privacy/Legal design checkpoint passed. | Processing/data/provider inputs | Legal decision register, notices, rights, schedules/locations approval plan | Privacy/Legal | Recorded approvals and explicit remaining rollout gates | Affected tasks/coding/rollout | Pending |
| BD-M06 | Core lifecycle design complete. | BD-M03–05 | Session/state/answer/preview/lifecycle/Audit/telemetry design | Discovery, Data, Audit, Observability | Design review and traceability | Foundation tasks | Pending |
| BD-M07 | Claim and authorization design complete. | BD-M03/04/06 | Identity handoff, claim transaction, target and runtime permission design | Identity, Authorization, Security, Architecture | Race/replay/tenant review | Claim/target tasks | Pending |
| BD-M08 | Proposal/Candidate Fact design complete. | BD-M02/03/07 | Comparison, provenance, partial decision, BA intake/import design | Business Architect and Business owner | Owner contract and integrity review | Proposal/import tasks | Pending |
| BD-M09 | Deletion/support design complete. | BD-M04/05/06 | Deletion/hold/backup/support/recovery design | Privacy/Legal, Support, Security, Operations | Propagation, restore, access, runbook review | Rights/support tasks | Pending |
| BD-M10 | Test-strategy input complete. | BD-M02–09 | Requirement/risk/category/environment/evidence input matrix | QA and specialist owners | Traceability to FR/NFR/AC/contracts/invariants | BD-GATE-10 | Pending |
| BD-M11 | Operational design complete. | BD-M03–10 | Observability, targets, dependency, incident, rollback, support and exposure inputs | Operations/Product/Security/Privacy | Owner/runbook/monitoring decision package | D07 | Pending |
| BD-M12 | Post-design Constitution Check passed. | BD-M02–11 | Completed check against physical designs | Human Architecture Authority | PASS for every applicable gate | Task authorization | Pending |
| BD-M13 | Task breakdown authorized. | BD-M12 and §20 DoR | Explicit D06 authorization record | Delivery Governance | Gate 09 PASS | Task creation | Pending |
| BD-M14 | Coding authorization ready for decision. | Approved D06 tasks/test strategy and all coding blockers closed | Authorization evidence package | Human/Product/Governance authority | Gate 11 decision | Coding | Pending |
| BD-M15 | Rollout readiness ready for decision. | Verified authorized implementation and D07 evidence | Rollout/production readiness package | Product/Operations/Security/Privacy/Legal | Gates 12/13 evidence | Rollout/production | Pending |

## 9. Dependency Graph

```text
Accepted architecture + D01 specification + D02 Constitution Check + D03 contracts + D04 readiness
  → BD-M01 Approved Plan
    → BD-M02 Product Inventories
      → BD-M03 Physical Contracts
        ├── BD-M04 Security Design
        ├── BD-M05 Privacy/Legal Design Checkpoint
        └── BD-M06 Core Lifecycle Design
              → BD-M07 Claim and Authorization Design
              → BD-M08 Proposal/Candidate Fact Design
              → BD-M09 Deletion/Support Design
                    → BD-M10 Test-Strategy Input
                    → BD-M11 Operational Design
                          → BD-M12 Post-Design Constitution Check
                            → BD-M13 Task Breakdown Authorization
                              → BD-GATE-10 Test Strategy Approval
                                → BD-M14 Implementation Authorization Ready for Decision
                                  → BD-GATE-11 Explicit Implementation Authorization
                                    → Coding and verification, only if authorized
                                    → BD-M15 Rollout-Readiness Decision
                                      → Production Activation Decision
```

### 9.1 Dependency types and controlled parallelism

- **Hard:** Product inventory precedes affected physical data/UX; physical contracts precede
  tasks; Security/Privacy design precedes affected coding; post-design Constitution PASS precedes
  tasks; D06 precedes implementation authorization; verified implementation precedes rollout.
- **Soft:** Accessibility/localization, Audit/telemetry, Security threat-to-control mapping,
  Privacy processing inventory, infrastructure capability research, and integration readiness may
  proceed in parallel after their source inventories exist.
- **External approvals:** Legal basis, jurisdictions, processors/transfers, Identity, Security,
  Infrastructure, Support, Business Architect, and production operations.
- **Rework triggers:** inventory meaning changes, owner/service incompatibility, unapproved
  sensitive field, failed threat treatment, contract semantic change, migration discovery, failed
  Constitution Check, or new Critical/High risk.
- **No-go:** anonymous canonical write; claim without verified User; claim-created tenant
  authority; fallback tenant; stale authorization mutation; cross-tenant import; direct Business
  DNA publication; secret/raw-content telemetry; unsupported Legal processing; ownerless rollout.

## 10. Integration Plan

| Integration | Responsibility split | Planned design artifact | Dependency / D03 reference | Failure behavior to validate | Reviewer | Future test input | Completion evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Identity/verification | Identity authenticates/verifies; Discovery preserves bounded continuity and claim request only. | Handoff/verification/recovery contract realization | D03 §20; WS-05/06 | Unverified, wrong User, provider outage, interrupted result fail safely | Identity/Security | Contract, integration, replay, account-switch, outage | BD-M04/07 approval |
| Workspace | Core owns lookup/create/membership state; Discovery requests/selects. | Workspace list/select/create handoff | D03 §§7, 20 | unavailable/stale/suspended/unauthorized target denies without fallback | Organization/Authorization | Scope, state, failure, retry | BD-M03/07 approval |
| Business | Core owns Business identity/lifecycle; Discovery selects exact target. | Business list/select/create handoff | D03 §§7, 20 | wrong Workspace, archived/deleted/inaccessible target denies | Organization/Authorization | Tenant/cross-Business/state | BD-M03/07 approval |
| Permission service | Authorization evaluates current action/target; snapshots are evidence only. | Runtime action/scope map and evaluation contract | D03 §7; Permission Catalog | stale/revoked/unavailable evaluation fails closed | Authorization/Security | Deny, freshness, TOCTOU, workload | BD-M04/07 approval |
| Business Architect | BA owns Candidate Fact intake/review/outcomes. | Candidate Fact and import result realization | D03 §§8, 20–21 | partial/duplicate/stale/downstream failure reconciles; no DNA write | BA owner/Security | Contract, idempotency, partial/retry | BD-M08 approval |
| Business DNA Registry | Registry alone publishes governed Business DNA after BA review. | Publication-boundary verification only | D03 §§1, 20, 23 | any direct Discovery publication is denied and detected | BA/DNA owners | Negative boundary and permission evidence | BD-M08 plus Security approval |
| Recommendations | Downstream advisory consumer of governed DNA, not Discovery output. | Downstream compatibility boundary | D03 §§1–2, 20 | unavailable consumer has no import/claim effect | Recommendation owner | Isolation and no-coupling evidence | Architecture review |
| Audit | Audit owns append-only consequential evidence. | Producer/event/result/failure contract | D03 §16 | emission uncertainty cannot manufacture success; sensitive data excluded | Audit/Security/Privacy | Event completeness, tamper/access/leakage | BD-M03/10 approval |
| Telemetry | Observability owns operational channels; analytics purpose remains bounded. | Inventory/allowlist/correlation/alert design | D03 §17 | sink failure degrades safely; no raw content | Observability/Privacy/Security | Redaction, isolation, health, failure | BD-M10/11 approval |
| Security/abuse | Security evaluates abuse/challenge and investigations; owners enforce action. | Control/evidence/degradation integration | D03 §§17, 20, 23 | limit/challenge/provider failure is accessible and non-enumerating | Security/Privacy | Abuse, false positives, distributed attempts | BD-M04/11 approval |
| Deletion orchestration | Each owner applies its effect; Privacy coordinates request/hold/policy. | Propagation/status/proof/restore contract | D03 §§18, 20–21 | partial failure remains visible/retryable; no false completion | Privacy/Legal/Data/Audit | Deletion, hold, restore, processor failure | BD-M05/09 approval |
| Support case management | Support owns case workflow, not custody or Business state. | Case/access/recovery integration | D03 §§4, 20–21 | unavailable/unauthorized support does not weaken proof | Support/Identity/Security | Case scope, elevation, dispute, outage | BD-M09/11 approval |
| Localization/notice | Localization supplies language; Legal owns notice selection/meaning. | Locale/jurisdiction/version lookup contract | D03 §§19–20 | missing approved notice disables affected processing safely | Legal/Localization | Arabic/English, RTL/LTR, version/fallback | BD-M02/05/07 |
| Infrastructure/operations | Platform capabilities host approved owner designs and enforce locations/keys/backups. | Capability/dependency/recovery realization plan | D03 §§18, 20, 26 | dependency isolation, restore suppression, failover and no false success | Infrastructure/Security/Privacy | Resilience, backup, location, keys | BD-M04/05/11 |

## 11. Security Implementation Plan

This is Security planning, not control implementation or penetration testing.

| Control category | Planned design artifact / evidence | Owner and review gate | Blocking condition |
| --- | --- | --- | --- |
| Threat-model mapping | Trace every applicable `BD-SEC-T*`, `BD-SEC-R*`, abuse case, and residual risk to workstream, design, future task/test, and acceptance owner. | Core Security; BD-GATE-04 | Unmapped Critical/High threat |
| Session protection | Control-proof handling, server-state integrity, expiry/invalidation, non-enumeration, browser-risk and secret-exposure design. | Security/Discovery; BD-M04 | Credential exposure or client authority |
| Claim replay and atomicity | Race model, semantic idempotency, one-User custody commit, same-User retry, other-User denial, uncertainty reconciliation. | Security/Identity/Data; BD-M04/07 | Partial/double/wrong-User claim |
| Authorization revalidation | Current Membership/Permission/target-state evaluation at every privileged mutation. | Security/Authorization/owners; BD-M04/07 | Cached or title-only authority |
| Tenant isolation | Workspace/Business/resource context propagation, owner checks, cross-tenant denial, safe disclosure. | Security/owners; BD-GATE-04 | Fallback or cross-tenant path |
| Sensitive-data handling | Field classification, minimization, telemetry prohibitions, support restrictions, provider boundaries. | Security/Privacy; BD-GATE-04/05 | Unbounded raw-content exposure |
| Encryption and keys | TDD-013 design covering transit, rest, backups, credentials, service identity, separation, rotation/revocation, emergency response, and Audit. | Security/Infrastructure; BD-GATE-04/06 | Missing approved protection |
| Abuse and rate limiting | TDD-014/015 design for anonymous/authenticated dimensions, cost, concurrency, queue, challenge, false-positive recovery, and safe degradation. | Security/Privacy/Operations; BD-GATE-04 | Unsupported or inaccessible controls |
| Security logging/detection | Replay, double claim, enumeration, cross-tenant, privilege, support, backup, key and abuse signals with safe fields. | Security/Observability; BD-M10/11 | Detection blind spot or data leak |
| Support controls | Case purpose/scope, strong requester proof, least privilege, elevation, separation, expiry, and operator Audit. | Security/Identity/Support; BD-M09 | Manual bypass/general browsing |
| Security review | Pre-design threat disposition, physical-design review, post-design Constitution input, implementation review, and production risk decision. | Core Security; Gates 04/08/11/12 | Unaccepted Critical/High residual risk |
| Penetration-readiness input | Later D06 scope for session theft, claim replay/race, tenant escape, authorization, XSS/CSRF, abuse, support and service credentials. | Security/QA; BD-GATE-10 | Missing high-risk verification input |
| Incident-response input | Detection-to-triage, containment, credential/key response, custody dispute, deletion/support abuse, evidence, notification, and recovery ownership. | Security/Operations/Privacy; BD-M11 | No accountable response owner |

Security approval requires control owners, design references, detection, response, residual-risk
disposition, and planned evidence. It does not authorize implementation.

## 12. Privacy and Legal Implementation Plan

| Policy area | Required inputs | Planned design deliverable | Implementation dependency | Rollout blocker / evidence |
| --- | --- | --- | --- | --- |
| Purpose and lawful basis | Approved purposes, data/processing inventory, jurisdictions | Per-purpose processing/lawful-basis decision register | Collection, inference, claim, import, analytics, support | Privacy/Legal approval; no unsupported global basis |
| Notice selection | Purpose, jurisdiction, locale, version, controller context | Notice-selection/version/language rules | Entry, storage, claim/import, rights and support surfaces | Approved Arabic/English notice variants |
| Consent separation | Participation, storage, claim/import, account, analytics, marketing, training, support purposes | Independent consent/notice evidence and withdrawal consequences | UI, custody, import, analytics/provider use | No bundled/inferred marketing or training consent |
| Rights handling | Data groups, owners, requester proof, jurisdiction | Access/correction/deletion/objection/restriction/portability workflow inputs | Owner integrations and support | Rights review and verified-request evidence |
| Deletion | Eligibility, owner effects, imported boundary, Audit minimization | Propagation/status/retry/escalation/proof design | WS-11; processors/backups | No false completion; approved procedures |
| Legal hold | Legal authority, scope, owner, expiry/review | Apply/remove/notify/evidence/separation design | Deletion and backup flows | Approved authority and auditable scope |
| Retention | Data classes and purpose lifecycle | Approved schedule categories and enforcement hooks | Storage, Audit, analytics, support, idempotency | Final values approved before affected processing |
| Processor mapping | Identity/inference/analytics/support/backup/infrastructure candidates | Processor/subprocessor data-path and contract register | Physical integration and deployment | Approved processors and terms |
| Regions/residency | Active/log/Audit/analytics/support/backup/security paths | Location, transfer, enforcement and fail-closed decisions | Infrastructure and provider selection | Region/transfer approval before production |
| Controller/processor allocation | Product/tenant/service/legal context | Jurisdiction-specific responsibility decision | Notices, rights, incident and processor contracts | Privacy/Legal approval |
| Regulated-data controls | Final question/field inventory and jurisdiction | Exclusions, guarded detection, user messaging and escalation | Question validation and support | Unsupported collection disabled |
| Model-training exclusion | Data/provider inventory and separate authority rule | Technical/contract controls preventing training/secondary use | Inference, telemetry, analytics, support | Evidence that no implicit reuse exists |

Privacy/Legal owns approval. Engineering planning may expose options and dependencies but may not
make Legal conclusions. Missing approval blocks the affected task, processing, or rollout gate
identified in §§6 and 25.

## 13. Accessibility and Localization Plan

No visual design or translated copy is created here.

| Area | Planned input/deliverable | Owner | Due milestone | Completion evidence |
| --- | --- | --- | --- | --- |
| Keyboard access | Interaction-order, skip, modal, selector, review, error and recovery requirements | Design/Accessibility | BD-M02/10 | Surface-to-keyboard behavior review |
| Screen-reader semantics | Name, role, state, instructions, changes, comparison and outcome requirements | Design/Accessibility | BD-M02/10 | Semantic design review |
| Focus behavior | Entry, validation, async result, claim, selector, conflict, partial result and recovery focus rules | Design/Accessibility | BD-M02/10 | Focus-state specification |
| Accessible errors | Error association, summary, retry, non-color status and safe message requirements | Design/Accessibility/Security | BD-M02/10 | Error-taxonomy mapping |
| Timeout/expiry | Advance warning where applicable, explanation, extension/restart/recovery semantics | Product/Accessibility/Security | BD-M02/04 | Accessible expiry design |
| Reduced motion | Motion inventory and reduced/no-motion equivalent requirement | Design | BD-M02 | Design-system disposition |
| Accessible recovery | No CAPTCHA-only path; accessible challenge and support handoff | Accessibility/Security/Support | BD-M04/09 | Recovery design review |
| Responsive behavior | Requirement-level mobile/desktop parity and logical layout behavior | Design | BD-M02 | Surface matrix |
| Bilingual content | Arabic/English source, translation ownership, version and fallback rules | Localization/Product | BD-M02/05 | Approved content workflow |
| RTL/LTR | Logical-direction layout, icon/order exceptions and mixed-content rules | Design/Localization | BD-M02 | Directional design review |
| Pluralization/date/time | Locale-aware display and no hard-coded English grammar | Localization | BD-M02 | Localization input register |
| Locale-neutral facts | Store user facts without meaning-changing translation; separate localized display | Data/Localization/BA | BD-M03 | Field/data mapping review |
| Consent versions | Language, jurisdiction, purpose and version traceability | Legal/Localization | BD-M05 | Notice/consent evidence design |
| Accessibility review | Specialist review inputs plus later D06 automated/manual evidence categories | Accessibility/QA | BD-M10/12 | Gate 07 PASS and D06 inputs |

## 14. Data and Lifecycle Plan

This section maps logical data to future physical-design gates; it defines no table, column,
database type, or migration.

| Logical data/lifecycle | Canonical status and owner | Planned physical-design concern | Lifecycle / deletion / evidence gate |
| --- | --- | --- | --- |
| Session metadata/control | Non-canonical; Discovery | Integrity, secret separation, version, expiry/invalidation, custody | TDD-003/005–007; Gate 03/04 |
| Answers | Temporary non-canonical; Discovery custodian | Sensitivity, validation, correction, locale, encryption, provider exposure | Inventory/Gate 05; deletion propagation |
| Preview | Temporary non-canonical; Discovery | Source versions, explanations, warnings, invalidation and stale regeneration | Gate 03/05; delete with working data |
| Claim evidence | Authoritative custody evidence; Discovery/Identity/Audit responsibilities | Immutable outcome references, User-only binding, minimized denial and idempotency | Gate 04; retained by approved class |
| Target context | Temporary operation context; Core owners remain canonical | Exact IDs, state/evaluation references, freshness, no ownership transfer | Gate 03/04; revalidate at mutation |
| Proposal sets/items | Non-canonical review state; Discovery | One target, source versions, existing-value references, decisions, conflicts | Gate 03/05; lifecycle tied to purpose |
| Candidate Facts | Canonical BA intake, not Business DNA | Envelope mapping, target, provenance, status and owner result | BA approval/Gate 03; BA retention |
| Import operations | Discovery orchestration plus BA owner results | Per-item outcomes, idempotency, retry/reconcile, transaction references | Gate 03/04; Audit evidence |
| Audit | Canonical append-only Audit owner | Event schemas, minimized references, access and retention class | TDD-009; Gate 04/05 |
| Telemetry | Non-canonical operational/analytics owners | Channel/field allowlists, correlation, access, retention and aggregation | TDD-010; Gate 04/05 |
| Deletion evidence/tombstones | Owner-specific minimized evidence | Propagation, restore suppression, completion proof and retry | TDD-011/012; Gate 05/06 |
| Support evidence | Support case owner; no session/Business ownership | Case, purpose, target, access, outcome and authoritative Audit references | TDD-016; Gate 04/05 |
| Backup/processor copies | Custody under approved Operations/processors | Encryption, location, lifecycle, hold, restoration suppression and propagation | TDD-012/013/017; Gate 05/06/12 |

Physical design must classify every persisted or transferred element by owner, Workspace/Business
scope, sensitivity, encryption, retention, deletion, export/rights, telemetry eligibility,
residency, compatibility, and migration impact.

## 15. API and Contract Realization Plan

| Realization area | Planning requirement | Future artifact | Owner / gate |
| --- | --- | --- | --- |
| Operation grouping | Map all 30 conceptual operations to owner-controlled physical boundaries without merging claim, target, review, publication, support, or admin authority. | Physical operation catalog | API/domain owners; Gate 03 |
| Route/protocol | Evaluate repository-approved forms; preserve long-running status where required. | Versioned interface design | API Architecture; Gate 03 |
| Request envelope | Realize actor, session, target, idempotency, locale, jurisdiction, client, version and consent context with server validation. | Request contract | API/Security/Privacy; Gate 03/04 |
| Success envelope | Realize operation/resource/state/version/message/Audit/warning/next-action meaning without exposing secrets. | Success contract | API/UX/Audit; Gate 03 |
| Error mapping | Map 32 governed errors to physical codes/statuses, safe localized messages, retry/recovery and correlation. | Error catalog realization | API/Security/Localization; Gate 03/07 |
| Authorization context | Carry exact action/User/Workspace/Business/resource context; re-evaluate at owner mutation. | Authorization integration contract | Core Authorization/owners; Gate 04 |
| Versioning/compatibility | Prefer additive evolution; define deprecation and consumer transition where needed. | Compatibility/migration disposition | Architecture/owners; Gate 03/08 |
| Idempotency/concurrency | Realize semantic keys, versions, race decisions, deterministic duplicates and ambiguous-result reads. | Transaction and reconciliation design | Domain/Data/Security; Gate 03/04 |
| State enforcement | Map 17 contract states and invalid transitions to owner-controlled guards; do not rely on UI visibility. | State/guard realization | Domain/Security; Gate 03 |
| Documentation/testing input | Keep conceptual/physical trace, owner, failures, examples without sensitive content, and compatibility cases. | D06 contract-test input | API/QA/Documentation; Gate 10 |

No route, schema, serialization, framework type, or database representation is approved by this
document.

## 16. Test Planning Input

This is not a test plan and contains no test cases. D06 must turn these inputs into an approved
risk-based strategy before test creation or coding.

| Test category | Source requirement/input | Required future test-design input | Dependency | Owner | Due milestone |
| --- | --- | --- | --- | --- | --- |
| Unit | Field validation, decisions, transformations, minimization rules | Rule inventory and independent expected outcomes | Inventories/physical design | Domain QA | BD-M10 |
| Domain state | D03 17 states and invalid transitions | State/guard/terminal/race matrix | WS-02/06/10/11 | Domain QA | BD-M10 |
| API contract | D03 30 operations, envelopes, 32 errors | Consumer/owner compatibility and safe-error matrix | TDD-001 | API QA | BD-M10 |
| Authorization | Permission Catalog/D03 §7 | Action/scope/freshness/deny/elevation matrix | TDD-008 | Authorization QA/Security | BD-M10 |
| Tenant isolation | Freeze, D03 invariants | Workspace/Business/cross-tenant/target-state negative matrix | WS-07/13 | Security QA | BD-M10 |
| Concurrency | D03 §10 | Claim, answer, preview, permission, fact, import, deletion, support race design | TDD-006 | Domain/Data QA | BD-M10 |
| Idempotency | D03 §9 | Nine operation classes, conflict/reuse, ambiguity and expiry classifications | TDD-007 | API/Domain QA | BD-M10 |
| Security | Threat Model and 17 invariants | Control verification, misuse, credentials, replay, owner boundary and recovery | WS-16 | Security QA | BD-M10 |
| Abuse | Threat/Policy abuse controls | Flood/cost/challenge/evasion/false-positive/safe-degradation inputs | TDD-014/015 | Security/Operations QA | BD-M10 |
| Privacy | Policy Pack and data contract | Purpose, minimization, consent, rights, provider, location and negative leakage | WS-17 | Privacy QA | BD-M10 |
| Deletion/backup/hold | D03 §18 | Propagation, partial failure, tombstone, restore, hold and completion evidence | TDD-011/012 | Privacy/Operations QA | BD-M10 |
| Audit | D03 26 Audit events | Completeness, result/reason, tenant scope, tamper/access and prohibited fields | TDD-009 | Audit QA | BD-M10 |
| Accessibility | FS §15 and surface inventory | Keyboard, semantics, focus, errors, timeout, challenge, motion and responsive evidence | WS-18 | Accessibility QA | BD-M10 |
| Localization/RTL | FS §16; Constitution | Arabic/English, RTL/LTR, plural/date, notice version and meaning evidence | WS-18 | Localization QA | BD-M10 |
| Integration | D03 13 boundaries | Owner contract, auth, retry, failure isolation, minimization and correlation | WS-19 | Integration QA | BD-M10 |
| End-to-end journeys | FS 12 journeys/30 ACs | Happy/account-first/recovery/rights/target/import outcome coverage | All product WS | Product/E2E QA | BD-M10 |
| Failure recovery | Errors, dependency failures, safe degradation | Failure injection, ambiguous outcome, retry, reconciliation, outage and support inputs | WS-02/05–17/19/21 | Resilience QA | BD-M10 |
| Rollout verification | D07 inputs | Flag/exposure, monitoring, rollback, support, incident, data and activation verification | WS-22 | Release QA/Operations | BD-M15 |

## 17. Observability and Operational Plan

| Area | Planned outcome | Owner | Required evidence / due gate |
| --- | --- | --- | --- |
| Audit implementation | Consequential producer/event/outcome/correlation matrix with authoritative handling | Audit/domain owners | TDD-009; BD-M10 |
| Analytics | Purpose-bound, minimized, lawful funnel/abandonment measures | Product Analytics/Privacy | Approved inventory; BD-M05/11 |
| Operational logs | Structured safe metadata, error/dependency state and correlation; no raw content | Observability/Security | Allowlist/redaction review; BD-M11 |
| Security events | Replay, enumeration, tenant, privilege, abuse, support, backup and key signals | Security/Observability | Detection/response mapping; BD-M04/11 |
| Support evidence | Case/access/action/outcome evidence separate from telemetry and Business data | Support/Audit | TDD-016; BD-M09/11 |
| Metrics/health | Journey-state, operation result, dependency, capacity and safe-degradation signals | Operations/owners | TDD-018; BD-M11 |
| Alerts | Evidence-based alert conditions, routing, severity, suppression review and escalation | Operations/Security/Privacy | Operational approval; BD-M11 |
| Dashboards | Role-scoped operational views without raw content or cross-tenant leakage | Operations/Observability | Access/data review; BD-M11 |
| Runbooks/incident response | Claim, import, deletion, support, provider, key, abuse and dependency response inputs | Operations/Security/Support/Privacy | Owner-approved runbooks; BD-M11/15 |
| Operational handoff | Named service, on-call, privacy, Security, support, deletion and rollback owners | Operations/Product | D07 evidence; BD-M15 |

No log, event, dashboard, alert, runbook, or operational configuration is created here.

## 18. Rollout Plan Input

This section supplies D07 inputs; it is not a rollout plan or approval.

| Future input | Planning requirement | Owner | Required before |
| --- | --- | --- | --- |
| Feature control | Bounded optional-path exposure and safe-disable design that cannot bypass authority | Product/Operations/Engineering | BD-GATE-12 |
| Internal preview | Approved users/data/purpose, production-data restriction, monitoring and support boundary | Product/Security/Privacy | Any preview |
| Staged exposure | Evidence-based cohort/eligibility progression with stop criteria | Product/Operations | Rollout approval |
| Monitoring | Health, error, abuse, privacy, support, journey and dependency signals | Operations/Security/Privacy | Exposure |
| Rollback | Owner-safe disable/reconcile/forward-fix decision; no custody/deletion/BA corruption | Operations/Architecture/Data | Rollout approval |
| Support readiness | Staffed case/recovery/escalation workflow and safe access | Support/Identity/Security | Exposure |
| Incident readiness | Detection, triage, containment, communication, Legal and recovery ownership | Operations/Security/Privacy | Exposure |
| Legal approval | Lawful basis, notices, rights, schedules, processors, regions and transfers | Privacy/Legal | Affected production processing |
| Data initialization/migration | Explicit no-migration evidence or separately governed migration/rollback plan if research finds state | Data/Architecture | Implementation/rollout |
| Production review | Verified requirements, tests, operations, Security, Privacy, accessibility, localization, support, rollback and ownership | Release Governance | BD-GATE-13 |

## 19. Review and Approval Gates

| Gate ID | Gate and purpose | Required inputs | Approver | Pass criteria | Failure behavior | Downstream authorization | Prohibited interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| BD-GATE-01 | Plan Approval — establish a complete governed strategy. | D01–D04, authority map, this plan, validation | Product Owner / Technical Architecture | Full scope, 22 WS, phases, milestones, TDDs, dependencies, risks, gates, traceability; no unsupported choice | Revise plan; escalate authority conflict | Allows approved design work only | Not task, test, coding, or rollout authority |
| BD-GATE-02 | Product Inventory Approval — fix questions, fields, behavior and content inputs. | §5 deliverables; Privacy/BA/Design reviews | Product Owner with BA/Privacy | Scope-aligned, minimized, classified, localizable, explainable, versioned | Return inventory; affected work stops | Allows affected physical/UI design | Not permission to collect/process data |
| BD-GATE-03 | Physical Contract Approval — approve physical API/data/state/transaction compatibility design. | TDD-001–003/005–009/018; owner contracts; migration disposition | Technical Architecture and domain owners | Preserves D03, ownership, compatibility, context, failure, idempotency and lifecycle | Revise; contract-semantic issue returns to D03/Governance | Allows D06 inputs for affected design | Not an API/schema/code authorization |
| BD-GATE-04 | Security Design Approval — approve identity, session, claim, authorization, keys, abuse, support and risk treatment. | Threat mapping; TDD-003–010/013–016; residual risks | Core Security with owners | No unmitigated Critical/High design issue; detection/response/evidence defined | Stop affected work; revise or escalate | Allows Security-sensitive task readiness | Not implementation or risk acceptance by engineering |
| BD-GATE-05 | Privacy/Legal Design Checkpoint — approve processing decisions and explicit later gates. | Inventories, processing map, notices, rights, schedules, locations/processors/transfers | Privacy/Legal | Lawful decision owner, scope, fail-closed rules, and remaining production approvals recorded | Disable/stop affected path; revise | Allows only approved affected task readiness | Not one global Legal basis or rollout approval |
| BD-GATE-06 | Infrastructure Design Approval — approve capability design for storage, keys, backups, recovery, residency and operations. | TDD-003/012–015/017–018; dependency evidence | Infrastructure with Security/Privacy/Architecture | Meets owner, Security, location, restore, recovery and operability constraints | Revise; unavailable capability blocks affected work | Allows infrastructure task readiness | Not infrastructure creation/deployment |
| BD-GATE-07 | Accessibility and Localization Design Review — approve first-class accessible bilingual behavior. | §13 inputs, surfaces/errors/journeys, notice/content dependencies | Accessibility/Localization/Product/Legal | Keyboard, semantics, focus, recovery, responsive, Arabic/English and RTL/LTR inputs complete | Return design; affected UI tasks blocked | Allows affected D06 inputs | Not visual implementation or release approval |
| BD-GATE-08 | Post-Design Constitution Check — verify every physical design against binding authority. | Gates 02–07; all TDD dispositions; traceability; risks | Human Architecture Authority | Every applicable Constitution gate PASS; no owner/freeze/contract conflict | Stop; revise or return to Governance | Prerequisite for task authorization | Cannot waive architecture through complexity |
| BD-GATE-09 | Task Breakdown Authorization — decide whether D06 task creation may begin. | Gate 08 PASS; §20 DoR; owner/dependency map | Delivery Governance | All DoR items met; exact paths/owners can be derived without invention | Keep D06 closed; resolve missing design | Authorizes task artifact creation only | Not task approval, testing, or coding |
| BD-GATE-10 | Test Strategy Approval — approve D06 risk-based test categories, evidence, environments and ownership. | §16 inputs, physical designs, tasks where authorized | QA plus specialist owners | Required categories mapped; N/A reasons approved; risks/invariants/ACs covered | Test/coding authorization remains blocked | Makes test strategy an input to implementation decision | Not test execution or coding authority |
| BD-GATE-11 | Implementation Authorization — explicit Human/Product/Governance decision. | Approved plan, D06 tasks/test strategy, checks, approvals, closed coding blockers | Human/Product/Governance authority | No unresolved Critical/High blocker; authorized scope/files/evidence recorded | No coding | Authorizes only recorded implementation scope | Not rollout or production authority |
| BD-GATE-12 | Rollout Readiness Approval — approve D07 operational exposure package. | Verified implementation evidence, Legal/Security approvals, monitoring, support, incident, rollback | Product/Operations/Security/Privacy/Legal | Required evidence, owners, controls, locations/processors and rollback complete | No rollout | Authorizes only approved rollout scope/stage | Not production activation by itself |
| BD-GATE-13 | Production Activation Approval — decide production exposure. | Gate 12, release evidence, deployment/change authority | Release/Production Governance | Mandatory release/production gates PASS and activation record exists | No activation | Authorizes named activation only | Not permission to expand scope or bypass monitoring |

## 20. Definition of Ready for Task Creation

`BD-RDY-D06` may create tasks only when all applicable items are evidenced:

- [ ] this plan is accepted in the governed repository;
- [ ] final question, field, sensitivity, eligibility, exclusion, explanation, localization, and
  consent/notice dependency inventories are approved;
- [ ] physical API, data, state, compatibility, idempotency, concurrency, and migration
  disposition decisions are approved;
- [ ] runtime User/service Permission identifiers and scopes are mapped;
- [ ] identity, verification, session custody, claim atomicity, replay, account switch, recovery,
  and dispute designs are approved;
- [ ] logical-to-physical data ownership, lifecycle, encryption, residency, deletion, backup,
  legal-hold, rights, and processor effects are approved or explicitly later-gated without being
  embedded in affected tasks;
- [ ] Threat Model controls, abuse/rate-limit design, key controls, support access, residual-risk
  owners, and safe degradation are approved;
- [ ] Audit event names/schema and telemetry/event allowlists are approved;
- [ ] owner integrations and service/workload boundaries are approved and available for
  decomposition;
- [ ] accessibility, Arabic/English, RTL/LTR, responsive, error/recovery, and notice designs are
  approved;
- [ ] support workflow, initial service targets, dependency failure behavior, migration/rollback
  disposition, and operational ownership inputs are approved;
- [ ] all applicable Legal blockers are assigned to explicit task/coding/rollout gates;
- [ ] §16 test-strategy inputs are available;
- [ ] no unresolved Critical or High design conflict remains; and
- [ ] the post-design Constitution Check passes.

Until every applicable item is met, **task creation remains unauthorized**.

## 21. Definition of Done for This Implementation Plan

This plan is complete when:

- [x] implementation strategy and scope boundaries are defined;
- [x] all 22 workstreams include objective, scope, owner, dependencies, decisions, gates,
  deliverables, evidence, task inputs, and blockers;
- [x] nine phases and 15 milestones define the dependency sequence;
- [x] 20 physical technical decisions are registered without selection;
- [x] Security, Privacy/Legal, accessibility, localization, data/lifecycle, API realization,
  testing input, Audit, observability, operations, and rollout are embedded;
- [x] integration responsibilities and failure evidence are explicit;
- [x] 13 review/approval gates preserve separate authorizations;
- [x] task-creation readiness is explicit;
- [x] risks, owners, triggers, mitigations, and escalation gates are defined;
- [x] change control and traceability exist;
- [x] unresolved decisions remain visible; and
- [x] no unsupported technology, physical artifact, task, test, estimate, or authorization is
  created.

## 22. Risk Register

Likelihood and impact are qualitative. Critical/High **planning gaps** are absent; Critical/High
delivery risks below are controlled by design and approval gates.

| Risk ID | Risk | Likelihood | Impact | Owner | Plan mitigation | Trigger | Escalation gate | Blocking status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BD-PLAN-RISK-001 | Legal approval delay changes or stops a processing path. | Medium | High | Privacy/Legal/Product | Early processing map and explicit no-code/no-rollout checkpoints. | Approval misses due gate or rejects purpose | Gate 05/12 | Blocks affected tasks/coding/rollout, not plan |
| BD-PLAN-RISK-002 | Processor/region/transfer approval is delayed or unavailable. | Medium | High | Privacy/Legal/Infrastructure | Inventory every active/support/backup/provider path and retain disable option. | No approved location/contract | Gate 05/06/12 | Blocks affected processing/rollout |
| BD-PLAN-RISK-003 | Product question/field inventory drifts after design. | High | Medium | Product/BA/Privacy | Baseline version; impact review and traceability on every change. | Meaning/field/sensitivity changes | Gate 02/03 | Blocks affected tasks until synchronized |
| BD-PLAN-RISK-004 | Identity mechanism cannot meet custody continuity/recovery constraints. | Medium | Critical | Identity/Security | Evaluate approved alternatives against Threat Model before task authorization. | No mechanism passes Gate 04 | Gate 04/08 | Blocks claim tasks/coding |
| BD-PLAN-RISK-005 | Claim race or ambiguity allows duplicate/wrong custody. | Medium | Critical | Discovery/Identity/Data/Security | Atomic outcome, semantic idempotency, reconciliation and failure-test inputs. | Design permits partial/double/false success | Gate 03/04 | Blocks task/coding approval |
| BD-PLAN-RISK-006 | Runtime permission mapping is broader/different from logical catalog. | Medium | Critical | Authorization/Security | Action-by-action User/workload/target map and revalidation review. | Wildcard/title/fallback or missing scope | Gate 03/04 | Blocks privileged tasks/coding |
| BD-PLAN-RISK-007 | Physical schema diverges from temporary/canonical ownership. | Medium | High | Data/Architecture | Map every record to D03 owner/custody/lifecycle and Constitution review. | New owner/lifecycle or cross-domain write | Gate 03/08 | Stops plan; may require Governance |
| BD-PLAN-RISK-008 | Retry creates duplicate Candidate Facts. | Medium | Critical | Discovery/BA/Security | Stable semantic identity, owner result reconciliation and per-item duplicate evidence. | Same meaning produces new BA fact | Gate 03/04 | Blocks import tasks/coding |
| BD-PLAN-RISK-009 | Deletion propagation or backup suppression fails. | Medium | High | Privacy/Data/Operations | Status/proof/retry/escalation plus restore validation and D07 procedure. | False completion or restored active data | Gate 05/06/12 | Blocks affected rollout |
| BD-PLAN-RISK-010 | Audit leaks raw answers, credentials, or cross-tenant data. | Medium | High | Audit/Security/Privacy | Explicit safe schemas, negative field rules, access and leakage evidence. | Prohibited field in event | Gate 04/05/10 | Blocks coding/rollout |
| BD-PLAN-RISK-011 | Telemetry/support evidence leaks sensitive content. | Medium | High | Observability/Support/Security/Privacy | Allowlist, redaction, purpose, retention, access and negative evidence. | Raw/secret/unscoped data emitted | Gate 04/05/10 | Blocks coding/rollout |
| BD-PLAN-RISK-012 | Support recovery becomes an ownership/authorization bypass. | Medium | Critical | Support/Identity/Security | Case-bound proof, separation, least privilege, no default reassignment, Audit. | Manual custody/tenant mutation | Gate 04/05/06 | Blocks support path |
| BD-PLAN-RISK-013 | Abuse controls cause inaccessible or privacy-invasive false positives. | Medium | High | Security/Privacy/Product/Accessibility | Minimized dimensions, accessible challenge, appeal/recovery and safe degradation. | Legitimate flow lacks safe recovery | Gate 04/07/12 | Blocks affected rollout |
| BD-PLAN-RISK-014 | Accessibility defects are discovered after interaction design. | Medium | High | Design/Accessibility | Gate 07 before tasks; embed evidence in every surface and journey. | Missing keyboard/semantic/focus/recovery input | Gate 07/10 | Blocks UI tasks/rollout |
| BD-PLAN-RISK-015 | Arabic/English, RTL/LTR, or Legal notice meaning diverges. | Medium | High | Localization/Design/Legal | Versioned bilingual content, logical layout and meaning review. | Language/version behavior differs materially | Gate 05/07/10 | Blocks affected tasks/rollout |
| BD-PLAN-RISK-016 | Required owner service is immature or incompatible. | Medium | High | Technical lead/service owner | Phase 0/1 availability/version/failure research and owner approval. | No compliant contract or safe fallback | Gate 03/08 | Blocks affected tasks |
| BD-PLAN-RISK-017 | Service targets are guessed or inadequate for cost/recovery. | Medium | High | Product/Operations/Architecture | Evidence-based TDD-018, no unsupported numeric commitment. | Plan/task embeds unapproved target | Gate 03/06 | Blocks affected tasks |
| BD-PLAN-RISK-018 | Operational, deletion, support, Security, or incident ownership is missing. | Medium | Critical | Operations/Product/Specialists | Name owners and runbooks before D07; no owner means no exposure. | Unowned alert/action/escalation | Gate 12 | Blocks rollout |
| BD-PLAN-RISK-019 | Rollout lacks verified rollback/reconciliation. | Medium | Critical | Operations/Data/Architecture | TDD-020 and lifecycle-safe rollback evidence before rollout. | Rollback can corrupt custody/data/delete state | Gate 12 | Blocks rollout |
| BD-PLAN-RISK-020 | Task breakdown silently changes architecture or answers an open decision. | Medium | Critical | Architecture/Delivery Governance | Gate 08 PASS; task coverage review; return discoveries through §23. | Task adds owner/lifecycle/permission/default | Gate 09/11 | Blocks tasks/coding; Governance required |

### 22.1 Blocker disposition

- **Critical planning gaps:** None.
- **High planning gaps:** None.
- Critical/High delivery risks are not accepted by this plan; they have owners, controls, and
  stop gates. A failed mitigation becomes a blocker at its named gate.

## 23. Change-Control Protocol

| Discovery/change | Required response |
| --- | --- |
| Plan sequencing, dependency, owner assignment, evidence, or bounded physical choice changes without product/contract meaning change | Revise this plan; rerun affected pre/post-design checks and approvals. |
| User behavior, journey, scope, acceptance, surface, error meaning, or product requirement changes | Revise and reapprove the Feature Specification; reassess D02–D05. |
| Aggregate/custody, operation semantics, state guard, authorization context, Candidate Fact envelope, error, Audit, deletion, integration, or invariant changes | Revise D03 contracts; rerun Constitution and readiness gates. |
| Canonical owner, domain boundary, organization model, lifecycle authority, cross-domain dependency, or architecture guarantee changes | Stop; create/approve an ADR or other required Governance decision. |
| Frozen journey/boundary changes | Stop; Human Architecture Review and Freeze amendment/successor review are required. |
| Purpose, legal basis, data class, consent, rights, retention, residency, processor, transfer, encryption, abuse, support, or residual-risk changes | Obtain Privacy/Legal and/or Security reapproval; rerun affected gates. |
| Task-level discovery of ambiguity or conflict | Do not solve in a task. Return to the owning Product, contract, plan, Security, Legal, or Governance artifact. |
| Compatibility/migration need discovered | Record impact; create a separately governed migration/compatibility plan or feature when risk/consumer/data scope requires it. |

Silent architecture, owner, lifecycle, permission, tenant, contract, policy, or rollout changes are
prohibited. Historical artifacts remain preserved.

## 24. Traceability Matrix

| Workstream | Milestone | Feature Specification | Constitution / D02 condition | D03 contract | D04 condition | Technical decision | Review gate | Future task dependency | Future test dependency |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BD-WS-01 | M02 | §§3–6, 10, 15–16, 24 | C01/C07/C08 | §§8, 19 | C03/C07/C09 | TDD-002 | Gate 02/07 | Approved inventories | Product/accessibility/localization |
| BD-WS-02 | M06 | FR-001–010; §9 | C02/C05 | §§2–6, 9–10, 18 | C04/C06/C08 | TDD-002/003/005–007/011 | Gate 03–05/08 | Lifecycle/storage design | State/race/deletion |
| BD-WS-03 | M02/06 | FR-011–020 | C01/C07/C08 | §§2, 11, 14 | C03/C07 | TDD-002/003 | Gate 02/03/05/07 | Question/validation design | Unit/UI/privacy |
| BD-WS-04 | M06 | FR-021–030 | C01/C04/C07 | §§2, 8, 11 | C03/C07/C08 | TDD-001/002/010 | Gate 03–05/07 | Preview/provider design | Explainability/stale/failure |
| BD-WS-05 | M04/07 | FR-031–038 | C02/C07 | §§6, 20 | C04/C09 | TDD-004 | Gate 04/08 | Identity handoff design | Identity/account-switch/outage |
| BD-WS-06 | M04/07 | FR-039–050 | C02 | §§4–6, 9–10, 21 | C04/C08 | TDD-005–007 | Gate 03/04/08 | Atomic claim design | Replay/race/idempotency |
| BD-WS-07 | M07 | FR-051–062 | C03 | §§7, 11, 20 | C05/C06 | TDD-001/008 | Gate 03/04/08 | Owner/permission design | Tenant/state/revocation |
| BD-WS-08 | M02/08 | FR-063–075 | C04/C07 | §8 | C03/C06/C09 | TDD-002/006 | Gate 02/03/05/07 | Field/comparison design | Conflict/correction/partial |
| BD-WS-09 | M08 | FR-076–087 | C04 | §§8, 20–21 | C02/C05/C06 | TDD-001/002/008 | Gate 03/04/08 | BA physical contract | Owner/provenance/authorization |
| BD-WS-10 | M08 | FR-076–087; §9 | C04 | §§8–10, 13, 21 | C04/C05/C06/C09 | TDD-005–007 | Gate 03/04/08 | Import transaction design | Partial/duplicate/retry |
| BD-WS-11 | M05/09 | FR-088–094 | C05/C07 | §§14, 18–20 | C06/C07/C08 | TDD-011/012/017 | Gate 05/06/08 | Legal/lifecycle decisions | Deletion/hold/restore |
| BD-WS-12 | M04/09 | FR-095–106 | C02/C06/C07 | §§4–6, 11, 20–21 | C04/C07/C10 | TDD-016 | Gate 04–06/08 | Support workflow | Verification/access/dispute |
| BD-WS-13 | M07 | §13 | C03 | §§7, 20, 23 | C05 | TDD-008 | Gate 03/04/08 | Runtime permission map | Authorization/tenant/TOCTOU |
| BD-WS-14 | M03/10 | FR-107–114 | C06 | §16 | C02/C07 | TDD-009 | Gate 03–05/10 | Event schema/producer map | Completeness/leakage/access |
| BD-WS-15 | M10/11 | FR-107–114; NFRs | C06/C07 | §17 | C07/C10 | TDD-010/018 | Gate 04–06/10 | Telemetry/target design | Redaction/health/failure |
| BD-WS-16 | M04 | §14; NFRs | C02/C03/C06 | §§22–23 | C04/C05/C07/C08 | TDD-003–010/013–016 | Gate 04/08 | Security design approval | Threat/invariant/abuse |
| BD-WS-17 | M05 | §§14, 17 | C05/C07 | §§14, 18–20 | C06/C07 | TDD-011/012/017 | Gate 05/08 | Legal approvals/gates | Purpose/rights/location |
| BD-WS-18 | M02/10 | §§15–16, 21 | C08 | §§13, 19–20, 23 | C03/C09 | Design inputs | Gate 07/08/10 | Accessible bilingual design | Accessibility/RTL/content |
| BD-WS-19 | M03 | §19 | C01/C03/C04/C06 | §§15, 20–21 | C02/C05/C06/C08 | TDD-001/002 | Gate 03/04/06/08 | Owner contracts | Contract/failure/isolation |
| BD-WS-20 | M10 | §21; 30 ACs | All applicable | §§5–24 | C09 | All applicable | Gate 10 | D06 strategy/tasks | All required categories |
| BD-WS-21 | M04/05/11 | NFRs; §23 | C05–C07 | §§17–21, 26 | C06–C08/C10 | TDD-003/012–015/017–018 | Gate 04–06/08 | Capability design | Recovery/location/key/capacity |
| BD-WS-22 | M11/15 | NFRs/ACs | C05–C08 | §§17–20, 23, 26 | C07/C09/C10 | TDD-019/020 | Gate 10–13 | D07 rollout readiness | Rollout/rollback/production |

## 25. Remaining Open Decisions

Every unresolved decision remains open until its named approval. “Blocks tasks” refers to affected
tasks, not unrelated decomposition.

| Open decision | Owner | Due milestone | Required approval | Blocks tasks? | Blocks coding? | Blocks rollout? | Escalation path |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TDD-001 API protocol/routes/versioning | API Architecture | M03 | Gate 03 | Yes | Yes | Yes | D03/Governance if semantics change |
| TDD-002 physical data/migration design | Data/Architecture | M03 | Gate 03/08 | Yes | Yes | Yes if affected | Governance for owner/lifecycle |
| TDD-003 session storage/custody | Discovery/Data | M03/04 | Gates 03/04/06 | Yes | Yes | Yes | Security/Privacy/Architecture |
| TDD-004 identity/recovery mechanism | Identity/Security | M04/07 | Gate 04 | Yes | Yes | Yes | Security/Governance |
| TDD-005 claim atomicity mechanism | Discovery/Data/Security | M04/07 | Gates 03/04 | Yes | Yes | Yes | D03/Governance on semantic gap |
| TDD-006 concurrency strategy | Domain/Data | M03/07/08 | Gate 03/04 | Yes | Yes | Yes | Architecture/Security |
| TDD-007 idempotency persistence/lifecycle | API/Domain/Data | M03/07/08 | Gate 03/04/05 | Yes | Yes | Yes | Security/Privacy |
| TDD-008 runtime Permission identifiers/scopes | Authorization/Security | M03/07 | Gate 03/04 | Yes | Yes | Yes | Governance on privilege change |
| TDD-009 Audit naming/schema/commit behavior | Audit | M03/10 | Gate 03/04/05 | Yes | Yes | Yes | Audit/Security/Privacy |
| TDD-010 telemetry inventory/allowlist/targets | Observability | M04/11 | Gate 04/05/06 | Yes | Yes | Yes | Security/Privacy/Operations |
| TDD-011 deletion orchestration | Privacy/Data | M05/09 | Gate 05 | Yes | Yes | Yes | Privacy/Legal/Governance |
| TDD-012 backup restore suppression/hold | Operations/Privacy | M05/09/11 | Gate 05/06 | Conditional | Yes | Yes | Privacy/Legal/Security |
| TDD-013 encryption/key implementation | Security/Infrastructure | M04/05 | Gate 04/06 | Yes | Yes | Yes | Security |
| TDD-014 rate-limit design | Security/Operations | M04/11 | Gate 04 | Yes | Yes | Yes | Security/Privacy |
| TDD-015 abuse/challenge/recovery design | Security/Product | M04/11 | Gate 04/07 | Yes | Yes | Yes | Security/Accessibility/Privacy |
| TDD-016 support tooling/workflow | Support/Identity | M04/09/11 | Gate 04–06 | Yes | Yes for path | Yes | Security/Privacy/Governance |
| TDD-017 regions/processors/transfers | Privacy/Legal/Infrastructure | M05/11 | Gate 05/06/12 | Conditional | Yes for affected processing | Yes | Legal/Governance |
| TDD-018 service targets/capacity | Product/Operations/Architecture | M03/11 | Gate 03/06 | Yes | Yes where relevant | Yes | Architecture/Operations |
| TDD-019 feature exposure strategy | Product/Operations | M11/15 | Gate 12 | No | Before exposure behavior | Yes | Rollout Governance |
| TDD-020 rollback/reconciliation | Operations/Data/Architecture | M11/15 | Gate 12 | No | Before rollout-dependent work | Yes | Architecture/Privacy/Security |

The final question and field inventories are also open Product decisions under §5 and block
affected task creation at BD-GATE-02. Final Legal basis, notice text, schedules, jurisdictions,
regions, processors, transfers, and controller/processor allocation remain Privacy/Legal
decisions; this plan does not close them.

## 26. `BD-RDY-D05` Closure Decision

### 26.1 Closure evaluation

| Closure criterion | Result | Evidence |
| --- | --- | --- |
| Implementation strategy defined | Met | §§1, 7, 9 |
| All 22 workstreams defined | Met | §4 |
| Sequencing and nine phases defined | Met | §§7, 9 |
| Fifteen milestones and dependencies explicit | Met | §§8–10 |
| Twenty technical decisions registered without selection | Met | §§6, 25 |
| Security and Privacy embedded | Met | §§11–12 |
| Accessibility/localization embedded | Met | §13 |
| Data/lifecycle and API realization planned | Met | §§14–15 |
| Testing, observability, operations and rollout inputs identified | Met | §§16–18 |
| Thirteen review/approval gates defined | Met | §19 |
| Task-creation readiness explicit | Met | §20 |
| Twenty risks and owners defined | Met | §22 |
| Change control and traceability exist | Met | §§23–24 |
| Open decisions remain visible | Met | §25 |
| Unsupported technology or numeric choice absent | Met | §§6, 21, 25 |

**Closure status:** `BD-RDY-D05` is **closed** at the governed implementation-plan level.

**Final decision:** `APPROVED-IMPLEMENTATION-PLAN-WITH-CONDITIONS`.

This closure:

- does not authorize D06 task creation until §20 and BD-GATE-09 pass;
- does not create or authorize test cases or test execution;
- does not authorize coding, APIs, schemas, migrations, infrastructure, or deployment;
- does not approve D07 rollout readiness or any rollout configuration; and
- does not approve production activation.

### 26.2 Remaining delivery blockers

| Blocker/gate | Status | Required evidence |
| --- | --- | --- |
| Product/physical/Security/Privacy/design conditions | Open | BD-M02–M12 and Gates 02–08 |
| BD-RDY-D06 — Task breakdown and test strategy readiness | Open | §20 DoR, Gate 09, then approved tasks/test strategy |
| BD-RDY-D07 — Rollout and operational readiness | Open | Verified authorized implementation and Gate 12 evidence |
| BD-RDY-I01 — Explicit implementation authorization | Open | Gate 11 Human/Product/Governance decision |
| Production activation | Open | Gate 13 release/production decision |

## 27. Validation and Final Conclusion

### 27.1 Validation record

Before commit, validation confirms:

- exactly one new plan file and no existing-file modification;
- all required upstream authorities and planning/delivery governance were reviewed;
- 12 unique supported assumptions, 22 unique workstreams, nine phases, 15 unique milestones,
  20 unique technical decisions, 13 unique gates, ten plan conditions, and 20 unique risks;
- Product inventories are planned but not created;
- all physical decisions are registered but unselected;
- Security, Privacy/Legal, accessibility, localization, data/lifecycle, API realization, testing
  input, Audit, observability, operations, support, infrastructure, and rollout input are present;
- Definition of Ready, Definition of Done, change control, traceability, and open decisions exist;
- no task, test case, code, route, schema, migration, infrastructure, deployment, rollout
  configuration, technology/vendor/location selection, estimate, duration, SLA, numeric limit, or
  staffing commitment was created;
- task creation, testing, coding, rollout, and production activation remain unauthorized; and
- repository links, Markdown, identifiers, staged scope, and diff cleanliness are validated before
  commit.

### 27.2 Final conclusion

`BD-RDY-D05 is closed with the decision APPROVED-IMPLEMENTATION-PLAN-WITH-CONDITIONS. The Business Discovery MVP implementation strategy, workstreams, sequencing, milestones, dependencies, design decisions, review gates, Security, Privacy, accessibility, localization, testing, observability, operational, and rollout inputs are defined sufficiently to proceed toward governed task-breakdown readiness. Task creation remains blocked until the plan's Definition of Ready is satisfied. Test creation, coding, rollout, and production activation remain unauthorized.`
