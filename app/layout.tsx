import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Thai Night – Bangkok, Pattaya & Chiang Mai Nightlife Guides 2026",
    template: "%s",
  },
  description:
    "Practical nightlife guides for Bangkok, Pattaya and Chiang Mai. Real 2026 prices, area comparisons, first-timer tips and common scams.",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    locale: "en_US",
    title: "Thai Night – Bangkok, Pattaya & Chiang Mai Nightlife Guides 2026",
    description:
      "Practical nightlife guides for Bangkok, Pattaya and Chiang Mai. Real 2026 prices, area comparisons, first-timer tips and common scams.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thai Night – Bangkok, Pattaya & Chiang Mai Nightlife Guides 2026",
    description:
      "Practical nightlife guides for Bangkok, Pattaya and Chiang Mai. Real 2026 prices, area comparisons, first-timer tips and common scams.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SITE_NAME,
              url: `${SITE_URL}/`,
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
