"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function WebinarContent() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // The webinar form has a single "name" field; split into first/last for the API
    const fullName = (formData.get("name") as string) || "";
    const nameParts = fullName.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const payload = {
      firstName,
      lastName,
      email: formData.get("email") as string,
      interest: formData.get("interest") as string,
      formType: "webinar",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to register");
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

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center"
            >
              <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                Registration Received
              </h3>
              <p className="text-text-secondary mb-6">
                Thank you for your interest. We&apos;ll send you an invitation when the next webinar is scheduled.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="px-6 py-3 bg-accent text-bg-primary font-semibold rounded-xl hover:bg-accent-hover transition-colors"
              >
                Register Again
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
                    htmlFor="wfName"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="wfName"
                    name="name"
                    required
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border-subtle text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors disabled:opacity-50"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="wfEmail"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="wfEmail"
                    name="email"
                    required
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border-subtle text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors disabled:opacity-50"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="wfInterest"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Primary Interest
                </label>
                <select
                  id="wfInterest"
                  name="interest"
                  disabled={status === "submitting"}
                  className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border-subtle text-text-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select a topic</option>
                  <option value="platform">Platform Overview</option>
                  <option value="investment">Investment Opportunity</option>
                  <option value="partnership">Partnership</option>
                  <option value="general">General Interest</option>
                </select>
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
                      Registering...
                    </>
                  ) : (
                    "Register Interest"
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
