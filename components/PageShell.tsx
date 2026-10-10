import type { ReactNode } from "react";
import { LAST_UPDATED } from "@/lib/site";

type PageShellProps = {
  title: string;
  children: ReactNode;
  showUpdated?: boolean;
  lead?: string;
};

export function PageShell({ title, children, showUpdated = true, lead }: PageShellProps) {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-8 sm:py-10">
      <h1 className="text-2xl font-semibold tracking-tight text-pretty sm:text-3xl">{title}</h1>
      {showUpdated ? (
        <p className="mt-2 text-sm text-muted">Last updated: {LAST_UPDATED}</p>
      ) : null}
      {lead ? <p className="mt-5 text-base leading-7 text-zinc-200">{lead}</p> : null}
      <div className="mt-6 space-y-6 text-base leading-7 text-zinc-200">{children}</div>
    </article>
  );
}
