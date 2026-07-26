# Authorization and Tenancy

- Scope: one fictional workspace, report, requesting actor, schedule, and artifact.
- Role names are not defined; permission is expressed as report-view access.
- Membership and permission are checked before schedule creation.
- The schedule owner is the requesting member; the workspace owns the scoped record.
- Worker execution retains the original workspace and schedule context.
- Artifacts are private; only an authorized expiring link crosses the storage boundary.

See [Evidence](EVIDENCE.md).
