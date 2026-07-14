# NexoraXS Design DNA

## 1. Purpose

This document defines the shared visual and interaction grammar for NexoraXS. It does not prescribe a new theme, replace current screens, or approve token changes. Existing approved interfaces remain the compatibility baseline; material visual changes require a reviewed design proposal and an implementation specification.

UI/UX Pro Max provides candidate systems, accessibility guidance, chart choices, and usability checks. NexoraXS Design DNA filters those candidates through platform identity, current code, bilingual requirements, domain ownership, and the frozen architecture.

## 2. DNA Model

The visual system has three layers:

| Layer | Responsibility | May vary by OS? |
|---|---|---|
| Foundation | Accessibility, typography roles, spacing logic, radii, elevation, state semantics, directionality, focus, motion limits | No, except approved accessibility-equivalent adaptations |
| Platform language | Shell grammar, page hierarchy, controls, tables, forms, dialogs, feedback, status treatment | Only through approved variants |
| Product personality | Accent emphasis, density profile, widget priority, chart preference, workflow rhythm, domain imagery | Yes, without creating a separate component system |

The current repository supplies useful compatibility evidence: restrained neutral surfaces, an indigo-led accent, semantic success/warning/danger colors, rounded cards, subtle elevation, a compact platform shell, and both light and dark tokens. These are current-state references, not permission to hard-code new values outside the token system.

## 3. Typography

### 3.1 Principles

- Use a bilingual UI type system designed and tested for Arabic and Latin scripts.
- Match perceived size, weight, line height, and density across languages rather than forcing identical metrics.
- Use one semantic hierarchy: display, page title, section title, body, label, supporting text, data, and code/identifier.
- Prefer sentence case for interface labels unless language convention or a canonical identifier requires otherwise.
- Use tabular numerals where comparison in columns or KPIs depends on alignment.
- Reserve monospace for codes, technical identifiers, and fixed-width data—not ordinary body copy.
- Do not use typography alone to communicate status or hierarchy.

The current Geist-based implementation and its fallbacks are compatibility inputs. A change to the bilingual font stack—including adoption of a Skill-suggested Arabic family—requires evidence for legibility, bundle cost, metric compatibility, numeral behavior, RTL rendering, and migration impact.

### 3.2 Readability gates

- Body text remains readable at browser zoom and supported viewport sizes.
- Dense tables may use a smaller approved data style but never below the accessible product minimum.
- Line length, line height, wrapping, and truncation are tested in both languages.
- Text containers tolerate Arabic expansion, long English labels, numbers, dates, and mixed-direction values.

## 4. Spacing and White Space

- Use the shared token scale; do not invent local spacing values to repair composition.
- Build rhythm from a small base unit and approved multiples.
- Use tighter spacing within a control or data group and larger spacing between tasks or sections.
- White space communicates grouping, priority, and cognitive pauses; it is not unused space to be filled.
- Operationally dense screens may compress vertical rhythm through an approved density mode while keeping target size, focus, and readability.
- RTL changes logical placement, not the meaning of proximity or hierarchy.

## 5. Hierarchy

Every operational page should make the following hierarchy discoverable where relevant:

1. Current platform/OS and active context
2. Page purpose and status
3. Primary decision or action
4. Core work surface
5. Supporting evidence, filters, and secondary actions
6. Help, provenance, history, and advanced controls

Use size, weight, spacing, placement, and surface treatment together. Avoid competing primary buttons, excessive colored panels, or dashboards where every card has equal emphasis.

## 6. Density

NexoraXS supports three semantic density profiles:

| Profile | Use | Guardrail |
|---|---|---|
| Guided | Onboarding, setup, low-frequency consequential tasks | Do not inflate simple tasks into unnecessary steps |
| Standard | Most administration, settings, and dashboards | Default platform rhythm |
| Operational | POS, inventory, order handling, data-heavy review | Preserve target size, keyboard access, clarity, and recovery |

Density is selected by task and environment—not by OS branding alone. A user may encounter more than one density profile inside an OS.

## 7. Color

