---
name: repository-discovery
description: Use when examining an external or internal repository to understand its architecture, features, runtime behavior, evidence paths, dependencies, tests, licensing, and reusable implementation references before specification or adoption work.
compatibility: Requires repository read access and permission to create discovery artifacts outside the examined source repository.
metadata:
  author: NexoraXS
  version: "0.1.0"
---

# Repository Discovery

## Purpose

Build an evidence-backed understanding of a repository before selecting, comparing, specifying, or adopting any feature from it.

The examined repository is an implementation reference only. It never overrides NexoraXS frozen architecture, Accepted ADRs, ownership rules, security requirements, or Spec Kit governance.

## Use This Skill When

- onboarding an open-source repository such as Plane, Kiranism, BoxyHQ, or a starter kit;
- creating or refreshing a repository reference record;
- identifying all user-visible and system features in a repository;
- locating the real files, routes, APIs, models, state, permissions, tests, and dependencies behind a feature;
- preparing evidence before `/speckit.specify`;
- comparing a reference implementation with NexoraXS boundaries.

Do not use this skill to implement the selected feature. Discovery ends before NexoraXS specification and implementation begin.

## Non-Negotiable Rules

1. Treat the examined repository as read-only.
2. Pin the exact repository URL and revision before recording findings.
3. Prefer executable source code and runtime evidence over README claims.
4. Separate verified facts, reasoned inferences, and unknowns.
5. Never infer NexoraXS architecture from the reference repository.
6. Never import foreign tenancy, ownership, authorization, lifecycle, or domain models by default.
7. Record license and dependency implications before recommending reuse.
8. Do not claim complete discovery while required surfaces remain uninspected.
9. Every feature claim must point to concrete evidence paths.
10. Discovery output must remain useful even if the source repository later changes.

## Required Inputs

Capture before inspection:

- repository name and canonical URL;
- local path, if cloned;
- exact branch, tag, and commit SHA;
- discovery date;
- requested scope: full repository or bounded subsystem;
- known runtime instructions and available local services;
- license file location;
- output directory for generated artifacts.

If the revision cannot be pinned, stop and report the blocker.

## Discovery Workflow

### Phase 1 — Establish Identity and Provenance

Verify:

- repository identity and upstream owner;
- branch, tag, and commit SHA;
- license and notices;
- primary languages, frameworks, package managers, and workspace tooling;
- repository status, such as active, archived, example, starter, or production application.

Record commands and evidence used to establish the revision.

### Phase 2 — Build the Structural Map

Inspect the repository tree and classify:

- applications and deployable services;
- packages, libraries, and shared modules;
- frontend and backend boundaries;
- database, migrations, seeds, and fixtures;
- API, event, queue, worker, and scheduled-job surfaces;
- authentication, authorization, tenancy, and permission surfaces;
- configuration, environment, infrastructure, CI, and deployment files;
- tests, stories, examples, screenshots, and documentation;
- generated, vendored, archived, or deprecated areas.

Produce a structural map with ownership and dependency observations. Do not list folders without explaining their role.

### Phase 3 — Trace Runtime Entry Points

Locate and trace:

- application bootstraps;
- route registration;
- navigation definitions;
- API controllers or handlers;
- background workers and event consumers;
- persistence entry points;
- authentication and authorization middleware;
- configuration and feature-flag resolution;
- test bootstraps and representative fixtures.

For each major runtime, record the path from entry point to domain behavior and persistence or external dependency.

### Phase 4 — Discover Features

Identify features from multiple evidence channels:

- user navigation and screens;
- routes and endpoints;
- domain modules and use cases;
- database models and migrations;
- permissions and roles;
- tests and fixtures;
- configuration and feature flags;
- product documentation and release notes;
- observable local runtime behavior, when available.

Do not rely on only one channel. A feature is verified when at least one executable source path exists and its behavior is supported by another evidence type whenever practical.

Assign stable IDs using:

```text
<REPOSITORY-CODE>-<CATEGORY>-<NNN>
```

Examples:

```text
PLANE-ONBOARDING-001
KIRANISM-NAVIGATION-001
BOXYHQ-SSO-001
```

