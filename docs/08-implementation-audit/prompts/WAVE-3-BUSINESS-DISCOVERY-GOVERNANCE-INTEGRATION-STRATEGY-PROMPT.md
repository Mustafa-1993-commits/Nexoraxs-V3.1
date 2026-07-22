# Wave 3 Prompt — Business Discovery Governance Integration Strategy

> Use this prompt with Codex inside the `Nexoraxs-V3.1` repository.
>
> This is a documentation-governance planning task only. It does not authorize architecture acceptance, authority changes, implementation planning, code, APIs, schemas, runtime behavior, or modifications to Genesis, Freeze, or Accepted ADRs.

---

## Role

Act as a senior enterprise architect, documentation-governance analyst, product architect, security-aware domain architect, and authority-integration reviewer inside the Nexoraxs repository.

You are continuing the governed Business Discovery documentation sequence.

Use the following as mandatory inputs:

1. The complete refined Wave 1 package.
2. The complete reviewed Wave 2 package.
3. The Human Architecture Review Decision for Wave 1.
4. The Human Architecture Review Decision for Wave 2.
5. The reviewed Wave 2 commit:

```text
368c043e75422d10b3e6abc38548937b080d52ff
```

The Wave 2 human decision authorizes only a bounded Wave 3 Governance integration strategy documentation package.

---

# Mandatory Human Gate

Before writing any file, verify that this repository record exists:

```text
docs/00-governance/proposals/business-discovery-preview/HUMAN-ARCHITECTURE-REVIEW-DECISION-WAVE-2.md
```

It must explicitly record:

- Reviewed commit: `368c043e75422d10b3e6abc38548937b080d52ff`.
- Disposition: `APPROVED FOR A BOUNDED NEXT DOCUMENTATION STEP`.
- Authorized next step: bounded Wave 3 Governance integration strategy documentation only.
- Architecture acceptance, authority changes, and implementation remain unauthorized.

If this evidence is missing, ambiguous, uncommitted, or does not match the reviewed SHA:

- Make no repository changes.
- Do not create Wave 3 files.
- Return a gate-failure report identifying the missing evidence.
- Stop.

---

# Authorization Boundary

Proceed with **Wave 3 only**.

Wave 3 is a governance-integration strategy review package. It may identify and classify future authority impact, sequencing, dependencies, successor options, and review checkpoints.

Wave 3 does **not** authorize:

- Accepting ADR-042.
- Accepting the Business Discovery architecture.
- Modifying Genesis.
- Modifying any Freeze.
- Modifying Accepted ADRs.
- Modifying the Constitution or Milestone Lifecycle.
- Resolving BDP-C01 through BDP-C15.
- Closing or answering Open Questions.
- Defining implementation architecture.
- Creating detailed UX specifications.
- Creating engineering tasks.
- Creating APIs, schemas, routes, Events, services, packages, tables, fields, enums, or state machines.
- Creating database, storage, security, privacy, retention, scoring, Recommendation, or readiness implementation rules.
- Modifying application code, tests, CI, configuration, infrastructure, or runtime behavior.
- Starting Wave 4 or any later wave.

All Wave 3 outputs must remain explicitly:

```text
Proposed for Authority Review
```

Do not use:

- Accepted.
- Approved Architecture.
- Authoritative.
- Final.
- Frozen.
- Superseded.
- Implementation Ready.
- Ready for Engineering.

---

# Mandatory Repository Constraints

Do not modify, rename, move, delete, or supersede:

- `docs/01-genesis/`
- `docs/99-architecture-freeze/`
- Existing Accepted ADRs.
- The Constitution.
- The Milestone Lifecycle.
- Any Wave 1 artifact.
- Any Wave 2 artifact.
- Either Human Architecture Review Decision record.
- Application or infrastructure files.

Do not create commits, push branches, merge, or open pull requests unless explicitly instructed separately.

---

# Wave 3 Deliverables

Create only the following four files:

```text
docs/00-governance/proposals/business-discovery-preview/07-GOVERNANCE-INTEGRATION-STRATEGY.md
docs/00-governance/proposals/business-discovery-preview/08-AUTHORITY-CHANGE-CLASSIFICATION-MATRIX.md
docs/00-governance/proposals/business-discovery-preview/09-SUCCESSOR-AND-MIGRATION-CANDIDATE-REGISTER.md
docs/00-governance/proposals/business-discovery-preview/10-WAVE-3-DEPENDENCY-AND-REVIEW-GATE-REGISTER.md
```

If any target file already exists, inspect it first and update it only when it is clearly the same Wave 3 artifact. Do not overwrite unrelated work.

Do not create any other file.

---

# Package-Wide Review-Aid Boundaries

Every Wave 3 file must contain prominent notices stating that:

