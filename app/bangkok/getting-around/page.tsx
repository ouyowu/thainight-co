import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Getting Around Bangkok Nightlife 2026",
  "BTS Nana and Asok, walk vs Grab/Bolt late at night, and why random taxis are a bad default.",
  "/bangkok/getting-around/",
);

export default function BangkokGettingAroundPage() {
  return (
    <PageShell title="Getting Around Bangkok Nightlife 2026">
      <p>
        For Cowboy and Nana Plaza you stay on the Sukhumvit corridor. BTS Nana and BTS Asok are the
        two stops that matter. Walk when the hop is short. After midnight, use Grab or Bolt — not a
        random taxi on the curb.
      </p>
      <section>
        <h2 className="text-lg font-semibold text-foreground">BTS Nana and Asok</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <Link href="/bangkok/areas/nana-plaza/" className="text-accent hover:underline">
              Nana Plaza
            </Link>{" "}
            is on Sukhumvit Soi 4. BTS Nana, Exit 2 or 4 — about a 2–3 minute walk.
          </li>
          <li>
            <Link href="/bangkok/areas/soi-cowboy/" className="text-accent hover:underline">
              Soi Cowboy
            </Link>{" "}
            sits between Sukhumvit Soi 21 and Soi 23. Nearest BTS is Asok (very short walk). MRT
            Sukhumvit dumps you at the same junction.
          </li>
          <li>
            Asok / Terminal 21 is also an easy hop to Nana Plaza if you do not want to walk Soi 4.
          </li>
          <li>
            Stay near Nana or Asok and you walk or take a 5–10 minute ride to both strips. Area
            notes:{" "}
            <Link href="/bangkok/hotels-nana-asok/" className="text-accent hover:underline">
              Nana & Asok
            </Link>
            .
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Walk vs Grab/Bolt</h2>
        <p className="mt-2">
          Cowboy to Nana is one cluster. Many people walk or take a short taxi between them on a
          first night. That is fine while the street is busy and you are sober enough to stay on
          Sukhumvit.
        </p>
        <p className="mt-2">
          Late return: Grab or Bolt. Don’t haggle random taxis on Sukhumvit at 02:00. Same rule on{" "}
          <Link href="/safety/" className="text-accent hover:underline">
            Safety
          </Link>
          : prefer Grab or Bolt over random taxis and tuk-tuks late at night.
        </p>
        <p className="mt-2">
          Meter “broken” or a fixed high price is a known pattern. Use the app, or insist on the
          meter. See{" "}
          <Link href="/scams/" className="text-accent hover:underline">
            Scams
          </Link>
          .
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">Don’t use random taxis</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>App pickup from Asok, Nana, or Sukhumvit — not a tout at the soi mouth.</li>
          <li>Patpong / Silom is a different night. Grab/Bolt back to Sukhumvit if that’s your hotel.</li>
          <li>RCA has no direct BTS into the strip. That’s MRT plus a short Grab — skip it as a first-night add-on.</li>
        </ul>
      </section>
      <p>
        Related:{" "}
        <Link href="/bangkok/first-timer/" className="text-accent hover:underline">
          First-timer
        </Link>
        ,{" "}
        <Link href="/bangkok/faq/" className="text-accent hover:underline">
          FAQ
        </Link>
        ,{" "}
        <Link href="/cash/" className="text-accent hover:underline">
          Cash
        </Link>
      </p>
    </PageShell>
  );
}
