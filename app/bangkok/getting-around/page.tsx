import { PageShell } from "@/components/PageShell";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Getting Around Bangkok at Night 2026",
  "BTS and MRT for nightlife areas, walk vs Grab/Bolt late at night, last trains, and why random taxis and tuk-tuks are a bad default.",
  "/bangkok/getting-around/",
);

export default function BangkokGettingAroundPage() {
  return (
    <PageShell title="Getting Around Bangkok at Night (2026)">
      <p>
        Use the BTS and MRT while they run, walk short hops, and switch to Grab or Bolt late at
        night. Trains stop around midnight — check the last train for your line.
      </p>

      <Section title="Which station for which area">
        <Bullets>
          <li><A href="/bangkok/areas/soi-11/">Soi 11</A> — BTS Nana, a few minutes’ walk.</li>
          <li>Asok / Terminal 21 — BTS Asok and MRT Sukhumvit at the same junction.</li>
          <li>Thonglor — BTS Thong Lo, then a long soi: Grab or a motorbike taxi for the far end.</li>
          <li>RCA — MRT Phra Ram 9 plus a short Grab; no station on the strip itself.</li>
          <li>Silom / Patpong — BTS Sala Daeng or MRT Silom.</li>
          <li>Sky Bar (lebua) — BTS Saphan Taksin, short walk.</li>
          <li>Asiatique — BTS Saphan Taksin, then the free shuttle boat from Sathorn Pier.</li>
        </Bullets>
      </Section>

      <Section title="Walk vs Grab / Bolt">
        <p>
          Short Sukhumvit hops are easy on foot while the street is busy. After the last train, use
          Grab or Bolt for a fixed, visible fare.
        </p>
        <p>
          A “broken” meter or a fixed high price from a curbside taxi is a known pattern. Use the
          app, or insist on the meter. Rates:{" "}
          <A href="/bangkok/taxi-fare/">Bangkok taxi fares 2026</A>. See <A href="/scams/">scams</A>.
        </p>
      </Section>

      <Section title="Avoid">
        <Bullets>
          <li>Tuk-tuks offering cheap tours or “closed today” detours</li>
          <li>Touts at soi mouths offering rides to “better” bars</li>
          <li>Unlicensed cars at hotel doors with no visible price</li>
        </Bullets>
      </Section>

      <Related
        links={[
          { href: "/bangkok/first-timer/", label: "First-timer" },
          { href: "/bangkok/faq/", label: "FAQ" },
          { href: "/cash/", label: "Cash" },
        ]}
      />
    </PageShell>
  );
}
