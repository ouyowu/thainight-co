import { AffiliateCta } from "@/components/AffiliateCta";
import { affiliates, hasAffiliate, type AffiliateKey } from "@/lib/affiliates";

type HotelCtaProps = {
  label: string;
  /** Which configured affiliate URL to use. */
  link: AffiliateKey;
};

/** Hotel search link. Hidden entirely until the affiliate URL env var is set. */
export function HotelCta({ label, link }: HotelCtaProps) {
  const href = affiliates[link];
  if (!hasAffiliate(href)) return null;
  return (
    <p>
      → <AffiliateCta href={href} label={label} />
    </p>
  );
}
