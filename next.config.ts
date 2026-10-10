import type { NextConfig } from "next";

// Domain migration (Oct 2026): the guide takes thainight.co; the old Agoda stay
// planner moves to plan.thainight.co. These redirects switch on only when the
// production build has NEXT_PUBLIC_SITE_URL=https://thainight.co, so preview
// builds and the vercel.app URL behave as before until the move is done.
const ROOT = "https://thainight.co";
const PLANNER = "https://plan.thainight.co";
const onRootDomain = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") === ROOT;

type Redirect = { source: string; destination: string; permanent: boolean; has?: { type: "host"; value: string }[] };

const migrationRedirects: Redirect[] = onRootDomain
  ? [
      // One canonical host: old Vercel URL and www go to the root domain.
      { source: "/:path*", has: [{ type: "host", value: "thainight-co.vercel.app" }], destination: `${ROOT}/:path*`, permanent: true },
      { source: "/:path*", has: [{ type: "host", value: "www.thainight.co" }], destination: `${ROOT}/:path*`, permanent: true },
      // Planner routes keep working on the subdomain.
      ...["plan", "deals", "login", "privacy", "terms"].map((p) => ({
        source: `/${p}/:path*`,
        destination: `${PLANNER}/${p}/:path*`,
        permanent: false,
      })),
      { source: "/api/agoda/:path*", destination: `${PLANNER}/api/agoda/:path*`, permanent: false },
      // Planner city guides → the guide site's own pages.
      { source: "/guides/bangkok/:path*", destination: "/bangkok/hotels-nana-asok/", permanent: true },
      { source: "/guides/pattaya/:path*", destination: "/pattaya/hotels-walking-street/", permanent: true },
      { source: "/guides/chiang-mai/:path*", destination: "/chiang-mai/", permanent: true },
      { source: "/guides/phuket/:path*", destination: "/phuket/", permanent: true },
      { source: "/guides/koh-samui/:path*", destination: `${PLANNER}/guides/koh-samui`, permanent: false },
      { source: "/guides/", destination: "/", permanent: true },
    ]
  : [];

const nextConfig: NextConfig = {
  trailingSlash: true,
  cacheComponents: true,
  partialPrefetching: true,
  // Pages retired in the move away from adult-venue coverage. Permanent redirects
  // keep any existing links and bookmarks landing on the nearest useful hub.
  async redirects() {
    return [
      ...migrationRedirects,
      { source: "/bangkok/areas/soi-cowboy/:path*", destination: "/bangkok/areas/", permanent: true },
      { source: "/bangkok/areas/nana-plaza/:path*", destination: "/bangkok/areas/", permanent: true },
      { source: "/bangkok/cowboy-vs-nana/", destination: "/bangkok/areas/", permanent: true },
      { source: "/bangkok/hotels-soi-cowboy/", destination: "/bangkok/hotels-nana-asok/", permanent: true },
      { source: "/pattaya/areas/soi-6/", destination: "/pattaya/areas/", permanent: true },
      { source: "/pattaya/areas/lk-metro/", destination: "/pattaya/areas/", permanent: true },
      { source: "/pattaya/areas/walking-street/:venue(venues|windmill|sapphire)/", destination: "/pattaya/areas/walking-street/", permanent: true },
      { source: "/pattaya/walking-street-vs-soi-6/", destination: "/pattaya/areas/", permanent: true },
      { source: "/pattaya/tiffanys-show/", destination: "/pattaya/tiffany-show/", permanent: true },
      { source: "/pattaya/tiffanys-show/:path*", destination: "/pattaya/tiffany-show/", permanent: true },
      { source: "/bangkok/sky-bar-dress-code/", destination: "/bangkok/sky-bar/", permanent: true },
      { source: "/bangkok/sky-bar-dress-code/:path*", destination: "/bangkok/sky-bar/", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
