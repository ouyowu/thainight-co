import { HotelCta } from "@/components/HotelCta";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Hotels for Couples 2026 – Privacy, Suites and River Views",
  "Bangkok hotels that suit a couple: a private riverside estate, rooms that face the river, and suites with a pool. 2026 ranges to confirm on the spot.",
  "/bangkok/couples-hotels/",
);

export default function BangkokCouplesHotelsPage() {
  return (
    <PageShell
      path="/bangkok/couples-hotels/"
      title="Bangkok Hotels for Couples (2026)"
      lead="A hotel that suits a couple in Bangkok is a private room, a suite or a villa, and either a pool or a river view. The priced examples below are full-stay riverside hotels. This page is not a ranking."
    >
      <Section title="What a night costs">
        <PriceTable
          caption="Riverside hotels suited to two people, with two 2026 sources"
          headers={["Hotel", "Why it suits two people", "Nightly range"]}
          rows={[
            [
              "The Siam",
              "Small Dusit estate, suites and pool villas",
              "About ฿16,000–21,000; about US$450–650",
            ],
            [
              "The Peninsula",
              "Rooms face the river, across the water in Thonburi",
              "About ฿14,000–19,000; about US$350–500",
            ],
            [
              "Capella",
              "River rooms and villas with a pool at the water",
              "About ฿23,000–30,000; about US$800–950",
            ],
          ]}
        />
        <p className="text-sm text-muted">
          Ranges checked 14 October 2026. Confirm on the spot. Thai Night does not rank hotels
          and does not take payment for placement. Each hotel button opens Agoda with that hotel shown first.
        </p>
        <Bullets>
          <li>
            <strong>The Siam.</strong> Destination Thailand (October 2026, all-in) puts entry at
            about ฿16,000 in low season and about ฿21,000 in peak. Biirdee (September 2026) puts
            it at about US$450–650 and describes suites and pool villas in a Dusit estate upriver
            from the main hotel row.
          </li>
          <li>
            <strong>The Peninsula.</strong> The same two sources put entry at about ฿14,000–19,000
            all-in, or about US$350–500. Biirdee describes the tower as rooms that face the river.
          </li>
          <li>
            <strong>Capella.</strong> About ฿23,000–30,000 all-in (Destination Thailand) and about
            US$800–950 (Biirdee). Biirdee describes villas with a pool along the river, on the
            Charoen Krung side.
          </li>
        </Bullets>
      </Section>

      <Section title="Privacy and a view">
        <p>
          These three are a stay-in choice. The Siam is the quietest of the set: few rooms, a
          pool villa if you book one, and a boat when you want the city. The Peninsula is the
          view: the river is outside the glass. Capella is the highest of the three published
          bands, with pool villas for people who want the water at the door.
        </p>
        <p>
          None of them is a walk to Sukhumvit bars. Plan a Grab or the hotel boat, and read{" "}
          <A href="/bangkok/getting-around/">getting around at night</A>. A dinner on the river
          is the <A href="/bangkok/dinner-cruise/">dinner cruise</A>. Design suites nearer the
          BTS are on <A href="/bangkok/design-hotels/">Sukhumvit design hotels</A>.
        </p>
        <p>
          Book a full night. Confirm the room type: a pool villa is not the entry room, and the
          bands above are entry rates unless the source says otherwise.
        </p>
        <HotelCta label="The Siam on Agoda" link="siamHotelBangkok" />
        <HotelCta label="The Peninsula Bangkok on Agoda" link="peninsulaBangkok" />
        <HotelCta label="Capella Bangkok on Agoda" link="capellaBangkok" />
      </Section>

      <FaqList
        items={[
          {
            q: "What kind of Bangkok hotel suits a couple?",
            a: "A full-stay hotel with privacy, a suite or villa, and a pool or a river view. Published 2026 examples are The Siam, The Peninsula, and Capella. Confirm the room, not just the hotel name.",
          },
          {
            q: "How much is a couples hotel in Bangkok per night in 2026?",
            a: "Published entry bands: The Peninsula about ฿14,000–19,000 or US$350–500, The Siam about ฿16,000–21,000 or US$450–650, and Capella about ฿23,000–30,000 or US$800–950. A pool villa can cost more than the entry room. Confirm your dates.",
          },
          {
            q: "Does the button book The Siam or Capella?",
            a: "Yes. Each button opens Agoda with that hotel shown first. Pick the room there; the pool villa is a separate rate.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/where-to-stay/", label: "Where to stay" },
          { href: "/bangkok/luxury-hotels/", label: "Luxury hotels" },
          { href: "/bangkok/design-hotels/", label: "Sukhumvit design hotels" },
          { href: "/bangkok/dinner-cruise/", label: "Dinner cruise" },
        ]}
      />
    </PageShell>
  );
}
