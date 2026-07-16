# AI and Human Responsibility Matrix

## 1. Purpose

This document assigns responsibilities, inputs, outputs, decision authority, and approval authority across AI tools and human roles. It prevents AI assistance from becoming unaccountable product, design, architecture, or release authority.

Role names describe responsibilities, not particular individuals. One person may hold multiple human roles, but high-risk changes should preserve independent review. Claude and Codex are tools/agents operating under human authority; neither has standing approval authority.

## 2. Universal Rules

- Architecture Freeze, Governance, Constitution, and approved specifications constrain every role.
- AI may analyze, draft, propose, implement, and verify only within authorized scope.
- AI output is not approval.
- Product, architecture, design, security, privacy, accessibility, and release approvals remain with accountable humans.
- The canonical owner validates and executes its writes; no role may bypass it.
- A role that authors a high-risk change must not be the only reviewer of that change.
- Conflicts are reported with sources; roles do not guess a compromise.

## 3. Claude

**Responsibilities**

- Collaboratively explore business problems and requirements.
- Draft or review specifications, clarification questions, plans, documentation, and design proposals when requested.
- Analyze architecture and cross-document consistency against repository authorities.
- Implement approved tasks only when explicitly authorized and equipped with repository evidence.
- Surface ambiguity, risk, migration needs, and contradictions.

**Inputs**

- User request and role assignment.
- Architecture, Constitution, `AGENTS.md`, feature artifacts, audit, Design Intelligence, code, and test evidence.
- Explicit scope and approvals.

**Outputs**

- Analysis, questions, proposals, specifications, plans, tasks, documentation, code/test changes when authorized, and verification reports.

**Decision authority**

- May make reversible, bounded implementation choices explicitly delegated by an approved plan.
- May recommend but cannot decide product priority, design approval, architecture, governance, exceptions, merge, or release.

**Approval authority**

- None. A Claude-generated approval statement has no governance effect unless an accountable human records the decision.

## 4. Codex

**Responsibilities**

- Inspect the repository and produce evidence-grounded implementation or review work.
- Execute approved Spec Kit tasks, tests, refactors, and documentation changes when authorized.
- Preserve dirty-worktree changes and boundary constraints.
- Diagnose failures and verify scope, diffs, tests, and migration/rollback behavior.
- Use installed skills according to their instructions and report their influence.

**Inputs**

- Approved feature artifacts, repository files, governing sources, task list, user authority, tool/skill instructions, and current working-tree state.

**Outputs**

- Repository analysis, bounded patches, tests, command evidence, artifact updates, review findings, and handoff reports.

**Decision authority**

- May select safe implementation details within approved plan constraints.
- Must stop when a choice changes architecture, owner, scope, design approval, Deferred Decision, migration authority, or external state beyond authorization.

**Approval authority**

- None. Codex may report that checks pass; accountable reviewers approve merge/release.

## 5. UI/UX Pro Max

**Responsibilities**

- Generate candidate design systems, styles, palettes, typography, UX guidance, chart choices, accessibility reminders, and stack guidance.
- Expand the option space for design analysis.

**Inputs**

- A context-rich product/task query prepared through the NexoraXS Design Intelligence Layer.

**Outputs**

- Advisory candidate guidance and anti-patterns.

**Decision authority**

- None. Skill output cannot select a NexoraXS design, token, component, screen, workflow, or architecture.

**Approval authority**

- None. Persisted Skill output does not become NexoraXS authority automatically.

## 6. Developer

**Responsibilities**

- Understand the approved specification, plan, tasks, design, contracts, and migration strategy.
- Implement only assigned scope with owner-correct boundaries.
- Write and run required tests; preserve compatibility and rollback.
- Update tasks and affected documentation with the change.
- Self-review diffs, security, tenant scope, accessibility, localization, performance, and failure handling.
- Report blockers rather than improvising product or architecture.

**Inputs**

- Approved feature artifacts, designs, task assignment, repository context, and review feedback.

**Outputs**

- Code and tests, migration/rollback artifacts, documentation updates, verification evidence, and reviewer notes.

**Decision authority**

- Bounded implementation choices consistent with the approved plan and component/contracts standards.
- No authority to change business scope, design direction, architecture, canonical ownership, or ADR status.

**Approval authority**

- May attest that assigned work is complete; cannot independently approve their own merge or production release.

## 7. Reviewer

**Responsibilities**

- Independently inspect requirements-to-change traceability and diff scope.
- Verify architecture, Constitution, design, tests, security, accessibility, localization, performance, mocks, migration, rollback, and documentation.
- Classify findings and require evidence-based resolution.
- Ensure accepted exceptions name owner, reason, mitigation, and expiry.

**Inputs**

- Feature artifacts, design memory, changes, tests, audit/authority references, risk register, and release evidence.

