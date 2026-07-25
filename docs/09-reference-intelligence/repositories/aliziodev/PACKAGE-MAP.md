# Package Map

## Internal Package Structure

The repository is not a package monorepo. It contains one Composer project and one pnpm importer (`web`). The root `package.json` has no dependencies and delegates frontend commands to `web`. [E003](EVIDENCE-MANIFEST.md#e003) [E004](EVIDENCE-MANIFEST.md#e004) [E046](EVIDENCE-MANIFEST.md#e046)

| Internal unit | Packaging boundary | Imports/ownership |
|---|---|---|
| Laravel application | Composer project, PSR-4 `App\`, `Database\Factories\`, `Database\Seeders\` | Owns backend runtime and database behavior |
| Next application | pnpm importer `web` with `@/*` path alias | Owns browser/server-rendered frontend and proxy route |
| Root JavaScript facade | private npm manifest | Delegates dev/build/start/lint; no runtime package |

## Direct Backend Packages

Exact installed resolutions and declared licenses come from `composer.lock`. [E003](EVIDENCE-MANIFEST.md#e003) [E063](EVIDENCE-MANIFEST.md#e063)

| Package | Constraint | Resolved | Role | License |
|---|---:|---:|---|---|
| `laravel/framework` | `^13.8` | `v13.17.0` | HTTP, ORM, sessions, queues, mail, console | MIT |
| `laravel/fortify` | `^1.37` | `v1.37.2` | Headless auth actions and routes | MIT |
| `laravel/passkeys` | `^0.2.1` | `v0.2.1` | WebAuthn model/ceremonies | MIT |
| `laravel/sanctum` | `^4.3` | `v4.3.2` | Stateful SPA and bearer-token authentication | MIT |
| `laravel/tinker` | `^3.0` | `v3.0.2` | Developer REPL | MIT |

Backend development packages are Faker, Pail, Pao, Pint, Mockery, Collision, Pest, Pest Drift, and Pest Laravel. Their resolved licenses are MIT except Mockery (`BSD-3-Clause`). [E063](EVIDENCE-MANIFEST.md#e063)

## Direct Frontend Packages

Exact resolutions come from `web/pnpm-lock.yaml`; license fields were checked against the npm registry for those exact versions during discovery. [E004](EVIDENCE-MANIFEST.md#e004) [E062](EVIDENCE-MANIFEST.md#e062)

| Package | Resolved | Role | License |
|---|---:|---|---|
| `next`, `react`, `react-dom` | `16.2.9`, `19.2.4`, `19.2.4` | App Router and rendering | MIT |
| `next-sanctum` | `0.2.1` | Auth client, server helpers, route proxy | MIT |
| `@laravel/passkeys` | `0.2.0` | Browser WebAuthn ceremony | MIT |
| `next-themes` | `0.4.6` | Theme persistence and system preference | MIT |
| `radix-ui` | `1.6.0` | Accessible headless primitives | MIT |
| `shadcn` | `4.12.0` | UI generator/style baseline | MIT |
| `lucide-react` | `1.21.0` | Icons | ISC |
| `class-variance-authority` | `0.7.1` | Styled variants | Apache-2.0 |
| `clsx`, `tailwind-merge` | `2.1.1`, `3.6.0` | Class composition | MIT |
| `input-otp` | `1.4.2` | OTP input | MIT |
| `sonner` | `2.0.7` | Toasts | MIT |
| `tw-animate-css` | `1.4.0` | CSS animation utilities | MIT |

Frontend development packages provide Playwright, Tailwind/PostCSS, TypeScript, ESLint, Prettier, React Compiler, and OTP generation. Exact versions and licenses are recorded in [LICENSE-REVIEW.md](LICENSE-REVIEW.md).

## High-Coupling Packages

| Package | Coupling |
|---|---|
| `next-sanctum` | Central coupling between nearly every frontend auth flow and the Laravel endpoint conventions; also supplies the same-origin proxy and optimistic route middleware. |
| Fortify | Owns package-defined auth route surface and invokes repository-defined account actions. |
| Sanctum | Owns stateful SPA classification and protects application APIs. |
| Laravel Passkeys + `@laravel/passkeys` | Split backend/browser WebAuthn ceremony; relies on matching RP ID and allowed origins. |
| Radix/shadcn/Tailwind | Most UI components use these styling and behavior conventions. |

## Package Unknowns

- Transitive npm package license metadata was not exhaustively re-queried; the lockfile contains integrity pins but no license fields. Direct dependency licenses were verified. See [LICENSE-REVIEW.md](LICENSE-REVIEW.md).
- Vendor and `node_modules` directories were absent, so package-internal route implementations were not used as repository evidence. [E003](EVIDENCE-MANIFEST.md#e003) [E004](EVIDENCE-MANIFEST.md#e004)
