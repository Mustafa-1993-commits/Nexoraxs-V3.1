
# studio-admin UI and Design System

## Foundation

- Tailwind CSS v4 and semantic CSS variables: [src/app/globals.css](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/globals.css).
- shadcn generator style `radix-nova`, neutral base, RSC/TSX, Lucide, CSS variables, RTL disabled:
  [components.json](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/components.json).
- 60 files under `src/components/ui`, grouped into the 19 reusable UI catalog records.
- Radix/Base UI primitives, CVA variants, shared `cn`, Lucide/Simple Icons, Sonner, Recharts, FullCalendar, dnd-kit.

## Themes and Personalization

- Modes: light, dark, system.
- Presets: default, Brutalist, Soft Pop, Tangerine.
- Fonts: 18 selectable families.
- Layout: centered/full width, sticky/scroll header, sidebar/inset/floating, icon/offcanvas collapse.
- Persistence: client cookies with early boot and Zustand hydration.

## Interaction Patterns

- Responsive desktop/mobile sidebars, Sheets, Drawers, and split/resizable panels.
- Command/Ctrl+J navigation search and Command/Ctrl+B sidebar toggle.
- Keyboard/pointer/touch Kanban dragging; table sorting/filtering/selection/pagination.
- Live form preview, date pickers, print layout, chart tooltips/legends, toasts, empty/loading/error states.

## Accessibility and Localization

Code-level labels, screen-reader text, focus-visible rings, semantic controls, invalid-state wiring, named overlays, and
keyboard sensors are present. No automated/manual accessibility evidence, reduced-motion handling, translation runtime,
Arabic, or RTL runtime is present. Root language is English.

## Primitive Coverage

| Machine family | Count |
|---|---:|
| Shared UI source files | 60 |
| Reusable UI catalog records | 19 |
| Client component files | 131 |
| Chart-bearing files | 22 |
| TanStack Table implementations | 9 |
