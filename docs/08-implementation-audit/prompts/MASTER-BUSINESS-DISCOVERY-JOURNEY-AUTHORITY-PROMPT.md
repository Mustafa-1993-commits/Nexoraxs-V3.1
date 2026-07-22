# Master Prompt — Business Discovery & Customer Journey Authority v1.1

> Use this prompt with Codex inside the `Nexoraxs-V3.1` repository.
>
> This is a documentation-governance task. It must not modify application code.

---

## Role and Operating Context

You are acting as a senior product architect, enterprise UX architect, documentation-authority reviewer, and architecture-governance analyst inside the Nexoraxs repository.

Review the current documentation under:

`docs/`

Then prepare a formal documentation package for a proposed pre-registration value stage named:

`Business Discovery Preview`

Preserve the existing Nexoraxs architecture, ontology, constitutional principles, authority hierarchy, product boundaries, readiness definitions, and historical traceability.

This task is strictly:

`Documentation Only`

Do not modify application code, frontend components, routes, APIs, schemas, tests, packages, CI, build configuration, or runtime behavior.

Do not create commits, push branches, or open pull requests unless explicitly instructed later.

---

# Execution Contract

This prompt runs in two controlled stages.

## Stage A — Authority Review

Complete Phase 0 only, then stop.

Produce:

1. Authority inventory and classification.
2. Authority-precedence assessment.
3. Conflict register.
4. Authority and impact crosswalk.
5. Proposed target-file plan.
6. Blocking open questions.
7. Recommendation on whether Stage B may proceed.

Do not create or update journey-authority documents during Stage A.

End Stage A with:

`Awaiting explicit human instruction: Continue with documentation package.`

## Stage B — Documentation Package

Proceed only after the user explicitly says:

`Continue with documentation package.`

Do not treat the original invocation of this prompt as permission to bypass the Stage A checkpoint.

---

# Phase 0 — Authority Review Before Writing

Inspect at minimum documents related to:

- Constitution and Genesis.
- Ontology.
- Core Platform architecture.
- Customer journey.
- Workspace, Business, Business Unit, Department, and Branch boundaries.
- Identity, membership, ownership, invitations, and permissions.
- Business Architect and its state machine.
- Business DNA, provenance, review, publication, and versioning.
- Capabilities and recommendations.
- Product Hub and Marketplace.
- Operating Systems and setup ownership.
- Core Workspace Ready and Operating System Ready.
- Subscription, trial, entitlement, installation, activation, and setup.
- Existing ADRs.
- Historical audits, reconciliation reports, and authority crosswalks.

## 0.1 Document Classification

Classify each materially relevant document as one of:

- `Authoritative`
- `Supporting`
- `Historical`
- `Draft`
- `Conflicting`
- `Superseded`
- `Requires Clarification`
- `Missing`

Do not change authority status merely because a document is old or inconvenient.

## 0.2 Authority Precedence

Determine the repository's existing precedence rules.

If no explicit precedence model exists, record that as a governance gap.

Never assume that a newer file automatically supersedes an older authoritative file.

## 0.3 Conflict Register

For every material conflict record:

- Conflict ID.
- Documents involved.
- Conflicting statements.
- Existing authority level.
- Impacted journey stage or state.
- Risk if unresolved.
- Classification: Product, Architecture, UX, Security, Privacy, Data Governance, Commercial, or Technical Governance.
- Recommended handling.
- Status: resolved by existing authority, proposed resolution, or human decision required.

Never resolve conflicts silently.

## 0.4 Authority and Impact Crosswalk

Connect each proposed journey decision to:

- Supporting authority.
- Potential conflicts.
- Documents requiring updates.
- ADR impact.
- Ontology impact.
- State-machine impact.
- UX impact.
- Security and privacy impact.
- Future implementation impact without modifying code.

---

# Phase 1 — Architectural Guardrails

Preserve these principles unless higher authority explicitly contradicts them:

