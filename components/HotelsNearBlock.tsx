import { AffiliateCta } from "@/components/AffiliateCta";
import { hasAffiliate } from "@/lib/affiliates";

type HotelsNearBlockProps = {
  href: string;
  cta: string;
};

export function HotelsNearBlock({ href, cta }: HotelsNearBlockProps) {
  if (!hasAffiliate(href)) return null;
  return (
    <section>
      <p>Staying nearby makes the night simpler.</p>
      <p className="mt-3">
        <AffiliateCta href={href} label={cta} />
      </p>
    </section>
  );
}
