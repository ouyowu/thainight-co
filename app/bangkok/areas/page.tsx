import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { GuidePhoto } from "@/components/GuidePhoto";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/seo";

const lead = "Four zones cover almost every Bangkok night out. Pick by the kind of night you want, then stay close to it.";

export const metadata = pageMeta(
  "Bangkok Nightlife Areas 2026 – Which One to Pick",
  "Sukhumvit Soi 11, Thonglor, RCA, Silom and Khao San compared for 2026: what each area is for, what it costs, how late the BTS and MRT run, and which to pick on a first night.",
  "/bangkok/areas/",
);

export default function BangkokAreasPage() {
  return (
    <PageShell path="/bangkok/areas/" title="Bangkok Nightlife Areas" lead={lead}>
      <GuidePhoto {...photos.khaoSan} />

      <Section title="The areas at a glance">
        <PriceTable
          caption="Bangkok nightlife areas"
          headers={["Area", "Best for", "Notes"]}
          rows={[
            ["Sukhumvit Soi 11", "First night", "Bars, a rooftop and clubs near BTS Nana"],
            ["Thonglor / Ekkamai", "Cocktails, live music", "Upscale, younger Thai crowd"],
            ["RCA", "Big club nights", "Near MRT Phra Ram 9; ID checks"],
            ["Silom / Patpong", "Market, sky bars", "Night market; famous rooftops nearby"],
            ["Khao San Road", "Cheap and loud", "Backpacker street near the old town"],
          ]}
        />
      </Section>

      <Section title="Which one to pick">
        <Bullets>
          <li><strong>First night in Bangkok.</strong> Soi 11. Street bars, a rooftop and clubs sit in one walk, and BTS Nana is at the end of it.</li>
          <li><strong>Cocktails and a Thai crowd.</strong> Thonglor or Ekkamai. Smaller rooms, higher prices, book at weekends.</li>
          <li><strong>One big club night.</strong> RCA. It is a single street of large clubs and nothing else, so go when that is the plan.</li>
          <li><strong>A market, then a view.</strong> Silom. Patpong night market early, then the Sathorn and riverside rooftops.</li>
          <li><strong>Cheap and loud.</strong> Khao San. The cheapest beer of the five, far from the BTS, and a Grab home.</li>
        </Bullets>
      </Section>

      <Section title="What a night costs by area">
        <PriceTable
          caption="Four drinks plus transport, per person"
          headers={["Area", "Four drinks", "Night total"]}
          rows={[
            ["Khao San", "about 320–600 THB", "about 600–900 THB"],
            ["Soi 11", "about 480–880 THB", "about 900–1,600 THB"],
            ["Silom with a rooftop", "about 900–1,800 THB", "about 1,800–3,000 THB"],
            ["Thonglor", "about 1,000–1,800 THB", "about 1,800–2,800 THB"],
            ["RCA with entry", "about 1,000–1,600 THB + 300–500 entry", "about 1,800–2,600 THB"],
          ]}
        />
        <p className="text-sm text-muted">
          Checked October 2026 against venue listings and recent visitor reports. Full table:{" "}
          <A href="/bangkok/prices/">Bangkok nightlife prices</A>.
        </p>
      </Section>

      <Section title="Getting between them">
        <Bullets>
          <li>The BTS and MRT stop around midnight. After that every area is a Grab or a taxi.</li>
          <li>Soi 11, Thonglor and Ekkamai are all on the Sukhumvit BTS line, a few stops apart.</li>
          <li>RCA has no station at the door; MRT Phra Ram 9 is the closest, then a short ride.</li>
          <li>Khao San has no train at all. Budget a Grab each way, or stay in the old town.</li>
          <li>Crossing town at 22:00 can take 40 minutes. Keep one night to one or two areas.</li>
        </Bullets>
        <p>
          Fares and how the meter works: <A href="/bangkok/taxi-fare/">Bangkok taxi fares</A> ·{" "}
          <A href="/bangkok/getting-around/">getting around</A>.
        </p>
      </Section>

      <Section title="Where to stay for each">
        <p>
          Sukhumvit between Nana and Thong Lo puts you inside the biggest cluster and on the BTS.
          Silom suits a rooftop-and-market night. Khao San is cheapest but isolated after the
          trains stop. Area-by-area:{" "}
          <A href="/bangkok/where-to-stay/">where to stay in Bangkok</A>.
        </p>
      </Section>

      <Section title="Area guides">
        <Bullets>
          <li><A href="/bangkok/areas/soi-11/">Soi 11</A></li>
          <li><A href="/bangkok/areas/khao-san/">Khao San Road</A></li>
          <li><A href="/bangkok/areas/rca-thonglor/">RCA and Thonglor</A></li>
          <li><A href="/bangkok/areas/patpong/">Patpong and Silom</A></li>
          <li><A href="/bangkok/rooftop-bars/">Rooftop bars by area</A></li>
        </Bullets>
        <p>Street touts offering upstairs cheap shows around Patpong are an overcharge trap. Never follow them. Thai Night does not cover adult-entertainment venues.</p>
      </Section>

      <FaqList
        items={[
          {
            q: "Which Bangkok area is best for a first night out?",
            a: "Sukhumvit Soi 11. Street bars, a rooftop and clubs are in one walk, and BTS Nana is at the end of the street.",
          },
          {
            q: "Which Bangkok nightlife area is cheapest?",
            a: "Khao San Road. Beer runs about 80–150 THB, though you will pay for a Grab both ways because there is no BTS nearby.",
          },
          {
            q: "How late do the BTS and MRT run?",
            a: "Around midnight. After that, use Grab, Bolt or a metered taxi.",
          },
          {
            q: "Can I do two Bangkok areas in one night?",
            a: "Yes if they are on the same BTS line, such as Soi 11 and Thonglor. Crossing town, for example Khao San to RCA, can take 40 minutes each way.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/", label: "Bangkok" },
          { href: "/bangkok/prices/", label: "Bangkok prices" },
          { href: "/bangkok/bar-types/", label: "Bar types" },
          { href: "/bangkok/one-night-plan/", label: "One night in Bangkok" },
          { href: "/bangkok/where-to-stay/", label: "Where to stay" },
        ]}
      />
    </PageShell>
  );
}