- Business DNA belongs to `Business`, not `Workspace`.
- A Workspace may contain multiple Businesses.
- A Business may contain Business Units.
- Branches and Departments follow the existing ontology.
- Official Business Architect begins only after a formal Business exists.
- Discovery Evidence is not Business DNA.
- Provisional Recommendations are not Official Recommendations.
- Entry Intent is contextual metadata, not evidence of fit.
- Product Hub presents and compares recommendations; it does not own Operating System setup.
- An Operating System owns product-specific setup, activation, and operational readiness.
- `Core Workspace Ready` and `Operating System Ready` remain separate.
- Discovery completion grants no readiness state.
- Capability-first reasoning must not become a product funnel.
- The platform understands the business before recommending software.
- Software adapts to the business.
- Infer before asking.
- Knowledge before AI.
- The customer should feel they are building the business, not configuring software.

---

# Phase 2 — Proposed Architectural Decision

Document this proposal:

> Business Discovery Preview is a pre-registration value demonstration. It never creates or publishes Business DNA. After authenticated ownership of the anonymous session is established, its collected answers and inferences may be imported as draft evidence into an authorized formal Business. The user reviews, confirms, corrects, or rejects that evidence inside the official Business Architect before Core Business DNA may be published.

Use status:

`Proposed for Authority Review`

Do not mark it Final, Frozen, Approved, Accepted, or Superseded unless a formal approval process exists and the user explicitly authorizes it.

## North Star

> Every interaction must increase business understanding or deliver measurable value. If it does neither, it does not belong in the journey.

Governing principles:

1. Value before commitment.
2. Understand before recommending.
3. Every question must influence business understanding, evidence, recommendation, setup reduction, risk identification, or personalization.
4. Registration exists to save and continue value, not unlock the first value.
5. The journey differs by persona.
6. Entry Intent personalizes presentation but never manufactures fit.
7. Every interruptible step defines exit, persistence, expiry, failure, and resume behavior.
8. Exact scores, percentages, and setup-time estimates require a documented explainable model.
9. Empty dashboards are not valid default onboarding outcomes.

---

# Phase 3 — Customer Journey v2

Do not document the journey as one misleading linear chain. Document explicit branches and convergence points.

## 3.1 Acquisition Branching

```text
Visitor
→ Marketing Entry
├─ Start Discovery
│  → Business Discovery Preview
│  → Snapshot Generation Resolution
│     ├─ Snapshot Generated
│     │  → Business Health Snapshot
│     │  → Save and Continue
│     ├─ More Evidence Required
│     │  → Ask Only Minimum Necessary Follow-up
│     └─ Snapshot Generation Failed
│        → Safe Limited Summary, Retry, or Continue Without Snapshot
│
└─ Skip Discovery
   → Create Account or Login
```

Discovery is optional. The Skip path must not pass through Snapshot or Save Assessment states.

## 3.2 Identity Resolution

```text
Create Account or Login
→ Resolve Identity Verification Requirement
├─ Verification Required
│  → Verify Identity or Verification Recovery
└─ Already Verified or Trusted Identity
   → Continue
```

Do not assume verification is always required. Follow existing Identity authority.

## 3.3 Anonymous Session Ownership and Formal Context

Separate session ownership from evidence import:

```text
Authenticated Identity
→ Authorize or Claim Anonymous Session Ownership, when a session exists
→ Create or Select Workspace
→ Create or Select Business
→ Authorize Target Business and Import Permission
→ Import Discovery as Draft Evidence, when applicable
```

Rules:

- Claim proves authorized control of the anonymous session; it does not attach evidence to a Business.
- Import requires a formal Business and permission on that Business.
- Claim does not publish Business DNA.
- Import does not publish Business DNA.
- A user who skipped Discovery has no claim or import step.

## 3.4 Official Business Understanding

```text
Business Exists
→ Continue Official Business Architect
→ Review, Confirm, Correct, or Reject Evidence
→ Resolve Business Architect Publication Requirements
→ Publish Core Business DNA only when authoritative criteria are satisfied
→ Generate Explainable Official Recommendations
```

## 3.5 Readiness Resolution

Do not redefine `Core Workspace Ready` to fit this journey.

```text
Evaluate Existing Core Workspace Readiness Criteria
├─ Ready
│  → Product Hub or Marketplace
└─ Not Ready
   → Resume Required Core Step
```

Document explicitly:

```text
Discovery Completed
≠ Snapshot Generated
≠ Session Claimed
≠ Evidence Imported
≠ Business Architect Completed
≠ Core Business DNA Published
≠ Core Workspace Ready
≠ Operating System Installed
≠ Operating System Ready
```

