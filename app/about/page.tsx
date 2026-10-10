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
      <p>
        Thai Night is a free practical guide to nightlife in Bangkok and Pattaya. We focus on
        current prices, real area differences, and common pitfalls so visitors can make better
        decisions. Information is compiled from recent visitor reports and public sources and
        updated periodically.
      </p>
    </PageShell>
  );
}
