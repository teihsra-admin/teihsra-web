import type { Metadata } from "next";
const title = "Nukta — Personal Surgical Intelligence";
const description = "Discover Nukta by TEIHSRA, a personal surgical logbook and reflective case-learning experience.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/products/nukta" },
  openGraph: {
    title: `${title} | TEIHSRA`,
    description,
    url: "https://teihsra.com/products/nukta",
    siteName: "TEIHSRA Health Intelligence",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `${title} | TEIHSRA`, description },
};
export default function ProductLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
