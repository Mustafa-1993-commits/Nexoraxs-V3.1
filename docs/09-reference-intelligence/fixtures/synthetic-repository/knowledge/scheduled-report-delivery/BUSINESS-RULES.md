# Business Rules

- Only a member who can view the selected report may create its schedule.
- Each schedule and generated artifact belongs to one workspace.
- A due active schedule may enter `RUNNING`; paused schedules do not enqueue work.
- Successful generation produces a private artifact and an expiring access link.
- Failure metadata is retained without publishing the artifact.

Defaults and exact schedule syntax are intentionally unspecified by the fixture.

See [Evidence](EVIDENCE.md).
