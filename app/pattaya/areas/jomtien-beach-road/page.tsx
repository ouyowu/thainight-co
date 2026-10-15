import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { GuidePhoto } from "@/components/GuidePhoto";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Jomtien Beach Road Nightlife 2026 – Beach Bars and Rooftops",
  "Jomtien Beach Road at night: sunset beach bars, a checked rooftop, live-music cafes and a calmer alternative to Walking Street.",
  "/pattaya/areas/jomtien-beach-road/",
);

export default function JomtienBeachRoadPage() {
  return (
    <PageShell
      path="/pattaya/areas/jomtien-beach-road/"
      title="Jomtien Beach Road Nightlife (2026)"
      lead="Jomtien, south of Central Pattaya, is a sunset-and-sea-breeze night: beach bars, hotel rooftops and live-music cafes, not a club crawl. Golden hour is around 18:00–18:30, most beach bars wind down around midnight to 01:00, and ZAMA Skybar on level 38 of D Varee Jomtien Beach is open until 03:00."
    >
      <p>
        South of Central Pattaya, Jomtien is the sunset-and-sea-breeze night: beach bars, hotel rooftops and live-music cafes. Come for the light, not for a club crawl.
      </p>
      <GuidePhoto {...photos.jomtien} />
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
      <Section title="Jomtien beach bars and rooftops to know" id="jomtien-beach-bars">
        <p>
          ZAMA Skybar is on level 38 of D Varee Jomtien Beach and is open until 03:00. Checked
          October 2026; confirm on the night.
        </p>
      </Section>
      <Section title="How it compares">
        <p>
          Walking Street is the spectacle and the late clubs.{" "}
          <A href="/pattaya/areas/tree-town/">Tree Town</A> is open-air bands in Central. Jomtien is
          slower. Combine: sunset here, then a Grab to{" "}
          <A href="/pattaya/areas/walking-street/">Walking Street</A> if you still want neon. Drink
          bands are on <A href="/pattaya/prices/">Pattaya nightlife prices</A>. For a hotel on this
          beach, see <A href="/pattaya/where-to-stay/#jomtien">where to stay in Jomtien</A>.
        </p>
      </Section>
      <BookingBox items={[{ label: "Hotels on Jomtien / Beach Road", link: "hotelBeachRoad" }, { label: "Hotels in Pattaya", link: "hotelPattaya" }]} />
      <Section title="Getting there">
        <Bullets>
          <li>About 10-20 minutes by Grab from Central Pattaya or Walking Street.</li>
          <li>Baht buses run Beach Road / Second Road routes; agree or check the board before you sit down.</li>
          <li>If you arrive from Bangkok, say Jomtien or the hotel name. See <A href="/pattaya/bangkok-to-pattaya/">Bangkok to Pattaya</A>.</li>
        </Bullets>
      </Section>
      <FaqList items={[
        { q: "Is Jomtien a full nightlife district?", a: "It is an evening district: sunset, dinner, live music. For clubs after midnight, go to Walking Street." },
        { q: "Do I need to book a sunset table?", a: "Walk-in is fine on weekdays. Weekends and holidays fill the beach-facing seats. Arrive early." },
        { q: "Can I stay here and visit Walking Street?", a: "Yes. Budget a Grab each way." },
        { q: "What time do Jomtien beach bars close?", a: "Most wind down earlier than Walking Street, often around midnight to 01:00. Confirm hours on the day." },
        { q: "What time is sunset in Jomtien?", a: "Golden hour is usually around 18:00–18:30. Sit down by 17:30 for a beach-facing table." },
        { q: "Is there a rooftop bar in Jomtien?", a: "Yes. ZAMA Skybar is on level 38 of D Varee Jomtien Beach and is open until 03:00." },
        { q: "How do I get from Walking Street to Jomtien?", a: "About 10–20 minutes by Grab. Baht buses also run Beach Road and Second Road routes, so check the fare before you sit down." },
      ]} />
      <Related links={[{ href: "/pattaya/", label: "Pattaya" }, { href: "/pattaya/areas/walking-street/", label: "Walking Street" }, { href: "/pattaya/hotels-walking-street/", label: "Where to stay" }, { href: "/pattaya/night-activities/", label: "Night activities" }]} />
    </PageShell>
  );
}
