# UI System

## Foundation

The active frontend uses Tailwind CSS v4, shadcn's `radix-nova` preset, Radix primitives, Lucide icons, CSS custom properties in OKLCH, Geist fonts, and class composition through `clsx` plus `tailwind-merge`. [E004](EVIDENCE-MANIFEST.md#e004) [E039](EVIDENCE-MANIFEST.md#e039) [E060](EVIDENCE-MANIFEST.md#e060)

The root mounts:

- a system-aware theme provider with class switching;
- a themed Sonner toaster;
- a global tooltip provider;
- route-group-scoped Sanctum providers rather than global auth state.

[E030](EVIDENCE-MANIFEST.md#e030) [E039](EVIDENCE-MANIFEST.md#e039) [E042](EVIDENCE-MANIFEST.md#e042)

## Design Tokens

`web/app/globals.css` defines light and dark semantic tokens for background, foreground, card, popover, primary, secondary, muted, accent, destructive, border, input, ring, five chart colors, radii, and sidebar variants. It applies shared border/outline behavior and default body/font styles. [E039](EVIDENCE-MANIFEST.md#e039)

## Layouts and Navigation

| Capability | Behavior | Evidence |
|---|---|---|
| Sidebar shell | Inset, icon-collapsible desktop sidebar; sheet-based mobile mode; cookie persistence; `Ctrl/Cmd+B` shortcut; tooltips when collapsed | [E041](EVIDENCE-MANIFEST.md#e041) [E042](EVIDENCE-MANIFEST.md#e042) |
| Header shell | Desktop navigation, mobile sheet, user menu, external links, optional breadcrumb band | [E041](EVIDENCE-MANIFEST.md#e041) |
| Settings layout | Profile/Security/Appearance local navigation with current-route styling | [E041](EVIDENCE-MANIFEST.md#e041) |
| Auth layouts | Simple active wrapper; card and split alternatives retained | [E041](EVIDENCE-MANIFEST.md#e041) |
| Breadcrumbs | Semantic breadcrumb nav with current-page handling | [E041](EVIDENCE-MANIFEST.md#e041) [E042](EVIDENCE-MANIFEST.md#e042) |
| User menu | Avatar/fallback initials, profile link, logout with toast | [E041](EVIDENCE-MANIFEST.md#e041) [E043](EVIDENCE-MANIFEST.md#e043) |

## Reusable UI Primitives

Twenty-seven source files implement the following capabilities. [E042](EVIDENCE-MANIFEST.md#e042)

| Family | Components |
|---|---|
| Overlays and menus | Alert dialog, dialog, dropdown menu with checkbox/radio/submenu, sheet, tooltip |
| Forms and controls | Button variants, checkbox, input, label, OTP input/group/slot/separator, select with scrolling, toggle, toggle group |
| Navigation and disclosure | Breadcrumb, collapsible, navigation menu, responsive sidebar |
| Content and feedback | Alert, avatar/group/badge, badge, card, separator, skeleton, spinner, themed toaster |
| Visual utilities | Icon adapter, placeholder pattern |

## Interaction Patterns

- Forms expose pending state through disabled controls and spinners.
- Backend validation errors are normalized to per-field messages; aggregate setup errors use an alert.
- Destructive actions use confirmation dialogs and distinct destructive variants.
- Passkey browser cancellations are intentionally silent; actionable failures are displayed.
- Session/passkey rows show relative timestamps and recognizable browser/platform labels.
- Theme tabs defer active-state rendering until hydration.
- Session revalidation runs on focus/visibility with a 10-second throttle.
- Clipboard use reports success state through an icon but logs unsupported/failure cases only.

[E031](EVIDENCE-MANIFEST.md#e031) through [E043](EVIDENCE-MANIFEST.md#e043)

## Accessibility Evidence

Verified code-level measures include:

- semantic labels and `htmlFor` associations on forms;
- `aria-label`, `aria-current`, `aria-disabled`, `aria-expanded`, `aria-controls`, `aria-hidden`, status and alert roles;
- screen-reader-only labels/titles for icon-only buttons and pages;
- focus-visible rings and explicit focus recovery after validation;
- keyboard-aware Radix primitives and sidebar shortcut;
- disabled pending controls and dialog focus management;
- motion-safe guards on parts of the welcome animation.

[E035](EVIDENCE-MANIFEST.md#e035) through [E043](EVIDENCE-MANIFEST.md#e043)

No automated accessibility suite, screen-reader test, contrast audit, reduced-motion audit, or Arabic/RTL test is present.

## Localization and Direction

- Root document language is hard-coded `en`.
- Geist loads only the Latin subset.
- Relative time formatting explicitly uses English.
- User-visible strings are hard-coded English.
- shadcn configuration has `rtl: false`.
- Laravel locale/fallback are configurable and default to English, but no application translation resources are tracked.

[E025](EVIDENCE-MANIFEST.md#e025) [E030](EVIDENCE-MANIFEST.md#e030) [E039](EVIDENCE-MANIFEST.md#e039) [E043](EVIDENCE-MANIFEST.md#e043) [E060](EVIDENCE-MANIFEST.md#e060)

## Assets

The active frontend contains a favicon, an inline Laravel logo and illustration on the welcome page, a reusable inline logo component, and unused create-next-app SVG assets. The Laravel public folder contains its own favicon and permissive `robots.txt`. [E040](EVIDENCE-MANIFEST.md#e040) [E041](EVIDENCE-MANIFEST.md#e041) [E058](EVIDENCE-MANIFEST.md#e058)

## UI Gaps

- Dashboard panels are placeholders.
- Search is visual-only.
- Several alternative layouts and stock assets are unused by active routes.
- No table, data grid, pagination, search results, filter, bulk action, chart rendering, report, editor, file upload, or command palette exists.
