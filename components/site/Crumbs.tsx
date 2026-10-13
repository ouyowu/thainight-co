import Link from "next/link";
import { breadcrumbsFor } from "@/lib/breadcrumbs";

export function Crumbs({ path, onDark = false }: { path: string; onDark?: boolean }) {
  const crumbs = breadcrumbsFor(path);
  const link = onDark ? "text-white/80 hover:text-white" : "text-zinc-500 hover:text-accent";
  const current = onDark ? "text-white" : "text-foreground";
  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${onDark ? "text-white/70" : "text-zinc-500"}`}>
      <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        {crumbs.map((crumb, index) => {
          const href = new URL(crumb.url).pathname;
          const last = index === crumbs.length - 1;
          return (
            <li key={crumb.url} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden>/</span> : null}
              {last ? (
                <span className={current}>{crumb.name}</span>
              ) : (
                <Link href={href} className={link}>
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
