import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

const lead =
  "A night out in Bangkok costs about 600–900 THB for street beers, 1,800–2,800 THB for a Sukhumvit bar plus a club, and 3,500–5,000 THB if you start at a rooftop. Street beer runs 80–150 THB, club entry 300–500 THB, and rooftops often add ++ (10% service plus 7% VAT).";

export const metadata = pageMeta(
  "Bangkok Nightlife Prices 2026 – Drinks, Clubs & a Night's Budget",
  "What a Bangkok night costs in 2026: beer and cocktail prices by venue, club entry, what ++ adds, three night budgets, tipping, and how to spend less.",
  "/bangkok/prices/",
);

export default function BangkokPricesPage() {
  return (
    <PageShell path="/bangkok/prices/" title="Bangkok Nightlife Prices (2026)" lead={lead}>
      <p>
        Typical 2026 ranges for a night out in Bangkok, from street bars to hotel rooftops. Individual venues sit inside the band. Confirm before you order.
      </p>
      <Section title="What drinks cost">
        <PriceTable
          caption="Bangkok 2026 nightlife prices"
          headers={["Item", "Typical range"]}
          rows={[
            [
              <A key="khao-san-beer" href="/bangkok/areas/khao-san/#what-a-khao-san-night-costs">
                Beer, street / Khao San
              </A>,
              "80–150 THB",
            ],
            [
              <A key="khao-san-bucket" href="/bangkok/areas/khao-san/#what-a-khao-san-night-costs">
                Khao San bucket
              </A>,
              "about 200–350 THB",
            ],
            [
              <A key="khao-san-night" href="/bangkok/areas/khao-san/#what-a-khao-san-night-costs">
                Khao San night, per person
              </A>,
              "about 800–1,200 THB",
            ],
            [
              <span key="sukhumvit-soi-11">
                Beer, <A href="/bangkok/areas/soi-11/">Sukhumvit Soi 11</A>
              </span>,
              "120–220 THB",
            ],
            ["Craft beer", "250–400 THB"],
            ["Cocktail, cocktail bar", "250–450 THB"],
            ["Cocktail, hotel rooftop", "400–900+ THB (often ++)"],
            ["Club entry", "300–500 THB"],
            ["Grab across Sukhumvit", "80–200 THB"],
          ]}
        />
        <p>
          The gap between a street beer and a rooftop cocktail is about six times. Most of a
          night’s cost is decided by which kind of place you pick, not by how much you drink.
        </p>
      </Section>

      <Section title="What ++ adds">
        <p>
          “++” means 10% service charge plus 7% VAT are added to the menu price. Hotel bars and
          most rooftops use it; street bars usually don’t. A 450 THB rooftop cocktail with ++
          reaches about 530 THB on the bill, and a 900 THB one about 1,060 THB. The menu price is
          not the price you pay.
        </p>
      </Section>

      <Section title="Three nights, three budgets">
        <PriceTable
          caption="A whole night including transport, per person"
          headers={["Night", "What it looks like", "Total"]}
          rows={[
            [
              "Cheap",
              "Four street beers, late-night food, Grab home",
              "about 600–900 THB",
            ],
            [
              "Middle",
              "A Sukhumvit bar, two cocktails, club entry, two drinks inside, Grab both ways",
              "about 1,800–2,800 THB",
            ],
            [
              "Rooftop first",
              "Two rooftop cocktails with ++, dinner, a club after",
              "about 3,500–5,000 THB",
            ],
          ]}
        />
        <p className="text-sm text-muted">
          Checked October 2026 against venue menus, booking platforms and recent visitor
          reports. They change. Confirm before you order.
        </p>
      </Section>

      <Section title="Tipping and paying">
        <Bullets>
          <li>Tipping is not required. Rounding up, or leaving 20–50 THB at a bar you liked, is normal.</li>
          <li>Where ++ is charged, the service charge is already on the bill. No second tip is expected.</li>
          <li>Street bars and most clubs are cash. Hotel bars and rooftops take cards.</li>
          <li>Run a tab only where you trust the venue, and check the bill against what you ordered.</li>
          <li>Carry 100s and 20s. Changing a 1,000 THB note at a small bar is slow.</li>
        </Bullets>
        <p>
          Cash machines and card use: <A href="/cash/">cash and payments</A>.
        </p>
      </Section>

      <Section title="Spending less without a bad night">
        <Bullets>
          <li>Drink before the rooftop. One cocktail for the view, then move on.</li>
          <li>Clubs are cheapest before midnight; some drop or waive entry early.</li>
          <li>Ladies’ nights give free or cut-price drinks on set nights: <A href="/bangkok/ladies-night/">ladies’ nights</A>.</li>
          <li>Night markets have the cheapest beer that is not a convenience store: <A href="/bangkok/night-markets/">night markets</A>.</li>
          <li>Stay where you drink. A Sukhumvit base saves two Grabs a night: <A href="/bangkok/where-to-stay/">where to stay</A>.</li>
        </Bullets>
      </Section>

      <Section title="Entry fees and shows">
        <p>
          Sky bars with an entry fee: some, such as the observation-deck style bars, charge entry
          that includes one drink. Details on <A href="/bangkok/rooftop-bars/">rooftop bars</A>.
          Muay Thai and cabaret are priced by seat class, not by a flat ticket:{" "}
          <A href="/bangkok/muay-thai/">Muay Thai</A> and{" "}
          <A href="/bangkok/calypso-cabaret/">Calypso Cabaret</A>.
        </p>
      </Section>

      <FaqList
        items={[
          {
            q: "How much is a beer in Bangkok?",
            a: "About 80–150 THB on the street or at Khao San, 120–220 THB in a Sukhumvit bar, and 250–400 THB for craft beer.",
          },
          {
            q: "How much does a night out in Bangkok cost?",
            a: "About 600–900 THB per person for a street-bar night, 1,800–2,800 THB for bars plus a club, and 3,500–5,000 THB if you start on a rooftop.",
          },
          {
            q: "What does ++ mean on a Bangkok bar menu?",
            a: "10% service charge plus 7% VAT added to the menu price — about 17% on top. Hotel bars and most rooftops use it.",
          },
          {
            q: "Do you tip in Bangkok bars?",
            a: "It is not required. Rounding up or leaving 20–50 THB is normal. Where ++ is charged, service is already included.",
          },
          {
            q: "Is Bangkok nightlife cash or card?",
            a: "Street bars and most clubs are cash. Hotel bars and rooftops take cards.",
          },
          {
            q: "How much is club entry in Bangkok?",
            a: "Typically 300–500 THB. Some clubs cut or waive entry early, and clubs are cheapest before midnight.",
          },
          {
            q: "How much is a cocktail at a Bangkok rooftop bar?",
            a: "About 400–900+ THB, often plus ++. A 450 THB cocktail comes to about 530 THB on the bill with ++.",
          },
          {
            q: "How much is a Grab across Sukhumvit at night?",
            a: "Usually about 80–200 THB.",
          },
          {
            q: "What is the cheapest way to drink in Bangkok?",
            a: "Street bars and night markets. A street beer runs about 80–150 THB, and a cheap night of four street beers, food and a Grab home is about 600–900 THB.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/prices/", label: "All prices" },
          { href: "/budgets/", label: "Budgets" },
          { href: "/bangkok/first-timer/", label: "First-timer guide" },
          { href: "/bangkok/rooftop-bars/", label: "Rooftop bars" },
          { href: "/cash/", label: "Cash & payments" },
        ]}
      />
    </PageShell>
  );
}
