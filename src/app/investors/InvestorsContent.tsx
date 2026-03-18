"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, TrendingUp, Shield, DollarSign } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCard } from "@/components/AnimatedCard";

const taxCreditTable = [
  { investment: "$10,000", credit: "$3,000", effective: "$7,000" },
  { investment: "$25,000", credit: "$7,500", effective: "$17,500" },
  { investment: "$50,000", credit: "$15,000", effective: "$35,000" },
  { investment: "$100,000", credit: "$30,000", effective: "$70,000" },
];

const highlights = [
  {
    icon: BadgeCheck,
    title: "EBC Certified",
    description: "Registered Eligible Business Corporation under BC's Small Business Venture Capital Act.",
  },
  {
    icon: DollarSign,
    title: "30% Tax Credit",
    description: "BC residents and corporations earn up to 30% provincial tax credit on their investment.",
  },
  {
    icon: TrendingUp,
    title: "$16.5T Market",
    description: "Targeting the massive global construction industry with a platform ready for commercial velocity.",
  },
  {
    icon: Shield,
    title: "6 Years Engineering",
    description: "Beyond technical validation with bootstrapped engineering proving the model at MVP status.",
  },
];

export function InvestorsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-primary" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              Investors
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Invest in the Future of{" "}
              <span className="gradient-text">Construction</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              RAIIZ Innovations is a registered Eligible Business Corporation
              (EBC). BC investors can earn up to 30% in provincial tax credits
              on their investment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <AnimatedCard key={h.title} index={i}>
                <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center mb-5">
                  <h.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-text-primary">
                  {h.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {h.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Tax credit table */}
      <section id="tax-credit" className="py-24 lg:py-32 bg-bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="BC Tax Credit"
            title="Effective Investment Cost"
            description="See how the 30% BC provincial tax credit reduces your effective investment cost."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border-subtle overflow-hidden"
          >
            <table className="w-full" role="table">
              <thead>
                <tr className="bg-bg-tertiary">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-text-primary">
                    Investment Amount
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-accent">
                    30% BC Tax Credit
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-text-primary">
                    Effective Net Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {taxCreditTable.map((row, i) => (
                  <tr
                    key={row.investment}
                    className={`border-t border-border-subtle ${
                      i % 2 === 0 ? "bg-bg-secondary/40" : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-sm text-text-primary font-medium">
                      {row.investment}
                    </td>
                    <td className="px-6 py-4 text-sm text-accent font-medium">
                      {row.credit}
                    </td>
                    <td className="px-6 py-4 text-sm text-text-primary">
                      {row.effective}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Invest?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Connect with our investor relations team to learn more about the
              opportunity and request the investor deck.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-bg-primary font-semibold rounded-xl hover:bg-accent-hover transition-colors"
              >
                Request Investor Deck
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/webinar"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border-subtle text-text-primary font-medium rounded-xl hover:bg-white/5 transition-colors"
              >
                Register for Webinar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 border-t border-border-subtle">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-text-secondary/70 leading-relaxed">
            This page is for information purposes only and does not constitute
            an offer to sell or solicitation to buy securities. Forward-looking
            statements involve risks and uncertainties. Prospective investors are
            urged to conduct independent investigation. All amounts in Canadian
            dollars unless stated otherwise.
          </p>
        </div>
      </section>
    </>
  );
}
