import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Sukhumvit Soi 11 Guide",
  "Sukhumvit Soi 11 is a bar and club street near BTS Nana and Asok. Different energy from Soi Cowboy and Nana Plaza.",
  "/bangkok/areas/soi-11/",
);

export default function Soi11Page() {
  return (
    <PageShell
      title="Soi 11"
      lead="Sukhumvit Soi 11 is a bar and club street near BTS Nana and Asok. Different energy from Soi Cowboy and Nana Plaza. Use it as a drink-and-club add-on, not as your first go-go night."
    >
      <p>
        You stay near Nana or Asok for Cowboy and Nana Plaza. Soi 11 is in the same pocket: walkable
        or a 5–10 minute ride. Clubs, cocktail bars, and late food sit here. Prices are venue-by-venue
        and usually higher than a Cowboy beer.
      </p>
      <p>
        This is not the street for a first-timer who wants the classic Bangkok go-go layout. For
        that, start on Soi Cowboy. If you want more variety and bigger shows, go to Nana Plaza.
      </p>
      <p>
        Same city rules still apply: do not follow touts, keep your phone and wallet secure, and use
        Grab or Bolt late at night.
      </p>
      <p>
        <Link href="/bangkok/areas/" className="text-accent hover:underline">
          All Bangkok areas
        </Link>
      </p>
    </PageShell>
  );
}