IDs are stable encyclopedia identifiers, not source repository identifiers.

### Phase 5 — Analyze Each Feature

For every discovered feature, record:

- stable feature ID and name;
- category and user/business purpose;
- verified behavior and primary user journey;
- routes, screens, navigation, and UI components;
- APIs, handlers, services, events, jobs, and commands;
- models, schemas, migrations, and state transitions;
- authentication, roles, permissions, and tenant scope;
- dependencies, integrations, flags, and configuration;
- tests, fixtures, stories, and runtime evidence;
- source evidence paths with line or symbol references where possible;
- coupling, complexity, risks, and unknowns;
- preview metadata such as local URL, required seed, screenshot, or video path;
- licensing or attribution considerations;
- NexoraXS adoption classification.

Use one of these adoption classifications:

- `behavior-reference`: retain the user-visible behavior but redesign implementation natively;
- `pattern-reference`: reuse a technical or UX pattern after architectural review;
- `component-candidate`: a bounded component may be reusable after dependency and license review;
- `concept-only`: useful product inspiration without implementation reuse;
- `reject`: conflicts with NexoraXS authority, ownership, security, quality, or licensing;
- `unknown`: insufficient evidence.

### Phase 6 — Validate Coverage

Before declaring completion, verify coverage of:

- repository structure;
- runtime entry points;
- user-facing navigation;
- routes and APIs;
- persistence and state;
- authentication and permissions;
- background processing;
- integrations;
- tests;
- configuration and feature flags;
- license and dependencies;
- local preview or explicit reason it could not be run;
- unknowns and uninspected areas.

A full-repository discovery cannot pass while any applicable category is missing without an explicit limitation.

### Phase 7 — Produce Discovery Artifacts

Generate:

```text
<output-root>/<repository-code>/
├── repository-profile.md
├── structural-map.md
├── runtime-map.md
├── feature-catalog.md
├── features/
│   └── <FEATURE-ID>.md
├── dependency-and-license-review.md
├── coverage-report.md
└── discovery-manifest.yml
```

Use the schema in `references/discovery-schema.md` and the report structures in `templates/`.

## Evidence Standard

Label statements explicitly:

- **Verified** — directly supported by source code, configuration, tests, or observed runtime behavior.
- **Inferred** — reasoned from multiple clues but not directly proven.
- **Unknown** — not established from available evidence.
- **Contradictory** — evidence sources disagree.

For important claims include:

```text
Evidence: path/to/file.ext :: symbol-or-section
Revision: <commit-sha>
```

Documentation-only claims must be marked as such until confirmed by executable evidence.

## NexoraXS Boundary Check

Discovery may describe the reference repository's architecture, but recommendations must separately state whether it conflicts with:

- Workspace → Business → Business Unit → Department/Branch;
- canonical ownership and one-writer rules;
- Core Platform and independent OS boundaries;
- cross-domain contract rules;
- authorization and tenant isolation;
- Capability, Knowledge, Business Brain, Recommendation, and AI ordering;
- commercial and OS lifecycle separation;
- Arabic/English, RTL/LTR, accessibility, Audit, and observability requirements.

A conflict does not erase the feature from the catalog. Mark the conflicting implementation as rejected while preserving any independently useful behavior reference.

## Stop Conditions

Stop and report rather than guessing when:

- the source revision cannot be established;
- required source files are unavailable;
- generated artifacts cannot be distinguished from authored source;
- runtime behavior requires unavailable secrets or services;
- licensing cannot be identified;
- evidence is contradictory at a material boundary;
- the requested conclusion would require adopting an unresolved NexoraXS architectural decision.

## Completion Report

At completion report:

- repository and pinned revision;
- inspected and excluded scope;
- number of verified, inferred, unknown, and rejected features;
- coverage status by required category;
- highest-risk dependencies and license findings;
- preview status;
- recommended feature IDs for deeper audit;
- unresolved questions;
- exact next step.

The normal next step is `repository-audit` for one selected feature or `/speckit.specify` only after the selected reference evidence is complete.