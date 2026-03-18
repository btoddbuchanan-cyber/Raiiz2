"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Lightbulb, Globe, Leaf } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCard } from "@/components/AnimatedCard";

const values = [
  {
    icon: Target,
    title: "Performance-Driven",
    description: "Every decision measured against real outcomes — we don't just build software, we deliver results.",
  },
  {
    icon: Lightbulb,
    title: "Innovation at Core",
    description: "13+ years of construction science IP powers an AI engine that understands the industry from the ground up.",
  },
  {
    icon: Globe,
    title: "Market Alignment",
    description: "Connecting every stakeholder — from architects and engineers to government incentives and homeowners.",
  },
  {
    icon: Leaf,
    title: "Sustainability First",
    description: "Headquartered in a CAGBC Certified Zero Carbon Building, sustainability is in our DNA — not just our product.",
  },
];

const timeline = [
  { year: "2011", event: "Ecohome founded — building North America's deepest construction science knowledge base" },
  { year: "2018", event: "Technology development begins — bootstrapped engineering of the RAIIZ platform" },
  { year: "2024", event: "Raiiz Innovations acquires Ecohome.net IP portfolio, unifying content and technology" },
  { year: "2025", event: "EBC certification secured — BC investors eligible for 30% provincial tax credit" },
  { year: "2026", event: "Commercial velocity phase — scaling from MVP to market deployment" },
];

export function AboutContent() {
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
              About RAIIZ
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empowering People to Build{" "}
              <span className="gradient-text">Smarter</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              RAIIZ Innovations is a British Columbia-based technology company
              on a mission to empower people with the knowledge, tools, and
              connections they need to build or renovate better — affordably.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                eyebrow="Our Mission"
                title="Build Better. Renovate Better. Live Better."
                align="left"
              />
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  We simplify access to contractors, products, incentives, and
                  inspiration — making the process of building and renovating
                  seamless and impactful.
                </p>
                <p>
                  The construction industry is overdue for transformation. RAIIZ
                  provides the digital infrastructure to align the entire
                  ecosystem into high-velocity, AI-optimized workflows.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-bg-tertiary to-bg-secondary border border-border-subtle overflow-hidden grid-pattern relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl font-bold text-accent/20 font-[family-name:var(--font-dm-sans)]">
                    R<span className="text-accent/40">AI</span>IZ
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="What Drives Us"
            description="Every decision we make is guided by a commitment to performance, innovation, alignment, and sustainability."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value, i) => (
              <AnimatedCard key={value.title} index={i}>
                <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-text-primary">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="From Knowledge to Platform"
          />

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-6 pb-10 last:pb-0 relative"
              >
                {i < timeline.length - 1 && (
                  <div className="absolute left-[23px] top-12 bottom-0 w-px bg-border-subtle" />
                )}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-muted border-2 border-accent/30 flex items-center justify-center">
                  <span className="text-xs font-bold text-accent">{item.year}</span>
                </div>
                <div className="pt-2.5">
                  <p className="text-text-primary leading-relaxed">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Discover our platform, meet the team, or explore investment opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/platform"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-bg-primary font-semibold rounded-xl hover:bg-accent-hover transition-colors"
              >
                Explore the Platform
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border-subtle text-text-primary font-medium rounded-xl hover:bg-white/5 transition-colors"
              >
                Meet the Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
