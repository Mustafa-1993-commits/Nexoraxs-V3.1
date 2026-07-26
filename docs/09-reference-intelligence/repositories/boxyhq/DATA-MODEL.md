# BoxyHQ Data Model

## PostgreSQL and Prisma

The canonical first-party schema is [prisma/schema.prisma](https://github.com/boxyhq/saas-starter-kit/blob/abc9b686823cbfb4973c79bc36fea37a3244be6c/prisma/schema.prisma). PostgreSQL is configured through
`DATABASE_URL`; migrations create the relational application schema and embedded Jackson tables.

| Entity | Key fields and relationships | Constraints / lifecycle |
|---|---|---|
| `User` | name, unique email, optional bcrypt password/image, email verification, lock counters | Cascades accounts, sessions, memberships, invitations |
| `Account` | provider identity, OAuth tokens, user relation | Unique provider/providerAccountId; indexed user |
| `Session` | unique session token, user, expiry | User cascade; indexed user |
| `VerificationToken` | identifier, unique token, expiry | Composite identifier/token uniqueness |
| `PasswordReset` | email, unique token, expiry | Consumed after reset |
| `Team` | unique slug/domain, default role, billing ID/provider | Owns members, invitations, API keys |
| `TeamMember` | team, user, role | Unique team/user; both parents cascade |
| `Invitation` | team, optional email, role, token, expiry, inviter, delivery mode, allowed domains | Unique team/email; token unique |
| `ApiKey` | name, team, SHA-256 key hash, optional expiry/last-use | Hash unique; team cascade |
| `Subscription` | Stripe IDs, price, active, period/cancel dates | Customer indexed |
| `Service` / `Price` | Stripe catalog projection | Price cascades with service |
| `jackson_store/index/ttl` | encrypted-capable key/value fields, indexes, expiry | Managed by Jackson and ignored by Prisma client generation |

## State Boundaries

- Server persistence: PostgreSQL/Prisma and embedded Jackson tables.
- External authoritative/projection services: Stripe, Retraced, Svix, hosted Jackson.
- Client fetch state: SWR hooks; no normalized global store.
- Browser persistence: theme in `localStorage`.
- Avatar storage: base64 data URL in `User.image`; no object-storage adapter.
- Cache, Redis, queue database, event store, search index, and realtime state are absent.

## Retention and Deletion

Token expirations exist, but no scheduled cleanup is present. Relational cascades remove many team/user children.
Request-time team deletion does not clean external integrations; the separate dry-run-first `delete-team.js`
command covers Jackson, subscriptions, users, Svix, and team data. This distinction is recorded as a contradiction.
