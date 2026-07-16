# Spec Kit Workflow

## 1. Purpose

Spec Kit turns approved NexoraXS product intent into traceable specifications, plans, tasks, and implementation. It is a delivery tool, not a source of architecture, product approval, or design authority.

The installed workflow supports `specify -> plan -> tasks -> implement` with review gates. NexoraXS adds mandatory clarification, Constitution Checks, design governance, artifact analysis, human approval, testing, migration, rollback, documentation, and release controls.

## 2. Prerequisite Authority

Before any Spec Kit command:

1. identify the controlling Freeze and Accepted ADRs;
2. confirm product/OS and canonical owner;
3. identify organization, actor, resource, and permission scope;
4. verify the feature is business-validated and current scope;
5. inspect relevant audit, current code, and Design Intelligence;
6. report any contradiction or Deferred Decision blocker.

Spec Kit artifacts may interpret approved requirements for delivery. They may not resolve architecture by assumption.

## 3. Command Sequence

```text
Exceptional governance setup/amendment: /speckit.constitution

Normal feature:
  /speckit.specify
    -> requirements quality review
    -> /speckit.clarify when material ambiguity exists
    -> spec approval
    -> /speckit.plan
    -> pre/post-design Constitution Checks and plan approval
    -> /speckit.tasks
    -> /speckit.analyze (read-only consistency review)
    -> optional focused /speckit.checklist
    -> implementation authorization
    -> /speckit.implement
    -> testing and independent review
    -> feature release freeze and production process
```

There is no installed `/speckit.review` command in the current repository. “Review” is a set of human and AI-assisted gates around the artifacts and changes. Do not invent a command or treat `/speckit.analyze` as approval.

## 4. `/speckit.constitution`

**Use when:**

- creating the Constitution initially;
- making an explicitly authorized amendment to enforceable engineering governance;
- synchronizing dependent templates after an approved principle change.

**Required behavior:** read the existing Constitution and authority, apply semantic versioning, update the Sync Impact Report, synchronize affected templates/runtime guidance, and preserve ratification history.

**Do not use when:**

- specifying a feature;
- changing architecture without completed Governance;
- solving a one-feature disagreement;
- adding implementation preferences or roadmap items;
- resolving a Deferred Decision;
- bypassing an inconvenient Constitution Check.

Constitution v2.0.0 is current. A feature normally consumes it and must not amend it.

## 5. `/speckit.specify`

**Use when:**

- a meaningful feature, defect correction, refactor, migration, integration, or compatibility change has passed business and architecture intake;
- acceptance behavior must be made testable;
- more than a trivial, non-behavioral correction is planned.

**Produces:** one feature directory, `spec.md`, and the requirements-quality checklist under `checklists/requirements.md`. The specification stays technology-independent and defines user value, scenarios, requirements, scope, success, entities, assumptions, and Constitution-relevant constraints.

**NexoraXS additions:** controlling Freeze/ADRs, owner/canonical write, organization context, OS independence, lifecycle separation, contracts, security, privacy, audit, observability, bilingual/accessibility, compatibility, migration, rollback, and documentation.

**Do not use when:**

- the idea has not passed business validation;
- architecture ownership is contradictory or blocked;
- the request is only an exploratory architecture/design idea without feature authorization;
- creating multiple unrelated features in one invocation;
- implementation is already underway and the spec would merely rationalize unapproved code.

## 6. `/speckit.clarify`

**Use when:** the current `spec.md` contains material ambiguity in scope, user behavior, data, security/privacy, ownership interpretation, edge cases, acceptance, migration, or quality gates.

**Behavior:** ask up to five high-value questions, one at a time according to the installed skill, then encode accepted answers into the specification and report coverage.

**Do not use when:**

- the answer exists in a higher authority and only needs citation;
- the question is an unresolved architecture decision—route it to Governance;
- the choice is a technical planning decision that does not change requirements;
- questions are cosmetic or low-impact enough for a documented safe assumption;
- the user has already answered and the artifact merely needs synchronization.

Clarification does not approve the spec. Product and applicable specialist owners still review it.

## 7. `/speckit.plan`

**Use when:** `spec.md` is approved, required clarifications are resolved, and architecture/design prerequisites exist.

**Produces:** `plan.md` and applicable research, data model, logical/implementation contracts, quickstart, repository structure, test strategy, and technical decisions.

**Required behavior:**

- pass the Constitution Check before research and after design;
- resolve technical unknowns through research without inventing architecture;
- identify exact repository boundaries and dependency direction;
- define mock/client strategy for frontend-first features;
- define tests, security/operations, migration, rollback, compatibility, and docs;
- use implementation technology only where approved for the scope.

**Do not use when:**

- the specification is unapproved or materially ambiguous;
- the design proposal is required but unapproved;
- a Deferred Decision blocks the plan;
- planning would select a canonical owner or architecture;
- the work is still business discovery.