## 3.6 Product Adoption

```text
Product Hub or Marketplace
→ Review Official Recommendations and Available Options
→ Select Operating System or Continue Exploring
→ Select Plan
→ Resolve Trial or Subscription
→ Resolve Entitlement
→ Installation
→ Operating System Setup
→ Evaluate Operating System Readiness
├─ Ready
│  → Operational Dashboard
└─ Not Ready
   → Resume Required Installation or Setup Step
```

Product Hub may present a recommendation as Official only after official recommendation conditions are satisfied. Before that, it may show only clearly labeled provisional guidance.

## 3.7 Growth Loop

Marketplace is not only the final step.

```text
Operational Dashboard
→ Daily Operations
→ Growth Trigger
→ Return to Product Hub or Marketplace
→ Add, replace, compare, or remove capabilities and Operating Systems under existing authority
```

---

# Phase 4 — Business Discovery Preview Specification

Create a dedicated specification covering Purpose, Scope, Non-goals, UX, evidence, lifecycle, privacy, ownership, failure, resume, and success criteria.

## Purpose

- Deliver meaningful value before registration.
- Demonstrate business understanding.
- Produce an initial Business Health Snapshot when possible.
- Gather minimum necessary evidence.
- Reduce later Business Architect effort.
- Increase informed conversion.

## Non-goals

Discovery must not:

- Create Workspace, Business, membership, subscription, installation, or readiness.
- Publish Business DNA.
- Produce Official Recommendations.
- Replace Business Architect.
- Act as a generic lead form.
- Force a product-specific outcome.
- Treat anonymous answers or inferences as final truth.

## Experience Principles

- Intelligent conversation, not long questionnaire.
- Minimum Necessary Questions.
- Adaptive Questioning.
- Progressive Disclosure.
- Plain business language.
- Explain why a question matters when useful.
- Do not ask for sufficiently known information without a reason.
- Allow correction of inferred assumptions.
- Show growing `Business Understanding`, not only form completion.

Every question must affect at least one of:

- Business profile or model.
- Operational complexity.
- Risk or opportunity identification.
- Capability recommendation.
- Provisional Operating System suitability.
- Draft evidence.
- Future setup reduction.
- Personalization.

Remove questions that affect none of these.

## Business Health Snapshot

When evidence supports it, the Snapshot may include:

- Business Type and Model.
- Business Stage.
- Approximate Operational Complexity.
- Locations.
- Current Challenges.
- Operational Risks.
- Improvement Opportunities.
- Recommended Capabilities.
- Potentially Suitable Operating Systems.
- Explanation.
- Missing Information.
- Evidence Strength or confidence classification.
- Setup effort only when a validated model exists.
- CTA to save and continue.

Distinguish:

- User-provided facts.
- Observed context.
- Inferred assumptions.
- Low-confidence conclusions.
- Provisional recommendations.
- Missing evidence.

Do not display numeric confidence or precise setup estimates without a documented, testable, explainable model. Otherwise use qualitative classifications such as Strong fit, Possible fit, Weak evidence, More information required, or Not currently recommended.

## Snapshot Failure and Staleness

Document:

- Discovery completed but Snapshot generation pending.
- Snapshot generation failed.
- Insufficient or contradictory evidence.
- Unsupported business type.
- Missing rules or knowledge.
- Snapshot becomes stale before signup.
- Rules or knowledge version changes before claim or import.
- User edits answers after Snapshot generation.

Define safe retry, limited-summary, follow-up, continue-without-Snapshot, and resume behavior without inventing implementation details.

---

# Phase 5 — Entry Points, Intent, and Personas

Cover:

- General Marketing.
- Product or Operating System landing page.
- Campaign.
- Referral.
- Marketplace.
- Invitation.
- Existing Account.
- Direct Resume links.
- Consultant or Partner links.

Preserve Entry source, campaign/referral identifiers, original interest, locale, session context, and timestamp where permitted.

Authority rule:

> Entry Intent may prioritize presentation and explain relevance, but it must never fabricate Business Fit, Confidence, Business DNA, or recommendation evidence.

An invited user does not follow the Owner acquisition journey by default.

Separate journeys for:

- Visitor.
- Prospective Owner.
- Workspace Owner.
- Workspace Admin.
- Business Admin.
- Manager.
- Employee.
- Invited User.
- Consultant.
- Partner or Reseller.

