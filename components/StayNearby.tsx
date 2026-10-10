import type { ReactNode } from "react";
import { HotelCta } from "@/components/HotelCta";
import { affiliates, hasAffiliate, type AffiliateKey } from "@/lib/affiliates";

type StayNearbyProps = {
  label: string;
  link: AffiliateKey;
  children: ReactNode;
};

/** "Stay nearby" block. The whole section is hidden until its affiliate URL is set. */
export function StayNearby({ label, link, children }: StayNearbyProps) {
  if (!hasAffiliate(affiliates[link])) return null;
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground">Stay nearby</h2>
      {children}
      <div className="mt-3">
        <HotelCta label={label} link={link} />
      </div>
    </section>
  );
}
