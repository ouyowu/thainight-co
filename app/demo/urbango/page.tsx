import type { Metadata } from "next";
import { UrbanGoDemo } from "@/components/demo/UrbanGoDemo";

export const metadata: Metadata = {
  title: "Thai Night directory demo",
  description:
    "Visual demo of a directory homepage. Cards link to existing Thai Night nightlife guides for Bangkok, Pattaya, Phuket and Chiang Mai.",
  robots: { index: false, follow: false },
};

export default function UrbanGoDemoPage() {
  return <UrbanGoDemo />;
}
