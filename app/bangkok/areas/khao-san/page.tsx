import { BookingBox } from "@/components/BookingBox";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { PriceTable } from "@/components/PriceTable";
import { A, Bullets, Related, Section } from "@/components/Prose";
import { GuidePhoto } from "@/components/GuidePhoto";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Khao San Road Nightlife 2026 – Prices, Cheap Bars, Live Music",
  "Khao San Road at night: beer and bucket prices, live-music rooms off the strip, hostel prices, and how to pair it with Rajadamnern. Checked October 2026.",
  "/bangkok/areas/khao-san/",
);

export default function KhaoSanPage() {
  return (
    <PageShell
      path="/bangkok/areas/khao-san/"
      title="Khao San Road Nightlife (2026)"
      lead="Khao San Road is Bangkok's loud, cheap backpacker street near the old town. Local beer costs about 80–150 THB, a bucket about 250–350 THB, and a full night about 800–1,200 THB per person. Hostel dorm beds are about 250–400 THB. It peaks after 22:00, with live music around Soi Rambuttri, a short Grab from Rajadamnern Stadium."
    >
      <p>
        Bangkok backpacker street is loud, cheap and close to the old town. Use it for a low-spend bar hop or after Rajadamnern — not as your only Sukhumvit-style night.
      </p>
      <GuidePhoto {...photos.khaoSan} />
      <Section title="What it is for">
        <Bullets>
          <li>Cheap beers and buckets on the main strip</li>
          <li>Live music in rooms just off the road (ska, reggae, Thai rock, covers)</li>
          <li>A short ride from Rajadamnern Stadium after a fight card</li>
          <li>Old-town days that turn into an easy night without crossing the city</li>
        </Bullets>
        <p className="text-sm text-muted">Thai Night does not cover adult-entertainment venues.</p>
      </Section>
      <Section title="The street vs the sois">
        <PriceTable
          caption="Khao San nightlife pockets"
          headers={["Pocket", "Feel", "Notes"]}
          rows={[
            ["Khao San Road itself", "Crowded, neon, street stalls", "Walk it once; sit down off the kerb if you want a conversation"],
            ["Soi Rambuttri / Ram Buttri", "Slightly calmer bars and terraces", "Live bands and a slower start before the main road peaks"],
            ["Buddy complex / side rooms", "Dark live-music rooms", "Brick Bar is the long-running ska/reggae room — arrive before it fills on weekends"],
          ]}
        />
        <p>Peak is usually after 22:00, louder on Friday and Saturday.</p>
      </Section>
      <Section title="What a Khao San night costs" id="what-a-khao-san-night-costs">
        <PriceTable
          caption="What a Khao San night costs"
          headers={["Item", "About"]}
          rows={[
            ["Local beer", "80–150 THB"],
            ["Bucket", "250–350 THB"],
            ["A night, per person", "about 800–1,200 THB"],
            ["Hostel dorm bed", "about 250–400 THB"],
          ]}
        />
        <p>
          Local beer is the same 80–150 THB band as on{" "}
          <A href="/bangkok/prices/">Bangkok nightlife prices</A>. The night line is a fuller
          evening than the short street-beer example on that page. Checked October 2026; confirm
          on the night.
        </p>
      </Section>
      <Section title="With Rajadamnern">
        <p>
          Rajadamnern Stadium is a short Grab from Khao San. Fights usually start in the early evening. Full seat and ticket notes: <A href="/bangkok/muay-thai/">Muay Thai in Bangkok</A>. Do not buy tickets from street sellers near the gates. See <A href="/scams/">nightlife scams</A>.
        </p>
      </Section>
      <BookingBox items={[{ label: "Rajadamnern / Lumpinee tickets", link: "muayThaiBangkok" }, { label: "Hotels in Bangkok", link: "hotelBangkok" }]} />
      <p>
        The street sits by the old town. <A href="/bangkok/where-to-stay/">Old Town hotels</A> are
        the base for a night that stays here. The hotel button searches the whole of Bangkok.
      </p>
      <Section title="Practical notes">
        <Bullets>
          <li>No BTS on the doorstep. Grab or a river boat plus walk from Phra Athit / the old town.</li>
          <li>Keep your bag zipped on the strip. Street beer is cheap; ATM fees and friendly bar tabs are where people overpay.</li>
          <li>Legal drinking age in Thailand is 20. Carry ID if you look young.</li>
          <li>If you want cocktail bars and clubs instead, go to <A href="/bangkok/areas/soi-11/">Soi 11</A> or <A href="/bangkok/areas/rca-thonglor/">Thonglor / RCA</A>.</li>
        </Bullets>
      </Section>
      <FaqList items={[
        { q: "Is Khao San worth a night if I am staying in Sukhumvit?", a: "Only if you also want the old town or Rajadamnern. Otherwise the crossing time is better spent on Soi 11." },
        { q: "Where is the live music?", a: "Off the main kerb: Buddy complex rooms and Soi Rambuttri bars. Line-ups change. Check the door that night." },
        { q: "Is it only backpackers?", a: "The strip is tourist-heavy. Live-music rooms pull more locals. Dress is casual everywhere." },
        { q: "How much does a night on Khao San Road cost?", a: "About 800–1,200 THB per person for a full night. Local beer is about 80–150 THB, and buckets are about 250–350 THB. Checked October 2026; confirm on the night." },
        { q: "How much is a hostel dorm bed near Khao San Road?", a: "About 250–400 THB. Checked October 2026; confirm on the night." },
        { q: "How much is a beer on Khao San Road?", a: "Usually around 80–150 THB for a local beer on the street or in a bar on the strip." },
        { q: "What time does Khao San Road get busy?", a: "It usually peaks after 22:00 and is loudest on Friday and Saturday. Soi Rambuttri gets going earlier and stays calmer." },
        { q: "Is Khao San Road safe at night?", a: "It is crowded rather than dangerous. Keep your bag zipped on the strip and watch ATM fees and friendly bar tabs, which is where people overpay." },
      ]} />
      <Related links={[{ href: "/bangkok/", label: "Bangkok" }, { href: "/bangkok/muay-thai/", label: "Muay Thai" }, { href: "/bangkok/areas/", label: "Other Bangkok areas" }, { href: "/bangkok/getting-around/", label: "Getting around" }]} />
    </PageShell>
  );
}
