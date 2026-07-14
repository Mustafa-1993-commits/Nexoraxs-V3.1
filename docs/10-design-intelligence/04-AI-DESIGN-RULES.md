# AI Design Rules

## 1. Purpose

This document governs how AI researches, proposes, specifies, and evaluates NexoraXS interfaces. AI is encouraged to improve UX, propose layouts and workflows, improve navigation, and explore dashboard concepts. It must never silently replace an approved design or treat generated design output as architectural authority.

The installed UI/UX Pro Max Skill supplies candidate design intelligence. AI must apply the NexoraXS authority order and business context before using any Skill result.

## 2. Authority Order

1. Constitution
2. Architecture Freeze
3. `AGENTS.md`
4. NexoraXS Design Intelligence Layer
5. UI/UX Pro Max Skill

If two higher authorities conflict, report the exact conflict and stop only at the affected boundary. Do not invent a compromise. If Skill guidance conflicts with NexoraXS guidance, discard or adapt the Skill candidate.

## 3. AI Design Modes

Before producing design output, AI must classify the request:

| Mode | Meaning | Required behavior |
|---|---|---|
| Approved implementation | A reviewed specification defines the feature and design | Implement within approved scope and pass all quality gates |
| New feature design | No approved screen exists, but the feature is authorized | Research and produce a specification or design proposal; do not imply approval |
| Existing-screen improvement | Bounded accessibility, copy, consistency, or state improvement | Preserve behavior and layout unless the approved task authorizes a change |
| Redesign | Changes information architecture, layout model, navigation, workflow, or learned behavior | Produce the mandatory three-option proposal and wait for approval |
| Architecture-affecting design | Changes owner, scope, canonical model, cross-OS relation, or product boundary | Stop design work and require the appropriate architecture/governance process |

## 4. Mandatory Context Intake

AI must establish, before designing:

- user and role;
- business problem and success signal;
- active Workspace/Business/Business Unit/Branch/OS context;
- architectural owner and canonical data owner;
- current screen, component, navigation, and compatibility behavior;
- authorization and privacy constraints;
- Arabic/RTL and English/LTR content needs;
- supported devices and task environment;
- states, risks, and recovery expectations;
- applicable audit findings and approved specification.

Missing information becomes an explicit assumption or clarification question. It must not be filled with invented architecture.

## 5. What AI May Do

Within the applicable authority and task scope, AI may:

- identify usability, accessibility, localization, consistency, and responsiveness problems;
- use UI/UX Pro Max to generate design-system and pattern candidates;
- compare alternative information hierarchies, layouts, navigation, and workflows;
- propose new dashboard questions, widgets, and chart forms;
- improve state coverage, error recovery, content clarity, and interaction feedback;
- recommend shared component reuse or a new approved variant;
- suggest experiments and measurable success criteria;
- draft a design proposal, specification, test plan, or migration plan.

“May propose” never means “may silently implement.”

## 6. What AI Must Never Do

AI must never:

- replace, relocate, or materially restyle an approved screen without approval;
- use visual design to change ownership, canonical truth, permission, lifecycle, or scope;
- create a cross-OS hard dependency or direct internal-state coupling;
- treat Marketplace as an independent OS or absorb OS workflows into Core;
- infer that the UI label **Business** creates a separate canonical model from the governing hierarchy;
- present AI output as a deterministic decision or canonical fact;
- make consequential actions automatic without governed authorization and confirmation;
- hide subscription, enablement, permission, configuration, or compatibility distinctions;
- invent routes, features, modules, roles, data, API behavior, or architecture;
- introduce dark patterns, forced urgency, cancellation friction, or misleading progress;
- sacrifice Arabic, RTL, accessibility, dark mode, or responsive behavior for visual effect;
- copy a Skill recommendation without evaluating authority, context, current design, and migration impact.

## 7. Skill Use Protocol

When UI/UX Pro Max is used, AI must:

1. Read the relevant NexoraXS authorities and current interface evidence.
2. Run the Skill's design-system search for the specific product and task.
3. Run targeted UX, style, chart, accessibility, or stack searches only as needed.
4. Treat every result as a candidate, not a requirement.
5. Remove candidates that conflict with architecture, design DNA, accessibility, bilingual parity, or existing compatibility.
6. State which candidate guidance influenced the proposal.
7. Avoid persisting a generated Skill design system as NexoraXS authority unless a separate approval explicitly authorizes it.
8. Pass the Design Quality Checklist before approval or implementation.

