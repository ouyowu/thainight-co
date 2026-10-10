type AffiliateCtaProps = {
  href: string;
  label: string;
};

export function AffiliateCta({ href, label }: AffiliateCtaProps) {
  return (
    <a href={href} className="text-accent hover:underline" target="_blank" rel="sponsored noopener">
      {label}
    </a>
  );
}
