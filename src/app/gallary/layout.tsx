import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Ruminate — E-Cell IIIT Surat",
  description: "Explore moments from Ruminate events, visits and entrepreneurship programs at IIIT Surat.",
  alternates: { canonical: "/gallary" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) { return children; }