- Use semantic tokens for background, surface, text, border, focus, action, information, success, warning, danger, and selection.
- Product personality may map approved accent tokens; it must not redefine global state semantics.
- Color never carries status, direction, trend, ownership, or selection alone.
- Preserve sufficient contrast in light and dark modes, including hover, disabled, focus, chart, and high-density states.
- Reserve red for danger, destructive action, or critical negative status; reserve green for success or positive status when culturally and semantically appropriate.
- Avoid decorative “AI gradients” as the primary signifier for intelligence. AI is identified by label, provenance, and interaction behavior.

## 8. Cards

Cards group related information or actions; they are not the default container for every element.

- A card has one discernible purpose, clear heading where needed, and a predictable action hierarchy.
- Avoid nested card-on-card structures unless hierarchy cannot be expressed more simply.
- Clickable cards expose an actual interactive element and keyboard behavior; the entire surface must not be ambiguously interactive.
- KPI cards include metric name, value, scope or period, comparison basis, and state/provenance when material.
- Card elevation remains subtle and consistent with surrounding hierarchy.

## 9. Tables

Tables are the primary pattern for comparing structured records.

- Provide a meaningful caption or accessible name, column headers, logical reading order, and keyboard-operable controls.
- Keep identity and primary status visible; make secondary columns configurable or progressively disclosed where appropriate.
- Sorting, filtering, selection, pagination, bulk action, and row action must communicate state.
- Responsive behavior may use horizontal scrolling, column priority, or a structured list/card alternative. It must not drop consequential data silently.
- Loading preserves structure; empty states explain scope and next action; errors preserve filters and provide retry.
- Destructive bulk actions require clear item count, scope, and confirmation.

## 10. Forms

- Use visible labels; placeholders provide examples, not labels.
- Group fields by user goal and business meaning.
- Mark required and optional fields consistently.
- Use appropriate semantic input types, autocomplete, input modes, and native behaviors.
- Allow paste and password-manager behavior unless a documented security requirement forbids it.
- Validate at a useful time, keep valid input, focus or summarize errors accessibly, and explain recovery.
- Show units, currency, timezone, locale, scope, and tax semantics next to affected values.
- Recommendations may prefill or suggest only when provenance is clear and user correction is preserved.

## 11. Dialogs

- Use dialogs for focused decisions that should temporarily interrupt the page, not for ordinary navigation or large workflows.
- Title the decision, state its scope and consequence, and use action labels that name the outcome.
- Destructive actions require proportional confirmation; typed confirmation is reserved for high-consequence, hard-to-recover actions.
- Focus moves into the dialog, remains contained, and returns to the logical trigger.
- Escape and close behavior must not cause accidental data loss; warn when unsaved work would be discarded.
- Full-page or side-panel patterns are preferred when the task needs substantial context, comparison, or multiple steps.

## 12. Widgets and KPIs

- A widget must answer a specific operational question or enable a specific action.
- It states its owner/source, current scope, time basis, freshness, and exceptional state when these affect interpretation.
- KPIs are selected for decision value, not because data exists.
- Trends expose comparison period and direction; targets expose target source; estimates are labeled.
- A dashboard balances status, action queues, exceptions, progress, and analysis. It is not a wall of interchangeable cards.
- AI-derived insight is visually and textually distinguished from canonical metrics.

## 13. Charts

Choose a chart from the question:

| Question | Preferred form |
|---|---|
| Change over time | Line or area with restrained fill |
| Compare categories | Bar/column; horizontal when labels are long |
| Progress through stages | Funnel or stage table when stage order is meaningful |
| Relationship or transfer flow | Sankey only when flow magnitude is the task; also provide a data table |
| Part-to-whole | Stacked bar; pie/donut only for a few distinct parts |
| Distribution | Histogram or box plot for analytical users |
| Current status | KPI plus context, not a chart by default |

Rules:

- Every chart has a title, purpose, units, period, legend where needed, and accessible alternative.
- Do not use 3D, decorative perspective, animation-dependent interpretation, or color-only series distinction.
- Use OS accent color for emphasis, semantic colors for meaning, and neutrals for context.
- Support keyboard or equivalent access to interactive data and a tabular form for consequential values.
- Loading, no-data, partial-data, stale-data, and error states are explicit.

