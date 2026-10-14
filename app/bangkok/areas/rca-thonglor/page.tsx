import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { StayNearby } from "@/components/StayNearby";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { GuidePhoto } from "@/components/GuidePhoto";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "RCA & Thonglor Nightlife 2026 – Clubs and Cocktails Compared",
  "RCA and Thonglor for club and cocktail nights in Bangkok 2026: what each costs, cover charges, ID checks, dress code, when they fill, and how to get home after the trains stop.",
  "/bangkok/areas/rca-thonglor/",
);

export default function RcaThonglorPage() {
  return (
    <PageShell
      path="/bangkok/areas/rca-thonglor/"
      title="RCA & Thonglor Nightlife 2026"
      lead="For clubs and polished bar nights, two names matter: RCA (Royal City Avenue) and Thonglor. They are different nights out, not two versions of the same one."
    >
      <GuidePhoto {...photos.rca} />

      <Section title="RCA">
        <Bullets>
          <li>Purpose-built club strip: big rooms, EDM, hip-hop and multi-zone venues.</li>
          <li>Younger Thai crowd is common, and the street is busy on Friday and Saturday.</li>
          <li>Cover often 300–500 THB, sometimes including a drink. Confirm on the night.</li>
          <li>ID checks are real. Bring a passport or a clear copy.</li>
          <li>Transport: MRT Phra Ram 9, then a short Grab. No BTS into the strip.</li>
        </Bullets>
      </Section>

      <Section title="Thonglor (Sukhumvit 55)">
        <Bullets>
          <li>More upscale: cocktail bars, design-heavy rooms, some late clubs.</li>
          <li>Higher drink prices than RCA or Soi 11.</li>
          <li>BTS Thong Lo, on the Sukhumvit line.</li>
          <li>Smart casual is the safe default; the small bars fill up at weekends, so book.</li>
        </Bullets>
      </Section>

      <Section title="Quick comparison">
        <PriceTable
          caption="Quick comparison"
          headers={["", "RCA", "Thonglor"]}
          rows={[
            ["Style", "Big club production", "Upscale bars + selective clubs"],
            ["Crowd", "Young local / student-heavy", "Hi-so + expats + dressed-up visitors"],
            ["Price", "Mid club pricing", "Higher"],
            ["Night", "Festival-style club night", "Polished bar-to-club night"],
          ]}
        />
      </Section>

      <Section title="What a night costs">
        <PriceTable
          caption="RCA and Thonglor prices 2026"
          headers={["Item", "RCA", "Thonglor"]}
          rows={[
            ["Beer", "150–250 THB", "180–280 THB"],
            ["Cocktail", "250–400 THB", "350–550 THB"],
            ["Entry", "300–500 THB on busy nights", "Usually none at bars"],
            ["Night total with transport", "about 1,800–2,600 THB", "about 1,800–2,800 THB"],
          ]}
        />
        <p className="text-sm text-muted">
          Checked October 2026 against venue listings and recent visitor reports. Many Thonglor
          bars add “++”: 10% service and 7% VAT. Full table:{" "}
          <A href="/bangkok/prices/">Bangkok nightlife prices</A>.
        </p>
      </Section>

      <Section title="When they fill">
        <Bullets>
          <li>Thonglor cocktail bars peak 20:00–23:00. Arrive early for a table at a small one.</li>
          <li>RCA is a post-midnight street. Before then the clubs are empty.</li>
          <li>Both are strongest Friday and Saturday. Midweek RCA can be quiet enough to skip.</li>
          <li>A common order is Thonglor bars first, then a club — in Thonglor or a Grab to RCA.</li>
        </Bullets>
      </Section>

      <Section title="Dress code and ID">
        <Bullets>
          <li>No shorts, no sandals at clubs in either area. Thonglor bars expect smart casual.</li>
          <li>RCA doors check ID properly. Carry a passport or a clear copy; the legal drinking age in Thailand is 20.</li>
          <li>Large groups of men are sometimes turned away from busy Thonglor rooms. Arrive earlier or split up.</li>
        </Bullets>
      </Section>

      <Section title="Getting there and home">
        <Bullets>
          <li>Thonglor: BTS Thong Lo, then walk or take a motorbike taxi up Soi 55, which is long.</li>
          <li>RCA: MRT Phra Ram 9 or Petchaburi, then a short Grab. The strip itself is set back from the main road.</li>
          <li>The BTS and MRT stop around midnight, before either area peaks. Budget a Grab home.</li>
          <li>Warm up with a rooftop such as Octave at BTS Thong Lo before Thonglor bars.</li>
        </Bullets>
        <p>
          Fares: <A href="/bangkok/taxi-fare/">Bangkok taxi fares</A> ·{" "}
          <A href="/bangkok/getting-around/">getting around</A>.
        </p>
      </Section>

      <StayNearby label="Hotels in Bangkok" link="hotelBangkok">
        <p>
          Thonglor and Ekkamai suit a cocktail-led trip. For RCA most people stay on Sukhumvit
          and take a Grab, since there is little reason to sleep by the club strip.
        </p>
      </StayNearby>

      <FaqList
        items={[
          {
            q: "Is RCA or Thonglor better for clubbing?",
            a: "RCA for big club rooms and a younger local crowd. Thonglor for cocktails first and a more upscale, selective club after.",
          },
          {
            q: "How much is entry at an RCA club?",
            a: "Often 300–500 THB on busy nights, sometimes including a drink. Confirm at the door.",
          },
          {
            q: "How do I get to RCA?",
            a: "MRT Phra Ram 9 or Petchaburi, then a short Grab. There is no BTS into the strip, and the trains stop around midnight.",
          },
          {
            q: "What should I wear?",
            a: "Smart casual. No shorts or sandals at clubs in either area. RCA checks ID at the door.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/areas/", label: "All Bangkok areas" },
          { href: "/bangkok/areas/soi-11/", label: "Soi 11" },
          { href: "/bangkok/prices/", label: "Bangkok prices" },
          { href: "/bangkok/bar-types/", label: "Bar types" },
        ]}
      />
    </PageShell>
  );
}
