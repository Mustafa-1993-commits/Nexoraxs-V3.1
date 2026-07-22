# Wave 2 Prompt — Business Discovery Customer Journey v2 Documentation Package

> Use this prompt with Codex inside the `Nexoraxs-V3.1` repository on branch:
>
> `docs/business-discovery-authority-prompt`
>
> This is a bounded documentation-governance task. It does not authorize implementation, Genesis edits, Freeze edits, ADR acceptance, or application-code changes.

---

## Role

Act as a senior product architect, enterprise UX architect, documentation-governance analyst, security-aware domain architect, lifecycle modeller, and authority reviewer inside the Nexoraxs repository.

Your task is to execute **Business Discovery Wave 2 only**, and only when the Human Architecture Review gate defined below is satisfied.

Wave 2 converts an approved Wave 1 proposal direction into a detailed, non-authoritative Customer Journey v2 documentation package for further human review.

It must not convert proposal concepts into accepted architecture or implementation contracts.

---

# 1. Mandatory Human Architecture Review Gate

Before modifying any file, inspect the repository for an explicit written Human Architecture Review outcome covering the refined Wave 1 package.

The review must explicitly authorize **Wave 2 documentation** and must identify the governing commit or reviewed Wave 1 artifacts.

Acceptable evidence includes one of the following:

- a repository governance review artifact explicitly approving progression to Wave 2;
- an Architecture Review decision record explicitly authorizing the bounded Wave 2 documentation package;
- an explicit human approval note inside the Wave 1 proposal package or an authorized governance register;
- another repository-traceable human decision that clearly states Wave 2 may proceed.

The evidence must not merely say that Wave 1 is complete, technically valid, refined, reviewed by Codex, or ready for review.

## If the gate is not satisfied

Do not create or modify any Wave 2 deliverable.

Produce a read-only completion report containing:

1. the Wave 1 artifacts inspected;
2. the approval evidence searched for;
3. why the Human Architecture Review gate is not satisfied;
4. the exact minimum human decision required;
5. confirmation that no files were modified.

Then stop.

Do not infer approval from:

- the existence of ADR-042;
- ADR-042 remaining `Proposed`;
- completion of Wave 1 refinement;
- a previous AI review;
- a commit message;
- branch state;
- absence of objections;
- the user's product intent alone.

---

# 2. Governing Inputs

When the Human Architecture Review gate is satisfied, inspect and use the latest branch versions of:

```text
docs/00-governance/ADR/ADR-042-pre-registration-business-discovery.md
docs/00-governance/proposals/business-discovery-preview/00-BUSINESS-DISCOVERY-PREVIEW-PROPOSAL.md
docs/00-governance/proposals/business-discovery-preview/01-AUTHORITY-AND-IMPACT-CROSSWALK.md
docs/00-governance/proposals/business-discovery-preview/02-OPEN-QUESTIONS-REGISTER.md
```

Also inspect all authority referenced by those files, including applicable:

- Constitution and authority-order documents;
- Milestone Lifecycle and ADR governance;
- Genesis Customer Journey and related Genesis documents;
- Core Platform Architecture and Domain Model;
- Data Ownership, Permission, Security, and Observability documents;
- Product Hub, Marketplace, Subscription, and Operating System authority;
- applicable accepted ADRs and frozen baselines.

The approved Human Architecture Review disposition controls the scope of Wave 2.

Do not silently resolve any question, conflict, or deferred policy that the review left open.

---

# 3. Authorization Boundary

Proceed with **Wave 2 only**.

Wave 2 may create a detailed proposed Customer Journey documentation package for human review.

It does not authorize:

- changing ADR-042 from `Proposed`;
- marking any proposal `Accepted`, `Approved`, `Final`, `Authoritative`, or `Frozen`;
- modifying Genesis;
- modifying any Freeze;
- modifying accepted ADRs;
- implementation planning;
- application code;
- frontend or backend components;
- APIs, routes, events, messages, schemas, tables, migrations, storage, cookies, tokens, packages, or deployment;
- role, Permission, membership, delegation, or identity-mechanism design;
- retention, deletion, anonymization, residency, export, legal-hold, or consent-policy values;
- confidence, fit, Business Health, setup-effort, or readiness formulas;
- selecting unresolved canonical terminology without human disposition;
- beginning Wave 3 or any later documentation wave.

