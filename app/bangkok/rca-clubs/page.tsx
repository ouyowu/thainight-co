import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { GuidePhoto } from "@/components/GuidePhoto";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/seo";

// Fewer than four clubs are checked, so this route stays out of the index and the sitemap.
export const metadata = {
  ...pageMeta(
    "RCA Clubs Bangkok (2026) – Onyx, Route 66 and More, Compared",
    "Which RCA club fits your night: music, crowd, entry and dress code for Onyx, Route 66 and the other big rooms on Royal City Avenue. Checked Oct 2026.",
    "/bangkok/rca-clubs/",
  ),
  robots: { index: false, follow: false },
};

export default function RcaClubsPage() {
  return (
    <PageShell
      path="/bangkok/rca-clubs/"
      title="RCA Clubs Bangkok (2026)"
      lead="Royal City Avenue is a club street. This page covers the two rooms that can be checked in public sources right now: Route 66, with a door price, and Onyx, which sells a ticket for each guest DJ."
    >
      <GuidePhoto {...photos.rca} />

      <Section title="Quick comparison">
        <PriceTable
          caption="RCA clubs compared"
          headers={["", "Route 66", "Onyx"]}
          rows={[
            ["Music", "Hip-hop, EDM, and live music, in separate rooms", "EDM, with international guest DJs"],
            [
              "Entry",
              "about 300 THB, usually includes drink coupons",
              "Ticketed per event. No price on this page.",
            ],
            ["Dress", "Smart casual", "Check the event"],
          ]}
        />
        <p className="text-sm text-muted">
          Checked October 2026; confirm on the night. Area context, including Thonglor, is on{" "}
          <A href="/bangkok/areas/rca-thonglor/">RCA &amp; Thonglor</A>. Drink bands for the city:{" "}
          <A href="/bangkok/prices/">Bangkok nightlife prices</A>.
        </p>
      </Section>

      <Section title="Route 66">
        <p>
          Route 66 is the multi-room club on Royal City Avenue. The rooms split hip-hop, EDM, and
          live music, so the night is not one dance floor.
        </p>
        <p>
          Entry is about 300 THB, and it usually includes drink coupons. Checked October 2026;
          confirm on the night.
        </p>
        <Bullets>
          <li>The door is aimed at a younger local crowd.</li>
          <li>Smart casual: no shorts, sandals, or sleeveless tops. Sneakers are accepted.</li>
        </Bullets>
      </Section>

      <Section title="Onyx">
        <p>
          Onyx is a large room on RCA. It books international EDM DJs and sells a ticket for each
          of those events. The price changes with the lineup, so this page does not list it.
        </p>
        <p>
          Read the event before you go. Broader notes on what an RCA night costs are on{" "}
          <A href="/bangkok/prices/">Bangkok nightlife prices</A> and the{" "}
          <A href="/bangkok/bar-types/">bar types</A> guide.
        </p>
      </Section>

      <Section title="Dress code and ID">
        <p>
          Route 66 publishes a smart-casual door. ID checks for the avenue, and what Thonglor
          expects, are on <A href="/bangkok/areas/rca-thonglor/">RCA &amp; Thonglor</A>.
        </p>
      </Section>

      <Section title="Getting to RCA and home">
        <p>
          How to get there and back is on <A href="/bangkok/getting-around/">getting around Bangkok</A>,
          with the door-to-door version on <A href="/bangkok/areas/rca-thonglor/">RCA &amp; Thonglor</A>.
        </p>
      </Section>

      <h2 className="text-lg font-semibold text-foreground">FAQ</h2>
      <FaqList
        items={[
          {
            q: "Does Route 66 entry include a drink?",
            a: "The usual door is about 300 THB and usually includes drink coupons. Checked October 2026; confirm on the night.",
          },
          {
            q: "Why is there no Onyx ticket price here?",
            a: "Onyx sells a ticket for each international guest-DJ night, and the price changes with the lineup. This page does not list those prices.",
          },
          {
            q: "Which RCA clubs are compared here?",
            a: "Route 66 and Onyx. Other rooms on the avenue are left out until they can be checked the same way.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/areas/rca-thonglor/", label: "RCA & Thonglor" },
          { href: "/bangkok/prices/", label: "Bangkok prices" },
          { href: "/bangkok/getting-around/", label: "Getting around" },
          { href: "/bangkok/bar-types/", label: "Bar types" },
        ]}
      />
    </PageShell>
  );
}
