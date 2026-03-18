import Link from "next/link";

const suggestedLinks = [
  { href: "/about", label: "About" },
  { href: "/platform", label: "Platform" },
  { href: "/blog", label: "Blog" },
  { href: "/investors", label: "Investors" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-accent/20 mb-4">404</div>
        <h1 className="text-3xl font-bold mb-4 text-text-primary">
          Page Not Found
        </h1>
        <p className="text-text-secondary mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 bg-accent text-bg-primary font-semibold rounded-xl hover:bg-accent-hover transition-colors"
        >
          Back to Home
        </Link>

        <div className="mt-12 pt-8 border-t border-border-subtle">
          <p className="text-sm text-text-secondary mb-4">
            You might be looking for:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {suggestedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-accent border border-border-subtle rounded-lg hover:border-accent/30 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