All Wave 2 deliverables must use the status:

`Proposed for Authority Review`

They must include a prominent notice that they are review aids and are not approved architecture, state machines, interaction contracts, or implementation specifications.

---

# 4. Allowed Deliverables

Create only the following files under the existing proposal package:

```text
docs/00-governance/proposals/business-discovery-preview/03-CUSTOMER-JOURNEY-V2-PROPOSAL.md
docs/00-governance/proposals/business-discovery-preview/04-JOURNEY-DECISION-MATRIX.md
docs/00-governance/proposals/business-discovery-preview/05-EDGE-CASE-AND-RECOVERY-MATRIX.md
docs/00-governance/proposals/business-discovery-preview/06-WAVE-2-TRACEABILITY-AND-REVIEW-REGISTER.md
```

If one of these files already exists, inspect it first and update it only when it is clearly the same Wave 2 artifact.

Do not create any other document.

Do not modify the four Wave 1 proposal artifacts except to fix a directly broken local link created by Wave 2, and only when unavoidable. Record any such change explicitly in the completion report.

---

# 5. Wave 2 Objective

Wave 2 must describe the complete proposed end-to-end Customer Journey v2 around optional Business Discovery Preview while preserving the following boundaries:

- Discovery is optional.
- The existing account-first path remains available.
- Skip Discovery does not pass through Snapshot, claim, or import.
- Business Health Snapshot remains a **working term** and non-canonical.
- Discovery is not Business Architect.
- Discovery Evidence is not Business DNA.
- Claim and import are separate.
- Claim proves control of the anonymous Discovery session only.
- Import requires a formal Business and current target-Business authorization.
- Imported evidence enters the governed Business Architect pipeline only as draft or Candidate Fact evidence.
- Import cannot publish Business DNA.
- Existing review, confirmation, correction, rejection, publication, Recommendation, and readiness rules remain authoritative.
- Discovery creates no Workspace, Business, Membership, entitlement, subscription, installation, activation, `Core Workspace Ready`, or `Operating System Ready` state.
- Product Hub, Marketplace, Billing/Subscription, and Operating System ownership remain separate.
- Marketplace remains a recurring authorized destination, not merely the final node in one linear journey.
- Persona labels are UX archetypes, not roles or Permission grants.
- Identity verification remains conditional and mechanism-neutral.
- Open privacy, retention, security, scoring, delegation, and terminology decisions remain open unless the Human Architecture Review explicitly resolved them.

---

# 6. Required Artifact 03 — Customer Journey v2 Proposal

Create:

```text
docs/00-governance/proposals/business-discovery-preview/03-CUSTOMER-JOURNEY-V2-PROPOSAL.md
```

The document must include:

## 6.1 Metadata and authority notice

Include:

- version;
- status `Proposed for Authority Review`;
- date;
- review owner;
- reviewed Wave 1 commit or artifact version;
- Human Architecture Review evidence reference;
- related ADR-042 status;
- explicit non-authoritative notice.

## 6.2 Journey purpose and success criteria

Define customer and governance outcomes without inventing commercial metrics or numeric targets.

## 6.3 Journey actors and context

Cover at minimum:

- anonymous Visitor;
- authenticated User without Workspace;
- User with one Workspace and no Business;
- User with multiple Workspaces;
- User with one or multiple authorized Businesses;
- invited User;
- Workspace Owner/Admin UX archetype;
- Business Admin/Manager/Employee UX archetypes;
- consultant, partner, or reseller acting for another Business;
- returning User with an unclaimed, claimed, imported, expired, disputed, stale, or replaced Discovery session.

Make clear that these are journey archetypes, not canonical roles.

## 6.4 End-to-end branched journey

Provide a comprehensive Mermaid diagram and a readable textual journey covering:

