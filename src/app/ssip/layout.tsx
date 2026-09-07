import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSIP | Ruminate — E-Cell IIIT Surat",
  description: "Student Startup and Innovation Policy information and selected proposals at IIIT Surat.",
  alternates: { canonical: "/ssip" },
};

export default function SsipLayout({ children }: { children: React.ReactNode }) { return children; }
