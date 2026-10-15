import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { StayNearby } from "@/components/StayNearby";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { GuidePhoto } from "@/components/GuidePhoto";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Tree Town Pattaya 2026 – Open-Air Bars, Food & Live Music",
  "Tree Town on Soi Buakhao in 2026: an open-air complex of small bars, street food and overlapping live bands, with no entry fee. What it costs, when it fills, and how it compares to Walking Street.",
  "/pattaya/areas/tree-town/",
);

export default function TreeTownPage() {
  return (
    <PageShell
      path="/pattaya/areas/tree-town/"
      title="Tree Town Pattaya 2026"
      lead="Tree Town is an open-air bar and food complex on Soi Buakhao: dozens of small bars, street food and live music overlapping in one compound. More festival courtyard than bar street, and there is no charge to walk in."
    >
      <GuidePhoto {...photos.centralPattaya} />
      <p className="text-sm text-muted">No licensed courtyard photo of Tree Town is in this set. The photo is CentralFestival on Beach Road; Tree Town is inland on/near Soi Buakhao.</p>

      <Section title="What it is">
        <p>
          A gated compound of small open-front bars arranged around lanes, with food stalls
          between them and several stages. Bars are independent, so each has its own prices and
          its own band, and the music from two of them often overlaps where you are sitting.
        </p>
        <p>
          You pay only for what you order. There is no cover to enter the complex and no minimum
          spend, which is the main thing separating it from a night on Walking Street.
        </p>
      </Section>

      <Section title="What it costs">
        <PriceTable
          caption="Tree Town 2026"
          headers={["Item", "Typical range"]}
          rows={[
            ["Local beer", "60–130 THB"],
            ["Spirit and mixer", "120–200 THB"],
            ["Food stall plate", "80–200 THB"],
            ["Entry", "None"],
            ["An evening with food and four beers", "about 500–900 THB"],
          ]}
        />
        <p className="text-sm text-muted">
          Checked October 2026 against venue listings and recent visitor reports. Full table:{" "}
          <A href="/pattaya/prices/">Pattaya nightlife prices</A>.
        </p>
      </Section>

      <Section title="Best for">
        <Bullets>
          <li>A casual evening of food and beer without a Walking Street bill.</li>
          <li>Groups who want different things: bands, pool, food and quiet corners are all inside.</li>
          <li>Starting the night before Walking Street fills up after 22:00.</li>
          <li>Live music without a cover charge.</li>
        </Bullets>
      </Section>

      <Section title="Atmosphere and timing">
        <Bullets>
          <li>Lively and noisy; several bars play at once, so the far corners are quieter.</li>
          <li>Fills from about 18:00 and runs late, earlier than Walking Street.</li>
          <li>Bands usually start around 20:00–21:00.</li>
          <li>Open-air, so a heavy rain shower empties the lanes for a while.</li>
        </Bullets>
      </Section>

      <Section title="Against Walking Street">
        <PriceTable
          caption="Two evenings, ten minutes apart"
          headers={["", "Tree Town", "Walking Street"]}
          rows={[
            ["A beer", "60–130 THB", "150–250 THB"],
            ["Entry", "None", "Cover at some clubs"],
            ["Busy from", "18:00", "22:00"],
            ["Music", "Live bands, several at once", "Clubs and live venues"],
            ["Pressure", "Low", "Touts at the entrance"],
          ]}
        />
      </Section>

      <Section title="Tips">
        <Bullets>
          <li>Walk the whole complex once before sitting. Prices and crowds vary bar to bar inside the same compound.</li>
          <li>Cash. Most of the small bars do not take cards.</li>
          <li>Bars keep a slip in a cup on your table; read it before you pay.</li>
          <li>Combine it with <A href="/pattaya/areas/soi-buakhao/">Soi Buakhao</A> on the same evening — they are adjacent.</li>
          <li>Use it as the start of the night, then move to <A href="/pattaya/areas/walking-street/">Walking Street</A> if you want clubs.</li>
        </Bullets>
      </Section>

      <StayNearby label="Hotels in Pattaya" link="hotelPattaya">
        <p>
          A central hotel between Second and Third Road puts Tree Town, Soi Buakhao and Walking
          Street all within a walk.
        </p>
      </StayNearby>

      <FaqList
        items={[
          {
            q: "Is there an entry fee for Tree Town?",
            a: "No. You walk in and pay only for what you order.",
          },
          {
            q: "How much is a beer at Tree Town?",
            a: "About 60–130 THB, roughly half a Walking Street price. An evening with food and four beers runs about 500–900 THB.",
          },
          {
            q: "What time does Tree Town get busy?",
            a: "From about 18:00, with bands from around 20:00. It fills earlier than Walking Street.",
          },
          {
            q: "Where is Tree Town in Pattaya?",
            a: "On and around Soi Buakhao in central Pattaya, inland between Second and Third Road, about ten minutes' walk from Walking Street.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/", label: "Pattaya" },
          { href: "/pattaya/areas/", label: "All Pattaya areas" },
          { href: "/pattaya/areas/soi-buakhao/", label: "Soi Buakhao" },
          { href: "/pattaya/prices/", label: "Pattaya prices" },
          { href: "/pattaya/one-night-plan/", label: "One night in Pattaya" },
        ]}
      />
    </PageShell>
  );
}
