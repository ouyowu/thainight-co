import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Nightlife Bar Types 2026",
  "Street bar vs cocktail bar vs rooftop vs club vs live music in Bangkok: what each format is for and where to find it.",
  "/bangkok/bar-types/",
);

export default function BangkokBarTypesPage() {
  return (
    <PageShell title="Bangkok Nightlife Bar Types 2026">
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

      <Section title="How the areas map">
        <Bullets>
          <li><A href="/bangkok/areas/soi-11/">Soi 11</A> — bars, a rooftop and clubs in one walk.</li>
          <li><A href="/bangkok/areas/rca-thonglor/">RCA & Thonglor</A> — big clubs; upscale cocktails and live music.</li>
          <li><A href="/bangkok/areas/patpong/">Patpong & Silom</A> — night market, casual bars, sky bars nearby.</li>
          <li><A href="/bangkok/rooftop-bars/">Rooftop bars</A> — by area and budget.</li>
          <li><A href="/bangkok/ladies-night/">Ladies night / promos</A> — mostly on club strips.</li>
        </Bullets>
      </Section>

      <Related
        links={[
          { href: "/bangkok/night-activities/", label: "Night activities" },
          { href: "/prices/", label: "Prices" },
        ]}
      />
    </PageShell>
  );
}
