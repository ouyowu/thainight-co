import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Walking Street Pattaya",
  "Walking Street is Pattaya’s classic neon strip: go-go, clubs, spectacle. Full guide coming soon.",
  "/pattaya/areas/walking-street/",
);

export default function WalkingStreetPage() {
  return (
    <PageShell title="Walking Street">
      <p>
        The classic big neon experience. Go-go, clubs, spectacle. Higher cost than Soi 6. Good for
        seeing the famous strip. Hours and 2026 price ranges are in the Pattaya first-timer guide.
      </p>
      <p className="font-semibold text-foreground">Full guide coming soon</p>
      <p>
        <Link href="/pattaya/first-timer/" className="text-accent hover:underline">
          Pattaya First-Timer Guide
        </Link>
      </p>
    </PageShell>
  );
}
