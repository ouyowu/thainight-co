import type { ReactNode } from "react";
import { breadcrumbsFor } from "@/lib/breadcrumbs";
import { lastModifiedIso } from "@/lib/dates";
import { LAST_UPDATED, SITE_NAME, SITE_URL } from "@/lib/site";

type PageShellProps = {
  title: string;
  path: string;
  children: ReactNode;
  showUpdated?: boolean;
  lead?: string;
  belowTitle?: ReactNode;
};

export function PageShell({
  title,
  path,
  children,
  showUpdated = true,
  lead,
  belowTitle,
}: PageShellProps) {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  const dateModified = lastModifiedIso(path);
  const crumbs = breadcrumbsFor(path);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    dateModified,
    url,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-8 sm:py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <h1 className="text-2xl font-semibold tracking-tight text-pretty sm:text-3xl">{title}</h1>
      {belowTitle}
      {showUpdated ? (
        <p className="mt-2 text-sm text-muted">Last updated: {LAST_UPDATED}</p>
      ) : null}
      {lead ? <p className="mt-5 text-base leading-7 text-zinc-200">{lead}</p> : null}
      <div className="mt-6 space-y-6 text-base leading-7 text-zinc-200">{children}</div>
    </article>
  );
}
