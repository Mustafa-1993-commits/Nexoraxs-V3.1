# Data Model

## Aggregate Overview

The only application-domain aggregate is `User`. Sessions, password resets, API tokens, passkeys, TOTP fields, cache records, queue records, and test fixtures support identity and platform infrastructure. There is no organization/tenant/business-domain model. [E010](EVIDENCE-MANIFEST.md#e010) [E019](EVIDENCE-MANIFEST.md#e019) through [E024](EVIDENCE-MANIFEST.md#e024)

## Tables

| Table | Key fields and indexes | Ownership/lifecycle | Evidence |
|---|---|---|---|
| `users` | `id`; unique `email`; name; password; verification timestamp; remember token; timestamps; nullable TOTP secret/recovery/confirmed timestamp | Created/updated by Fortify actions; deleted by account API | [E019](EVIDENCE-MANIFEST.md#e019) [E020](EVIDENCE-MANIFEST.md#e020) |
| `password_reset_tokens` | primary email; token; created timestamp | Password broker infrastructure | [E019](EVIDENCE-MANIFEST.md#e019) |
| `sessions` | string ID; indexed nullable `user_id`; IP; user-agent; payload; indexed last activity | Framework session store; explicitly queried and deleted by session controller | [E019](EVIDENCE-MANIFEST.md#e019) [E017](EVIDENCE-MANIFEST.md#e017) |
| `personal_access_tokens` | polymorphic token owner; unique 64-char token; abilities; use/expiry timestamps | Sanctum token substrate; account deletion revokes current user's tokens | [E021](EVIDENCE-MANIFEST.md#e021) [E015](EVIDENCE-MANIFEST.md#e015) |
| `passkeys` | user FK with cascade delete; name; unique credential ID; JSON credential; last-used/timestamps; user index | Package relationship owned by user; list endpoint exposes only safe columns | [E022](EVIDENCE-MANIFEST.md#e022) [E016](EVIDENCE-MANIFEST.md#e016) |
| `cache` | key PK; value; indexed expiration | Framework cache | [E023](EVIDENCE-MANIFEST.md#e023) |
| `cache_locks` | key PK; owner; indexed expiration | Distributed lock substrate | [E023](EVIDENCE-MANIFEST.md#e023) |
| `jobs` | queue index; payload; attempts; reservation/availability/creation times | Queue infrastructure | [E024](EVIDENCE-MANIFEST.md#e024) |
| `job_batches` | ID; counters; failed IDs; options; lifecycle timestamps | Batch infrastructure | [E024](EVIDENCE-MANIFEST.md#e024) |
| `failed_jobs` | ID; unique UUID; connection/queue; payload; exception; timestamp; compound index | Failed-job evidence | [E024](EVIDENCE-MANIFEST.md#e024) |

## User Model Behavior

- Fillable: name, email, password.
- Hidden from serialization: password, TOTP secret, TOTP recovery codes, remember token.
- Casts: verification and 2FA confirmation timestamps; password is hashed.
- Traits: API tokens, factories, notifications, passkeys, TOTP.
- The model implements `PasskeyUser` but does not implement `MustVerifyEmail` at the pinned revision. [E010](EVIDENCE-MANIFEST.md#e010)

## Relationships and Scope

```text
User
├─ passkeys (FK, cascade delete)
├─ personal_access_tokens (polymorphic)
├─ sessions (user_id association without declared FK in migration)
└─ password_reset_tokens (email association, no FK)
```

Session operations query both `user_id` and supplied session ID, preventing cross-user deletion through this controller. [E017](EVIDENCE-MANIFEST.md#e017)

## Storage and State

| Concern | Default | Alternatives/configuration | Evidence |
|---|---|---|---|
| Local database | SQLite | MySQL, MariaDB, PostgreSQL, SQL Server configs | [E025](EVIDENCE-MANIFEST.md#e025) [E055](EVIDENCE-MANIFEST.md#e055) |
| Compose database | MySQL 8 volume | Environment-set database/passwords | [E044](EVIDENCE-MANIFEST.md#e044) |
| Session | Database, 120 minutes, `laravel_session`, HTTP-only, SameSite Lax, JSON serialization | File/cookie/cache backends in framework config | [E025](EVIDENCE-MANIFEST.md#e025) [E055](EVIDENCE-MANIFEST.md#e055) |
| Cache | Database | Array/file/storage/Memcached/Redis/DynamoDB/Octane/failover | [E055](EVIDENCE-MANIFEST.md#e055) |
| Queue | Database | Sync/Beanstalkd/SQS/Redis/deferred/background/failover/null | [E055](EVIDENCE-MANIFEST.md#e055) |
| Files | Local private default | public local and S3 definitions | [E055](EVIDENCE-MANIFEST.md#e055) |
| Client auth | Sanctum context, server-seeded | Refreshed on auth operations and focus revalidation | [E029](EVIDENCE-MANIFEST.md#e029) [E030](EVIDENCE-MANIFEST.md#e030) [E037](EVIDENCE-MANIFEST.md#e037) |
| Client UI | Component-local form/dialog state | Theme and sidebar preference persist through libraries/cookie | [E039](EVIDENCE-MANIFEST.md#e039) [E042](EVIDENCE-MANIFEST.md#e042) |

## Data Gaps

- No soft deletes or explicit account-deletion audit record.
- No tenant key, organization key, role, permission, consent, audit, activity, notification database, or application-domain table.
- No declared FK from sessions or reset tokens to users.
- No application encryption declaration for TOTP columns in the model itself; protection is delegated to Fortify's trait/package behavior, whose vendor source is not tracked.
- No migration-level database check constraints beyond types, uniqueness, indexes, and passkey FK.
