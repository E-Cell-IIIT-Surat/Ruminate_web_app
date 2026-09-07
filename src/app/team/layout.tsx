import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Ruminate — E-Cell IIIT Surat",
  description: "Meet the faculty mentors and student leaders building Ruminate's entrepreneurship ecosystem at IIIT Surat.",
  alternates: { canonical: "/team" },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) { return children; }
