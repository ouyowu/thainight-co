import { BookingBox } from "@/components/BookingBox";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, CheckedNote, LinkList, Section } from "@/components/Prose";
import { phuketGuides } from "@/lib/guides";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Phuket Nightlife 2026: Bangla Road, Beach Clubs, Shows & Prices",
  "Phuket nightlife: Bangla Road clubs in Patong, beach clubs, Simon Cabaret, Muay Thai, Old Town bars and night markets, with 2026 prices and transport.",
  "/phuket/",
);

export default function PhuketPage() {
  return (
    <PageShell
      path="/phuket/"
      title="Phuket Nightlife Guide 2026"
      lead="Patong’s Bangla Road is the loud centre of Phuket nightlife. Beach clubs run from late morning to sunset, Simon Cabaret and Muay Thai fill the early evening, and Phuket Old Town is the quieter cocktail option."
    >
      <Section title="Main areas at a glance">
        <PriceTable
          caption="Phuket nightlife areas"
          headers={["Area", "Best for", "Feel"]}
          rows={[
            ["Patong – Bangla Road", "Clubs, bar-hopping, late nights", "Loud, crowded, until about 04:00 at big clubs"],
            ["West-coast beach clubs (Bang Tao, Kamala, Layan)", "Daytime to sunset parties", "Pools, DJs, minimum spend"],
            ["Phuket Old Town", "Cocktail bars, Sunday market", "Relaxed, local, creative"],
            ["Kata & Karon", "Beach bars, live-music pubs", "Low-key; quiet by about 23:00"],
          ]}
        />
      </Section>

      <Section title="2026 price snapshot">
        <PriceTable
          caption="Phuket nightlife prices 2026"
          headers={["Item", "Typical (THB)"]}
          rows={[
            ["Beer, Bangla Road bar", "100–200"],
            ["Cocktail, Bangla Road club", "200–500"],
            ["Illuzion cover", "about 500"],
            ["Beach club minimum spend", "0–8,000 per group (varies by club)"],
            ["Grab within Patong", "150–300"],
          ]}
        />
        <CheckedNote />
      </Section>

      <BookingBox
        items={[
          { label: "Simon Cabaret tickets", link: "cabaretPhuket" },
          { label: "Bangla Boxing Stadium tickets", link: "muayThaiPhuket" },
          { label: "Phuket airport transfer", link: "transferPhuketAirport" },
          { label: "Hotels in Patong", link: "hotelPhuket" },
        ]}
      />
      <p>
        Compare neighbourhoods first: <A href="/phuket/where-to-stay/">where to stay in Phuket</A>.
        The hotel button searches Agoda for the whole city.
      </p>

      <Section title="Practical notes">
        <Bullets>
          <li>Bangla Road closes to traffic around 18:00; it peaks from about 23:00 to 01:00.</li>
          <li>Walk a couple of blocks off Bangla before booking a Grab — fares spike at the street ends.</li>
          <li>Tuk-tuks in Phuket are expensive and negotiated; Grab and Bolt are usually cheaper.</li>
          <li>
            Shops sell alcohol only at set hours; bars serve until closing. Buddhist holidays and
            election days can bring alcohol bans. Dates we could confirm:{" "}
            <A href="/thailand/alcohol-ban-days-2026/">alcohol ban days 2026</A>.
          </li>
          <li>Parts of Bangla Road include adult-entertainment venues, which Thai Night does not cover.</li>
        </Bullets>
      </Section>

      <Section title="Phuket guides">
        <LinkList links={phuketGuides} />
        <p>
          More cities: <A href="/bangkok/">Bangkok</A> · <A href="/pattaya/">Pattaya</A> ·{" "}
          <A href="/chiang-mai/">Chiang Mai</A>.
        </p>
      </Section>
    </PageShell>
  );
}
