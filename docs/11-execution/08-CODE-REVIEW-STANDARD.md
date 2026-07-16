# Code Review Standard

## 1. Purpose

Every NexoraXS pull request receives evidence-based review for correctness, architecture, product quality, compatibility, and maintainability. Review is not a style-only pass and approval is not inferred from passing automation.

## 2. Review Entry Criteria

The author provides:

- linked approved specification, plan, tasks, and design/Design Memory IDs;
- controlling Freeze/ADR and owner/context summary;
- concise change and non-change scope;
- test commands/results;
- screenshots or interaction evidence for user-facing states in Arabic/RTL and English/LTR as applicable;
- migration, rollback, compatibility, and release notes;
- known risks and accepted exceptions;
- documentation changes.

Draft or incomplete PRs may receive early feedback but cannot be approved for merge.

## 3. Review Method

1. Read requirements and authorities before the diff.
2. Confirm changed files match task scope.
3. Trace each material change to a requirement/task.
4. Review highest-risk boundaries first: ownership, tenant scope, authorization, writes, migration, money, privacy, and contracts.
5. Verify UI/design and operational states.
6. Inspect tests for meaningful failure detection.
7. Run or inspect required checks.
8. Classify findings and require resolution evidence.
9. Re-review changed areas; do not approve based only on author summary.

## 4. Architecture

- [ ] Controlling Freeze and Accepted ADRs are cited.
- [ ] Canonical facts, writes, aggregates, and lifecycles retain one owner.
- [ ] Core and OS boundaries remain intact.
- [ ] No app imports another app or accesses another domain's internal state/database.
- [ ] Cross-OS integrations remain optional, versioned, contract-based, and failure-isolated.
- [ ] Organization context and server-side owner validation are correct where applicable.
- [ ] Subscription, entitlement, setup, configuration, activation, readiness, and access are not conflated.
- [ ] Business/`BusinessUnit` and `OSEnablement` Deferred Decisions are not silently resolved.
- [ ] Business Brain, Recommendation, AI, Marketplace, and target-owner boundaries are preserved.

## 5. Constitution

- [ ] Applicable Constitution Checks pass with evidence.
- [ ] Capability/knowledge/decision/AI ordering remains correct.
- [ ] Security, privacy, audit, observability, accessibility, localization, compatibility, tests, and docs are addressed.
- [ ] No requirement or task was weakened during implementation.
- [ ] No unresolved conflict is hidden as an implementation assumption.

## 6. Design

- [ ] Implementation matches the approved design and user flow.
- [ ] No approved screen, navigation, or shared pattern was silently redesigned.
- [ ] Required Design Memory IDs and proposal approvals are linked.
- [ ] Loading, empty, partial, stale, error, unauthorized, unavailable, success, and recovery states exist.
- [ ] Terminology, hierarchy, density, state semantics, and product personality follow Design Intelligence.
- [ ] UI/UX Pro Max guidance was filtered through NexoraXS authority rather than copied as a requirement.

## 7. Performance

- [ ] No unnecessary client boundary, rerender, dependency, request waterfall, or large eager asset was introduced.
- [ ] Lists/tables/charts support expected scale.
- [ ] Loading preserves layout and core workflow is not blocked by optional content/AI.
- [ ] Changed performance budgets or measurements are provided where material.
- [ ] Optimization does not remove accessibility, correctness, feedback, or observability.

## 8. Accessibility

- [ ] Semantic structure, names, labels, relationships, and announcements are correct.
- [ ] All functionality is keyboard operable with visible, unobscured focus.
- [ ] Contrast, non-color cues, target size, zoom, reflow, and reduced motion pass.
- [ ] Dialog, form error, dynamic status, table, chart, and complex interaction behavior is accessible.
- [ ] Automated checks are supplemented by manual critical-flow evidence.

## 9. RTL and Localization

- [ ] User-facing strings have Arabic and English paths.
- [ ] Arabic RTL and English LTR flows are validated.
- [ ] Logical layout properties and directional icons are correct.
- [ ] Mixed-direction identifiers, dates, currency, numbers, email, phone, and user data render correctly.
- [ ] Locale formatting is context-driven, not hardcoded.
- [ ] User-entered data remains as entered.

## 10. Dark Mode and Responsive Behavior

