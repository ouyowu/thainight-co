import type { Metadata } from "next";
import { ListeoDemo } from "@/components/demo/ListeoDemo";

export const metadata: Metadata = {
  title: "Thai Night listing demo",
  description:
    "Visual demo of a listing homepage. Cards link to existing Thai Night nightlife guides for Bangkok, Pattaya, Phuket and Chiang Mai.",
  robots: { index: false, follow: false },
};

export default function ListeoDemoPage() {
  return <ListeoDemo />;
}
