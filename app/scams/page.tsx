import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Nightlife Scams in Bangkok & Pattaya 2026",
  "Common nightlife scams and how to avoid them: padded bills, tout shows, bar fine confusion, taxis and more.",
  "/scams/",
);

export default function ScamsPage() {
  return (
    <PageShell title="Common Nightlife Scams in Bangkok & Pattaya (2026)">
      <ol className="list-decimal space-y-5 pl-5">
        <li>
          <p className="font-semibold text-foreground">
            Ping-Pong / “Cheap Show” Trap (especially Patpong & some Walking Street touts)
          </p>
          <p className="mt-1">
            Someone offers a low-price or “free entry” show upstairs. Once inside, the bill for
            drinks becomes thousands of baht. Rule: Never follow street touts upstairs.
          </p>
        </li>
        <li>
          <p className="font-semibold text-foreground">Padded Bar Bill</p>
          <p className="mt-1">
            Extra drinks or inflated prices appear on the final bill. Rule: Pay round by round when
            possible. Watch the slips that go into the plastic bin on your table.
          </p>
        </li>
        <li>
          <p className="font-semibold text-foreground">Unclear Lady Drink Prices</p>
          <p className="mt-1">
            You agree to buy drinks without confirming the price per drink. Rule: Ask the exact
            price of a lady drink before the first one is ordered.
          </p>
        </li>
        <li>
          <p className="font-semibold text-foreground">Bar Fine Confusion</p>
          <p className="mt-1">
            Thinking the bar fine includes the girl’s time. Rule: Bar fine = paid to the bar. Her
            fee is separate and must be agreed with her.
          </p>
        </li>
        <li>
          <p className="font-semibold text-foreground">Taxi / Tuk-tuk Overcharge</p>
          <p className="mt-1">
            Meter “broken” or fixed high price. Rule: Use Grab or Bolt. Or insist on the meter.
          </p>
        </li>
        <li>
          <p className="font-semibold text-foreground">Jet-ski Damage Scam (Pattaya Beach)</p>
          <p className="mt-1">
            Operator claims pre-existing damage after you return the jet-ski. Rule: Avoid renting
            jet-skis on the main beach, or photograph everything extensively beforehand.
          </p>
        </li>
        <li>
          <p className="font-semibold text-foreground">Room Theft</p>
          <p className="mt-1">
            Cash or valuables taken during a short-time visit. Rule: Use the hotel safe. Don’t leave
            valuables out.
          </p>
        </li>
        <li>
          <p className="font-semibold text-foreground">
            Drink-minimum surprises (especially some Soi 6 bars)
          </p>
          <p className="mt-1">
            Some bars ask for a minimum number of lady drinks before a short-time / upstairs
            arrangement.
          </p>
          <p className="mt-1">
            <strong>Rule:</strong> Before you sit down or order rounds, ask: room fee, girl’s fee,
            and whether there is any drink minimum. If the total doesn’t make sense, walk to another
            bar.
          </p>
        </li>
      </ol>

      <section>
        <h2 className="text-lg font-semibold text-foreground">General Safety Habits</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Don’t flash large amounts of cash</li>
          <li>Keep your phone in a front pocket or secure place</li>
          <li>Tell someone roughly where you are going if you’re alone</li>
          <li>Tourist Police: 1155</li>
        </ul>
      </section>
    </PageShell>
  );
}
