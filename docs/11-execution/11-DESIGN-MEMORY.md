# NexoraXS Design Memory

## 1. Purpose

Design Memory permanently records material NexoraXS UI/UX proposal outcomes so approved, rejected, deferred, and superseded decisions are never lost or repeatedly reconsidered without new evidence.

Design Memory is not architecture, a design proposal, or permission to implement. It records the decision made through Design Intelligence and the feature lifecycle. Architecture remains authoritative.

## 2. Identifier Standard

Every material UI proposal receives a repository-global sequential identifier:

```text
DX-0001
DX-0002
DX-0003
...
```

Rules:

- Allocate the next unused four-digit number.
- Never reuse, renumber, or delete an identifier.
- Allocate the ID when a proposal enters formal review, before its outcome.
- One DX record represents one decision problem, even when it contains Proposals A/B/C.
- Related decisions receive separate IDs with explicit links.
- Supersession creates a new DX ID and references the earlier record.

The central register in this document is the allocation authority. Detailed proposal artifacts may live in the owning feature's Spec Kit directory and must be linked from the register.

## 3. Status Model

| Status | Meaning | Implementation effect |
|---|---|---|
| Proposed | Formal options await decision | No implementation authority |
| Approved | Named option approved within recorded scope | May enter synchronized spec/plan |
| Rejected | All or selected option rejected with reason | Must not be implemented |
| Deferred | Decision postponed with re-entry condition | Must not be implemented as default |
| Superseded | Later DX record replaces the decision | Follow successor; preserve history |
| Withdrawn | Author/owner closes proposal before decision | No implementation authority |

“Approved” applies only to the recorded scope/version. It does not approve architecture, product scope, or implementation outside the feature.

## 4. Decision Record Schema

Every DX record stores:

### Identity

- DX ID and title
- status
- created/decided dates
- product/app/OS/surface
- feature/spec and PR references
- proposal artifact location
- Product Owner, design owner, reviewers, and required specialist approvers

### Context

- problem and evidence
- affected users/roles/context
- current approved behavior
- business impact
- architecture and audit constraints
- related Design Intelligence patterns/components

### Options

- Proposal A, B, and C summaries
- pros and cons for each
- impact of no change
- prototypes/research references
- UI/UX Pro Max candidate guidance used and how NexoraXS filtered it

### Decision

- selected option or no-change decision
- Approved, Rejected, or Deferred result
- reason and evidence
- scope/non-scope
- conditions and accepted risks
- approval names/dates

### Delivery and Learning

- migration and compatibility impact
- affected routes, components, tokens, content, analytics, tests, and documentation
- rollback approach
- validation results and production evidence when implemented
- lessons learned
- reuse opportunities
- follow-up and superseding DX references

## 5. Central Design Memory Register

This register is intentionally empty at creation. Existing historical designs do not receive retroactive approval through this document. They may be registered later through a bounded documentation task that preserves their original status and evidence.

| DX ID | Title | Product/surface | Status | Decision date | Feature/spec | Successor | Summary |
|---|---|---|---|---|---|---|---|
| — | No formal Design Memory decisions registered yet | — | — | — | — | — | Register the first reviewed proposal as DX-0001 |

## 6. DX Record Template

```markdown
## DX-#### — [Decision title]

**Status:** Proposed / Approved / Rejected / Deferred / Superseded / Withdrawn
**Created:** YYYY-MM-DD
**Decided:** YYYY-MM-DD or Pending
**Product/surface:**
**Feature/spec:**
**Proposal artifact:**
**Product Owner:**
**Design owner:**
**Reviewers/approvers:**

### Problem and evidence

### Users, context, and business impact

### Current behavior and constraints

### Proposal A
- Pros:
- Cons:

### Proposal B
- Pros:
- Cons:

### Proposal C
- Pros:
- Cons:

### No-change impact

### Decision and status

### Reason

### Scope and non-scope

### Risks and conditions

### Migration and compatibility impact

### Validation and lessons learned

### Reuse opportunities

### Related and superseding decisions
```

## 7. Approval Rules

An Approved DX record requires:

- validated business problem and evidence;
- architecture and audit alignment;
- complete three-option proposal for redesign;
- Design Quality Checklist;
- Product Owner and design-owner approval;
- Architect approval when boundaries/context are affected;
- accessibility, localization, security/privacy, or domain review when applicable;
- synchronized feature specification before implementation.

AI agents and UI/UX Pro Max cannot approve a DX decision.

## 8. Rejected Decisions

Rejected options remain searchable because they prevent repeat work and reveal constraints. Record:

- what was rejected—the entire proposal or a specific option;
- evidence and reason;
- conditions that would justify reconsideration;
- risks avoided;
- reusable parts that remain valid.

Do not describe rejection as failure when the exploration produced useful learning.

## 9. Deferred Decisions

Deferred records include:

- missing evidence/authority/dependency;
- reason the decision is not safe now;
- owner of the blocker;
- re-entry condition and review date if known;
- prohibited assumptions while deferred.

Deferred design does not become a product or architectural Deferred Decision unless Governance explicitly registers it there.

## 10. Lessons Learned

After validation or release, append evidence without rewriting the original decision:

- what users understood or struggled with;
- outcome and guardrail measures;
- accessibility/localization/performance findings;
- operational/support impact;
- differences between hypothesis and observed behavior;
- what should be reused, revised, or avoided.

If evidence changes the approved direction materially, create a new DX proposal and supersede the old record.

## 11. Reuse Opportunities

Each record identifies whether the decision is:

- feature-specific;
- reusable within one OS/product;
- a candidate shared pattern;
- a candidate component variant;
- a Design Intelligence update candidate.

Reuse classification does not move ownership or automatically promote a component into `packages/ui`. Follow Component Governance and Design Intelligence change policy.

## 12. Relationship to Spec Kit and Code

The feature spec cites relevant DX IDs. The plan maps approved design to components, tokens, contracts, tests, migration, and rollback. Tasks include implementation and Design Memory/documentation synchronization. PRs cite the DX record and verify no unapproved option was implemented.

Code comments should not duplicate the full decision. They may cite the DX ID where a non-obvious compatibility constraint requires context.

## 13. Maintenance

- Review the register during feature intake and design proposals.
- Validate links/status during Feature Release Freeze.
- Preserve all records in version control.
- Never edit an outcome to appear more favorable after release.
- Correct factual/editorial errors with a dated note.
- Use supersession rather than deletion for changed decisions.
- Periodically review deferred records and reusable patterns without auto-approving them.
