import Link from "next/link";
import { AreaSketch } from "@/components/AreaSketch";
import { HotelCta } from "@/components/HotelCta";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Where to Stay Near Soi Cowboy 2026",
  "Where to sleep for a Soi Cowboy night: BTS Asok, Sukhumvit Soi 21–23, or one block off the strip.",
  "/bangkok/hotels-soi-cowboy/",
);

export default function HotelsSoiCowboyPage() {
  return (
    <PageShell title="Where to Stay Near Soi Cowboy 2026">
      <p>
        Soi Cowboy is one open-air lane, about 150 metres, between Sukhumvit Soi 21 and Soi 23.
        The useful hotel question is: Asok, the 21–23 sois, or one block off the strip.
      </p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">The block</h2>
        <div className="mt-3">
          <AreaSketch
            caption="Schematic: Soi Cowboy between Sukhumvit Soi 21 and 23, Asok / MRT on the west side."
            items={[
              { label: "BTS Asok", note: "Shortest walk", accent: true },
              { label: "MRT Sukhumvit", note: "Same junction" },
              { label: "Soi 21", note: "Asok side" },
              { label: "Soi Cowboy", note: "~150 m lane", accent: true },
              { label: "Soi 23", note: "East end" },
              { label: "One block off", note: "Quieter sleep" },
            ]}
          />
        </div>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>
            Nearest BTS: <strong>Asok</strong>. Very short walk to the strip. See{" "}
            <Link href="/bangkok/areas/soi-cowboy/" className="text-accent hover:underline">
              Soi Cowboy
            </Link>
            .
          </li>
          <li>MRT Sukhumvit dumps you at the same junction if you are coming from the subway.</li>
          <li>
            Nana Plaza is still in the same cluster — Soi 4, BTS Nana — if you move later. Don’t
            change hotels for that.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Asok vs Soi 21–23 vs one block off</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <strong>Asok / Terminal 21 side.</strong> Fastest BTS, food, 7-Eleven, Grab pickup that
            isn’t in the middle of the lane. Best default if you also want Nana on another night.
          </li>
          <li>
            <strong>On or just off Soi 21–23.</strong> Shortest walk to Cowboy. More street noise,
            more late foot traffic. Fine if you treat the room as a landing pad, not a quiet stay.
          </li>
          <li>
            <strong>One block off the strip.</strong> Same Asok stop, less neon in the window. Still
            walkable. Prefer this if Cowboy closes around 02:00 and you want the room dark after
            that.
          </li>
        </ul>
        <p className="mt-3">
          Do not book “next to Cowboy” as a flex. The lane is short. A room 400 metres off is still
          the same night.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Stay types</h2>
        <p className="mt-2">
          Types only. Example of type: a mid-range 3-star with a 24-hour desk on Soi 21. Not a
          named property, not a price.
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Walkable mid hotel near Asok — default.</li>
          <li>Smaller soi hotel on 21 or 23 — closer, louder.</li>
          <li>One-block-off hotel or serviced room — sleep first, walk second.</li>
        </ul>
        <p className="mt-3">
          If you might bring someone back, confirm the hotel’s guest policy before you pay the bar
          fine. House rules are not standard across this block.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Practical</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Peak on Cowboy is roughly 21:00–01:00; most venues wind down near 02:00.</li>
          <li>Grab/Bolt from Asok or Sukhumvit. Don’t wander looking for a “cheap” taxi.</li>
          <li>
            Full Nana + Cowboy stay notes:{" "}
            <Link href="/bangkok/hotels-nana-asok/" className="text-accent hover:underline">
              Nana & Asok
            </Link>
            .
          </li>
        </ul>
      </section>

      <p>
        Related:{" "}
        <Link href="/bangkok/first-timer/" className="text-accent hover:underline">
          First-timer
        </Link>
        ,{" "}
        <Link href="/bangkok/cowboy-vs-nana/" className="text-accent hover:underline">
          Cowboy vs Nana
        </Link>
        ,{" "}
        <Link href="/prices/" className="text-accent hover:underline">
          Prices
        </Link>
      </p>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Stay nearby</h2>
        <p className="mt-2">Filter Asok / Soi 21–23. One search. Confirm the walk, not the brand.</p>
        <div className="mt-3">
          <HotelCta label="Check hotels near Soi Cowboy / Asok" />
        </div>
      </section>
    </PageShell>
  );
}
