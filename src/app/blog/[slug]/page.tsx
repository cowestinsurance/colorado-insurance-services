import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FadeIn from "@/components/animations/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import { getAllSlugs, getPostBySlug, getPostsByCluster } from "@/lib/blog";
import { markdownToHtml } from "@/lib/markdown";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const html = markdownToHtml(post.content);

  // Get related posts from same cluster
  const relatedPosts = post.frontmatter.cluster
    ? getPostsByCluster(post.frontmatter.cluster)
        .filter((p) => p.slug !== post.slug)
        .slice(0, 4)
    : [];

  const publishDate = new Date(post.frontmatter.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <section className="pt-28 pb-8 md:pt-36 bg-brand-beige">
        <Container variant="narrow">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.frontmatter.category, href: `/blog/category/${post.frontmatter.category.toLowerCase().replace(/\s+/g, "-")}` },
              { label: post.frontmatter.title },
            ]}
            className="mb-8"
          />
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-body-sm font-sans text-neutral-500 hover:text-brand-orange transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Back to blog
            </Link>
            <span className="text-xs font-sans font-semibold text-brand-orange uppercase tracking-wider block mb-3">
              {post.frontmatter.category}
            </span>
            <h1 className="font-serif text-display-sm md:text-display text-brand-navy mb-4">
              {post.frontmatter.title}
            </h1>
            <p className="text-body-lg text-neutral-600 font-sans mb-6">
              {post.frontmatter.description}
            </p>
            <div className="flex items-center gap-4 text-body-sm text-neutral-500 font-sans">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {publishDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {Math.ceil(post.content.split(/\s+/).length / 200)} min read
              </span>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container variant="narrow">
          <FadeIn>
            <article
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </FadeIn>
        </Container>
      </section>

      {/* Related Posts from Same Cluster */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-brand-beige">
          <Container>
            <h2 className="font-serif text-heading text-brand-navy text-center mb-8">
              Related articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block bg-white rounded-2xl border border-neutral-200 p-5 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-xs font-sans font-semibold text-brand-orange uppercase tracking-wider">
                    {related.frontmatter.category}
                  </span>
                  <h3 className="font-sans font-semibold text-body text-brand-navy mt-2 mb-2 group-hover:text-brand-orange transition-colors">
                    {related.frontmatter.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-body-sm font-sans font-semibold text-brand-orange">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.frontmatter.title,
            description: post.frontmatter.description,
            datePublished: post.frontmatter.date,
            dateModified: post.frontmatter.updated || post.frontmatter.date,
            author: {
              "@type": "Organization",
              name: "Colorado Insurance Services",
            },
            publisher: {
              "@type": "Organization",
              name: "Colorado Insurance Services",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
            },
          }),
        }}
      />

      <CTABanner />
    </>
  );
}
