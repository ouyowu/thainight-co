# Thai Night — Handoff

Repo: `ouyowu/thainight-co`. Production deploys from `main`.
Full brief: store file `docs/thainight-co-handoff.md`.

## Hard rules
- Mainstream nightlife only. Area hubs may say one line that Thai Night does not cover adult-entertainment venues.
- Do not re-add removed URLs (308 in `next.config.ts`).
- Do not set `NEXT_PUBLIC_SITE_URL` to `https://thainight.co` until that domain serves this site.
- No `href="#"`. Use `lib/affiliates.ts` + BookingBox / StayNearby / HotelCta.
- No invented exact ticket prices. Hedge hours.
- Legal drinking age in Thailand is 20.

## Before each push
```bash
npm run build && npx eslint app components lib
```
Plus the term sweep in the store handoff.

## Page template
`app/bangkok/muay-thai/page.tsx` — pageMeta, PageShell, Sections, BookingBox, FaqList, Related.
Add every new page to `lib/site.ts` `routes` and `lib/guides.ts`.
