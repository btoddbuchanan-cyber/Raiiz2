import type { Metadata } from "next";
import { PlatformContent } from "./PlatformContent";

export const metadata: Metadata = {
  title: "AI Construction Platform — Intelligent Workflows",
  description:
    "RAIIZ platform — the agentic interface connecting architects, engineers, government incentives, and production-line logic into AI-optimized workflows.",
};

export default function PlatformPage() {
  return <PlatformContent />;
}
