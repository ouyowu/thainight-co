import { TonightGuide } from "@/components/TonightGuide";
import { pageMeta } from "@/lib/seo";

// Thin until there is a real event feed: keep it out of the index.

export const metadata = {
  ...pageMeta(
  "Tonight in Pattaya Nightlife – What’s On",
  "Pattaya nightlife this week: weekly patterns, shows and practical notes for planning your night.",
  "/pattaya/tonight/",
),
  robots: { index: false, follow: true },
};

export default function PattayaTonightPage() {
  return <TonightGuide city="Pattaya" />;
}