- [ ] Semantic tokens work in light/dark modes for content, controls, focus, charts, disabled, and error states.
- [ ] Responsive layouts preserve important data and action priority.
- [ ] No hidden content, page-level horizontal overflow, or inaccessible mobile-only control exists.
- [ ] Supported viewport/input evidence is attached.

## 11. Component Reuse

- [ ] Existing approved primitives/patterns were considered first.
- [ ] `packages/ui` remains presentation-only.
- [ ] Domain components remain with their owner.
- [ ] New variants preserve semantics and accessibility.
- [ ] Similar app-local components were not prematurely consolidated.
- [ ] Deprecation includes consumer inventory, migration, and removal criteria.

## 12. Folder Structure and Boundaries

- [ ] Files live with the correct app/package owner.
- [ ] `packages/sdk`, `auth`, `types`, `shared`, and `ui` contain only their allowed responsibilities.
- [ ] No ownerless business logic was introduced in a shared package.
- [ ] Imports follow dependency direction and do not rely on archived docs/prototypes.
- [ ] New structure matches the approved plan; deviations are explained and synchronized.

## 13. Naming

- [ ] Canonical architecture terms are used correctly.
- [ ] UI labels do not redefine storage/canonical models.
- [ ] Deprecated `shops-app`, `restaurants-app`, and other obsolete names are not reintroduced.
- [ ] Components, hooks, clients, actions, tests, and contracts communicate responsibility.
- [ ] No vague “manager,” “helper,” “common,” or “utils” container hides business ownership.

## 14. Testing

- [ ] Tests map to requirements and acceptance scenarios.
- [ ] Characterization protects legacy/current behavior before refactoring.
- [ ] Unit, component, contract, integration, E2E, migration, and non-functional layers are included or have approved N/A reasons.
- [ ] Negative tenant, authorization, invalid-context, and failure scenarios are tested.
- [ ] Tests fail when the protected behavior is broken and avoid only implementation-detail assertions.
- [ ] Required lint, type, test, build, and diff checks pass.

## 15. Mock Layer

- [ ] UI uses app-owned facades/clients rather than direct mock/storage imports.
- [ ] Mock ownership, fixture version, reset, and limitations are documented.
- [ ] New work does not extend cross-owner provider/shared-domain behavior.
- [ ] Mock data does not become canonical schema or production authorization evidence.
- [ ] Mock/real contract parity and Laravel replacement path are preserved.
- [ ] Current storage keys, IDs, BusinessUnit compatibility, and `OSEnablement` rows are unchanged unless separately approved.

## 16. Security, Operations, and Rollback

- [ ] Authentication and final authorization are distinct and owner-enforced.
- [ ] Sensitive data, secrets, tenant data, logs, and errors are handled safely.
- [ ] Consequential actions emit required audit evidence.
- [ ] Logs, metrics, traces, health, correlation, failure, retry, timeout, and recovery are implemented/tested where applicable.
- [ ] Migration is idempotent/rehearsed and rollback is executable.
- [ ] Release and rollback triggers have accountable owners.

## 17. Documentation

- [ ] Spec, plan, tasks, contracts, Design Memory, code docs, migration/runbook, and release notes are synchronized as applicable.
- [ ] Historical decisions remain traceable and supersession is explicit.
- [ ] No code silently creates a new owner, lifecycle, term, permission, or contract.

## 18. Finding Severity

| Severity | Meaning | Merge effect |
|---|---|---|
| Blocking | Architecture/Constitution/security/tenant/data-loss/critical accessibility conflict or missing authority | Must resolve; merge blocked |
| Major | Incorrect behavior, ownership seam, contract, migration, rollback, or required test gap | Must resolve unless accountable exception is approved |
| Minor | Bounded maintainability, usability, test, or documentation issue | Resolve or explicitly track before merge according to policy |
| Editorial | Wording/formatting with no behavior impact | May follow up if explicitly recorded |

## 19. Review Decision

The Reviewer records:

```text
Scope reviewed:
Checks executed/inspected:
Blocking findings:
Major findings:
Minor/editorial findings:
Accepted exceptions and expiry:
Architecture disposition:
Design disposition:
Product acceptance:
Merge recommendation: APPROVE / REQUEST CHANGES
Reviewer and date:
```

Approval is invalid if mandatory evidence is missing or the Reviewer lacks the required specialist authority.
