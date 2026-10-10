import { BookingBox } from "@/components/BookingBox";
import { PageShell } from "@/components/PageShell";
import { A, Related, Section } from "@/components/Prose";
import { StayNearby } from "@/components/StayNearby";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "One Night in Bangkok Nightlife – 2026 Sample Plans",
  "Sample one-night plans for Bangkok: rooftop and Soi 11, Muay Thai then bars, Thonglor cocktails, RCA club night and a riverside evening.",
  "/bangkok/one-night-plan/",
);

export default function OneNightPlanPage() {
  return (
    <PageShell path="/bangkok/one-night-plan/" title="One Night in Bangkok – Sample Plans (2026)">
      <p>Pick one plan. Trying to do a stadium, two rooftops and a club in one night is how people end up tired and over budget.</p>

      <Section title="Plan A — Rooftop + Soi 11 (recommended first night)">
        <ol className="list-decimal space-y-1 pl-5">
          <li>17:30 — sunset at a <A href="/bangkok/rooftop-bars/">rooftop</A> (dress smart casual)</li>
          <li>19:30 — dinner on Sukhumvit</li>
          <li>21:00 — walk <A href="/bangkok/areas/soi-11/">Soi 11</A>; one or two bars</li>
          <li>23:30 — a club on Soi 11, or call it</li>
          <li>Grab / Bolt home</li>
        </ol>
        <p>Budget: roughly 1,500–3,000 THB per person.</p>
      </Section>

      <Section title="Plan B — Muay Thai, then drinks">
        <ol className="list-decimal space-y-1 pl-5">
          <li>18:00 — <A href="/bangkok/muay-thai/">Rajadamnern Stadium</A> (old town)</li>
          <li>21:00 — Grab to Khao San Road (close by) for cheap drinks, or back to Sukhumvit</li>
          <li>Late — one bar near your hotel</li>
        </ol>
      </Section>

      <Section title="Plan C — Thonglor cocktails">
        <ol className="list-decimal space-y-1 pl-5">
          <li>Sunset at Octave (Thonglor) or another Sukhumvit rooftop</li>
          <li>Dinner on Thonglor or Ekkamai</li>
          <li>Cocktail bars and live music on <A href="/bangkok/areas/rca-thonglor/">Thonglor</A></li>
        </ol>
      </Section>

      <Section title="Plan D — Club night">
        <ol className="list-decimal space-y-1 pl-5">
          <li>Warm up on Thonglor or Soi 11</li>
          <li>RCA after 23:00 (Fri/Sat busiest)</li>
          <li>Bring ID, expect a cover charge</li>
        </ol>
      </Section>

      <Section title="Plan E — Riverside evening">
        <ol className="list-decimal space-y-1 pl-5">
          <li>Sunset drink at Sky Bar or a riverside rooftop</li>
          <li>Chao Phraya dinner cruise, or Asiatique for food and Calypso Cabaret</li>
          <li>Optional: Patpong night market — skip any upstairs “show” offers</li>
        </ol>
      </Section>

      <BookingBox
        items={[
          { label: "Muay Thai tickets", link: "muayThaiBangkok" },
          { label: "Chao Phraya dinner cruise", link: "dinnerCruise" },
          { label: "Calypso Cabaret", link: "cabaretBangkok" },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/first-timer/", label: "First-timer guide" },
          { href: "/prices/", label: "Prices" },
          { href: "/scams/", label: "Scams" },
        ]}
      />

      <StayNearby label="Hotels in Sukhumvit (Nana / Asok)" link="hotelBangkok">
        <p className="mt-2">Staying near BTS Nana or Asok keeps every plan above simple.</p>
      </StayNearby>
    </PageShell>
  );
}
