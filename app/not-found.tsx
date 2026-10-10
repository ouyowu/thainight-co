import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="mt-3 text-zinc-200">
        That URL is not in the guide. Use the links below or the top nav.
      </p>
      <p className="mt-6 flex flex-wrap gap-4">
        <Link href="/" className="text-accent hover:underline">
          Home
        </Link>
        <Link href="/bangkok/" className="text-accent hover:underline">
          Bangkok
        </Link>
        <Link href="/pattaya/" className="text-accent hover:underline">
          Pattaya
        </Link>
        <Link href="/scams/" className="text-accent hover:underline">
          Scams
        </Link>
        <Link href="/prices/" className="text-accent hover:underline">
          Prices
        </Link>
      </p>
    </div>
  );
}
