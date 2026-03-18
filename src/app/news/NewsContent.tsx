"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const pressReleases = [
  {
    date: "October 8, 2025",
    title:
      "RAIIZ Partners with Surgically Clean Air to Enhance Sustainable Home Construction",
    excerpt:
      "A new distribution agreement integrating commercial-grade air purification systems into RAIIZ's sustainable building platform, addressing indoor air quality as a critical component of healthy living.",
    location: "Vancouver, BC",
  },
  {
    date: "May 9, 2025",
    title:
      "BC Residents & Companies — Claim a 30% Provincial Tax Credit Through Investment in Qualifying BC Companies",
    excerpt:
      "The Government of British Columbia encourages development of innovative new businesses through the Small Business Venture Capital Act, offering significant tax incentives for eligible investors.",
    location: "Vancouver, BC",
  },
  {
    date: "May 2, 2025",
    title:
      "RAIIZ Innovations Inc. is Now a Registered Eligible Business Corporation (EBC)",
    excerpt:
      "Investors can earn up to 30% in provincial tax credits through investment in RAIIZ Innovations under the BC Small Business Venture Capital Act.",
    location: "Vancouver, BC",
  },
  {
    date: "November 30, 2024",
    title:
      "RAIIZ Innovations Acquires Ecohome.net IP Portfolio, Expanding Technology Footprint",
    excerpt:
      "Strategic acquisition of intellectual property assets from Ecohome.net, consolidating 13 years of trilingual construction science IP into the RAIIZ platform.",
    location: "Vancouver, BC",
  },
];

export function NewsContent() {
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
              Newsroom
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Press Releases &{" "}
              <span className="gradient-text">Latest News</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Stay up to date with the latest developments, partnerships, and
              milestones from RAIIZ Innovations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press releases */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {pressReleases.map((pr, i) => (
              <motion.article
                key={pr.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative p-8 rounded-2xl border border-border-subtle bg-bg-secondary/40 hover:border-border-accent transition-colors"
              >
                <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-accent" />
                    {pr.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-accent" />
                    {pr.location}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 leading-snug">
                  {pr.title}
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {pr.excerpt}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Media contact */}
      <section className="py-24 lg:py-32 bg-bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Media"
            title="Media Inquiries"
            description="Members of the press are welcome to contact our communications team for interviews, statements, and media assets."
          />
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-bg-primary font-semibold rounded-xl hover:bg-accent-hover transition-colors"
          >
            Contact Media Relations
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
