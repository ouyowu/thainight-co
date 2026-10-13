import type { ReactNode } from "react";
import { ArticleExtras } from "@/components/site/ArticleExtras";
import { Crumbs } from "@/components/site/Crumbs";
import { GuideCard } from "@/components/site/GuideCard";
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
  const hub = isCityHub(path);

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

  const jsonLd = (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  );

  const copy = (
    <>
      {belowTitle}
      {lead ? <p className="mt-5 text-base leading-7 text-foreground">{lead}</p> : null}
      <div className="mt-6 space-y-6 text-base leading-7 text-foreground">{children}</div>
    </>
  );

  if (hub) {
    const cards = cityListingCards(path);
    return (
      <div>
        {jsonLd}
        <section className="border-b border-line bg-card">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <Crumbs path={path} />
            <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-pretty sm:text-5xl">{title}</h1>
            {showUpdated ? <p className="mt-3 text-sm text-muted">Last updated: {LAST_UPDATED}</p> : null}
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <p className="script-face text-center text-3xl text-accent">browse</p>
          <h2 className="text-center text-3xl font-bold tracking-tight">Guides in this city</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((guide) => (
              <GuideCard key={guide.href} guide={guide} />
            ))}
          </div>
        </section>
        <article className="mx-auto w-full max-w-3xl px-4 pb-12 sm:px-6">{copy}</article>
        <ArticleExtras path={path} />
      </div>
    );
  }

  return (
    <div>
      {jsonLd}
      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <Crumbs path={path} />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-pretty sm:text-5xl">{title}</h1>
          {showUpdated ? <p className="mt-3 text-sm text-muted">Last updated: {LAST_UPDATED}</p> : null}
        </div>
      </section>
      <article className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">{copy}</article>
      <ArticleExtras path={path} />
    </div>
  );
}
