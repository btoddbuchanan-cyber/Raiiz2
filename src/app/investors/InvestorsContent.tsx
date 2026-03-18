"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  TrendingUp,
  Shield,
  DollarSign,
  Users,
  Eye,
  Globe,
  Zap,
  BarChart3,
  Building2,
  Calendar,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCard } from "@/components/AnimatedCard";

/* ── Data ─────────────────────────────────────── */

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
    description:
      "Registered Eligible Business Corporation under BC's Small Business Venture Capital Act.",
  },
  {
    icon: DollarSign,
    title: "30% Tax Credit",
    description:
      "BC residents and corporations earn up to 30% provincial tax credit on their investment.",
  },
  {
    icon: TrendingUp,
    title: "$16.5T Market",
    description:
      "Targeting the massive global construction industry with a platform ready for commercial velocity.",
  },
  {
    icon: Shield,
    title: "6 Years Engineering",
    description:
      "Beyond technical validation with bootstrapped engineering proving the model at MVP status.",
  },
];

const platformTraction = [
  { icon: Globe, value: "$12T+", label: "Market growing to $15T by 2030" },
  { icon: Users, value: "2.8M", label: "Active users in the last 12 months" },
  { icon: Eye, value: "6M+", label: "Page views organically acquired" },
  { icon: Zap, value: "100%", label: "Organic growth — zero paid ads" },
  { icon: BarChart3, value: "204%", label: "Above industry avg. engagement" },
  { icon: Building2, value: "2.5%", label: "Of market tested — ready to scale" },
];

const taxCreditTypes = [
  {
    type: "Individual",
    subtitle: "BC Residents",
    credit: "30% Refundable",
    highlight: "Full credit received even exceeding taxes owed",
    limit: "Annual claim limit: $300,000",
    carry: "4-year carry forward",
    extra: "TFSA and RRSP eligible for tax-sheltered growth",
  },
  {
    type: "Corporation",
    subtitle: "BC Companies",
    credit: "30% Non-Refundable",
    highlight: "Offsets BC provincial tax payable",
    limit: "No annual limit for corporate investors",
    carry: "4-year carry forward",
    extra: "Strategic tax planning advantage",
  },
];

const shareholderBenefits = [
  {
    benefit: "BC Tax Credit",
    individual: "30% Refundable",
    corporation: "30% Non-Refundable",
    strategic: "30% Credit",
  },
  {
    benefit: "Carry Forward",
    individual: "4 Years",
    corporation: "4 Years",
    strategic: "4 Years",
  },
  {
    benefit: "ECO+ Visibility",
    individual: "Standard Access",
    corporation: "50% Discount",
    strategic: "50% Discount",
  },
  {
    benefit: "Strategic Services",
    individual: "Regular Rates",
    corporation: "Regular Rates",
    strategic: "10% Discount",
  },
  {
    benefit: "Benefit Duration",
    individual: "Yearly Renewal",
    corporation: "Yearly Renewal",
    strategic: "Yearly Renewal",
  },
];

const operationalBenefits = [
  {
    title: "Professional Shareholder Advantage",
    description:
      "50% Discount on Eco+ Visibility: Premium Ecohome Professional Directory position at half standard rate. Annual renewal.",
    icon: Eye,
  },
  {
    title: "Strategic Partnership Advantage",
    description:
      "10% Discount on Strategic Services: Qualifying investors receive 10% off custom consulting, national brand campaigns, and deep-integration platform services.",
    icon: Zap,
  },
  {
    title: "Individual Shareholder Benefits",
    description:
      "Early access to member-only deals from partner network, including exclusive eco-friendly building product offers.",
    icon: Users,
  },
];

