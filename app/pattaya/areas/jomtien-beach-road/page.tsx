import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Jomtien Beach Road Nightlife 2026 - Sunset Bars and Where to Stay",
  "Jomtien Beach Road at night: sunset beach bars, live-music cafes and a calmer alternative to Walking Street.",
  "/pattaya/areas/jomtien-beach-road/",
);

export default function JomtienBeachRoadPage() {
  return (
    <PageShell
      title="Jomtien Beach Road Nightlife (2026)"
      lead="South of Central Pattaya, Jomtien is the sunset-and-sea-breeze night: beach bars, hotel rooftops and live-music cafes. Come for the light, not for a club crawl."
    >
      <Section title="What it is for">
        <Bullets>
          <li>Sunset drinks facing the Gulf</li>
          <li>Beachfront restaurants and bars with live singers after dark</li>
          <li>A quieter base if Walking Street is only a one-night look</li>
        </Bullets>
        <p className="text-sm text-muted">Thai Night does not cover adult-entertainment venues.</p>
      </Section>
      <Section title="Sunset first">
        <p>Golden hour is usually around 18:00-18:30. Sit down by 17:30 if you want a beach-facing table. Most beach bars wind down earlier than Walking Street, often around midnight to 01:00. Confirm hours on the day.</p>
        <PriceTable caption="Jomtien night pockets" headers={["Spot type", "When", "Notes"]} rows={[["Beachfront bars / cafes", "Sunset to late", "Sea breeze, mixed Thai and visitor crowds, live singers at several rooms"], ["Hotel rooftops", "Afternoon to evening", "Wider view, hotel prices; handy if you are staying in Jomtien"], ["Second Road / side sois", "Evening", "Cheaper drinks, less view"]]} />
      </Section>
      <Section title="How it compares">
        <p>Walking Street is the spectacle and the late clubs. Tree Town is open-air bands in Central. Jomtien is slower. Combine: sunset here, then a Grab to <A href="/pattaya/areas/walking-street/">Walking Street</A> if you still want neon.</p>
      </Section>
      <BookingBox items={[{ label: "Hotels on Jomtien / Beach Road", link: "hotelBeachRoad" }, { label: "Hotels in Pattaya", link: "hotelPattaya" }]} />
      <Section title="Getting there">
        <Bullets>
          <li>About 10-20 minutes by Grab from Central Pattaya or Walking Street.</li>
          <li>Baht buses run Beach Road / Second Road routes; agree or check the board before you sit down.</li>
          <li>If you arrive from Bangkok, say Jomtien or the hotel name. See <A href="/pattaya/bangkok-to-pattaya/">Bangkok to Pattaya</A>.</li>
        </Bullets>
      </Section>
      <FaqList items={[{ q: "Is Jomtien a full nightlife district?", a: "It is an evening district: sunset, dinner, live music. For clubs after midnight, go to Walking Street." }, { q: "Do I need to book a sunset table?", a: "Walk-in is fine on weekdays. Weekends and holidays fill the beach-facing seats. Arrive early." }, { q: "Can I stay here and visit Walking Street?", a: "Yes. Budget a Grab each way." }]} />
      <Related links={[{ href: "/pattaya/areas/walking-street/", label: "Walking Street" }, { href: "/pattaya/hotels-walking-street/", label: "Where to stay" }, { href: "/pattaya/night-activities/", label: "Night activities" }]} />
    </PageShell>
  );
}
