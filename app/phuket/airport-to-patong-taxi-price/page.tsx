import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Phuket Airport to Patong Taxi Price 2026 – Taxi, Grab, Bus & Transfers",
  "Phuket airport (HKT) to Patong in 2026: metered taxi with the 100 THB surcharge, limousine counter, Grab, pre-booked transfers, minivan and the 100 THB Smart Bus compared.",
  "/phuket/airport-to-patong-taxi-price/",
);

export default function PhuketAirportPatongPage() {
  return (
    <PageShell
      path="/phuket/airport-to-patong-taxi-price/"
      title="Phuket Airport to Patong: Taxi Price (2026)"
      lead="Expect about 800–1,000 THB for a taxi or limousine counter car from Phuket airport to Patong, including the 100 THB airport surcharge. Pre-booked sedans can be cheaper; the Smart Bus costs about 100 THB."
    >
      <Section title="2026 prices compared">
        <PriceTable
          caption="Phuket airport to Patong prices 2026"
          headers={["Option", "Price (THB)", "Time", "Notes"]}
          rows={[
            ["Metered taxi (official counter)", "about 700–1,000", "45–60 min", "Includes the mandatory 100 THB surcharge"],
            ["Limousine counter (fixed)", "about 800–1,000", "50–60 min", "Price posted at the counter; 24/7"],
            ["Grab", "about 750–1,250", "45–60 min", "Fixed in-app; short walk to the pickup zone"],
            ["Pre-booked sedan", "about 500–750", "50–60 min", "Name sign, flight tracking"],
            ["Shared minivan", "about 180 per person", "60–90 min", "Waits to fill; unreliable after 21:00"],
            ["Smart Bus", "about 100 per person", "about 90 min", "Stops near Patong, not at hotels; ~07:00–21:00"],
          ]}
        />
        <CheckedNote />
      </Section>

      <BookingBox
        items={[
          { label: "Pre-book a Phuket airport transfer", link: "transferPhuketAirport" },
          { label: "Thailand eSIM (for Grab on landing)", link: "esim" },
        ]}
      />

      <Section title="Scams to avoid">
        <Bullets>
          <li>Unlicensed drivers approaching you in arrivals — use the official counters or the app.</li>
          <li>A meter that “doesn’t work”: return to the counter.</li>
          <li>Drivers steering you to a “better” hotel or restaurant — they earn commission.</li>
          <li>Quotes far above the ranges above usually mean something is off.</li>
        </Bullets>
        <p>
          More: <A href="/scams/">scams</A> · <A href="/phuket/">Phuket nightlife</A>.
        </p>
      </Section>

      <FaqList
        items={[
          { q: "How much is a taxi from Phuket airport to Patong?", a: "About 800–1,000 THB at the official taxi or limousine counters, including the 100 THB airport surcharge." },
          { q: "Is there a bus from Phuket airport to Patong?", a: "Yes — the Smart Bus costs about 100 THB and takes around 90 minutes, stopping near Patong rather than at hotels." },
          { q: "Is Grab available at Phuket airport?", a: "Yes. Prices are fixed in the app (about 750–1,250 THB to Patong); you walk a short way to the pickup zone." },
        ]}
      />

      <Related
        links={[
          { href: "/phuket/bangla-road/", label: "Bangla Road" },
          { href: "/bangkok/airport-to-sukhumvit-taxi-price/", label: "Bangkok airport to Sukhumvit" },
          { href: "/pattaya/bangkok-airport-to-pattaya-taxi-price/", label: "Bangkok airport to Pattaya" },
        ]}
      />
    </PageShell>
  );
}
