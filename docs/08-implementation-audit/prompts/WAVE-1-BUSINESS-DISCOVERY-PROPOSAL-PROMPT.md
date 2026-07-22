# Wave 1 Prompt — Business Discovery Governance Proposal Package

> Use this prompt with Codex inside the `Nexoraxs-V3.1` repository.
>
> This is a documentation-governance task only. It authorizes creation of a non-authoritative proposal package; it does not approve architecture and must not modify application code or frozen authority.

---

## Role

Act as a senior product architect, enterprise UX architect, documentation-governance analyst, security-aware domain architect, and authority reviewer inside the Nexoraxs repository.

You previously completed Stage A for the proposed `Business Discovery Preview` and produced an Authority Review containing:

- Authority inventory and classification.
- Authority-precedence assessment.
- Conflict Register.
- Authority and impact crosswalk.
- Proposed target-file plan.
- Blocking Open Questions.
- Stage B readiness recommendation.

Use that Stage A report as the governing input for this task.

If the Stage A report is not available in the current working context, regenerate it read-only before writing, using the existing Master Prompt. Do not alter repository files during that regeneration.

---

# Authorization Boundary

Proceed with **Wave 1 only**.

This instruction authorizes creation of a proposal package for human review. It does **not** authorize:

- Architecture approval.
- Genesis replacement.
- Freeze replacement.
- ADR acceptance.
- Implementation planning.
- Application code changes.
- Database, API, route, storage, event, package, or runtime design.
- Permission or role changes.
- Retention-period decisions.
- Scoring formulas.
- Readiness-criteria changes.

The resulting documents must remain explicitly non-authoritative.

Use the status:

`Proposed for Authority Review`

Do not use:

- Accepted.
- Approved.
- Final.
- Authoritative.
- Frozen.
- Superseded.
- Implementation Ready.

---

# Mandatory Repository Constraints

Do not modify, rename, move, delete, or supersede any existing file under:

- `docs/99-architecture-freeze/`
- `docs/01-genesis/`
- Existing accepted ADRs.
- Existing Core Platform authority.
- Existing Marketplace or Operating System freezes.

Do not modify:

- Application code.
- Frontend components.
- Backend components.
- Routes.
- APIs.
- Database schemas or migrations.
- Tests.
- Packages.
- CI workflows.
- Build configuration.
- Runtime behavior.

Do not create commits, push branches, or open pull requests unless explicitly instructed separately.

---

# Wave 1 Deliverables

Create only the following four files:

```text
docs/00-governance/proposals/business-discovery-preview/00-BUSINESS-DISCOVERY-PREVIEW-PROPOSAL.md
docs/00-governance/proposals/business-discovery-preview/01-AUTHORITY-AND-IMPACT-CROSSWALK.md
docs/00-governance/proposals/business-discovery-preview/02-OPEN-QUESTIONS-REGISTER.md
docs/00-governance/ADR/ADR-042-pre-registration-business-discovery.md
```

If a target file already exists, inspect it first and update it only when it is clearly the same proposal artifact. Do not overwrite unrelated work.

Do not create Customer Journey v2, Decision Matrix, Edge Case Matrix, Genesis updates, Freeze updates, Readiness Validation, implementation specifications, or additional documentation-wave files in this run.

---

# Governing Architectural Position

The proposal may propose the following position, subject to authority review:

> Business Discovery Preview is an optional, pre-registration value demonstration that gathers non-canonical evidence and may produce a non-canonical Business Health Snapshot or provisional guidance. It never creates a Workspace, Business, membership, Business DNA, official Recommendation, subscription, installation, entitlement, or readiness state. After identity and authorization requirements are resolved and a formal Business exists, eligible Discovery evidence may be imported into the governed Business Architect pipeline as draft or Candidate Fact evidence, retaining provenance and requiring review before publication.

This wording is proposed, not approved.

---

# Required Journey Shape Inside the Proposal

Represent Discovery as an optional branch, not as a mandatory linear stage:

```text
Visitor
→ Marketing Entry
├─ Start Business Discovery Preview
│  → Adaptive Discovery
│  → Snapshot or Limited Summary
│  → Save and Continue
│  → Create Account or Sign In
│
└─ Skip Discovery
   → Create Account or Sign In

→ Resolve Identity Verification Requirement
→ Create or Select Workspace
→ Create or Select Business
→ Resolve Discovery Session Claim, when applicable
→ Authorize and Import Discovery Evidence, when applicable
→ Continue Official Business Architect
→ Review and Confirm Evidence
→ Publish Core Business DNA according to existing authority
→ Generate Recommendations according to existing authority
→ Evaluate Core Workspace Ready according to existing authority
→ Product Hub and authorized downstream journeys
```

Rules:

