import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UDHBHAV | Ruminate – E-Cell IIIT Surat",
  description:
    "Learn about UDHBHAV, Ruminate’s recurring idea-to-impact initiative for student innovators.",
  alternates: { canonical: "/events/abhyudaya" },
  openGraph: {
    title: "UDHBHAV | Ruminate – E-Cell IIIT Surat",
    description: "Ideate • Innovate • Elevate. Turn promising ideas into meaningful impact.",
    url: "/events/abhyudaya",
    type: "website",
    images: [
      {
        url: "/events/abhyudaya/poster.png",
        width: 1024,
        height: 1536,
        alt: "UDHBHAV event poster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UDHBHAV | Ruminate – E-Cell IIIT Surat",
    description: "Explore the UDHBHAV journey and visit the official portal to participate.",
    images: ["/events/abhyudaya/poster.png"],
  },
};

export default function AbhyudayaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
