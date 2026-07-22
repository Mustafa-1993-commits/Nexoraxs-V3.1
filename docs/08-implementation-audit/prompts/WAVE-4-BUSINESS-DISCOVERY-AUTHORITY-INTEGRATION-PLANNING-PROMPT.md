# Wave 4 — Business Discovery Authority Integration Planning Prompt

## Purpose

Create a bounded Wave 4 Authority Integration Planning package for the Business Discovery proposal.

This prompt authorizes documentation planning only.

It does not authorize architecture acceptance, authority edits, implementation, code, APIs, schemas, runtime behavior, workflows, state machines, detailed UX specifications, or engineering tasks.

---

## Mandatory Human Gate

Before starting Wave 4, verify that the following repository-traceable Human Architecture Review decision exists and is committed:

`docs/00-governance/proposals/business-discovery-preview/HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-3.md`

The decision must explicitly include all of the following:

- Reviewed Wave 3 commit SHA: `70b68d64d5e99a5b2821bff6dee75e431abde61b`
- Decision authority: Nexoraxs Architecture Governance — Human Architecture Review
- Disposition: `APPROVED FOR A BOUNDED NEXT DOCUMENTATION STEP`
- Authorized next step: bounded Wave 4 Authority Integration Planning package only
- Explicit confirmation that architecture acceptance, authority changes, conflict resolution, Open Question resolution, implementation, and later waves remain unauthorized

If the decision record is missing, untracked, uncommitted, repository-inaccessible, contradictory, or does not authorize the exact Wave 4 scope below, stop immediately and report a Gate Failure.

Do not infer approval from HEAD, branch state, previous conversation text, or local untracked files.

---

## Branch Requirement

Work only on:

`docs/business-discovery-authority-prompt`

If the active branch differs, stop and report a Gate Failure.

---

## Required Source Package

Review the complete committed Wave 1, Wave 2, and Wave 3 proposal package, including at minimum:

### Wave 1

- ADR-042 and its Business Discovery proposal artifacts
- proposal crosswalk
- Open Questions register
- Human Wave 1 review decision

### Wave 2

- `03-CUSTOMER-JOURNEY-V2-PROPOSAL.md`
- `04-JOURNEY-DECISION-MATRIX.md`
- `05-EDGE-CASE-AND-RECOVERY-MATRIX.md`
- `06-WAVE-2-TRACEABILITY-AND-REVIEW-REGISTER.md`
- `HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-2.md`

### Wave 3

- `07-GOVERNANCE-INTEGRATION-STRATEGY.md`
- `08-AUTHORITY-CHANGE-CLASSIFICATION-MATRIX.md`
- `09-SUCCESSOR-AND-MIGRATION-CANDIDATE-REGISTER.md`
- `10-WAVE-3-DEPENDENCY-AND-REVIEW-GATE-REGISTER.md`
- `HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-3.md`

Also inspect current authoritative Governance, Genesis, Freeze, readiness, Accepted ADR, and Core architecture paths strictly as read-only evidence.

---

## Authorized Output

Create exactly these four new files under:

`docs/00-governance/proposals/business-discovery-preview/`

1. `11-AUTHORITY-INTEGRATION-BATCH-PLAN.md`
2. `12-AUTHORITY-EVIDENCE-AND-PREREQUISITE-MATRIX.md`
3. `13-CONFLICT-AND-OPEN-QUESTION-GATE-MAP.md`
4. `14-WAVE-4-TRACEABILITY-AND-HUMAN-REVIEW-REGISTER.md`

Mark every file:

`Status: Proposed for Authority Review`

Do not modify existing files.

---

## Exact Bounded Scope

Wave 4 may document only the planned authority integration sequence for future Human Architecture Review.

The package may:

- group Wave 3 authority-change candidates into bounded review batches;
- identify the exact current authoritative documents that each future batch may affect;
- classify each batch as clarification, amendment, successor, ADR action, Freeze action, readiness alignment, or historical labeling candidate;
- define prerequisites and required evidence before any future authority edit;
- define dependency ordering among candidate batches;
- define Human Architecture Review checkpoints for every batch;
- define acceptance, refinement, deferment, rejection, rollback, and no-change outcomes;
- map each future batch to source proposal artifacts, AC references, SM references, conflict IDs, Open Question IDs, and controlling authority;
- identify which conflicts and Open Questions must remain unresolved until a specific future review gate;
- preserve provenance of all current authoritative documents;
- distinguish planning identifiers from canonical governance identifiers;
- document that no batch may proceed solely because it appears in Wave 4.

---

## Required File Content

### 11-AUTHORITY-INTEGRATION-BATCH-PLAN.md

Include:

