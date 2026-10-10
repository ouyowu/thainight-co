import { DisclaimerCopy } from "@/components/DisclaimerCopy";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Disclaimer",
  "Thai Night provides general information about nightlife areas in Bangkok and Pattaya. Prices, opening hours, and conditions change frequently.",
  "/disclaimer/",
);

export default function DisclaimerPage() {
  return (
    <PageShell path="/disclaimer/" title="Disclaimer" showUpdated={false}>
      <DisclaimerCopy heading="none" />
    </PageShell>
  );
}
