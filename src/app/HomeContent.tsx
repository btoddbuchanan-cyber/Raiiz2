"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, ShieldCheck, TrendingUp, Database, Zap, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCard } from "@/components/AnimatedCard";

const pillars = [
  {
    letter: "R",
    title: "Rise — Elevating the Standard",
    description:
      "Moving beyond legacy systems to high-performance digital infrastructure for the modern construction ecosystem.",
    icon: TrendingUp,
  },
  {
    letter: "AI",
    title: "Agentic Intelligence",
    description:
      "Sovereign, localized AI built on 13+ years of expert-vetted logic and proprietary construction science data.",
    icon: Cpu,
  },
  {
    letter: "IZ",
    title: "Intelligent Zero-Trust",
    description:
      "Programmatic verification automating audit trails and compliance across a $16.5T industry.",
    icon: ShieldCheck,
  },
];

const stats = [
  { value: "$16.5T", label: "Industry Opportunity" },
  { value: "200K+", label: "Opted-in Members" },
  { value: "230K+", label: "Professional Records" },
  { value: "170K+", label: "Indexed Knowledge Pages" },
  { value: "13+", label: "Years of Trilingual IP" },
  { value: "6", label: "Years of Engineering" },
];

const capabilities = [
  {
    icon: Database,
    title: "Sovereign Data Intelligence",
    description:
      "Proprietary consumer data silos, professional databases, and a construction-science knowledge base fuel precise AI optimization.",
  },
  {
    icon: Zap,
    title: "High-Velocity Workflows",
    description:
      "Automated, merit-based ecosystem replacing high-friction legacy models with agentic AI-optimized workflows.",
  },
  {
    icon: Building2,
    title: "Total Market Alignment",
    description:
      "Connecting architects, engineers, government incentives, homeowners, and production-line logic on one unified platform.",
  },
];

export default function HomeContent() {
  return (
    <>
      {/* ====== HERO ====== */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-accent bg-accent-muted text-accent text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Trusted by 200K+ Members
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-8">
              Find the Right Builder.
              <br />
              Build a Better{" "}
              <span className="gradient-text">Home.</span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10">
              RAIIZ connects you with vetted professionals, government
              incentives, and science-backed building guidance — powered by AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/platform"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-bg-primary font-semibold rounded-xl hover:bg-accent-hover transition-colors text-base"
              >
                See How It Works
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/investors"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border-subtle text-text-primary font-medium rounded-xl hover:bg-white/5 transition-colors text-base"
              >
                Investor Information
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-text-secondary/30 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-accent"
            />
          </div>
        </motion.div>
      </section>

      {/* ====== R-AI-IZ GRAPHIC ====== */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden border border-border-subtle"
          >
            <Image
              src="/images/heroes/hero-trust.jpg"
              alt="RAIIZ — R for Rise, AI for Agentic Intelligence, IZ for Intelligent Zero-Trust"
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* ====== WHAT IS RAIIZ ====== */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="What is RAIIZ"
            title="One Platform. Total Market Alignment."
            description="RAIIZ is the unifying software force for the construction transition toward high-efficiency, low-impact structures at affordable costs."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, i) => (
              <AnimatedCard key={pillar.letter} index={i}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center">
                    <pillar.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-3xl font-bold text-accent font-[family-name:var(--font-dm-sans)]">
                    {pillar.letter}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-text-primary">
                  {pillar.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ====== STATS ====== */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-bg-secondary/50" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== VISION ====== */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
                The Vision
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Mobilizing an Industry to Deliver{" "}
                <span className="gradient-text">Better Results</span>
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Fragmented legacy platforms monetize surface-level leads with
                  high overhead and declining ROI. The industry has few
                  alternatives.
                </p>
                <p>
                  RAIIZ replaces this high-friction model with a high-velocity,
                  automated merit-based ecosystem — better results for everyone
                  involved.
                </p>
              </div>

              <div className="mt-8 p-6 rounded-xl bg-bg-tertiary border border-border-subtle">
                <p className="text-sm text-text-secondary leading-relaxed">
                  <span className="text-accent font-semibold">
                    The Transformation Chain:
                  </span>{" "}
                  Incentives &rarr; Best Practice &rarr; Education &rarr; Higher Consumer
                  Expectations &rarr; Better Builders &rarr; Better Homes &rarr; Lower Costs &rarr;
                  Lower Energy Use &rarr; Better Comfort
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-6"
            >
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="flex gap-5 p-6 rounded-xl border border-border-subtle bg-bg-secondary/40 hover:border-border-accent transition-colors"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-accent-muted flex items-center justify-center mt-0.5">
                    <cap.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1.5 text-text-primary">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== DATA / INTELLIGENCE ====== */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-bg-secondary/30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Sovereign Intelligence"
            title="Built on a Foundation of Data"
            description="Proprietary knowledge fuels AI optimization — 13 years of trilingual IP, 200K+ opted-in members, and a construction-science knowledge base of 170K+ indexed pages."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden border border-border-subtle mb-12 max-w-4xl mx-auto"
          >
            <Image
              src="/images/heroes/sovereign-intelligence.jpg"
              alt="RAIIZ Sovereign Intelligence — proprietary data moat powering agentic AI"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedCard index={0} className="border-gradient">
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                Institutional Memory
              </h3>
              <p className="text-text-secondary leading-relaxed">
                13 years of trilingual IP and authority via the Ecohome
                portfolio — the deepest construction science knowledge base in
                North America.
              </p>
            </AnimatedCard>

            <AnimatedCard index={1} className="border-gradient">
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                Technical Maturity
              </h3>
              <p className="text-text-secondary leading-relaxed">
                6 years of bootstrapped engineering at MVP status, proving the
                model is beyond technical validation and poised for commercial
                velocity.
              </p>
            </AnimatedCard>

            <AnimatedCard index={2} className="md:col-span-2 border-gradient">
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                Localized Logic
              </h3>
              <p className="text-text-secondary leading-relaxed">
                AI trained on proprietary consumer data silos with over 200,000
                opted-in members, combined with over 230,000 professional
                records and a construction-science knowledge base of over
                170,000 indexed pages — accelerating results across the 93%
                general market.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* ====== MISSION CTA ====== */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-bg-tertiary via-bg-secondary to-bg-primary" />
            <div className="absolute inset-0 grid-pattern opacity-15" />
            <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px]" />

            <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 lg:px-24 lg:py-24 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Build Better. Renovate Better.
                <br />
                <span className="gradient-text">Live Better.</span>
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
                Join the movement transforming how the world builds. Whether
                you&apos;re an industry professional, an investor, or a homeowner
                who demands more — RAIIZ is here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-bg-primary font-semibold rounded-xl hover:bg-accent-hover transition-colors"
                >
                  Start Your Project
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/investors"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border-subtle text-text-primary font-medium rounded-xl hover:bg-white/5 transition-colors"
                >
                  Learn About Investing
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