If Skill results disagree—for example on control behavior—AI must return to the underlying requirement. The NexoraXS rule is to prevent duplicate submission while keeping state perceivable, operable, and accessible; no raw pattern recommendation outranks that outcome.

## 8. Redesign Trigger

A design proposal is mandatory when a change materially affects any of the following:

- page or dashboard information architecture;
- primary navigation, module navigation, or context switching;
- a workflow's stages, branching, confirmation, or completion model;
- component interaction semantics or learned behavior;
- visual hierarchy of consequential actions;
- a shared pattern used by multiple screens or products;
- OS personality, global tokens, typography, density, or motion;
- migration from an existing or legacy-compatible experience.

Small corrections may proceed only when the governing specification explicitly authorizes them and they do not cross these boundaries.

## 9. Mandatory Design Proposal

Every redesign proposal must include all sections below.

### 9.1 Problem

Describe the observed user or business problem with file/screen evidence, affected users, context, frequency, and severity.

### 9.2 Reason

Explain why the current design causes or cannot adequately resolve the problem. Separate evidence from inference.

### 9.3 Business impact

State the effect on completion, accuracy, decision quality, training, support, risk, revenue, cost, compliance, or trust. Do not invent numerical impact.

### 9.4 Proposal A

Describe a conservative option that minimizes behavioral and migration change.

**Pros**

- List evidence-based advantages.

**Cons**

- List tradeoffs and unresolved limitations.

### 9.5 Proposal B

Describe a balanced option that changes only what is needed to address the problem.

**Pros**

- List evidence-based advantages.

**Cons**

- List tradeoffs and unresolved limitations.

### 9.6 Proposal C

Describe a meaningfully different option, not a cosmetic variant of A or B.

**Pros**

- List evidence-based advantages.

**Cons**

- List tradeoffs and unresolved limitations.

### 9.7 Recommendation

Choose one option or recommend no change. Tie the recommendation to the problem, authority, evidence, and quality gates.

### 9.8 Risk

Cover usability, accessibility, localization, privacy, security, ownership, operational, technical, adoption, and regression risks as applicable.

### 9.9 Migration impact

Identify affected screens, routes, components, tokens, terminology, state, analytics, tests, documentation, training, and legacy behavior. Define compatibility and rollback needs without silently scheduling implementation.

### 9.10 Approval required

Name the required product/design owner and any architecture, security, accessibility, localization, or OS-domain approval. The proposal status remains **UNAPPROVED** until recorded otherwise.

## 10. Proposal Comparison Rules

- All three options solve the same stated problem.
- Each option is feasible within known constraints or labels unknowns clearly.
- The current design may be retained as an option when evidence does not justify change.
- Accessibility and architecture are gates, not tradeable “pros.”
- Do not bias the comparison through unequal detail or emotionally loaded wording.
- Include the impact of doing nothing.
- Prototypes and screenshots are evidence aids, not approval.

## 11. AI Assistance in Product Interfaces

AI-designed assistance must visibly distinguish:

| Output | Required treatment |
|---|---|
| Canonical fact | Display owner/source and do not label as AI-generated unless AI only summarizes it |
| Deterministic decision | Display outcome, governing reason/rule, and available authorized next action |
| Recommendation | Explain why, evidence or inputs, expected impact, confidence/limits where meaningful, and user choice |
| Generated draft | Label as draft; require review before canonical write or external communication |
| Action proposal | Show exact proposed change, scope, consequences, authorization, and confirmation |

AI failure must degrade to the independently usable core workflow. The interface must not simulate certainty or silently switch providers in a way that changes canonical decision behavior.

## 12. Design Output Requirements

Every AI-produced feature design must contain:

- business objective and architectural owner;
- user, role, permission, and scope assumptions;
- task flow and information hierarchy;
- component/pattern reuse map;
- loading, empty, partial, error, permission, success, and recovery states;
- responsive, keyboard, screen-reader, RTL/LTR, dark-mode, and reduced-motion behavior;
- AI/recommendation treatment where applicable;
- analytics or success measures without invented tracking authority;
- risks, compatibility, migration, and rollback notes;
- completed Design Quality Checklist;
- proposal approval reference when the design changes an approved experience.

## 13. Approval Gate

AI must not claim a design is approved merely because it is coherent, visually polished, generated by a Skill, or implemented in a prototype. Approval requires:

1. alignment with architecture, Constitution, `AGENTS.md`, and audit constraints;
2. completion of the Design Quality Checklist;
3. review by the responsible product/design owner;
4. domain-owner review for OS-specific semantics;
5. explicit approval of any redesign proposal;
6. a synchronized specification before implementation.
