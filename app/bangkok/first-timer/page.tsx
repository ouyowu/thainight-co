import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, LinkList, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Nightlife First-Timer Guide 2026",
  "Step-by-step first night in Bangkok: rooftop sunset, Soi 11 bars or Thonglor, clubs, current prices and practical tips for 2026.",
  "/bangkok/first-timer/",
);

export default function BangkokFirstTimerPage() {
  return (
    <PageShell
      path="/bangkok/first-timer/"
      title="Bangkok Nightlife First-Timer Guide (2026)"
      lead="For a first night in Bangkok, start at a rooftop for sunset, have dinner, then go to Sukhumvit Soi 11 for bars and a club. Pick Thonglor for something more polished, or RCA after midnight for a big club night. Prefer a show? Slot in Muay Thai or Calypso Cabaret early."
    >
      <Section title="Quick answer">
        <p>
          Easiest first night: a rooftop for sunset, dinner, then Sukhumvit Soi 11 for bars and a
          club if you still have energy. Want something more local and polished → Thonglor. Want a
          big club night → RCA after midnight.{" "}
          <A href="/bangkok/areas/rca-thonglor/">RCA and Thonglor</A> are those two nights.
        </p>
      </Section>

      <Section title="The main areas">
        <PriceTable
          caption="The main areas"
          headers={["Area", "Best for", "What it is", "First-timer"]}
          rows={[
            ["Sukhumvit Soi 11", "First night, low stress", "Bars, rooftops, clubs near BTS Nana", "★★★★★"],
            ["Thonglor / Ekkamai", "Cocktails, live music", "Upscale strip, Thai crowd", "★★★★"],
            ["RCA", "Late club night", "Big clubs, smart casual", "★★★"],
            ["Silom / riverside", "Sky bars, markets", <>Famous views, <A href="/bangkok/areas/patpong/">Patpong</A> market</>, "★★★★"],
          ]}
        />
      </Section>

      <Section title="Recommended first night plan">
        <ol className="list-decimal space-y-1 pl-5">
          <li>17:30–19:00 — sunset drink on a <A href="/bangkok/rooftop-bars/">rooftop</A> (dress smart casual)</li>
          <li>19:30 — dinner near your hotel or on Sukhumvit</li>
          <li>21:00 — walk <A href="/bangkok/areas/soi-11/">Soi 11</A> once before choosing a bar</li>
          <li>23:00 onward — stay on Soi 11 or Grab to a club strip</li>
          <li>Home by Grab or Bolt</li>
        </ol>
        <p>
          Prefer a show first? Slot in <A href="/bangkok/muay-thai/">Muay Thai</A> or Calypso
          Cabaret early and skip the rooftop.
        </p>
      </Section>

      <Section title="2026 price range">
        <PriceTable
          caption="2026 price range"
          headers={["Item", "Typical price"]}
          rows={[
            ["Beer, ordinary bar", "100–200 THB"],
            ["Cocktail, cocktail bar", "250–450 THB"],
            ["Cocktail, hotel rooftop", "400–900 THB+"],
            ["Club entry (RCA)", "300–500 THB, sometimes incl. a drink"],
            ["Grab across Sukhumvit", "Roughly 80–200 THB, more with surge"],
          ]}
        />
        <p>
          More: <A href="/bangkok/prices/">Bangkok nightlife prices</A> · <A href="/prices/">prices</A>{" "}
          · <A href="/budgets/">budget bands</A>.
        </p>
      </Section>

      <BookingBox
        items={[
          { label: "Rooftop bar deals", link: "rooftopBangkok" },
          { label: "Muay Thai tickets", link: "muayThaiBangkok" },
          { label: "Hotels in Sukhumvit", link: "hotelBangkok" },
        ]}
      />

      <Section title="Simple rules">
        <Bullets>
          <li>Check the menu price before ordering; pay round by round in smaller bars</li>
          <li>Never follow street touts upstairs for “cheap shows”</li>
          <li>Bring your passport (or a clear photo plus another ID) — clubs check</li>
          <li>Keep your phone and wallet secure in crowds</li>
          <li>Use Grab or Bolt instead of random taxis late at night</li>
        </Bullets>
      </Section>

      <Section title="Where to stay">
        <p>
          Stay near BTS Nana, Asok or Phrom Phong. Soi 11 is walkable, rooftops and Thonglor are a
          few BTS stops away. See <A href="/bangkok/where-to-stay/">where to stay in Bangkok</A> and{" "}
          <A href="/bangkok/hotels-nana-asok/">where to stay for nightlife</A>.
        </p>
      </Section>

      <FaqList
        items={[
          {
            q: "Where should I go on my first night out in Bangkok?",
            a: "Start with a rooftop at sunset and dinner, then Sukhumvit Soi 11 for bars. Choose Thonglor for a more polished night or RCA after midnight for a big club.",
          },
          {
            q: "Do Bangkok clubs check ID?",
            a: "Yes. Bring your passport, or a clear photo of it plus another ID.",
          },
          {
            q: "How much does a beer cost in a Bangkok bar?",
            a: "About 100–200 THB in an ordinary bar, and 250–450 THB for a cocktail in a cocktail bar.",
          },
          {
            q: "What should I wear to a Bangkok rooftop bar?",
            a: "Smart casual.",
          },
          {
            q: "Where should I stay for my first Bangkok nightlife trip?",
            a: "Near BTS Nana, Asok or Phrom Phong. Soi 11 is walkable, and the rooftops and Thonglor are a few BTS stops away.",
          },
        ]}
      />

      <Section title="Next steps">
        <LinkList
          links={[
            { href: "/bangkok/one-night-plan/", label: "One-night plans — sample routes" },
            { href: "/bangkok/rooftop-bars/", label: "Rooftop bars" },
            { href: "/bangkok/night-activities/", label: "Cabaret, river cruises, night markets" },
            { href: "/bangkok/getting-around/", label: "Getting around" },
            { href: "/bangkok/faq/", label: "FAQ" },
            { href: "/scams/", label: "Scams to avoid" },
          ]}
        />
      </Section>
    </PageShell>
  );
}
