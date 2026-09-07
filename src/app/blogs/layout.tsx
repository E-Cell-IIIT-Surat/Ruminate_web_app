import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | Ruminate — E-Cell IIIT Surat",
  description: "Read field notes and stories from Ruminate events, industry visits and entrepreneurial experiences.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) { return children; }
