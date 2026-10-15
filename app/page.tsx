import { HomeView } from "@/components/site/HomeView";
import { pageMeta } from "@/lib/seo";

const homeTitle = "Nightlife Guides 2026: Bangkok, Pattaya, Chiang Mai, Phuket";
const homeDescription =
  "Practical guides for Bangkok, Pattaya, Chiang Mai and Phuket: rooftop bars, clubs, Muay Thai, cabaret shows, night markets, 2026 prices and scams.";

export const metadata = pageMeta(homeTitle, homeDescription, "/");

export default function HomePage() {
  return <HomeView />;
}
