import type { Metadata } from "next";
import { InvestContent } from "./InvestContent";

export const metadata: Metadata = {
  title: "Investment Opportunity — Subscribe Now",
  description:
    "Subscribe to invest in RAIIZ Innovations. Registered Eligible Business Corporation (EBC) with 30% BC provincial tax credit. Current round closing March 31, 2026.",
};

export default function InvestPage() {
  return <InvestContent />;
}
