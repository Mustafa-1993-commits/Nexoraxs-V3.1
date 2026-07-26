# Plane UI System

## Application Shell and Navigation

The main application uses route layouts, MobX providers, responsive workspace/project sidebars, extended sidebars, favorites/folders, quick actions, user/workspace menus, and page-specific headers. Sidebar collapse/peek states are persisted in local storage for multiple contexts. [E030](EVIDENCE-MANIFEST.md#e030), [E035](EVIDENCE-MANIFEST.md#e035)

Power-K is a context-aware command palette with global shortcuts, creation commands, entity navigation, workspace/project/settings menus, contextual cycle/module/page/work-item commands, and preference menus for language, week start, theme, and timezone. [E034](EVIDENCE-MANIFEST.md#e034)

## Work-Item Presentation

| Layout | Verified behavior | Source |
|---|---|---|
| List | Grouped list, group headers, quick add/actions, profile/cycle/module/project/view/archive roots | `apps/web/core/components/issues/issue-layouts/list` |
| Kanban | Groups, subgroups/swimlanes, drag overlay, quick add/actions | `…/kanban`, `group-drag-overlay.tsx` |
| Spreadsheet | Editable property columns, table navigation, workspace/project/cycle/module/view roots | `…/spreadsheet` |
| Calendar | Month/week controls, date tiles, issue blocks, quick add, cycle/module/project/view roots | `…/calendar` |
| Gantt | Timeline blocks and root integration | `…/gantt`, shared Gantt components |

Layout selection, filters, grouping, subgrouping, order, display properties, empty groups, subissues, and calendar range are persisted through view/member/user properties. [E030](EVIDENCE-MANIFEST.md#e030)

Detail can open as a route, side peek, modal/full-screen peek, or embedded overview depending on context. It exposes name/description, fields, subissues, links, attachments, relations, comments, activity, subscribers, reactions, and quick actions. [E013](EVIDENCE-MANIFEST.md#e013), [E030](EVIDENCE-MANIFEST.md#e030)

## Design Systems

Plane has two tracked shared component libraries:

- `@plane/propel`: current/larger design-system surface with accordion, avatar, badge, banner, button, calendar, card, charts, combobox, command, dialogs, emoji, empty states, icons, input, menu, pills, popover, portals, skeletons, switches, tabs, tables, toast, toolbar, tooltip, and Storybook. [E065](EVIDENCE-MANIFEST.md#e065)
- `@plane/ui`: auth forms, dropdowns, form fields, buttons, cards, navigation/display controls, modals, popovers, progress, sortable rows/tables, tabs, tooltips, loaders, and Storybook. [E066](EVIDENCE-MANIFEST.md#e066)

The coexistence of both is verified. The repository does not contain a completed deprecation/migration statement establishing exclusive canonical use.

## Theme and Tokens

Supported theme values are `system`, `light`, `dark`, `light-contrast`, `dark-contrast`, and `custom`. Shared CSS defines semantic canvas, surface, layer, text, border, icon, status, chart, and label tokens plus high-contrast variants. [E035](EVIDENCE-MANIFEST.md#e035)

Custom themes configure primary/background/dark palettes and can be imported/exported as configuration. Workspace themes are persisted through API/model surfaces; user theme mode and sidebar state are also personalized. [E035](EVIDENCE-MANIFEST.md#e035)

## Rich Editor

`@plane/editor` provides reusable Tiptap/ProseMirror rich and document editors, HTML/JSON/binary transforms, menus/toolbars, tables, lists, code blocks, links, mentions, uploads/assets, collaboration bindings, and CE/EE extension boundaries. Work-item descriptions, comments, intake content, and pages consume editor capabilities. [E064](EVIDENCE-MANIFEST.md#e064)

Pages add outline navigation, document metadata/actors, assets, version history, sync/offline badges, lock/access controls, export, AI menu, and realtime collaboration. [E031](EVIDENCE-MANIFEST.md#e031)

## Feedback, Empty, Loading, and Error States

Feature components include loaders, skeletons, empty states, validation messages, 404 screens, unauthorized/failure paths, toasts, confirmation/delete modals, progress indicators, upload state, syncing/offline badges, and retry/error boundaries. The presence of these states is source-verified; consistency across every screen was not browser-tested. [E030](EVIDENCE-MANIFEST.md#e030), [E031](EVIDENCE-MANIFEST.md#e031), [E037](EVIDENCE-MANIFEST.md#e037)

## Localization

`@plane/i18n` loads 19 languages through i18next/resources-to-backend and ICU with English fallback. It defines 28 namespaces and 532 locale JSON files, persists `userLanguage`, changes `<html lang>`, and provides sync/type-generation scripts. [E036](EVIDENCE-MANIFEST.md#e036)

Languages: English, French, Spanish, Japanese, Simplified Chinese, Traditional Chinese, Russian, Italian, Czech, Slovak, German, Ukrainian, Polish, Korean, Brazilian Portuguese, Indonesian, Romanian, Vietnamese, and Turkish.

No Arabic/Hebrew/other RTL locale is registered, the language setter does not set `dir`, and shared CSS explicitly declares `direction: ltr`; RTL support is therefore a verified absence/limitation (`C-008`), not an unknown feature. [E088](EVIDENCE-MANIFEST.md#e088)

## Accessibility

Source contains semantic labels, ARIA attributes, status roles, keyboard handlers, Escape/arrow navigation, focusable menu/dialog primitives, accessible tooltips, high-contrast themes, and a dedicated accessibility locale namespace. Power-K and table/dropdown/menu components are explicitly keyboard-aware. [E038](EVIDENCE-MANIFEST.md#e038)

This establishes a code-level accessibility baseline only. No tracked automated accessibility suite, screen-reader audit, WCAG conformance report, or browser accessibility acceptance suite was found. High-contrast support does not prove general conformance.

## Assets

The pinned tree contains 411 binary/media/font assets and 97 SVG assets. They include branding, auth backgrounds, provider logos, empty/error states, product screenshots, favicons, editor/design-system assets, and Space/admin illustrations. Asset presence is not counted as functional behavior unless a source consumer is also present. [E008](EVIDENCE-MANIFEST.md#e008)
