# Master Prompt — Business Discovery & Customer Journey Authority

> Use this prompt with Codex inside the `Nexoraxs-V3.1` repository.
>
> This is a documentation-governance task. It must not modify application code.

---

## Role and Operating Context

You are acting as a senior product architect, enterprise UX architect, documentation authority reviewer, and architecture-governance analyst inside the Nexoraxs repository.

Your task is to review the current authoritative documentation under:

`docs/`

Then create a formal documentation package that updates the customer journey and introduces a pre-registration value stage named:

`Business Discovery Preview`

The work must preserve the existing Nexoraxs architecture, ontology, constitutional principles, authority hierarchy, product boundaries, and historical traceability.

This task is strictly:

`Documentation Only`

Do not modify:

- Application code.
- Frontend components.
- Routes.
- APIs.
- Database schemas.
- Tests.
- Packages.
- CI workflows.
- Build configuration.
- Runtime behavior.

Do not create commits, push branches, or open pull requests unless explicitly requested in a later instruction.

---

# Phase 0 — Authority Review Before Writing

Before creating or modifying any document, review the documentation structure and identify the current authority model.

At minimum, inspect documents related to:

- Constitution.
- Genesis.
- Ontology.
- Core architecture.
- Customer journey.
- Workspace and Business boundaries.
- Business Architect.
- Business DNA.
- Recommendations.
- Product Hub.
- Operating Systems.
- Readiness states.
- Identity and membership.
- Subscription, entitlement, installation, activation, and setup.
- Existing ADRs.
- Historical audits and crosswalks.

## 0.1 Document Classification

Classify every materially relevant document as one of:

- `Authoritative`
- `Supporting`
- `Historical`
- `Draft`
- `Conflicting`
- `Superseded`
- `Requires Clarification`
- `Missing`

Do not change a document's authority status merely because its language is older or inconvenient.

## 0.2 Authority Precedence

Determine the repository's existing precedence rules. If no explicit precedence model exists, record that as a governance gap.

Never silently assume that a newer file automatically supersedes an older authoritative file.

## 0.3 Conflict Register

Before resolving anything, identify every conflict that affects this task.

For each conflict record:

- Conflict ID.
- Documents involved.
- Conflicting statements.
- Existing authority level.
- Impacted journey stage.
- Risk if left unresolved.
- Classification:
  - Product Decision.
  - Architecture Decision.
  - UX Decision.
  - Security or Privacy Decision.
  - Technical Governance Decision.
- Recommended handling.
- Status:
  - Resolved by existing authority.
  - Proposed resolution.
  - Requires human decision.

Do not silently resolve conflicts.

## 0.4 Authority Crosswalk

Produce a crosswalk connecting the proposed journey decisions to existing authority.

The crosswalk must include:

- Proposed decision.
- Supporting source documents.
- Potential conflicts.
- Documents requiring updates.
- ADR impact.
- Ontology impact.
- State-machine impact.
- UX impact.
- Implementation impact, without changing code.

Only after completing Phase 0 may you create or update the journey documents.

---

# Phase 1 — Architectural Guardrails

Preserve the following principles unless an existing higher-authority document explicitly contradicts them. If a contradiction exists, report it rather than overriding it.

- Business DNA belongs to `Business`, not `Workspace`.
- A Workspace may contain multiple Businesses.
- A Business may contain Business Units.
- Business Units may contain Branches or Departments according to existing ontology.
- Business Architect officially begins only after a formal Business exists.
- Product Hub presents and compares recommendations; it does not own Operating System setup.
- An Operating System owns its product-specific setup and operational readiness.
- `Core Workspace Ready` and `Operating System Ready` are separate states.
- Discovery evidence is not Business DNA.
- Provisional recommendations are not official recommendations.
- Entry intent is contextual metadata, not evidence of business fit.
- The platform understands the business before recommending software.
- The software adapts to the business.
- The customer should feel they are building their business, not configuring software.
- Infer before asking.
- Knowledge before AI.
- Capability-first reasoning must not be replaced with a product funnel.

---

# Phase 2 — Core Architectural Decision

Document the following decision:

