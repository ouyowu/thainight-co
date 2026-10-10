import { TonightGuide } from "@/components/TonightGuide";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Tonight in Bangkok",
  "What’s on this week in Bangkok nightlife, regular weekly patterns, and quick links. Updated periodically — verify on the day.",
  "/bangkok/tonight/",
);

export default function BangkokTonightPage() {
  return <TonightGuide city="Bangkok" />;
}