/* ── Component ─────────────────────────────────── */

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
              Investor Hub
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Building the Future.{" "}
              <span className="gradient-text">Together.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              RAIIZ Innovations is a registered Eligible Business Corporation
              (EBC). BC investors can earn up to 30% in provincial tax credits
              on their investment in the digital infrastructure transforming a
              $16.5T industry.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-muted border border-accent/20">
                <Calendar className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Current Round Closing: March 31, 2026
                </span>
              </div>
              <Link
                href="/invest"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-bg-primary font-semibold rounded-lg hover:bg-accent-hover transition-colors text-sm"
              >
                Invest Now
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investor hero image */}
      <section className="relative py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden border border-border-subtle"
          >
            <Image
              src="/images/heroes/investors.jpg"
              alt="Why invest in RAIIZ Innovations — the future of construction technology"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Quick highlights */}
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

      {/* Platform Traction */}
      <section className="py-24 lg:py-32 bg-bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Platform Highlights"
            title="Significant Traction. Ready for Scale."
            description="Operating in just 2.5% of a $12 trillion market during testing — with zero paid acquisition."
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {platformTraction.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-border-subtle bg-bg-primary/50"
              >
                <item.icon className="w-5 h-5 text-accent mb-3" />
                <p className="text-3xl sm:text-4xl font-bold text-text-primary mb-1">
                  {item.value}
                </p>
                <p className="text-sm text-text-secondary">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Credit Breakdown: Individual vs Corporate */}
      <section id="tax-credit" className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Tax Efficiency & ROI"
            title="Maximize Your Investment"
            description="BC's Small Business Venture Capital program provides significant tax advantages for both individual and corporate investors."
          />

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {taxCreditTypes.map((item, i) => (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-border-subtle bg-bg-secondary/30"
              >
                <span className="inline-block text-xs font-semibold text-accent tracking-widest uppercase mb-2">
                  {item.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-text-primary mb-1">
                  {item.type}
                </h3>
                <p className="text-3xl font-bold text-accent mb-4">
                  {item.credit}
                </p>
                <ul className="space-y-3">
                  {[item.highlight, item.limit, item.carry, item.extra].map(
                    (line, j) => (
                      <li key={j} className="flex gap-3">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-text-secondary">
                          {line}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Effective cost table */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-text-primary mb-6 text-center">
              Effective Investment Cost
            </h3>
            <div className="rounded-2xl border border-border-subtle overflow-hidden">
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shareholder Benefits Matrix */}
      <section className="py-24 lg:py-32 bg-bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Shareholder Benefits"
            title="Benefits Summary by Investor Type"
            description="Every investor class receives meaningful advantages beyond financial returns."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border-subtle overflow-x-auto"
          >
            <table className="w-full min-w-[600px]" role="table">
              <thead>
                <tr className="bg-bg-tertiary">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-text-primary">
                    Benefit
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-text-primary">
                    Individual
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-text-primary">
                    Corporation
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-accent">
                    Strategic Partner
                  </th>
                </tr>
              </thead>
              <tbody>
                {shareholderBenefits.map((row, i) => (
                  <tr
                    key={row.benefit}
                    className={`border-t border-border-subtle ${
                      i % 2 === 0 ? "bg-bg-secondary/40" : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-text-primary">
                      {row.benefit}
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">
                      {row.individual}
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">
                      {row.corporation}
                    </td>
                    <td className="px-6 py-4 text-sm text-accent font-medium">
                      {row.strategic}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Operational & Member Benefits */}
      <section className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Operational Savings"
            title="Beyond the Tax Credit"
            description="Shareholders receive additional operational benefits and member perks."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {operationalBenefits.map((item, i) => (
              <AnimatedCard key={item.title} index={i}>
                <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-24 lg:py-32 bg-bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              Next Steps
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Invest?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              The current $1.0M EBC allocation is available to investors who
              finalize subscriptions while credits remain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.sys.eco/253515658842970"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-bg-primary font-semibold rounded-xl hover:bg-accent-hover transition-colors"
              >
                Request Investor Deck
                <ExternalLink size={16} />
              </a>
              <Link
                href="/invest"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-accent text-accent font-semibold rounded-xl hover:bg-accent/10 transition-colors"
              >
                View Subscription Process
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <Link
                href="/contact"
                className="text-sm text-text-secondary hover:text-accent transition-colors underline underline-offset-4"
              >
                Connect with Investor Relations
              </Link>
              <Link
                href="/webinar"
                className="text-sm text-text-secondary hover:text-accent transition-colors underline underline-offset-4"
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
            an offer to sell or solicitation of an offer to buy any securities.
            No representations or warranties, express or implied, are made
            regarding the information contained herein. Forward-looking
            statements involve risks and uncertainties. Securities have not been
            registered under the Securities Act of 1933. Prospective investors
            are urged to conduct their own independent investigation. All
            amounts in Canadian dollars unless otherwise stated.
          </p>
        </div>
      </section>
    </>
  );
}
