import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { GuidePhoto } from "@/components/GuidePhoto";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/seo";

const lead = "A few areas cover almost every Pattaya night out. Pick by energy and budget, not by brochure photos.";

export const metadata = pageMeta(
  "Pattaya Nightlife Areas 2026 – Which One to Pick",
  "Walking Street, Tree Town, Soi Buakhao and the beach roads compared for 2026: what each area is for, what a night costs, how far apart they are, and which to pick first.",
  "/pattaya/areas/",
);

export default function PattayaAreasPage() {
  return (
    <PageShell path="/pattaya/areas/" title="Pattaya Nightlife Areas" lead={lead}>
      <GuidePhoto {...photos.walkingStreet} />

      <Section title="The areas at a glance">
        <PriceTable
          caption="Pattaya nightlife areas"
          headers={["Area", "Peak hours", "Style", "Cost"]}
          rows={[
            ["Walking Street", "21:30-02:00", "Clubs, live music, spectacle", "Higher"],
            ["Tree Town", "18:00-late", "Open-air bars, bands, food", "Lower"],
            ["Soi Buakhao", "19:00-late", "Beer bars, street food", "Lower"],
            ["Beach Road / Jomtien", "Sunset-late", "Beach bars", "Mid"],
          ]}
        />
      </Section>

      <Section title="Which one to pick">
        <Bullets>
          <li><strong>First night in Pattaya.</strong> Soi Buakhao early, Walking Street late. That is the normal shape of an evening here, and the two are about ten minutes apart.</li>
          <li><strong>Bands and food without a bar bill.</strong> Tree Town. An open courtyard of small bars with live music and no entry fee.</li>
          <li><strong>Cheap beer, low pressure.</strong> Soi Buakhao and its side sois. Open-front bars, pool tables, easy to walk away from.</li>
          <li><strong>Sunset, then a quiet evening.</strong> Jomtien or Beach Road. The sea side is calmer than anything in the centre.</li>
          <li><strong>The spectacle.</strong> Walking Street after 22:00. Loud, bright and the most expensive of the four.</li>
        </Bullets>
      </Section>

      <Section title="What a night costs by area">
        <PriceTable
          caption="Four beers plus transport, per person"
          headers={["Area", "Four beers", "Night total"]}
          rows={[
            ["Soi Buakhao", "about 240–520 THB", "about 500–800 THB"],
            ["Tree Town", "about 320–600 THB", "about 600–900 THB"],
            ["Jomtien / Beach Road", "about 400–720 THB", "about 700–1,100 THB"],
            ["Walking Street", "about 600–1,000 THB", "about 1,200–2,000 THB"],
          ]}
        />
        <p className="text-sm text-muted">
          Checked October 2026 against venue listings and recent visitor reports. Full table:{" "}
          <A href="/pattaya/prices/">Pattaya nightlife prices</A>.
        </p>
      </Section>

      <Section title="Getting between them">
        <Bullets>
          <li>Baht buses run fixed loops along Beach Road and Second Road for 10–20 THB. Press the buzzer, pay at the window when you get off.</li>
          <li>Soi Buakhao, Tree Town and Walking Street are all walkable from a central hotel — ten to twenty minutes end to end.</li>
          <li>Jomtien is a separate beach. Budget a baht bus or Grab each way.</li>
          <li>Walking Street is closed to cars in the evening, so a taxi drops you at the entrance.</li>
          <li>A driver who offers to take you somewhere direct is quoting a charter, not the fixed fare. Agree the price first: <A href="/pattaya/baht-bus/">baht bus prices</A>.</li>
        </Bullets>
      </Section>

      <Section title="Where to stay for each">
        <p>
          Central Pattaya puts Walking Street, Soi Buakhao and Tree Town within a walk. Beach
          Road is a step quieter and still central. Jomtien is the calmest and adds a ride to
          every night out. Area by area:{" "}
          <A href="/pattaya/where-to-stay/">where to stay in Pattaya</A>.
        </p>
      </Section>

      <Section title="Area guides">
        <Bullets>
          <li><A href="/pattaya/areas/walking-street/">Walking Street</A> — the famous strip.</li>
          <li><A href="/pattaya/areas/jomtien-beach-road/">Jomtien Beach Road</A> — sunset and beach bars.</li>
          <li><A href="/pattaya/areas/tree-town/">Tree Town</A> — open-air courtyard with bands and food.</li>
          <li><A href="/pattaya/areas/soi-buakhao/">Soi Buakhao</A> — budget beer bars, lower pressure.</li>
        </Bullets>
        <p className="text-sm text-muted">Thai Night does not cover adult-entertainment venues.</p>
      </Section>

      <FaqList
        items={[
          {
            q: "Which Pattaya area is best for a first night?",
            a: "Beer bars on Soi Buakhao early, then Walking Street after 22:00. They are about ten minutes apart on foot.",
          },
          {
            q: "Which Pattaya nightlife area is cheapest?",
            a: "Soi Buakhao and Tree Town. Beer runs about 60–130 THB, roughly half a Walking Street price.",
          },
          {
            q: "What time does Walking Street get busy?",
            a: "After about 22:00, with clubs peaking past midnight. Earlier, the beer bars and Tree Town are livelier.",
          },
          {
            q: "How do I get around Pattaya at night?",
            a: "Baht buses run fixed loops for 10–20 THB, paid when you get off. Central areas are walkable; Jomtien needs a ride.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/", label: "Pattaya" },
          { href: "/pattaya/prices/", label: "Pattaya prices" },
          { href: "/pattaya/bar-types/", label: "Bar types" },
          { href: "/pattaya/one-night-plan/", label: "One night in Pattaya" },
          { href: "/pattaya/where-to-stay/", label: "Where to stay" },
        ]}
      />
    </PageShell>
  );
}
