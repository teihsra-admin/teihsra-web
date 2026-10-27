import type { Metadata } from "next";
const title = "Reva — Patient Guidance and Care Continuity";
const description = "Explore Reva by TEIHSRA, a patient guidance and care continuity product concept.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/products/reva" },
  openGraph: {
    title: `${title} | TEIHSRA`,
    description,
    url: "https://teihsra.com/products/reva",
    siteName: "TEIHSRA Health Intelligence",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `${title} | TEIHSRA`, description },
};
export default function ProductLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
