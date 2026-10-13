import Link from "next/link";
import { breadcrumbsFor } from "@/lib/breadcrumbs";

export function Crumbs({ path }: { path: string }) {
  const crumbs = breadcrumbsFor(path);
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-zinc-500">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {crumbs.map((crumb, index) => {
          const href = new URL(crumb.url).pathname;
          const last = index === crumbs.length - 1;
          return (
            <li key={crumb.url} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden>/</span> : null}
              {last ? (
                <span className="text-foreground">{crumb.name}</span>
              ) : (
                <Link href={href} className="hover:text-accent">
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
