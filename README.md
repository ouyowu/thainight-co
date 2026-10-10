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