For each persona document entry, identity state, ownership assumptions, allowed actions, prohibited actions, default destination, resume behavior, and required authorization. Do not invent permissions unsupported by current authority.

---

# Phase 6 — Anonymous Discovery Conceptual State Model

Do not force all concepts into one linear enum.

First verify current naming authority, then model orthogonal dimensions where appropriate.

## Progress Status

- `created`
- `in_progress`
- `completed`
- `abandoned`

## Snapshot Status

- `not_generated`
- `generation_pending`
- `generated`
- `generation_failed`
- `stale`

## Lifecycle Status

- `active`
- `expired`
- `deleted`

## Claim Status

- `unclaimed`
- `claim_pending`
- `claimed`
- `claim_failed`

## Import Status

- `not_imported`
- `import_pending`
- `imported`
- `import_failed`

## Replacement Relationship

- `current`
- `replaced_by_newer_session`

Treat replacement as a relationship unless existing authority defines it as a lifecycle state.

Document conceptual fields only: identifier, Entry Intent, locale, timestamps, expiry-policy reference, progress, temporary answers, inferred evidence, provenance, Snapshot version, claim status, import status, deletion status, and replacement relationship.

Do not define tables, physical storage, API shapes, or schemas.

## Claim and Import Rules

- No formal Business attachment before authorized import.
- Claim and import are separate operations.
- Cross-device recovery requires an explicit secure mechanism.
- Duplicate claim and import operations must be deterministic.
- A session claimed by another account must not be silently reassigned.
- Imported evidence retains source, version, and provenance.
- Retention duration is policy/configuration, not a hard-coded constant.
- Discovery participation is not marketing consent.

---

# Phase 7 — Business Architect Evidence Import

Preserve the existing Business Architect state machine. Add only explanatory integration points.

Reference only if compatible with current authority:

```text
not_started
→ in_progress
→ review_required
→ publish_ready
→ published
→ analyzed
→ completed
```

Rules:

- Discovery evidence may initialize or enrich `in_progress`.
- It may create a review requirement.
- It cannot move directly to `published` or `completed`.
- User confirmation is separate from the original anonymous answer.
- Corrections do not erase provenance.
- Rejected evidence remains auditable according to governance.
- Official Recommendations trigger only after authoritative business-understanding conditions are met.

Distinguish:

- Discovery Answer.
- Discovery Inference.
- Imported Draft Evidence.
- Confirmed Evidence.
- Business DNA Draft.
- Published Core Business DNA.
- Provisional Recommendation.
- Official Recommendation.

---

# Phase 8 — Ownership Boundaries

Document logical ownership without requiring separately deployed services.

- Marketing Website: entry, intent capture, launch, Snapshot presentation, conversion CTA.
- Discovery Capability: adaptive questions, temporary answers, inference, Snapshot generation, evidence strength, provenance, session lifecycle.
- Identity: account, authentication, verification resolution, session-claim authorization.
- Core Platform: Workspace, Business, membership, organization registry, active-context resolution.
- Business Architect: evidence review, confirmation, correction, Business DNA draft/publication, provenance/versioning, official recommendation trigger.
- Product Hub: official recommendation presentation, capability mapping, comparison, plan experience, subscription handoff, installation initiation.
- Marketplace: discoverability and available-option presentation according to existing Product Hub/Marketplace authority.
- Operating System: product-specific setup, activation, OS readiness, daily operations.
- Billing/Subscription: trial eligibility, plan entitlement, payment/subscription state, billing recovery where supported.

Billing state must never redefine Business DNA or recommendation evidence.

---

# Phase 9 — Journey Decision Matrix

Create a formal matrix covering at minimum:

- Entry type and persona.
- Authentication and verification state.
- Invitation state.
- Workspace count and active Workspace state.
- Business count and active Business state.
- Permission state.
- Discovery progress and Snapshot state.
- Claim and import state.
- Business Architect and Business DNA state.
- Recommendation state.
- Core readiness state.
- Subscription, trial, and entitlement state.
- Installation, setup, and OS readiness state.
- Destination.
- Required action.
- Allowed skip.
- Blocking condition.
- Persistence requirement.
- Failure behavior.
- Resume behavior.
- Ownership boundary.

