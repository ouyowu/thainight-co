import Link from "next/link";
import { navLinks } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="shrink-0 text-sm font-semibold tracking-wide text-foreground">
          Thai Night
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-zinc-200 hover:text-accent">
              {link.label}
            </Link>
          ))}
          <details className="relative">
            <summary className="cursor-pointer list-none text-zinc-200 hover:text-accent [&::-webkit-details-marker]:hidden">
              Tonight
            </summary>
            <div className="absolute right-0 z-50 mt-2 min-w-32 rounded-lg border border-line bg-card py-1 shadow-lg">
              <Link
                href="/bangkok/tonight/"
                className="block px-3 py-1.5 text-zinc-200 hover:bg-background hover:text-accent"
              >
                Bangkok
              </Link>
              <Link
                href="/pattaya/tonight/"
                className="block px-3 py-1.5 text-zinc-200 hover:bg-background hover:text-accent"
              >
                Pattaya
              </Link>
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}
