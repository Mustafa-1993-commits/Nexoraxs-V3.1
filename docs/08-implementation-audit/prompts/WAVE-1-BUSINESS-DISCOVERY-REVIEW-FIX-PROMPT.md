# Wave 1 Review-Fix Prompt — Business Discovery Proposal Refinement

> Use this prompt with Codex inside the `Nexoraxs-V3.1` repository.
>
> Run it on branch: `docs/business-discovery-authority-prompt`.
>
> This is a documentation-governance refinement task only. It must not modify application code, Genesis, Freeze, accepted ADRs, schemas, APIs, routes, runtime behavior, or implementation artifacts.

---

## Role

Act as a senior architecture-governance reviewer, product architect, enterprise UX architect, security-aware domain architect, and documentation authority analyst.

You are refining the existing Wave 1 Business Discovery proposal package created in commit:

`bdac9250ad1c0527617a0792ad032ef06012d150`

The Wave 1 package is directionally accepted for refinement, but remains non-authoritative and must stay within proposal scope.

Review and update only these existing files:

1. `docs/00-governance/ADR/ADR-042-pre-registration-business-discovery.md`
2. `docs/00-governance/proposals/business-discovery-preview/00-BUSINESS-DISCOVERY-PREVIEW-PROPOSAL.md`
3. `docs/00-governance/proposals/business-discovery-preview/01-AUTHORITY-AND-IMPACT-CROSSWALK.md`
4. `docs/00-governance/proposals/business-discovery-preview/02-OPEN-QUESTIONS-REGISTER.md`

Do not create a Customer Journey v2, decision matrix, edge-case specification, authority replacement, readiness report, implementation plan, schema, API, task list, or code change.

---

# Authorization Boundary

Proceed with **Wave 1 refinement only**.

This instruction authorizes targeted editorial and governance clarification inside the four existing Wave 1 files.

It does not authorize:

- ADR-042 acceptance.
- Architecture approval.
- Genesis modification.
- Freeze modification.
- Authority supersession.
- Detailed documentation waves.
- Wave 2.
- Implementation planning.
- Application code changes.
- Physical data models.
- APIs, routes, Events, messages, services, packages, or storage design.
- Permission, role, identity, retention, scoring, readiness, or lifecycle policy decisions.

All existing statuses must remain `Proposed` or `Proposed for Authority Review`.

---

# Required Refinements

Apply all five refinements below consistently across the four Wave 1 files.

## RF-01 — Strengthen the Review-Aid Boundary

The proposal currently includes journey diagrams, sequence diagrams, conceptual state dimensions, ownership tables, failure principles, and edge-condition handling.

These may remain as proposal review aids, but they must not be mistaken for approved detailed architecture or implementation-ready specifications.

Add a prominent notice before the first detailed journey/state/sequence/edge-condition model in the proposal and reference the same boundary where appropriate in ADR-042 and the Crosswalk.

Use wording equivalent to:

> The following models are review aids only. They are not approved detailed documentation, normative state machines, interaction contracts, implementation specifications, or persistence models. If the proposal is approved, they must be revalidated and recreated through an explicitly authorized documentation wave rather than promoted automatically.

Ensure this principle also appears in the proposal's approval gates or non-goals.

Do not delete useful review diagrams solely to shorten the proposal.

## RF-02 — Correct Metadata Ownership Language

In the proposal metadata, replace language that could imply Architecture Governance has already adopted or owns the proposal.

Replace:

`Owner | Nexoraxs Architecture Governance`

with one of:

- `Review owner | Nexoraxs Architecture Governance`
- `Proposed governance owner | Nexoraxs Architecture Governance`

Use one choice consistently.

Do not imply approval, sponsorship, or adoption unless existing authority explicitly records it.

## RF-03 — Remove Unsupported Mandatory Localization Language

Review statements using words such as `mandatory`, `required`, or equivalent for:

- Arabic and English.
- RTL/LTR.
- Accessibility.
- Localization behavior.

Do not weaken accepted accessibility, UX, security, or privacy obligations where they are already supported by authority.

However, do not let this Proposed package establish new mandatory localization authority, especially while ADR-041 remains Proposed.

Replace unsupported wording with language equivalent to:

> Any later approved experience must be evaluated against applicable accepted localization, accessibility, UX, security, privacy, and design authority.

