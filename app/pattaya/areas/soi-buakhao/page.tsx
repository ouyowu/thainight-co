import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { StayNearby } from "@/components/StayNearby";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { GuidePhoto } from "@/components/GuidePhoto";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Soi Buakhao Pattaya 2026 – Budget Nightlife & Food Guide",
  "Soi Buakhao in 2026: cheap beer bars, sports pubs, street food and live music, what a night costs against Walking Street, how the bar bill works, and how to get there.",
  "/pattaya/areas/soi-buakhao/",
);

export default function SoiBuakhaoPage() {
  return (
    <PageShell path="/pattaya/areas/soi-buakhao/" title="Soi Buakhao Pattaya 2026">
      <GuidePhoto {...photos.centralPattaya} />
      <p className="text-sm text-muted">Licensed street photos of Soi Buakhao itself are scarce. The photo is CentralFestival on Beach Road — Soi Buakhao sits a few blocks inland, between Second and Third Road.</p>
      <p>
        Soi Buakhao is central Pattaya’s <strong>budget-friendly</strong> nightlife and food
        corridor, between Second and Third Road. Beer bars, sports pubs, live music and street food
        — lower prices and a more relaxed pace than{" "}
        <A href="/pattaya/areas/walking-street/">Walking Street</A>.
      </p>

      <Section title="Best for">
        <Bullets>
          <li>Cheap drinks-and-food nights</li>
          <li>Watching football in a sports pub</li>
          <li>
            A warm-up before Tree Town or{" "}
            <A href="/pattaya/areas/walking-street/">Walking Street</A>
          </li>
        </Bullets>
      </Section>

      <Section title="Not ideal for">
        <Bullets>
          <li>The neon “Walking Street spectacle”</li>
          <li>Upscale cocktails</li>
        </Bullets>
      </Section>

      <Section title="2026 price feel">
        <Bullets>
          <li>Local beer often <strong>70–120 THB</strong>, lower at happy hour</li>
          <li>Street-food dinners for well under 200 THB</li>
          <li>A drinks + food night can stay around <strong>500–1,500 THB</strong></li>
        </Bullets>
      </Section>

      <Section title="Against Walking Street">
        <PriceTable
          caption="Same four beers, ten minutes apart"
          headers={["", "Soi Buakhao", "Walking Street"]}
          rows={[
            ["A beer", "70–120 THB", "150–250 THB"],
            ["Four beers", "about 280–480 THB", "about 600–1,000 THB"],
            ["Busy from", "19:00", "22:00"],
            [
              "Style",
              "Open-front bars, pool, food",
              <>
                Clubs, bands, neon on{" "}
                <A href="/pattaya/areas/walking-street/">Walking Street</A>
              </>,
            ],
            ["Pressure", "Low — easy to walk away", "Touts at the entrance"],
          ]}
        />
        <p className="text-sm text-muted">
          Checked October 2026 against venue listings and recent visitor reports. Full table:{" "}
          <A href="/pattaya/prices/">Pattaya nightlife prices</A>.
        </p>
      </Section>

      <Section title="How the bar bill works">
        <Bullets>
          <li>Bars keep a slip in a cup on your table and add each round to it. Read it before you pay.</li>
          <li>Cash. Few beer bars take cards, and the ATMs on the soi charge a withdrawal fee.</li>
          <li>Happy hour is common in the early evening and is usually written on a board outside.</li>
          <li>Some bars add items the menu does not list, such as a drink bought for a staff member, usually 150–250 THB each time. Ask the price before agreeing.</li>
          <li>Tipping is not required. Rounding up, or 20–50 THB at a bar you liked, is normal.</li>
        </Bullets>
      </Section>

      <Section title="Getting there">
        <Bullets>
          <li>Soi Buakhao runs between Second and Third Road, a few blocks inland from Beach Road.</li>
          <li>Baht buses on the Second Road loop drop you at the top of the soi for 10–20 THB, paid when you get off.</li>
          <li>
            From central hotels it is a ten to fifteen minute walk, and about ten minutes on foot
            to <A href="/pattaya/areas/walking-street/">Walking Street</A>.
          </li>
          <li>A driver offering to take you somewhere direct is quoting a charter, not the fixed fare: <A href="/pattaya/baht-bus/">baht bus prices</A>.</li>
        </Bullets>
      </Section>

      <Section title="First approach">
        <ol className="list-decimal space-y-1 pl-5">
          <li>Start with food</li>
          <li>One or two bars — follow the live music</li>
          <li>Continue to <A href="/pattaya/areas/tree-town/">Tree Town</A>, or head home</li>
        </ol>
      </Section>

      <StayNearby label="Hotels in Pattaya" link="hotelPattaya">
        <p>
          A central hotel between Second and Third Road puts Soi Buakhao, Tree Town and{" "}
          <A href="/pattaya/areas/walking-street/">Walking Street</A> all within a walk.
        </p>
      </StayNearby>

      <FaqList
        items={[
          {
            q: "How much is a beer on Soi Buakhao?",
            a: "About 70–120 THB, and less at happy hour. Walking Street is roughly double.",
          },
          {
            q: "Is Soi Buakhao walkable from Walking Street?",
            a: "Yes, about ten minutes. Most people drink on Soi Buakhao early and walk down later.",
          },
          {
            q: "Do Soi Buakhao bars take cards?",
            a: "Mostly no. Bring cash; the ATMs on the soi charge a withdrawal fee.",
          },
          {
            q: "What time does Soi Buakhao get busy?",
            a: "From about 19:00, earlier than Walking Street, and it stays open late.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/", label: "Pattaya" },
          { href: "/pattaya/areas/", label: "All Pattaya areas" },
          { href: "/pattaya/areas/tree-town/", label: "Tree Town" },
          { href: "/pattaya/prices/", label: "Pattaya prices" },
          { href: "/pattaya/where-to-stay/", label: "Where to stay" },
        ]}
      />
    </PageShell>
  );
}
