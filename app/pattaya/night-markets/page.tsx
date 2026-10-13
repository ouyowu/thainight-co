import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { StayNearby } from "@/components/StayNearby";
import { A, Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Pattaya Night Markets 2026 – Thepprasit Prices, Days & Hours",
  "Thepprasit Night Market in Pattaya in 2026: free entry, Friday–Sunday is the full market, dishes mostly 40–150 THB, and how not to mix it up with Jomtien.",
  "/pattaya/night-markets/",
);

export default function PattayaNightMarketsPage() {
  return (
    <PageShell
      path="/pattaya/night-markets/"
      title="Pattaya Night Markets (2026) – Thepprasit Prices & Days"
      lead="Thepprasit Night Market is free to enter. Most dishes run about 40–150 THB, and a few plates plus a drink is often 150–300 THB per person. Friday to Sunday is the night every current guide agrees is fully open."
    >
      <Section title="What it costs in 2026">
        <PriceTable
          caption="Thepprasit Night Market prices 2026"
          headers={["Item", "Price (THB)", "Notes"]}
          rows={[
            ["Entry, parking, toilets", "Free", "Bring small notes anyway"],
            ["Most dishes and snacks", "about 40–150", "Ask before you order; the same plate can change night to night"],
            ["Pad Thai", "about 60–100", "A common stall price, not a menu"],
            ["Moo ping (pork skewer)", "about 10–15 a stick", "Easy add-on, not a meal"],
            ["A few plates and a drink", "about 150–300 per person", "A fuller graze sits toward the top of that range"],
            ["Grilled seafood", "often from about 100, more by size", "Agree the price before it is cooked"],
          ]}
        />
        <CheckedNote />
      </Section>

      <Section title="Days, hours and where it is">
        <p>
          The market is on Thepprasit Road in South Pattaya, inland toward the Sukhumvit / Jomtien
          side, behind Outlet Mall. It is not the smaller evening market on Jomtien Beach Road.
          Tell the driver “Thepprasit Night Market” and check the pin before you leave.
        </p>
        <Bullets>
          <li>Usual hours are about 17:00–22:30, sometimes toward 23:00. Busiest around 18:00–20:00.</li>
          <li>Friday, Saturday and Sunday are the nights listings agree the full set of stalls is there.</li>
          <li>Some 2026 guides say it now opens every evening. Weeknights can be thinner. Check before a Monday–Thursday visit.</li>
        </Bullets>
      </Section>

      <StayNearby label="Hotels in Pattaya" link="hotelPattaya">
        <p>
          South Pattaya and Jomtien are the short ride. Central Pattaya is still an easy Grab or
          baht bus after you eat.
        </p>
      </StayNearby>

      <Section title="Getting there">
        <Bullets>
          <li>
            Fixed-route <A href="/pattaya/baht-bus/">baht buses</A> toward Jomtien are about 10–20 THB
            per person. Naming the market as a private drop-off turns it into a charter — agree the
            price first, or use Grab or Bolt.
          </li>
          <li>The market sits off the Beach Road and Second Road loops, so a ride is simpler than walking from Walking Street.</li>
          <li>Cash. Many stalls do not take cards. Small notes, not a 1,000 THB bill.</li>
        </Bullets>
      </Section>

      <Section title="Scams and easy mistakes">
        <Bullets>
          <li>
            <strong>Seafood before a price.</strong> Point at a prawn or a fish, ask the price, then
            let them cook. “Market price” after the grill is how the bill jumps.
          </li>
          <li>
            <strong>The wrong market.</strong> Jomtien’s beachfront night market is a different,
            smaller stop. Thepprasit is the large inland one on Thepprasit Road.
          </li>
          <li>
            <strong>Charter songthaew.</strong> A fixed-route seat is 10–20 THB. A driver who quotes
            a few hundred baht for “the market” is chartering the truck.
          </li>
        </Bullets>
      </Section>

      <FaqList
        items={[
          {
            q: "Is Thepprasit Night Market still open in 2026?",
            a: "Yes. It is on Thepprasit Road in South Pattaya, behind Outlet Mall, toward Sukhumvit and Jomtien. Entry is free.",
          },
          {
            q: "What days and what time is Thepprasit Night Market?",
            a: "Usually about 17:00–22:30. Friday to Sunday is the full market. Some listings say it opens every evening; weeknights can have fewer stalls, so check before a Monday–Thursday visit.",
          },
          {
            q: "How much is food at Thepprasit Night Market?",
            a: "Most dishes are about 40–150 THB. Pad Thai is often about 60–100 THB, and a few plates plus a drink is often 150–300 THB per person. Confirm the price before you order.",
          },
          {
            q: "How do I get to Thepprasit Night Market from Walking Street?",
            a: "It is not on the Beach Road loop. Use Grab or Bolt, or a baht bus toward Jomtien on a fixed route (about 10–20 THB). Agree a price first if the driver is chartering the truck.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/night-activities/", label: "Pattaya night activities" },
          { href: "/pattaya/baht-bus/", label: "Baht bus prices" },
          { href: "/pattaya/areas/jomtien-beach-road/", label: "Jomtien Beach Road" },
          { href: "/cash/", label: "Cash and ATMs" },
        ]}
      />
    </PageShell>
  );
}
