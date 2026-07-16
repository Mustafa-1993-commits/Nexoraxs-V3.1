# NexoraXS Design Patterns

## 1. Purpose

This catalogue defines reusable product-design patterns for NexoraXS. Patterns describe intent, anatomy, behavior, and guardrails. They do not approve a feature, screen, route, domain model, or component implementation, and they do not authorize redesign of an existing screen.

Use the installed UI/UX Pro Max Skill to research candidate executions. Use this catalogue to ensure those candidates solve NexoraXS business problems, preserve ownership, and behave consistently.

## 2. Pattern Use Rules

1. Confirm the business task, owner, context, and consequence.
2. Reuse an approved pattern when it fits the task.
3. Compose patterns rather than duplicating them inside an OS.
4. Adapt density and domain emphasis through approved variants, not ad hoc forks.
5. Define every relevant state and bilingual direction.
6. If the pattern cannot solve the problem without changing its semantics, submit a design proposal.
7. A pattern never transfers canonical ownership to the UI or to a consuming OS.

## 3. Workspace Creation

**Intent:** create the Core-owned platform context with minimal uncertainty.

**Anatomy:** purpose and progress, Workspace identity fields, locale defaults, review, completion and next step.

**Behavior:** use a guided flow only when it reduces errors; preserve entered data; validate inline and at submission; make defaults editable; confirm the created scope.

**Guardrails:**

- Workspace creation is Core-owned.
- Never create typed Workspaces for an industry or OS.
- Do not collapse Business, Business Unit, Department, or Branch into Workspace.
- If Business creation follows, explain the relationship without inventing duplicate canonical truth.
- Product recommendations may follow business knowledge but remain optional and explainable.

## 4. Dashboard

**Intent:** help a user understand current state and take the next valuable action.

**Anatomy:** active context, page purpose, readiness/exception summary, prioritized actions, owner-valid KPIs, work queues, trends, freshness/provenance.

**Behavior:** prioritize decisions and work over decoration; retain a stable hierarchy; allow appropriate filtering without obscuring scope; distinguish canonical metrics from projections and AI insight.

**Guardrails:**

- Each OS owns its operational dashboard; Core owns platform-level dashboards.
- A cross-OS view consumes contracts/projections and does not become canonical owner.
- Avoid “card walls,” redundant metrics, and charts without a decision purpose.
- Define first-use, no-data, stale, partial, loading, error, and unauthorized states.

## 5. Settings

**Intent:** change configuration safely within a clear owner and scope.

**Anatomy:** scope indicator, section navigation, field groups, defaults/source, validation, save/revert, change consequence, audit/help.

**Behavior:** separate settings by canonical owner; show inherited versus overridden values; protect unsaved work; give precise save feedback.

**Guardrails:**

- Core settings do not write OS configuration; OS settings do not write Core identity or entitlement.
- Business Brain or Configuration Engine proposals remain proposals until consumed through the governed path.
- Do not mix subscription, enablement, configuration, permission, and operational status.

## 6. Wizard

**Intent:** guide a user through a low-frequency, multi-stage, or consequential task.

**Anatomy:** goal, progress, current step, contextual help, inputs, validation, back/next, save/exit where permitted, review, confirmation.

**Behavior:** ask only what is needed; permit correction; keep completed information; explain irreversible stages; show a final summary before commitment.

**Guardrails:**

- Steps reflect user decisions, not internal service boundaries.
- Recommendations may preselect only when transparent and editable.
- Do not use a wizard for simple single-screen work.
- OS-specific setup remains inside the owning OS even when launched from Product Hub.

## 7. Data Table

**Intent:** compare, find, select, and act on structured records.

**Anatomy:** title/count, search/filter, active-filter summary, columns, sort, rows, selection, row/bulk actions, pagination, state feedback.

**Behavior:** preserve filter and sort state through recoverable failures; expose keyboard access; maintain identity and primary state at responsive widths; support a structured alternative when a wide table is unsuitable.

**Guardrails:**

