import type { Metadata } from "next";
import { InvestorsContent } from "./InvestorsContent";

export const metadata: Metadata = {
  title: "Investor Hub — Tax Credits & Shareholder Benefits",
  description:
    "Invest in RAIIZ Innovations — BC investors eligible for 30% provincial tax credit. Registered Eligible Business Corporation (EBC).",
};

export default function InvestorsPage() {
  return <InvestorsContent />;
}
