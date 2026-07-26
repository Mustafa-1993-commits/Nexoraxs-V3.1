# Workflow

```text
Member submits schedule
  -> authorization and validation
  -> schedule persisted as ACTIVE
  -> scheduler finds due schedule
  -> generation job enters RUNNING
  -> artifact stored privately
  -> notification carries expiring link
  -> SUCCEEDED
```

Validation or authorization failure rejects creation. Worker failure records `FAILED`; retry policy is an explicit unknown.

See [Backend Flow](BACKEND-FLOW.md) and [Evidence](EVIDENCE.md).
