
# studio-admin API, Command, Event, and Integration Map

## Server Surface

| Surface | State | Verified behavior | Evidence |
|---|---|---|---|
| Server actions | implemented, narrow | Reads/writes cookies and validates registered preference values | [src/server/server-actions.ts](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/server/server-actions.ts) |
| App Router route handlers | absent | No tracked `route.ts`/`route.tsx` exists | Pinned tracked path inventory |
| Request proxy | disabled seam | Pass-through example exists only as `proxy.disabled.ts` | [src/proxy.disabled.ts](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/proxy.disabled.ts) |
| External browser fetch | implemented | Fetches world-atlas topology from jsDelivr for shipment maps | [src/app/(main)/dashboard/logistics/_components/shipment-route-map.tsx](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/app/%28main%29/dashboard/logistics/_components/shipment-route-map.tsx) |

## Commands

| Command | Purpose | Evidence |
|---|---|---|
| `npm run dev` | Next development server | [scripts](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/package.json) |
| `npm run build` | Next production build | [scripts](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/package.json) |
| `npm run start` | Next production server | [scripts](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/package.json) |
| `npm run lint` | Biome lint | [scripts](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/package.json) |
| `npm run format` | Biome write-format | [scripts](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/package.json) |
| `npm run check` / `check:fix` | Biome checks | [scripts](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/package.json) |
| `npm run generate:presets` | Generate theme preset registry | [src/scripts/generate-theme-presets.ts](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/cf132a360b1cb32b5e7a855e499d259eeb8cf1a0/src/scripts/generate-theme-presets.ts) |

## Absent Backend Classes

No REST/GraphQL API, controller, domain service, repository, webhook, signature verifier, import/export endpoint, API
token, rate limiter, queue, job, scheduler, server event, listener, websocket, SSE, email/SMS delivery, audit ingestion,
or health/telemetry endpoint is implemented.
