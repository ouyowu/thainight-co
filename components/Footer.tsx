import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-4 py-8 text-sm text-muted">
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <Link href="/bangkok/" className="hover:text-accent">
            Bangkok
          </Link>
          <Link href="/pattaya/" className="hover:text-accent">
            Pattaya
          </Link>
          <Link href="/prices/" className="hover:text-accent">
            Prices
          </Link>
          <Link href="/scams/" className="hover:text-accent">
            Scams
          </Link>
          <Link href="/bangkok/tonight/" className="hover:text-accent">
            Tonight Bangkok
          </Link>
          <Link href="/pattaya/tonight/" className="hover:text-accent">
            Tonight Pattaya
          </Link>
          <Link href="/about/" className="hover:text-accent">
            About
          </Link>
          <Link href="/disclaimer/" className="hover:text-accent">
            Disclaimer
          </Link>
        </p>
        <p>
          © Thai Night. For adults 18+. Information is for general guidance only and may change.
          Confirm prices and conditions locally. We are not responsible for third-party venues or
          services.
        </p>
      </div>
    </footer>
  );
}
