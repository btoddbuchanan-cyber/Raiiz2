import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About RAIIZ Innovations",
  description:
    "RAIIZ Innovations is the unifying AI platform aligning the $16.5T construction industry toward high-efficiency, low-impact buildings at affordable costs.",
};

export default function AboutPage() {
  return <AboutContent />;
}