> Business Discovery Preview is a pre-registration value demonstration. It never creates or publishes Business DNA. Upon account creation, its collected answers are imported as draft evidence into the official Business Architect pipeline, where the customer reviews, confirms, or edits them before Core Business DNA is published.

## 2.1 Decision Status

Use:

`Proposed for Authority Review`

Do not mark the decision as:

- Final.
- Frozen.
- Approved.
- Accepted.
- Superseded.

unless the repository contains a formal approval process and the current instruction explicitly authorizes completing that process.

## 2.2 North Star

Record the following as the journey North Star:

> Every interaction must increase business understanding or deliver measurable value. If it does neither, it does not belong in the journey.

Add these governing principles:

1. Value before commitment.
2. Understand before recommending.
3. Every question must influence a decision, profile, recommendation, setup step, evidence record, or personalization outcome.
4. Registration exists to save and continue value, not to unlock the first value.
5. Official Business Architect begins only after a Business exists.
6. The journey differs by persona.
7. Entry intent personalizes the journey but does not replace business understanding.
8. Every interruptible step defines exit, persistence, expiry, and resume behavior.
9. Discovery gathers evidence; it does not create formal organization entities.
10. Recommendations shown before Business DNA publication are provisional.
11. Exact percentages, scores, or setup-time estimates require an explainable documented model.
12. Empty dashboards are not valid default onboarding outcomes.

---

# Phase 3 — Customer Journey v2

Document the following as the proposed primary journey for a prospective Workspace Owner:

```text
Visitor
→ Marketing Entry
→ Optional Business Discovery Preview
→ Business Health Snapshot
→ Save Assessment / Continue
→ Create Account
→ Verify Identity
→ Create or Select Workspace
→ Create or Select Business
→ Claim Anonymous Discovery Session
→ Import Discovery as Draft Evidence
→ Continue Official Business Architect
→ Review and Confirm Evidence
→ Publish Core Business DNA
→ Generate Explainable Official Recommendations
→ Core Workspace Ready
→ Product Hub
→ Select Operating System
→ Select Plan
→ Subscription or Trial
→ Entitlement Resolution
→ Installation
→ Operating System Setup
→ Operating System Ready
→ Operational Dashboard
→ Daily Operations
→ Growth
→ Marketplace
```

## 3.1 Journey Rules

- Discovery is optional.
- A visitor may skip Discovery and create an account.
- Discovery completion does not create Workspace, Business, membership, Business DNA, subscription, installation, or readiness.
- Account creation must not destroy the completed snapshot.
- Registration must be framed as saving and continuing value.
- After registration, imported answers remain draft evidence.
- The user reviews, confirms, corrects, or rejects evidence inside Business Architect.
- Business DNA cannot be published automatically from anonymous evidence.
- Product Hub becomes authoritative only after official recommendation generation.
- Operating System setup begins after installation and entitlement conditions are satisfied.
- A user returning later resumes from the latest valid state, not from the beginning.

## 3.2 Core State Distinction

Document explicitly:

```text
Discovery Completed
≠ Business Architect Completed
≠ Core Business DNA Published
≠ Core Workspace Ready
≠ Operating System Installed
≠ Operating System Ready
```

---

# Phase 4 — Business Discovery Preview Specification

Create a dedicated specification for `Business Discovery Preview`.

## 4.1 Purpose

- Deliver meaningful value before registration.
- Demonstrate that Nexoraxs can understand a business.
- Produce an initial Business Health Snapshot.
- Gather minimum necessary evidence.
- Reduce signup friction.
- Increase informed conversion.
- Prepare draft evidence for Business Architect after account creation.

## 4.2 Scope

The Discovery Preview:

- Is designed primarily for a Visitor or Prospective Owner.
- May be started anonymously.
- Is optional.
- Can be skipped.
- Uses adaptive questioning.
- Can preserve marketing and referral context.
- Produces provisional analysis.
- Produces a snapshot, not an official Business record.
- Supports interruption and resume according to documented session policy.

## 4.3 Non-Goals

It must not:

- Create a Workspace.
- Create a Business.
- Create membership.
- Publish Business DNA.
- Produce official recommendations.
- Grant a readiness state.
- Activate an Operating System.
- Start a paid subscription.
- Replace Business Architect.
- Act as a traditional lead form.
- Force a product-specific outcome.
- Treat anonymous answers as final truth.

