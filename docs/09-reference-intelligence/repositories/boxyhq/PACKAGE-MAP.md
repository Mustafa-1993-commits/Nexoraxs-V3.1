# BoxyHQ Package and Topology Map

## Repository Topology

The pinned repository has 327 tracked files and one npm package ([package.json](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/package.json)). There are no
npm workspaces, Turborepo configuration, nested package manifests, Git submodules, or vendored application
packages.

| Path | Files | Role |
|---|---:|---|
| `components/` | 97 | Account, auth, billing, landing, email, invitation, shell, team, webhook UI |
| `pages/` | 75 | 33 UI/framework pages and 42 API handlers |
| `lib/` | 46 | Auth, integrations, validation, policies, utilities |
| `tests/` | 22 | Playwright tests, fixtures, setup, teardown |
| `prisma/` | 14 | Schema, seed, migration lock, 11 migrations |
| `hooks/` | 12 | SWR, permission, invitation, team, theme, webhook hooks |
| `models/` | 12 | Prisma repository functions |
| root/config | 32 | Package, framework, scripts, and governance |
| `.github/` | 2 | CI and dependency automation |
| `.do/` | 1 | DigitalOcean deployment template |
| `public/` | 6 | Logos, hero/poster images, avatar fallback |
| `styles/` | 2 | Global and SDK override styles |
| `locales/` | 1 | English common namespace |
| `types/` | 4 | Application, Next.js, and NextAuth types |
| `__tests__/` | 1 | Jest unit test |

## External Package Groups

- Identity: `next-auth`, Prisma adapter, `@boxyhq/saml-jackson`, bcrypt, cookies.
- UI: React, `@boxyhq/react-ui`, DaisyUI, Heroicons, Formik, Yup, SWR, i18next, toast.
- Integrations: Retraced, Svix, Stripe, Nodemailer, Slack, Sentry, Mixpanel, BoxyHQ metrics.
- Validation/security: Zod, micromatch, reCAPTCHA.
- Delivery/testing: Next.js, Prisma CLI, TypeScript, ESLint, Prettier, Jest, Playwright, release-it.

Exact versions and dependency-boundary observations are recorded in [DEPENDENCY-MAP.md](DEPENDENCY-MAP.md).
