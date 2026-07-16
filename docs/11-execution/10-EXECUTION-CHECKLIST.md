# NexoraXS Feature Execution Checklist

## 1. Purpose

Every meaningful feature must pass this checklist before Feature Release Freeze and production. Complete it progressively through the Development Lifecycle. Record **PASS**, **FAIL**, or **N/A with reason**, evidence, reviewer, and date for every item.

A failure in Architecture, Constitution, canonical ownership, tenant isolation, security, required accessibility, or approval is blocking. This checklist does not replace the Constitution Check, Design Quality Checklist, Spec Kit requirements checklist, tests, or specialist review.

## 2. Feature Identification

```text
Feature ID/name:
Spec directory:
Product/app/OS:
Product Owner:
Architectural owner:
Engineering owner:
Design owner:
Controlling Freeze/ADRs:
Design Memory IDs:
Release candidate/version:
Review date:
```

## 3. Architecture

- [ ] Controlling Freeze, Governance ADRs, Genesis/milestone sources are identified.
- [ ] No contradiction exists; any affected conflict is stopped and cited.
- [ ] Product/OS scope and non-scope are approved.
- [ ] Canonical facts, writes, aggregates, lifecycles, and read projections have correct owners.
- [ ] Workspace/Business/Business Unit/Department/Branch/OS/actor/resource scope is explicit where applicable.
- [ ] No OS core workflow depends on another OS.
- [ ] No direct cross-app, cross-database, or private-state access exists.
- [ ] Cross-boundary integration is optional, authorized, versioned, observable, backward-compatible, and failure-isolated.
- [ ] Business/`BusinessUnit`, `OSEnablement`, and all Deferred Decisions remain preserved unless separately governed.
- [ ] Architecture disposition is `NO CHANGE` or the required ADR/Freeze lifecycle is complete.

Evidence/owner/date:

## 4. Business

- [ ] User/business problem is evidence-based and approved.
- [ ] Goal, business value, capability, target users, scope/non-scope, and priority are recorded.
- [ ] Expected outcome and success measures are observable and non-fabricated.
- [ ] Dependencies, assumptions, risks, and consequence of no change are explicit.
- [ ] Product Owner disposition is recorded.
- [ ] Future/unapproved products or capabilities are not implied as current scope.

Evidence/owner/date:

## 5. Design

- [ ] Current screens, behavior, audit findings, and compatibility dependencies were inspected.
- [ ] Design Intelligence and applicable product personality/patterns were followed.
- [ ] UI/UX Pro Max was used only as candidate guidance and its influence is identified.
- [ ] Material redesign has Proposal A/B/C, migration impact, explicit approval, and DX ID.
- [ ] UX flow, hierarchy, components, content, states, and recovery are approved.
- [ ] Arabic/RTL and English/LTR behavior is complete.
- [ ] Accessibility, light/dark, responsive, performance, and reduced-motion behavior is complete.
- [ ] AI/recommendations expose provenance, explanation, user control, and safe degradation.
- [ ] `DESIGN-QUALITY-CHECKLIST.md` passes.

Evidence/owner/date:

## 6. Specification and Planning

- [ ] `/speckit.specify` artifacts and requirements checklist are complete.
- [ ] Material clarifications are encoded in the spec.
- [ ] Requirements and acceptance criteria are independently testable.
- [ ] `/speckit.plan` artifacts are complete and approved.
- [ ] Constitution Checks pass before and after design.
- [ ] Research, contracts, data model, quickstart, security/operations, testing, migration, rollback, and docs are addressed as applicable.
- [ ] No plan choice resolves architecture or a Deferred Decision by assumption.
- [ ] `/speckit.tasks` maps work to requirements/stories with paths and dependencies.
- [ ] `/speckit.analyze` has no unresolved critical finding.

Evidence/owner/date:

## 7. Implementation

- [ ] Only approved tasks and files changed.
- [ ] Implementation matches the approved spec, plan, design, and owner boundaries.
- [ ] Frontend-first sequencing and UI Freeze are respected for user-facing features.
- [ ] Pages/components consume app-owned clients/facades.
- [ ] Shared packages remain within allowed responsibilities.
- [ ] No new ownerless business logic, cross-owner write, hardcoded service URL, or direct storage access was introduced.
- [ ] Canonical calculations and writes are validated by the owning domain.
- [ ] Security, privacy, audit, observability, failure, retry, timeout, idempotency, and recovery are implemented as planned.
- [ ] Unrelated user changes are preserved and no automatic commit occurred without authorization.

Evidence/owner/date:

## 8. Mock and Backend Boundary

