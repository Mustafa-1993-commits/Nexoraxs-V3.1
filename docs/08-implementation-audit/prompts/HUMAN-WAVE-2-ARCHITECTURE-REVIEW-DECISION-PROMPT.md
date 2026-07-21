# Human Wave 2 Architecture Review Decision Prompt

> Use this prompt with Codex inside the `Nexoraxs-V3.1` repository on branch:
>
> `docs/business-discovery-authority-prompt`
>
> This task records a bounded human Architecture Review decision for the committed Wave 2 Business Discovery proposal package. It does not itself approve implementation, change authority, or authorize Wave 3 unless the human decision explicitly states a bounded next scope.

---

## Role

Act as a senior Architecture Governance recorder and documentation-control reviewer.

Your job is to convert the human review decision provided in the current session into one repository-traceable governance record without expanding, interpreting, or silently strengthening that decision.

Do not perform a new architecture review unless explicitly requested. Do not infer approval from previous readiness statements.

---

# Reviewed Package

The Human Wave 2 Architecture Review applies to the Wave 2 package committed at:

`368c043e75422d10b3e6abc38548937b080d52ff`

Commit message:

`docs(governance): add Wave 2 business discovery proposal package`

The reviewed files are exactly:

```text
docs/00-governance/proposals/business-discovery-preview/03-CUSTOMER-JOURNEY-V2-PROPOSAL.md
docs/00-governance/proposals/business-discovery-preview/04-JOURNEY-DECISION-MATRIX.md
docs/00-governance/proposals/business-discovery-preview/05-EDGE-CASE-AND-RECOVERY-MATRIX.md
docs/00-governance/proposals/business-discovery-preview/06-WAVE-2-TRACEABILITY-AND-REVIEW-REGISTER.md
```

The prerequisite Wave 1 human gate record is:

```text
docs/00-governance/proposals/business-discovery-preview/HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-1.md
```

ADR-042 remains:

`Proposed`

---

# Required Human Decision Input

Before writing, require an explicit human decision in the current session using one of these dispositions:

1. `APPROVED FOR A BOUNDED NEXT DOCUMENTATION STEP`
2. `APPROVED WITH REQUIRED REFINEMENTS`
3. `REVIEW DEFERRED`
4. `REJECTED`

The human decision must identify:

- the reviewed commit SHA;
- the disposition;
- the accepted review scope;
- any required refinements;
- unresolved conflicts and Open Questions that remain open;
- whether any next documentation wave is authorized;
- the exact bounded scope of that next step, if authorized;
- all exclusions.

If the human decision does not explicitly authorize Wave 3 or another next step, do not authorize one.

If the reviewed SHA differs from `368c043e75422d10b3e6abc38548937b080d52ff`, stop and report the mismatch without modifying files.

---

# Authorization Boundary

This prompt authorizes creation of one governance decision record only:

```text
docs/00-governance/proposals/business-discovery-preview/HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-2.md
```

Do not modify any other file.

Do not create Wave 3 artifacts.

Do not modify:

- Wave 1 artifacts;
- Wave 2 proposal artifacts;
- ADR-042;
- any Accepted ADR;
- `docs/01-genesis/`;
- `docs/99-architecture-freeze/`;
- application code;
- APIs, routes, schemas, migrations, Events, storage, tests, packages, CI, configuration, or runtime behavior.

Do not resolve any Conflict ID or Open Question unless the human decision explicitly resolves it and the decision is within the authority of this review record.

Do not invent:

- implementation scope;
- services or bounded contexts;
- roles or Permissions;
- identity, claim, import, privacy, retention, scoring, readiness, or recovery mechanisms;
- authority-amendment order;
- Wave 3 scope.

Do not commit, push, merge, or open a pull request unless separately instructed.

---

# Required Decision Record Structure

Create the record with these sections.

## 1. Metadata

Include:

- Title: `Human Architecture Review Decision — Business Discovery Wave 2`
- Date
- Status: `Recorded Human Decision`
- Review owner or decision authority exactly as provided by the human
- Reviewed branch
- Reviewed commit SHA
- Reviewed Wave 2 file list
- Related ADR-042 status: `Proposed`
- Wave 1 gate record reference

Do not use `Accepted Architecture`, `Final`, `Frozen`, or `Implementation Ready` unless the human decision explicitly and validly authorizes that status. A Wave 2 review decision normally does not.

## 2. Human Review Disposition

Record the human disposition verbatim.

Distinguish clearly between:

- approval of the Wave 2 package for governance progression;
- acceptance of architecture;
- approval of authority changes;
- authorization of a next documentation step;
- authorization of implementation.

Do not treat these as equivalent.

## 3. Reviewed Scope