- Discovery is optional.
- Skip Discovery must not pass through Snapshot.
- Identity verification is conditional and mechanism-neutral.
- Claim and Import are separate operations.
- Claim proves control of the anonymous Discovery session only.
- Import separately requires authorization for the target Business.
- Discovery does not grant readiness.
- Existing Core Workspace Ready criteria must be referenced, not redefined.
- Product Hub presents or composes governed outputs; it does not become the authority owner of Business DNA or Recommendations.
- Marketplace is a recurring authorized destination, not merely a terminal state.

---

# Required Anonymous Discovery State Model

Do not define one overloaded lifecycle enum.

The proposal must keep the following conceptual dimensions separate:

## Discovery Progress

Examples:

- Not Started.
- In Progress.
- Completed.
- Abandoned.

## Snapshot Status

Examples:

- Not Requested.
- Pending.
- Generated.
- Limited Result.
- Failed.
- Stale.

## Lifecycle Status

Examples:

- Active.
- Expired.
- Deleted.
- Anonymized.

## Claim Status

Examples:

- Unclaimed.
- Claim Pending.
- Claimed.
- Claim Failed.
- Claim Disputed.

## Import Status

Examples:

- Not Eligible.
- Eligible.
- Import Pending.
- Imported.
- Import Failed.
- Rejected.

## Replacement Status

Examples:

- Current.
- Replaced.
- Superseded by Newer Discovery.

These are conceptual proposal states only. Do not convert them into tables, schemas, APIs, or implementation contracts.

---

# Required Conflict Handling

Use the Stage A Conflict Register as the governing input.

At minimum, the proposal package must address without silently resolving:

1. Freeze-first versus Genesis-ultimate precedence conflict.
2. Frozen account-first journey versus proposed pre-registration Discovery.
3. Direct-answer-to-Business-DNA language versus the governed Candidate Fact pipeline.
4. Proposal-first Milestone Lifecycle versus creating detailed documents in the same wave.
5. Unsupported percentages, confidence scores, fit scores, and setup-time claims.
6. Canonical Recommendation lifecycle versus proposed provisional guidance.
7. Missing anonymous session ownership, claim, import, retention, and privacy authority.
8. Persona labels versus deferred permission and delegation semantics.
9. Conditional identity verification and deferred mechanisms.
10. Deferred privacy, retention, deletion, anonymization, residency, export, and legal-hold policy.
11. Product Hub coordination versus Operating System ownership.
12. Duplicate or legacy journey and master-architecture documents.
13. Marketplace as recurring growth destination.
14. Canonical Nexoraxs product-identity terminology.
15. Business Health Snapshot terminology versus Business DNA Snapshot.

For every conflict, distinguish:

- Existing Authority.
- Proposed Change.
- Rationale.
- Impact.
- Risk.
- Dependency.
- Recommended handling.
- Decision owner.
- Status.

Never mark a human decision as resolved merely to complete the document.

---

# File Requirements

## 1. `00-BUSINESS-DISCOVERY-PREVIEW-PROPOSAL.md`

Include:

- Document metadata.
- Status: `Proposed for Authority Review`.
- Executive summary.
- Problem statement.
- Existing authoritative baseline.
- Proposed change.
- Scope.
- Non-goals.
- Architectural guardrails.
- Branched customer journey proposal.
- Discovery versus Business Architect boundary.
- Discovery Evidence versus Business DNA boundary.
- Snapshot/provisional guidance boundary.
- Identity, claim, authorization, and import boundary.
- Conceptual orthogonal state dimensions.
- Persona treatment as UX archetypes only.
- Failure, retry, interruption, expiry, staleness, and resume principles.
- Privacy and security principles without inventing policy values.
- Product Hub, Marketplace, Operating System, subscription, entitlement, and readiness boundaries.
- Risks.
- Dependencies.
- Alternatives considered.
- Proposed rollout through later documentation waves.
- Approval gates.
- Explicit statement that the proposal creates no implementation contract.

The proposal may outline a future Customer Journey v2 document, but it must not create or present it as approved architecture.

## 2. `01-AUTHORITY-AND-IMPACT-CROSSWALK.md`

Include:

- Authority inventory summary.
- Precedence inconsistency.
- Full conflict register or stable references to it.
- Decision-to-authority crosswalk.
- Impacted authoritative documents if the proposal is eventually approved.
- ADR impact.
- Glossary and ontology impact.
- State-machine impact.
- UX impact.
- Security and privacy impact.
- Permission and authorization impact.
- Data ownership and provenance impact.
- Product Hub, Marketplace, and Operating System impact.
- Readiness impact.
- Implementation impact stated only at a conceptual level.
- Traceability table with exact repository paths and relevant sections or line references when practical.

Do not imply that listing an affected document authorizes editing it.

## 3. `02-OPEN-QUESTIONS-REGISTER.md`

Create a stable numbered register.

For every question include:

- Question ID.
- Question.
- Why it matters.
- Blocking level.
- Decision category.
- Decision owner.
- Existing authority.
- Options, where evidence supports options.
- Risks of premature decision.
- Required evidence.
- Status.

