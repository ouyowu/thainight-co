import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Getting Around Phuket at Night 2026",
  "Getting around Phuket at night: walk Bangla Road, use Grab or Bolt, and the songthaew and Smart Bus fares confirmed from two sources.",
  "/phuket/getting-around/",
);

export default function PhuketGettingAroundPage() {
  return (
    <PageShell path="/phuket/getting-around/" title="Getting Around Phuket at Night (2026)">
      <p>
        Phuket has no train and no metro. Walk inside Patong, and use Grab or Bolt once the trip
        leaves the beach you are standing on. Shared songthaews are a daytime ride. They are not
        the way home after Bangla Road.
      </p>

      <Section title="Fares we could confirm">
        <PriceTable
          caption="Phuket fares with two sources"
          headers={["Ride", "Fare", "Sources"]}
          rows={[
            [
              "Smart Bus, Airport–Patong–Rawai",
              "100 THB flat per person",
              "Phuket Smart Bus payment page; Phuket Transportation Guide 2026",
            ],
            [
              "Songthaew, Phuket Town–Patong",
              "about 40–50 THB per person",
              "Phuket Expat Guide and Phuket Transportation Guide, both 2026",
            ],
          ]}
        />
        <p className="text-sm text-muted">
          Checked 14 October 2026. The Smart Bus figure is the operator’s fare table at
          phuketsmartbus.com/payment (Airport ⇄ Patong ⇄ Rawai, 100 baht flat). The Phuket
          Transportation Guide (2026) also lists that airport-to-Patong bus at 100 THB. The
          songthaew band is the overlap of two 2026 visitor guides: Phuket Expat Guide (40–50 THB
          for Phuket Town to Patong) and the same transportation guide (40–50 THB). It is not a
          posted government tariff. Ask before you board. The transportation guide puts blue
          songthaews at about 07:00–17:00, and the Phuket Blog 2026 transport guide puts the last
          Town–Patong departure around 17:00. That is why a songthaew is not a way home from Bangla
          Road. Tuk-tuk quotes and in-town Grab figures did not agree across sources, so they are
          not printed here. Use the price in the app.
        </p>
        <p>
          Airport options, including the taxi surcharge, are on{" "}
          <A href="/phuket/airport-to-patong-taxi-price/">Phuket airport to Patong</A>. The Smart
          Bus timetable has moved over the years. Check it on the day rather than trusting a clock
          time from a blog.
        </p>
      </Section>

      <Section title="Which ride for which trip">
        <Bullets>
          <li>
            <A href="/phuket/bangla-road/">Bangla Road</A> closes to traffic in the evening. Get
            dropped at the end of the street and walk.
          </li>
          <li>Inside Patong, walking is the default while the street is busy.</li>
          <li>Patong to Kata, Karon, Kamala or Phuket Old Town: Grab or Bolt, so the fare is on the screen before you get in.</li>
          <li>Phuket Town to Patong in the daytime: the shared songthaew, if one is running and the driver confirms the fare.</li>
          <li>Airport to the west-coast beaches: the Smart Bus at the flat fare above, or a taxi or pre-booked car. Details on the airport page.</li>
        </Bullets>
      </Section>

      <Section title="Grab and Bolt">
        <p>
          Use the app after the songthaews have stopped, in the rain, and for any trip with
          luggage. Pickup on Bangla Road itself is painful once the street is pedestrian. Walk a
          couple of blocks toward Rat-U-Thit or the beach road, then request the car.
        </p>
        <p>
          You need mobile data to book. Set up a{" "}
          <A href="/thailand/esim-for-tourists/">tourist eSIM</A> before you land.
        </p>
      </Section>

      <Section title="Avoid">
        <Bullets>
          <li>A tuk-tuk that will not name a price before you sit down</li>
          <li>Unlicensed cars in the airport arrivals hall</li>
          <li>Anyone at a bar offering a “cheap” ride to another venue</li>
          <li>A driver who wants to choose your hotel</li>
        </Bullets>
        <p>
          More: <A href="/scams/">scams</A> · <A href="/phuket/first-timer/">first-timer guide</A>.
        </p>
      </Section>

      <Related
        links={[
          { href: "/phuket/first-timer/", label: "First-timer" },
          { href: "/phuket/airport-to-patong-taxi-price/", label: "Airport to Patong" },
          { href: "/phuket/where-to-stay/", label: "Where to stay" },
          { href: "/cash/", label: "Cash" },
        ]}
      />
    </PageShell>
  );
}