```text
Visitor
→ Marketing Entry
├─ Skip Discovery
│  → Create Account or Sign In
│
└─ Start Business Discovery Preview
   → Consent/notice and minimum necessary evidence collection
   → Adaptive Discovery
   → Evidence sufficiency handling
   ├─ Non-canonical Business Health Snapshot (working term)
   ├─ Limited Summary
   └─ Continue without Snapshot
   → Save and Continue
   → Create Account or Sign In

→ Resolve conditional identity verification
→ Resolve Workspace context
→ Resolve Business context
→ Resolve Discovery session claim, when applicable
→ Resolve target-Business authorization
→ Import eligible evidence, when applicable
→ Continue official Business Architect
→ Review / confirm / correct / reject evidence
→ Publish Core Business DNA under existing authority
→ Generate governed Recommendations
→ Evaluate existing Core Workspace Ready criteria
→ Product Hub and governed downstream journeys
→ Marketplace as a recurring destination
```

The journey must show alternative and failure branches rather than hiding them in prose.

## 6.5 Entry paths

Define proposed entry handling for:

- generic marketing entry;
- product or operating-system landing entry;
- Marketplace-related entry;
- invitation entry;
- sign-in entry;
- resume link or same-device resume;
- authenticated User intentionally starting Discovery;
- support-assisted or partner-assisted context, without granting authority.

Entry Intent may affect presentation order only. It must not manufacture fit or evidence.

## 6.6 Exit and convergence points

Describe where a customer may:

- skip;
- pause;
- abandon;
- resume;
- delete or request deletion subject to future policy;
- continue without Snapshot;
- create an account;
- sign in;
- claim without importing;
- import later;
- decline import;
- continue Business Architect without imported Discovery evidence.

## 6.7 Journey invariants

Include an explicit non-equivalence chain showing that completion of one stage does not imply later canonical or readiness states.

## 6.8 Ownership handoffs

Describe logical handoffs among:

- Marketing Website;
- Discovery capability;
- Core Identity and Access;
- Organization Registry / Core organization ownership;
- Authorization owner;
- Business Architect;
- Business DNA owner;
- Business Brain / Recommendation owner;
- Product Hub;
- Marketplace;
- Billing/Subscription;
- Operating Systems.

Do not define services, APIs, events, deployment, or physical data stores.

## 6.9 Open-question annotations

Every step dependent on an unresolved question must reference the applicable Open Question ID.

## 6.10 Explicit review-aid statement

State that the journey diagram and descriptions cannot be promoted automatically into Genesis, Freeze, detailed UX, implementation, tests, or runtime behavior.

---

# 7. Required Artifact 04 — Journey Decision Matrix

Create:

```text
docs/00-governance/proposals/business-discovery-preview/04-JOURNEY-DECISION-MATRIX.md
```

The matrix must describe proposal-level routing decisions without becoming a rules engine or implementation specification.

For every decision include:

- stable decision ID;
- decision point;
- known inputs;
- prohibited assumptions;
- possible outcomes;
- required authority or Open Question dependency;
- owning logical boundary;
- customer-visible consequence;
- failure-safe behavior;
- audit or traceability consideration where applicable;
- whether the decision is inherited, proposed, or unresolved.

Cover at minimum:

1. Start versus Skip Discovery.
2. Evidence sufficient versus insufficient versus contradictory.
3. Snapshot, limited summary, or continue without Snapshot.
4. Anonymous persistence available versus unavailable.
5. Resume permitted versus expired/stale/replaced.
6. Account creation versus sign-in.
7. Identity verification required versus not required.
8. No Workspace, one Workspace, or multiple authorized Workspaces.
9. No Business, one Business, or multiple authorized Businesses.
10. Claim applicable versus not applicable.
11. Claim success, failure, expiry, dispute, duplicate, replay, or already claimed.
12. Import eligible versus ineligible.
13. Target-Business authorization allowed versus denied.
14. Import success, failure, retry, duplicate, partial, or stale evidence.
15. Existing Business Architect session absent versus in progress.
16. Imported evidence agrees, conflicts, or duplicates existing draft evidence.
17. Imported evidence conflicts with published Business DNA.
18. User accepts, corrects, or rejects imported evidence.
19. Official Business Architect completion and publication checks.
20. Recommendation generation versus insufficient authority/evidence.
21. Existing Core Workspace Ready evaluation.
22. Product Hub handoff and Marketplace revisit.
23. Subscription, installation, setup, activation, or OS failure routed to its owner.
24. Anonymous or authenticated deletion/export request, left unresolved where policy is deferred.
25. Consultant/partner/invited-user path without inferred ownership or Permission.

