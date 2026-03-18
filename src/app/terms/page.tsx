import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for RAIIZ Innovations Inc. — governing your use of our websites, services, and products.",
};

export default function TermsPage() {
  return (
    <article className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-primary" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
          Legal
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-8">
          Terms of Service
        </h1>

        <div className="space-y-8 text-text-secondary leading-relaxed">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) are a contract between Raiiz
            Innovations Inc. (&ldquo;Raiiz Innovations&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) and all site
            Visitors, Users, Members, and Admin Users (&ldquo;you&rdquo;). They govern your
            access to and use of Raiiz Innovations&apos; websites, services, mobile
            apps, products, domains, and hosted content (collectively, the
            &ldquo;Services&rdquo;).
          </p>
          <p>
            By using any of our Services, you agree to these Terms. If you do
            not agree to these Terms, you may not use the Services.
          </p>
          <p>
            We may modify these Terms at any time. If a change is material, we
            will notify Members in advance. Continued use of the Services after
            changes go into effect constitutes acceptance of the new Terms.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            1. Definitions
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-text-primary">Visitor:</strong> Anyone browsing the Raiiz Innovations websites or services without registering an account.</li>
            <li><strong className="text-text-primary">User:</strong> A general term that includes Visitors and Members.</li>
            <li><strong className="text-text-primary">Member:</strong> (Authorized User): A User who has created an account to access enhanced features or contribute content.</li>
            <li><strong className="text-text-primary">Admin User:</strong> A specific type of Authorized User granted administrative privileges over a domain or site hosted on the Raiiz Innovations CMS.</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            2. Content Rights and Responsibilities
          </h2>
          <p>
            Contributing Members retain ownership of the content they create
            until posted to a Raiiz Innovations site. By posting content,
            Members grant Raiiz Innovations a nonexclusive license to use it
            across the Services, including storing, displaying, formatting, and
            distributing it.
          </p>
          <p>
            We may display advertising in connection with user-generated content
            and use content to promote Raiiz Innovations. We will not sell
            content without explicit permission but may license or syndicate it
            under relevant terms.
          </p>
          <p>
            Members are responsible for the legality, accuracy, and consequences
            of their content. We may remove any content at our discretion. You
            may request to delete your posts or account at any time.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            3. Admin Users and Hosted Domains
          </h2>
          <p>
            Admin Users are Authorized Users granted elevated privileges to
            manage a domain, microsite, or hosted instance of a site built using
            the Raiiz Innovations CMS platform. Any access to an administrator
            role is subject to the prior conclusion of a separate contract with
            Syseco Networks Inc. or Raiiz Innovations Inc.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            4. Our Content and Services
          </h2>
          <p>
            We reserve all rights to the look and feel of Raiiz Innovations.
            You may not copy or adapt our proprietary code or design without
            written permission.
          </p>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access non-public systems or data</li>
            <li>Use scraping or bots (outside of approved APIs)</li>
            <li>Send misleading or deceptive information</li>
            <li>Interfere with service functionality or user access</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            5. Submitted Content — Directories and Reviews
          </h2>
          <p>
            By submitting content for publication in our directories or reviews,
            you grant Raiiz Innovations broad rights to use, adapt, and publish
            your contributions. You represent that your submissions are accurate,
            respectful, and not influenced by compensation or personal
            relationships unless disclosed.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            6. Third-Party Content and Providers
          </h2>
          <p>
            We do not guarantee the quality, legality, or accuracy of any
            third-party content or services offered on our platform. Any
            dealings between Users and third-party Service or Product Providers
            are your responsibility.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            7. Security and Age Requirements
          </h2>
          <p>
            If you find a security vulnerability, report it to us. You must be
            13 years or older to use the Services. Accounts for users under 13
            will be terminated.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            8. Privacy and Incorporated Policies
          </h2>
          <p>
            By using our Services, you consent to the data practices outlined
            in our Privacy Policy. If you&apos;re outside of Canada or the U.S., you
            consent to data transfers to and from those countries.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            9. Remuneration Disclosure
          </h2>
          <p>
            Raiiz Innovations is a platform driven by education, transparency,
            and better building. While we feature products and professionals,
            our editorial stance is independent. We may offer Augmented Member
            Services on a paid basis, vet professionals before listing them
            commercially, and earn affiliate income.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            10. Liability and Indemnity
          </h2>
          <p>
            You use Raiiz Innovations at your own risk. We are not responsible
            for losses related to content, unavailability, or unauthorized
            access. Our liability is limited to amounts you paid for paid
            Services, if any. You agree to indemnify Raiiz Innovations against
            claims arising from your use of the Services or your content.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            11. Miscellaneous
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-text-primary">No warranty:</strong> Services are provided &ldquo;as is.&rdquo;</li>
            <li><strong className="text-text-primary">No waiver:</strong> Our failure to enforce a right is not a waiver.</li>
            <li><strong className="text-text-primary">Severability:</strong> If any part is unenforceable, the rest remains in effect.</li>
            <li><strong className="text-text-primary">Jurisdiction:</strong> These Terms are governed by Canadian law. Disputes must be resolved in courts located in British Columbia, Canada.</li>
            <li><strong className="text-text-primary">Entire agreement:</strong> These Terms, the Privacy Policy, and incorporated agreements form the full agreement.</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            12. Contact and Support
          </h2>
          <p>
            For questions about these Terms, contact us at{" "}
            <a href="mailto:users@raiiz.com" className="text-accent hover:text-accent-hover">
              users@raiiz.com
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}
