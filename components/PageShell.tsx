import type { ReactNode } from "react";
import { CityGrid } from "@/components/site/CityGrid";
import { GuideSidebar } from "@/components/site/GuideSidebar";
import { PageTitle } from "@/components/site/PageTitle";
import { RelatedPosts } from "@/components/site/RelatedPosts";
import { cityListingCards, isCityHub } from "@/lib/city-listings";
import { breadcrumbsFor } from "@/lib/breadcrumbs";
import { lastModifiedIso } from "@/lib/dates";
import { LAST_UPDATED, SITE_NAME, SITE_URL } from "@/lib/site";

type PageShellProps = {
  title: string;
  path: string;
  children: ReactNode;
  showUpdated?: boolean;
  lead?: string;
  /** Direct-answer paragraph under the H1, before cards and the existing lead. */
  opening?: string;
  belowTitle?: ReactNode;
};

export function PageShell({
  title,
  path,
  children,
  showUpdated = true,
  lead,
  opening,
  belowTitle,
}: PageShellProps) {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  const dateModified = lastModifiedIso(path);
  const crumbs = breadcrumbsFor(path);
  const hub = isCityHub(path);
  const updated = showUpdated ? LAST_UPDATED : undefined;

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

  const openingEl = opening ? (
    <p className="text-base leading-7 text-foreground">{opening}</p>
  ) : null;

  const copy = (
    <>
      {belowTitle}
      {lead ? <p className="text-base leading-7 text-foreground">{lead}</p> : null}
      <div className="space-y-6 text-base leading-7 text-foreground">{children}</div>
    </>
  );

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <PageTitle path={path} title={title} updated={updated} />
      {hub ? (
        <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-12 px-4 py-14 sm:px-6 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-8">
            {openingEl}
            <CityGrid cards={cityListingCards(path)} />
            <article className="mt-16 space-y-6 border-t border-line pt-12">{copy}</article>
          </div>
          <div className="lg:col-span-4">
            <GuideSidebar path={path} />
          </div>
        </div>
      ) : (
        <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-12 px-4 py-14 sm:px-6 lg:grid-cols-12">
          <article className="min-w-0 space-y-6 lg:col-span-8">
            {openingEl}
            {copy}
            <RelatedPosts path={path} />
          </article>
          <div className="lg:col-span-4">
            <GuideSidebar path={path} />
          </div>
        </div>
      )}
    </div>
  );
}
