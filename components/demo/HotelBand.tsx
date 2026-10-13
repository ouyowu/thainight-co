import { HotelCta } from "@/components/HotelCta";
import type { AffiliateKey } from "@/lib/affiliates";
import { demoCities } from "@/lib/demo-guides";

const hotels: { city: (typeof demoCities)[number]; link: AffiliateKey; label: string; href: string }[] = [
  { city: "Bangkok", link: "hotelBangkok", label: "Search Bangkok hotels", href: "/bangkok/hotels-nana-asok/" },
  { city: "Pattaya", link: "hotelPattaya", label: "Search Pattaya hotels", href: "/pattaya/hotels-walking-street/" },
  { city: "Phuket", link: "hotelPhuket", label: "Search Phuket hotels", href: "/phuket/" },
  { city: "Chiang Mai", link: "hotelChiangMai", label: "Search Chiang Mai hotels", href: "/chiang-mai/" },
];

/** Existing Agoda city buttons (cid=1969005 via HotelCta). Dark band keeps the gold link readable. */
export function HotelBand({ id = "hotels" }: { id?: string }) {
  return (
    <section id={id} className="bg-[#14141c] text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Hotels in the four cities</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-300 sm:text-base">
          Agoda hotel search for Bangkok, Pattaya, Phuket and Chiang Mai. These open the same partner links used on the guide pages.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hotels.map((hotel) => (
            <div key={hotel.city} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-base font-semibold text-white">{hotel.city}</p>
              <div className="mt-2 text-sm leading-6">
                <HotelCta label={hotel.label} link={hotel.link} />
              </div>
              <a href={hotel.href} className="mt-2 inline-block text-sm text-zinc-300 underline underline-offset-2 hover:text-white">
                Where to stay guide
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
