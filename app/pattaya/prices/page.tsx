import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

const lead =
  "Typical 2026 ranges for a night out in Pattaya, from open beer bars to Walking Street clubs. Confirm before you order.";

export const metadata = pageMeta(
  "Pattaya Nightlife Prices (2026) – Drinks, Clubs & a Night's Budget",
  "What a night out in Pattaya costs in 2026: beer and cocktail prices by bar type, Walking Street versus Soi Buakhao, three worked night budgets, baht bus fares, and lady drinks and bar fines explained.",
  "/pattaya/prices/",
);

export default function PattayaPricesPage() {
  return (
    <PageShell path="/pattaya/prices/" title="Pattaya Nightlife Prices (2026)" lead={lead}>
      <Section title="What drinks cost">
        <PriceTable
          caption="Pattaya 2026 nightlife prices"
          headers={["Item", "Typical range"]}
          rows={[
            ["Beer, open beer bar", "60–130 THB"],
            [
              <>
                Beer, <A href="/pattaya/areas/walking-street/">Walking Street</A> bar / club
              </>,
              "150–250 THB",
            ],
            ["Cocktail, club", "250–400 THB"],
            ["Bucket / tower deals", "Varies — count the drinks"],
            ["Baht bus, fixed route", "10–20 THB per person"],
          ]}
        />
        <p>
          Pattaya is cheaper than Bangkok at the bottom and similar at the top. A beer on{" "}
          <A href="/pattaya/areas/soi-buakhao/">Soi Buakhao</A> is about half a{" "}
          <A href="/pattaya/areas/walking-street/">Walking Street</A> beer, and the walk between
          them is ten minutes.
        </p>
      </Section>

      <Section title="Walking Street or Soi Buakhao">
        <PriceTable
          caption="Same four beers, two streets"
          headers={["Street", "Four beers", "What you get"]}
          rows={[
            [
              <A key="buakhao" href="/pattaya/areas/soi-buakhao/">
                Soi Buakhao
              </A>,
              "about 240–520 THB",
              "Open beer bars, pool, street food",
            ],
            [
              <A key="walking" href="/pattaya/areas/walking-street/">
                Walking Street
              </A>,
              "about 600–1,000 THB",
              "Clubs, live bands, the spectacle",
            ],
          ]}
        />
        <p>
          Most people do both: start cheap, walk down for the last couple of hours. Areas in
          detail: <A href="/pattaya/areas/">Pattaya areas</A>.
        </p>
      </Section>

      <Section title="Three nights, three budgets">
        <PriceTable
          caption="A whole night including transport, per person"
          headers={["Night", "What it looks like", "Total"]}
          rows={[
            ["Cheap", "Beer bars on Soi Buakhao, street food, baht bus", "about 500–800 THB"],
            ["Middle", "Beer bars first, then Walking Street clubs and a few drinks", "about 1,200–2,000 THB"],
            ["Show night", "Cabaret ticket, dinner, then Walking Street", "about 2,200–3,500 THB"],
          ]}
        />
        <p className="text-sm text-muted">
          Checked October 2026 against venue menus, booking platforms and recent visitor
          reports. They change. Confirm before you order.
        </p>
      </Section>

      <Section title="Charges that are not on the menu">
        <p>
          Some bars add items to the tab that the drinks menu does not list: buying a drink for a
          staff member is the common one, usually about 150–250 THB each time. Thai Night does not
          cover adult-entertainment venues, and this is only about the arithmetic — ask what
          something costs before you agree to it, and read the slip before you pay.
        </p>
      </Section>

      <Section title="Paying and tipping">
        <Bullets>
          <li>Beer bars and baht buses are cash. Bigger clubs and hotel bars take cards.</li>
          <li>Bars keep a slip in a cup on your table. Check it against what you drank before you pay.</li>
          <li>Tipping is not required. Rounding up, or 20–50 THB at a bar you liked, is normal.</li>
          <li>Baht bus: press the buzzer, then pay 10–20 THB at the driver’s window when you get off. Don’t hand money over at the start.</li>
          <li>A baht bus that offers to take you somewhere “direct” is a charter and costs many times the fixed fare. Agree the price first: <A href="/pattaya/baht-bus/">baht bus prices</A>.</li>
        </Bullets>
      </Section>

      <Section title="Spending less">
        <Bullets>
          <li>Drink on Soi Buakhao or in Tree Town, then move to Walking Street late.</li>
          <li>Tree Town’s courtyard has bands and no entry fee: <A href="/pattaya/areas/tree-town/">Tree Town</A>.</li>
          <li>Buy show tickets online rather than from a street seller: <A href="/pattaya/cabaret-shows/">cabaret shows</A>.</li>
          <li>
            Stay central. A <A href="/pattaya/areas/jomtien-beach-road/">Jomtien Beach Road</A> base
            adds a ride to every night out: <A href="/pattaya/where-to-stay/">where to stay</A>.
          </li>
        </Bullets>
      </Section>

      <Section title="Tickets and shows">
        <p>
          Cabaret and Muay Thai tickets depend on seat class: see{" "}
          <A href="/pattaya/cabaret-shows/">cabaret shows</A> and{" "}
          <A href="/pattaya/night-activities/">night activities</A>.
        </p>
      </Section>

      <FaqList
        items={[
          {
            q: "How much is a beer in Pattaya?",
            a: "About 60–130 THB in an open beer bar and 150–250 THB in a Walking Street bar or club.",
          },
          {
            q: "How much does a night out in Pattaya cost?",
            a: "About 500–800 THB per person for a beer-bar night, 1,200–2,000 THB if you add Walking Street clubs, and 2,200–3,500 THB for a show night.",
          },
          {
            q: "Is Pattaya cheaper than Bangkok?",
            a: "At the cheap end, yes — beer bars undercut Bangkok street bars. Walking Street clubs and cocktails are about the same.",
          },
          {
            q: "Why is my bar bill higher than the drinks I ordered?",
            a: "Some bars add items the menu does not list, such as a drink bought for a staff member, usually about 150–250 THB each time. Check the slip in the cup on your table before you pay.",
          },
          {
            q: "How much is the baht bus in Pattaya?",
            a: "10–20 THB per person on a fixed route, paid when you get off. A charter costs far more; agree the price first.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/prices/", label: "All prices" },
          { href: "/budgets/", label: "Budgets" },
          { href: "/pattaya/first-timer/", label: "First-timer guide" },
          { href: "/pattaya/baht-bus/", label: "Baht bus prices" },
          { href: "/pattaya/areas/", label: "Pattaya areas" },
        ]}
      />
    </PageShell>
  );
}
