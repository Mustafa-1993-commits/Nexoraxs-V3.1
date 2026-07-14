# NexoraXS Design Roadmap

## 1. Purpose

This roadmap sequences design-system maturity and product-design preparation. It does not authorize product features, architecture, routes, workflows, implementation, or redesign. Each phase begins only when its product scope is approved and must preserve all earlier compatibility commitments.

Phases describe design work, not delivery dates. UI/UX Pro Max supports research in every phase; NexoraXS Design Intelligence remains the decision filter.

## 2. Roadmap Principles

- Stabilize shared foundations before multiplying variants.
- Protect working screens and refactor incrementally.
- Design Core and each OS according to its owner and independent workflow.
- Validate Arabic/RTL and English/LTR from first concept.
- Treat accessibility, state coverage, dark mode, responsive behavior, performance, and migration as design inputs.
- Do not use a roadmap phase to approve a future OS.
- Marketplace remains a Core bounded-context surface even though it has a distinct ecosystem personality.
- A phase cannot resolve architecture deferred decisions.

## 3. Phase 1 — Core Platform

**Architectural status:** frozen shared platform; current implementation focus.

**Design objective:** establish the dependable platform experience and shared design-system foundation.

**Focus:**

- characterize current shell, onboarding, Product Hub, context, access, and settings behavior;
- normalize shared semantic tokens without silently restyling screens;
- define bilingual typography criteria and direction behavior;
- strengthen primitives and state patterns in `packages/ui` through scoped specifications;
- distinguish Workspace, Business, Business Unit, Department, Branch, subscription, entitlement, enablement, and readiness in the UI;
- complete accessibility, responsive, dark, loading, empty, error, permission, and recovery coverage.

**Required artifacts:** current-state inventory, approved design proposals where needed, component contracts, content/terminology map, test evidence, migration plan.

**Exit gate:** Core patterns are documented and validated; working routes and legacy compatibility remain protected; no OS logic moved into Core.

## 4. Phase 2 — Commerce OS

**Architectural status:** frozen independent OS; current implementation focus.

**Design objective:** deliver a fast, trustworthy operational personality on the shared foundation.

**Focus:**

- preserve Commerce-owned setup, navigation, workflows, dashboard, records, and settings;
- validate operational density, keyboard use, scanner readiness where applicable, and high-frequency feedback;
- stabilize Business Unit/Branch context and permission behavior;
- standardize data table, form, report, KPI, transaction, and recovery patterns;
- keep presets as recommendations/configuration inputs rather than hardcoded navigation or parallel workflows;
- ensure AI assistance remains explainable and non-blocking.

**Required artifacts:** Commerce task inventory, operational usability evidence, shared-versus-domain component map, state matrix, accessibility/performance validation.

**Exit gate:** Commerce core work remains independently usable, domain ownership is legible, and no current behavior was unnecessarily rewritten.

## 5. Phase 3 — Healthcare OS

**Architectural status:** future OS concept; phase activation requires an approved Healthcare milestone and specification.

**Design objective:** derive a safety-, privacy-, and continuity-oriented product personality from validated healthcare users and workflows.

**Preparation only:**

- research user environments, safety consequences, privacy expectations, role differences, and terminology;
- test the shared foundation against clinical/administrative legibility and interruption risks;
- propose only patterns supported by approved future ownership.

**Exit gate:** future architecture and product scope are approved; design proposals pass specialist, accessibility, privacy, and safety review.

## 6. Phase 4 — HR OS

**Architectural status:** future OS concept; phase activation requires an approved HR milestone and specification.

**Design objective:** create a respectful, private, and accountable people-operations experience.

**Preparation only:**

- research employee self-service, administrator work, sensitive decisions, approvals, and privacy;
- distinguish Core User/Workspace Member/OS access from future HR employee ownership;
- prohibit dehumanizing leaderboard and dark-pattern engagement models.

**Exit gate:** future ownership and workflows are approved; personal-data, accessibility, and approval patterns pass review.

