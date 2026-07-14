# Documentation Policy

## 1. Purpose

NexoraXS documentation is part of the product and engineering change, not a retrospective summary. Specifications, implementation, decisions, contracts, design memory, tests, and operating guidance must remain synchronized.

This policy does not authorize modification of frozen architecture or historical artifacts.

## 2. Documentation Authority Classes

| Class | Examples | Change rule |
|---|---|---|
| Frozen authority | `docs/99-architecture-freeze/` | Governance lifecycle only |
| Governance authority | Accepted ADRs, glossary, governance policies | Defined Governance/ADR process |
| Engineering governance | Constitution, `AGENTS.md`, Execution Layer | Explicit amendment and synchronization |
| Design governance | `docs/10-design-intelligence/`, Design Memory | Design governance and affected-owner approval |
| Feature authority | `spec.md`, approved plan, tasks, contracts, design artifacts | Updated with feature lifecycle and approval |
| Implementation documentation | component/client/code docs, runbooks, migrations, release notes | Same change set as implementation |
| Historical/provenance | old proposals, patches, reviews, superseded specs | Preserve; mark supersession, do not rewrite history |

Lower classes cannot override higher classes.

## 3. When Documentation Is Updated

Update documentation in the same change set when implementation changes:

- user behavior, scope, acceptance, terminology, route, navigation, or state;
- data/entity meaning, owner, contract, client, event, permission, or lifecycle behavior;
- component API, design pattern, token, accessibility, localization, or responsive behavior;
- mock fixtures, storage, migration, deprecation, or Laravel replacement behavior;
- configuration, operational procedure, audit, observability, security, privacy, failure, or recovery;
- tests, supported environments, build/release commands, or maintenance responsibilities.

If behavior changes but documentation does not, the change is incomplete.

## 4. Documentation Timing

| Lifecycle stage | Required documentation action |
|---|---|
| Idea/business validation | Problem, evidence, value, scope, disposition |
| Architecture review | Authority trace, owner/boundary disposition, ADR need |
| Design | Proposal, alternatives, approval, Design Memory ID |
| Specify/clarify | Approved requirements and recorded answers |
| Plan | Research, decisions, contracts, model, test/migration/rollback approach |
| Tasks | Requirement-mapped execution and documentation tasks |
| Implementation | Update artifacts with approved actual behavior; no silent drift |
| Review | Findings, evidence, exceptions, disposition |
| Feature release freeze | Exact versions, release notes, runbooks, migration/rollback, approvals |
| Production | Release record, verification, incident/deviation, follow-up |

## 5. When an ADR Is Required

Create/propose an ADR only through Governance when a decision changes or establishes:

- architectural owner, domain, canonical fact/write model, aggregate, or lifecycle;
- frozen cross-domain/OS boundary or dependency pattern;
- organization hierarchy or scope semantics;
- architecture contract/evolution policy;
- a registered Deferred Decision;
- a material platform technology/runtime/deployment choice reserved for Governance;
- an architecture exception with long-term consequences.

An ADR is not a substitute for a feature specification, design proposal, implementation plan, or minor code choice. Draft ADRs are not accepted authority.

## 6. When Design Memory Is Updated

Update `11-DESIGN-MEMORY.md` whenever a design proposal is approved, rejected, deferred, superseded, or materially re-evaluated.

The record includes:

- DX identifier;
- problem and feature/spec reference;
- considered options and decision;
- status, date, and approvers;
- reason, constraints, risks, migration impact, lessons, and reuse opportunities;
- supersession links.

Do not delete rejected or deferred decisions. A later decision supersedes them by reference.

## 7. When Design Intelligence Changes

Change `docs/10-design-intelligence/` only when evidence shows a reusable platform-level design principle, DNA rule, personality, AI rule, pattern, component policy, innovation rule, layer workflow, roadmap, or quality gate must be clarified/evolved.

