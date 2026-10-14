"use client";

import Script from "next/script";
import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim();

type Gtag = (...args: unknown[]) => void;

function partnerFrom(hostname: string): string {
  const host = hostname.replace(/^www\./, "");
  const known = ["agoda", "klook", "getyourguide", "viator", "12go", "airalo"];
  return known.find((name) => host.includes(name)) ?? host;
}

/** GA4 page views plus one `affiliate_click` event for every rel="sponsored" link. Off when NEXT_PUBLIC_GA_ID is unset. */
export function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;
    function onClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest?.('a[rel~="sponsored"]');
      if (!(link instanceof HTMLAnchorElement)) return;
      const gtag = (window as unknown as { gtag?: Gtag }).gtag;
      if (!gtag) return;
      const url = new URL(link.href);
      gtag("event", "affiliate_click", {
        partner: partnerFrom(url.hostname),
        link_domain: url.hostname,
        link_text: link.textContent?.trim().slice(0, 100),
        page_path: window.location.pathname,
        transport_type: "beacon",
      });
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!GA_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
