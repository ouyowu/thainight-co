import { AffiliateCta } from "@/components/AffiliateCta";
import { affiliates, alternateSeller, hasAffiliate, type AffiliateKey } from "@/lib/affiliates";

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
        {live.map((item) => {
          const alt = alternateSeller[item.link];
          return (
            <li key={item.link}>
              → <AffiliateCta href={affiliates[item.link]} label={item.label} />
              {alt && hasAffiliate(alt.href) ? (
                <>
                  {" · "}
                  <a
                    href={alt.href}
                    className="text-xs text-muted hover:text-accent"
                    target="_blank"
                    rel="sponsored noopener"
                  >
                    compare on {alt.seller}
                  </a>
                </>
              ) : null}
            </li>
          );
        })}
      </ul>
      <p className="mt-2 text-xs text-muted">Prices and availability are confirmed on the booking page.</p>
    </aside>
  );
}
