"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  FileText,
  Mail,
  Shield,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Review the Opportunity",
    description:
      "Explore our Investor Hub for full details on tax credits, shareholder benefits, and platform traction.",
    icon: FileText,
    link: "/investors",
    linkLabel: "View Investor Hub",
  },
  {
    step: "02",
    title: "Request the Investor Deck",
    description:
      "Get the detailed presentation with financial projections, market analysis, and growth strategy.",
    icon: Mail,
    link: "https://apps.sys.eco/253515658842970",
    linkLabel: "Request Deck",
    external: true,
  },
  {
    step: "03",
    title: "Connect with Our Team",
    description:
      "Schedule a call with investor relations or join an upcoming webinar for a live walkthrough.",
    icon: Calendar,
    link: "/contact",
    linkLabel: "Contact Investor Relations",
  },
  {
    step: "04",
    title: "Subscribe & Invest",
    description:
      "Complete the subscription agreement to finalize your investment. BC investors earn up to 30% in tax credits.",
    icon: Shield,
    link: "https://apps.sys.eco/253515658842970",
    linkLabel: "Begin Subscription",
    external: true,
  },
];

const whyInvest = [
  "Registered Eligible Business Corporation (EBC) under BC's Small Business Venture Capital Act",
  "30% refundable tax credit for BC individual investors — full credit even if exceeding taxes owed",
  "30% non-refundable tax credit for BC corporate investors — no annual limit",
  "TFSA and RRSP eligible for Canadian investors",
  "4-year carry-forward on unused tax credits",
  "Platform validated with 2.8M users and 6M+ page views — 100% organic growth",
  "$1.0M EBC allocation available while credits remain",
];

export function InvestContent() {
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
              Invest Now
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Building the Future.{" "}
              <span className="gradient-text">Together.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-4">
              Join us in transforming the $16.5T construction industry. RAIIZ
              Innovations is a registered Eligible Business Corporation — BC
              investors earn up to 30% in provincial tax credits.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-muted border border-accent/20">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                Current Round Closing: March 31, 2026
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Process Steps */}
      <section className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              How to Invest
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Your Path to Partnership
            </h2>
          </motion.div>

          <div className="space-y-6">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex gap-6 p-6 sm:p-8 rounded-2xl border border-border-subtle bg-bg-secondary/30 hover:bg-bg-secondary/60 hover:border-accent/30 transition-all"
              >
                {/* Step number */}
                <div className="flex-shrink-0 flex items-start">
                  <div className="w-14 h-14 rounded-xl bg-accent-muted flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-accent/60 tracking-widest uppercase">
                      Step {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {item.description}
                  </p>
                  {item.external ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                    >
                      {item.linkLabel}
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                    >
                      {item.linkLabel}
                      <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest Checklist */}
      <section className="py-24 lg:py-32 bg-bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
                The Opportunity
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why Invest in RAIIZ?
              </h2>
              <p className="text-text-secondary leading-relaxed">
                RAIIZ Innovations offers a unique combination of tax-efficient
                investing and exposure to the fastest-growing segment of the
                global construction market.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="space-y-4"
            >
              {whyInvest.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              The current $1.0M EBC allocation is available to investors who
              finalize subscriptions while credits remain.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Request Deck */}
            <motion.a
              href="https://apps.sys.eco/253515658842970"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl border border-accent bg-accent/5 hover:bg-accent/10 transition-all text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-muted flex items-center justify-center mx-auto mb-5">
                <FileText className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Request Investor Deck
              </h3>
              <p className="text-sm text-text-secondary mb-4">
                Get the full presentation with financial projections and growth
                strategy.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                Request Now
                <ExternalLink size={14} />
              </span>
            </motion.a>

            {/* Contact IR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link
                href="/contact"
                className="block h-full p-8 rounded-2xl border border-border-subtle hover:border-accent/30 bg-bg-secondary/30 hover:bg-bg-secondary/60 transition-all text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent-muted flex items-center justify-center mx-auto mb-5">
                  <Mail className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  Connect with Investor Relations
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  Schedule a call or ask questions about the opportunity.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Get in Touch
                  <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Additional links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mt-10"
          >
            <Link
              href="/investors"
              className="text-sm text-text-secondary hover:text-accent transition-colors underline underline-offset-4"
            >
              View Full Investor Hub
            </Link>
            <Link
              href="/webinar"
              className="text-sm text-text-secondary hover:text-accent transition-colors underline underline-offset-4"
            >
              Register for Webinar
            </Link>
            <Link
              href="/investors#tax-credit"
              className="text-sm text-text-secondary hover:text-accent transition-colors underline underline-offset-4"
            >
              Tax Credit Details
            </Link>
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
