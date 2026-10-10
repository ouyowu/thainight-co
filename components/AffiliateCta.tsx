import Link from "next/link";
import { hasAffiliate } from "@/lib/affiliates";

type AffiliateCtaProps = {
  href: string;
  label: string;
};

/** Renders nothing until a real affiliate URL is configured. */
export function AffiliateCta({ href, label }: AffiliateCtaProps) {
  if (!hasAffiliate(href)) return null;
  return (
    <>
      <a href={href} className="text-accent hover:underline" target="_blank" rel="sponsored noopener">
        {label}
      </a>{" "}
      <Link href="/affiliate-disclosure/" className="text-xs text-muted hover:text-accent">
        (affiliate link)
      </Link>
    </>
  );
}
