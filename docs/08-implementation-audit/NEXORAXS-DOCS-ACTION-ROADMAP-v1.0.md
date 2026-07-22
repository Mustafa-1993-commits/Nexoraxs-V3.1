# Nexoraxs Documentation Action Roadmap v1.0

**Repository:** `Mustafa-1993-commits/Nexoraxs-V3.1`  
**Source review:** `NEXORAXS-DOCS-FULL-REVIEW-v1.0.md`  
**Status:** Proposed execution plan  
**Primary goal:** Make the documentation authority model explicit, remove ambiguity for implementers and AI agents, and turn the full review into small auditable pull requests.

---

## 1. Where we are

The v1.x platform architecture is strong enough to continue bounded Frontend Foundation work. The blocking problem is not lack of architecture; it is documentation operability:

- authoritative and historical files overlap;
- active Proposed ADRs extend beyond the v1.x completion declaration;
- duplicate customer-journey files exist;
- Business Discovery Preview is not implementation-authorized;
- the frontend audit identifies boundary violations that need reconciliation;
- no single live authority manifest tells Codex or a developer what controls today.

---

## 2. Execution principles

1. One task per pull request unless two changes are inseparable.
2. Never silently rewrite frozen or historical documents.
3. Every authority change must preserve provenance.
4. Proposed work must not be described as accepted or implementation-ready.
5. Frontend work may continue only behind canonical Core and Commerce facades.
6. Codex must execute one task at a time and report changed files, validation, assumptions, and unresolved blockers.

---

## 3. Priority roadmap

### P0 — Establish the live documentation authority

#### DOC-001 — Create `CURRENT-AUTHORITY.md`

**Why:** Implementers currently need to infer the governing hierarchy from many files.

**Deliverable:** A concise human-readable index that identifies:

- current authoritative foundations;
- accepted ADRs;
- proposed ADRs;
- frozen documents;
- historical/superseded material;
- implementation audits and their non-authoritative role;
- the canonical customer journey;
- the rule for resolving conflicts.

**Acceptance criteria:**

- No new architecture is invented.
- Every listed authority links to an existing file.
- Proposed files are explicitly marked non-authoritative.
- Historical completion claims are clearly dated and scoped.

---

#### DOC-002 — Create `AUTHORITY-MANIFEST.yaml`

**Why:** AI agents and CI need machine-readable authority metadata.

**Minimum fields:**

```yaml
schema_version: 1
updated_at: YYYY-MM-DD
documents:
  - path: docs/...
    title: ...
    status: authoritative|accepted|proposed|frozen|historical|audit|draft
    authority_level: ...
    supersedes: []
    superseded_by: []
    implementation_allowed: true|false
    notes: ...
```

**Acceptance criteria:**

- Includes all governing/frozen/ADR/journey documents.
- ADR-041 and ADR-042 are marked Proposed.
- Business Discovery implementation is marked blocked.
- Duplicate journey paths cannot both be canonical.

---

#### DOC-003 — Reconcile the ADR index

**Why:** The v1.x completion document ends at ADR-040 while ADR-041 and ADR-042 now exist.

**Deliverable:** Update the ADR README/index without rewriting the historical completion record.

**Acceptance criteria:**

- ADR-001 through ADR-040 remain the accepted v1.x baseline unless source documents say otherwise.
- ADR-041 and ADR-042 appear as Proposed.
- The index explains that the completion document is a historical v1.x milestone statement.

---

#### DOC-004 — Resolve duplicate Customer Journey files

**Why:** Two different files named `11-CUSTOMER-JOURNEY.md` can lead to incompatible implementation.

**Deliverable:** Identify the canonical file, archive or deprecate the duplicate, and leave a redirect/provenance notice where appropriate.

**Acceptance criteria:**

- Exactly one canonical customer journey is identified.
- No content is deleted without provenance.
- All inbound links are updated.
- The action is documented in the authority manifest.

---

### P0 — Prevent documentation drift

#### DOC-005 — Add Markdown link validation

**Deliverable:** CI workflow or repository script that detects broken relative Markdown links.

**Acceptance criteria:**

- Runs on pull requests affecting `docs/**`.
- Fails on broken internal links.
- Excludes generated/external links only through documented configuration.

---

#### DOC-006 — Define common document metadata

**Deliverable:** A metadata standard for new governance documents.

**Recommended fields:** title, status, authority, owner, created, updated, supersedes, superseded-by, implementation-allowed, related-ADRs.

**Acceptance criteria:**

- Standard is documented.
- A validation approach is proposed.
- Existing files are not mass-rewritten in this task.

---

### P1 — Decide Business Discovery authority

#### DOC-007 — Produce ADR-042 blocker shortlist

**Why:** The discovery program contains roughly 50 questions; not all must block the first decision.

**Deliverable:** Classify questions into:

- decision blockers;
- pre-implementation blockers;
- post-MVP decisions;
- operational/policy follow-ups.

**Critical themes:** anonymous ownership, claim/merge, identity verification, invitations, existing-business import, conflicting facts, consent, retention/deletion/export, confidence/scoring, subscription/readiness.

