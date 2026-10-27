import type { Metadata } from "next";
const title = "Shalya — Surgical Workflow Intelligence";
const description = "Discover Shalya by TEIHSRA, a product vision for surgical workflow and operating theatre coordination.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/products/shalya" },
  openGraph: {
    title: `${title} | TEIHSRA`,
    description,
    url: "https://teihsra.com/products/shalya",
    siteName: "TEIHSRA Health Intelligence",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `${title} | TEIHSRA`, description },
};
export default function ProductLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
