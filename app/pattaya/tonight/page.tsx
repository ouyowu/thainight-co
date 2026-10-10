import { TonightGuide } from "@/components/TonightGuide";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Tonight in Pattaya",
  "What’s on this week in Pattaya nightlife, regular weekly patterns, and quick links. Updated periodically — verify on the day.",
  "/pattaya/tonight/",
);

export default function PattayaTonightPage() {
  return <TonightGuide city="Pattaya" />;
}
