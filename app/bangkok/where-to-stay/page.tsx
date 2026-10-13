import { WhereToStayGuide } from "@/app/bangkok/hotels-nana-asok/page";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Where to Stay in Bangkok for Nightlife 2026 – Sukhumvit Guide",
  "Nana, Asok, Phrom Phong or Thonglor? Which Sukhumvit BTS stop to stay near for rooftops, Soi 11 and clubs. Pick the area and stay type, not a branded list.",
  "/bangkok/where-to-stay/",
);

export default function WhereToStayPage() {
  return <WhereToStayGuide path="/bangkok/where-to-stay/" />;
}