## 14. Navigation

- Global/platform navigation, OS navigation, page navigation, and context switching have distinct visual roles.
- Navigation follows enabled modules, authorization, and configuration; it is not hardcoded by a preset.
- Labels use user language while routes and models preserve canonical compatibility.
- Current location and parent context are perceivable without color alone.
- Collapsed navigation retains accessible names and discoverability.
- Core and OS navigation must not imply that one owns another's workflow.
- Mobile navigation preserves task priority rather than merely shrinking the desktop shell.

## 15. Motion and Animation

- Motion explains spatial change, confirms causality, or draws attention to a new state.
- Prefer short, subtle transitions. Avoid continuous ambient movement in operational surfaces.
- Honor reduced-motion preferences and provide an equivalent non-motion cue.
- Do not animate large data changes in a way that delays comprehension or hides the final value.
- Loading motion must not imply progress that the system cannot measure.
- No parallax, custom cursor, or decorative entrance animation is a default NexoraXS pattern.

## 16. State Design

### 16.1 Empty

Distinguish first-use, no-result, filtered-empty, permission-empty, and unavailable states. Explain why the state exists and offer the most relevant authorized next action.

### 16.2 Loading

Preserve page structure, name the operation when waiting is material, prevent duplicate submission, and keep status perceivable. Use skeletons for known layouts, progress for measurable work, and concise status for indeterminate work.

### 16.3 Error

State what failed, what was preserved, what the user can do, and where to get help. Place field errors near fields and provide a summary when multiple errors exist. Never expose raw implementation messages as user guidance.

### 16.4 Success

Confirm the actual business outcome and scope. Use persistent confirmation for consequential changes and transient feedback for low-risk actions. Offer the next relevant task without trapping the user.

### 16.5 Permission

Explain that access is restricted without disclosing protected data. Distinguish missing permission from unavailable capability, subscription state, enablement state, and configuration state.

## 17. Light and Dark Modes

- Both modes express the same hierarchy, semantics, and information—not separate brand personalities.
- Use semantic tokens rather than inverted hard-coded values.
- Test contrast, charts, elevation, input states, focus, disabled states, images, logos, and printed/exported content in each applicable mode.
- Do not assume shadows work in dark mode; boundaries may require tonal separation or borders.
- User preference should be respected and transitions should not flash an incorrect theme.

## 18. RTL and LTR

- Use logical properties and direction-aware layout primitives.
- Mirror spatial navigation, disclosure, progress, and directional icons only when their meaning is directional.
- Do not mirror brand marks, media controls, mathematical symbols, or universally fixed meanings.
- Test mixed Arabic/Latin text, identifiers, email, phone, currency, dates, SKU/barcodes, and charts.
- Align text according to language and data meaning, not a blanket page rule.
- Preserve the same task order and information priority in both directions.
- User-entered text remains as entered.

## 19. Accessibility

Accessibility targets WCAG 2.2 AA or the stricter applicable product/legal requirement.

- Semantic HTML and native controls first.
- Complete keyboard operation with visible, unobscured focus.
- Programmatic names, descriptions, relationships, status announcements, and error association.
- Sufficient contrast and non-color cues.
- Adequate target size and spacing.
- Zoom, reflow, text resizing, screen reader, reduced motion, and high-contrast validation.
- Accessible authentication and no unnecessary cognitive tests.
- Bilingual screen-reader testing for language changes and direction.
- Charts, drag-and-drop, complex grids, and visual editors require equivalent accessible interaction.

An accessibility exception is a release blocker unless formally accepted through the governing process with scope, evidence, mitigation, and expiry.

## 20. DNA Compliance Evidence

Each UI feature must provide, proportionate to risk:

- token and component reuse evidence;
- Arabic/RTL and English/LTR captures or automated checks;
- keyboard and focus validation;
- light/dark and responsive validation;
- state coverage for loading, empty, error, permission, and success;
- business context and ownership review;
- accessibility test results;
- an approved proposal reference for material divergence from an existing design.
