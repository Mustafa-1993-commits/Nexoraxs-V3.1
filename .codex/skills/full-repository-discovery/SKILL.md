# Full Repository Discovery

## Purpose

Build a complete, evidence-backed knowledge model and complete feature catalog for one registered local source repository.

This skill performs repository discovery only. It does not select features, recommend adoption, copy code, or implement NexoraXS changes.

## Inputs

- Registered local source repository path.
- Optional output repository workspace.
- Discovery mode: `initial` or `delta`.

## Preconditions

1. The source repository is registered in `docs/09-reference-intelligence/REGISTRY.md`.
2. The path resolves to the repository root, not a parent container directory.
3. The source repository is treated as read-only.
4. The current branch, commit SHA, remote URL, working-tree state, and license presence are recorded before analysis.

## Required Behavior

1. Inspect the repository as a complete system.
2. Map applications, packages, modules, runtime entry points, routes, screens, APIs, commands, jobs, events, integrations, data, storage, state, authentication, authorization, tenancy, UI, navigation, workflows, build, deployment, configuration, dependencies, assets, and tests.
3. Extract every evidence-backed feature and reusable capability, including small interaction and platform capabilities.
4. Assign stable feature IDs.
5. Create both human-readable Markdown and machine-readable YAML catalogs.
6. Link every verified claim to exact source evidence.
7. Map internal and external dependencies.
8. Record unknowns and contradictory evidence instead of guessing.
9. Review license impact.
10. Produce a coverage report and change-detection record.
11. Update the cross-repository feature index only from verified feature records.

## Prohibited Behavior

- Do not assign the repository a permanent specialty.
- Do not stop after finding an interesting feature.
- Do not rank or recommend features for adoption.
- Do not modify the source repository.
- Do not copy source code into NexoraXS.
- Do not implement product code.
- Do not present inferred claims as verified.
- Do not mark discovery complete without satisfying the completion contract.
- Do not treat README files, package manifests, or directory trees as sufficient evidence by themselves.

## Required Output Artifacts

Create or update these artifacts in the repository workspace:

- `REPOSITORY-PROFILE.md`
- `ARCHITECTURE-MAP.md`
- `APPLICATION-MAP.md`
- `PACKAGE-MAP.md`
- `ROUTE-SCREEN-MAP.md`
- `API-MAP.md`
- `DATA-MODEL.md`
- `AUTH-SECURITY-MAP.md`
- `UI-SYSTEM.md`
- `WORKFLOW-MAP.md`
- `FEATURE-CATALOG.md`
- `FEATURE-CATALOG.yaml`
- `DEPENDENCY-MAP.md`
- `EVIDENCE-MANIFEST.md`
- `LICENSE-REVIEW.md`
- `COVERAGE-REPORT.md`
- `UNKNOWNS.md`
- `CHANGE-DETECTION.md`

Use the contracts and templates in `docs/09-reference-intelligence/contracts/`.

## Feature Discovery Scope

Include, when present:

- product features;
- UI and interaction features;
- administrative features;
- authentication and security;
- authorization and permissions;
- organizations, workspaces, tenants, memberships, and invitations;
- storage, caching, persistence, and state;
- search, filters, sorting, pagination, saved views, and bulk operations;
- analytics, reports, charts, imports, and exports;
- comments, mentions, notifications, activity history, and realtime behavior;
- queues, jobs, events, schedulers, and automation;
- APIs, webhooks, and integrations;
- configuration, feature flags, themes, personalization, accessibility, and localization;
- developer tooling, testing, build, deployment, and operations;
- reusable internal capabilities.

A feature may be user-visible, internal, frontend-only, backend-only, full-stack, operational, or developer-facing.

## Evidence Rules

Every claim uses one status:

- `Verified`
- `Inferred`
- `Unknown`
- `Contradictory`

Verified feature records must cite one or more exact source paths and, when applicable, symbols, routes, tests, configuration keys, migrations, API handlers, runtime output, or repository metadata.

## Lifecycle

Use only:

- `Not Started`
- `Inventory`
- `Discovery In Progress`
- `Partial`
- `Coverage Review`
- `Complete`
- `Stale`

Enter `Complete` only when the coverage checklist passes for the pinned revision.

## Initial Discovery

For `initial` mode:

1. Record repository identity and revision.
2. Build the complete repository knowledge model.
3. Generate all required artifacts.
4. Generate the complete feature catalog.
5. Run coverage review.
6. Mark `Complete` only if every mandatory area is covered; otherwise mark `Partial` and list gaps.

## Delta Discovery

For `delta` mode:

1. Compare the pinned discovered SHA with the current SHA.
2. Record changed files.
3. Identify potentially affected features and repository maps.
4. Add, remove, or modify feature records using source evidence.
5. Re-run affected coverage checks.
6. Mark the repository `Stale` until delta review completes.
7. Never present the old catalog as current while affected knowledge remains unresolved.

## Completion Checklist

Discovery is complete only when:

- identity, source URL, path, pinned SHA, branch, and working-tree state are recorded;
- license is reviewed;
- applications, packages, modules, and runtime entry points are mapped;
- routes and screens are mapped;
- APIs, commands, jobs, events, and integrations are inspected;
- data, storage, state, auth, authorization, and tenancy are inspected;
- UI, navigation, workflows, build, deployment, configuration, dependencies, assets, and tests are inspected;
- a complete feature catalog exists in Markdown and YAML;
- every verified feature has evidence;
- dependencies are mapped;
- unknowns and contradictions are explicit;
- change detection is recorded;
- the coverage report passes.

## Authority Boundary

`Nexoraxs-V3.1` remains the implementation target and architectural authority. Source repositories provide reference evidence only and cannot override NexoraXS governance, Constitution, architecture, tenancy, security, ownership, or approved product decisions.
