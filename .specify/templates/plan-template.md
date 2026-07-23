# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

[Extract from feature spec: primary requirement + technical approach from research]

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: [e.g., Python 3.11, Swift 5.9, Rust 1.75 or NEEDS CLARIFICATION]  
**Primary Dependencies**: [e.g., FastAPI, UIKit, LLVM or NEEDS CLARIFICATION]  
**Storage**: [if applicable, e.g., PostgreSQL, CoreData, files or N/A]  
**Testing**: [e.g., pytest, XCTest, cargo test or NEEDS CLARIFICATION]  
**Target Platform**: [e.g., Linux server, iOS 15+, WASM or NEEDS CLARIFICATION]
**Project Type**: [e.g., library/cli/web-service/mobile-app/compiler/desktop-app or NEEDS CLARIFICATION]  
**Performance Goals**: [domain-specific, e.g., 1000 req/s, 10k lines/sec, 60 fps or NEEDS CLARIFICATION]  
**Constraints**: [domain-specific, e.g., <200ms p95, <100MB memory, offline-capable or NEEDS CLARIFICATION]  
**Scale/Scope**: [domain-specific, e.g., 10k users, 1M LOC, 50 screens or NEEDS CLARIFICATION]

## Reference Implementation Analysis *(complete when an external reference is selected)*

- **Source repository and revision**: [repository + commit SHA/tag or N/A]
- **Reference feature ID**: [stable encyclopedia ID or N/A]
- **Relevant source files**: [paths or N/A]
- **Observed runtime behavior**: [verified behavior or N/A]
- **State and data flow**: [summary or N/A]
- **External dependencies**: [packages/services or N/A]
- **Internal integration points**: [components/hooks/services/routes/models or N/A]
- **Coupling and maintenance risks**: [risks or N/A]
- **Behavior retained**: [what NexoraXS will reproduce]
- **Behavior rewritten**: [what must be reimplemented natively]
- **Behavior rejected**: [foreign assumptions/branding/domain/authorization/lifecycle]
- **License and attribution obligations**: [N/A or required actions]

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Record **PASS**, **FAIL**, or **N/A with rationale** for every gate. A FAIL stops planning and
identifies the required Governance action; the Complexity Tracking table cannot waive a frozen
architecture rule.

| Gate | Required evidence | Result |
|---|---|---|
| Frozen authority | Controlling Freeze/Accepted ADR references; no unresolved contradiction | [PASS/FAIL/N/A] |
| Ownership | Owning domain, canonical facts, write models, and target validation are explicit | [PASS/FAIL/N/A] |
| Organization and tenancy | Workspace, Business, Business Unit, Department, Branch, OS, actor, and resource scope are explicit as applicable | [PASS/FAIL/N/A] |
| OS independence | No core workflow requires another OS; no direct cross-OS database/internal-state access | [PASS/FAIL/N/A] |
| Knowledge and AI order | Capability/Knowledge/Rules/Business Brain/Recommendation/AI boundaries are preserved | [PASS/FAIL/N/A] |
| Lifecycle separation | Entitlement, Subscription, installation, setup, configuration, activation, readiness, and access remain distinct as applicable | [PASS/FAIL/N/A] |
| Contracts and compatibility | Boundary contracts are owner-governed, versioned, and backward-compatible or have an approved migration | [PASS/FAIL/N/A] |
| Security and operations | Authorization, privacy, Audit, observability, failure, and recovery requirements are planned | [PASS/FAIL/N/A] |
| Product quality | Arabic/English, RTL/LTR, accessibility, and measurable UX criteria are planned | [PASS/FAIL/N/A] |
| Reference adoption | Selected reference is revision-pinned, verified in executable code, license-checked, and adapted without importing foreign canonical models or boundaries | [PASS/FAIL/N/A] |
| Verification | Risk-appropriate automated/manual tests cover invariants and acceptance scenarios | [PASS/FAIL/N/A] |
| Documentation sync | Specs, tasks, contracts, and affected docs will change with implementation; deferrals remain unresolved | [PASS/FAIL/N/A] |

**Pre-research verdict**: [PASS/FAIL]

**Post-design verdict**: [PASS/FAIL]

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
# [REMOVE IF UNUSED] Option 1: Single project (DEFAULT)
src/
├── models/
├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/

# [REMOVE IF UNUSED] Option 2: Web application (when "frontend" + "backend" detected)
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/

# [REMOVE IF UNUSED] Option 3: Mobile + API (when "iOS/Android" detected)
api/
└── [same as backend above]

ios/ or android/
└── [platform-specific structure: feature modules, UI flows, platform tests]
```

**Structure Decision**: [Document the selected structure and reference the real
directories captured above]

## Complexity Tracking

> **Fill ONLY for non-architectural complexity that remains after all Constitution gates pass.**
> Frozen architecture violations cannot be justified here.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
