"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

export function WebinarContent() {
  return (
    <>
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
              Webinars
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Register for a{" "}
              <span className="gradient-text">Webinar</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Join our upcoming sessions to learn about the RAIIZ platform,
              investment opportunities, and how we&apos;re transforming the
              construction industry.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Sign Up"
            title="Upcoming Sessions"
            description="Enter your details below and we'll send you an invitation when the next webinar is scheduled."
          />

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="wfName" className="block text-sm font-medium text-text-primary mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="wfName"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border-subtle text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="wfEmail" className="block text-sm font-medium text-text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="wfEmail"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border-subtle text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="wfInterest" className="block text-sm font-medium text-text-primary mb-2">
                Primary Interest
              </label>
              <select
                id="wfInterest"
                name="interest"
                className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border-subtle text-text-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
              >
                <option value="">Select a topic</option>
                <option value="platform">Platform Overview</option>
                <option value="investment">Investment Opportunity</option>
                <option value="partnership">Partnership</option>
                <option value="general">General Interest</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-accent text-bg-primary font-semibold rounded-xl hover:bg-accent-hover transition-colors"
            >
              Register Interest
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
}