- The file is non-authoritative and Proposal-only.
- It does not authorize editing any impacted authority.
- A listed document is a review candidate, not an approved target.
- A sequence is a proposed governance sequence, not a mandatory workflow.
- A successor candidate is not an approved supersession relationship.
- A migration candidate is not a content migration instruction.
- A dependency is a review dependency, not an implementation dependency.
- A checkpoint is a human-review checkpoint, not an automated gate.
- No Wave 3 content may be promoted automatically into Genesis, Freeze, ADRs, detailed UX, implementation plans, or engineering tasks.

Use proposal language such as:

- `could`
- `may require review`
- `candidate`
- `proposed review sequence`
- `subject to human disposition`

Avoid unqualified normative wording such as:

- `must change`
- `will replace`
- `shall supersede`
- `required implementation`

---

# Required Deliverable 1

## `07-GOVERNANCE-INTEGRATION-STRATEGY.md`

Document the bounded governance strategy for how the Business Discovery proposal could advance if a later Human Architecture Review accepts some or all of it.

Required sections:

1. Metadata.
2. Non-authoritative notice.
3. Purpose and scope.
4. Governing inputs and reviewed SHAs.
5. Current authority state.
6. Preserved conflicts and Open Questions.
7. Candidate authority-impact domains.
8. Proposed governance integration principles.
9. Proposed review sequencing.
10. Proposed decision checkpoints.
11. Stop conditions.
12. Explicit exclusions.
13. Human review readiness.

At minimum, distinguish these categories:

- Constitution and Milestone Lifecycle.
- Genesis journey and product architecture.
- Core Platform authority.
- Business Architect and Business DNA authority.
- Business Brain and Recommendation authority.
- Product Hub and Marketplace authority.
- Billing/Subscription and Operating System authority.
- Privacy, Security, Authorization, Audit, and Data Governance authority.
- Canonical terminology and glossary authority.
- ADR-042 lifecycle.
- Freeze successor strategy.

Do not decide that any category will change. Record only potential impact and review sequencing.

---

# Required Deliverable 2

## `08-AUTHORITY-CHANGE-CLASSIFICATION-MATRIX.md`

Create a review matrix that classifies possible future authority actions without authorizing them.

Required columns:

- Stable ID.
- Candidate authority/document.
- Current authority status.
- Potential impact if proposal is later accepted.
- Candidate change class.
- Candidate action type.
- Preconditions.
- Dependencies.
- Conflicts/Open Questions.
- Required human reviewers.
- Current Wave 3 action.

Candidate change classes may include only review labels such as:

- No change currently indicated.
- Clarification candidate.
- Amendment candidate.
- Successor candidate.
- Supersession candidate.
- New ADR candidate.
- Freeze successor candidate.
- Historical-labeling candidate.
- Governance decision required.

Candidate action types may include:

- Review only.
- Confirm no impact.
- Clarify relationship.
- Prepare future amendment proposal.
- Prepare future successor proposal.
- Prepare future ADR disposition.
- Prepare future deprecation/historical-labeling proposal.

These labels must not imply approval.

Use stable IDs such as:

```text
AC-001
AC-002
...
```

The IDs are review cross-references only, not work items or implementation tasks.

---

# Required Deliverable 3

## `09-SUCCESSOR-AND-MIGRATION-CANDIDATE-REGISTER.md`

Create a candidate register for future documentation relationships.

Required sections:

1. Definitions and boundaries.
2. Candidate successor relationships.
3. Candidate amendment relationships.
4. Candidate historical/duplicate document treatment.
5. Candidate content migration concerns.
6. Provenance-preservation requirements.
7. Candidate rollback/rejection outcomes.
8. Explicit non-authorization statement.

Required columns where tables are used:

- Stable ID.
- Source document.
- Candidate target or successor.
- Relationship under review.
- Content potentially affected.
- Content explicitly preserved.
- Conflict/Open Question dependencies.
- Risks.
- Human decision required.
- Current action.

Use stable IDs such as:

```text
SM-001
SM-002
...
```

Do not define actual replacement text.
Do not copy or rewrite Genesis or Freeze content.
Do not mark any source as superseded, deprecated, historical, or obsolete.

---

# Required Deliverable 4

## `10-WAVE-3-DEPENDENCY-AND-REVIEW-GATE-REGISTER.md`

Create the complete Wave 3 traceability, dependency, and review-gate register.

Required sections:

1. Wave 3 scope manifest.
2. Human Wave 2 gate evidence.
3. Input traceability.
4. Wave 3 artifact traceability.
5. Dependency ordering.
6. Conflict preservation index.
7. Open Question preservation index.
8. Required human review disciplines.
9. Proposed future gate options.
10. No-automatic-next-wave rule.
11. Validation report template.

Required review disciplines should include, at minimum:

- Architecture Governance.
- Product Architecture.
- Enterprise UX.
- Core Platform.
- Business Architect / Business DNA.
- Business Brain / Recommendations.
- Identity and Access.
- Security.
- Privacy / Legal.
- Data Governance.
- Product Hub / Marketplace.
- Commercial / Billing.
- Operating Systems.
- Documentation Governance.