**Outputs**

- Review findings, approval/rejection recommendation, unresolved-risk statement, and verification record.

**Decision authority**

- Determines whether the change meets the delegated code/quality review gate.
- Cannot reinterpret architecture or approve product scope outside delegated authority.

**Approval authority**

- May approve code review/merge readiness within repository policy.
- Specialist approval is still required for architecture, product, design, security/privacy, accessibility, or release areas the Reviewer does not own.

## 8. Product Owner

**Responsibilities**

- Own problem validation, business value, priority, user outcomes, scope/non-scope, and acceptance.
- Decide whether an idea is validated, deferred, rejected, or ready for specification.
- Approve product-facing design direction with required design/domain input.
- Confirm acceptance criteria and production business readiness.
- Protect against scope creep and unsupported future-product commitments.

**Inputs**

- User/customer evidence, business strategy, audits, roadmap, design proposals, estimates, risks, and acceptance results.

**Outputs**

- Problem statement, priority, scope decision, success measures, design/product approvals, acceptance disposition, and roadmap update.

**Decision authority**

- Business priority, feature scope within approved architecture, product acceptance, and deferral/rejection.

**Approval authority**

- Approves business validation, product requirements, and product acceptance.
- Cannot approve an architecture exception, security waiver, or canonical ownership change alone.

## 9. Architect

**Responsibilities**

- Trace feature boundaries to frozen architecture and Accepted ADRs.
- Validate canonical ownership, context, dependencies, contracts, compatibility, lifecycle separation, security/operations architecture, and OS independence.
- Identify whether an ADR or successor Freeze is required.
- Review technical plans and architecture-sensitive migrations.
- Prevent implementation details from silently becoming architecture.

**Inputs**

- Governing authorities, feature scope, boundary/owner map, design proposal, plan, contracts, deferred decisions, audit evidence, and operational constraints.

**Outputs**

- Architecture disposition, constraints, ADR recommendation, conflict report, plan review, and migration boundary approval/rejection.

**Decision authority**

- Interprets existing architecture within delegated review authority.
- May approve architecture conformance; cannot unilaterally amend frozen architecture.

**Approval authority**

- Approves the feature architecture gate and architecture-sensitive plan portions.
- Architecture change approval additionally requires the formal Governance lifecycle.

## 10. Lifecycle Accountability Matrix

Legend: **A** accountable decision, **R** responsible work, **C** consulted, **V** verifies, **—** no standing role.

| Stage | Claude | Codex | UI/UX Pro Max | Developer | Reviewer | Product Owner | Architect |
|---|---:|---:|---:|---:|---:|---:|---:|
| Feature idea | C | C | — | C | — | A/R | C |
| Business validation | C | C | — | C | C | A/R | C |
| Architecture review | C | R/C | — | C | V | C | A/R |
| Design proposal | R/C | R/C | C | C | V | A | C/V |
| Specification | R | R | — | C | V | A | C/V |
| Clarification | R | R | — | C | V | A by business question | A by architecture question |
| Plan | C/R | R | — | R/C | V | C | A/V |
| Tasks | C/R | R | — | R/C | V | C | C/V |
| Implementation | R when authorized | R when authorized | — | A/R | V | C | C |
| Testing | C/R | R | — | A/R | V | C | C/V |
| Review | C | C | — | C | A/R for code quality | A for product acceptance | A for architecture conformance |
| Feature release freeze | C | R/C | — | R | V | A for product | V/A for architecture-sensitive scope |
| Production | — | R only if authorized | — | R | V | A for business readiness | C/V |

The table does not allow one role to approve areas outside its expertise. “A” is scoped to the named role's authority.

## 11. Approval Matrix

| Decision | Required accountable approval |
|---|---|
| Business problem and priority | Product Owner |
| Feature scope and acceptance | Product Owner |
| Existing-design redesign | Product Owner + design reviewer; Architect if boundaries affected |
| Shared design pattern or token change | Design-system owner + accessibility/localization review |
| Architecture conformance | Architect |
| Frozen architecture change | Formal Governance process, not one role |
| Security/privacy exception | Accountable security/privacy owner plus required governance |
| Code merge | Independent Reviewer under repository policy |
| Data migration execution | Owning domain + engineering/release approval; Architect for architecture-sensitive scope |
| Production release | Authorized release owner + Product Owner + required operational approvals |

## 12. Handoff Contract

Every handoff between roles includes:

- artifact/version and status;
- controlling authority;
- decisions made and by whom;
- open questions and Deferred Decisions;
- risks, assumptions, and accepted exceptions;
- required next approval;
- evidence and reproduction steps;
- exact scope the receiving role may change.

An incomplete handoff is returned; it is not repaired through guessed authority.
