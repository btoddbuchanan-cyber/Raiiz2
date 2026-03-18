"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Network,
  BarChart3,
  Shield,
  Users,
  Workflow,
  Search,
  Award,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCard } from "@/components/AnimatedCard";

const layers = [
  {
    icon: Brain,
    title: "Agentic AI Engine",
    description:
      "Sovereign, localized intelligence trained on 13 years of proprietary construction science data. Not generic — purpose-built for this industry.",
  },
  {
    icon: Network,
    title: "Ecosystem Connectivity",
    description:
      "A unified digital layer connecting architects, engineers, builders, product suppliers, and government incentive programs.",
  },
  {
    icon: Search,
    title: "ECO+ Professional Directory",
    description:
      "Over 230,000 professional records, searchable and verified. The construction industry's most comprehensive professional network.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Real-time market intelligence and performance metrics. Data-driven decision making for every stakeholder.",
  },
  {
    icon: Shield,
    title: "Intelligent Zero-Trust",
    description:
      "Programmatic verification and automated audit trails. Built-in compliance for an industry that demands trust.",
  },
  {
    icon: Award,
    title: "Merit-Based Marketplace",
    description:
      "Quality rises to the top. Our algorithms surface the best professionals, products, and practices — not the highest bidder.",
  },
];

const stakeholders = [
  {
    icon: Users,
    title: "For Homeowners",
    points: [
      "Find vetted, merit-ranked professionals",
      "Access government incentives and rebates",
      "Make informed decisions with science-backed data",
    ],
  },
  {
    icon: Workflow,
    title: "For Industry Professionals",
    points: [
      "Connect with qualified leads — not cold traffic",
      "Showcase expertise through verified performance",
      "Streamline workflows with AI-assisted processes",
    ],
  },
  {
    icon: BarChart3,
    title: "For Investors",
    points: [
      "Access a $16.5T market opportunity",
      "BC investors eligible for 30% provincial tax credit",
      "Proven technology with 6 years of engineering maturity",
    ],
  },
];

export function PlatformContent() {
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
              The Platform
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Where AI Meets{" "}
              <span className="gradient-text">Industry Intelligence</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              The RAIIZ platform is the digital infrastructure layer for the
              modern construction ecosystem — connecting people, data, and
              workflows through agentic AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platform visual */}
      <section className="relative py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden border border-border-subtle"
          >
            <Image
              src="/images/heroes/platform-ai.jpg"
              alt="RAIIZ platform — sovereign intelligence powering construction AI"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Platform layers */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Architecture"
            title="Six Integrated Layers"
            description="Each layer of the RAIIZ platform serves a distinct purpose — together they create the most comprehensive construction technology ecosystem available."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {layers.map((layer, i) => (
              <AnimatedCard key={layer.title} index={i}>
                <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center mb-5">
                  <layer.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-text-primary">
                  {layer.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {layer.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Connections visual */}
      <section className="relative py-16 lg:py-20 bg-bg-secondary/20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden border border-border-subtle"
          >
            <Image
              src="/images/heroes/platform-connections.jpg"
              alt="RAIIZ platform connecting construction professionals, consumers, and government"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Stakeholders */}
      <section className="py-24 lg:py-32 bg-bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="For Everyone"
            title="Built for Every Stakeholder"
            description="Whether you're building your first home, running a construction business, or looking to invest in the future of the industry."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {stakeholders.map((s, i) => (
              <AnimatedCard key={s.title} index={i}>
                <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-primary">
                  {s.title}
                </h3>
                <ul className="space-y-3" role="list">
                  {s.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-text-secondary text-sm leading-relaxed"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            ))}
          </div>
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
              Be Part of the Transformation
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              The construction industry is ready for its digital moment. RAIIZ
              is building the infrastructure to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/investors"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-bg-primary font-semibold rounded-xl hover:bg-accent-hover transition-colors"
              >
                Investment Opportunities
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border-subtle text-text-primary font-medium rounded-xl hover:bg-white/5 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