A single feature exception does not automatically change Design Intelligence. A change requires:

- problem/evidence and affected documents;
- compatibility and consumer impact;
- Design Memory/feature references;
- accessibility, localization, product, design-system, and architecture review as applicable;
- explicit version/change note and synchronized checklist/pattern guidance.

UI/UX Pro Max output alone is not evidence or approval for a Design Intelligence change.

## 8. Execution Layer Changes

Change `docs/11-execution/` when the engineering operating model, role authority, stage gates, Spec Kit use, mock/refactoring policy, review standard, Design Memory process, or roadmap governance materially changes.

Execution changes must not alter architecture or the Constitution indirectly. If a process change conflicts with the Constitution, amend the Constitution through its own semantic-versioned procedure first.

## 9. AI Documentation Synchronization

AI-generated documentation must:

1. read the controlling sources and current artifacts;
2. state authority and artifact status;
3. distinguish fact, inference, proposal, approved decision, draft, and historical context;
4. use exact canonical terms and stable identifiers;
5. avoid resolving Deferred Decisions or inventing missing owners;
6. cite file/section references for architecture-sensitive statements;
7. update all dependent artifacts authorized by the task;
8. preserve unrelated and historical files;
9. validate links/identifiers/formatting and run required diff checks;
10. report exact changed files and no automatic commit unless authorized.

An AI summary cannot become authority merely by being detailed. It must enter the correct review and approval lifecycle.

## 10. Synchronization Matrix

| Change | Minimum synchronized artifacts |
|---|---|
| Requirement/acceptance | Spec, checklist, plan/tasks impact |
| Technical approach | Plan, research, tasks, affected contracts/docs |
| API/client contract | Contract artifact, plan, tests, SDK/client docs, migration/deprecation |
| UI redesign | Design proposal, DX record, spec, Design Quality Checklist, component docs/tests |
| Reusable design pattern | Design Intelligence, DX record, component docs, consumers/migration |
| Mock schema/client | Spec/plan/tasks, fixture docs, contract tests, migration/rollback |
| Canonical data migration | Dedicated spec/plan/tasks, ADR if required, contracts, runbook, tests, rollback |
| Security/operations | Spec/plan/tasks, threat/controls, audit/observability/runbook, tests |
| Release | Release notes, runbook, migration/rollback, verification record |

## 11. Historical Integrity and Supersession

- Do not rewrite old Proposals, Patches, Reviews, specs, or DX records to conceal evolution.
- Mark an artifact `SUPERSEDED` only with the exact successor and effective decision.
- Frozen documents remain immutable unless Governance authorizes a successor.
- Archives are non-authoritative but remain useful provenance.
- Broken links caused by movement require redirects/reference updates or an explicit migration.

## 12. Documentation Quality

Every document must have:

- purpose, audience, status, owner, and authority level;
- stable title/version/identifier where applicable;
- consistent terminology and headings;
- explicit scope and non-scope;
- decisions separated from proposals and observations;
- resolvable references;
- no unexplained placeholders or stale status;
- change/supersession history where decisions evolve;
- accessible Markdown structure and concise tables/lists;
- review date and owner for operational content that can become stale.

## 13. Pull Request Documentation Gate

Reviewers verify:

- every changed behavior has an artifact update;
- every artifact claim matches the actual implementation;
- Design Memory and reusable guidance are updated where required;
- contracts and migration/deprecation are versioned;
- generated documentation has correct authority/status;
- no frozen or historical document was silently modified;
- links, identifiers, terminology, and `git diff --check` pass.

Missing required documentation blocks merge.

## 14. Documentation Ownership

Product Owner owns business scope and acceptance truth. Architect owns architecture interpretation and ADR routing. Design owner maintains design proposals/memory/intelligence. Engineering owner maintains plans, tasks, contracts, implementation docs, migrations, and runbooks. Reviewer verifies synchronization. AI may author under instruction but owns no approval.
