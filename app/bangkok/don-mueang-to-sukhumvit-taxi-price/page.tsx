import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { StayNearby } from "@/components/StayNearby";
import { A, Bullets, CheckedNote, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Don Mueang to Sukhumvit Taxi Price 2026 – Meter, Tolls & Red Line",
  "Don Mueang (DMK) to Sukhumvit (Nana, Asok) in 2026: metered taxi about 220–400 THB plus tolls, the 50 THB airport surcharge, and the Red Line plus MRT for about 75 THB.",
  "/bangkok/don-mueang-to-sukhumvit-taxi-price/",
);

export default function DonMueangSukhumvitTaxiPage() {
  return (
    <PageShell
      path="/bangkok/don-mueang-to-sukhumvit-taxi-price/"
      title="Don Mueang to Sukhumvit: Taxi Price (2026)"
      lead="A metered taxi from Don Mueang to Nana or Asok is about 220–400 THB including the 50 THB airport surcharge, before expressway tolls. Tolls add about 70–100 THB if you take them. The Red Line plus MRT is about 75 THB."
    >
      <Section title="2026 prices compared">
        <PriceTable
          caption="Don Mueang to Sukhumvit prices 2026"
          headers={["Option", "Price (THB)", "Time"]}
          rows={[
            ["Public metered taxi (official queue)", "about 220–400, plus tolls", "about 35–90 min"],
            ["Expressway tolls", "about 70–100, paid by you", "Faster in traffic"],
            ["Grab / Bolt", "Live app price", "about 35–90 min"],
            ["SRT Red Line + MRT to Sukhumvit", "about 75 (33 + 42)", "about 55–70 min"],
            ["A1 / A2 airport bus to a BTS station", "about 30–50, then a BTS ticket", "about 40–90 min plus the train"],
          ]}
        />
        <Bullets>
          <li>The airport’s rule is meter plus a 50 THB surcharge. That surcharge is already inside the 220–400 THB band above. You still pay toll booths yourself.</li>
          <li>Red Line adult fare Don Mueang → Krung Thep Aphiwat (Bang Sue) is 33 THB. MRT Bang Sue → Sukhumvit is 42 THB under the July 2026 Blue Line fare (11 stations). Trains stop around midnight.</li>
          <li>A1 goes to BTS Mo Chit; A2 to Victory Monument. Buy the BTS ticket at the station. There is no direct bus to a Sukhumvit hotel door.</li>
        </Bullets>
        <CheckedNote />
      </Section>

      <BookingBox
        items={[
          { label: "Pre-book an airport transfer", link: "klook" },
          { label: "Thailand eSIM (for Grab on landing)", link: "esim" },
        ]}
      />

      <StayNearby label="Hotels in Sukhumvit (Nana / Asok)" link="hotelSukhumvit">
        <p>
          Nana, Asok and Phrom Phong are the usual nightlife bases on this route. Have the hotel
          name in Thai for the driver.
        </p>
      </StayNearby>

      <Section title="Scams to avoid">
        <Bullets>
          <li>Anyone offering a car inside the arrivals hall or the car park. Take a queue slip at the official public-taxi stand (Terminal 1 ground floor near Gate 8; Terminal 2 near Gate 15).</li>
          <li>A driver who will not switch the meter on. Ask for the next cab. Flat fares well above the band above are the tell.</li>
          <li>Paying a toll twice. You hand the cash at the booth; it is not added again at the hotel.</li>
          <li>This page is Don Mueang only. Suvarnabhumi uses a different road and a different total: <A href="/bangkok/airport-to-sukhumvit-taxi-price/">Suvarnabhumi to Sukhumvit</A>.</li>
        </Bullets>
        <p>
          City meter rates: <A href="/bangkok/taxi-fare/">Bangkok taxi fares 2026</A>.
        </p>
      </Section>

      <FaqList
        items={[
          {
            q: "How much is a taxi from Don Mueang to Sukhumvit?",
            a: "About 220–400 THB on the meter including the 50 THB airport surcharge, before tolls. Expressway tolls add about 70–100 THB. Confirm the meter before the car moves.",
          },
          {
            q: "Is there a Don Mueang airport taxi surcharge?",
            a: "Yes. The airport adds 50 THB to the meter. You also pay any expressway tolls.",
          },
          {
            q: "What is the cheapest way from Don Mueang to Sukhumvit?",
            a: "The A1 or A2 airport bus is about 30–50 THB to a BTS station, then a BTS ticket. The Red Line plus MRT to Sukhumvit is about 75 THB and skips the traffic.",
          },
          {
            q: "How long does Don Mueang to Nana or Asok take?",
            a: "About 35–90 minutes by taxi depending on traffic, and about 55–70 minutes by Red Line plus MRT.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/airport/", label: "Both airports to the city" },
          { href: "/bangkok/airport-to-sukhumvit-taxi-price/", label: "Suvarnabhumi to Sukhumvit" },
          { href: "/bangkok/hotels-nana-asok/", label: "Where to stay" },
          { href: "/bangkok/taxi-fare/", label: "Bangkok taxi fares" },
        ]}
      />
    </PageShell>
  );
}