---

#### DOC-008 — Resolve the authority-order conflict

**Deliverable:** One explicit decision defining the precedence of Constitution, Governance, Genesis, ADR, Freeze, and successor Freeze documents.

**Acceptance criteria:**

- Conflict resolution rule is deterministic.
- Existing frozen architecture is not implicitly overridden.
- `CURRENT-AUTHORITY.md` and the manifest are updated afterward.

---

#### DOC-009 — Decide ADR-042

**Possible outcomes:** Accepted, Accepted with conditions, Deferred, or Rejected.

**Acceptance criteria before acceptance:**

- identity/session ownership defined;
- claim/import behavior defined;
- privacy lifecycle defined;
- canonical Business relationship defined;
- account-first journey impact defined;
- implementation boundaries documented.

**Rule:** Do not implement Business Discovery Preview before this gate passes.

---

### P1 — Frontend reconciliation

#### FE-001 — Split Core and Commerce access behind facades

**Problem:** `AppProvider` and UI code mix platform and commerce ownership.

**Target:** Separate interfaces such as `CoreClient`, `CommerceClient`, and typed view models.

---

#### FE-002 — Remove trusted context from query parameters

**Problem:** Identity, workspace, subscription, or product context must not be trusted because it came from a URL.

**Target:** URL parameters may express navigation intent only; trusted state comes from canonical clients/session context.

---

#### FE-003 — Correct Business versus Business Unit semantics

**Problem:** Business Unit cannot replace the canonical Business entity.

**Target:** Update types, onboarding state, fixtures, and UI labels so Workspace, Business, Business Unit, and Branch remain distinct.

---

#### FE-004 — Move financial decisions out of UI pages

**Problem:** POS pages calculate canonical tax/totals directly.

**Target:** UI consumes quote/calculation results from a commerce service boundary, even while mocked.

---

#### FE-005 — Treat route guards as UX only

**Problem:** Frontend guards are not authorization.

**Target:** Rename/document guards and mock permissions so no file implies backend security enforcement.

---

#### FE-006 — Replace unsafe browser credential mocks

**Target:** Use a development-only identity adapter with non-secret fixtures; never store or compare real-style passwords in browser persistence.

---

#### FE-007 — Decompose shared domain types

**Target packages/modules:** Core identity/workspace, Business architecture, Subscription/entitlements, Commerce setup, Product-specific view models.

---

### P2 — User Journey review program

Run one review per journey:

1. New Workspace Owner.
2. Invited Employee.
3. Existing user adding a product.
4. Multi-workspace user.
5. Multi-business-unit and multi-branch user.
6. Trial, expired, suspended, and upgraded subscription.
7. Permission denial and changed-role scenarios.
8. Interrupted or incomplete onboarding.
9. Switching between Core and product operating systems.
10. Optional Business Discovery journey after ADR-042 decision.

Each journey must document:

- entry points;
- actors and permissions;
- preconditions;
- happy path;
- decision points;
- recoverable errors;
- blocked states;
- resume behavior;
- first-value action;
- analytics/events;
- canonical ownership of each decision.

---

### P3 — Documentation usability improvements

- Generate a docs landing page by authority/status.
- Add glossary link checks and ownership tables.
- Add a supersession report.
- Add a proposal lifecycle dashboard.
- Add architecture fitness checks for forbidden frontend dependencies.
- Archive obsolete patches only after manifesting provenance.

---

## 4. Recommended pull-request sequence

1. PR-1: Add full review, inventory, and this roadmap.
2. PR-2: `CURRENT-AUTHORITY.md`.
3. PR-3: `AUTHORITY-MANIFEST.yaml`.
4. PR-4: ADR index reconciliation.
5. PR-5: Customer Journey duplicate resolution.
6. PR-6: Markdown link checker.
7. PR-7: ADR-042 blocker shortlist and authority-order decision package.
8. Subsequent PRs: one frontend reconciliation task at a time.

---

## 5. Codex execution template

Use this prompt for one task only:

```text
You are working in Mustafa-1993-commits/Nexoraxs-V3.1.

Execute only task <TASK-ID> from:
docs/08-implementation-audit/NEXORAXS-DOCS-ACTION-ROADMAP-v1.0.md

Before editing:
1. Read CURRENT-AUTHORITY.md if it exists.
2. Read every source document named by the task.
3. State the current authority and whether implementation is allowed.

Constraints:
- Do not invent architecture.
- Do not modify frozen or historical documents unless the task explicitly requires a provenance note.
- Do not implement another task.
- Preserve links and document history.
- Keep the PR narrowly scoped.

After editing, report:
- files created;
- files updated;
- files intentionally untouched;
- validation performed;
- assumptions;
- unresolved blockers;
- recommended next task.
```

---

## 6. Current recommendation

Start with **DOC-001** after merging the review package. Do not start ADR-042 implementation or broad frontend refactoring until the live authority map exists. Bounded visual frontend work can continue, provided mocks remain replaceable and ownership boundaries are respected.
