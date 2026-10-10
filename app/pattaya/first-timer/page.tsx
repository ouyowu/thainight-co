import { BookingBox } from "@/components/BookingBox";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, LinkList, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Pattaya Nightlife First-Timer Guide 2026",
  "First night in Pattaya: cabaret show, Walking Street, Tree Town and Soi Buakhao compared, with current prices and practical rules for 2026.",
  "/pattaya/first-timer/",
);

export default function PattayaFirstTimerPage() {
  return (
    <PageShell title="Pattaya Nightlife First-Timer Guide (2026)">
      <Section title="Quick answer">
        <p>
          Classic first night: a cabaret show around 19:00–20:00, dinner, then Walking Street from
          about 22:00 for the neon, clubs and live music. Want cheaper and more relaxed → Tree Town
          and Soi Buakhao. Many people do one of each over two nights.
        </p>
      </Section>

      <Section title="Main areas compared">
        <PriceTable
          caption="Main areas compared"
          headers={["Area", "Peak hours", "Style", "Cost"]}
          rows={[
            ["Walking Street", "21:30–02:00", "Clubs, live music, spectacle", "Higher"],
            ["Tree Town", "18:00–late", "Open-air bars, bands, food", "Lower"],
            ["Soi Buakhao", "19:00–late", "Beer bars, street food", "Lower"],
            ["Beach Road", "Sunset–late", "Seafront bars, promenade", "Mid"],
          ]}
        />
      </Section>

      <Section title="Recommended first night plan">
        <ol className="list-decimal space-y-1 pl-5">
          <li>Book a <A href="/pattaya/cabaret-shows/">cabaret show</A> for the early slot</li>
          <li>Dinner — seafood near Walking Street or street food on Soi Buakhao</li>
          <li>Walking Street around 22:00; walk the full length once before sitting</li>
          <li>Pick one live-music bar, then a club if you still want to</li>
          <li>Decide your spend before you start</li>
        </ol>
      </Section>

      <Section title="2026 price range">
        <PriceTable
          caption="2026 price range"
          headers={["Item", "Typical price"]}
          rows={[
            ["Beer, open beer bar", "60–130 THB"],
            ["Beer, Walking Street bar or club", "150–250 THB"],
            ["Cocktail, club", "250–400 THB"],
            ["Baht bus ride on a fixed route", "Commonly 10–20 THB per person"],
          ]}
        />
        <p>
          More: <A href="/prices/">prices</A> · <A href="/budgets/">budget bands</A>.
        </p>
      </Section>

      <BookingBox
        items={[
          { label: "Cabaret show tickets", link: "cabaretPattaya" },
          { label: "Bangkok → Pattaya transfer", link: "transferBangkokPattaya" },
          { label: "Hotels near Walking Street", link: "hotelWalkingStreet" },
        ]}
      />

      <Section title="Simple rules">
        <Bullets>
          <li>Walk the street first, sit second</li>
          <li>Check the menu price before ordering; keep your bill tab in view</li>
          <li>Keep small notes (100s and 50s)</li>
          <li>Ignore touts offering “free shows” off the main street</li>
        </Bullets>
      </Section>

      <Section title="Where to stay">
        <p>
          Central Pattaya near Beach Road or Walking Street cuts transport friction. See{" "}
          <A href="/pattaya/hotels-walking-street/">where to stay for nightlife</A>.
        </p>
      </Section>

      <Section title="Next steps">
        <LinkList
          links={[
            { href: "/pattaya/one-night-plan/", label: "One-night plans" },
            { href: "/pattaya/areas/walking-street/", label: "Walking Street guide" },
            { href: "/pattaya/areas/tree-town/", label: "Tree Town" },
            { href: "/pattaya/night-activities/", label: "Muay Thai, markets and other night activities" },
            { href: "/pattaya/getting-around/", label: "Getting around" },
            { href: "/pattaya/faq/", label: "FAQ" },
            { href: "/scams/", label: "Scams to avoid" },
          ]}
        />
      </Section>
    </PageShell>
  );
}
