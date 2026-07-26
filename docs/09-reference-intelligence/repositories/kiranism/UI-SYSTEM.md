
# Kiranism Shadcn UI System

## Foundation

- shadcn Base Nova, React Server Components, TypeScript, CSS variables, and Tabler icons are configured in
  [components.json](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/components.json). Its CSS path is stale (`app/globals.css` versus
  `src/styles/globals.css`) and is recorded as contradiction `C-005`.
- Tailwind CSS 4 and semantic global variables load through
  [global styles](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/styles/globals.css) and
  [theme imports](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/styles/theme.css).
- Ten palettes each provide light/dark tokens for base surfaces, five chart series, sidebar, fonts, radius, spacing,
  tracking, and shadows; see [Vercel palette contract](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/styles/themes/vercel.css).
- `class-variance-authority`, `tailwind-merge`, and semantic component variants are used by controls such as
  [Button variants](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/button.tsx) and
  [Badge variants](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/badge.tsx).

## Primitive Coverage

| Suite | Exact files |
|---|---|
| Disclosure | [accordion](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/accordion.tsx), [collapsible](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/collapsible.tsx) |
| Dialog/overlay | [dialog](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/dialog.tsx), [alert dialog](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/alert-dialog.tsx), [sheet](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/sheet.tsx), [drawer](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/drawer.tsx), [modal](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/modal.tsx) |
| Menus | [dropdown](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/dropdown-menu.tsx), [context menu](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/context-menu.tsx), [menubar](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/menubar.tsx), [popover](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/popover.tsx), [hover card](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/hover-card.tsx), [tooltip](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/tooltip.tsx) |
| Form controls | [input](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/input.tsx), [textarea](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/textarea.tsx), [select](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/select.tsx), [checkbox](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/checkbox.tsx), [switch](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/switch.tsx), [radio](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/radio-group.tsx), [slider](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/slider.tsx), [OTP](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/input-otp.tsx) |
| Navigation/display | [breadcrumb](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/breadcrumb.tsx), [pagination](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/pagination.tsx), [navigation menu](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/navigation-menu.tsx), [card](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/card.tsx), [table](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/table.tsx), [tabs](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/tabs.tsx) |
| Feedback | [alert](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/alert.tsx), [progress](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/progress.tsx), [skeleton](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/skeleton.tsx), [spinner](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/spinner.tsx), [toast host](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/sonner.tsx) |
| Specialized | [chart](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/chart.tsx), [kanban](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/kanban.tsx), [notification card](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/notification-card.tsx), [sidebar](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/sidebar.tsx), [infobar](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/src/components/ui/infobar.tsx) |

All 59 root primitive files and ten table-composite files were inspected. Some complete exports are not mounted by the
current application (for example menubar, context menu, drawer, hover card, navigation menu, resizable panels, and
button group); their catalog state is reusable substrate within a verified suite, not a visible product claim.

## Responsive and Interaction Patterns

- Sidebar: 16rem desktop, 3rem icon rail, 18rem mobile sheet; Control/Command+B toggle.
- Header: sticky translucent surface; command trigger hidden below `md`; selector/mode/notifications retained according
  to their own responsive classes.
- Page container: responsive padding, full width, loading/access/error-friendly composition.
- Kanban: vertical mobile and horizontally scrollable desktop columns.
- Chat: compact conversation selector on mobile and two-column desktop.
- Tables: horizontal scroll, sticky header, responsive pagination/view controls.

## Accessibility and Localization

Verified code patterns include named triggers, semantic Base UI controls, focus-visible rings, error descriptions,
screen-reader text, live chat announcements, keyboard kanban/sidebar navigation, and reduced-motion chat handling.
The project has no a11y tests or declared conformance level. Global theme transitions do not check reduced motion.
The runtime is English-only, has no translation framework, and uses physical left/right positioning in several files;
RTL behavior is absent.
