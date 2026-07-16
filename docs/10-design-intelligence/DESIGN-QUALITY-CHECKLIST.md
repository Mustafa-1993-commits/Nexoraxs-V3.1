# NexoraXS Design Quality Checklist

## 1. Purpose

Every NexoraXS UI feature, material improvement, and redesign must pass this checklist before implementation approval and again before release. The checklist is an evidence gate, not a declaration of architecture or product scope.

## 2. How to Use

For each item record **Pass**, **Fail**, or **N/A**, an evidence link/reference, reviewer, and date. `N/A` requires a reason. A single unresolved architecture, Constitution, ownership, tenant-isolation, security, or critical-accessibility failure blocks approval.

```text
Feature/spec:
App/OS/surface:
Architectural owner:
Design owner:
Version:
Review date:
Design proposal reference (if applicable):
```

## 3. Architecture

- [ ] The feature is within an approved product and architectural scope.
- [ ] Core, OS, Marketplace, Business Brain, AI, and external ownership boundaries are preserved.
- [ ] The active Workspace/Business/Business Unit/Department/Branch/OS context is correct and visible where material.
- [ ] No UI element implies duplicate canonical truth or direct access to another OS's internal state.
- [ ] The OS core workflow remains independently usable.
- [ ] Subscription, product entitlement/access, enablement, configuration, permission, and operational state are not conflated.
- [ ] The UI label **Business** does not silently create or rename a canonical model.
- [ ] Marketplace is treated as the frozen Core bounded context, not an independent OS.
- [ ] Future product concepts are clearly marked and do not imply architecture approval.

Evidence:

## 4. Constitution

- [ ] The feature passes the applicable Constitution Checks.
- [ ] Capability-first and knowledge-driven behavior is preserved.
- [ ] Business knowledge and deterministic decisions precede AI advice.
- [ ] Recommendations are explainable and preserve human/owner authority.
- [ ] Tenant and Workspace isolation are explicit in scope and validation.
- [ ] Documentation and implementation are synchronized.
- [ ] Any frozen-architecture change has an approved ADR and governing review.

Evidence:

## 5. Frontend Audit

- [ ] The current routes, shells, workflows, mocks, stores, and compatibility dependencies were inspected.
- [ ] Working architecture-compatible code is protected from unnecessary rewriting.
- [ ] Business/`BusinessUnit` legacy-compatible behavior follows the audit treatment and any approved migration plan.
- [ ] UI does not directly own mock data or business decisions contrary to the approved boundary.
- [ ] Client/SDK abstraction and future backend replacement impact are addressed where relevant.
- [ ] Cross-app imports and shared-package responsibilities remain valid.
- [ ] Deprecated names or routes are not reintroduced.

Evidence:

## 6. Consistency

- [ ] The feature uses the shared Design DNA and the correct product personality.
- [ ] Approved page, navigation, form, table, dialog, feedback, and state patterns are reused.
- [ ] Terminology, action placement, hierarchy, density, iconography, and status semantics are consistent.
- [ ] Any deliberate divergence has an approved design proposal and bounded scope.
- [ ] Current learned behavior is preserved or migration is documented.

Evidence:

## 7. Accessibility

- [ ] Target conformance is WCAG 2.2 AA or the stricter applicable requirement.
- [ ] Semantic structure and native controls are used where possible.
- [ ] All functions are keyboard operable with visible, unobscured focus.
- [ ] Accessible names, descriptions, relationships, status, and errors are programmatic.
- [ ] Contrast and non-color cues pass in all themes and states.
- [ ] Target size, zoom, reflow, text resizing, and high-contrast behavior pass.
- [ ] Screen-reader behavior is validated in applicable Arabic and English flows.
- [ ] Complex visual interaction has an equivalent accessible method.
- [ ] Automated checks are supplemented by manual validation.

Evidence:

## 8. RTL

- [ ] Arabic copy is complete, reviewed, and not placeholder translation.
- [ ] Layout uses logical properties and correct RTL reading/navigation order.
- [ ] Directional icons mirror only when meaning requires it.
- [ ] Mixed Arabic/Latin identifiers, numbers, dates, currency, email, phone, SKU/barcode, and charts render correctly.
- [ ] Truncation, wrapping, tables, forms, dialogs, tooltips, and notifications pass RTL review.
- [ ] User-entered content remains as entered.

Evidence:

## 9. LTR

- [ ] English copy is complete and reviewed.
- [ ] Layout, reading order, data alignment, truncation, and wrapping pass LTR review.
- [ ] Tables, forms, dialogs, charts, notifications, and directional controls behave correctly.
- [ ] LTR is not used as a hidden source of layout assumptions that break RTL.

Evidence:

## 10. Dark Mode

- [ ] Semantic tokens—not hard-coded inversions—define dark mode.
- [ ] Text, controls, focus, borders, elevation, disabled states, charts, logos, and media pass contrast review.
- [ ] Hierarchy remains equivalent to light mode.
- [ ] Theme initialization avoids an incorrect-theme flash where applicable.
- [ ] Printed/exported formal content follows its own approved rendering requirement.

