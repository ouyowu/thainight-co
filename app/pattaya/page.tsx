import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Pattaya Nightlife Guide",
  "Walking Street, Soi 6, and LK Metro — what each area costs and which one to do first.",
  "/pattaya/",
);

export default function PattayaPage() {
  return (
    <PageShell
      title="Pattaya Nightlife"
      lead="Pattaya splits cleaner than Bangkok. Walking Street is the neon spectacle. Soi 6 is cheaper, faster, and more direct. LK Metro sits in the middle with live music and a calmer go-go floor."
    >
      <ul className="grid gap-2 sm:grid-cols-2">
        {[
          ["/pattaya/first-timer/", "First-Timer Guide"],
          ["/pattaya/areas/", "Areas"],
          ["/pattaya/prices/", "Prices"],
          ["/pattaya/tonight/", "Tonight"],
        ].map(([href, label]) => (
          <li key={href}>
            <Link
              href={href}
              className="block rounded-lg border border-line bg-card px-4 py-3 font-medium hover:border-accent hover:text-accent"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <p>
        Many people do Walking Street one night and Soi 6 the next. Eat dinner first. Walk the
        street before you sit. Decide early how much you are willing to spend. Keep small bills
        (100s and 50s).
      </p>
      <p>
        Jet-ski damage scams happen on the main beach. That is not nightlife, but it is a Pattaya
        classic. Avoid renting jet-skis there, or photograph everything first. Tourist Police: 1155.
      </p>
    </PageShell>
  );
}
