# Human Wave 3 Architecture Review Decision Prompt

## Purpose

Record a repository-traceable Human Architecture Review decision for the bounded Wave 3 Governance Integration Strategy package.

This prompt does not authorize Wave 4, authority changes, or implementation by default.

---

## Required Review Target

Review the exact committed Wave 3 package commit.

Required inputs before execution:

- exact Wave 3 commit SHA;
- exact decision authority;
- one explicit disposition;
- accepted review scope;
- required refinements, if any;
- remaining conflicts and Open Questions;
- whether a bounded next documentation step is authorized;
- exact bounded next-step scope, if authorized;
- explicit exclusions.

Do not infer any missing human decision.

---

## Allowed Dispositions

Select exactly one:

- `APPROVED FOR A BOUNDED NEXT DOCUMENTATION STEP`
- `APPROVED WITH REQUIRED REFINEMENTS`
- `REVIEW DEFERRED`
- `REJECTED`

---

## Mandatory Gate Checks

Before writing anything, verify all of the following:

1. Current branch is:
   `docs/business-discovery-authority-prompt`
2. The supplied Wave 3 commit exists and is repository-traceable.
3. The following Wave 3 files exist in that commit:
   - `docs/00-governance/proposals/business-discovery-preview/07-GOVERNANCE-INTEGRATION-STRATEGY.md`
   - `docs/00-governance/proposals/business-discovery-preview/08-AUTHORITY-CHANGE-CLASSIFICATION-MATRIX.md`
   - `docs/00-governance/proposals/business-discovery-preview/09-SUCCESSOR-AND-MIGRATION-CANDIDATE-REGISTER.md`
   - `docs/00-governance/proposals/business-discovery-preview/10-WAVE-3-DEPENDENCY-AND-REVIEW-GATE-REGISTER.md`
4. The Wave 2 Human Architecture Review Decision exists and remains unchanged.
5. ADR-042 remains `Proposed`.
6. Genesis, Freeze, Accepted ADRs, readiness documents, and existing Core authority remain unchanged by Wave 3.
7. All recorded Conflict IDs and Open Question IDs remain unresolved unless the human decision explicitly records otherwise through a separate authorized governance path.

If any gate fails, stop immediately and report the failure. Do not modify files.

---

## Output Constraint

Create exactly one file:

`docs/00-governance/proposals/business-discovery-preview/HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-3.md`

Do not modify any existing file.

Do not create Wave 4 artifacts.

Do not commit, push, merge, or create a pull request.

---

## Required Decision Record Structure

The created file must include all sections below.

### 1. Decision Metadata

Include:

- Title: `Human Architecture Review Decision — Wave 3`
- Status: `Recorded Human Decision`
- Reviewed Wave 3 commit SHA
- Review date
- Decision authority
- Disposition

### 2. Reviewed Package

List all four Wave 3 files explicitly.

State that the review covers only the bounded Governance Integration Strategy package.

### 3. Accepted Review Scope

Record exactly what the human reviewer accepts.

The accepted scope may include only documentation-level governance strategy such as:

- authority impact inventory;
- classification of possible future authority-change paths;
- successor and migration candidates;
- conditional governance sequencing;
- dependency ordering;
- review checkpoints;
- provenance preservation;
- rejection and rollback outcomes.

Do not convert these into authoritative decisions unless the human disposition explicitly and separately authorizes a bounded authority action.

### 4. Required Refinements

If none, write:

`None.`

If refinements are required, list them as bounded documentation refinements only.

### 5. Preserved Governance State

Explicitly confirm:

- ADR-042 remains Proposed.
- All BDP conflict records retain their existing statuses.
- All Open Questions remain open unless separately resolved by an authorized governance decision.
- Genesis remains unchanged.
- Freeze remains unchanged.
- Accepted ADRs remain unchanged.
- Existing Core authority remains controlling.
- No implementation is authorized.
- No API, schema, runtime, database, state machine, workflow, UX specification, engineering plan, or code is authorized.

### 6. Remaining Conflicts and Open Questions

Record that all unresolved Conflict IDs and Open Question IDs remain open.

Explicitly retain at minimum:

- Freeze-first versus Genesis-ultimate authority tension;
- account-first versus pre-registration Discovery tension.

Do not resolve either conflict in this decision unless a separate explicit human authority change is provided.

### 7. Next-Step Authorization

Record one of the following exactly:

#### If no next step is authorized

`No Wave 4 or later documentation/implementation step is authorized by this decision.`

#### If a bounded next documentation step is authorized

State:

- authorization: `YES`;
- exact bounded next-step title;
- exact allowed scope;
- exact exclusions;
- required human gate after that step.

The next step must remain documentation-only unless the human decision explicitly authorizes a separate authority-change action.

### 8. Explicit Exclusions

At minimum include:

- no Genesis edit;
- no Freeze edit;
- no Accepted ADR edit;
- no ADR-042 acceptance;
- no architecture conflict resolution;
- no Open Question resolution;
- no implementation;
- no API or schema;
- no runtime behavior;
- no database model;
- no workflow or state machine;
- no detailed UX specification;
- no engineering tasks;
- no code;
- no automatic Wave 4 start;
- no commit, push, merge, or pull request.

### 9. Human Authority Statement

Include a clear statement that:

- this record captures an explicit human decision;
- proposal documents do not become authoritative merely because they were reviewed;
- any future authority change requires its own explicit human review and repository-traceable decision.

### 10. Validation Evidence

Report:

- current branch;
- reviewed Wave 3 commit SHA;
- files checked;
- changed files count;
- confirmation that exactly one new decision file was created;
- Markdown link validation;
- Markdown table validation;
- `git diff --check` result;
- confirmation that no prohibited authority or implementation file changed;
- confirmation that no Wave 4 artifact was created.

---

## Prohibited Behavior

Do not:

- infer or invent the human disposition;
- infer or invent Wave 4 scope;
- modify Wave 1, Wave 2, or Wave 3 artifacts;
- alter prior Human Architecture Review decisions;
- change Genesis, Freeze, Constitution, Milestone Lifecycle, readiness, or Accepted ADR documents;
- accept ADR-042;
- resolve conflicts or Open Questions;
- create implementation-shaped artifacts;
- create detailed UX specifications;
- create APIs, schemas, runtime behavior, database models, workflows, state machines, engineering tasks, or code;
- create Wave 4 files;
- commit, push, merge, or open a pull request.

---

## Required Completion Report

Return a concise report with these headings:

1. `Human Decision Recorded`
2. `File Created`
3. `Preserved Governance State`
4. `Validation Results`
5. `Remaining Next Gate`

If the human decision is incomplete, return:

`Gate Failure — Human Decision Missing`

and list the missing decision fields. Make no repository changes.
