import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import CTABanner from "@/components/sections/CTABanner";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { topicalMaps } from "@/data/topical-maps";

export const metadata: Metadata = {
  title: "Insurance Blog & Resources",
  description:
    "Expert insurance guides, tips, and Colorado-specific advice from Colorado Insurance Services. Learn about home, auto, business insurance and more.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  const pillarPosts = posts.filter((p) => p.frontmatter.clusterRole === "pillar");
  const recentPosts = posts.slice(0, 9);

  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-brand-beige">
        <Container>
          <Breadcrumbs items={[{ label: "Blog" }]} className="mb-8" />
          <FadeIn>
            <span className="eyebrow mb-3 block">Resources &amp; Guides</span>
            <h1 className="font-serif text-display-sm md:text-display text-brand-navy mb-4">
              Insurance insights for Colorado
            </h1>
            <p className="text-body-lg text-neutral-600 font-sans max-w-3xl">
              Expert guides, local tips, and plain-English explanations to help you make smart insurance decisions.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Pillar Guides */}
      {pillarPosts.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              eyebrow="Featured Guides"
              title="Comprehensive insurance guides"
              subtitle="In-depth resources covering everything you need to know."
            />
            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillarPosts.map((post) => (
                <StaggerItem key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-brand-beige rounded-2xl p-6 h-full hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="text-xs font-sans font-semibold text-brand-orange uppercase tracking-wider">
                      {post.frontmatter.category}
                    </span>
                    <h3 className="font-serif text-heading-sm text-brand-navy mt-2 mb-3 group-hover:text-brand-orange transition-colors">
                      {post.frontmatter.title}
                    </h3>
                    <p className="text-body-sm text-neutral-600 font-sans mb-4">
                      {post.frontmatter.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-body-sm font-sans font-semibold text-brand-orange">
                      Read guide <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </Container>
        </section>
      )}

      {/* Category Filter + Recent Posts */}
      <section className="section-padding bg-brand-beige">
        <Container>
          <SectionHeading eyebrow="All Articles" title="Latest posts" />

          {/* Category pills */}
          {categories.length > 1 && (
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              <Link
                href="/blog"
                className="px-4 py-2 rounded-full text-body-sm font-sans font-semibold bg-brand-navy text-white"
              >
                All
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/blog/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-4 py-2 rounded-full text-body-sm font-sans font-semibold bg-white text-brand-navy hover:bg-brand-navy hover:text-white transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>
          )}

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl border border-neutral-200 overflow-hidden h-full hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-sans font-semibold text-brand-orange uppercase tracking-wider">
                        {post.frontmatter.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-neutral-400 font-sans">
                        <Clock className="w-3 h-3" />
                        {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="font-sans font-semibold text-body-lg text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                      {post.frontmatter.title}
                    </h3>
                    <p className="text-body-sm text-neutral-500 font-sans">
                      {post.frontmatter.description}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Topical Maps */}
      <section className="section-padding bg-white">
        <Container variant="narrow">
          <SectionHeading
            eyebrow="Topic Guides"
            title="Explore by topic"
            subtitle="Dive deep into the insurance topics that matter most."
          />
          <FadeIn>
            <div className="space-y-6">
              {topicalMaps.map((cluster) => (
                <div
                  key={cluster.slug}
                  className="bg-brand-beige rounded-2xl p-6"
                >
                  <h3 className="font-serif text-heading-sm text-brand-navy mb-1">
                    {cluster.name}
                  </h3>
                  <p className="text-body-sm text-neutral-500 font-sans mb-4">
                    {cluster.description}
                  </p>
                  <div className="space-y-2">
                    <Link
                      href={`/blog/${cluster.pillarSlug}`}
                      className="flex items-center gap-2 text-body-sm font-sans font-semibold text-brand-orange hover:underline"
                    >
                      <ArrowRight className="w-4 h-4" />
                      {cluster.pillarTitle}
                    </Link>
                    {cluster.spokes.map((spoke) => (
                      <Link
                        key={spoke.slug}
                        href={`/blog/${spoke.slug}`}
                        className="flex items-center gap-2 text-body-sm font-sans text-neutral-600 hover:text-brand-orange transition-colors ml-4"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 flex-shrink-0" />
                        {spoke.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
