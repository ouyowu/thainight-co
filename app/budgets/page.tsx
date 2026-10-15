import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Nightlife Budgets 2026 – Bangkok, Pattaya, Phuket & Chiang Mai",
  "Nightlife budget bands per person for 2026: casual bar nights, rooftop evenings, club nights and show nights, a three-night trip, and the rules that save money.",
  "/budgets/",
);

export default function BudgetsPage() {
  return (
    <PageShell path="/budgets/" title="Nightlife Budgets 2026">
      <p>
        These are <strong>planning bands per person</strong>, not promises. They exclude your
        hotel. High season (roughly Nov–Apr) leans higher.
      </p>

      <Section title="Bangkok">
        <PriceTable
          caption="Bangkok budgets"
          headers={["Night", "THB", "What it covers"]}
          rows={[
            [
              "Casual bars",
              "500–1,500",
              <>
                4–6 beers on <A href="/bangkok/areas/soi-11/">Soi 11</A> or{" "}
                <A href="/bangkok/areas/khao-san/">Khao San</A>, Grab home
              </>,
            ],
            ["Rooftop + bars", "1,500–3,000", "2 rooftop cocktails, dinner, a few bar drinks"],
            ["Club night", "2,000–4,000", "Entry, drinks, late Grab"],
            ["Show night", "1,500–4,000+", "Muay Thai or cabaret ticket plus drinks"],
          ]}
        />
      </Section>

      <Section title="Pattaya">
        <PriceTable
          caption="Pattaya budgets"
          headers={["Night", "THB", "What it covers"]}
          rows={[
            [
              "Beer-bar night",
              "500–1,500",
              <>
                <A href="/pattaya/areas/tree-town/">Tree Town</A> /{" "}
                <A href="/pattaya/areas/soi-buakhao/">Soi Buakhao</A> drinks and food
              </>,
            ],
            [
              <A key="walking" href="/pattaya/areas/walking-street/">
                Walking Street
              </A>,
              "1,500–3,500",
              "Bar and club drinks, cover where charged",
            ],
            ["Show night", "1,000–3,000+", "Cabaret or Muay Thai ticket plus drinks"],
          ]}
        />
      </Section>

      <Section title="Phuket and Chiang Mai">
        <PriceTable
          caption="Phuket and Chiang Mai budgets"
          headers={["Night", "THB", "What it covers"]}
          rows={[
            ["Phuket — Bangla Road", "1,500–3,500", "Bar and club drinks, cover where charged, taxi"],
            ["Phuket — beach club day into evening", "2,500–5,000+", "Minimum spend or a bed, drinks, food"],
            ["Chiang Mai — Nimman bars", "600–1,500", "Craft beer or cocktails, food, a ride"],
            ["Chiang Mai — Old City and markets", "400–1,000", "Market food, beers, walkable"],
          ]}
        />
        <p className="text-sm text-muted">
          Checked October 2026 against venue listings and recent visitor reports. Phuket runs
          higher than the other three because taxis are expensive and distances are long.
        </p>
      </Section>

      <Section title="What three nights cost">
        <PriceTable
          caption="Three nights out, per person, excluding hotel"
          headers={["Style", "Bangkok", "Pattaya"]}
          rows={[
            ["Budget: bars and street food", "about 1,800–4,000 THB", "about 1,500–3,500 THB"],
            ["Mixed: one show, one club, one quiet night", "about 4,500–8,000 THB", "about 3,500–7,000 THB"],
            ["Top end: rooftops and clubs each night", "about 7,000–12,000 THB", "about 5,000–10,000 THB"],
          ]}
        />
        <p>
          Transport is inside these numbers. Hotels are not — a nightlife-area room is usually
          the second biggest line in a trip after flights.
        </p>
      </Section>

      <Section title="What moves the number most">
        <Bullets>
          <li><strong>Which bar you walk into.</strong> A rooftop cocktail is about six times a street beer. This decides more than how much you drink.</li>
          <li><strong>Where you sleep.</strong> Staying outside the nightlife area adds two rides a night, every night.</li>
          <li><strong>Season.</strong> High season, roughly November to April, leans to the top of each band.</li>
          <li><strong>Group size.</strong> Taxis and private transfers split; drinks and tickets do not.</li>
          <li><strong>Buckets and towers.</strong> They look like one item and are several drinks.</li>
        </Bullets>
      </Section>

      <Section title="Rules that save money">
        <ol className="list-decimal space-y-1 pl-5">
          <li>Eat first</li>
          <li>Use happy hours — most bars run them before 21:00</li>
          <li>Check for “++” on hotel-bar menus</li>
          <li>One rooftop is enough; finish the night somewhere cheaper</li>
          <li>Book shows online in advance when it’s cheaper than the door</li>
        </ol>
      </Section>

      <p>
        Sleep in the same area you go out in:{" "}
        <A href="/bangkok/where-to-stay/">Bangkok</A>,{" "}
        <A href="/pattaya/where-to-stay/">Pattaya</A>,{" "}
        <A href="/phuket/where-to-stay/">Phuket</A>,{" "}
        <A href="/chiang-mai/where-to-stay/">Chiang Mai</A>.
      </p>
      <FaqList
        items={[
          {
            q: "How much should I budget for a night out in Thailand?",
            a: "Per person, excluding the hotel: about 500–1,500 THB for a bar night, 1,500–3,500 THB once clubs or a rooftop are involved, and 1,000–4,000 THB for a show night.",
          },
          {
            q: "Is Pattaya cheaper than Bangkok for a night out?",
            a: "At the cheap end, yes — beer bars undercut Bangkok street bars. Walking Street clubs and cocktails cost about the same.",
          },
          {
            q: "Which city is most expensive for nightlife?",
            a: "Phuket, mainly because of transport: Patong taxis are costly and distances are long. Chiang Mai is the cheapest of the four.",
          },
          {
            q: "Does high season cost more?",
            a: "Yes. Roughly November to April, expect the top of each band, and book shows and hotels earlier.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/prices/", label: "Full price tables" },
          { href: "/bangkok/prices/", label: "Bangkok prices" },
          { href: "/pattaya/prices/", label: "Pattaya prices" },
          { href: "/cash/", label: "Cash" },
          { href: "/scams/", label: "Scams" },
        ]}
      />
    </PageShell>
  );
}
