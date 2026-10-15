import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { StayNearby } from "@/components/StayNearby";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Sukhumvit Soi 11 Nightlife 2026 – Bars, Rooftops & Clubs",
  "Sukhumvit Soi 11 nightlife in 2026: what the street holds end to end, drink prices, when each part fills, the dress code, how to get home after the BTS stops, and where to stay.",
  "/bangkok/areas/soi-11/",
);

export default function Soi11Page() {
  return (
    <PageShell
      path="/bangkok/areas/soi-11/"
      title="Sukhumvit Soi 11 Nightlife 2026"
      lead="Soi 11 is the easiest all-round nightlife strip in Bangkok, right by BTS Nana. Rooftops, cocktail bars, live music and clubs in one walk, with mixed tourist and local crowds. The best first-night base for most visitors."
    >
      <Section title="Walking the street">
        <p>
          Soi 11 runs north from Sukhumvit Road, with BTS Nana at the bottom corner. The first
          stretch is hotels and restaurants. The middle holds most of the bars, including the
          hotel rooftops. The far end, past the bend, is where the late clubs are. End to end is
          about a ten-minute walk, which is why the street works as a whole evening.
        </p>
        <p>
          Side lanes off Soi 11 hold smaller bars and food. You can eat, drink on a roof and end
          in a club without a taxi, and that combination is rare in Bangkok.
        </p>
      </Section>

      <Section title="What a night costs here">
        <PriceTable
          caption="Soi 11 prices 2026"
          headers={["Item", "Typical range"]}
          rows={[
            ["Beer, street-level bar", "120–220 THB"],
            ["Cocktail, bar", "250–450 THB"],
            ["Cocktail, hotel rooftop", "400–900+ THB, often ++"],
            ["Club entry on a busy night", "300–500 THB"],
            ["Four drinks plus a Grab home", "about 900–1,600 THB"],
          ]}
        />
        <p className="text-sm text-muted">
          Checked October 2026 against venue listings and recent visitor reports. “++” adds 10%
          service and 7% VAT. Full table: <A href="/bangkok/prices/">Bangkok nightlife prices</A>.
        </p>
      </Section>

      <Section title="When each part fills">
        <Bullets>
          <li>Rooftops at sunset, then again around 21:00.</li>
          <li>Street-level bars from about 20:00.</li>
          <li>Clubs at the top of the street after midnight, strongest Friday and Saturday.</li>
          <li>Arriving at a Soi 11 club at 22:00 usually means an empty room.</li>
        </Bullets>
      </Section>

      <Section title="What it is and is not for">
        <Bullets>
          <li><strong>Good for:</strong> bar-hopping, groups and couples, and a first night before you know the city.</li>
          <li><strong>Not the cheapest.</strong> <A href="/bangkok/areas/khao-san/">Khao San</A> and ordinary street bars cost less; Soi 11 carries a rooftop and club premium.</li>
          <li><strong>Not a local-crowd night.</strong> For that, Thonglor and Ekkamai are two BTS stops away.</li>
          <li><strong>Not a quiet night.</strong> The far end is loud until late.</li>
        </Bullets>
      </Section>

      <Section title="Dress code and ID">
        <Bullets>
          <li>Street-level bars have no code. Rooftops and clubs do: no shorts, no sandals, and usually no sleeveless tops for men.</li>
          <li>Clubs check ID at the door. Carry a passport photo page or a card with your date of birth. The legal drinking age in Thailand is 20.</li>
          <li>Smart casual covers the whole street, which is another reason it suits a first night.</li>
        </Bullets>
      </Section>

      <Section title="Getting there and home">
        <Bullets>
          <li>BTS Nana is at the bottom of the street. Asok, one stop away, connects to the MRT.</li>
          <li>The BTS stops around midnight, which is before the clubs peak. Plan a Grab home.</li>
          <li>Thonglor and Ekkamai are a few stops east on the same line if you want a second area early in the night.</li>
          <li>Grab’s price is fixed before you ride, which avoids meter refusals late at night: <A href="/bangkok/taxi-fare/">taxi fares</A>.</li>
        </Bullets>
      </Section>

      <StayNearby label="Hotels in Sukhumvit (Nana / Asok)" link="hotelSukhumvit">
        <p>
          Staying on or near Soi 11 removes both rides from the night. Nana and Asok are the two
          stations to look at.
        </p>
      </StayNearby>

      <Section title="How it fits your trip">
        <PriceTable
          caption="Pick an area by the night you want"
          headers={["Goal", "Area"]}
          rows={[
            ["Bars, clubs and rooftops in one walk", "Soi 11"],
            ["Upscale cocktails, live music", <A key="thonglor" href="/bangkok/areas/rca-thonglor/">Thonglor</A>],
            ["Big club night", <A key="rca" href="/bangkok/areas/rca-thonglor/">RCA</A>],
            ["Market and sky bars", <><A key="patpong" href="/bangkok/areas/patpong/">Patpong</A> / Silom</>],
            ["Cheap and loud", <A key="khao-san" href="/bangkok/areas/khao-san/">Khao San</A>],
          ]}
        />
        <p>
          Rooftops on this street: <A href="/bangkok/soi-11-rooftop-bars/">Soi 11 rooftop bars</A>.
          Compare <A href="/bangkok/areas/khao-san/">Khao San</A>,{" "}
          <A href="/bangkok/areas/rca-thonglor/">RCA and Thonglor</A>, and{" "}
          <A href="/bangkok/areas/patpong/">Patpong</A>. All areas:{" "}
          <A href="/bangkok/areas/">Bangkok nightlife areas</A>.
        </p>
      </Section>

      <FaqList
        items={[
          {
            q: "Is Soi 11 good for a first night in Bangkok?",
            a: "Yes. Bars, rooftops and clubs sit in one ten-minute walk, and BTS Nana is at the end of the street.",
          },
          {
            q: "What is the nearest BTS to Soi 11?",
            a: "Nana, at the bottom of the street. Asok is one stop away and connects to the MRT.",
          },
          {
            q: "What time does Soi 11 get busy?",
            a: "Bars from about 20:00, rooftops at sunset and around 21:00, clubs after midnight.",
          },
          {
            q: "Is there a dress code on Soi 11?",
            a: "Street-level bars have none. Rooftops and clubs turn away shorts and sandals, and clubs check ID.",
          },
          {
            q: "How much is a night on Soi 11?",
            a: "About 900–1,600 THB per person for four drinks and a Grab home. A rooftop round pushes it higher.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/", label: "Bangkok" },
          { href: "/bangkok/areas/", label: "All Bangkok areas" },
          { href: "/bangkok/soi-11-rooftop-bars/", label: "Soi 11 rooftop bars" },
          { href: "/bangkok/prices/", label: "Bangkok prices" },
          { href: "/bangkok/first-timer/", label: "First-timer guide" },
        ]}
      />
    </PageShell>
  );
}
