import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Summit | Ruminate — E-Cell IIIT Surat",
  description: "Ruminate's flagship entrepreneurship summit at IIIT Surat, bringing together ideas, leadership and execution.",
  alternates: { canonical: "/esummit" },
};

export default function ESummitLayout({ children }: { children: React.ReactNode }) { return children; }
