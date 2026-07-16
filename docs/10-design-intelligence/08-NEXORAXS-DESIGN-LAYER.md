# NexoraXS Design Intelligence Layer

## 1. Purpose

The NexoraXS Design Intelligence Layer connects a general design-intelligence engine to NexoraXS product authority and business context.

```text
UI/UX Pro Max Skill
    generates design research and candidate patterns
                    ↓
NexoraXS Design Intelligence Layer
    filters candidates through business purpose, architecture,
    ownership, product personality, current UI, and quality gates
                    ↓
Design Proposal or Approved Feature Specification
                    ↓
Implementation only after approval
```

UI/UX Pro Max is the **Design Engine**. NexoraXS Design Intelligence is the **Business Design Brain**. Neither replaces the Constitution, frozen architecture, or product approval.

## 2. Authority and Conflict Resolution

Use this exact order:

1. Constitution
2. Architecture Freeze
3. `AGENTS.md`
4. NexoraXS Design Intelligence Layer
5. UI/UX Pro Max Skill

Rules:

- Higher authority always wins.
- A conflict between higher authorities is reported with exact sources and isolated to the affected boundary.
- The layer must not reinterpret architecture to make a design candidate fit.
- The Skill is advisory. A Skill result may be adapted or rejected without changing its installation.
- Existing approved screens remain controlling until a redesign proposal is approved.

## 3. Responsibilities of UI/UX Pro Max

The Skill should supply:

- broad design-system candidates for a product type and task;
- relevant UX principles and anti-patterns;
- style references and visual-direction options;
- chart-selection candidates based on analytical intent;
- accessibility, responsive, motion, and performance considerations;
- stack-specific implementation guidance when implementation is authorized;
- alternative patterns that help avoid premature fixation;
- pre-delivery design quality reminders.

These outputs are inputs to reasoning. They are not NexoraXS tokens, architecture, requirements, approvals, or evidence that the current UI should be replaced.

## 4. Responsibilities of NexoraXS Design Intelligence

The layer must supply:

- NexoraXS identity, feelings, business-first and human-first principles;
- architectural status and canonical ownership;
- Core versus OS versus Marketplace surface boundaries;
- active Workspace, Business, Business Unit, Department, Branch, OS, role, and permission context;
- current interface, audit, compatibility, and migration evidence;
- the shared visual DNA and product personalities;
- Arabic/RTL and English/LTR parity;
- approved design patterns and component ownership;
- explainable AI and human-approval boundaries;
- proposal, quality, documentation, and change-control gates;
- success measures tied to real business work.

## 5. What the Layer Must Not Do

The Design Intelligence Layer must not:

- create or amend platform architecture;
- approve a future OS, feature, route, domain, or workflow;
- turn preferred colors, charts, or layouts into frozen product requirements;
- silently replace current designs;
- duplicate the Skill's searchable database or generic pattern library;
- persist Skill-generated output as controlling NexoraXS authority without approval;
- move business rules into UI components;
- resolve audit migrations, legacy models, ADRs, or deferred decisions;
- authorize implementation without a synchronized specification.

## 6. Standard Design Workflow

### Step 1 — Establish authority

Read the Constitution, applicable freeze, `AGENTS.md`, relevant approved baseline, design layer, audit, and existing specification.

### Step 2 — Inspect current reality

Inspect the current app, routes, shell, components, tokens, copy, state, tests, and compatibility dependencies. Treat code as current behavior, not architectural authority.

### Step 3 — Frame the business problem

Record user, role, task, context, owner, consequence, success signal, non-goals, and risks.

### Step 4 — Use the Design Engine

Run the UI/UX Pro Max design-system search for the product/task first. Add targeted UX, style, chart, accessibility, or stack searches only where relevant.

### Step 5 — Filter candidates

Reject or adapt any result that conflicts with:

- owner or product boundary;
- current approved design and compatibility;
- shared Design DNA;
- OS/personality status;
- bilingual direction;
- accessibility and performance;
- independent OS operation;
- deterministic/AI boundaries.

### Step 6 — Classify the delta

Classify it as correction, bounded improvement, pattern evolution, redesign, or architecture-affecting concept using the UI Innovation Policy.

### Step 7 — Produce the right artifact

- Correction/bounded improvement: document design rationale and checklist within the approved specification.
- Pattern evolution/redesign: produce the mandatory three-option design proposal.
- Architecture-affecting concept: stop and enter architecture governance.

### Step 8 — Validate

Complete the Design Quality Checklist with evidence for all applicable gates.

### Step 9 — Approve and synchronize

Record approvals, update the applicable specification and design documentation, then implement only the approved scope.