## 4.4 Experience Principles

The Discovery should feel like an intelligent conversation rather than a long questionnaire.

Apply:

- Infer Before Asking.
- Minimum Necessary Questions.
- Progressive Disclosure.
- Adaptive Questioning.
- Plain business language.
- Explain why a question is asked when useful.
- Avoid technical platform terminology.
- Avoid asking for information already known with sufficient confidence.
- Allow correction of inferred assumptions.
- Show growing business understanding rather than only form completion.

Example:

```text
Business Understanding

Known:
✓ Business type
✓ Revenue model
✓ Locations

Still needed:
- Main operational challenge
- First improvement goal
```

## 4.5 Question Eligibility Rule

Every question must affect at least one of:

- Business profile.
- Business model understanding.
- Operational complexity.
- Capability recommendation.
- Provisional Operating System suggestion.
- Risk identification.
- Business Architect draft evidence.
- Future setup reduction.
- Personalization.

If a question affects none of these, remove it.

## 4.6 Business Health Snapshot

The first value must not be merely a product recommendation.

The snapshot may contain, when evidence supports it:

- Business Type.
- Business Model.
- Business Stage.
- Approximate Operational Complexity.
- Number and type of Locations.
- Current Challenges.
- Operational Risks.
- Improvement Opportunities.
- Recommended Capabilities.
- Potentially Suitable Operating Systems.
- Recommendation Explanation.
- Missing Information.
- Evidence Strength.
- Confidence classification.
- Estimated Setup Effort only if supported by a documented model.
- CTA to save the snapshot and continue.

The snapshot must distinguish:

- User-provided facts.
- Observed context.
- Inferred assumptions.
- Low-confidence conclusions.
- Provisional recommendations.
- Missing evidence.

Do not display numerical confidence such as `91%` or `98%` unless a documented, testable, explainable scoring model exists.

Otherwise use:

- Strong fit.
- Possible fit.
- Weak evidence.
- More information required.
- Not currently recommended.

## 4.7 Success Criteria

Define measurable success criteria without inventing target values, including:

- Discovery start rate.
- Completion rate.
- Snapshot view rate.
- Signup-after-value rate.
- Evidence confirmation rate.
- Evidence correction rate.
- Business Architect time reduction.
- Recommendation acceptance rate.
- Abandonment points.
- Privacy deletion completion.

---

# Phase 5 — Entry Points and Intent

Document these entry types:

## 5.1 General Marketing Entry

```text
Marketing Website
→ General Discovery
→ Business Health Snapshot
```

## 5.2 Product Intent Entry

Example:

```text
Commerce Landing Page
→ Discovery with Commerce Intent
→ General Business Analysis
→ Commerce highlighted only when evidence supports it
```

Possible Entry Intent values may include:

- Commerce.
- EasyCar.
- POS.
- CRM.
- Marketplace.
- Referral.
- Campaign.
- Consultant link.
- Partner link.

Preserve:

- Entry source.
- Campaign identifier.
- Referral identifier.
- Intended product or Operating System.
- Locale.
- Session context.
- Timestamp.

Authority rule:

> Entry Intent may prioritize presentation and explain relevance, but it must never fabricate Business Fit, Confidence, Business DNA, or recommendation evidence.

If the user entered from Commerce, present Commerce as `Original Interest`, not as a guaranteed recommendation.

## 5.3 Invitation Entry

Invited users do not follow the Owner journey by default.

```text
Invitation
→ Sign Up or Login
→ Resolve Invitation Identity
→ Accept Membership
→ Resolve Workspace and Business Context
→ Authorized Destination or Required Role Setup
```

## 5.4 Existing Account Entry

```text
Login
→ Resolve Active Workspace
→ Resolve Active Business
→ Resolve Permissions
→ Resume Pending Journey or Open Authorized Destination
```

## 5.5 Direct Resume Entry

Document resume behavior for links that target:

- Discovery.
- Snapshot.
- Verification.
- Workspace creation.
- Business creation.
- Business Architect.
- Product Hub.
- Installation.
- Operating System setup.
- Billing recovery.

All deep links must be permission-aware and state-aware.

---

# Phase 6 — Personas and Journey Separation

