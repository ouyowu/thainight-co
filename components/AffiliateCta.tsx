type AffiliateCtaProps = {
  href: string;
  label: string;
};

export function AffiliateCta({ href, label }: AffiliateCtaProps) {
  const isLive = href !== "#";
  return (
    <a
      href={href}
      className="text-accent hover:underline"
      {...(isLive
        ? { target: "_blank", rel: "nofollow sponsored noopener noreferrer" }
        : {})}
    >
      {label}
    </a>
  );
}
