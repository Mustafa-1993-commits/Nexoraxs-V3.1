# Human Wave 4 Architecture Review Decision Prompt

You are operating on repository:

`Mustafa-1993-commits/Nexoraxs-V3.1`

Required branch:

`docs/business-discovery-authority-prompt`

## Objective

Create one repository-traceable Human Architecture Review decision record for the complete bounded Wave 4 Authority Integration Planning package.

This prompt authorizes creation of a decision record only. It does not authorize Wave 5, authority editing, implementation, or any modification to existing governance or proposal artifacts.

## Mandatory Gate Inputs

Do not infer or invent any human decision field.

Before making any repository change, require the human reviewer to provide all of the following explicitly:

1. Reviewed Wave 4 commit SHA.
2. Decision authority.
3. One allowed disposition:
   - `APPROVED FOR A BOUNDED NEXT DOCUMENTATION STEP`
   - `APPROVED WITH REQUIRED REFINEMENTS`
   - `REVIEW DEFERRED`
   - `REJECTED`
4. Accepted review scope.
5. Required refinements, or `None`.
6. Confirmation that all recorded conflicts and Open Questions retain their existing statuses unless the decision explicitly states otherwise.
7. Whether a bounded next documentation step is authorized.
8. Exact bounded next-step scope and required next gate, if authorized.
9. Explicit exclusions.

If any required human field is missing, stop immediately and report a Gate Failure. Do not infer the current HEAD as the reviewed SHA.

## Repository Preconditions

Before creating the record, verify all of the following:

- Current branch is exactly `docs/business-discovery-authority-prompt`.
- Worktree contains no unrelated modifications.
- The supplied reviewed SHA exists.
- The supplied reviewed SHA contains the complete Wave 4 package:
  - `docs/00-governance/proposals/business-discovery-preview/11-AUTHORITY-INTEGRATION-BATCH-PLAN.md`
  - `docs/00-governance/proposals/business-discovery-preview/12-AUTHORITY-EVIDENCE-AND-PREREQUISITE-MATRIX.md`
  - `docs/00-governance/proposals/business-discovery-preview/13-CONFLICT-AND-OPEN-QUESTION-GATE-MAP.md`
  - `docs/00-governance/proposals/business-discovery-preview/14-WAVE-4-TRACEABILITY-AND-HUMAN-REVIEW-REGISTER.md`
- The Human Wave 3 decision record exists and is repository-traceable:
  - `docs/00-governance/proposals/business-discovery-preview/HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-3.md`
- The Wave 4 package did not modify Genesis, Freeze, readiness, Accepted ADRs, existing Core authority, Wave 1–3 artifacts, or prior Human Decision records.

If any precondition fails, stop and report the exact gate failure. Create no file.

## Authorized Output

Create exactly one file:

`docs/00-governance/proposals/business-discovery-preview/HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-4.md`

Do not modify any existing file.

## Required Decision Record Structure

The record must include:

1. Title and status.
2. Decision date.
3. Reviewed Wave 4 commit SHA.
4. Decision authority.
5. Disposition.
6. Accepted review scope.
7. Required refinements.
8. Preserved governance state.
9. Remaining conflicts.
10. Remaining Open Questions.
11. Next documentation step authorization.
12. Exact bounded next-step scope, if authorized.
13. Required next Human Architecture Review gate.
14. Explicit exclusions.
15. Repository traceability references.
16. Validation summary.

## Mandatory Governance Preservation

Unless the explicit human decision says otherwise within an independently authorized scope, the record must preserve and state:

- ADR-042 remains `Proposed`.
- BDP-C01 through BDP-C15 retain their existing recorded statuses.
- All recorded Open Questions retain their existing statuses.
- No conflict is resolved by this decision.
- No Open Question is resolved by this decision.
- Genesis remains unchanged.
- Freeze remains unchanged.
- Readiness documents remain unchanged.
- Accepted ADRs remain unchanged.
- Existing Core authority remains unchanged.
- AIB, AC, and SM identifiers remain planning/review references only.
- No authority change is approved unless a future decision explicitly authorizes one.
- No implementation is authorized.

## If No Next Step Is Authorized

The decision record must include exactly this governance outcome:

`No Wave 5 or later documentation, authority-editing, or implementation step is authorized by this decision.`

## If a Next Step Is Authorized

The exact scope must come from the human reviewer. Do not broaden it.

The record must clearly distinguish between:

- planning documentation;
- authority-editing documentation;
- actual authority modification;
- implementation.

Authorization of one category does not imply authorization of another.

## Explicit Prohibitions

Do not:

- infer the reviewed SHA;
- invent the decision authority;
- choose a disposition for the human reviewer;
- invent refinements;
- invent a Wave 5 scope;
- begin Wave 5;
- create any Wave 5 artifact;
- modify Wave 1, Wave 2, Wave 3, or Wave 4 files;
- modify prior Human Decision records;
- modify Genesis;
- modify Freeze;
- modify readiness documents;
- modify Accepted ADRs;
- approve ADR-042;
- resolve any conflict;
- resolve any Open Question;
- create final replacement authority wording;
- create APIs, schemas, database models, runtime behavior, workflows, state machines, detailed UX specifications, engineering tasks, or code;
- commit, push, merge, or create a pull request.

## Validation

After creating the record, verify:

- exactly one new untracked file exists;
- zero existing files were modified;
- all local Markdown links in the new record resolve;
- Markdown tables are structurally consistent;
- `git diff --check` is clean;
- the reviewed SHA and all referenced Wave 4 files are repository-traceable;
- no Wave 5 artifact exists;
- no protected authority file changed.

## Required Final Report

Return a concise report with:

1. Human Decision Recorded
2. File Created
3. Preserved Governance State
4. Validation Results
5. Remaining Next Gate

Do not commit or push the decision record.