Separate the following personas without inventing permissions not supported by current authority:

## 6.1 Visitor

May browse marketing and start anonymous Discovery.

## 6.2 Prospective Owner

May complete Discovery, create an account, create a Workspace and Business, and continue Business Architect.

## 6.3 Workspace Owner

May manage Workspace-level responsibilities according to existing authority and create or select Businesses when permitted.

## 6.4 Workspace Admin

Does not automatically own Business DNA. Capabilities depend on explicit membership and permissions.

## 6.5 Business Admin

May manage Business-level onboarding and Business Architect only when authorized.

## 6.6 Manager

Usually enters an authorized operating context and does not follow the Owner acquisition journey.

## 6.7 Employee

Usually accepts an invitation and enters an authorized destination.

## 6.8 Invited User

Follows invitation resolution, not Discovery, unless explicitly starting a separate Owner journey.

## 6.9 Consultant

May conduct Discovery or Business Architect on behalf of a client only through explicit delegation, attribution, and ownership rules.

## 6.10 Partner or Reseller

May initiate or manage customer journeys only under explicit authority. Partner status must not automatically grant ownership of client Workspace, Business, or Business DNA.

For each persona document:

- Entry points.
- Authentication state.
- Ownership assumptions.
- Allowed actions.
- Prohibited actions.
- Default destination.
- Resume behavior.
- Required authorization.

---

# Phase 7 — Anonymous Discovery Session Model

Document a conceptual session model without creating database schemas.

## 7.1 Lifecycle States

- `created`
- `in_progress`
- `completed`
- `result_generated`
- `abandoned`
- `expired`
- `claimed`
- `imported`
- `deleted`
- `replaced`

Reuse existing naming conventions if authoritative documentation defines alternatives.

## 7.2 Required Concepts

The conceptual model should include:

- Session identifier.
- Entry intent.
- Locale.
- Created timestamp.
- Updated timestamp.
- Expiry policy reference.
- Current state.
- Question progress.
- Temporary answers.
- Inferred evidence.
- Evidence provenance.
- Snapshot version.
- Claim status.
- Import status.
- Deletion status.

Do not define physical storage, table names, API shapes, or implementation details.

## 7.3 Claim and Import Flow

```text
Anonymous Discovery
→ User Chooses Save or Continue
→ Create Account or Login
→ Verify Identity
→ Authorize Session Claim
→ Create or Select Workspace
→ Create or Select Business
→ Import Discovery Evidence
→ Review
→ Confirm, Correct, or Reject
```

## 7.4 Claim Rules

- A session must not attach to a formal Business before explicit claim and authorization.
- Claim does not publish Business DNA.
- Claim does not prove that every answer is accurate.
- Imported items retain source and provenance.
- Duplicate claims must be handled deterministically.
- A session already claimed by another account must not be silently reassigned.
- Cross-device recovery requires an explicit secure mechanism.
- Retention duration is configuration and policy, not a hard-coded documentation constant.

## 7.5 Privacy Boundaries

Document:

- Data minimization.
- Consent boundaries.
- Cookie or storage dependency questions.
- Anonymous identifier handling.
- Deletion requests.
- Expiry.
- Claim authorization.
- Cross-device recovery risks.
- Personal-data classification.
- Marketing-consent separation.
- Prohibition on treating Discovery participation as marketing consent.

---

# Phase 8 — Business Architect Evidence Import

Preserve the current Business Architect state machine. Add only what is required to explain Discovery evidence import.

Reference flow, only if compatible with current authority:

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
- It cannot move a Business directly to `published`.
- It cannot move a Business directly to `completed`.
- Evidence must retain provenance.
- User confirmation must be recorded separately from the original anonymous answer.
- User corrections must not erase historical provenance.
- Rejected evidence must remain auditable according to existing governance.
- Official recommendations trigger only after the required Business DNA publication or equivalent authoritative state.

Document the distinction between:

- Discovery Answer.
- Discovery Inference.
- Imported Draft Evidence.
- Confirmed Evidence.
- Business DNA Draft.
- Published Core Business DNA.
- Provisional Recommendation.
- Official Recommendation.

---

# Phase 9 — Ownership Boundaries

Document responsibility boundaries clearly.

