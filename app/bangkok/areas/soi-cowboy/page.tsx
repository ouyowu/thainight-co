import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Soi Cowboy Bangkok",
  "Soi Cowboy is Bangkok’s easiest first-night start: an open-air street near BTS Asok. Full guide coming soon.",
  "/bangkok/areas/soi-cowboy/",
);

export default function SoiCowboyPage() {
  return (
    <PageShell title="Soi Cowboy">
      <p>
        Open-air street between Sukhumvit Soi 21–23, near BTS Asok. First night, low stress — easy
        to walk, easy to leave. Full first-night plan and 2026 price ranges are in the Bangkok
        first-timer guide.
      </p>
      <p className="font-semibold text-foreground">Full guide coming soon</p>
      <p>
        <Link href="/bangkok/first-timer/" className="text-accent hover:underline">
          Bangkok First-Timer Guide
        </Link>
      </p>
    </PageShell>
  );
}
