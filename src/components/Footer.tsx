import Link from "next/link";

const footerLinks = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/platform", label: "Platform" },
    { href: "/team", label: "Team" },
    { href: "/news", label: "News" },
  ],
  Investors: [
    { href: "/investors", label: "Investment Opportunities" },
    { href: "/investors#tax-credit", label: "BC Tax Credit" },
    { href: "/contact", label: "Investor Relations" },
  ],
  Resources: [
    { href: "/contact", label: "Contact Us" },
    { href: "/webinar", label: "Webinar Registration" },
    { href: "/blog", label: "Blog" },
  ],
  Legal: [
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/guidelines", label: "Community Guidelines" },
  ],
};

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-bg-secondary border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <span className="text-2xl font-bold tracking-tight font-[family-name:var(--font-dm-sans)]">
                R<span className="text-accent">AI</span>IZ
              </span>
              <span className="block text-xs text-text-secondary tracking-widest uppercase mt-0.5">
                Innovations
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-6">
              The agentic interface for the $16.5T construction industry. One
              platform. Total market alignment.
            </p>
            <address className="not-italic text-sm text-text-secondary leading-relaxed">
              <p>25th Floor, 700 West Georgia St.</p>
              <p>Vancouver, BC V7Y 1K8</p>
              <p className="mt-2">
                <a
                  href="tel:236-900-2006"
                  className="hover:text-accent transition-colors"
                >
                  236-900-2006
                </a>
              </p>
            </address>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-text-primary tracking-wide uppercase mb-4">
                {title}
              </h3>
              <ul className="space-y-3" role="list">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sustainability note */}
        <div className="border-t border-border-subtle pt-8 mb-8">
          <p className="text-xs text-text-secondary leading-relaxed max-w-2xl">
            Proudly headquartered in a CAGBC Certified Zero Carbon Building — a
            reflection of our commitment to sustainability and low-impact
            innovation.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Raiiz Innovations Inc. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/raiiz-innovations"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="RAIIZ on LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/raiizinnovation"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="RAIIZ on X"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
