import Link from "next/link";
import { pageMeta } from "@/lib/seo";

const homeTitle = "Thai Night – Bangkok & Pattaya Nightlife Guides 2026";
const homeDescription =
  "Practical nightlife guides for Bangkok and Pattaya. Real 2026 prices, area comparisons, first-timer tips and common scams. No fluff.";

export const metadata = pageMeta(homeTitle, homeDescription, "/");

const quickLinks = [
  { href: "/bangkok/first-timer/", label: "Bangkok First-Timer Guide" },
  { href: "/pattaya/first-timer/", label: "Pattaya First-Timer Guide" },
  { href: "/scams/", label: "Common Scams to Avoid" },
  { href: "/prices/", label: "Current Prices (2026)" },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:py-14">
      <p className="text-sm font-medium tracking-wide text-accent">Thai Night</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-pretty sm:text-4xl">
        Thai Night – Practical Nightlife Guides for Bangkok & Pattaya
      </h1>
      <p className="mt-6 text-2xl font-semibold text-foreground">Know before you go.</p>
      <p className="mt-2 text-lg leading-7 text-zinc-100">
        Real prices, real areas, real scams — updated for 2026.
      </p>
      <p className="mt-5 text-base leading-7 text-zinc-200">
        Free, no-nonsense guides for first-timers and returning visitors.
      </p>
      <p className="mt-2 text-base leading-7 text-zinc-200">
        No fluff. No paid rankings. Just what actually works.
      </p>

      <p className="mt-6 text-base leading-7 text-zinc-200">
        Note (Oct 2026): Some Soi 6 bars now ask for lady-drink minimums before ST. Always confirm
        room fee + girl’s fee + any minimum before you sit down. Details on the{" "}
        <Link href="/pattaya/tonight/" className="text-accent hover:underline">
          Pattaya Tonight
        </Link>{" "}
        /{" "}
        <Link href="/pattaya/areas/soi-6/" className="text-accent hover:underline">
          Soi 6
        </Link>{" "}
        pages.
      </p>

      <h2 className="mt-10 text-lg font-semibold">Quick Links</h2>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {quickLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block rounded-lg border border-line bg-card px-4 py-3 font-medium text-foreground hover:border-accent hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-base leading-7 text-zinc-200">
        Thailand’s nightlife is famous for a reason — but it moves fast, prices change, and the
        same old advice from 2019 no longer holds. Thai Night collects current information from
        recent visitor reports and on-the-ground sources so you can plan a night without guessing.
      </p>
    </div>
  );
}
