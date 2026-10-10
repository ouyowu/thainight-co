import { TonightGuide } from "@/components/TonightGuide";
import { pageMeta } from "@/lib/seo";

// Thin until there is a real event feed: keep it out of the index.
export const metadata = {
  ...pageMeta(
  "Tonight in Bangkok Nightlife – What’s On",
  "Current Bangkok nightlife snapshot and weekly patterns. Check what’s active and plan your night with up-to-date notes.",
  "/bangkok/tonight/",
),
  robots: { index: false, follow: true },
};

export default function BangkokTonightPage() {
  return <TonightGuide city="Bangkok" />;
}
