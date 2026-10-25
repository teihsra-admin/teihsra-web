import type { MetadataRoute } from "next";
const base = "https://teihsra.com";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/products/anvaya`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/products/shalya`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/nukta`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/reva`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
