import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Pattaya Baht Bus Price 2026 – Routes, How to Ride & Avoid Overpaying",
  "Pattaya baht bus (songthaew) fares in 2026: 10–20 THB on fixed routes vs private charter, Beach Road and Second Road loops, how to ride and how not to get charged charter prices.",
  "/pattaya/baht-bus/",
);

export default function BahtBusPage() {
  return (
    <PageShell
      title="Pattaya Baht Bus Price & Routes (2026)"
      lead="On a fixed route a baht bus costs 10–20 THB per person. The moment you tell the driver where you want to go, it becomes a private charter at a much higher price."
    >
      <Section title="2026 fares">
        <PriceTable
          caption="Pattaya baht bus fares 2026"
          headers={["Ride", "Price (THB)", "How"]}
          rows={[
            ["Fixed route, Beach Road / Second Road", "10–20 per person", "Hop on the back, buzz to stop, pay the driver"],
            ["Fixed route to Jomtien", "Slightly more on some routes", "Check what other passengers pay"],
            ["Charter (you name the destination)", "Negotiated, much higher", "Agree the price before you get in"],
            ["Motorbike taxi", "Negotiated", "Agree the price first"],
          ]}
        />
        <CheckedNote what="Fares" />
      </Section>

      <Section title="The main loops">
        <Bullets>
          <li><strong>Beach Road</strong> — runs south along the seafront toward <A href="/pattaya/areas/walking-street/">Walking Street</A>.</li>
          <li><strong>Second Road</strong> — runs north, one block inland; good for the cabaret theatres and Central Festival.</li>
          <li>Other routes link to Jomtien and Sukhumvit Road; they run less often, especially late at night.</li>
        </Bullets>
      </Section>

      <Section title="How to ride without overpaying">
        <ol className="list-decimal space-y-1 pl-5">
          <li>Wave one down that is already heading your way.</li>
          <li>Climb in the back — don’t talk to the driver about where you’re going.</li>
          <li>Press the buzzer on the roof when you want to get off.</li>
          <li>Pay the driver at the passenger window, ideally with exact small coins or notes.</li>
        </ol>
        <p>
          Charter pricing isn’t a scam in itself — it’s a different service in the same truck — but
          many visitors pay it without realising. Late at night or off-route, compare with Grab.
        </p>
      </Section>

      <FaqList
        items={[
          { q: "How much is a baht bus in Pattaya in 2026?", a: "Usually 10–20 THB per person on the fixed Beach Road and Second Road routes." },
          { q: "Do baht buses run all night?", a: "Main loops run late, but less often after midnight. Grab, Bolt or a negotiated ride fill the gap." },
          { q: "Can I take a baht bus to Walking Street?", a: "Yes — ride the Beach Road loop south and get off at the north end of Walking Street." },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/getting-around/", label: "Getting around Pattaya" },
          { href: "/pattaya/bangkok-airport-to-pattaya-taxi-price/", label: "Airport to Pattaya taxi price" },
          { href: "/scams/", label: "Scams" },
        ]}
      />
    </PageShell>
  );
}
