import type { Metadata } from "next";
import { TeamContent } from "./TeamContent";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the RAIIZ Innovations team — seasoned industry professionals, innovators, and business experts revolutionizing sustainable building through technology.",
};

export default function TeamPage() {
  return <TeamContent />;
}
