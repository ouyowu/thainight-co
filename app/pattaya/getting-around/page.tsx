import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Getting Around Pattaya at Night 2026",
  "Baht buses, motorbike taxis, Grab and Bolt in Pattaya 2026: fares, the Beach Road and Second Road loops, how to pay, Walking Street pedestrian hours and what to avoid.",
  "/pattaya/getting-around/",
);

export default function PattayaGettingAroundPage() {
  return (
    <PageShell path="/pattaya/getting-around/" title="Getting Around Pattaya at Night (2026)">
      <p>
        Pattaya is compact. Baht buses cover the main loops for a small flat fare; Grab and Bolt
        cover everything else. Avoid opaque fixed prices from touts at the Walking Street ends.
      </p>

      <Section title="What each option costs">
        <PriceTable
          caption="Pattaya transport 2026"
          headers={["Option", "Fare", "Use it for"]}
          rows={[
            ["Baht bus on the loop", "10–20 THB per person", "Anywhere along Beach or Second Road"],
            ["Baht bus off the route", "Agreed charter, far more", "Only if you must; settle the price first"],
            ["Motorbike taxi", "about 40–100 THB in town", "Short hops, solo, no luggage"],
            ["Grab / Bolt", "about 60–150 THB in town", "Jomtien, late nights, bad weather"],
          ]}
        />
        <p className="text-sm text-muted">
          Checked October 2026 against operator listings and recent visitor reports. Full guide:{" "}
          <A href="/pattaya/baht-bus/">baht bus prices and routes</A>.
        </p>
      </Section>

      <Section title="How the loops run">
        <Bullets>
          <li>The main loop goes south down Beach Road and north up Second Road. Stand on the correct road for your direction, or you will ride the long way.</li>
          <li>Separate baht buses run out to Jomtien and to Naklua. They are not the same loop; ask before boarding.</li>
          <li>They run all night on the busy stretches, thinning out in the small hours.</li>
          <li>If a driver asks where you are going before you board, that is usually the opening of a charter, not the fixed fare.</li>
        </Bullets>
      </Section>

      <Section title="Baht bus (songthaew)">
        <Bullets>
          <li>Pickup trucks with bench seats loop Beach Road (southbound) and Second Road (northbound).</li>
          <li>Flag one down, ride, press the buzzer, pay the driver at the window — usually 10–20 THB on the loop.</li>
          <li>If you ask to go off the route, it becomes a private hire: agree the price before you get in.</li>
          <li>Full guide: <A href="/pattaya/baht-bus/">baht bus prices and routes</A>.</li>
        </Bullets>
      </Section>

      <Section title="Grab / Bolt">
        <Bullets>
          <li>Default late at night and for Jomtien, Tree Town or the cabaret theatres.</li>
          <li>Second Road is usually easier for pickups than Beach Road.</li>
        </Bullets>
      </Section>

      <Section title="Walking Street pedestrian hours">
        <p>
          <A href="/pattaya/areas/walking-street/">Walking Street</A> closes to traffic in the
          evening. Get dropped at either end and walk.
        </p>
      </Section>

      <Section title="Motorbike taxis">
        <Bullets>
          <li>Riders in numbered vests wait at the mouths of the sois. Agree the fare before getting on.</li>
          <li>Quickest way out of a jam, and the only thing that moves on Beach Road at peak hours.</li>
          <li>Ask for a helmet. It is the law and the fine falls on the passenger too.</li>
          <li>Not for four people and shopping bags. That is a Grab.</li>
        </Bullets>
      </Section>

      <Section title="Walking at night">
        <Bullets>
          <li>Central Pattaya is compact: Soi Buakhao to Walking Street is about ten minutes on foot.</li>
          <li>Pavements are uneven and often blocked. Watch your step rather than your phone.</li>
          <li>Beach Road after dark draws more approaches than Second Road. Neither is dangerous, but one is quieter.</li>
          <li>Crossing Second Road takes patience. There are few signalled crossings and traffic does not stop.</li>
        </Bullets>
      </Section>

      <Section title="Jet-skis">
        <p>
          Main-beach jet-ski rentals have a long-running damage-claim scam pattern. Avoid, or
          photograph everything. Details: <A href="/scams/">scams</A>.
        </p>
      </Section>

      <FaqList
        items={[
          {
            q: "How much is a baht bus in Pattaya?",
            a: "10–20 THB per person on the fixed loop, paid at the driver's window when you get off. Going off the route makes it a charter at a much higher agreed price.",
          },
          {
            q: "How do I stop a baht bus?",
            a: "Press the buzzer on the roof of the passenger area, then pay at the driver's window after you step down.",
          },
          {
            q: "Is Grab available in Pattaya?",
            a: "Yes, and it is the easier option late at night, for Jomtien, and in rain. Expect about 60–150 THB for a ride in town.",
          },
          {
            q: "Can I take a taxi onto Walking Street?",
            a: "No. It closes to traffic in the evening. Get dropped at either end and walk.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/baht-bus/", label: "Baht bus prices" },
          { href: "/pattaya/areas/", label: "Pattaya areas" },
          { href: "/pattaya/first-timer/", label: "First-timer" },
          { href: "/pattaya/where-to-stay/", label: "Where to stay" },
        ]}
      />
    </PageShell>
  );
}
