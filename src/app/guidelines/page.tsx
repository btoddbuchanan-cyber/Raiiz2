import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description: "Community Guidelines for RAIIZ Innovations & Ecohome — rules for participating in our platform community.",
};

export default function GuidelinesPage() {
  return (
    <article className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-primary" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
          Community
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-8">
          Community Guidelines
        </h1>

        <div className="space-y-8 text-text-secondary leading-relaxed">
          <h2 className="text-2xl font-bold text-text-primary mt-4 mb-4">
            Welcome to the Raiiz Innovations &amp; Ecohome Community
          </h2>
          <p>
            We created one of the world&apos;s biggest and fastest growing
            step-by-step building guides to help owners and builders achieve
            better results in their home construction and renovation projects.
            Our platform connects homeowners with construction professionals
            and manufacturers/suppliers, allowing users to complete projects
            from one location. Our discussion forum enables users to ask
            questions and share information.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            The Golden Rule
          </h2>
          <p>
            Be nice. Users should maintain civility even when disagreeing.
            Content posted should remain appropriate for all ages, as the site
            restricts access to users 13 and older. Language and topics
            unsuitable for a family dinner table are prohibited.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            Additional Requirements
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              Comments and topics must remain relevant to the platform&apos;s
              purpose — sustainable building, renovation, and construction.
            </li>
            <li>
              Commercial promotion is restricted. Companies should contact
              Raiiz about visibility programs or create member profiles instead
              of promoting in discussion areas.
            </li>
            <li>
              Blatant product promotion in discussion areas faces immediate
              removal.
            </li>
            <li>
              Respect other community members and their perspectives, even when
              you disagree on building methods or materials.
            </li>
            <li>
              Share knowledge generously — this community thrives when members
              help each other make better building decisions.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            Enforcement
          </h2>
          <p>
            Violations of these guidelines result in material removal and user
            blocking. We are the High Performance Building Network where
            everyone wins — and that starts with mutual respect.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            Questions
          </h2>
          <p>
            For questions about these guidelines, contact us at{" "}
            <a href="mailto:users@raiiz.com" className="text-accent hover:text-accent-hover">
              users@raiiz.com
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}