Do not define algorithmic expressions, policy values, formulas, database fields, or permission names.

---

# 8. Required Artifact 05 — Edge Case and Recovery Matrix

Create:

```text
docs/00-governance/proposals/business-discovery-preview/05-EDGE-CASE-AND-RECOVERY-MATRIX.md
```

For each edge condition include:

- stable edge-case ID;
- starting context;
- trigger;
- expected safe outcome;
- prohibited outcome;
- recovery or continuation path;
- state dimensions affected conceptually;
- ownership boundary;
- security/privacy concern;
- applicable authority/conflict/Open Question IDs;
- whether human decision is still required.

Cover at minimum:

- Discovery skipped;
- Discovery interrupted;
- browser closed;
- cookies/local storage unavailable;
- multiple anonymous sessions;
- same visitor on multiple devices;
- concurrent edits;
- duplicate submission;
- Snapshot pending;
- Snapshot failed;
- insufficient evidence;
- contradictory evidence;
- Rules or Knowledge changed;
- stale Snapshot;
- account already exists;
- account created after Discovery;
- sign-in to a different account;
- session already claimed;
- claim expired;
- claim failed;
- claim replay;
- duplicate claim;
- disputed claim;
- Workspace unavailable;
- multiple Workspaces;
- no Business;
- multiple Businesses;
- Business deleted or archived before import;
- import denied;
- import retried;
- duplicate import;
- partial import;
- stale evidence at import;
- existing Business Architect draft;
- conflict with draft Candidate Facts;
- conflict with published Business DNA;
- claim completed but import never performed;
- user rejects all imported evidence;
- anonymous deletion request;
- authenticated deletion/export request;
- invitation path;
- consultant or partner path;
- marketing consent declined;
- accessibility or localization degradation;
- Recommendation stale or unavailable;
- Product Hub unavailable;
- subscription/trial failure;
- installation/setup/activation failure;
- audit or observability failure;
- support intervention;
- safe abandonment and later restart.

Do not invent retention periods, proof mechanisms, tokens, cookies, encryption details, storage, or support permissions.

---

# 9. Required Artifact 06 — Wave 2 Traceability and Review Register

Create:

```text
docs/00-governance/proposals/business-discovery-preview/06-WAVE-2-TRACEABILITY-AND-REVIEW-REGISTER.md
```

Include:

## 9.1 Wave 2 scope manifest

List exactly what Wave 2 created and what remained untouched.

## 9.2 Human Architecture Review gate evidence

Record the exact repository evidence authorizing Wave 2.

## 9.3 Requirement traceability

Map every major journey section and matrix group to:

- Wave 1 proposal sections;
- ADR-042 sections;
- Conflict IDs;
- Open Question IDs;
- applicable accepted authority;
- Human Architecture Review decisions.

## 9.4 Decision preservation register

List:

- decisions inherited from accepted authority;
- decisions proposed by Wave 1 and approved only for Wave 2 documentation;
- unresolved decisions not selected by Wave 2;
- concepts deliberately left as working terms;
- concepts prohibited from implementation inference.

## 9.5 Authority impact preview

Identify which Genesis, Freeze, governance, glossary, and other documents would be affected **if** the proposal is later accepted.

This is an impact preview only. Do not edit those files and do not prescribe the final supersession sequence unless the Human Architecture Review already resolved it.

## 9.6 Wave 2 review checklist

Provide a checklist for Product Architecture, Enterprise UX, Identity and Access, Security, Privacy/Legal, Data Governance, Business Architect/Business DNA, Business Brain/Recommendations, Product Hub/Marketplace, Commercial/Billing, Operating Systems, Accessibility/Localization, and Architecture Governance.

## 9.7 Next-gate recommendation

Conclude with exactly one of:

- `Ready for Human Wave 2 Architecture Review`
- `Not Ready for Human Wave 2 Architecture Review`

Explain blocking reasons.

Do not authorize Wave 3.

---

# 10. Conceptual State Handling

Keep the independent conceptual dimensions from Wave 1 separate:

- Discovery Progress;
- Snapshot Status;
- Lifecycle Status;
- Claim Status;
- Import Status;
- Replacement relationship/status.