Group questions into:

- Governance and precedence.
- Product and journey.
- Ontology and terminology.
- Identity and account lifecycle.
- Authorization and persona routing.
- Anonymous session ownership and claim.
- Evidence import and Business DNA conflict.
- Privacy, security, retention, deletion, export, and residency.
- Snapshot generation, failure, staleness, and versioning.
- Confidence, evidence strength, setup effort, and Recommendation semantics.
- Product Hub, Marketplace, Operating Systems, subscription, entitlement, and readiness.

Do not choose retention periods, verification mechanisms, scoring formulas, or permission grants.

## 4. `ADR-042-pre-registration-business-discovery.md`

Use the repository's canonical ADR structure.

Required status:

`Proposed`

Include:

- Context.
- Problem.
- Decision proposal.
- Decision boundaries.
- Compatibility with existing authority.
- Known conflicts.
- Consequences.
- Positive consequences.
- Negative consequences.
- Risks.
- Security and privacy implications.
- Data ownership and provenance implications.
- Alternatives considered.
- Dependencies.
- Open questions.
- Approval requirements.
- Supersession impact, if later accepted.
- Explicit non-implementation statement.

ADR-042 must not claim acceptance and must not amend or supersede Genesis or Freeze while Proposed.

---

# Terminology Rules

Use canonical Nexoraxs terminology from authoritative sources.

Apply these restrictions:

- Treat `Business Discovery Preview` as proposed terminology.
- Treat `Business Health Snapshot` as proposed, non-canonical presentation terminology pending approval.
- Prefer `provisional guidance` unless authority explicitly approves a new Recommendation classification.
- Do not call pre-DNA output an official Recommendation.
- Do not call Discovery evidence Business DNA.
- Do not call an anonymous Discovery flow a Business Architect Session.
- Do not invent canonical roles from persona labels.
- Do not use exact percentages, numeric confidence, fit scores, or setup-time estimates unless an accepted, explainable model exists.
- Use `Business Operating Intelligence Platform` when stating the canonical product identity.

---

# Required Edge Conditions in the Proposal

At minimum, document proposal-level handling or open questions for:

- Discovery skipped.
- Discovery interrupted and resumed.
- Cookies or local storage unavailable.
- Multiple anonymous sessions.
- Concurrent anonymous editing.
- Snapshot generation pending.
- Snapshot generation failed.
- Insufficient evidence for a full Snapshot.
- Snapshot stale because rules or knowledge changed.
- Account created without a Workspace.
- Workspace created without a Business.
- Session claimed but never imported.
- Claim failed, expired, disputed, replayed, or duplicated.
- Import authorization denied.
- Import failed or retried.
- Import into a Business with existing draft evidence.
- Import into a Business with published Business DNA.
- Business deleted before import.
- Discovery replaced by a newer session.
- Anonymous deletion request.
- Export or email of an anonymous Snapshot.
- Existing authenticated user starting Discovery.
- Consultant or partner acting for a client Business.
- Identity verification delayed or not required.
- Recommendation or guidance becoming stale.
- Subscription, trial, installation, entitlement, or setup failure after the Core journey.

Where authority is absent, record an Open Question rather than inventing behavior.

---

# Quality Gates

Before completion, verify:

1. Exactly four authorized files were created or updated.
2. No Genesis or Freeze file changed.
3. No accepted ADR changed.
4. No code, configuration, schema, API, route, test, package, or runtime file changed.
5. Every document is explicitly proposal-only.
6. ADR-042 remains `Proposed`.
7. Existing readiness criteria were not redefined.
8. Claim and Import are separate.
9. Discovery Evidence and Business DNA are separate.
10. Provisional guidance and canonical Recommendations are separate.
11. The optional journey is visibly branched.
12. Unsupported numerical claims are absent.
13. Human decisions remain open.
14. All material Stage A conflicts are traceable.
15. Markdown links and repository paths are valid where possible.
16. `git diff --check` is clean.
17. `git status --short` lists only the authorized documentation files.

---

# Required Final Response

After writing, provide:

## Files Created or Updated

List the exact four paths and classify each as created or updated.

## Proposal Summary

Summarize the proposed decision, boundaries, and major risks.

## Authority Safety Confirmation

Confirm:

- No Genesis files changed.
- No Freeze files changed.
- No accepted ADRs changed.
- No application or implementation files changed.
- ADR-042 remains Proposed.

## Blocking Human Decisions

List the decisions that block:

- Proposal approval.
- Customer Journey v2 documentation wave.
- Architecture acceptance.
- Security/privacy design.
- Implementation.

## Validation

Report:

- `git status --short`
- `git diff --stat`
- `git diff --check`

## Stop Condition

Stop after completing Wave 1.

Do not continue to Customer Journey v2, Decision Matrix, Edge Case Matrix, Genesis updates, Freeze updates, Readiness Validation, or implementation planning.

Await a new explicit human instruction before proceeding.
