import { Suspense } from "react";
import { HomeView } from "@/components/site/HomeView";
import { pageMeta } from "@/lib/seo";

const homeTitle = "Thai Night – Thailand Nightlife Guides 2026: Bangkok, Pattaya, Phuket";
const homeDescription =
  "Practical nightlife guides for Bangkok, Pattaya, Chiang Mai and Phuket: rooftop bars, clubs, Muay Thai, cabaret shows, night markets, real 2026 prices and common scams.";

export const metadata = pageMeta(homeTitle, homeDescription, "/");

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomeView />
    </Suspense>
  );
}
