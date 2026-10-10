import { TonightGuide } from "@/components/TonightGuide";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Tonight in Pattaya Nightlife – What’s On",
  "Pattaya nightlife this week: weekly patterns, shows and practical notes for planning your night.",
  "/pattaya/tonight/",
);

export default function PattayaTonightPage() {
  return <TonightGuide city="Pattaya" />;
}
