import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Nightlife Guide",
  "Soi Cowboy, Nana Plaza, 2026 prices, and a first-timer plan for Bangkok nightlife.",
  "/bangkok/",
);

export default function BangkokPage() {
  return (
    <PageShell
      title="Bangkok Nightlife"
      lead="Bangkok’s main red-light nightlife sits on Sukhumvit, between BTS Nana and BTS Asok. The useful split is simple: Soi Cowboy for a first night, Nana Plaza for variety and shows, Patpong for curiosity only."
    >
      <ul className="grid gap-2 sm:grid-cols-2">
        {[
          ["/bangkok/first-timer/", "First-Timer Guide"],
          ["/bangkok/areas/", "Areas"],
          ["/bangkok/prices/", "Prices"],
          ["/bangkok/tonight/", "Tonight"],
        ].map(([href, label]) => (
          <li key={href}>
            <Link
              href={href}
              className="block rounded-lg border border-line bg-card px-4 py-3 font-medium hover:border-accent hover:text-accent"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <p>
        Start late enough that the street is open. 21:00–21:30 is the usual window. Walk first, sit
        second. Pay round by round. Confirm lady drinks and bar fines out loud. Use Grab or Bolt
        late at night.
      </p>
      <p>
        Stay near BTS Nana or BTS Asok if you want to walk or take a 5–10 minute ride. Soi 11 is
        nearby and more clubs-and-bars than go-go. It is a useful add-on, not a replacement for
        Cowboy or Nana Plaza.
      </p>
    </PageShell>
  );
}
