# Merge inventory — live planner on thainight.co

Written 10 October 2026. **Do not port until the planner application source is in hand.** This file is an inventory, not a guessed API.

## Long-tail price pages (do not recreate)

Owner commit `15a3160` on `fix/seo-affiliate-basics` (pushed after PR #1 merged). No PR existed for that tip. Cherry-picked onto `cursor/long-tail-oct-2026-3611` → **PR #4**.

| Canonical URL | Keyword / notes |
|---|---|
| `/pattaya/bangkok-airport-to-pattaya-taxi-price/` | taxi 1,200–1,700 + tolls; Bus 999 = 139 |
| `/pattaya/cabaret-shows/` | rewrite (Alcazar VIP ~900; Tiffany’s ~800–2,200) |
| `/pattaya/tiffany-show/` | 308 from `/pattaya/tiffanys-show/` |
| `/pattaya/alcazar-show/` | VIP ~900, VVIP ~1,800 |
| `/bangkok/soi-11-rooftop-bars/` | 5 venues |
| `/bangkok/sky-bar/` | dress + deposit; **no drink prices**. 308 from `/bangkok/sky-bar-dress-code/` |
| `/bangkok/dinner-cruise/` | 9 boats, about 1,190–3,800 |
| `/bangkok/taxi-fare/` | flag 35 |
| `/pattaya/baht-bus/` | 10–20 |
| `/bangkok/muay-thai/` | existing page; Rajadamnern 1,000–2,500+ |

Stamp on those pages: “checked October 2026”.

## Planner source hunt

| Candidate | Result |
|---|---|
| Live `https://thainight.co` | Planner is live (`/plan`, `/guides/*`, `/deals`, `/login`, legal pages). |
| GitHub `ouyowu/thainight` | **Different product.** Nightlife intel/venues app (`gentlemen-clubs`, Supabase, `/tonight`). Homepage is `thainight.vercel.app`. **Do not merge this repo** — it is not the Agoda planner and includes adult venue types. |
| GitHub `ouyowu/thainight-next-preview` | **404** — no repo. |
| Other public/private owner repos visible to the GitHub connection | No `/plan` or `/api/agoda/search` found. |
| Vercel project `thainight-next-preview` (`prj_E9PxferdCVE4bEYbHz75nY3G6EKk`) | Listed on the team. Domain/env/project inspect returned 404/403 from this agent’s Vercel token. Last update ~Aug 2026. |
| Vercel project `thainight-co` (`prj_ukW2m0f3OrL3KK7Byi4VycYWRILT`) | Guide project. Same inspect 404/403. |

**Porting status:** stopped at 1.1. Need owner to grant the planner Git repo (or Vercel project files + env names without values).

## Live routes (fetched)

### App pages (200)

- `/plan` — stay planner; copy says Agoda supply is not connected yet.
- `/guides` — hub: Bangkok, Chiang Mai, Pattaya, Phuket (Koh Samui not on the hub fetch).
- `/guides/bangkok` — Asok & Phrom Phong, Ari, Riverside.
- `/guides/pattaya` — Jomtien, North Pattaya, Pratumnak.
- `/deals` — GYG, Klook, Trip.com, Expedia, Yesim. No Agoda hotel search UI on this page.
- `/login` — “Sign in to save your trip.”
- `/privacy` — AI planning, **Supabase auth + saved trips**, first-party analytics, Agoda click handoff.
- `/terms` — planning guidance only; bookings on Agoda.
- `/affiliate-disclosure` — commissions; Agoda supply not yet displayed.

### API

- `/api/agoda/search` — **route exists** (responds). Body/auth not reconstructed. Do not invent keys.

### Auth (from privacy copy, not source)

- Provider: **Supabase** (accounts + saved trip plans + share links).
- Callback path unknown until source is available (`/auth/callback` is a guess only — do not implement).

### Env vars (names only; inferred from live copy — **no values**)

Likely needed when source lands (do not invent extra keys):

- Supabase URL + anon/service keys
- Agoda affiliate / search credentials
- AI provider key (privacy mentions an AI strategy feature)
- Analytics / affiliate click reporting
- Auth redirect URLs

Never commit secrets. Copy into Vercel Preview + Production only after source confirms names.

### Trailing slash

Live planner pages work without a trailing slash (`/plan`). This repo uses `trailingSlash: true`. When porting, confirm `/plan` → `/plan/` and that `/api/*` plus auth callbacks are excluded from slash redirects.

## Phase 1.4 note

Both sites have `/affiliate-disclosure`. Keep **this repo’s** page and append Agoda wording from the planner version (Agoda is the booking destination; no payment on Thai Night).

## Phase 2 (blocked)

Domain move waits until the planner works on a `thainight-co` preview. Vercel domain APIs 403/404 from this agent. Owner clicks when unblocked:

1. Vercel → `thainight-next-preview` (and any other project still holding the domain) → Domains → remove `thainight.co` and `www.thainight.co`.
2. Vercel → `thainight-co` → Domains → add both.
3. Cloudflare: keep CNAME `@` / `www` → `cname.vercel-dns.com` as the planner used.
4. Only then set Production `NEXT_PUBLIC_SITE_URL=https://thainight.co`. Leave it unset until that day.

## Phase 3.3 (owner, not this agent)

Update the Agoda (and Klook / GetYourGuide) partner site description **before** Search Console indexing (3.1–3.2). The application still describes an accommodation planner; the merged site also has nightlife guides.
