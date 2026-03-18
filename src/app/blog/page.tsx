import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Calendar, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on sustainable building, green construction, AI in construction, and the future of the built environment from RAIIZ Innovations.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-primary" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              Blog
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Insights & <span className="gradient-text">Intelligence</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Expert perspectives on sustainable building, construction
              technology, and the future of the built environment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block p-8 rounded-2xl border border-border-subtle bg-bg-secondary/40 hover:border-border-accent transition-colors"
              >
                <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-accent" />
                    {new Date(post.date).toLocaleDateString("en-CA", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent-muted text-accent text-xs font-medium"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {post.description}
                </p>
                <span className="inline-block mt-4 text-accent text-sm font-medium">
                  Read more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
