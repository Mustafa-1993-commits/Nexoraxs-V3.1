
# Kiranism Shadcn License Review

## Root License

The repository root [LICENSE](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/LICENSE) is the MIT License, copyright 2023 Kiranism.
The license permits use, copying, modification, distribution, sublicensing, and sale subject to preserving the copyright
and permission notice in copies or substantial portions, and provides the work without warranty.

## Bundled Notices

The mirrored `frontend-design` and `skill-creator` agent-skill subtrees each contain Apache License 2.0 text:
[agent frontend-design LICENSE](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/.agents/skills/frontend-design/LICENSE.txt),
[agent skill-creator LICENSE](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/.agents/skills/skill-creator/LICENSE.txt),
[Claude frontend-design LICENSE](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/.claude/skills/frontend-design/LICENSE.txt), and
[Claude skill-creator LICENSE](https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/06e83c0b0e937f98184b343b92756ae0cadd7c92/.claude/skills/skill-creator/LICENSE.txt).
These notices mean the repository is not safely summarized as one undifferentiated license for every bundled resource.

## Impact and Boundaries

- Discovery copied no source code, generated asset, theme, skill, or dependency into NexoraXS.
- MIT is permissive, but any future source reuse would require notice preservation and file/dependency/asset provenance review.
- Apache-2.0 bundled skill content carries its own notice/patent conditions if reused.
- Direct and transitive package licenses were not exhaustively resolved.
- Clerk, Sentry, GitHub, PokeAPI, Google Fonts, Next, Vercel, shadcn, and other names/assets may carry service terms,
  licenses, or trademarks independent of the repository root license.
- This review records impact; it does not authorize copying, adoption, selection, adaptation, or implementation.

## Discovery Conclusion

License status: **Reviewed with explicit follow-up obligations**. Root application source is MIT; bundled skill subtrees
contain Apache-2.0 notices; dependencies/assets/services require separate review before any reuse decision.
