# Thai Night

Practical nightlife guides for Bangkok and Pattaya. Next.js App Router site for [thainight.co](https://thainight.co).

This project is standalone. It is not part of Thaielehub.

## Local

```bash
npm install
npm run dev
```

## Deploy

Create a **new** GitHub repo (do not reuse `thaielehub-web`). Example:

```bash
gh repo create ouyowu/thainight-co --public --source=. --remote=origin --push
```

Then create a **new** Vercel project named `thainight` (not `thaielehub-web`) from that repo.

Domain `thainight.co` is already on the Vercel team and verified. It is still attached to a stale project (`thainight-next-preview`). Remove it there, add `thainight.co` and `www.thainight.co` to the new project.

Cloudflare nameservers are in use (`alberto` / `asa`). Point `@` and `www` CNAME to `cname.vercel-dns.com`, or switch to `ns1.vercel-dns.com` / `ns2.vercel-dns.com`.

## Configuration

- `NEXT_PUBLIC_SITE_URL` — canonical origin. Unset = `https://thainight-co.vercel.app`. Set to `https://thainight.co` only once that domain serves this site.
- `NEXT_PUBLIC_AFFILIATE_*` — affiliate URLs (see `.env.example`). Any block whose URL is empty is hidden, so pages never show dead `#` links. Bangkok, Pattaya, Phuket, and Chiang Mai hotel buttons have a built-in Agoda city search in `lib/affiliates.ts` and show even when those env vars are unset. Set the env var only to replace that URL.

## Content scope

Bars, rooftops, clubs, live music, shows, Muay Thai, night markets, transport and safety. Adult-entertainment venues are out of scope; retired URLs 308-redirect to the nearest hub (see `next.config.ts`).
