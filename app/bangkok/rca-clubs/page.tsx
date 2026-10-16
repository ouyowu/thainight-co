import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { StayNearby } from "@/components/StayNearby";
import { A, Related, Section } from "@/components/Prose";
import { GuidePhoto } from "@/components/GuidePhoto";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/seo";

// Three clubs are checked. A fourth is still needed before this route can be indexed or added to the sitemap.
export const metadata = {
  ...pageMeta(
    "RCA Clubs Bangkok (2026): Onyx, Route 66, Spaceplus",
    "RCA clubs compared: music, crowd, entry and hours for Onyx, Route 66 and Spaceplus on Royal City Avenue, Bangkok. Checked October 2026.",
    "/bangkok/rca-clubs/",
  ),
  robots: { index: false, follow: true },
};

export default function RcaClubsPage() {
  return (
    <PageShell
      path="/bangkok/rca-clubs/"
      title="RCA Clubs Bangkok (2026)"
      lead="Three clubs on Royal City Avenue have checked door details: Onyx, Route 66, and Spaceplus. Ordinary entry is about 500 THB at Onyx, about 300 THB at Route 66, and usually free at Spaceplus."
    >
      <GuidePhoto {...photos.rca} />

      <Section title="Quick comparison">
        <PriceTable
          caption="RCA clubs compared"
          headers={["", "Onyx", "Route 66", "Spaceplus"]}
          rows={[
            [
              "Ordinary entry",
              "about 500 THB, including one drink",
              "about 300 THB, including drink coupons",
              "usually free",
            ],
          ]}
        />
        <PriceTable
          caption="RCA club hours"
          headers={["", "Onyx", "Route 66"]}
          rows={[["Hours", "until about 04:00", "daily 21:00–04:00"]]}
        />
        <p className="text-sm text-muted">
          Checked October 2026; confirm on the night. Onyx DJ nights cost more than the ordinary
          door. Area context, including Thonglor, is on{" "}
          <A href="/bangkok/areas/rca-thonglor/">RCA &amp; Thonglor</A>. Drink bands for the city:{" "}
          <A href="/bangkok/prices/">Bangkok nightlife prices</A>.
        </p>
      </Section>

      <Section title="Onyx">
        <p>
          Ordinary entry at Onyx is about 500 THB, and that includes one drink. DJ nights cost
          more. The club is open until about 04:00.
        </p>
      </Section>

      <Section title="Route 66">
        <p>
          Route 66 is open daily from 21:00 to 04:00. Ordinary entry is about 300 THB, including
          drink coupons.
        </p>
      </Section>

      <Section title="Spaceplus">
        <p>Spaceplus is usually free on an ordinary night.</p>
      </Section>

      <Section title="Getting to RCA and home">
        <p>
          How to get there and back is on <A href="/bangkok/getting-around/">getting around Bangkok</A>,
          with the door-to-door version on <A href="/bangkok/areas/rca-thonglor/">RCA &amp; Thonglor</A>.
          For a different city, see <A href="/pattaya/">Pattaya nightlife</A> and{" "}
          <A href="/phuket/">Phuket nightlife</A>.
        </p>
      </Section>

      <StayNearby label="Hotels in Bangkok" link="hotelBangkok">
        <p>
          See <A href="/bangkok/where-to-stay/">where to stay in Bangkok</A> for a base, then take
          a ride out to Royal City Avenue.
        </p>
      </StayNearby>

      <h2 className="text-lg font-semibold text-foreground">FAQ</h2>
      <FaqList
        items={[
          {
            q: "How much is ordinary entry at Onyx?",
            a: "About 500 THB, including one drink. DJ nights cost more. Onyx is open until about 04:00. Checked October 2026; confirm on the night.",
          },
          {
            q: "How much is ordinary entry at Route 66?",
            a: "About 300 THB, including drink coupons. Route 66 is open daily from 21:00 to 04:00. Checked October 2026; confirm on the night.",
          },
          {
            q: "Is Spaceplus free?",
            a: "Spaceplus is usually free on an ordinary night. Checked October 2026; confirm on the night.",
          },
          {
            q: "Which RCA clubs are compared here?",
            a: "Onyx, Route 66, and Spaceplus.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/bangkok/areas/rca-thonglor/", label: "RCA & Thonglor" },
          { href: "/bangkok/prices/", label: "Bangkok prices" },
          { href: "/bangkok/getting-around/", label: "Getting around" },
          { href: "/pattaya/", label: "Pattaya nightlife" },
          { href: "/phuket/", label: "Phuket nightlife" },
        ]}
      />
    </PageShell>
  );
}
