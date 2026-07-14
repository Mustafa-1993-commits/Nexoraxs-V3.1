# NexoraXS Development Lifecycle

## 1. Purpose

This document defines the mandatory lifecycle for meaningful NexoraXS product and engineering changes. It orchestrates existing architecture, governance, design, Spec Kit, implementation, and release practices. It does not create architecture, approve features, or replace the Constitution.

The lifecycle is stage-gated:

```text
Feature Idea
  -> Business Validation
  -> Architecture Review
  -> Design Proposal
  -> Specification
  -> Clarification
  -> Planning
  -> Task Breakdown
  -> Implementation
  -> Testing
  -> Review
  -> Feature Release Freeze
  -> Production
```

A stage may be marked not applicable only with a recorded reason and approving authority. Architecture, Constitution, tenant isolation, security, accessibility, and required approval gates cannot be waived as “not applicable” when affected.

## 2. Authority and Execution Order

### 2.1 Source authority

Conflict resolution always follows the complete repository authority order:

1. Architecture Freeze documents
2. Governance, Accepted ADRs, and canonical glossary
3. Genesis
4. Approved milestone baselines
5. Constitution
6. `AGENTS.md`
7. Approved feature specifications, plans, tasks, and implementation guidance

### 2.2 Execution orchestration

Within those authorities, delivery is orchestrated as:

```text
Architecture Freeze
  -> Constitution
  -> AGENTS.md
  -> Design Intelligence
  -> Execution Layer
  -> UI/UX Pro Max candidate guidance
  -> Spec Kit Workflow
  -> Implementation
```

This sequence does not demote Governance, Genesis, or milestone baselines. It describes how engineering consumes established authority, not a new precedence rule.

### 2.3 Known upstream documentation conflict — C-EXEC-01

Three existing Design Intelligence passages place the Constitution above the Architecture Freeze:

- `docs/10-design-intelligence/01-DESIGN-PHILOSOPHY.md`, lines 9–15;
- `docs/10-design-intelligence/04-AI-DESIGN-RULES.md`, lines 9–17; and
- `docs/10-design-intelligence/08-NEXORAXS-DESIGN-LAYER.md`, lines 22–35.

That ordering conflicts with `.specify/memory/constitution.md`, Principle I, lines 67–83, and
`AGENTS.md`, section 1, lines 9–34, which place the Architecture Freeze, Governance, Genesis, and
approved milestone baselines above the Constitution.

**Disposition:** the higher-authority order in section 2.1 controls. The affected authority-order
wording in Design Intelligence must receive a separate documentation-only correction. Its design
guidance remains consumable only where consistent with the controlling order. This Execution Layer
does not modify the existing Design Intelligence documents and introduces no architecture change.

## 3. Lifecycle Principles

- No meaningful implementation begins without an approved specification, plan, and tasks.
- Every stage has an owner, evidence, entry criteria, exit criteria, and rejection path.
- A failed gate stops only the affected work and reports the exact blocker.
- No stage may silently answer an architectural Deferred Decision.
- UI-facing features follow the Frontend-First Policy and reach UI maturity before feature backend implementation.
- Tests, documentation, migration, rollback, security, observability, localization, and accessibility are planned—not appended after code.
- A normal feature release freeze is not an Architecture Freeze.
- Production feedback starts a new governed change; it does not authorize direct drift.

## 4. Stage 1 — Feature Idea

**Objective:** capture a problem or opportunity without prematurely committing to a solution.

**Required input:** observed problem, stakeholder request, audit finding, operational need, support evidence, or approved roadmap hypothesis.

**Required output:** short idea brief containing user, problem, context, desired outcome, evidence, urgency, and known constraints.

**Owner:** Product Owner or delegated product lead.

**Exit gate:** the idea describes a business/user problem rather than only a screen, technology, API, or implementation request.

**Reject/defer when:** the problem is unsupported, duplicates existing scope, conflicts with an authority, or belongs to a future/unapproved product.

## 5. Stage 2 — Business Validation

**Objective:** determine whether the idea is valuable, timely, measurable, and within product strategy.

**Validation questions:**

- Who experiences the problem and how often?
- What business capability and outcome are affected?
- What happens if nothing changes?
- Is the problem already solved by current behavior or an approved feature?
- Which product/OS owns the user experience?
- What evidence and success measures are available?
- Is this current scope, future scope, or intentionally deferred?

**Required output:** validated problem statement, business value, target users, scope/non-scope, success measures, priority, and Product Owner disposition.

**Owner/approval:** Product Owner. The Architect validates ownership claims but does not approve business priority.

