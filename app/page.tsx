import { A, LinkList } from "@/components/Prose";
import { bangkokAreas, bangkokGuides, generalGuides, pattayaAreas, pattayaGuides } from "@/lib/guides";
import { pageMeta } from "@/lib/seo";

const homeTitle = "Thai Night – Bangkok & Pattaya Nightlife Guides 2026";
const homeDescription =
  "Practical nightlife guides for Bangkok and Pattaya: rooftop bars, clubs, Muay Thai, cabaret shows, night markets, real 2026 prices and common scams.";

export const metadata = pageMeta(homeTitle, homeDescription, "/");

const highlights = [
  {
    href: "/bangkok/rooftop-bars/",
    title: "Bangkok rooftop bars",
    note: "Which sky bar fits your budget, dress code and area.",
  },
  {
    href: "/bangkok/muay-thai/",
    title: "Muay Thai fight nights",
    note: "Rajadamnern vs Lumpinee, seat classes, how to buy.",
  },
  {
    href: "/pattaya/cabaret-shows/",
    title: "Pattaya cabaret shows",
    note: "Tiffany’s vs Alcazar: show length, times, seats.",
  },
  {
    href: "/scams/",
    title: "Nightlife scams",
    note: "Bill padding, tout shows, taxi meters — and how to avoid them.",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:py-14">
      <h1 className="text-3xl font-semibold tracking-tight text-pretty sm:text-4xl">
        Thai Night – Practical Nightlife Guides for Bangkok & Pattaya
      </h1>
      <p className="mt-6 text-2xl font-semibold text-foreground">Know before you go.</p>
      <p className="mt-2 text-lg leading-7 text-zinc-100">
        Rooftops, clubs, live music, fight nights and night markets — with real 2026 prices.
      </p>
      <p className="mt-5 text-base leading-7 text-zinc-200">
        Free guides for first-timers and returning visitors. No paid rankings. Just what actually
        works, and what to confirm on the spot.
      </p>

      <h2 className="mt-10 text-lg font-semibold">Popular right now</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {highlights.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block rounded-lg border border-line bg-card p-4 transition-colors hover:border-accent/60"
          >
            <span className="font-semibold text-foreground">{item.title}</span>
            <span className="mt-1 block text-sm text-muted">{item.note}</span>
          </a>
        ))}
      </div>

      <h2 className="mt-10 text-lg font-semibold">Start here</h2>
      <ul className="mt-3 space-y-2">
        <li>
          <A href="/bangkok/first-timer/">Bangkok first-timer guide</A>
          {" · "}
          <A href="/pattaya/first-timer/">Pattaya first-timer guide</A>
        </li>
        <li>
          <A href="/bangkok/one-night-plan/">One night in Bangkok</A>
          {" · "}
          <A href="/pattaya/one-night-plan/">One night in Pattaya</A>
        </li>
      </ul>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <section>
          <h2 className="text-lg font-semibold">
            <A href="/bangkok/">Bangkok</A>
          </h2>
          <div className="mt-3 text-sm">
            <LinkList links={bangkokGuides} />
          </div>
          <h3 className="mt-4 text-sm font-semibold text-muted">Areas</h3>
          <div className="mt-2 text-sm">
            <LinkList links={bangkokAreas} />
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold">
            <A href="/pattaya/">Pattaya</A>
          </h2>
          <div className="mt-3 text-sm">
            <LinkList links={pattayaGuides} />
          </div>
          <h3 className="mt-4 text-sm font-semibold text-muted">Areas</h3>
          <div className="mt-2 text-sm">
            <LinkList links={pattayaAreas} />
          </div>
        </section>
      </div>

      <h2 className="mt-10 text-lg font-semibold">Money & safety</h2>
      <div className="mt-3">
        <LinkList links={generalGuides} />
      </div>

      <p className="mt-10 text-base leading-7 text-zinc-200">
        Thailand’s nightlife moves fast. Prices and rules change. Thai Night collects practical
        information from venues, public sources and recent visitor reports so you can plan a night
        without guessing — then confirm everything on the spot.
      </p>
    </div>
  );
}