## 9.1 Marketing Website Owns

- Entry experience.
- Campaign context.
- Product intent capture.
- Discovery launch.
- Anonymous-session initiation request.
- Snapshot presentation.
- Conversion CTA.

## 9.2 Discovery Capability or Service Owns

- Adaptive questions.
- Temporary answers.
- Evidence inference.
- Snapshot generation.
- Confidence or evidence-strength explanation.
- Provenance.
- Session lifecycle.

Do not require a separately deployed service unless existing architecture says so. Treat this as a logical ownership boundary.

## 9.3 Identity Owns

- Account creation.
- Authentication.
- Identity verification.
- Session claim authorization.

## 9.4 Core Platform Owns

- Workspace.
- Business.
- Membership.
- Organization registry.
- Active context resolution.

## 9.5 Business Architect Owns

- Evidence review.
- Confirmation and correction.
- Business understanding.
- Business DNA draft.
- Business DNA publication.
- Provenance and versioning.
- Official recommendation trigger.

## 9.6 Product Hub Owns

- Recommendation presentation.
- Capability mapping.
- Product or Operating System comparison.
- Plan selection experience.
- Subscription handoff.
- Installation initiation.

## 9.7 Operating System Owns

- Product-specific setup.
- Operational configuration.
- Activation.
- Operating System readiness.
- Daily operational experience.

## 9.8 Billing or Subscription Capability Owns

Where compatible with existing architecture:

- Trial eligibility.
- Plan entitlement.
- Payment state.
- Subscription state.
- Billing recovery.

Do not allow billing state to redefine Business DNA or recommendation evidence.

---

# Phase 10 — Journey Decision Matrix

Create a formal decision matrix covering at minimum:

- Entry type.
- User persona.
- Authentication state.
- Verification state.
- Invitation state.
- Workspace count.
- Active Workspace state.
- Business count.
- Active Business state.
- Permission state.
- Discovery state.
- Business Architect state.
- Business DNA state.
- Recommendation state.
- Subscription or trial state.
- Installation state.
- Operating System setup state.
- Readiness state.
- Destination.
- Required action.
- Allowed skip.
- Blocking condition.
- Persistence requirement.
- Resume behavior.
- Ownership boundary.

Include at least these baseline decisions:

```text
Visitor + No Discovery
→ Marketing
→ Start Discovery or Create Account

Visitor + Discovery In Progress
→ Resume or Restart Discovery

Visitor + Discovery Completed
→ View Snapshot
→ Create Account to Save and Continue

Authenticated User + Unverified Identity
→ Verification Recovery

Authenticated User + No Workspace
→ Create Workspace

Authenticated User + Workspace + No Business
→ Create Business

Authenticated User + Business + No Published DNA
→ Business Architect

Authenticated User + Published DNA + No OS
→ Product Hub

Authenticated User + OS Installation Pending
→ Resume Installation

Authenticated User + OS Setup Pending
→ Resume OS Setup

Authenticated User + OS Ready
→ Operational Dashboard

Invited User
→ Accept Invitation
→ Authorized Destination
```

Do not force a single destination when permissions or multiple contexts require a selector.

---

# Phase 11 — Edge Case Matrix

Create a dedicated edge-case document. For every case include:

- Edge Case ID.
- Trigger.
- Preconditions.
- Expected user experience.
- Persistence requirement.
- Resume destination.
- Ownership boundary.
- Error or fallback behavior.
- Security or privacy consideration.
- Blocking or non-blocking status.
- Human decision required, if any.

Cover at least:

## Discovery and Anonymous State

- Visitor skips Discovery.
- Visitor abandons Discovery.
- Visitor returns in the same browser.
- Visitor returns from another browser or device.
- Anonymous session expires.
- User clears browser storage.
- Cookies or storage are unavailable.
- Discovery is completed on another device.
- Session claim fails.
- Session is already linked to another account.
- Duplicate Discovery sessions exist.
- Existing user starts a new Discovery.
- A newer Discovery replaces an older one.
- Low-confidence snapshot.
- Unsupported business type.
- Multiple business models.
- Language changes during Discovery.
- Region changes during Discovery.
- Privacy deletion request.

## Identity and Verification

