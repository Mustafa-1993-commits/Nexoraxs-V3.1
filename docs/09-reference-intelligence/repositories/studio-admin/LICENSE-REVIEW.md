
# studio-admin License Review

## Root License

[LICENSE](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/LICENSE) grants the MIT license. The root package is private and omits a package-level license field, but the
tracked root license text is unambiguous.

## Dependency Manifest Review

The pinned `package-lock.json` was inspected at `cf132a360b1cb32b5e7a855e499d259eeb8cf1a0` rather than from the pre-existing dirty working file.

- Direct runtime: predominantly MIT; CVA is Apache-2.0; D3 Geo/TopJSON/Lucide are ISC; Simple Icons is CC0-1.0;
  `geist` declares SIL Open Font License.
- Direct development: predominantly MIT; TypeScript is Apache-2.0; Biome is MIT OR Apache-2.0.
- Transitive lockfile metadata includes MIT, ISC, Apache-2.0, MPL-2.0, LGPL-3.0-or-later/native libvips packages,
  BSD, CC-BY-4.0, Python-2.0, BlueOak, 0BSD, and compound expressions.
- The one lockfile `UNKNOWN` record is the root package, whose separate root `LICENSE` is MIT.

## Assets and Services

- `media/dashboard.png`, favicon, Google/Geist fonts, Lucide/Simple Icons glyphs, and upstream branding/trademarks require
  asset/service-specific review before reuse.
- The world-atlas JSON is fetched at runtime from jsDelivr and is not copied into NexoraXS.

## Impact and Boundary

- Root MIT does not remove dependency, font, icon, asset, service, or trademark obligations.
- Discovery does not authorize copying, derivative reuse, selection, adaptation, or implementation.
- No source code, token file, component, style, asset, or dependency was copied into NexoraXS.
- Any future reference use requires independent implementation plus a fresh provenance/security/legal review.
