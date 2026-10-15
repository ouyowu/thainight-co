import { HotelCta } from "@/components/HotelCta";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

const sources = [
  {
    href: "https://all.accor.com/a/en/limitless/thematics/shopping/koh-samui-night-markets.html",
    label: "Accor, 27 August 2026: Koh Samui night markets, including Fisherman’s Village and Lamai",
  },
  {
    href: "https://lubd.com/eat-shop-like-a-local-koh-samui-night-markets-schedule/",
    label: "Lub d, 1 August 2025: Koh Samui night-market days and hours",
  },
  {
    href: "https://www.agoda.com/city/koh-samui-th.html",
    label: "Agoda Koh Samui city page, defaultSearchURL city 17198, checked 15 October 2026",
  },
];

export const metadata = pageMeta(
  "Where to Stay on Koh Samui for Nightlife",
  "Chaweng for beach bars on foot, Fisherman’s Village for a Mon/Wed/Fri walking street, Lamai for a quieter Sunday market. No ranked hotel.",
  "/koh-samui/where-to-stay/",
);

export default function KohSamuiWhereToStayPage() {
  return (
    <PageShell
      path="/koh-samui/where-to-stay/"
      title="Where to Stay on Koh Samui for Nightlife"
      lead="Stay in Chaweng if you want the beach and the bars on the same walk. Stay in Bophut, at Fisherman’s Village, for an earlier night and a walking street on Monday, Wednesday and Friday from 17:00 to 23:00. Stay in Lamai for a quieter beach and a Sunday evening market. There is no ranked hotel."
    >
      <Section title="Which beach?">
        <PriceTable
          caption="Koh Samui bases for a night out"
          headers={["Area", "Suits", "Evening already checked"]}
          rows={[
            ["Chaweng", "Beach bars on foot", "Night market beside the beach strip; bar hours not printed here"],
            ["Fisherman’s Village, Bophut", "Dinner and a stroll", "Walking street Mon, Wed, Fri, 17:00–23:00"],
            ["Lamai", "A quieter beach", "Sunday evening market; closing time left off"],
          ]}
        />
        <p className="text-sm text-muted">
          Fisherman’s Village days and hours match on two pages: Accor (27 August 2026) and Lub d
          (1 August 2025), both Monday, Wednesday and Friday, 17:00–23:00, with Friday the main
          night on the Accor page. Lamai’s Sunday market is on both pages, and the closing times
          disagree, so none is printed. This page has no nightly room rates. Confirm on the spot.
          Thai Night does not rank hotels.
        </p>
      </Section>

      <Section title="Chaweng">
        <p>
          This is the beach to choose when the night should start outside the hotel. Lub d describes
          the Chaweng night market as a food court near the lake, with the beach nightlife a short
          walk on. Accor places Chaweng Walking Street and the night market on the beach road.
        </p>
        <p>
          Those two pages do not agree on which nights the Chaweng market runs, so this guide does
          not print a Chaweng market schedule. Ask that day. Parts of the beach road include
          adult-entertainment venues, which Thai Night does not cover.
        </p>
        <HotelCta label="Search hotels on Koh Samui" link="hotelKohSamui" />
      </Section>

      <Section title="Fisherman’s Village, Bophut">
        <p>
          Fisherman’s Village is the north-coast beach road in Bophut. Accor and Lub d both list the
          walking street on Monday, Wednesday and Friday from 17:00 to 23:00. Accor calls Friday the
          main night. The evening is stalls, food and a stroll, then an earlier end than a Chaweng
          bar night.
        </p>
        <p>
          Stay here when you want that market on foot and you are happy to taxi to Chaweng on a
          different night. The hotel button searches the whole island, including Bophut.
        </p>
      </Section>

      <Section title="Lamai">
        <p>
          Lamai is the quieter beach south of Chaweng. Accor’s 27 August 2026 note and Lub d’s 1
          August 2025 note both put a Lamai market on Sunday evening. Their closing times differ, so
          this page does not print one. Plan on Sunday and confirm the finish locally.
        </p>
        <p>A Chaweng bar night from Lamai is a taxi, agreed before you get in.</p>
      </Section>

      <Section title="Getting between them">
        <Bullets>
          <li>The three beaches are a drive apart, not a walk.</li>
          <li>For a taxi or songthaew, agree the fare before you sit down.</li>
          <li>
            Carry cash for market stalls. See <A href="/cash/">cash and payments</A>.
          </li>
          <li>The legal drinking age in Thailand is 20.</li>
          <li>
            Read <A href="/safety/">safety</A> before a late taxi.
          </li>
        </Bullets>
        <p className="text-sm text-muted">
          The button opens an Agoda search for Koh Samui, city 17198, with partner CID 1969005. It
          is the whole island, not one beach and not one hotel.
        </p>
      </Section>

      <Section title="Sources">
        <ul className="list-disc space-y-1 pl-5">
          {sources.map((source) => (
            <li key={source.href}>
              <a href={source.href} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <FaqList
        items={[
          {
            q: "Where should I stay on Koh Samui for nightlife?",
            a: "Chaweng if you want beach bars on foot. Fisherman’s Village in Bophut if you want the walking street on Monday, Wednesday and Friday. Lamai if you want a quieter beach and a Sunday evening market.",
          },
          {
            q: "When is the Fisherman’s Village walking street?",
            a: "Monday, Wednesday and Friday, 17:00–23:00. Accor (27 August 2026) and Lub d (1 August 2025) both list those days and hours. Accor calls Friday the main night.",
          },
          {
            q: "What time does the Lamai Sunday market close?",
            a: "This page does not print a closing time. Accor and Lub d both put the market on Sunday evening, and they disagree on the finish. Confirm locally.",
          },
          {
            q: "Does the hotel button book one resort?",
            a: "No. It opens a Koh Samui-wide Agoda search (city 17198). Filter there for Chaweng, Bophut or Lamai. Thai Night does not rank hotels.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/phuket/where-to-stay/", label: "Where to stay in Phuket" },
          { href: "/thailand/esim-for-tourists/", label: "Tourist eSIM" },
          { href: "/cash/", label: "Cash" },
          { href: "/safety/", label: "Safety" },
          { href: "/thailand/", label: "Thailand guides" },
        ]}
      />
    </PageShell>
  );
}