- Do not hide consequential fields during responsive adaptation.
- Bulk actions show count, scope, eligibility, and consequence.
- Projection rows cannot expose writes not authorized by the canonical owner.
- Empty-result and empty-dataset states have different guidance.

## 8. Analytics

**Intent:** support exploration, comparison, diagnosis, and decision-making.

**Anatomy:** analytical question, scope/period, data freshness/source, filters, visualization, comparison, definitions, accessible data table, export if authorized.

**Behavior:** choose visualization from the question; disclose estimates and incomplete data; preserve filter context; allow users to inspect underlying values when permitted.

**Guardrails:**

- Analytics does not become canonical owner of source facts.
- AI interpretation is labeled and explainable.
- Avoid visual precision beyond source quality.
- Do not use color, animation, or chart shape as the only interpretation channel.

## 9. Reports

**Intent:** present a defined, repeatable business view for review, sharing, or compliance.

**Anatomy:** report name/definition, owner, scope, parameters, generated period/time, content, totals, status, authorized export/share actions.

**Behavior:** keep generation state and provenance explicit; preserve parameter choices; distinguish operational projection from formal document where architecture does.

**Guardrails:**

- Reports remain owned by the relevant OS or frozen owner.
- A report does not create new canonical facts.
- Currency, locale, timezone, tax, and rounding assumptions must be visible where material.

## 10. Forms

**Intent:** capture or update canonical or proposed information accurately.

**Anatomy:** purpose, visible labels, grouped fields, help/units, validation, primary/secondary actions, outcome feedback.

**Behavior:** use semantic inputs and autocomplete; allow paste; preserve valid values; indicate required/optional status; focus errors accessibly; prevent duplicate submission while keeping progress perceivable.

**Guardrails:**

- State owner and scope when ambiguity could cause a wrong write.
- A generated suggestion remains editable and distinguishable.
- Avoid placeholder-only labels and validation that erases input.

## 11. Search

**Intent:** find an authorized entity, asset, action, or answer efficiently.

**Anatomy:** labeled input, scope, query state, suggestions, result groups, filters, result metadata, no-result and error states.

**Behavior:** debounce only when it improves performance without obscuring submission; preserve query; expose recent/suggested items only when privacy-safe; support keyboard result navigation.

**Guardrails:**

- Global search may project across owners but cannot bypass authorization or become canonical owner.
- Marketplace search is governed asset discovery, not generic retail search.
- AI answers cite or identify source context and remain advisory.

## 12. Sidebar

**Intent:** provide stable navigation within the current platform or OS.

**Anatomy:** product identity, context, grouped destinations, current state, badges, collapse behavior, supporting actions.

**Behavior:** derive available destinations from approved modules/configuration and permission; retain accessible names when collapsed; keep current location perceivable.

**Guardrails:**

- Do not hardcode navigation by business preset.
- Do not mix another OS's operational destinations into the current OS.
- Context switching and navigation are distinct actions.

## 13. Top Navigation

**Intent:** expose platform-level context, global actions, account, language, theme, and high-priority status.

**Anatomy:** active context, optional search/command entry, notifications, language/direction, theme, account and safe product switching.

**Behavior:** keep high-frequency global controls stable; make context changes explicit; adapt to mobile task priority.

**Guardrails:**

- Do not overload the bar with domain actions that belong in the page or OS navigation.
- Show the effect of switching Workspace/Business Unit/Branch before discarding local work.

## 14. Cards

**Intent:** group one coherent summary, choice, entity, or action.

**Anatomy:** optional icon/media, title, summary/value, metadata/status, primary or overflow action.

**Behavior:** make interactive scope unambiguous; keep action hierarchy consistent; use equal height only when comparison benefits.

**Guardrails:**

- Do not use a card merely to add a border around content.
- Product and plan cards distinguish availability, subscription, enablement, and setup.
- Status requires text or icon meaning in addition to color.

## 15. Dialogs

**Intent:** obtain a focused decision without losing page context.

**Anatomy:** clear title, consequence/context, concise content, explicit actions, close behavior, error/progress state.

**Behavior:** manage focus; return focus to the trigger; protect unsaved work; use outcome-specific action labels.

**Guardrails:**

