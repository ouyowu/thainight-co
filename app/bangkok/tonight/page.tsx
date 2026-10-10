import { TonightGuide } from "@/components/TonightGuide";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Tonight in Bangkok Nightlife – What’s On",
  "Current Bangkok nightlife snapshot and weekly patterns. Check what’s active and plan your night with up-to-date notes.",
  "/bangkok/tonight/",
);

export default function BangkokTonightPage() {
  return <TonightGuide city="Bangkok" />;
}