**Exit gate:** `VALIDATED`, `DEFERRED`, or `REJECTED` is recorded with reason.

## 6. Stage 3 — Architecture Review

**Objective:** prove the feature can be pursued within frozen architecture or identify required governance first.

**Review areas:** controlling Freeze/ADRs, owner, canonical writes, organization context, OS independence, contracts, lifecycle concepts, AI/Business Brain boundaries, security, audit, observability, compatibility, and unresolved decisions.

**Required output:**

- architecture trace;
- owner and boundary map;
- `NO ARCHITECTURE CHANGE`, `ADR REQUIRED`, `ARCHITECTURE CONFLICT`, or `DEFERRED DECISION BLOCKER` disposition;
- exact sources for any blocker.

**Owner/approval:** Architect or delegated architecture reviewer.

**Exit gate:** no unresolved architecture ambiguity remains in the feature scope.

**Governance path:** an architectural change requires an ADR, explicit approval, Architecture Review, updated or successor Freeze, and readiness validation before feature work continues at that boundary.

## 7. Stage 4 — Design Proposal

**Objective:** define or improve the user experience without silently replacing approved design.

**Required when:** the feature is user-facing, materially changes a workflow, layout, navigation, shared pattern, component semantics, or learned behavior.

**Method:** apply Design Intelligence, inspect current screens and audit constraints, and use UI/UX Pro Max only for candidate guidance. A redesign uses the mandatory Proposal A/B/C format in `docs/10-design-intelligence/04-AI-DESIGN-RULES.md`.

**Required output:** approved design direction, UX flow, states, component/pattern map, bilingual/accessibility/responsive behavior, migration impact, and Design Memory ID when a proposal decision is made.

**Owner/approval:** Product Owner and designated design reviewer; Architect approves only architecture-sensitive boundaries.

**Exit gate:** approved direction or documented rejection/deferment. A polished concept alone is not approval.

## 8. Stage 5 — Specification

**Objective:** define what the feature must achieve in testable, technology-independent terms.

**Method:** use `/speckit.specify` for meaningful feature work.

**Required output:** `spec.md` plus its requirements-quality checklist, including goal, business value, actors, user stories, scope/non-scope, requirements, acceptance scenarios, edge cases, entities, assumptions, success criteria, authority trace, owner/context, quality gates, compatibility, migration, rollback, and documentation impact.

**Owner:** Product Owner owns product truth; the feature author maintains the artifact; Architect and specialists review their domains.

**Exit gate:** requirements checklist passes and no material `[NEEDS CLARIFICATION]` marker remains unresolved before planning.

## 9. Stage 6 — Clarification

**Objective:** resolve high-impact ambiguity before technical planning.

**Method:** use `/speckit.clarify` when scope, security/privacy, user experience, data, lifecycle, acceptance, or ownership remains materially ambiguous.

**Required output:** answers encoded into the specification, assumptions reduced, terminology normalized, and clarification coverage recorded.

**Owner/approval:** the authority for each question answers it: Product Owner for business scope, Architect for architecture interpretation, design owner for approved interaction, security/privacy owners for their policies.

**Exit gate:** no unresolved question would materially change plan, acceptance, ownership, or migration.

## 10. Stage 7 — Planning

**Objective:** translate the approved specification into a compliant technical approach.

**Method:** use `/speckit.plan`; complete research before deciding unknowns; run the Constitution Check before research/design and again after design.

**Required output:** `plan.md` and applicable `research.md`, `data-model.md`, `contracts/`, `quickstart.md`, dependency direction, security/operations plan, test strategy, migration and rollback strategy, and repository file map.

**Owner:** technical lead or Architect for the feature; implementation choices remain bounded by frozen architecture.

**Exit gate:** Constitution Check passes, design and contract decisions trace to requirements, and every unresolved architecture need is stopped or routed to Governance.

## 11. Stage 8 — Task Breakdown

**Objective:** create dependency-ordered, independently verifiable implementation work.

**Method:** use `/speckit.tasks`, organize by user story, list exact paths, identify safe parallel work, and put tests before corresponding implementation where the plan requires TDD.

**Required output:** `tasks.md` mapping every task to requirements/stories and covering tests, migration, rollback, documentation, security, observability, accessibility, localization, and final validation.

**Owner:** Engineering lead with developer/reviewer input.

**Exit gate:** `/speckit.analyze` or equivalent read-only artifact review finds no unresolved critical issue; task coverage is complete.

## 12. Stage 9 — Implementation

**Objective:** implement only the approved tasks without creating shadow requirements or architecture.

