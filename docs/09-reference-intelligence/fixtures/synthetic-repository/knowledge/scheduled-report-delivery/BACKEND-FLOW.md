# Backend Flow

The synthetic backend flow validates membership and report access, persists a schedule, detects due work, enqueues generation, stores the result privately, and sends a notification.

The fixture establishes a scheduler and queued job concept. It does not establish route syntax, controller names, event transport, retry counts, webhook behavior, or realtime behavior.

See [Workflow](WORKFLOW.md) and [Evidence](EVIDENCE.md).