Where accepted authority already clearly mandates a requirement, cite that authority explicitly instead of relying on this proposal.

## RF-04 — Prevent Conceptual State Labels from Becoming Canonical

In the conceptual orthogonal state-dimensions section, retain the independent dimensions, but strengthen the disclaimer around example labels.

Add wording equivalent to:

> No label in this section is reserved, canonical, implementation-ready, approved for persistence, or approved as an API/state-machine term until terminology and lifecycle review is completed.

Ensure ADR-042 and the Crosswalk describe the dimensions as conceptual review aids only.

Do not introduce physical fields, enums, transition tables, persistence contracts, or implementation state machines.

## RF-05 — Mark Business Health Snapshot as a Working Term

The term `Business Health Snapshot` remains unresolved and may be confused with the canonical `Business DNA Snapshot`.

Where the proposed pre-registration artifact is named, use:

`Business Health Snapshot (working term)`

or an equivalent explicit working-term marker.

Do not rename the concept permanently and do not resolve the terminology question inside Wave 1.

Maintain an explicit open question requiring terminology approval.

The documents must continue to state that:

- It is non-canonical presentation.
- It is not a Business DNA Snapshot.
- It is not Business DNA.
- It is not a canonical Recommendation.
- It grants no readiness state.

---

# Consistency Review

After applying RF-01 through RF-05, review all four files for consistency.

Verify that:

1. ADR-042 remains `Proposed`.
2. The proposal remains `Proposed for Authority Review`.
3. No Genesis or Freeze file is modified.
4. No authority conflict is silently resolved.
5. The Freeze-first versus Genesis-ultimate conflict remains open.
6. The account-first versus pre-registration Discovery conflict remains open.
7. Claim remains separate from import.
8. Discovery Evidence remains separate from Business DNA.
9. Provisional guidance remains outside the canonical Recommendation lifecycle.
10. Existing Core Workspace Ready criteria are referenced, not redefined.
11. Persona names remain UX archetypes, not roles or Permission grants.
12. Business Health Snapshot remains explicitly a working term.
13. Conceptual state labels remain examples only.
14. Detailed diagrams remain review aids only.
15. No implementation, storage, API, schema, route, identity mechanism, retention period, scoring formula, or Permission is introduced.

---

# Change Discipline

Make the smallest coherent changes necessary.

Do not:

- Rewrite the entire package unnecessarily.
- Expand scope.
- Add new architectural decisions.
- Add new open-question categories unless required to preserve consistency.
- Resolve existing human-decision conflicts.
- Change ADR numbering.
- Change statuses to Accepted, Approved, Final, Frozen, or Superseded.
- Start Wave 2.
- Modify prompt files unless needed only to fix a broken reference caused by this refinement.

Preserve historical traceability and all valid Stage A conflict identifiers.

---

# Validation

Before finishing:

1. Run `git diff --stat`.
2. Run `git diff --check`.
3. Confirm only the four Wave 1 proposal-package files were modified.
4. Confirm no application, Genesis, Freeze, accepted ADR, configuration, test, schema, or runtime files changed.
5. Check Markdown links affected by the edits.
6. Check terminology consistency for:
   - `Business Health Snapshot (working term)`
   - `Proposed`
   - `Proposed for Authority Review`
   - `review aid`
   - `non-canonical`
   - `Claim`
   - `Import`

---

# Required Final Report

Return a concise final report containing:

## 1. Files modified

List the exact files.

## 2. Refinements applied

Map each completed change to:

- RF-01
- RF-02
- RF-03
- RF-04
- RF-05

## 3. Governance confirmation

Confirm explicitly:

- ADR-042 remains Proposed.
- Wave 1 remains non-authoritative.
- No Genesis or Freeze files changed.
- No implementation was authorized or created.
- No human-decision conflict was resolved.
- Wave 2 was not started.

## 4. Validation results

Report:

- `git diff --stat`
- `git diff --check`
- changed-file scope
- Markdown-link or terminology checks performed

## 5. Remaining next gate

State clearly that the next action after this refinement is:

`Human Architecture Review of the refined Wave 1 proposal package`

Do not recommend ADR acceptance, Genesis edits, Freeze changes, Wave 2, or implementation until that review is completed and explicitly authorizes the next bounded step.

Stop after the refinement and final report.
