
# studio-admin Dependency and Relationship Map

## Internal Capability Relationships

```text
RootLayout
├── ThemeBootScript
├── PreferencesStoreProvider
├── TooltipProvider
└── Toaster

DashboardLayout
├── SidebarProvider
│   └── AppSidebar
│       ├── typed sidebarItems
│       ├── path-driven NavMain
│       └── preference-backed variants
├── SearchDialog
├── LayoutControls
├── ThemeSwitcher
└── AccountSwitcher

Screen modules
├── embedded data/schema modules
├── shared UI primitives
├── local React/Zustand/Table/Form state
└── optional visualization/interaction packages
```

## External Dependency Clusters

| Cluster | Direct packages | Used by |
|---|---|---|
| Runtime | Next, React, React DOM | every route/layout |
| UI primitives | Radix UI, Base UI, shadcn, CVA, clsx, Tailwind merge, Lucide | shared UI/shell |
| Forms/validation | React Hook Form, Hookform resolvers, Zod | auth and invoice |
| State/tables | Zustand, TanStack Table | preferences, chat/mail, nine tables |
| Charts/calendar | Recharts, FullCalendar, date-fns | dashboards/calendar/invoice |
| Drag/layout | dnd-kit, resizable panels, Embla, Vaul, cmdk | Kanban, invoice, mail, overlays, search |
| Geography | D3 Geo, TopoJSON, world-atlas CDN | logistics map |
| Assets/fonts | Simple Icons, Geist, Next Google fonts | brand icons and typography |

## Coupling

- Dashboard screens are coupled to source fixtures and shared primitives but not to a backend contract.
- Theme/layout behavior is coupled across registry, boot script, store, cookie adapters, root attributes, global CSS, and shell.
- Mail/chat selection stores import their source fixture arrays for initial IDs.
- Logistics rendering depends at runtime on a public CDN fetch.
- No cross-package or cross-service dependency exists because the repository is a single application package.

## Feature-Class Counts

| Classification | Feature records carrying class |
|---|---:|
| accessibility | 15 |
| administration | 18 |
| analytics | 63 |
| architecture | 9 |
| assets | 1 |
| authentication | 11 |
| authorization | 9 |
| automation | 3 |
| build | 4 |
| collaboration | 18 |
| configuration | 21 |
| data | 18 |
| deployment | 2 |
| design-system | 28 |
| developer-experience | 19 |
| documentation | 1 |
| forms | 4 |
| integration | 7 |
| interaction | 64 |
| layout | 1 |
| localization | 2 |
| navigation | 28 |
| notification | 1 |
| operations | 10 |
| performance | 1 |
| personalization | 15 |
| product | 66 |
| realtime | 1 |
| resilience | 1 |
| responsive | 9 |
| reusable-internal | 36 |
| search | 7 |
| security | 11 |
| state | 16 |
| tenancy | 1 |
| testing | 7 |
| ui | 204 |
| validation | 1 |
| workflow | 38 |
