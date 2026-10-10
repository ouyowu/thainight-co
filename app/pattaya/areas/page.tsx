import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

const lead =
  "A few areas cover almost every Pattaya night out. Pick by energy and budget, not by brochure photos.";

export const metadata = pageMeta("Pattaya Nightlife Areas 2026", lead, "/pattaya/areas/");

export default function PattayaAreasPage() {
  return (
    <PageShell title="Pattaya Nightlife Areas" lead={lead}>
      <PriceTable
        caption="Pattaya nightlife areas"
        headers={["Area", "Peak hours", "Style", "Cost"]}
        rows={[
          ["Walking Street", "21:30–02:00", "Clubs, live music, spectacle", "Higher"],
          ["Tree Town", "18:00–late", "Open-air bars, bands, food", "Lower"],
          ["Soi Buakhao", "19:00–late", "Beer bars, street food", "Lower"],
          ["Beach Road / Jomtien", "Sunset–late", "Beach bars", "Mid"],
        ]}
      />
      <Bullets>
        <li><A href="/pattaya/areas/walking-street/">Walking Street</A> — the famous strip.</li>
        <li><A href="/pattaya/areas/tree-town/">Tree Town</A> — open-air courtyard with bands and food.</li>
        <li><A href="/pattaya/areas/soi-buakhao/">Soi Buakhao</A> — budget beer bars, lower pressure.</li>
      </Bullets>
      <p className="text-sm text-muted">Thai Night does not cover adult-entertainment venues.</p>
    </PageShell>
  );
}
