import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Bangkok Nightlife Areas",
  "Most visitors only need two streets: Soi Cowboy and Nana Plaza. Everything else is optional.",
  "/bangkok/areas/",
);

export default function BangkokAreasPage() {
  return (
    <PageShell
      title="Bangkok Nightlife Areas"
      lead="Most visitors only need two streets: Soi Cowboy and Nana Plaza. Everything else is optional."
    >
      <PriceTable
        caption="Bangkok nightlife areas"
        headers={["Area", "Best for", "Notes"]}
        rows={[
          ["Soi Cowboy", "First night, low stress", "Open-air street between Sukhumvit Soi 21–23, near BTS Asok"],
          ["Nana Plaza", "Variety & shows", "3-floor complex on Sukhumvit Soi 4, denser"],
          ["Soi 11", "Bars and clubs", "Near Asok/Nana; different energy from the go-go streets"],
          ["Patpong", "Curiosity only", "Tourist market + older bars. Cheap-show touts are common."],
        ]}
      />
      <ul className="space-y-2">
        <li>
          <Link href="/bangkok/areas/soi-cowboy/" className="text-accent hover:underline">
            Soi Cowboy
          </Link>
        </li>
        <li>
          <Link href="/bangkok/areas/nana-plaza/" className="text-accent hover:underline">
            Nana Plaza
          </Link>
        </li>
        <li>
          <Link href="/bangkok/areas/soi-11/" className="text-accent hover:underline">
            Soi 11
          </Link>
        </li>
        <li>
          <Link href="/bangkok/areas/patpong/" className="text-accent hover:underline">
            Patpong
          </Link>
        </li>
        <li>
          <Link href="/bangkok/areas/rca-thonglor/" className="text-accent hover:underline">
            RCA & Thonglor
          </Link>
        </li>
      </ul>
      <p>
        Do Cowboy and Nana on different nights if you have time. Do not start in Patpong. Street
        touts offering upstairs “cheap shows” are a scam — never follow them.
      </p>
    </PageShell>
  );
}
