import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Nightlife Guide 2026 – Areas & Prices",
  "Complete Bangkok nightlife overview: Soi Cowboy, Nana Plaza, prices, first-timer advice and how the main areas compare in 2026.",
  "/bangkok/",
);

export default function BangkokPage() {
  return (
    <PageShell
      title="Bangkok Nightlife Guide 2026 – Areas, Prices & First-Timer Advice"
      belowTitle={
        <p className="mt-3 text-base leading-7 text-zinc-200">
          New here? Start with the{" "}
          <Link href="/bangkok/first-timer/" className="text-accent hover:underline">
            First-Timer Guide
          </Link>{" "}
          or a{" "}
          <Link href="/bangkok/one-night-plan/" className="text-accent hover:underline">
            one-night plan
          </Link>
          .
        </p>
      }
    >
      <section>
        <h2 className="text-lg font-semibold text-foreground">Quick Overview</h2>
        <p className="mt-2">
          Bangkok’s main adult nightlife is concentrated in a few well-known areas around Sukhumvit.
          The two primary go-go zones are Soi Cowboy and Nana Plaza. They are close to each other,
          easy to reach by BTS, and suitable for both first-timers and returning visitors.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Main Areas at a Glance</h2>
        <div className="mt-3">
          <PriceTable
            caption="Main Areas at a Glance"
            headers={["Area", "Role", "What it is", "First-timer"]}
            rows={[
              ["Soi Cowboy", "Easiest first night", "Open-air street, compact", "Excellent"],
              ["Nana Plaza", "Variety & shows", "3-floor complex, denser", "Very good"],
              ["Patpong", "Curiosity / market", "Older, more touristy", "Low priority"],
              ["Soi 11", "Mixed bars & clubs", "International, less “go-go only”", "Good for non-go-go nights"],
            ]}
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Recommended Starting Point</h2>
        <p className="mt-2">
          Most first-timers do best starting on Soi Cowboy. It is linear, open-air, and easier to
          read. Nana Plaza is better once you want more options or bigger productions.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">2026 Price Snapshot (Go-Go style)</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Beer: 150–200 THB</li>
          <li>Lady drink: 200–280 THB</li>
          <li>Bar fine (ST): 800–1,500 THB</li>
          <li>Full short-time night: commonly 4,000–8,000+ THB</li>
        </ul>
        <p className="mt-3">
          → Full details on the{" "}
          <Link href="/prices/" className="text-accent hover:underline">
            Prices page
          </Link>
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Practical Notes</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Stay near BTS Nana or BTS Asok for easy access</li>
          <li>Use Grab or Bolt late at night</li>
          <li>Confirm lady drink and bar fine prices before ordering</li>
          <li>Never follow street touts upstairs for “cheap shows”</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Quick Links</h2>
        <ul className="mt-2 space-y-1">
          <li>
            <Link href="/bangkok/first-timer/" className="text-accent hover:underline">
              Bangkok First-Timer Guide
            </Link>
          </li>
          <li>
            <Link href="/bangkok/faq/" className="text-accent hover:underline">
              Bangkok FAQ
            </Link>
          </li>
          <li>
            <Link href="/bangkok/getting-around/" className="text-accent hover:underline">
              Getting around
            </Link>
          </li>
          <li>
            <Link href="/bangkok/airport/" className="text-accent hover:underline">
              Airport to nightlife
            </Link>
          </li>
          <li>
            <Link href="/bangkok/areas/soi-cowboy/" className="text-accent hover:underline">
              Soi Cowboy detailed guide
            </Link>
          </li>
          <li>
            <Link href="/bangkok/areas/nana-plaza/" className="text-accent hover:underline">
              Nana Plaza detailed guide
            </Link>
          </li>
          <li>
            <Link href="/scams/" className="text-accent hover:underline">
              Scams to avoid
            </Link>
          </li>
          <li>
            <Link href="/prices/" className="text-accent hover:underline">
              Current prices
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">More Bangkok guides</h2>
        <ul className="mt-2 space-y-1">
          <li>
            <Link href="/bangkok/first-timer/" className="text-accent hover:underline">
              First-timer guide
            </Link>
          </li>
          <li>
            <Link href="/bangkok/faq/" className="text-accent hover:underline">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/bangkok/getting-around/" className="text-accent hover:underline">
              Getting around
            </Link>
          </li>
          <li>
            <Link href="/bangkok/airport/" className="text-accent hover:underline">
              Airport to nightlife
            </Link>
          </li>
          <li>
            <Link href="/bangkok/night-activities/" className="text-accent hover:underline">
              Night activities
            </Link>
          </li>
          <li>
            <Link href="/bangkok/bar-types/" className="text-accent hover:underline">
              Bar types
            </Link>
          </li>
          <li>
            <Link href="/bangkok/ladies-night/" className="text-accent hover:underline">
              Ladies night
            </Link>
          </li>
          <li>
            <Link href="/cash/" className="text-accent hover:underline">
              Cash
            </Link>
          </li>
          <li>
            <Link href="/bangkok/one-night-plan/" className="text-accent hover:underline">
              One-night sample plans
            </Link>
          </li>
          <li>
            <Link href="/bangkok/areas/soi-cowboy/" className="text-accent hover:underline">
              Soi Cowboy
            </Link>
          </li>
          <li>
            <Link href="/bangkok/areas/soi-cowboy/bars/" className="text-accent hover:underline">
              Soi Cowboy bars
            </Link>
          </li>
          <li>
            <Link href="/bangkok/areas/soi-cowboy/baccara/" className="text-accent hover:underline">
              Baccara
            </Link>
            {" · "}
            <Link href="/bangkok/areas/soi-cowboy/dollhouse/" className="text-accent hover:underline">
              Dollhouse
            </Link>
            {" · "}
            <Link href="/bangkok/areas/soi-cowboy/tilac/" className="text-accent hover:underline">
              Tilac
            </Link>
            {" · "}
            <Link href="/bangkok/areas/soi-cowboy/shark/" className="text-accent hover:underline">
              Shark
            </Link>
          </li>
          <li>
            <Link href="/bangkok/areas/nana-plaza/" className="text-accent hover:underline">
              Nana Plaza
            </Link>
          </li>
          <li>
            <Link href="/bangkok/areas/nana-plaza/floors/" className="text-accent hover:underline">
              Nana Plaza floors
            </Link>
          </li>
          <li>
            <Link href="/bangkok/areas/patpong/" className="text-accent hover:underline">
              Patpong
            </Link>
          </li>
          <li>
            <Link href="/bangkok/areas/soi-11/" className="text-accent hover:underline">
              Soi 11
            </Link>
          </li>
          <li>
            <Link href="/bangkok/areas/rca-thonglor/" className="text-accent hover:underline">
              RCA & Thonglor
            </Link>
          </li>
        </ul>
      </section>
    </PageShell>
  );
}
