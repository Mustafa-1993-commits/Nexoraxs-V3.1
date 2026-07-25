# License Review

## Repository License

- **License:** MIT
- **Copyright:** 2026 Alizio Dev
- **Verified source:** [E002](EVIDENCE-MANIFEST.md#e002)
- **Impact:** Use, copy, modification, distribution, sublicensing, and sale are permitted, but copies or substantial portions must retain the copyright and permission notice. The software is provided without warranty.

No source code was copied during discovery. This review records obligations only and does not authorize adoption.

## Direct Backend Dependencies

Exact versions and license identifiers are present in `composer.lock`. [E063](EVIDENCE-MANIFEST.md#e063)

| Package | Version | License |
|---|---:|---|
| `laravel/framework` | `v13.17.0` | MIT |
| `laravel/fortify` | `v1.37.2` | MIT |
| `laravel/passkeys` | `v0.2.1` | MIT |
| `laravel/sanctum` | `v4.3.2` | MIT |
| `laravel/tinker` | `v3.0.2` | MIT |
| `fakerphp/faker` | `v1.24.1` | MIT |
| `laravel/pail` | `v1.2.7` | MIT |
| `laravel/pao` | `v1.1.2` | MIT |
| `laravel/pint` | `v1.29.3` | MIT |
| `mockery/mockery` | `1.6.12` | BSD-3-Clause |
| `nunomaduro/collision` | `v8.9.4` | MIT |
| `pestphp/pest` | `v4.7.4` | MIT |
| `pestphp/pest-plugin-drift` | `v4.1.0` | MIT |
| `pestphp/pest-plugin-laravel` | `v4.1.0` | MIT |

## Direct Frontend Dependencies

License identifiers were checked against npm metadata for the exact locked versions. [E004](EVIDENCE-MANIFEST.md#e004) [E062](EVIDENCE-MANIFEST.md#e062)

| Package | Version | License |
|---|---:|---|
| `@laravel/passkeys` | `0.2.0` | MIT |
| `class-variance-authority` | `0.7.1` | Apache-2.0 |
| `clsx` | `2.1.1` | MIT |
| `input-otp` | `1.4.2` | MIT |
| `lucide-react` | `1.21.0` | ISC |
| `next` | `16.2.9` | MIT |
| `next-sanctum` | `0.2.1` | MIT |
| `next-themes` | `0.4.6` | MIT |
| `radix-ui` | `1.6.0` | MIT |
| `react` / `react-dom` | `19.2.4` | MIT |
| `shadcn` | `4.12.0` | MIT |
| `sonner` | `2.0.7` | MIT |
| `tailwind-merge` | `3.6.0` | MIT |
| `tw-animate-css` | `1.4.0` | MIT |

## Direct Frontend Development Dependencies

| Package | Version | License |
|---|---:|---|
| `@playwright/test` | `1.61.1` | Apache-2.0 |
| `@tailwindcss/postcss` | `4.3.1` | MIT |
| `babel-plugin-react-compiler` | `1.0.0` | MIT |
| `eslint` | `9.39.4` | MIT |
| `eslint-config-next` | `16.2.9` | MIT |
| `otpauth` | `9.5.1` | MIT |
| `prettier` | `3.8.5` | MIT |
| `prettier-plugin-tailwindcss` | `0.8.0` | MIT |
| `tailwindcss` | `4.3.1` | MIT |
| `typescript` | `5.9.3` | Apache-2.0 |

Type-only packages were also inspected as direct dev dependencies but are not runtime-distributed behavior in this catalog.

## Assets and Attribution

- The active welcome UI and logo visually derive from Laravel starter scaffolding; repository MIT terms apply to this source, while trademarks/branding are separate from copyright permission and must not be assumed transferable.
- The unused Laravel Blade welcome file embeds a Tailwind-generated CSS notice that identifies Tailwind's MIT license. [E058](EVIDENCE-MANIFEST.md#e058)
- Lucide icons are ISC-licensed; direct use requires retaining applicable notices in distributions that include copied source/material.

## Container and Transitive Review

- Production builds pull `php:8.4-fpm-alpine`, `composer:2`, `node:22-alpine`, `nginx:alpine`, `mysql:8`, and the remote Docker PHP extension installer. Their image/component license bundles and supply-chain attestations are not recorded in the repository. [E044](EVIDENCE-MANIFEST.md#e044) [E045](EVIDENCE-MANIFEST.md#e045)
- Composer transitive package licenses are present in the lockfile but were not individually reproduced here.
- The pnpm lock pins transitive artifacts by integrity but does not embed their licenses; a complete redistribution bill of materials would require a transitive license scan.

## Decision

- **Repository license review:** Pass.
- **Direct dependency review:** Pass for declared direct dependencies at the pinned revision.
- **Adoption impact:** Notice preservation is required for MIT/ISC/BSD/Apache materials as applicable; Apache-2.0 components add license/notice and patent-license considerations.
- **Open obligations:** Transitive npm/container SBOM and trademark/branding review remain required before redistribution or adoption. These are adoption-stage obligations, not gaps in the repository discovery census.
