import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { MDXContent } from "@/components/MDXContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      publishedTime: post.date,
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

function getRelatedPosts(currentSlug: string, currentTags: string[], count = 3) {
  const allPosts = getAllPosts();
  return allPosts
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      ...p,
      relevance: p.tags.filter((t) => currentTags.includes(t)).length,
    }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, count);
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, post.tags);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: { "@type": "Person", name: post.author },
    datePublished: post.date,
    publisher: { "@type": "Organization", name: "RAIIZ Innovations Inc." },
    url: `https://raiiz2.vercel.app/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-primary" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-accent" />
              {new Date(post.date).toLocaleDateString("en-CA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>By {post.author}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-accent-muted text-accent text-xs font-medium"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 prose-custom">
          <MDXContent source={post.content} />
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-16 border-t border-border-subtle">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block p-6 rounded-xl border border-border-subtle hover:border-accent/40 transition-colors"
                >
                  <p className="text-xs text-text-secondary mb-2">
                    {new Date(related.date).toLocaleDateString("en-CA", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="text-sm font-semibold leading-snug group-hover:text-accent transition-colors line-clamp-3">
                    {related.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 border-t border-border-subtle">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-text-secondary mb-6">
            Want to learn more about how RAIIZ is transforming construction?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-bg-primary font-semibold rounded-xl hover:bg-accent-hover transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
