import { AffiliateCta } from "@/components/AffiliateCta";

type StayNearbyBlockProps = {
  href: string;
  cta: string;
};

export function StayNearbyBlock({ href, cta }: StayNearbyBlockProps) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground">Where to stay nearby</h2>
      <p className="mt-2">If you want to be close to the main nightlife areas, these locations are practical:</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>
          Near BTS Nana or Asok (Bangkok) — short walk or quick ride to Soi Cowboy and Nana Plaza
        </li>
        <li>Near Walking Street or Central Pattaya — easy access to the main strips</li>
      </ul>
      <p className="mt-3">
        → <AffiliateCta href={href} label={cta} />
      </p>
    </section>
  );
}
