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
        </nav>
      </div>
    </header>
  );
}