## 8. `/speckit.tasks`

**Use when:** the plan and design artifacts are approved and complete.

**Produces:** `tasks.md` organized by setup/foundation and independently testable user stories, using exact task IDs, paths, dependencies, and safe parallel markers.

**Required behavior:**

- map tasks to requirements and user stories;
- place characterization and required tests before risky changes;
- include boundary, security, localization, accessibility, observability, migration, rollback, documentation, and final validation work;
- make file ownership and dependencies explicit;
- preserve independently deliverable story increments.

**Do not use when:**

- plan/design is still changing;
- tasks would answer open requirements or architecture;
- paths and owners are unknown;
- the task list is being used as a substitute for acceptance criteria.

## 9. `/speckit.analyze` and Review

**Use `/speckit.analyze` when:** `spec.md`, `plan.md`, and a complete `tasks.md` exist. It performs a read-only consistency, ambiguity, duplication, Constitution-alignment, and coverage analysis.

**Do not use it:** before tasks, as a file-editing command, or as an approval authority.

**Review gates surrounding Spec Kit:**

- requirements-quality and Product Owner review after specify/clarify;
- Constitution and architecture review during plan;
- task coverage review after tasks/analyze;
- code, test, design, security, accessibility, localization, migration, and documentation review after implementation;
- product acceptance and release approval before production.

Critical analysis findings must be resolved before implementation.

## 10. `/speckit.checklist`

**Use when:** a feature needs a focused requirements-quality checklist for a risk area such as security, accessibility, localization, data migration, contracts, or operational readiness.

Checklists test the quality and completeness of requirements, not whether code happens to work. They supplement—not replace—the Design Quality Checklist, Constitution Check, tests, and review.

**Do not use when:** the desired output is an implementation test suite, a generic copied checklist, or a way to declare an unreviewed requirement complete.

## 11. `/speckit.implement`

**Use when:**

- spec, plan, tasks, required checklists, and analysis are complete;
- required approvals are recorded;
- the working tree and task scope are understood;
- migration/rollback and test prerequisites are ready.

**Behavior:** read all artifacts, verify checklist state, execute dependency-ordered tasks, follow test-first instructions, mark completed tasks, run checkpoints, and stop on unsafe failures.

**Do not use when:**

- the user requested read-only work;
- the feature or design is unapproved;
- checklists contain unresolved blockers;
- architecture or migration authority is missing;
- implementation would modify out-of-scope code;
- the command would be used to discover requirements while coding.

Implementation completion is not merge or release approval.

## 12. When a Feature Needs Migration

A migration is required when a change alters or transitions any persisted or externally consumed state, including:

- canonical entities, relationships, IDs, ownership, or scope;
- storage keys, fixtures, mock schemas, or seeded compatibility data;
- API/client contracts, event/version consumers, routes, or navigation handoffs;
- permissions, subscriptions, installation/setup/readiness semantics;
- components/patterns with broad learned behavior;
- deprecated names or packages with active consumers;
- backend provider or database representation.

Migration work gets its own specification when it has independent risk, multiple consumers, data movement, compatibility windows, or rollback complexity. Business/`BusinessUnit` and legacy `OSEnablement` changes always require a separately approved migration/compatibility feature.

## 13. When a Feature Needs an ADR

An ADR is required when the proposed change:

- changes or adds architectural ownership, domain boundary, canonical fact/write model, aggregate, or lifecycle;
- resolves a registered Deferred Decision;
- creates a new cross-domain contract pattern or required OS dependency;
- changes the authority chain or a frozen architectural guarantee;
- makes a technology/runtime/deployment choice that the frozen program requires Governance to decide;
- introduces an intentional architecture exception or incompatible platform evolution.

An ADR is not required for a bounded implementation choice already permitted by the freeze and approved plan. When uncertain, the Architect records a disposition before planning continues.

## 14. Branches and Commit Hooks

The installed Git extension can create a feature branch before specification and expose optional before/after commit hooks. Current Git auto-commit settings are disabled. Agents and tools must not commit unless the user explicitly authorizes a commit operation.

Spec directories and Git branch names are related by workflow, not identity. Do not derive architectural meaning from branch numbering.

## 15. Artifact Status and Supersession

- `spec.md` controls approved behavior for its feature.
- `plan.md` controls the approved technical approach within the spec.
- `tasks.md` controls execution order and evidence.
- Research informs; it does not override approved requirements.
- Contracts define boundary expectations and versions.
- Design Memory preserves approved/rejected/deferred UI decisions.
- Historical artifacts remain in version control and are explicitly superseded, never silently rewritten to conceal a decision.

## 16. Workflow Exit Gate

Spec Kit is complete for a feature only when artifacts are approved, implementation matches them, required checks pass, documentation is synchronized, review findings close, migration and rollback are ready, and the feature enters the release process. Running the commands is not itself completion.