Evidence:

## 11. Responsive Design

- [ ] The feature is designed for supported viewport and input conditions.
- [ ] Mobile behavior prioritizes tasks rather than merely shrinking desktop layout.
- [ ] Tables and dense data preserve consequential information through an approved adaptation.
- [ ] Navigation, context, actions, forms, dialogs, charts, and states remain usable.
- [ ] Content works at zoom and with long bilingual labels without horizontal page failure.
- [ ] Pointer, keyboard, touch, and scanner/operational inputs are supported as applicable.

Evidence:

## 12. Performance

- [ ] The design defines an appropriate loading strategy and avoids layout shift.
- [ ] Core content and workflow are not blocked by optional assets, charts, or AI.
- [ ] Expensive secondary content has a justified loading boundary.
- [ ] Tables/lists/charts are designed for expected data scale.
- [ ] Duplicate submission and race-prone actions are prevented without inaccessible state.
- [ ] Bundle, rendering, interaction, and network budgets are identified where material.
- [ ] Performance choices do not remove accessibility, feedback, or recovery.

Evidence:

## 13. Motion

- [ ] Motion has a functional purpose: orientation, causality, or feedback.
- [ ] Timing and intensity do not delay operational work.
- [ ] Reduced-motion preference is honored with an equivalent cue.
- [ ] No meaning depends only on animation.
- [ ] Loading motion does not imply false progress.
- [ ] Continuous decorative motion, parallax, and custom cursors are absent unless exceptionally approved.

Evidence:

## 14. Design System

- [ ] Semantic tokens are used for color, type, spacing, radius, elevation, z-index, and motion.
- [ ] Shared primitives retain their accessibility contract.
- [ ] Product personality uses approved accents without redefining global states.
- [ ] UI/UX Pro Max results were treated as candidates and filtered through NexoraXS authority.
- [ ] Any token, type, palette, density, or global-pattern change has a reviewed proposal and consumer impact assessment.
- [ ] Design documentation, component documentation, and tests are updated together.

Evidence:

## 15. Component Reuse

- [ ] Existing approved components and patterns were inventoried before creating a new component.
- [ ] Shared components remain presentation-only and domain-neutral.
- [ ] Domain components remain in the owning app/OS.
- [ ] No app imports another app's component or internal state.
- [ ] New variants are bounded by stable semantics and do not create boolean-prop sprawl.
- [ ] Extraction or deprecation includes consumers, compatibility, migration, tests, and rollback.
- [ ] Reuse does not move business rules into `packages/ui`, `packages/shared`, or the client layer.

Evidence:

## 16. Business UX

- [ ] The user, role, task, business problem, context, and success outcome are explicit.
- [ ] Primary action and business consequence are understandable.
- [ ] Scope, units, currency, timezone, locale, tax, period, source, and freshness are visible where material.
- [ ] Loading, empty, partial, stale, error, unauthorized, unavailable, success, and recovery states are designed.
- [ ] Destructive and consequential actions receive proportional confirmation.
- [ ] User input is preserved through recoverable failure.
- [ ] Dashboards and KPIs answer a business question rather than filling space.
- [ ] Privacy, security, authorization, audit, and operational constraints are reflected without exposing sensitive data.
- [ ] Success measures evaluate user/business outcomes, not only aesthetic preference.

Evidence:

## 17. AI Proposal Review

- [ ] AI output is distinguished as canonical fact, deterministic decision, recommendation, generated draft, or action proposal.
- [ ] Recommendations explain reason, evidence/input, expected impact, limits, and user choice as applicable.
- [ ] AI does not silently write canonical data, alter configuration, grant access, or execute consequential action.
- [ ] AI unavailability does not block the core workflow.
- [ ] The design identifies Skill-derived candidate guidance and NexoraXS filters.
- [ ] If an approved design changes, the proposal includes Problem, Reason, Business impact, Proposals A/B/C, Pros, Cons, Recommendation, Risk, Migration impact, and Approval required.
- [ ] Required product, design, domain, architecture, security, privacy, accessibility, and localization approvals are recorded.

Evidence:

## 18. Final Approval Record

| Gate | Status | Reviewer | Evidence/notes |
|---|---|---|---|
| Architecture |  |  |  |
| Constitution |  |  |  |
| Audit |  |  |  |
| Consistency |  |  |  |
| Accessibility |  |  |  |
| RTL |  |  |  |
| LTR |  |  |  |
| Dark mode |  |  |  |
| Responsive |  |  |  |
| Performance |  |  |  |
| Motion |  |  |  |
| Design system |  |  |  |
| Component reuse |  |  |  |
| Business UX |  |  |  |
| AI proposal review |  |  |  |

**Overall result:** `PASS / FAIL`

**Unresolved blockers:**

**Approved exceptions, owner, mitigation, and expiry:**

**Final approver and date:**

No feature is design-approved while a mandatory gate is incomplete or failed.