- purpose and non-authoritative status;
- planning principles;
- bounded batch model;
- proposed batch register with stable planning IDs such as `AIB-01`, `AIB-02`, and so on;
- exact affected current authority paths for each batch;
- candidate change class;
- prerequisites;
- dependency ordering;
- required Human Architecture Review gate;
- allowed outcomes;
- rollback/no-change path;
- explicit statement that no final replacement text is created.

### 12-AUTHORITY-EVIDENCE-AND-PREREQUISITE-MATRIX.md

Include a matrix mapping every proposed batch to:

- current controlling authority;
- source proposal evidence;
- Wave 3 AC and SM review references;
- required conflict evidence;
- required Open Question evidence;
- required stakeholder or governance evidence;
- prerequisite decisions;
- prohibited assumptions;
- minimum review package;
- blocking conditions.

### 13-CONFLICT-AND-OPEN-QUESTION-GATE-MAP.md

Include:

- all conflict IDs `BDP-C01` through `BDP-C15` with unchanged current statuses;
- all 50 Open Question IDs individually indexed;
- future batch dependencies for each ID;
- the earliest gate at which each item may be considered;
- explicit confirmation that Wave 4 does not resolve any item;
- explicit preservation of the Freeze-first versus Genesis-ultimate conflict;
- explicit preservation of the account-first versus pre-registration Discovery conflict.

### 14-WAVE-4-TRACEABILITY-AND-HUMAN-REVIEW-REGISTER.md

Include:

- Wave 4 scope and exclusions;
- source package traceability;
- proposed batch traceability;
- protected authority verification register;
- file-level change register;
- unresolved conflict and Open Question verification;
- implementation-leakage review;
- required Human Architecture Review checklist;
- exact next-gate decision fields;
- explicit statement that no Wave 5 or authority-editing work is authorized.

---

## Planning Identifier Rules

Any new Wave 4 identifiers are review and planning references only.

They are not:

- canonical enums;
- runtime states;
- database values;
- API values;
- accepted Governance identifiers;
- implementation requirements.

Use a clear disclaimer wherever planning IDs are introduced.

---

## Protected Governance State

Preserve all of the following exactly:

- ADR-042 remains Proposed.
- `BDP-C01` through `BDP-C15` retain their current recorded statuses.
- All 50 Open Questions remain open.
- Genesis remains unchanged.
- Freeze remains unchanged.
- readiness documents remain unchanged.
- Accepted ADRs remain unchanged.
- current Core authority remains unchanged.
- Wave 1, Wave 2, Wave 3, and all Human Decision records remain unchanged.

---

## Explicit Prohibitions

Do not:

- modify Genesis;
- modify Freeze;
- modify readiness documents;
- modify Accepted ADRs;
- approve ADR-042;
- supersede, deprecate, or historical-label any authority document;
- resolve any conflict;
- resolve any Open Question;
- create final replacement wording for authority documents;
- create implementation specifications;
- create APIs;
- create schemas;
- create database models;
- create runtime behavior;
- create workflows;
- create state machines;
- create detailed UX specifications;
- create engineering tasks;
- create code;
- authorize implementation;
- begin authority-editing work;
- create Wave 5 artifacts;
- commit, push, merge, or open a pull request.

---

## Validation Requirements

Before reporting completion, verify:

1. Active branch is exactly `docs/business-discovery-authority-prompt`.
2. The committed Wave 3 Human Decision record exists and authorizes this exact scope.
3. Exactly four authorized new files exist.
4. Zero existing files were modified.
5. All four files are marked `Proposed for Authority Review`.
6. All local Markdown links resolve.
7. Markdown tables have consistent column counts.
8. `git diff --check` reports no issues.
9. All 15 conflict IDs are present with unchanged statuses.
10. All 50 Open Question IDs are individually present and remain open.
11. ADR-042 remains Proposed.
12. No protected authority path changed.
13. No prohibited implementation-shaped content exists.
14. No Wave 5 artifact exists.
15. No commit, push, merge, or pull request occurred.

Because newly created files may remain untracked, do not rely only on `git diff --stat`. Report both tracked changes and additive untracked-file statistics.

---

## Required Completion Report

Return a concise report with these headings:

1. `Human Gate Evidence`
2. `Wave 4 Files Created`
3. `Authority Integration Planning Summary`
4. `Preserved Conflicts and Open Questions`
5. `Governance Confirmation`
6. `Validation Results`
7. `Remaining Next Gate`

The Remaining Next Gate must state:

`Human Architecture Review of the complete bounded Wave 4 Authority Integration Planning package.`

Also state explicitly:

`No Wave 5 or authority-editing documentation/implementation step is authorized by Wave 4 creation.`