## 7. Phase 5 — Construction OS

**Architectural status:** future OS reference only; no separately frozen Construction milestone.

**Design objective:** if future governance approves the OS, research a field-readable, evidence-oriented product personality.

**Preparation only:**

- validate whether Construction is an OS and define scope through the milestone process;
- research field conditions, devices, connectivity, role handoffs, evidence, and risk;
- do not design project/site/work-package workflows until architecture approves their owners.

**Exit gate:** a future Discovery, architecture baseline, and product specification exist. Until then, this phase is not implementation-ready.

## 8. Phase 6 — CRM OS

**Architectural status:** future OS concept; phase activation requires an approved CRM milestone and specification.

**Design objective:** support relationship work, follow-up clarity, and accountable pipeline decisions without dependence on Commerce.

**Preparation only:**

- research roles, relationship context, follow-up pressure, pipeline semantics, and forecast uncertainty;
- preserve CRM ownership of leads/campaigns/follow-ups and Commerce ownership of purchase history;
- evaluate accessible list, pipeline, timeline, and action-queue patterns.

**Exit gate:** future scope is approved and cross-OS projections/contracts preserve independent operation.

## 9. Phase 7 — Marketplace

**Architectural status:** frozen Core Platform bounded context, not an OS.

**Design objective:** make governed asset discovery and lifecycle management clear, trustworthy, and comparable.

**Focus:**

- publisher, asset family, version, trust/certification, compatibility, dependency, commercial state, entitlement, and lifecycle clarity;
- search and recommendation participation with provenance;
- deliberate installation, activation, update, and removal consequences;
- preservation of publication-path and external asset ownership rules.

**Exit gate:** Marketplace interactions use Core-owned patterns, do not imitate an ordinary retail store, and preserve all frozen ownership boundaries.

## 10. Phase 8 — Future Operating Systems

**Architectural status:** conditional.

**Design objective:** repeat a governed design-intelligence process without fragmenting the platform.

Each future OS must:

1. complete its architecture milestone and product specification;
2. research actual users, environment, frequency, risk, and terminology;
3. inherit the shared DNA and component quality contracts;
4. define a personality through evidence, not industry stereotypes;
5. map owned versus external workflows;
6. prove standalone core operation;
7. propose only necessary new patterns;
8. pass bilingual, accessibility, performance, privacy, security, state, and migration gates.

## 11. Cross-Phase Workstreams

| Workstream | Continuous requirement |
|---|---|
| Design governance | Proposal status, approval, versioning, deprecation, documentation sync |
| Accessibility | WCAG target, keyboard, screen reader, focus, zoom, contrast, reduced motion |
| Localization | Arabic/RTL and English/LTR content, direction, mixed data, formatting |
| Design system | Semantic tokens, shared primitives, owner-specific composition, compatibility |
| Research | Business task evidence, usability, support and operational feedback |
| AI design | Explainability, provenance, human control, safe degradation |
| Quality | State coverage, responsive/dark validation, performance, tests |
| Migration | Legacy characterization, compatibility, rollback, measured adoption |

## 12. Phase Entry Checklist

A phase may begin design work only when:

- architectural status and owner are explicit;
- approved product scope and non-scope exist;
- current behavior and dependencies are inventoried;
- users, tasks, risks, and success measures are known or scheduled for research;
- required design, accessibility, localization, security, privacy, and domain reviewers are named;
- no unresolved authority conflict blocks the affected boundary.

## 13. Phase Exit Checklist

A phase is design-ready for implementation only when:

- approved proposals and synchronized specifications exist;
- components and patterns have explicit owners;
- all required states and quality dimensions are defined;
- Arabic/RTL and English/LTR are validated;
- accessibility and performance risks have evidence and mitigation;
- compatibility, migration, analytics, validation, and rollback are documented;
- the Design Quality Checklist passes;
- no design artifact claims architectural authority it does not possess.
