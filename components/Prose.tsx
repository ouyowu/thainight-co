import type { ReactNode } from "react";
import Link from "next/link";

/** Small building blocks so guide pages stay readable as content, not markup. */

export function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-accent hover:underline">
      {children}
    </Link>
  );
}

export function Section({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 id={id} className="text-lg font-semibold text-foreground">
        {title}
      </h2>
      <div className="mt-2 space-y-3">{children}</div>
    </section>
  );
}

export function Bullets({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-1 pl-5">{children}</ul>;
}

export type GuideLink = { href: string; label: string };

/** Inline "Related: a, b, c" line. */
export function Related({ links }: { links: GuideLink[] }) {
  return (
    <p>
      Related:{" "}
      {links.map((link, i) => (
        <span key={link.href}>
          {i > 0 ? ", " : null}
          <A href={link.href}>{link.label}</A>
        </span>
      ))}
    </p>
  );
}

/** Vertical list of guide links. */
export function LinkList({ links }: { links: readonly GuideLink[] }) {
  return (
    <ul className="space-y-1">
      {links.map((link) => (
        <li key={link.href}>
          <A href={link.href}>{link.label}</A>
        </li>
      ))}
    </ul>
  );
}

/** Shown near price tables so readers know how fresh the numbers are. */
export function CheckedNote({ what = "Prices" }: { what?: string }) {
  return (
    <p className="text-sm text-muted">
      {what} checked October 2026 against operator pages, booking platforms and recent visitor
      reports. They change — confirm before you pay.
    </p>
  );
}
