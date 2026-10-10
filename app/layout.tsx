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
    default: "Thai Night – Practical Nightlife Guides for Bangkok & Pattaya",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Real prices, real areas, real scams — updated for 2026. Free nightlife guides for Bangkok and Pattaya.",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    locale: "en_US",
    title: "Thai Night – Practical Nightlife Guides for Bangkok & Pattaya",
    description:
      "Real prices, real areas, real scams — updated for 2026. Free nightlife guides for Bangkok and Pattaya.",
  },
  twitter: {
    card: "summary",
    title: "Thai Night – Practical Nightlife Guides for Bangkok & Pattaya",
    description:
      "Real prices, real areas, real scams — updated for 2026. Free nightlife guides for Bangkok and Pattaya.",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
