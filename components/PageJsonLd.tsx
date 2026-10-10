import { SITE_NAME, SITE_URL } from "@/lib/site";

/** Segment labels for breadcrumbs; unknown segments fall back to Title Case. */
const LABELS: Record<string, string> = {
  bangkok: "Bangkok",
  pattaya: "Pattaya",
  "chiang-mai": "Chiang Mai",
  areas: "Areas",
};

function label(segment: string) {
  return LABELS[segment] ?? segment.split("-").map((w) => w[0]?.toUpperCase() + w.slice(1)).join(" ");
}

type PageJsonLdProps = {
  path: string;
  title: string;
  /** ISO date the content was last reviewed. */
  dateModified: string;
};

/** Article + BreadcrumbList structured data for a guide page. */
export function PageJsonLd({ path, title, dateModified }: PageJsonLdProps) {
  const url = `${SITE_URL}${path}`;
  const segments = path.split("/").filter(Boolean);
  const crumbs = [
    { name: SITE_NAME, url: `${SITE_URL}/` },
    ...segments.map((segment, i) => ({
      name: i === segments.length - 1 ? title : label(segment),
      url: `${SITE_URL}/${segments.slice(0, i + 1).join("/")}/`,
    })),
  ];

  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      url,
      mainEntityOfPage: url,
      dateModified,
      inLanguage: "en",
      publisher: { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    },
  ];

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
