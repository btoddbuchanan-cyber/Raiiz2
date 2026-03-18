import type { Metadata } from "next";
import { NewsContent } from "./NewsContent";

export const metadata: Metadata = {
  title: "Press Releases & News",
  description:
    "Latest press releases and news from RAIIZ Innovations — partnerships, acquisitions, and industry updates.",
};

export default function NewsPage() {
  return <NewsContent />;
}