List exactly the four reviewed Wave 2 files and commit SHA.

State that the decision applies to that committed package only.

## 4. Accepted Review Findings

Record only the findings explicitly accepted by the human decision.

Examples may include, only if stated by the human:

- optional branch is suitable for further authority planning;
- Claim and Import separation is suitable for continued review;
- Discovery Evidence remains distinct from Candidate Facts and Business DNA;
- current Genesis and Freeze authority remains unchanged;
- JY/JD/EC and Logical Owner labels remain review constructs only.

Do not promote proposal wording into accepted authority.

## 5. Required Refinements

If disposition is `APPROVED WITH REQUIRED REFINEMENTS`, list each required change and its completion gate.

If none, state:

`No additional Wave 2 refinement was required by this decision.`

## 6. Preserved Open Decisions

Explicitly state that all unresolved items remain open unless the human decision says otherwise.

Preserve:

- BDP-C01 through BDP-C15 statuses;
- OQ-GOV, OQ-PRD, OQ-ONT, OQ-ID, OQ-AUT, OQ-SES, OQ-IMP, OQ-PRV, OQ-SNP, OQ-REC, and OQ-ECO registers;
- ADR-042 as Proposed;
- Genesis and Freeze as unchanged controlling authority where applicable.

If any item is explicitly resolved, quote the exact human disposition and explain the bounded effect without extrapolation.

## 7. Next-Step Authorization

Use one of these outcomes only:

### A. No next step authorized

State:

`No Wave 3 or later documentation/implementation step is authorized by this decision.`

### B. Bounded next documentation step authorized

Record:

- exact name of the authorized step;
- exact deliverables or decision questions;
- exact files or file classes permitted, if known;
- explicit exclusions;
- required status of outputs;
- required next human gate.

If Wave 3 is authorized, it must remain documentation/governance only unless the human explicitly authorizes otherwise.

A safe default bounded Wave 3 scope, only when explicitly chosen by the human, is:

`Authority Integration Planning only`

This may identify proposed amendment/supersession sequencing and decision dependencies, but it must not directly modify Genesis, Freeze, Accepted ADRs, code, schemas, APIs, or runtime behavior.

Do not select this default automatically.

## 8. Explicit Non-Authorization

Unless explicitly authorized by the human, state that the decision does not authorize:

- architecture acceptance beyond the recorded disposition;
- ADR-042 acceptance;
- Genesis or Freeze edits;
- Accepted ADR edits;
- implementation planning;
- implementation;
- physical data models;
- APIs, routes, Events, services, state machines, persistence, or deployment;
- Permissions, roles, privacy policies, retention periods, scoring formulas, or readiness changes;
- automatic promotion of Wave 2 diagrams, matrices, identifiers, owner labels, or wording.

## 9. Traceability

Reference:

- reviewed commit `368c043e75422d10b3e6abc38548937b080d52ff`;
- all four Wave 2 files;
- Wave 1 gate record;
- ADR-042;
- Wave 2 traceability register;
- the human decision source from the current session.

## 10. Validation and Remaining Gate

Record:

- files created: exactly one;
- files modified: zero other files;
- no Genesis/Freeze/ADR/code changes;
- no Wave 3 files created;
- remaining gate based on the recorded disposition.

---

# Required Validation

Before finishing, run and report:

```bash
git status --short
git diff --check
git diff --stat
```

Also validate:

- exactly one new file exists;
- the reviewed commit SHA is exact;
- all four Wave 2 file references exist;
- the Wave 1 gate reference exists;
- ADR-042 is still Proposed;
- no Genesis, Freeze, Accepted ADR, code, config, test, or runtime file changed;
- no Wave 3 artifact exists from this run;
- the decision record does not imply implementation authorization;
- the next-step scope matches the human decision exactly.

---

# Stop Conditions

Stop without modifying the repository if:

- no explicit human disposition is provided;
- the reviewed SHA is not exact;
- the requested decision attempts to silently amend Genesis, Freeze, or an Accepted ADR;
- the decision claims architecture acceptance without clear human authorization;
- the next step is ambiguous;
- the requested scope exceeds creation of the one decision record.

Return a concise gate-failure report explaining the minimum missing decision evidence.

---

# Final Response Format

Return:

## 1. Human Decision Recorded

- disposition;
- reviewed commit;
- decision authority;
- next-step authorization result.

## 2. File Created

List the one decision-record path.

## 3. Preserved Governance State

Confirm ADR-042, conflicts, Open Questions, Genesis, Freeze, and implementation exclusions.

## 4. Validation Results

Report all checks.

## 5. Remaining Next Gate

State the exact next gate from the human decision.

Do not commit or push unless separately instructed.
