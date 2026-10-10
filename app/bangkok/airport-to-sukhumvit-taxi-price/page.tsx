import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Suvarnabhumi to Sukhumvit Taxi Price 2026 – Nana & Asok, Rail Link vs Grab",
  "Suvarnabhumi (BKK) airport to Sukhumvit (Nana, Asok) in 2026: metered taxi total with the 50 THB surcharge and tolls, Grab, and the 45 THB Airport Rail Link plus BTS.",
  "/bangkok/airport-to-sukhumvit-taxi-price/",
);

export default function AirportSukhumvitPage() {
  return (
    <PageShell
      path="/bangkok/airport-to-sukhumvit-taxi-price/"
      title="Suvarnabhumi Airport to Sukhumvit: Taxi Price (2026)"
      lead="A metered taxi from Suvarnabhumi to Nana or Asok usually totals about 400–700 THB including the 50 THB airport surcharge and tolls. The Airport Rail Link plus BTS costs about 100 THB."
    >
      <Section title="2026 prices compared">
        <PriceTable
          caption="Suvarnabhumi to Sukhumvit prices 2026"
          headers={["Option", "Total (THB)", "Time"]}
          rows={[
            ["Public metered taxi (official queue)", "about 400–700", "30–60+ min"],
            ["Grab / Bolt", "Live app price", "30–60+ min"],
            ["Airport Rail Link + BTS", "about 70–105", "45–60 min"],
            ["Pre-booked private transfer", "Fixed; usually above taxi", "30–60+ min"],
          ]}
        />
        <Bullets>
          <li>Taxi total = meter (35 THB flag fall + distance) + 50 THB airport surcharge + expressway tolls (about 25–70 THB, paid by you).</li>
          <li>Airport Rail Link: 45 THB to Phaya Thai, then BTS to Nana or Asok. Runs about 06:00–midnight, every 10–15 minutes.</li>
          <li>Or ride the Rail Link to Makkasan and walk to MRT Phetchaburi, one stop from Sukhumvit / Asok.</li>
        </Bullets>
        <CheckedNote />
      </Section>

      <BookingBox
        items={[
          { label: "Pre-book an airport transfer", link: "klook" },
          { label: "Thailand eSIM (for Grab on landing)", link: "esim" },
        ]}
      />

      <Section title="Avoid">
        <Bullets>
          <li>Anyone offering a taxi inside the arrivals hall — use the official queue or the app.</li>
          <li>Drivers who won’t use the meter from the official queue — ask for another car.</li>
          <li>Paying tolls twice: you hand the toll money to the driver at each booth.</li>
        </Bullets>
        <p>Meter rates and city fares: <A href="/bangkok/taxi-fare/">Bangkok taxi fares 2026</A>.</p>
      </Section>

      <FaqList
        items={[
          { q: "How much is a taxi from Suvarnabhumi to Sukhumvit?", a: "Usually about 400–700 THB in total including the 50 THB airport surcharge and expressway tolls." },
          { q: "What is the cheapest way from Suvarnabhumi to Nana or Asok?", a: "Airport Rail Link (45 THB) to Phaya Thai, then the BTS — about 70–105 THB in total." },
          { q: "How long does it take?", a: "30–60+ minutes by road depending on traffic; about 45–60 minutes by rail." },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/airport/", label: "Airport to city" },
          { href: "/bangkok/hotels-nana-asok/", label: "Where to stay" },
          { href: "/pattaya/bangkok-airport-to-pattaya-taxi-price/", label: "Airport to Pattaya" },
        ]}
      />
    </PageShell>
  );
}