Every future gate option must state that a separate human decision is required.

The register must explicitly state:

```text
No Wave 4 or later documentation or implementation step is authorized by Wave 3 itself.
```

---

# Required Authority Impact Review

Inspect the repository and identify only actual current paths.

At minimum, verify and classify potential review impact for:

```text
.specify/memory/constitution.md
docs/00-governance/MILESTONE-LIFECYCLE.md
docs/00-governance/glossary/GLOSSARY.md
docs/00-governance/ADR/ADR-042-pre-registration-business-discovery.md
docs/01-genesis/11-CUSTOMER-JOURNEY.md
docs/01-genesis/13-PRODUCT-HUB.md
docs/01-genesis/14-SUBSCRIPTION-MODEL.md
docs/01-genesis/16-OPERATING-SYSTEM-LIFECYCLE.md
docs/01-genesis/17-MARKETPLACE-ARCHITECTURE.md
docs/02-core-platform/02-CORE-PLATFORM-ARCHITECTURE.md
docs/02-core-platform/03-DOMAIN-MODEL.md
docs/02-core-platform/05-PERMISSION-MODEL.md
docs/02-core-platform/08-SECURITY-MODEL.md
docs/02-core-platform/09-OBSERVABILITY.md
docs/03-business-brain/
docs/99-architecture-freeze/BUSINESS-BRAIN-FREEZE-v1.0.md
docs/99-architecture-freeze/CORE-PLATFORM-v1.0-FREEZE.md
```

Also inspect current Marketplace and Operating System Freeze manifests under:

```text
docs/99-architecture-freeze/
```

Do not assume paths. Verify them from the repository before recording them.

If a referenced path does not exist:

- Do not invent a replacement.
- Record the discrepancy in the Wave 3 validation report.
- Use the actual current repository path where discoverable.

---

# Conflict and Open Question Preservation

Preserve all stable Wave 1 conflicts:

```text
BDP-C01 through BDP-C15
```

Do not change their statuses.

Preserve all 50 Open Questions.

Do not:

- answer them;
- close them;
- merge them;
- rename their IDs;
- silently convert them into decisions.

Wave 3 may only identify which future governance actions depend on them.

---

# Required Governance Sequence Model

Create a proposed review sequence that is explicitly conditional and non-authoritative.

The model should consider, without deciding:

1. Confirm authority precedence and change class.
2. Resolve or explicitly defer blocking terminology and journey conflicts.
3. Determine ADR-042 disposition.
4. Determine whether Genesis requires clarification, amendment, or a successor proposal.
5. Determine whether Core/Business Brain/Product Hub/Marketplace/Commercial/OS authority requires clarification or amendment proposals.
6. Determine whether successor Freeze proposals are needed.
7. Determine historical/duplicate-document treatment.
8. Revalidate cross-document traceability.
9. Require a separate human decision before any authority edit.
10. Require separate authority-edit waves before any implementation planning.

This sequence must not be framed as approved or mandatory.

---

# Prohibited Leakage

The Wave 3 package must not contain:

- endpoint names;
- route names;
- service names;
- database entities;
- persistence fields;
- enum values;
- runtime states;
- Event names;
- package/module boundaries;
- detailed page/screen specifications;
- engineering tickets;
- estimates;
- implementation phases;
- migration scripts;
- rollout plans;
- release plans;
- acceptance tests;
- security control implementation;
- privacy policy values;
- retention durations;
- scoring formulas;
- readiness formulas.

A future documentation candidate is not an implementation deliverable.

---

# Validation Requirements

Before finishing, validate:

1. Exactly four Wave 3 files were created or updated.
2. No other file changed.
3. All target repository references exist, or discrepancies are explicitly reported.
4. All local Markdown links resolve.
5. Markdown tables have consistent column counts.
6. `BDP-C01` through `BDP-C15` are preserved.
7. All 50 Open Question IDs are preserved and traceable.
8. ADR-042 remains Proposed.
9. Wave 1 and Wave 2 files remain unchanged.
10. Human decision records remain unchanged.
11. Genesis and Freeze files remain unchanged.
12. No Accepted ADR changed.
13. No implementation-shaped content was introduced.
14. `git diff --check` is clean.
15. No commit, push, merge, or pull request occurred.

Because newly created files may be untracked, do not rely only on `git diff --stat`. Report:

- `git status --short`.
- Additive file/line counts.
- Per-file whitespace validation.
- Out-of-scope changed-file count.

---

# Required Final Response

Return a concise report with exactly these sections:

```text
## 1. Human Gate Evidence

## 2. Wave 3 Files Created

## 3. Governance Integration Strategy Summary

## 4. Preserved Conflicts and Open Questions

## 5. Governance Confirmation

## 6. Validation Results

## 7. Remaining Next Gate
```

The Remaining Next Gate must be:

```text
Human Architecture Review of the bounded Wave 3 Governance integration strategy package
```

Do not create a commit.
Do not push.
Do not start Wave 4.
