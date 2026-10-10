import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Pattaya Nightlife Bar Types 2026",
  "Beer bar vs live music vs club vs open courtyard vs beach bar in Pattaya: what each format is for and where to find it.",
  "/pattaya/bar-types/",
);

export default function PattayaBarTypesPage() {
  return (
    <PageShell path="/pattaya/bar-types/" title="Pattaya Nightlife Bar Types 2026">
      <p>Type matters more than memorising every name. Pick the format, then the street.</p>

      <Section title="The formats">
        <PriceTable
          caption="Pattaya bar types"
          headers={["Type", "What it is", "Where"]}
          rows={[
            ["Open beer bar", "Open-front, cheap drinks, pool tables, easy to leave.", "Soi Buakhao, side sois"],
            ["Live music bar", "House bands, covers, rock and blues.", "Walking Street, Soi Buakhao"],
            ["Club", "DJs, later peak, cover on busy nights.", "Walking Street"],
            ["Open courtyard", "Several bars + food + bands in one compound. No entry fee.", "Tree Town"],
            ["Beach bar", "Sunset drinks, sea breeze.", "Beach Road, Jomtien"],
          ]}
        />
      </Section>

      <Section title="How the areas map">
        <Bullets>
          <li><A href="/pattaya/areas/walking-street/">Walking Street</A> — spectacle: clubs, live music, seafood.</li>
          <li><A href="/pattaya/areas/soi-buakhao/">Soi Buakhao</A> — budget beer bars and food.</li>
          <li><A href="/pattaya/areas/tree-town/">Tree Town</A> — the open courtyard with bands.</li>
        </Bullets>
      </Section>

      <Related
        links={[
          { href: "/pattaya/night-activities/", label: "Night activities" },
          { href: "/prices/", label: "Prices" },
        ]}
      />
    </PageShell>
  );
}
