import { BookingBox } from "@/components/BookingBox";
import { PageShell } from "@/components/PageShell";
import { A, Related, Section } from "@/components/Prose";
import { StayNearby } from "@/components/StayNearby";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "One Night in Pattaya Nightlife – 2026 Sample Plans",
  "Sample one-night plans for Pattaya: cabaret and Walking Street, Muay Thai, budget Tree Town and Soi Buakhao, and a beachfront evening.",
  "/pattaya/one-night-plan/",
);

export default function PattayaOneNightPlanPage() {
  return (
    <PageShell path="/pattaya/one-night-plan/" title="One Night in Pattaya – Sample Plans (2026)">
      <Section title="Plan A — Cabaret + Walking Street (classic first night)">
        <ol className="list-decimal space-y-1 pl-5">
          <li>Early show at Tiffany’s or Alcazar — see <A href="/pattaya/cabaret-shows/">cabaret shows</A></li>
          <li>Dinner — seafood near Walking Street</li>
          <li>22:00 — full walk of <A href="/pattaya/areas/walking-street/">Walking Street</A></li>
          <li>One live-music bar or club, then Grab home</li>
        </ol>
      </Section>

      <Section title="Plan B — Muay Thai night">
        <ol className="list-decimal space-y-1 pl-5">
          <li>Evening card at a Pattaya stadium — see <A href="/pattaya/night-activities/">night activities</A></li>
          <li>Late dinner on Soi Buakhao</li>
          <li>A beer at <A href="/pattaya/areas/tree-town/">Tree Town</A></li>
        </ol>
      </Section>

      <Section title="Plan C — Budget / relaxed">
        <ol className="list-decimal space-y-1 pl-5">
          <li><A href="/pattaya/areas/soi-buakhao/">Soi Buakhao</A> street food</li>
          <li>Tree Town for bands and cheap beer</li>
          <li>Skip Walking Street premium pricing</li>
        </ol>
      </Section>

      <Section title="Plan D — Beachfront evening">
        <ol className="list-decimal space-y-1 pl-5">
          <li>Sunset on Beach Road or a seafront bar</li>
          <li>Promenade walk south toward Walking Street</li>
          <li>Short look at the neon, then home — don’t try to do everything in one night</li>
        </ol>
      </Section>

      <BookingBox
        items={[
          { label: "Cabaret show tickets", link: "cabaretPattaya" },
          { label: "Muay Thai tickets", link: "muayThaiPattaya" },
        ]}
      />

      <Related
        links={[
          { href: "/pattaya/first-timer/", label: "First-timer" },
          { href: "/prices/", label: "Prices" },
          { href: "/scams/", label: "Scams" },
        ]}
      />

      <StayNearby label="Hotels near Walking Street / Central Pattaya" link="hotelWalkingStreet">
        <p className="mt-2">Central Pattaya or near Walking Street cuts transport friction.</p>
      </StayNearby>
    </PageShell>
  );
}