Do not force a single destination when permissions or multiple contexts require a selector.

---

# Phase 10 — Edge Case Matrix

For every edge case include ID, trigger, preconditions, expected UX, persistence, failure/fallback behavior, resume destination, ownership, security/privacy consideration, blocking status, and human decision requirement.

Cover at minimum:

## Discovery and Snapshot

- Skip, abandon, resume, restart, expiry, cleared storage, unavailable cookies/storage.
- Same-browser and cross-device return.
- Snapshot pending, failed, limited, stale, or regenerated.
- Insufficient, contradictory, low-confidence, unsupported, or multi-model business evidence.
- Knowledge/rules version changes between Snapshot and import.
- User edits answers after viewing Snapshot.
- Duplicate or concurrent sessions.
- Another browser edits a session during claim.
- Privacy deletion and anonymous-data export request.

## Identity, Claim, and Import

- Account creation/login failure.
- Verification delay or expiry.
- Different email or social-login conflict.
- Claim failed, duplicate, concurrent, or already owned by another account.
- Account created but Business creation abandoned.
- Session claimed but never imported.
- Target Business authorization fails.
- Target Business already has conflicting published DNA.
- Business deleted between claim and import.
- Import failed, retried, duplicated, or partially completed.

## Workspace, Business, Context, and Permissions

- No or multiple Workspaces.
- No or multiple Businesses.
- Missing or invalid active context.
- Workspace or Business suspended.
- Workspace, Business, Business Unit, or Branch switch.
- Invitation expiry/revocation/conflicting identity.
- Role, membership, permission, consultant delegation, or partner access changes during onboarding.

## Business Architect and Business DNA

- Incomplete or abandoned Architect.
- Imported evidence conflicts with existing data.
- Evidence rejected.
- Published DNA receives newer Discovery evidence.
- DNA outdated or review required.
- Concurrent authorized editors.

## Recommendations, Product Hub, and Marketplace

- Entry Intent conflicts with evidence.
- User rejects or selects a non-recommended OS.
- No suitable OS or no product for a capability.
- Recommendation low-confidence, stale, or unavailable.
- Marketplace accessed before or after first OS adoption.

## Subscription, Installation, and Setup

- Trial unavailable or expired, including during setup.
- Payment/subscription pending or failed.
- Missing entitlement.
- Installation failed, partial, retried, or changed during subscription update.
- Setup abandoned.
- Activation failed.
- OS removed.
- Permission lost during setup.

## Consultant and Partner

- Creating or assessing a Business for a client.
- Client ownership not established.
- Evidence disagreement.
- Partner attempts to claim client session.
- Relationship ends during onboarding.

---

# Phase 11 — ADR and Rejected Alternatives

Create an ADR using the next valid number after checking existing files.

Include Context, Problem, Decision, Drivers, Rationale, Alternatives, Consequences, Risks, Security, Privacy, Data Lifecycle, Ownership, State implications, Migration impact, Documentation impact, future implementation impact, Open Questions, and Related Authority.

Document rejection of:

- Mandatory Account First.
- Discovery as Business Architect.
- Discovery Publishes Business DNA.
- Product-Specific Discovery Only.
- Direct Dashboard after Signup.
- Entry Intent Determines Recommendation.
- One linear anonymous-session enum when orthogonal dimensions are required.
- Claim and Business import as one indistinguishable action.

---

# Phase 12 — Required Documentation Package

Review existing files first and avoid duplicates.

Create or update the most appropriate files for:

1. Customer Journey v2.
2. Business Discovery Preview specification.
3. Journey Decision Matrix.
4. Journey Edge Cases.
5. ADR for pre-registration Business Discovery.
6. Authority and Impact Crosswalk.
7. Open Questions Register, whether standalone or clearly embedded.

Suggested paths are non-binding:

- `docs/01-genesis/11-CUSTOMER-JOURNEY.md`
- `docs/01-genesis/12-BUSINESS-DISCOVERY-PREVIEW.md`
- `docs/01-genesis/13-JOURNEY-DECISION-MATRIX.md`
- `docs/01-genesis/14-JOURNEY-EDGE-CASES.md`
- `docs/03-architecture-decisions/ADR-XXX-PRE-REGISTRATION-BUSINESS-DISCOVERY.md`
- `docs/08-implementation-audit/BUSINESS-DISCOVERY-JOURNEY-AUTHORITY-CROSSWALK-v0.1.md`