**Method:** use `/speckit.implement` only after prerequisites and checklists pass. Work phase-by-phase, preserve unrelated changes, and update task status with evidence.

**Rules:**

- follow the Frontend-First Policy for user-facing features;
- keep UI behind stable owner/client boundaries;
- do not add cross-app imports or direct cross-owner state access;
- make bounded implementation decisions only where plan and authority permit;
- stop on a real contradiction or unsafe migration assumption;
- update documentation in the same change set.

**Owner:** assigned Developer or authorized AI implementation agent under human oversight.

**Exit gate:** implemented scope matches tasks and local verification passes.

## 13. Stage 10 — Testing

**Objective:** produce evidence that requirements, invariants, boundaries, compatibility, and quality gates hold.

**Required evidence, as applicable:** unit, component, integration, contract, end-to-end, tenant isolation, authorization, migration, rollback, Arabic/English, RTL/LTR, accessibility, performance, security, audit, observability, and critical journey tests.

**Rules:**

- tests are risk-based, not globally optional;
- an omitted category requires explicit N/A rationale and approval;
- characterize legacy behavior before changing it;
- mocks and Laravel clients must pass the same owner contract where backend integration applies;
- no failing required check is converted into a release note.

**Owner:** Developer supplies evidence; Reviewer independently evaluates it.

**Exit gate:** all acceptance scenarios and required quality gates pass.

## 14. Stage 11 — Review

**Objective:** independently verify correctness, scope, quality, maintainability, and release safety.

**Review layers:** self-review, automated checks, peer code review, product acceptance, design review for UI, architecture review for affected boundaries, and specialist review for security/privacy/accessibility/operations where required.

**Required output:** findings with severity, resolution evidence, accepted exceptions with owner/expiry, and final approval or rejection.

**Exit gate:** no unresolved blocking finding; required owners approve their areas; documentation matches implementation.

## 15. Stage 12 — Feature Release Freeze

**Objective:** establish the exact approved release candidate and prevent uncontrolled change before production.

**Feature freeze includes:** approved commit/PR scope, spec/plan/tasks state, design decision references, migrations, contracts, configuration, tests, release notes, rollback procedure, observability, and approvals.

**After freeze:** only approved release blockers may change; any change reopens affected tests and review gates.

**Important:** this is a release-control state, not an Architecture Freeze. A normal feature must not create or modify a file in `docs/99-architecture-freeze/`. Architecture Freeze changes follow Governance only.

**Owner/approval:** Engineering release owner, Product Owner, and required domain/specialist approvers.

## 16. Stage 13 — Production

**Objective:** release safely, verify real behavior, and preserve rollback.

**Entry criteria:** release candidate frozen; migrations rehearsed; rollback tested; observability and audit ready; security and tenant controls verified; approvals recorded.

**Release behavior:** deploy through the approved repository process, validate smoke/critical journeys, observe defined health and business signals, and stop or roll back on trigger conditions.

**Completion output:** deployment record, version, evidence, incidents/deviations, rollback disposition, and documentation status.

**Owner:** authorized release operator. Product Owner confirms product readiness; engineering owns technical release safety.

## 17. Post-Production Learning

Production is not permission for undocumented iteration. Feedback, defects, accessibility findings, performance regressions, and new opportunities enter the lifecycle at the appropriate stage. Emergency fixes may use an expedited hotfix path, but architecture, tenant isolation, security, tests, review, documentation, and rollback remain mandatory in proportion to risk.

## 18. Lifecycle Status Model

| Status | Meaning |
|---|---|
| Proposed | Idea captured; not validated |
| Validated | Business value and scope approved |
| Architecture-cleared | Boundaries confirmed or governance completed |
| Design-approved | Required design direction approved |
| Spec-approved | Requirements accepted and clarified |
| Planned | Technical plan passes Constitution Checks |
| Task-ready | Tasks complete and artifact analysis passes |
| In implementation | Approved tasks executing |
| Verification | Testing and review in progress |
| Release-frozen | Exact release candidate locked |
| Released | Production verification completed |
| Deferred | Paused with reason and re-entry condition |
| Rejected | Closed with reason |
| Superseded | Replaced by a referenced decision or feature |

## 19. Minimum Traceability Chain

Every released feature must trace:

```text
Business problem
  -> controlling authority
  -> approved design decision (when applicable)
  -> requirement and acceptance scenario
  -> plan decision and contract
  -> task IDs
  -> implementation change
  -> test evidence
  -> review approval
  -> release and rollback record
```

Missing traceability blocks Feature Release Freeze.