- Account creation fails.
- Verification is delayed.
- Verification link expires.
- User signs up with a different email.
- User logs in instead of creating a new account.
- Social-login identity conflicts with an existing account.
- Invitation email differs from logged-in email.

## Workspace, Business, and Context

- User has no Workspace.
- User has multiple Workspaces.
- User has no Business.
- Workspace contains multiple Businesses.
- Business is not selected.
- Workspace is suspended.
- Business is suspended.
- User switches Workspace.
- User switches Business.
- User switches Business Unit.
- User switches Branch.
- Active context becomes invalid.

## Invitation and Permissions

- Invitation is opened by an authenticated user.
- Invitation expires.
- Invitation is revoked.
- User is invited while Discovery is active.
- User lacks required permission.
- Role changes during onboarding.
- Membership is revoked during onboarding.
- Consultant loses delegation.
- Partner access is restricted.

## Business Architect and Business DNA

- Business Architect is incomplete.
- Business Architect is abandoned and resumed.
- Imported evidence conflicts with existing Business data.
- User rejects imported evidence.
- Business DNA requires review.
- Business DNA is outdated.
- Business DNA is already published when new Discovery is imported.
- Multiple authorized users edit understanding concurrently.

## Recommendations and Product Hub

- Product intent conflicts with business analysis.
- User rejects the recommended Operating System.
- No Operating System is a strong fit.
- Recommendation confidence is low.
- Recommendation becomes stale.
- Recommended capability has no available product.
- User selects a non-recommended Operating System.

## Subscription, Installation, and Setup

- Trial is unavailable.
- Trial expires.
- Trial expires during setup.
- Payment fails.
- Subscription remains pending.
- Entitlement is missing.
- Installation fails.
- Installation partially completes.
- Installation is retried.
- Setup is abandoned.
- Activation fails.
- Operating System is removed.
- Subscription changes during installation.
- User loses permission during setup.

## Consultant and Partner

- Consultant creates a Business for a client.
- Client ownership is not yet established.
- Consultant and client disagree on evidence.
- Partner manages multiple customers.
- Partner attempts to claim a client session.
- Partner relationship ends during onboarding.

---

# Phase 12 — ADR

Create a formal ADR for the separation between pre-registration Discovery and official Business Architect.

Suggested name:

`ADR-XXX-PRE-REGISTRATION-BUSINESS-DISCOVERY.md`

Choose the next valid ADR number after checking existing files.

The ADR must include:

- Title.
- Status: `Proposed for Authority Review` or repository-equivalent.
- Context.
- Problem.
- Decision.
- Decision drivers.
- Rationale.
- Alternatives considered.
- Consequences.
- Positive consequences.
- Negative consequences.
- Risks.
- Security implications.
- Privacy implications.
- Data lifecycle.
- Ownership boundaries.
- State-machine implications.
- Migration impact.
- Documentation impact.
- Implementation impact, without modifying code.
- Open questions.
- Related authority.

## 12.1 Rejected Alternatives

Document why these are not selected:

### Mandatory Account First

Rejected because it delays first value and increases acquisition friction.

### Discovery as Business Architect

Rejected because official Business Architect requires formal Business context and owns Business DNA governance, provenance, review, and versioning.

### Discovery Publishes Business DNA

Rejected because anonymous and unconfirmed data cannot become official Business truth.

### Product-Specific Discovery Only

Rejected because it creates a product funnel, biases evidence, and conflicts with capability-first business understanding.

### Direct Dashboard after Signup

Rejected because it creates an empty dashboard and bypasses Business Understanding and readiness.

### Entry Intent Determines Recommendation

Rejected because marketing intent is not business evidence.

---

# Phase 13 — Traceability Requirements

Every new or updated document must contain a traceability section.

Include, as applicable:

- Parent authority.
- Related Constitution clauses.
- Related Genesis documents.
- Related Ontology definitions.
- Related Customer Journey documents.
- Related Business Architect documents.
- Related Business DNA documents.
- Related Product Hub documents.
- Related Operating System documents.
- Related readiness definitions.
- Related ADRs.
- Superseded or historical references.
- Open conflicts.

Build a traceability matrix with columns:

- Requirement or decision ID.
- Source authority.
- Target document.
- Journey stage.
- State affected.
- Owner.
- Conflict status.
- Review status.

