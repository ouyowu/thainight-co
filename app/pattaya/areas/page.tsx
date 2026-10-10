import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Pattaya Nightlife Areas",
  "Three areas cover almost every first visit. Pick by energy, not by brochure photos.",
  "/pattaya/areas/",
);

export default function PattayaAreasPage() {
  return (
    <PageShell
      title="Pattaya Nightlife Areas"
      lead="Three areas cover almost every first visit. Pick by energy, not by brochure photos."
    >
      <PriceTable
        caption="Pattaya nightlife areas"
        headers={["Area", "Hours", "Style", "Cost"]}
        rows={[
          ["Walking Street", "21:30–01:00", "Go-go, clubs, spectacle", "Higher"],
          ["Soi 6", "14:00–22:00", "Open beer bars, short-time focused", "Lower"],
          ["LK Metro", "20:00–01:00", "Go-go, slightly calmer", "Mid"],
        ]}
      />
      <ul className="space-y-2">
        <li>
          <Link href="/pattaya/areas/walking-street/" className="text-accent hover:underline">
            Walking Street
          </Link>{" "}
          — good for seeing the famous strip.
        </li>
        <li>
          <Link href="/pattaya/areas/soi-6/" className="text-accent hover:underline">
            Soi 6
          </Link>{" "}
          — good if you know what you want.
        </li>
        <li>
          <Link href="/pattaya/areas/lk-metro/" className="text-accent hover:underline">
            LK Metro
          </Link>{" "}
          — often recommended as an easier start.
        </li>
        <li>
          <Link href="/pattaya/areas/soi-buakhao/" className="text-accent hover:underline">
            Soi Buakhao
          </Link>{" "}
          — budget beer bars, lower pressure.
        </li>
        <li>
          <Link href="/pattaya/areas/tree-town/" className="text-accent hover:underline">
            Tree Town
          </Link>{" "}
          — open-air bars and food on/near Buakhao.
        </li>
      </ul>
    </PageShell>
  );
}