Every document must state that labels are:

- examples only;
- unreserved;
- non-canonical;
- non-persistent;
- not approved API terms;
- not approved schema values;
- not approved state-machine contracts.

Do not turn the matrices into a physical data model.

---

# 11. Terminology Rules

Use canonical repository terminology exactly where authority already defines it.

Use:

- `Business Discovery Preview` as the proposal capability/experience name unless the Human Architecture Review changed it;
- `Business Health Snapshot (working term)` for every occurrence of that proposed presentation term;
- `Discovery Evidence` for non-canonical evidence;
- `Business Architect` only for the official governed pipeline;
- `Candidate Fact` according to existing authority;
- `Business DNA Snapshot` only for the canonical published/versioned concept;
- `provisional guidance` rather than canonical Recommendation before accepted Recommendation conditions are met;
- `Create Account or Sign In`, unless quoting an existing authority source.

Do not introduce new canonical roles, Permissions, statuses, lifecycle terms, bounded contexts, services, or data owners.

---

# 12. Security, Privacy, and Authorization Guardrails

Preserve the following:

- authentication does not imply Authorization;
- session claim does not imply target-Business import authorization;
- persona labels do not imply roles or Permissions;
- anonymous participation does not imply analytics or marketing consent;
- identity, session ownership, Workspace access, Business access, or account existence must not be inferred from client-supplied identifiers;
- no silent session reassignment;
- no direct anonymous write into Business DNA;
- no direct overwrite of draft or published Business DNA;
- no false publication, Recommendation, entitlement, installation, activation, or readiness outcome on failure;
- minimum necessary collection and purpose-bound handling;
- safe denial and recoverable continuation where future policy permits;
- Arabic/English, RTL/LTR, accessibility, keyboard, focus, semantics, and non-color-only communication must be evaluated against applicable accepted authority rather than mandated solely by this proposal.

Where policy is deferred, cite the Open Question and leave the behavior unresolved beyond a safe proposal-level boundary.

---

# 13. Validation Requirements

Before completion, validate:

1. The Human Architecture Review gate was explicitly satisfied and referenced.
2. Exactly four Wave 2 files were created or updated.
3. No Genesis file changed.
4. No Freeze file changed.
5. No accepted ADR changed.
6. ADR-042 remains `Proposed`.
7. No implementation or application file changed.
8. No API, schema, database, route, event, token, cookie, storage, service, package, or deployment contract was created.
9. No role or Permission was invented.
10. No retention period, deletion rule, scoring formula, confidence number, setup-time estimate, or readiness rule was invented.
11. Every occurrence of `Business Health Snapshot` is marked `(working term)` unless quoting an existing reviewed source.
12. Every unresolved decision is connected to an Open Question, conflict, or explicit review disposition.
13. All local Markdown links resolve.
14. Mermaid blocks are syntactically coherent.
15. `git diff --check` returns no output.
16. All review-aid disclaimers are present.
17. No Wave 3 work was started.

---

# 14. Completion Report

At the end, report:

## 1. Human Gate Evidence

- exact review artifact or decision;
- reviewed Wave 1 version/commit;
- scope authorized.

## 2. Files Created or Modified

List exact paths.

## 3. Journey Coverage

Summarize actors, entry paths, branches, decisions, edge conditions, ownership handoffs, and recovery coverage.

## 4. Governance Confirmation

Confirm:

- all documents remain `Proposed for Authority Review`;
- ADR-042 remains Proposed;
- no Genesis/Freeze/accepted ADR changed;
- no implementation was authorized;
- no unresolved human decision was silently resolved;
- Wave 3 was not started.

## 5. Validation Results

Include:

- `git diff --stat`;
- `git diff --check`;
- changed-file count;
- out-of-scope change count;
- broken-link result;
- working-term terminology result;
- unresolved-question traceability result.

## 6. Remaining Next Gate

State:

`Human Wave 2 Architecture Review`

Do not commit, push, merge, or open a pull request unless explicitly instructed separately.

---

# Final Instruction

Execute only the bounded Wave 2 documentation task authorized by an explicit Human Architecture Review.

If that human authorization is absent, produce the read-only gate-failure report and stop without modifying the repository.
