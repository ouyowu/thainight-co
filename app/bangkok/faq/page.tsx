import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Nightlife FAQ 2026",
  "Common questions about Bangkok nightlife: Soi Cowboy vs Nana Plaza, prices, bar fines, safety and first-timer tips.",
  "/bangkok/faq/",
);

export default function BangkokFaqPage() {
  return (
    <PageShell title="Bangkok Nightlife FAQ 2026">
      <section>
        <h2 className="text-lg font-semibold text-foreground">
          Soi Cowboy or Nana Plaza for the first night?
        </h2>
        <p className="mt-2">
          <strong>Soi Cowboy</strong> for the easiest layout (one open street).
        </p>
        <p className="mt-2">
          <strong>Nana Plaza</strong> if you want more venues in one complex.
        </p>
        <p className="mt-2">Many people do Cowboy first, Nana on another night.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Do I need a reservation?</h2>
        <p className="mt-2">
          No for normal go-go visits. Walk in. Peak hours can mean standing room only in popular
          bars.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">What is a bar fine?</h2>
        <p className="mt-2">
          Money paid <strong>to the bar</strong> so a staff member can leave.
        </p>
        <p className="mt-2">
          Her time/fee is <strong>separate</strong> and agreed with her. Confirm both numbers before
          you leave.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">What is a lady drink?</h2>
        <p className="mt-2">
          A drink you buy for someone sitting with you. Price is higher than your own beer. Ask the
          price before the first one.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">How much cash should I carry?</h2>
        <p className="mt-2">
          Enough for your planned night plus a buffer. Don’t flash large stacks. Use the hotel safe
          for the rest. Many places are cash-friendly; don’t assume every bar takes card.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">What time should I go?</h2>
        <p className="mt-2">
          Roughly <strong>21:00–22:00</strong> start is practical. Earlier is quieter; after
          midnight is busier and some places wind down near 02:00 on Cowboy.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Is Patpong worth it?</h2>
        <p className="mt-2">
          For the <strong>night market</strong> and a short look, yes.
        </p>
        <p className="mt-2">
          For the main go-go night in 2026, <strong>Cowboy or Nana</strong> are stronger. Never
          follow touts upstairs for “cheap shows.”
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Where should I stay?</h2>
        <p className="mt-2">
          Near <strong>BTS Nana</strong> or <strong>Asok</strong> keeps transport simple.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Is it safe?</h2>
        <p className="mt-2">
          Use normal big-city caution. Biggest issues are{" "}
          <strong>bills, touts, and transport overcharge</strong> — not random violence. See{" "}
          <Link href="/scams/" className="text-accent hover:underline">
            Scams
          </Link>{" "}
          and{" "}
          <Link href="/safety/" className="text-accent hover:underline">
            Safety
          </Link>
          .
        </p>
      </section>

      <p>
        Related:{" "}
        <Link href="/bangkok/first-timer/" className="text-accent hover:underline">
          First-timer guide
        </Link>
        ,{" "}
        <Link href="/prices/" className="text-accent hover:underline">
          Prices
        </Link>
        ,{" "}
        <Link href="/bangkok/one-night-plan/" className="text-accent hover:underline">
          One-night plans
        </Link>
      </p>
    </PageShell>
  );
}
