import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

const lead = "Four zones cover almost every Bangkok night out. Pick by the kind of night you want, then stay close to it.";

export const metadata = pageMeta("Bangkok Nightlife Areas 2026", lead, "/bangkok/areas/");

export default function BangkokAreasPage() {
  return (
    <PageShell title="Bangkok Nightlife Areas" lead={lead}>
      <PriceTable caption="Bangkok nightlife areas" headers={["Area", "Best for", "Notes"]} rows={[["Sukhumvit Soi 11", "First night", "Bars, a rooftop and clubs near BTS Nana"], ["Thonglor / Ekkamai", "Cocktails, live music", "Upscale, younger Thai crowd"], ["RCA", "Big club nights", "Near MRT Phra Ram 9; ID checks"], ["Silom / Patpong", "Market, sky bars", "Night market; famous rooftops nearby"], ["Khao San Road", "Cheap and loud", "Backpacker street near the old town"]]} />
      <Bullets>
        <li><A href="/bangkok/areas/soi-11/">Soi 11</A></li>
        <li><A href="/bangkok/areas/khao-san/">Khao San Road</A></li>
        <li><A href="/bangkok/areas/rca-thonglor/">RCA and Thonglor</A></li>
        <li><A href="/bangkok/areas/patpong/">Patpong and Silom</A></li>
        <li><A href="/bangkok/rooftop-bars/">Rooftop bars by area</A></li>
      </Bullets>
      <p>Street touts offering upstairs cheap shows around Patpong are an overcharge trap. Never follow them. Thai Night does not cover adult-entertainment venues.</p>
    </PageShell>
  );
}
