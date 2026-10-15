import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok to Pattaya Transfer 2026: Bus, Private Car, Grab, Coach",
  "Compare Bangkok to Pattaya options: airport coach from BKK, Ekkamai bus, private car and Grab. Typical time and how to avoid fake baht quotes.",
  "/pattaya/bangkok-to-pattaya/",
);

export default function BangkokToPattayaPage() {
  return (
    <PageShell
      path="/pattaya/bangkok-to-pattaya/"
      title="Bangkok to Pattaya (2026) - Bus vs Private Car vs Grab vs Coach"
      lead="The road trip is usually about two hours, longer on Friday evenings. Pick the option that matches your bags, landing time and drop point."
    >
      <Section title="The options">
        <PriceTable
          caption="Bangkok to Pattaya transfer options"
          headers={["Option", "From", "Best for", "Watch for"]}
          rows={[
            ["Airport coach", "Suvarnabhumi (BKK) arrivals", "Solo or a pair with normal bags", "Confirm the drop (North, Central or Jomtien) against your hotel"],
            ["Public bus / coach", "Ekkamai (Eastern) bus terminal, BTS Ekkamai", "Leaving from central Bangkok on a budget", "Terminal time plus a Grab at the Pattaya end"],
            ["Private car / van", "BKK, hotel or BTS", "Groups, late landings, lots of luggage", "Book a named operator; ignore arrivals touts"],
            ["Grab", "Anywhere the app covers", "Door-to-door when the live fare looks fair", "Long intercity ride; surge on Friday nights"],
          ]}
        />
        <p>Airport desks and drop points are on the <A href="/pattaya/airport/">Bangkok / airport transfer page</A>. Use this page to choose the mode.</p>
      </Section>
      <Section title="From Suvarnabhumi (BKK)">
        <Bullets>
          <li>Scheduled airport coaches leave from the arrivals building. Check the last departure if you land late.</li>
          <li>A pre-booked private transfer is calmer after a night flight than negotiating at the door.</li>
          <li>Grab works if the app shows a fare you accept. Do not follow someone offering a same-price-as-Grab car outside.</li>
        </Bullets>
      </Section>
      <Section title="From central Bangkok">
        <Bullets>
          <li>Ekkamai bus terminal sits next to BTS Ekkamai. Buses run through the day; buy a ticket at the counter and keep your bag in sight.</li>
          <li>A private car or Grab from your hotel skips the terminal. Worth it with bags or a tight check-in in Pattaya.</li>
        </Bullets>
      </Section>
      <Section title="Time and drop-off">
        <Bullets>
          <li>Plan two hours off-peak, three or more leaving Bangkok 16:00-20:00 on Fridays.</li>
          <li>Central Pattaya is the simplest drop. Walking Street is pedestrian at night — get dropped at the end and walk in.</li>
          <li>Jomtien hotels are a different stop. Say the hotel name, not just Pattaya.</li>
        </Bullets>
      </Section>
      <BookingBox title="Book a transfer" items={[{ label: "Bangkok to Pattaya transfer", link: "transferBangkokPattaya" }, { label: "Thailand eSIM", link: "esim" }]} />
      <Section title="Quotes that are wrong">
        <p>Anyone in arrivals quoting a round cash number including tolls before you see a meter or an app fare is selling a mark-up. More patterns: <A href="/scams/">scams</A>.</p>
      </Section>
      <FaqList items={[
        { q: "Is the airport coach enough?", a: "Yes if you land in daylight, have normal luggage and your hotel is near a published drop. Private car is better late at night or with a group." },
        { q: "Can I use Grab the whole way?", a: "Usually. Check the live fare and the driver willingness for an intercity trip before you get in." },
        { q: "What about U-Tapao?", a: "Closer to Pattaya than BKK. Grab or a booked car into Central or Jomtien — see the airport page." },
      ]} />
      <Related links={[{ href: "/pattaya/airport/", label: "Airport / U-Tapao notes" }, { href: "/pattaya/first-timer/", label: "First-timer" }, { href: "/pattaya/getting-around/", label: "Getting around Pattaya" }]} />
    </PageShell>
  );
}
