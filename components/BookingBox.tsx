import { AffiliateCta } from "@/components/AffiliateCta";
import { affiliates, hasAffiliate, type AffiliateKey } from "@/lib/affiliates";

type BookingBoxProps = {
  title?: string;
  items: { label: string; link: AffiliateKey }[];
};

/**
 * Compact "book ahead" box. Only configured affiliate links are shown;
 * if none are configured the whole box is hidden.
 */
export function BookingBox({ title = "Book ahead", items }: BookingBoxProps) {
  const live = items.filter((item) => hasAffiliate(affiliates[item.link]));
  if (live.length === 0) return null;
  return (
    <aside className="rounded-lg border border-accent/40 bg-accent/5 p-4">
      <h2 className="text-base font-semibold text-foreground">{title}</h2>
      <ul className="mt-2 space-y-1">
        {live.map((item) => (
          <li key={item.link}>
            → <AffiliateCta href={affiliates[item.link]} label={item.label} />
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-muted">Prices and availability are confirmed on the booking page.</p>
    </aside>
  );
}
