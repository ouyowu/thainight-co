import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Affiliate Disclosure – Thai Night",
  "How Thai Night uses affiliate links for hotels, tickets and travel services, and what that does and does not change.",
  "/affiliate-disclosure/",
);

export default function AffiliateDisclosurePage() {
  return (
    <PageShell
      path="/affiliate-disclosure/" title="Affiliate Disclosure">
      <p>
        Some links on Thai Night go to booking partners for hotels, transfers, tickets and other
        travel services. If you book through one of these links, we may earn a commission. The
        price you pay is the same.
      </p>
      <p>
        These links are marked “affiliate link”. Commissions help cover the cost of keeping the
        guides free and up to date.
      </p>
      <p>
        Affiliate partners do not pay for placement, rankings or recommendations, and they do not
        review our content before it is published. Venues are never ranked on payment.
      </p>
      <p>
        Prices, availability and conditions are set by the booking partner. Always confirm them on
        the booking page before you pay.
      </p>
    </PageShell>
  );
}
