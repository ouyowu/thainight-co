import { PageShell } from "@/components/PageShell";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Getting Around Pattaya at Night 2026",
  "Baht buses, Grab/Bolt, Walking Street pedestrian hours and the jet-ski scam to skip in Pattaya.",
  "/pattaya/getting-around/",
);

export default function PattayaGettingAroundPage() {
  return (
    <PageShell path="/pattaya/getting-around/" title="Getting Around Pattaya at Night (2026)">
      <p>
        Pattaya is compact. Baht buses cover the main loops for a small flat fare; Grab and Bolt
        cover everything else. Avoid opaque fixed prices from touts at the Walking Street ends.
      </p>

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

      <Section title="Jet-skis">
        <p>
          Main-beach jet-ski rentals have a long-running damage-claim scam pattern. Avoid, or
          photograph everything. Details: <A href="/scams/">scams</A>.
        </p>
      </Section>

      <Related
        links={[
          { href: "/pattaya/first-timer/", label: "First-timer" },
          { href: "/pattaya/faq/", label: "FAQ" },
          { href: "/pattaya/hotels-walking-street/", label: "Where to stay" },
        ]}
      />
    </PageShell>
  );
}
