import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "RAIIZ Innovations | AI-Powered Construction Platform",
  description: "RAIIZ connects you with vetted professionals, government incentives, and science-backed building guidance. Join 200K+ members transforming construction.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <HomeContent />;
}
