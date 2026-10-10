import { PattayaTonightNotes } from "@/components/PattayaTonightNotes";
import { TonightGuide } from "@/components/TonightGuide";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Tonight in Pattaya Nightlife – What’s On",
  "Current Pattaya nightlife snapshot and weekly patterns. Plan your night with practical, up-to-date notes.",
  "/pattaya/tonight/",
);

export default function PattayaTonightPage() {
  return (
    <TonightGuide city="Pattaya">
      <PattayaTonightNotes />
    </TonightGuide>
  );
}
