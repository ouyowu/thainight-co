import { AreaSketch } from "@/components/AreaSketch";
import { PageShell } from "@/components/PageShell";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { StayNearby } from "@/components/StayNearby";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Where to Stay in Bangkok for Nightlife 2026 – Sukhumvit Guide",
  "Nana, Asok, Phrom Phong or Thonglor? Which Sukhumvit BTS stop to stay near for rooftops, Soi 11 and clubs. Pick the area and stay type, not a branded list.",
  "/bangkok/hotels-nana-asok/",
);

export function WhereToStayGuide({ path }: { path: string }) {
  return (
    <PageShell path={path} title="Where to Stay in Bangkok for Nightlife (2026)">
      <p>
        For nightlife, the useful decision is the <strong>BTS stop</strong>, not a “best hotel”
        list. The Sukhumvit line from Nana to Thonglor puts Soi 11, most rooftops and the club
        strips within a short walk or one train ride. Silom, the river and the Old Town are on the{" "}
        <A href="/bangkok/where-to-stay/">Bangkok where-to-stay guide</A>.
      </p>

      <Section title="The corridor">
        <AreaSketch
          caption="Schematic: Sukhumvit BTS stops from Nana to Thonglor. Not a street-accurate map."
          items={[
            { label: "BTS Nana", note: "Soi 11 bars & clubs", accent: true },
            { label: "BTS Asok", note: "Terminal 21, MRT interchange", accent: true },
            { label: "BTS Phrom Phong", note: "Malls, calmer sois" },
            { label: "BTS Thong Lo", note: "Cocktail bars, live music" },
            { label: "BTS Ekkamai", note: "Bars, buses to Pattaya" },
            { label: "MRT Phra Ram 9", note: "Toward RCA clubs" },
          ]}
        />
      </Section>

      <Section title="Which stop?">
        <Bullets>
          <li><strong>Nana</strong> — walk to Soi 11; liveliest and noisiest. Best for a bar-hopping trip.</li>
          <li><strong>Asok</strong> — the all-rounder. BTS + MRT, malls, short ride to everything.</li>
          <li><strong>Phrom Phong</strong> — calmer nights, still one or two stops from the action.</li>
          <li><strong>Thong Lo / Ekkamai</strong> — if cocktails and live music are the plan.</li>
        </Bullets>
        <p>Silom / Sathorn is a good alternative base for the river and the famous sky bars.</p>
      </Section>

      <Section title="Stay types (not a ranking)">
        <Bullets>
          <li><strong>Mid hotel on Sukhumvit.</strong> 24-hour front desk, short walk to the BTS. Default for most visitors.</li>
          <li><strong>Quieter room one soi back.</strong> Same BTS, less street noise.</li>
          <li><strong>Hotel with its own rooftop bar.</strong> Saves a Grab ride on the first night.</li>
          <li><strong>Hostel near the BTS.</strong> Fine for budget trips; lockers matter more than décor.</li>
        </Bullets>
        <p>Names and nightly rates move. Check live listings and recent reviews for noise.</p>
      </Section>

      <Section title="Practical">
        <Bullets>
          <li>Late return: Grab or Bolt. Don’t haggle random taxis at 02:00.</li>
          <li>Hotel safe for the cash you’re not spending that night.</li>
          <li>Night spend is the bar tab, not the room — see <A href="/budgets/">budgets</A>.</li>
        </Bullets>
      </Section>

      <Related
        links={[
          { href: "/bangkok/first-timer/", label: "First-timer" },
          { href: "/bangkok/rooftop-bars/", label: "Rooftop bars" },
          { href: "/bangkok/faq/", label: "FAQ" },
        ]}
      />

      <StayNearby label="Check hotels in Sukhumvit (Nana–Asok)" link="hotelBangkok">
        <p className="mt-2">Search the Nana–Asok corridor first; widen to Phrom Phong if prices jump.</p>
      </StayNearby>
    </PageShell>
  );
}

export default function HotelsNanaAsokPage() {
  return <WhereToStayGuide path="/bangkok/hotels-nana-asok/" />;
}
