import { DisclaimerCopy } from "@/components/DisclaimerCopy";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "About Thai Night",
  "Thai Night is a free practical guide to nightlife in Bangkok and Pattaya, focused on current prices and real area differences.",
  "/about/",
);

export default function AboutPage() {
  return (
    <PageShell title="About Thai Night">
      <p>Thai Night is a free practical guide to nightlife in Bangkok and Pattaya.</p>
      <p>
        We focus on current prices, real differences between areas, and common pitfalls so visitors
        can make better decisions. Information is compiled from recent visitor reports and public
        sources and is updated periodically.
      </p>
      <p>
        We do not run venues, take booking commissions from bars, or rank places based on paid
        placement. Affiliate links for hotels and travel services may appear on some pages — these
        help cover site costs and do not affect the editorial content.
      </p>
      <p>
        This site is intended for adults (18+). Nightlife scenes change quickly. Always confirm
        prices and conditions on the spot.
      </p>
      <DisclaimerCopy />
    </PageShell>
  );
}
