# BoxyHQ Dependency Map

## Direct Runtime Dependencies

The authoritative version set is [package.json](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/package.json) and `package-lock.json`.

| Boundary | Direct packages/services | Used by |
|---|---|---|
| Web/runtime | Next 15.5.14, React 18.3.1 | All UI and API features |
| Identity | NextAuth 4.24.13, Prisma adapter, bcryptjs, cookies-next | AUTH, TEAM, SEC |
| Enterprise identity | `@boxyhq/saml-jackson` 26.2.0 | SSO, DSYNC, OAuth/SCIM |
| Persistence | Prisma client 6.10.0, PostgreSQL runtime | DATA and all stateful features |
| Enterprise UI | `@boxyhq/react-ui` 3.5.3 | SSO/DSYNC forms, theming |
| Audit | Retraced client 0.7.23 and logs viewer 2.10.1 | AUDIT |
| Webhooks | Svix 1.89.0 | WEBHOOK and invitation/member events |
| Billing | Stripe 17.7.0, currency-symbol-map | BILLING |
| Email/notification | Nodemailer, React Email, slack-notify | NOTIFY/AUTH/TEAM |
| UI/state | Tailwind, DaisyUI, Heroicons, Formik, Yup, Zod, SWR, toast | UI and forms |
| Observability | BoxyHQ metrics, Sentry, Mixpanel | OBS |
| Security integration | reCAPTCHA, micromatch | SEC/AUTH/middleware |

## Internal Dependency Edges

- AUTH -> User/Account/Session/VerificationToken/PasswordReset models -> Prisma/PostgreSQL.
- TEAM -> session + membership guard + permission matrix -> team/member/invitation models.
- SSO -> team permission and connection guard -> embedded/hosted Jackson manager -> OAuth endpoints.
- DSYNC -> team permission and directory guard -> Jackson -> SCIM or signed hosted webhook -> user/membership models.
- WEBHOOK -> team permissions -> Svix application -> endpoint/event operations.
- AUDIT -> team permissions and mutation handlers -> Retraced client/viewer.
- BILLING -> team membership -> Stripe -> Service/Price/Subscription projections.
- UI -> hooks/SWR -> page APIs; enterprise screens additionally depend on external UI packages.

## Absent Runtime Dependencies

No Redis/cache, queue/broker, worker/scheduler, websocket/SSE service, object store, search engine, Kubernetes
manifest, GraphQL server, or graph database is present.

## Dependency License Boundary

The repository root license does not establish every dependency, image, font, or remote asset license. The lockfile
pins versions but does not provide a complete reviewed license inventory. That remains an explicit future legal
review item; discovery does not authorize copying or redistribution.
