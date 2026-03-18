import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://raiiz2.vercel.app";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/platform`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/team`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/news`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/investors`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/webinar`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
