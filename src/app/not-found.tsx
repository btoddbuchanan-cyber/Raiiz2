import Link from "next/link";

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
      </div>
    </section>
  );
}