Follow actual repository organization and numbering.

Preserve historical documents. Do not rewrite history or silently supersede authority.

---

# Phase 13 — Open Questions Register

Do not invent answers. Include and classify at minimum:

- Anonymous retention and deletion policy.
- Cookie/storage-free operation.
- Cross-device recovery and magic-link requirements.
- Multiple active sessions and replacement rules.
- Snapshot failure, staleness, and regeneration policy.
- Confidence/evidence-strength calculation.
- Setup-effort estimation model.
- When email is requested.
- Whether Snapshot email/export is allowed without an account.
- Personal-data classification and marketing-consent separation.
- Session claim proof and concurrency.
- Whether existing users may import into existing Businesses.
- Import into a Business with published DNA.
- Who may confirm evidence.
- Workspace and Business selector timing.
- Provisional versus Official Recommendation criteria.
- Core Workspace Ready criteria and evaluation point.
- Recommendation staleness.
- Consultant and Partner ownership/delegation.
- Marketplace relationship to Product Hub.

---

# Phase 14 — Traceability and Quality Gates

Every new or updated document must link to relevant parent authority, Constitution, Genesis, Ontology, Customer Journey, Business Architect, Business DNA, Product Hub, Marketplace, Operating System, readiness, ADRs, historical references, and open conflicts.

Build a traceability matrix with requirement/decision ID, source authority, target document, journey stage, state affected, owner, conflict status, and review status.

Before declaring Stage B ready, report pass/fail with reasons for:

- Authority Gate.
- Ontology Gate.
- Journey Gate.
- State-Model Gate.
- Evidence and Provenance Gate.
- UX Gate.
- Security and Privacy Gate.
- Traceability Gate.
- Completeness Gate.

Do not claim completeness when a gate fails.

Add Mermaid diagrams where they improve precision, including the branched primary journey, orthogonal anonymous-session states, claim/import sequence, evidence transition, readiness resolution, persona routing, and ownership boundaries.

Diagrams must match written terminology and must not create premature implementation contracts.

---

# Phase 15 — Required Final Reports

## Stage A Report

Provide:

- Files read, grouped by classification.
- Authority precedence findings.
- Conflict register.
- Authority/impact crosswalk.
- Proposed file plan.
- Blocking open questions.
- Stage B readiness recommendation.
- Explicit confirmation that no documentation or code files were changed.
- The required checkpoint sentence.

## Stage B Report

After explicit authorization and documentation changes, provide:

- Files read.
- Files created, updated, and deleted.
- Decisions documented and their status.
- Conflicts found.
- Open questions.
- Human reviews required by discipline.
- Quality-gate results.
- Justified completeness assessment.
- `git diff --stat` and major diff summary.
- Documentation-only safety confirmation.
- Publish-state confirmation.

State explicitly:

> This task was Documentation Only. No application code, frontend code, backend code, API, database schema, test, package, route, build configuration, or runtime configuration was modified.

Also confirm whether commits, pushes, or pull requests occurred. Do not claim none occurred if execution context proves otherwise.

---

# Final Execution Rules

- Begin with Stage A and Phase 0.
- Stop at the human checkpoint.
- Review before writing.
- Preserve authority before adding detail.
- Do not invent decisions, states, permissions, readiness rules, or scoring models.
- Do not hide conflicts.
- Do not modify code.
- Do not create duplicate documents unnecessarily.
- Keep Discovery Evidence distinct from Business DNA.
- Keep Provisional distinct from Official Recommendations.
- Keep Entry Intent distinct from fit evidence.
- Keep claim distinct from Business import.
- Model orthogonal session dimensions rather than forcing a misleading linear enum.
- Do not grant readiness from Discovery.
- Resolve Core Workspace Ready using existing authority.
- Do not send every persona through the Owner journey.
- Do not collapse Product Hub, Marketplace, and Operating System setup without authority.
- Treat Marketplace as a recurring discovery/growth destination, not only a terminal step.
- Do not declare the proposal final without formal authority review.
- Prefer explicit open questions over unsupported assumptions.
- Produce documentation that can later guide UX, frontend state, backend contracts, and testing without prematurely defining implementation details.
