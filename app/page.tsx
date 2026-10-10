import Link from "next/link";
import { pageMeta } from "@/lib/seo";

const homeTitle = "Thai Night – Bangkok & Pattaya Nightlife Guides 2026";
const homeDescription =
  "Practical nightlife guides for Bangkok and Pattaya. Real 2026 prices, area comparisons, first-timer tips and common scams. No fluff.";

export const metadata = pageMeta(homeTitle, homeDescription, "/");


const bangkokGuides = [
  { href: "/bangkok/", label: "Bangkok overview" },
  { href: "/bangkok/cowboy-vs-nana/", label: "Soi Cowboy vs Nana Plaza" },
  { href: "/bangkok/one-night-plan/", label: "One-night plan" },
  { href: "/bangkok/areas/soi-cowboy/", label: "Soi Cowboy" },
  { href: "/bangkok/areas/nana-plaza/", label: "Nana Plaza" },
  { href: "/bangkok/areas/soi-11/", label: "Soi 11" },
  { href: "/bangkok/areas/patpong/", label: "Patpong" },
];

const pattayaGuides = [
  { href: "/pattaya/", label: "Pattaya overview" },
  { href: "/pattaya/walking-street-vs-soi-6/", label: "Walking Street vs Soi 6" },
  { href: "/pattaya/one-night-plan/", label: "One-night plan" },
  { href: "/pattaya/areas/walking-street/", label: "Walking Street" },
  { href: "/pattaya/areas/soi-6/", label: "Soi 6" },
  { href: "/pattaya/areas/lk-metro/", label: "LK Metro" },
  { href: "/pattaya/areas/soi-buakhao/", label: "Soi Buakhao" },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:py-14">
      <h1 className="text-3xl font-semibold tracking-tight text-pretty sm:text-4xl">
        Thai Night – Practical Nightlife Guides for Bangkok & Pattaya
      </h1>
      <p className="mt-6 text-2xl font-semibold text-foreground">Know before you go.</p>
      <p className="mt-2 text-lg leading-7 text-zinc-100">
        Real prices, real areas, real scams — updated for 2026.
      </p>
      <p className="mt-5 text-base leading-7 text-zinc-200">
        Free guides for first-timers and returning visitors.
      </p>
      <p className="mt-2 text-base leading-7 text-zinc-200">
        No fluff. No paid bar rankings. Just what actually works.
      </p>

      <p className="mt-8 text-base leading-7 text-zinc-200">
        Recent note (Oct 2026):
        <br />
        Some Soi 6 bars now ask for lady-drink minimums before short-time.
        <br />
        Always confirm room fee + girl’s fee + any minimum before you sit down.
      </p>
      <p className="mt-3 text-base leading-7 text-zinc-200">
        <Link href="/pattaya/tonight/" className="text-accent hover:underline">
          Pattaya Tonight
        </Link>
        {" · "}
        <Link href="/pattaya/areas/soi-6/" className="text-accent hover:underline">
          Soi 6
        </Link>
      </p>

      <h2 className="mt-10 text-lg font-semibold">Start here</h2>
      <ul className="mt-3 space-y-2">
        <li>
          <Link href="/bangkok/first-timer/" className="text-accent hover:underline">
            Bangkok First-Timer Guide
          </Link>
        </li>
        <li>
          <Link href="/pattaya/first-timer/" className="text-accent hover:underline">
            Pattaya First-Timer Guide
          </Link>
        </li>
        <li>
          <Link href="/prices/" className="text-accent hover:underline">
            Prices
          </Link>{" "}
          and{" "}
          <Link href="/budgets/" className="text-accent hover:underline">
            Budgets
          </Link>
        </li>
        <li>
          <Link href="/bangkok/faq/" className="text-accent hover:underline">
            Bangkok FAQ
          </Link>
          {" · "}
          <Link href="/pattaya/faq/" className="text-accent hover:underline">
            Pattaya FAQ
          </Link>
        </li>
        <li>
          <Link href="/scams/" className="text-accent hover:underline">
            Scams
          </Link>
        </li>
      </ul>

      <h2 className="mt-10 text-lg font-semibold">Bangkok</h2>
      <ul className="mt-3 space-y-2">
        {bangkokGuides.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-accent hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 text-lg font-semibold">Pattaya</h2>
      <ul className="mt-3 space-y-2">
        {pattayaGuides.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-accent hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-base leading-7 text-zinc-200">
        Thailand’s nightlife moves fast. Prices and rules change. Thai Night collects practical
        information from recent visitor reports so you can plan a night without guessing — then
        confirm everything on the spot.
      </p>
    </div>
  );
}
