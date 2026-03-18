"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building2, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCard } from "@/components/AnimatedCard";

type FormStatus = "idle" | "submitting" | "success" | "error";

const contactMethods = [
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "25th Floor, 700 West Georgia St.",
    sub: "Vancouver, BC V7Y 1K8",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "236-900-2006",
    sub: "Monday – Friday, 9am – 5pm PT",
    href: "tel:236-900-2006",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "info@raiiz.com",
    sub: "We typically respond within 24 hours",
    href: "mailto:info@raiiz.com",
  },
  {
    icon: Building2,
    title: "Our Office",
    detail: "CAGBC Certified Zero Carbon Building",
    sub: "A reflection of our sustainability commitment",
  },
];

export function ContactContent() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      interest: formData.get("interest") as string,
      message: formData.get("message") as string,
      formType: "contact",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

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
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Let&apos;s Start a{" "}
              <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Whether you&apos;re a homeowner, an industry professional, an
              investor, or a member of the media — we want to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, i) => (
              <AnimatedCard key={method.title} index={i}>
                <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center mb-5">
                  <method.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-text-primary">
                  {method.title}
                </h3>
                {method.href ? (
                  <a
                    href={method.href}
                    className="text-accent hover:text-accent-hover transition-colors font-medium block mb-1"
                  >
                    {method.detail}
                  </a>
                ) : (
                  <p className="text-text-primary font-medium mb-1">
                    {method.detail}
                  </p>
                )}
                <p className="text-sm text-text-secondary">{method.sub}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-24 lg:py-32 bg-bg-secondary/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Send a Message"
            title="Get in Touch"
            description="Fill out the form below and a member of our team will get back to you shortly."
          />

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center"
            >
              <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                Message Sent Successfully
              </h3>
              <p className="text-text-secondary mb-6">
                Thank you for reaching out. A member of our team will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="px-6 py-3 bg-accent text-bg-primary font-semibold rounded-xl hover:bg-accent-hover transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors disabled:opacity-50"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors disabled:opacity-50"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={status === "submitting"}
                  className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors disabled:opacity-50"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  I&apos;m Interested In
                </label>
                <select
                  id="interest"
                  name="interest"
                  disabled={status === "submitting"}
                  className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select a topic</option>
                  <option value="platform">Learning about the Platform</option>
                  <option value="invest">Investment Opportunities</option>
                  <option value="partner">Partnership Opportunities</option>
                  <option value="media">Media Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  disabled={status === "submitting"}
                  className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none disabled:opacity-50"
                  placeholder="Tell us how we can help..."
                />
              </div>

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <p className="text-sm text-red-300">
                    {errorMessage || "Something went wrong. Please try again."}
                  </p>
                </motion.div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto px-8 py-4 bg-accent text-bg-primary font-semibold rounded-xl hover:bg-accent-hover transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>

              <p className="text-xs text-text-secondary">
                By submitting this form, you agree to our{" "}
                <Link href="/privacy" className="text-accent hover:text-accent-hover underline">
                  Privacy Policy
                </Link>
                . We will never share your information.
              </p>
            </motion.form>
          )}
        </div>
      </section>
    </>
  );
}
