import { PageShell } from "@/components/PageShell";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Soi Buakhao Pattaya 2026 – Budget Nightlife & Food Guide",
  "Soi Buakhao in 2026: cheap beer bars, sports pubs, street food and live music, and how it compares to Walking Street.",
  "/pattaya/areas/soi-buakhao/",
);

export default function SoiBuakhaoPage() {
  return (
    <PageShell title="Soi Buakhao Pattaya 2026">
      <p>
        Soi Buakhao is central Pattaya’s <strong>budget-friendly</strong> nightlife and food
        corridor, between Second and Third Road. Beer bars, sports pubs, live music and street food
        — lower prices and a more relaxed pace than Walking Street.
      </p>

      <Section title="Best for">
        <Bullets>
          <li>Cheap drinks-and-food nights</li>
          <li>Watching football in a sports pub</li>
          <li>A warm-up before Tree Town or Walking Street</li>
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

      <Section title="First approach">
        <ol className="list-decimal space-y-1 pl-5">
          <li>Start with food</li>
          <li>One or two bars — follow the live music</li>
          <li>Continue to <A href="/pattaya/areas/tree-town/">Tree Town</A>, or head home</li>
        </ol>
      </Section>

      <Related
        links={[
          { href: "/pattaya/", label: "Pattaya overview" },
          { href: "/pattaya/areas/tree-town/", label: "Tree Town" },
          { href: "/prices/", label: "Prices" },
        ]}
      />
    </PageShell>
  );
}
