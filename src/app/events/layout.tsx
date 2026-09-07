import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Ruminate — E-Cell IIIT Surat",
  description: "Explore Ruminate workshops, industry visits, founder conversations and flagship entrepreneurship experiences at IIIT Surat.",
  alternates: { canonical: "/events" },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) { return children; }
