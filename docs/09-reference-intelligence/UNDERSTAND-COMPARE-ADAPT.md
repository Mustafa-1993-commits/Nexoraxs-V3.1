# UNDERSTAND, COMPARE, and ADAPT Boundary

## Mode Is Mandatory

Every deep Reference Intelligence request has one explicit mode. If the user does not request comparison or NexoraXS design, use `UNDERSTAND`.

| Mode | Question answered | Inputs | May inspect external source? | May propose NexoraXS design? |
|---|---|---|---:|---:|
| `UNDERSTAND` | How does this capability work in this repository? | One discovered repository and capability | Yes, narrowly at the pinned SHA | No |
| `COMPARE` | How does the same capability differ across these repositories? | Two or more discovered repositories and current Reference Knowledge Objects | Only to create or refresh required objects | No |
| `ADAPT` | What independent NexoraXS design should be proposed from these observations? | Current Reference Knowledge Objects, authoritative NexoraXS sources, and target context | Only through cited object evidence | Yes, as unapproved proposals |

Catalog-only lookup is lighter than `UNDERSTAND`; it returns authoritative feature records without creating a Reference Knowledge Object.

## Routing Rules

1. Treat “list,” “find,” “show the catalog record,” and equivalent requests as catalog-only unless deeper implementation detail is requested.
2. Treat end-to-end flow, implementation trace, data model, authorization, jobs, realtime, failure behavior, or cross-layer questions as `UNDERSTAND`.
3. Treat a request naming two or more repositories and asking for similarities or differences as `COMPARE`.
4. Enter `ADAPT` only when the user explicitly asks to adapt, design, translate, or propose the capability for NexoraXS.
5. Return candidate catalog matches before source inspection when repository or capability resolution is ambiguous.
6. Stop for missing discovery; request `full-repository-discovery` rather than scanning an undiscovered repository opportunistically.

## UNDERSTAND

UNDERSTAND is source-faithful. It may assess conceptual reuse, coupling, isolation difficulty, risks, and license impact, but that assessment is not a recommendation.

Required separations:

- `Verified` claims cite exact pinned evidence.
- `Inferred` claims identify their supporting evidence and inference.
- `Unknown` claims identify the missing evidence.
- `Contradictory` claims preserve both conflicting sources.
- Runtime behavior is never claimed from static code alone.

The output is a current Reference Knowledge Object or a bounded blocked/stale result.

## COMPARE

COMPARE preserves repository-specific terminology and maps it to one canonical capability alias. It compares observations only:

- shared concepts;
- business behavior and workflows;
- architecture, authorization, tenancy, data, backend, frontend, jobs, realtime, and integrations;
- quality, security, coupling, license constraints, evidence, contradictions, and unknowns.

It does not rank implementations or declare a winner unless the user explicitly asks for ranking. Ranking still does not authorize ADAPT.

## ADAPT

ADAPT separates three things:

1. source observations cited through current Reference Knowledge Objects;
2. reusable principles stated without copied expression;
3. a proposed NexoraXS design governed by NexoraXS authority.

Every design statement is labeled `Proposal` until separately approved. The design must preserve applicable Laravel and Next.js implementation choices, the canonical Workspace → Business → Business Unit → Department/Branch hierarchy, server-side tenancy and authorization, owning-domain boundaries, queues, private object storage, events, audit, observability, localization, accessibility, and test gates where relevant.

ADAPT rejects source-specific tenant, role, permission, lifecycle, data, branding, infrastructure, and domain assumptions unless an authoritative NexoraXS source intentionally adopts them.

ADAPT produces no runtime code, migration execution, feature specification approval, or automatic Spec Kit transition.

## Prohibited Transitions

- Catalog lookup → ADAPT without explicit intent.
- UNDERSTAND → COMPARE without two or more named repositories.
- UNDERSTAND or COMPARE → ADAPT by implication.
- ADAPT → implementation without an approved specification, plan, and tasks.
- Stale or blocked knowledge → current comparison or adaptation.