- Do not place a large form or multi-step workflow in a small dialog.
- Confirmation severity matches recoverability and business impact.
- Never use a modal for ordinary success feedback.

## 16. Marketplace

**Intent:** support governed discovery and lifecycle management of platform assets.

**Anatomy:** asset identity/family, publisher, version, compatibility, dependencies, certification/trust, commercial/entitlement state, lifecycle state, evidence, authorized action.

**Behavior:** make comparison and provenance primary; show the exact effect of installation, activation, upgrade, and removal; reveal blockers before commitment.

**Guardrails:**

- Marketplace is a Core bounded context, not an e-commerce marketplace or independent OS.
- Representation does not silently acquire an external asset family's canonical ownership.
- Do not hide compatibility, dependency, license, or permission limitations behind a primary CTA.

## 17. AI Assistant

**Intent:** provide contextual explanation, drafting, suggestions, and governed action proposals.

**Anatomy:** assistant identity, active context, user intent, generated/advisory label, explanation/source, response, proposed action preview, accept/edit/reject controls, feedback and limits.

**Behavior:** remain available at the point of work without covering the core workflow; preserve conversation privacy and context boundaries; degrade safely when unavailable.

**Guardrails:**

- Knowledge and deterministic decisions precede AI advice.
- AI does not silently write canonical data or execute consequential actions.
- Recommendation reasoning and proposed change are inspectable.
- Do not use glow or gradient alone to identify AI.

## 18. Notifications

**Intent:** communicate time-relevant state or required attention.

**Anatomy:** owner/source, concise message, time, severity, scope, read state, authorized action, destination.

**Behavior:** choose toast, inline alert, inbox item, badge, or external channel according to urgency and persistence; deduplicate and group where appropriate.

**Guardrails:**

- OSs produce domain notifications; platform notification infrastructure does not become domain owner.
- Critical messages cannot depend on color or animation.
- Do not use urgency to market optional products.

## 19. Empty State

**Intent:** explain why useful content is absent and enable the next valid action.

**Anatomy:** state-specific title, explanation, scope/filter context, primary next action, secondary help.

**Behavior:** distinguish first-use, no-result, filtered-empty, unavailable, and unauthorized; keep copy concise and respectful.

**Guardrails:** do not offer creation when permission, subscription, enablement, or ownership prevents it; do not use decorative illustration as a substitute for guidance.

## 20. Error State

**Intent:** help the user understand and recover from failure.

**Anatomy:** human-readable problem, preserved work, affected scope, retry/correction/support action, trace reference when useful.

**Behavior:** keep unaffected content usable; retry only safe operations; associate errors with controls; announce dynamic failures accessibly.

**Guardrails:** do not expose secrets or raw stack traces; do not blame the user; do not imply success after partial failure.

## 21. Loading State

**Intent:** maintain orientation and prevent accidental duplicate work while content or action is pending.

**Anatomy:** stable structure, status, optional progress, cancellation only when supported, timeout/recovery behavior.

**Behavior:** skeleton known layouts, show measurable progress when true, and communicate long operations. Prevent duplicate submission while keeping relevant controls and status accessible.

**Guardrails:** no fake percentage, indefinite silent spinner, layout jump, or animation that ignores reduced motion.

## 22. Permission State

**Intent:** explain that the current user cannot view or perform an action.

**Anatomy:** restriction statement, affected capability, safe explanation, request-access or return action when supported.

**Behavior:** hide protected content, not the fact that a known feature exists when product policy permits; distinguish missing access from plan, enablement, configuration, compatibility, or service failure.

**Guardrails:** do not reveal sensitive existence or values; do not promise access the current user cannot grant; preserve independent OS semantics.

## 23. Pattern Validation

Every selected pattern must document:

- architectural and UI owner;
- active scope and permission;
- reused components and variants;
- responsive and density behavior;
- Arabic/RTL and English/LTR behavior;
- keyboard, screen-reader, focus, contrast, and reduced-motion behavior;
- loading, empty, partial, error, permission, success, and recovery states;
- compatibility with the current experience;
- proposal approval when semantics or learned behavior change.
