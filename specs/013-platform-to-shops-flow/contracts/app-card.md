# UI Contract: AppCard (Extended)

**Feature**: `013-platform-to-shops-flow`
**File**: `apps/core-platform/components/dashboard/AppCard.tsx`

## Interface Extension

The `App` interface in `apps/core-platform/lib/mock-data/apps.ts` gains two optional
fields:

```ts
export interface App {
  id: string;
  name: string;
  description: string;
  available: boolean;
  buttonLabel?: string;  // NEW: overrides "Open" when set
  subtitle?: string;     // NEW: renders below description when set
}
```

## Rendering Contract

| Prop present | Rendered output |
|---|---|
| `buttonLabel` set | Button text = `buttonLabel` |
| `buttonLabel` absent | Button text = `"Open"` (existing default) |
| `subtitle` set | Small chip/label rendered below `description` |
| `subtitle` absent | No subtitle rendered (existing behaviour) |
| `available: false` | New props ignored; Coming Soon state unchanged |

## Shops Entry in mockApps

```ts
{
  id: "shops",
  name: "Shops",
  description: "Commerce & POS — manage products, sales, and customers.",
  available: true,
  buttonLabel: "Open Shops",
  subtitle: "Business management · POS · Commerce",
}
```

## Visual Constraints

- `buttonLabel` must not change the button's size, spacing, or colour — it is a
  text-only substitution
- `subtitle` must use the `.chip` class and `text-white/40` colour for visual
  consistency with other chips in the design system
- No new props may trigger any navigation or side-effects