- [ ] Mock owner, scenario version, fixtures, reset, limitations, and compatibility are documented.
- [ ] UI does not import mock database/storage directly.
- [ ] Current storage keys, seeded IDs, BusinessUnit compatibility, and `OSEnablement` records are preserved unless separately approved.
- [ ] Mock behavior does not claim production authorization or canonical schema.
- [ ] Stable owner client/facade contract exists.
- [ ] Concrete API contract follows UI maturity and preserves owner/context/compatibility.
- [ ] Mock and Laravel clients pass the same contract where integration applies.
- [ ] Laravel transition does not require rewriting approved UI components.

Evidence/owner/date:

## 9. Testing

- [ ] Tests map to requirements, acceptance scenarios, tasks, and risks.
- [ ] Characterization protects affected current/legacy-compatible behavior.
- [ ] Unit tests cover rules/calculations/transformations where applicable.
- [ ] Component tests cover interaction, states, direction, and accessibility.
- [ ] Contract tests cover mock/real owner clients and compatibility.
- [ ] Integration tests cover tenancy, authorization, persistence, audit, and failure.
- [ ] End-to-end tests cover critical user journeys.
- [ ] Migration and rollback are rehearsed where applicable.
- [ ] Arabic/English, RTL/LTR, accessibility, responsive, dark, performance, security, and operational evidence passes.
- [ ] Required lint, type, test, build, and diff checks pass.
- [ ] Any N/A test category has explicit rationale and approval.

Evidence/owner/date:

## 10. Documentation

- [ ] Spec, plan, tasks, research, contracts, data model, and quickstart reflect the delivered behavior.
- [ ] Design proposal and Design Memory status are synchronized.
- [ ] Reusable Design Intelligence changed only through its governance policy.
- [ ] Component/client/code documentation is current.
- [ ] Migration, rollback, runbook, release note, and support content are complete as applicable.
- [ ] ADR/Freeze changed only through formal Governance.
- [ ] Historical artifacts remain preserved with explicit supersession.
- [ ] Links, identifiers, terminology, and authority/status are correct.

Evidence/owner/date:

## 11. Review

- [ ] Author self-review is complete.
- [ ] Automated checks and independent code review are complete.
- [ ] Architecture conformance is approved where applicable.
- [ ] Product and design acceptance is recorded.
- [ ] Security, privacy, accessibility, localization, operational, and migration specialists approved affected areas.
- [ ] All blocking/major findings are resolved or have an authorized exception where permitted.
- [ ] Accepted exceptions include owner, reason, mitigation, expiry, and follow-up.
- [ ] Final diff contains no unapproved scope or generated artifacts.

Evidence/owner/date:

## 12. Approval

- [ ] Product Owner approves scope and acceptance.
- [ ] Architect approves architecture conformance.
- [ ] Reviewer approves merge readiness.
- [ ] Design owner approves material UI decisions.
- [ ] Canonical/domain owner approves affected write/migration behavior.
- [ ] Engineering/release owner approves operational readiness.
- [ ] No AI output is treated as an approval.

Evidence/owner/date:

## 13. Feature Release Freeze

- [ ] Exact release candidate and changed-file scope are recorded.
- [ ] Spec/plan/tasks/design/DX/contracts/migration/tests/docs versions are fixed.
- [ ] Required checks pass on the release candidate.
- [ ] Migration, rollback, observability, audit, support, and release notes are ready.
- [ ] Only approved blocker fixes may change the candidate; changes reopen affected gates.
- [ ] Feature freeze is not represented as an Architecture Freeze.

Evidence/owner/date:

## 14. Production

- [ ] Deployment authorization and window are recorded.
- [ ] Pre-deployment backup/recovery or equivalent plan is ready where applicable.
- [ ] Migration and rollback trigger owners are available.
- [ ] Smoke and critical journey verification is defined.
- [ ] Health, error, performance, security, audit, and business signals are observable.
- [ ] Post-release verification, incident/deviation, rollback, and completion records are updated.

Evidence/owner/date:

## 15. Final Decision

| Gate | Status | Accountable approver | Evidence |
|---|---|---|---|
| Architecture |  |  |  |
| Business |  |  |  |
| Design |  |  |  |
| Specification/plan/tasks |  |  |  |
| Implementation |  |  |  |
| Mock/backend boundary |  |  |  |
| Testing |  |  |  |
| Documentation |  |  |  |
| Review |  |  |  |
| Approval |  |  |  |
| Feature Release Freeze |  |  |  |
| Production readiness |  |  |  |

**Overall:** `READY / NOT READY`

**Blocking findings:**

**Accepted non-blocking risks:**

**Final approvers and date:**

A feature may enter production only when every mandatory gate is `PASS`.
