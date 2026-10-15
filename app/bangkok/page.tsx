import { BookingBox } from "@/components/BookingBox";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, LinkList, Section } from "@/components/Prose";
import { bangkokAreas, bangkokGuides } from "@/lib/guides";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Nightlife Guide 2026 – Areas, Rooftops & Prices",
  "Bangkok nightlife overview: rooftop bars, Soi 11, RCA and Thonglor clubs, Muay Thai, cabaret and night markets. 2026 prices and first-timer advice.",
  "/bangkok/",
);

export default function BangkokPage() {
  return (
    <PageShell
      path="/bangkok/"
      title="Bangkok Nightlife Guide 2026 – Areas, Prices & First-Timer Advice"
      opening="Bangkok nightlife depends on the area: Sukhumvit Soi 11 for bars and clubs, Thonglor for upscale cocktail bars, and RCA for big club nights. Add a rooftop, Muay Thai at Rajadamnern most nights or Lumpinee on weekends, or a Chao Phraya dinner cruise."
      belowTitle={
        <p className="mt-3 text-base leading-7 text-foreground">
          New here? Start with the <A href="/bangkok/first-timer/">first-timer guide</A> or a{" "}
          <A href="/bangkok/one-night-plan/">one-night plan</A>.
        </p>
      }
    >
      <Section title="Quick overview">
        <p>
          Bangkok nightlife is spread across a few clear zones. Sukhumvit (Nana to Asok) is the
          easiest base: Soi 11 bars and clubs, hotel rooftops, BTS on the doorstep. Thonglor and
          Ekkamai are the upscale bar strip. RCA is the purpose-built club street. Silom and the
          riverside hold the famous sky bars, Patpong night market and Asiatique.
        </p>
      </Section>

      <Section title="Main areas at a glance">
        <PriceTable
          caption="Main areas at a glance"
          headers={["Area", "Best for", "Feel", "First-timer"]}
          rows={[
            ["Sukhumvit Soi 11", "Bars, rooftops, clubs", "International, walkable", "Excellent"],
            ["Thonglor / Ekkamai", "Cocktail bars, live music", "Upscale, local crowd", "Very good"],
            ["RCA", "Big clubs", "Late, loud, ID checks", "Good for club nights"],
            ["Silom / riverside", "Sky bars, Patpong market", "Views, tourist-heavy", "Good early evening"],
          ]}
        />
      </Section>

      <Section title="Things to do at night">
        <Bullets>
          <li>
            <A href="/bangkok/rooftop-bars/">Rooftop bars</A> — Sky Bar, Vertigo, Octave and
            cheaper alternatives.
          </li>
          <li>
            <A href="/bangkok/muay-thai/">Muay Thai</A> — Rajadamnern fights most nights; Lumpinee
            on weekends.
          </li>
          <li>
            <A href="/bangkok/night-activities/">Cabaret, river cruises and night markets</A>.
          </li>
        </Bullets>
      </Section>

      <BookingBox
        items={[
          { label: "Muay Thai tickets (Rajadamnern / Lumpinee)", link: "muayThaiBangkok" },
          { label: "Calypso Cabaret tickets", link: "cabaretBangkok" },
          { label: "Chao Phraya dinner cruise", link: "dinnerCruise" },
          { label: "Hotels in Sukhumvit", link: "hotelBangkok" },
        ]}
      />
      <p>
        Compare neighbourhoods first: <A href="/bangkok/where-to-stay/">where to stay in Bangkok</A>.
        The hotel button searches Agoda for the whole city.
      </p>

      <Section title="2026 price snapshot">
        <Bullets>
          <li>Beer in an ordinary Sukhumvit bar: roughly 100–200 THB</li>
          <li>Cocktail on a hotel rooftop: commonly 400–900 THB+</li>
          <li>Club entry on RCA: often 300–500 THB, sometimes with a drink</li>
        </Bullets>
        <p>
          → Full details on the <A href="/prices/">prices page</A>.
        </p>
      </Section>

      <Section title="Practical notes">
        <Bullets>
          <li>Stay near BTS Nana, Asok or Phrom Phong for an easy night</li>
          <li>Use Grab or Bolt late at night; insist on the meter in taxis</li>
          <li>Rooftops enforce dress codes — no flip-flops, shorts or sleeveless tops</li>
          <li>
            Never follow street touts upstairs for “cheap shows”. See{" "}
            <A href="/scams/">nightlife scams</A>.
          </li>
        </Bullets>
      </Section>

      <Section title="Bangkok guides">
        <LinkList links={bangkokGuides} />
      </Section>

      <Section title="Bangkok areas">
        <LinkList links={bangkokAreas} />
        <p className="text-sm text-muted">
          Thai Night does not cover adult-entertainment venues.
        </p>
      </Section>
    </PageShell>
  );
}
