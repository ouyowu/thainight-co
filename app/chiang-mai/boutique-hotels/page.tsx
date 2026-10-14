import { HotelCta } from "@/components/HotelCta";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Chiang Mai Boutique Hotels 2026 – Nimman and the Old City",
  "Chiang Mai boutique hotel rates in 2026 for Nimman and the Old City. Published ranges to confirm on the spot, plus an Agoda link for Nimman Mai.",
  "/chiang-mai/boutique-hotels/",
);

export default function ChiangMaiBoutiqueHotelsPage() {
  return (
    <PageShell
      path="/chiang-mai/boutique-hotels/"
      title="Chiang Mai Boutique Hotels (2026)"
      lead="Chiang Mai’s boutique hotels are small design stays in Nimman or inside the moat, a step up from a guesthouse and below the valley resorts. The bands below each have two current sources. Thai Night does not rank them."
    >
      <Section title="What a night costs">
        <PriceTable
          caption="Boutique and design hotels, published 2026 rates"
          headers={["Where", "What was priced", "Nightly range"]}
          rows={[
            [
              "Nimman",
              "Boutique mid-range, and one hotel’s own rooms",
              "About ฿1,300–3,300",
            ],
            [
              "Nimman Mai design hotel",
              "A design hotel on Nimmanhaemin",
              "About ฿957–2,540",
            ],
            [
              "Old City",
              "Mid-range hotels, plus one moat-side boutique",
              "About ฿1,150–2,500",
            ],
          ]}
        />
        <p className="text-sm text-muted">
          Ranges checked 14 October 2026. January sits higher than the green season. Confirm on
          the spot. Thai Night does not rank hotels and does not take payment for placement. The Nimman Mai button opens Agoda with that hotel shown first. The second button searches all of Chiang Mai (city 7401), not one neighbourhood.
        </p>
        <Bullets>
          <li>
            <strong>Nimman band.</strong> A July 2026 neighbourhood guide puts boutique mid-range
            hotels at roughly ฿1,300–3,300 a night (Out Thailand). Feel Nimman, on Suk Kasem,
            lists a deluxe room from ฿1,300 and a two-bedroom penthouse from ฿3,200 on its own
            site.
          </li>
          <li>
            <strong>Nimman Mai.</strong> Time Out (23 April 2026) puts the design hotel from
            about ฿1,050. Kayak lists a September average near ฿957, a current king room near
            ฿1,376, and a November average near ฿2,540.
          </li>
          <li>
            <strong>Old City.</strong> Out Thailand puts mid-range hotels at about ฿1,150–2,500.
            Sanae’ Old Town, a boutique inside the moat, lists its own rooms at ฿1,400, ฿1,700,
            and ฿2,200.
          </li>
        </Bullets>
      </Section>

      <Section title="Nimman or the moat">
        <p>
          Nimman is the design strip: cafes, a club, and a short Grab to the Old City. The moat
          hotels are the walk to temples and the Sunday market. Neither is the Four Seasons in
          Mae Rim; that budget is on <A href="/chiang-mai/luxury-hotels/">luxury hotels</A>.
        </p>
        <p>
          Nights: <A href="/chiang-mai/nimman-nightlife/">Nimman bars</A>,{" "}
          <A href="/chiang-mai/old-city-nightlife/">Old City live music</A>, and the{" "}
          <A href="/chiang-mai/night-markets/">night markets</A>. Area choice is on{" "}
          <A href="/chiang-mai/where-to-stay/">where to stay</A>.
        </p>
        <p>
          A “boutique” label on a booking site is not a rate. Use the bands above and confirm
          on the spot.
        </p>
        <HotelCta label="Nimman Mai Design Hotel on Agoda" link="nimmanMaiChiangMai" />
        <HotelCta label="Search other Chiang Mai hotels" link="hotelChiangMai" />
      </Section>

      <FaqList
        items={[
          {
            q: "How much is a boutique hotel in Chiang Mai per night in 2026?",
            a: "Published bands: Nimman boutique rooms about ฿1,300–3,300, Nimman Mai about ฿957–2,540 across months, and Old City mid-range about ฿1,150–2,500. Confirm your dates.",
          },
          {
            q: "Should I stay in Nimman or the Old City?",
            a: "Nimman if the night is cafes and bars. The Old City if you want to walk to the moat and the Sunday market. This page does not pick a winner.",
          },
          {
            q: "Does the button book a boutique hotel?",
            a: "The Nimman Mai button opens Agoda with that hotel shown first. The other button searches all of Chiang Mai; filter there for Nimman or the Old City.",
          },
        ]}
      />

      <Related
        links={[
          { href: "/chiang-mai/where-to-stay/", label: "Where to stay" },
          { href: "/chiang-mai/luxury-hotels/", label: "Luxury hotels" },
          { href: "/chiang-mai/couples-hotels/", label: "Hotels for couples" },
          { href: "/chiang-mai/nimman-nightlife/", label: "Nimman nightlife" },
        ]}
      />
    </PageShell>
  );
}
