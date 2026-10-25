import type { Metadata } from "next";
const title = "Anvaya — AI-Assisted Clinical Documentation";
const description = "Clinical notes, ward rounds, operative documentation and hospital discharge summaries from Anvaya by TEIHSRA.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/products/anvaya" },
  openGraph: {
    title: `${title} | TEIHSRA`,
    description,
    url: "https://teihsra.com/products/anvaya",
    siteName: "TEIHSRA Health Intelligence",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `${title} | TEIHSRA`, description },
};
export default function ProductLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
