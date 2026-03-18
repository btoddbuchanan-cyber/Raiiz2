"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const team = [
  {
    name: "Robert J. Pierson",
    title: "CEO & Co-Founder",
    image: "/images/team/robert_pierson_ai.png",
    bio: "30 years of hands-on construction industry experience combined with 20+ years of internet and SEO expertise. Dynamic entrepreneur with a track record of turning vision into measurable commercial success.",
  },
  {
    name: "Yanni Milon",
    title: "VP Innovation & Co-Founder",
    image: "/images/team/yanni_milon_ai.png",
    bio: "BSc in Computer Science with deep expertise in sustainable building as a LEED for Homes Green Rater. Bridges platform development with green construction practice.",
  },
  {
    name: "Maxime Boudrias",
    title: "VP Technology & Co-Founder",
    image: "/images/team/maxime_boudrias_ai.png",
    bio: "Over 15 years of coding expertise and a natural curiosity for search algorithms and system architecture. The technical backbone behind the RAIIZ platform.",
  },
  {
    name: "Todd Buchanan",
    title: "Executive VP",
    image: "/images/team/todd_buchanan_ai.png",
    bio: "Entrepreneurial leader focused on early-stage business structuring for hyper growth. 25+ years working with Fortune 500 and public companies in technology and governance.",
  },
  {
    name: "Justin Maxwell",
    title: "VP Corporate Development",
    image: "/images/team/justin_maxwell_ai.png",
    bio: "Recipient of Business In Vancouver's 'Top 40 Under Forty' award. Strategic advisor with experience spanning real estate, technology, and M&A.",
  },
  {
    name: "Karen Wilkie",
    title: "Marketing & Branding",
    image: "/images/team/karen_wilkie_ai.png",
    bio: "From technical sales to organic SEO and construction marketing — decades of experience crafting brands and digital strategies across industries.",
  },
  {
    name: "Mike Reynolds",
    title: "Advisor",
    image: "/images/team/mike_reynolds_ai.png",
    bio: "Climate-protection advocate, Editor-in-Chief of Ecohome Network, and mentor for the Indigenous Clean Energy Network. Pioneer in sustainable building content.",
  },
];

export function TeamContent() {
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
              Our Team
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Seasoned Professionals Building the{" "}
              <span className="gradient-text">Future</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              A team of industry veterans, innovators, and business experts
              united by a shared mission to transform the construction
              ecosystem through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative rounded-2xl border border-border-subtle bg-bg-secondary/60 overflow-hidden hover:border-border-accent transition-colors duration-300"
              >
                <div className="aspect-[3/4] relative bg-bg-tertiary overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.title}`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-3">
                    {member.title}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {member.bio}
                  </p>
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
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Interested in building the future of construction technology?
              Get in touch with the team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-bg-primary font-semibold rounded-xl hover:bg-accent-hover transition-colors"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