Do not create orphan documents.

---

# Phase 14 — Documentation Files

Review existing files first. Do not create duplicates when an authoritative file already serves the purpose.

Create or update the most appropriate files for:

1. Customer Journey v2.
2. Business Discovery Preview specification.
3. Journey Decision Matrix.
4. Customer Journey Edge Cases.
5. ADR for pre-registration Business Discovery.
6. Authority and Impact Crosswalk.

Suggested paths may include:

- `docs/01-genesis/11-CUSTOMER-JOURNEY.md`
- `docs/01-genesis/12-BUSINESS-DISCOVERY-PREVIEW.md`
- `docs/01-genesis/13-JOURNEY-DECISION-MATRIX.md`
- `docs/01-genesis/14-JOURNEY-EDGE-CASES.md`
- `docs/03-architecture-decisions/ADR-XXX-PRE-REGISTRATION-BUSINESS-DISCOVERY.md`
- `docs/08-implementation-audit/BUSINESS-DISCOVERY-JOURNEY-AUTHORITY-CROSSWALK-v0.1.md`

These paths are suggestions only. Follow the repository's actual documentation organization and numbering rules.

When an existing document must remain historical:

- Do not delete it.
- Do not rewrite history.
- Link it to the new proposal.
- State whether it remains authoritative, partially superseded, or historical.
- Record the basis for any proposed supersession.

---

# Phase 15 — Open Questions Register

Create a clearly visible open-questions register. Do not invent answers.

Include at least:

- Anonymous Discovery retention period.
- Cross-device recovery support.
- Whether recovery requires a magic link.
- Whether multiple active Discovery sessions are allowed.
- Session replacement rules.
- Confidence or evidence-strength calculation.
- Whether setup-effort estimates may be shown before a validated model exists.
- Whether Discovery can operate without cookies.
- When email is requested.
- Whether a snapshot can be emailed without account creation.
- Whether anonymous sessions contain personal data.
- Anonymous-session deletion policy.
- Marketing-consent separation.
- Consultant ownership and delegation.
- Partner ownership and delegation.
- Whether a Business can ever exist before Workspace in any approved scenario.
- When Workspace Selector appears.
- When Business Selector appears.
- How Provisional Recommendation differs from Official Recommendation.
- Whether an existing user can claim an anonymous session into an existing Business.
- Whether imported Discovery can update already published Business DNA.
- Who may confirm evidence on behalf of a Business.
- Concurrency and versioning behavior.
- Recommendation staleness policy.

Classify every open question as:

- Product.
- Architecture.
- UX.
- Security.
- Privacy.
- Data Governance.
- Commercial.
- Technical Governance.

---

# Phase 16 — Conflict Resolution Rules

Apply these rules:

1. Never resolve a conflict silently.
2. Never overwrite higher authority with a lower-authority proposal.
3. Never treat file age alone as authority.
4. Never invent a missing state or permission as established fact.
5. Never merge Workspace and Business concepts.
6. Never merge Capability and Operating System concepts.
7. Never merge Discovery Evidence and Business DNA.
8. Never merge Provisional and Official Recommendations.
9. Never let Product Hub own Operating System setup.
10. Never let Discovery create readiness.
11. Never let Entry Intent manufacture fit.
12. Never delete historical decisions without traceability.

When conflict exists, choose one of:

- Preserve existing authority and adapt proposal.
- Propose a new ADR.
- Mark as requiring Product decision.
- Mark as requiring Architecture decision.
- Mark as requiring UX decision.
- Mark as requiring Security or Privacy decision.

---

# Phase 17 — Documentation Quality Gates

Before declaring the documentation package ready for review, verify all gates.

## 17.1 Authority Gate

- Relevant authority reviewed.
- Conflicts registered.
- No silent supersession.
- Status remains Proposed unless formally approved.

## 17.2 Ontology Gate

- Workspace is distinct from Business.
- Business DNA belongs to Business.
- Capability is distinct from Operating System.
- Membership and ownership are not conflated.
- Readiness states remain distinct.

## 17.3 Journey Gate

- Owner journey is documented.
- Invitation journey is documented.
- Existing-account journey is documented.
- Consultant and Partner boundaries are documented.
- Skip, exit, resume, expiry, and recovery behavior are covered.

