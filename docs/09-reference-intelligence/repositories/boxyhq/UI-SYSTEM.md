# BoxyHQ UI System

## Foundations

React 18 and Next.js Pages Router use Tailwind CSS 3, DaisyUI, `react-daisyui`, `@boxyhq/react-ui`,
Heroicons, Formik/Yup, SWR, and react-hot-toast. Global composition is in [pages/_app.tsx](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/pages/_app.tsx);
tokens and dark-mode rules are in [tailwind.config.js](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/tailwind.config.js) and [styles/globals.css](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/styles/globals.css).

## Reusable UI

| Area | Components |
|---|---|
| Layout and shell | `AccountLayout`, `AuthLayout`, `AppShell`, `Header`, `Drawer`, navigation components |
| Feedback | `Loading`, `Error`, `EmptyState`, `Alert`, `WithLoadingAndError`, toasts |
| Forms | labeled inputs, checkbox, password visibility, reCAPTCHA, Formik/Yup and Zod-backed forms |
| Composition | Card, Modal, ConfirmationDialog, Table, Badge, avatar and copy controls |
| Team administration | `TeamTab`, Teams, Members, TeamSettings, invite/API-key/webhook components |
| Enterprise UI | BoxyHQ `ConnectionsWrapper`, `DirectoriesWrapper`, Retraced logs viewer |
| Email UI | React Email layouts/templates for auth and team messaging |

## Interaction and State

SWR supplies loading/error/revalidation; mutations refresh collection keys. Destructive actions use confirmations.
Forms expose validation and submitting states; API failures use toast or error panels. The shell is responsive and
includes a mobile drawer. Avatar upload supports file input and drag/drop.

## Themes, Localization, Accessibility

- System, light, and dark theme choices persist in browser local storage.
- next-i18next has one configured locale (`en`) and one `common` namespace; CI checks translation key parity.
- The source uses semantic buttons/headings/labels, screen-reader-only input, focus-visible rules, and role/name-based E2E locators.
- Only English exists, no RTL path exists, and no automated accessibility audit or explicit conformance claim is supported.