## 7. Design Engine Query Brief

Before using the Skill, compose a query that includes:

- product surface and architectural status;
- user role and business task;
- enterprise/operational context and density;
- Arabic/English, RTL/LTR, dark/light, responsive, and accessibility requirements;
- desired feeling and risk profile;
- current patterns to preserve;
- specific question: system, UX, style, chart, or stack.

Do not query only for a visual adjective such as “modern dashboard.” That produces style without business context.

## 8. Candidate Evaluation Matrix

Score candidates qualitatively; a failure in an authority gate rejects the candidate regardless of visual quality.

| Gate | Question | Result |
|---|---|---|
| Authority | Does it comply with Constitution, freeze, and `AGENTS.md`? | Pass/Fail |
| Ownership | Does it preserve the correct canonical and UI owner? | Pass/Fail |
| Business value | Does it improve the documented task or decision? | Strong/Weak/Unknown |
| Compatibility | Does it preserve current behavior or provide an approved migration? | Pass/Proposal needed |
| Consistency | Does it reuse Design DNA and approved patterns? | Pass/Proposal needed |
| Accessibility | Is equivalent use possible without pointer, color, motion, or one script direction? | Pass/Fail |
| Bilingual | Does it work natively in Arabic/RTL and English/LTR? | Pass/Fail |
| Maintainability | Can it be tokenized, tested, documented, and owned? | Pass/Fail |
| Evidence | Is the recommendation based on evidence rather than aesthetic preference? | Strong/Weak/Unknown |

## 9. Handling Conflicting Skill Guidance

Searchable design guidance can return competing patterns. Resolve them by restating the user outcome and constraints.

Example: guidance may disagree on whether a submitting button stays enabled. NexoraXS does not adopt either literal rule universally. The product requirement is to prevent duplicate submission, keep pending state perceivable, preserve keyboard/focus behavior, and provide recovery. The component behavior is then chosen for the actual operation and assistive technology.

The same approach applies to palettes, fonts, density, animation, tables, and chart recommendations.

## 10. Proposal Generation

The layer uses the proposal structure in `04-AI-DESIGN-RULES.md`. A proposal must:

- trace the problem to evidence;
- preserve architectural and component ownership;
- provide three genuinely different options and the impact of no change;
- identify reused and affected patterns/components;
- show Arabic/RTL and English/LTR implications;
- include accessibility, dark, responsive, performance, motion, privacy, and security risks;
- define migration, compatibility, validation, and rollback;
- name required approvers and remain unapproved until recorded.

## 11. Pattern Evolution

Reusable patterns evolve through:

| State | Required evidence |
|---|---|
| Candidate | Repeated problem or credible hypothesis |
| Proposed | Business rationale, alternatives, owner, semantics, quality coverage, migration |
| Approved | Recorded product/design and required specialist approvals |
| Adopted | Documented contract, tests, tokens, consumers, synchronized specification |
| Deprecated | Approved replacement, migration, compatibility window, warnings |
| Removed | Consumer inventory clear and removal criteria met |

A pattern may remain app-local indefinitely when its semantics are domain-specific. “Shared” is not a maturity goal by itself.

## 12. Relationship to Current Repository

The present frontend provides compatibility evidence:

- distinct Landing, Core Platform, and Commerce applications;
- owner-specific routes and navigation;
- a compact topbar/sidebar shell;
- light/dark semantic theme work and logical-direction CSS;
- app-local components and mocks with incomplete shared boundaries;
- partial Arabic/RTL and accessibility readiness;
- legacy-compatible Business/`BusinessUnit` behavior that requires a separate governed migration.

The layer protects working behavior from unnecessary rewriting. It guides future specifications toward stable client boundaries, shared presentation primitives, complete state design, bilingual equality, and safe compatibility without implementing those changes itself.

## 13. Design Intelligence Output Contract

Every design-intelligence response should state:

1. authority and source evidence used;
2. business problem, user, and active context;
3. current behavior to preserve;
4. Skill-derived candidates considered;
5. NexoraXS filters applied;
6. recommended pattern or proposal options;
7. ownership and architecture validation;
8. component and token impact;
9. accessibility, bilingual, responsive, dark, motion, and performance behavior;
10. states, risks, migration, validation, and approvals;
11. Design Quality Checklist status.

## 14. Layer Evolution

This layer may evolve only through documented evidence and change control. Changes must:

- preserve higher authorities;
- state whether they clarify, add, deprecate, or replace design guidance;
- include affected patterns, components, apps, and specifications;
- maintain backward-compatible guidance where practical;
- synchronize dependent design documents and checklists;
- never imply an architecture change without the required ADR and approval.