## 17.4 Evidence Gate

- Discovery evidence is provisional.
- Provenance is preserved.
- User confirmation is distinct from original input.
- Business DNA cannot be auto-published.
- Official recommendations require official business understanding.

## 17.5 UX Gate

- Value appears before commitment.
- Discovery is not a long generic questionnaire.
- Questions are adaptive and purposeful.
- Empty dashboard is avoided.
- Entry intent does not bias truth.
- Low confidence is communicated honestly.

## 17.6 Privacy and Security Gate

- Anonymous data lifecycle is documented.
- Claim authorization is documented.
- Deletion and expiry are documented.
- Marketing consent is separate.
- Cross-device recovery risks are recorded.
- Personal-data questions are explicit.

## 17.7 Traceability Gate

- Every major decision has a source or ADR.
- Every new document links to related authority.
- Crosswalk is complete.
- Historical documents are preserved.

## 17.8 Completeness Gate

- Main flow documented.
- Decision matrix created.
- Edge-case matrix created.
- State distinctions documented.
- Open questions registered.
- Human decisions clearly identified.

Do not claim the package is complete if a gate fails. Report the failed gate and reason.

---

# Phase 18 — Mermaid and Diagram Requirements

Add diagrams where they improve precision.

At minimum consider:

- Primary customer journey flowchart.
- Anonymous Discovery lifecycle state diagram.
- Claim and import sequence diagram.
- Business Architect evidence transition diagram.
- Readiness separation diagram.
- Persona entry-routing diagram.
- Ownership-boundary diagram.

Diagrams must:

- Use terminology from current authority.
- Avoid creating implementation contracts.
- Match the written state definitions.
- Be readable in GitHub Markdown.

---

# Phase 19 — Required Final Report

After completing the documentation changes, provide a structured report containing:

## 19.1 Files Read

List all materially reviewed documents, grouped by:

- Authoritative.
- Supporting.
- Historical.
- Conflicting.

## 19.2 Files Created

For each file include:

- Path.
- Purpose.
- Authority status.

## 19.3 Files Updated

For each file include:

- Path.
- Sections changed.
- Reason.
- Whether previous meaning was preserved.

## 19.4 Decisions Documented

List every major decision and its status.

## 19.5 Conflicts Found

For each conflict include:

- Conflict ID.
- Documents.
- Impact.
- Proposed resolution.
- Human decision required.

## 19.6 Open Questions

List and classify all unresolved questions.

## 19.7 Human Review Required

Separate:

- Product review.
- Architecture review.
- UX review.
- Security review.
- Privacy review.
- Governance review.

## 19.8 Quality Gate Results

Report pass or fail for every gate in Phase 17 with justification.

## 19.9 Completeness Assessment

Provide an approximate, justified completion percentage for Journey Authority.

Do not use a percentage without explaining:

- What is complete.
- What remains unresolved.
- Which missing decisions block authority approval.

## 19.10 Code Safety Confirmation

State explicitly:

> This task was Documentation Only. No application code, frontend code, backend code, API, database schema, test, package, route, build configuration, or runtime configuration was modified.

## 19.11 Diff Summary

Provide:

- `git diff --stat`
- Created-file count.
- Updated-file count.
- Deleted-file count.
- Major diff summary.

## 19.12 No Publish Confirmation

Confirm:

- No commit was created.
- No push occurred.
- No pull request was opened.

unless later instructions explicitly authorize those actions.

---

# Final Execution Rules

- Review before writing.
- Preserve authority before adding detail.
- Do not invent decisions.
- Do not hide conflicts.
- Do not modify code.
- Do not create duplicate documents unnecessarily.
- Do not publish anonymous evidence as Business DNA.
- Do not treat Entry Intent as recommendation evidence.
- Do not grant readiness from Discovery.
- Do not send every persona through the Owner journey.
- Do not collapse Product Hub and Operating System setup.
- Do not declare the proposal final without authority review.
- Prefer explicit open questions over unsupported assumptions.
- Produce documentation that can later guide UX, frontend state, backend contracts, and testing without prematurely specifying implementation details.

Begin with Phase 0 and do not skip it.