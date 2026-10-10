import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  cacheComponents: true,
  partialPrefetching: true,
  // Pages retired in the move away from adult-venue coverage. Permanent redirects
  // keep any existing links and bookmarks landing on the nearest useful hub.
  async redirects() {
    return [
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
