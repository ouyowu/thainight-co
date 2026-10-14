import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Nightlife Bar Types 2026",
  "Street bar vs cocktail bar vs rooftop vs club vs live music in Bangkok: what each format costs, when it fills, the dress code, and where to find it.",
  "/bangkok/bar-types/",
);

export default function BangkokBarTypesPage() {
  return (
    <PageShell path="/bangkok/bar-types/" title="Bangkok Nightlife Bar Types 2026">
      <p>
        Pick the format first, then the street. Mixing everything on night one is how people get
        tired and overspend.
      </p>

      <Section title="The formats">
        <PriceTable
          caption="Bangkok bar types"
          headers={["Type", "What it is", "Where"]}
          rows={[
            ["Street / open bar", "Cheap drinks, plastic stools, easy to leave.", "Khao San, Soi 11 edges, markets"],
            ["Cocktail / speakeasy", "Craft cocktails, smaller rooms, reservations help.", "Thonglor, Ekkamai, Old Town"],
            ["Rooftop", "Views, dress codes, ++ pricing.", "Silom/Sathorn, Sukhumvit, riverside"],
            ["Live music", "House bands, jazz, Thai rock.", "Thonglor, Soi 11, Khao San"],
            ["Club", "DJs, late peak, cover and ID checks.", "RCA, Soi 11, Thonglor"],
          ]}
        />
      </Section>

      <Section title="What each format costs and when it fills">
        <PriceTable
          caption="A drink, the busy hours and the door"
          headers={["Type", "A drink", "Busy from", "Door"]}
          rows={[
            ["Street / open bar", "80–150 THB", "Early, all evening", "None"],
            ["Cocktail / speakeasy", "250–450 THB", "20:00–23:00", "Smart casual; book at weekends"],
            ["Rooftop", "400–900+ THB, often ++", "Sunset, then 21:00", "Dress code enforced"],
            ["Live music", "150–300 THB", "Band time, usually 21:30+", "Usually none"],
            ["Club", "250–400 THB, entry 300–500", "After midnight", "ID checked; no shorts or sandals"],
          ]}
        />
        <p className="text-sm text-muted">
          Checked October 2026 against venue listings and recent visitor reports. “++” adds 10%
          service and 7% VAT. Full table: <A href="/bangkok/prices/">Bangkok nightlife prices</A>.
        </p>
      </Section>

      <Section title="Dress codes and ID">
        <Bullets>
          <li>Rooftops are the strict ones: no shorts, no sandals, no sleeveless tops for men. Some keep a rack of loaner trousers; some just say no.</li>
          <li>Clubs check ID at the door. Carry a passport photo page or a card with your date of birth. The legal drinking age in Thailand is 20.</li>
          <li>Street bars and live-music rooms have no code. Flip-flops are fine.</li>
          <li>Cocktail bars in Thonglor are smart casual, and the small ones fill up. Book ahead at weekends.</li>
        </Bullets>
      </Section>

      <Section title="Putting a night together">
        <Bullets>
          <li>One rooftop at sunset, then move. Two rooftop rounds cost more than the rest of the night.</li>
          <li>Cocktail bar at 21:00, club after midnight. Arriving at a club at 22:00 means an empty room.</li>
          <li>Live music sits between the two: the band starts late, and you can leave when it ends.</li>
          <li>Keep each night to one or two areas. Crossing town twice is an hour of traffic.</li>
        </Bullets>
        <p>
          A planned version of this: <A href="/bangkok/one-night-plan/">one night in Bangkok</A>.
        </p>
      </Section>

      <Section title="How the areas map">
        <Bullets>
          <li><A href="/bangkok/areas/soi-11/">Soi 11</A> — bars, a rooftop and clubs in one walk.</li>
          <li><A href="/bangkok/areas/rca-thonglor/">RCA & Thonglor</A> — big clubs; upscale cocktails and live music.</li>
          <li><A href="/bangkok/areas/patpong/">Patpong & Silom</A> — night market, casual bars, sky bars nearby.</li>
          <li><A href="/bangkok/rooftop-bars/">Rooftop bars</A> — by area and budget.</li>
          <li><A href="/bangkok/ladies-night/">Ladies night / promos</A> — mostly on club strips.</li>
        </Bullets>
      </Section>

      <FaqList
        items={[
          {
            q: "What is the dress code for Bangkok rooftop bars?",
            a: "No shorts, no sandals, and usually no sleeveless tops for men. Clubs are a little looser but still turn away shorts and sandals. Street bars and live-music rooms have no code.",
          },
          {
            q: "What time do Bangkok clubs get busy?",
            a: "After midnight. Cocktail bars peak 20:00–23:00, rooftops at sunset and again around 21:00, and live music when the band starts, usually 21:30 or later.",
          },
          {
            q: "Which bar type is cheapest in Bangkok?",
            a: "Street and open bars, at about 80–150 THB a beer. A rooftop cocktail is roughly six times that once ++ is added.",
          },
          {
            q: "Do Bangkok clubs check ID?",
            a: "Yes. Carry a passport photo page or a card showing your date of birth. The legal drinking age in Thailand is 20.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/night-activities/", label: "Night activities" },
          { href: "/bangkok/prices/", label: "Bangkok prices" },
          { href: "/bangkok/one-night-plan/", label: "One night in Bangkok" },
          { href: "/bangkok/rooftop-bars/", label: "Rooftop bars" },
        ]}
      />
    </PageShell>
  );
}
