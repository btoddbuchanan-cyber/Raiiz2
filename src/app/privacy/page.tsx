import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for RAIIZ Innovations Inc. Learn how we collect, use, store, and protect your personal information across our platform.",
};

export default function PrivacyPage() {
  return (
    <article className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-primary" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
          Legal
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-text-secondary leading-relaxed">
          <p>
            This policy explains what information Raiiz Innovations collects
            when you use our sites, services, mobile applications, products,
            and content (&ldquo;Services&rdquo;). We aim to earn your trust beyond mere
            legal compliance.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            Information We Collect &amp; How We Use It
          </h2>
          <p>
            Raiiz Innovations collects data to optimize product functionality.
            Information sources include active disclosures (such as email
            addresses) and passive tracking (pages viewed, duration, feature
            usage including saves, highlights, follows, shares, and likes). Data
            collected includes Internet Protocol address, information about your
            device (such as device or browser type), and referral information.
          </p>
          <p><strong className="text-text-primary">Uses include:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, test, improve, promote and personalize Services</li>
            <li>Fight spam and abuse</li>
            <li>Generate aggregate, non-identifying usage information</li>
          </ul>
          <p>
            Third-party authentication (Twitter, Facebook, Apple, Google) may
            result in collecting associated account information. We will never
            publish something through one of your third-party accounts without
            your express permission.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            Information Disclosure
          </h2>
          <p>
            Raiiz Innovations won&apos;t sell information about you to a third-party.
            Information transfers occur with: (1) consent or specific requests;
            (2) service providers meeting data protection standards; (3)
            academic/non-profit researchers with aggregation/anonymization; (4)
            legal requirements; (5) harm prevention situations.
          </p>
          <p>
            We will notify users of legal process requests, unless prohibited
            by law.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            Public Data
          </h2>
          <p>
            User profile pages, public interactions (likes, shares, highlights),
            and post pages may be indexed by search engines. Users may share
            links on social media platforms.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            Data Storage
          </h2>
          <p>
            Raiiz Innovations uses third-party vendors for infrastructure. By
            using the Services, you authorize Raiiz Innovations to transfer,
            store, and use your information in Canada, the United States and any
            other country where we operate.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            Third-Party Embeds
          </h2>
          <p>
            Content like YouTube videos, Giphy gifs, SoundCloud audio, Twitter
            tweets, and GitHub snippets may collect user data independent of
            Raiiz Innovations&apos; control. These embeds are covered by the privacy
            policy of the third-party service.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            Tracking &amp; Cookies
          </h2>
          <p>
            Cookies enable account login, preference storage, email evaluation,
            paywall functionality, and content personalization. Third-party
            services (Google Analytics, and others) may place their own cookies.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            Modifying or Deleting Personal Information
          </h2>
          <p>
            Users can access, modify, export, or delete account information via
            email to{" "}
            <a href="mailto:users@raiiz.com" className="text-accent hover:text-accent-hover">
              users@raiiz.com
            </a>
            . Residual copies persist briefly for protection against
            accidental/malicious destruction, but deleted accounts become
            unrecoverable after this period.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            Data Security
          </h2>
          <p>
            We use encryption (HTTPS/TLS) to protect data transmitted to and
            from our site. However, no data transmission over the Internet is
            100% secure. Users bear responsibility for account security.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            Business Transfers
          </h2>
          <p>
            During mergers, acquisitions, bankruptcies, or asset sales, affected
            users receive advance notice and opt-out opportunities.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            Email from Raiiz Innovations
          </h2>
          <p>
            Transactional emails cannot be declined without account deletion.
            Non-administrative emails (digests, newsletters, notifications) are
            optional via account settings. We won&apos;t email you to ask for your
            password or other account information.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            Data Protection for EU Users
          </h2>
          <p>
            Raiiz Innovations collects personal data to customize reading
            experiences and enable personalized distribution of content with
            minimal third-party data sharing. Data collection fulfills
            contractual obligations under our Terms of Service. Users may
            exercise their rights under GDPR by contacting{" "}
            <a href="mailto:users@raiiz.com" className="text-accent hover:text-accent-hover">
              users@raiiz.com
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            Changes to this Policy
          </h2>
          <p>
            Raiiz Innovations updates this policy periodically with user
            notification for significant changes.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
            Questions
          </h2>
          <p>
            For questions about this policy, contact us at{" "}
            <a href="mailto:users@raiiz.com" className="text-accent hover:text-accent-hover">
              users@raiiz.com
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}
