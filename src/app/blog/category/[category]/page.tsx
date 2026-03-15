import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import CTABanner from "@/components/sections/CTABanner";
import { getAllPosts, getAllCategories } from "@/lib/blog";

interface CategoryPageProps {
  params: { category: string };
}

function slugToName(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateStaticParams() {
  return getAllCategories().map((cat) => ({
    category: cat.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const name = slugToName(params.category);
  return {
    title: `${name} Articles`,
    description: `Read our latest ${name.toLowerCase()} articles, guides, and tips from Colorado Insurance Services.`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const allPosts = getAllPosts();
  const categoryName = slugToName(params.category);
  const posts = allPosts.filter(
    (p) => p.frontmatter.category.toLowerCase().replace(/\s+/g, "-") === params.category
  );

  if (posts.length === 0) return notFound();

  const categories = getAllCategories();

  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-brand-beige">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: categoryName },
            ]}
            className="mb-8"
          />
          <FadeIn>
            <span className="eyebrow mb-3 block">{categoryName}</span>
            <h1 className="font-serif text-display-sm md:text-display text-brand-navy mb-4">
              {categoryName} articles
            </h1>
            <p className="text-body-lg text-neutral-600 font-sans max-w-3xl">
              Expert guides and advice about {categoryName.toLowerCase()} from Colorado Insurance Services.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          {/* Category pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full text-body-sm font-sans font-semibold bg-white text-brand-navy border border-neutral-200 hover:bg-brand-navy hover:text-white transition-colors"
            >
              All
            </Link>
            {categories.map((cat) => {
              const catSlug = cat.toLowerCase().replace(/\s+/g, "-");
              const isActive = catSlug === params.category;
              return (
                <Link
                  key={cat}
                  href={`/blog/category/${catSlug}`}
                  className={`px-4 py-2 rounded-full text-body-sm font-sans font-semibold transition-colors ${
                    isActive
                      ? "bg-brand-navy text-white"
                      : "bg-white text-brand-navy border border-neutral-200 hover:bg-brand-navy hover:text-white"
                  }`}
                >
                  {cat}
                </Link>
              );
            })}
          </div>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
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
                    <p className="text-body-sm text-neutral-500 font-sans mb-3">
                      {post.frontmatter.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-body-sm font-sans font-semibold text-brand-orange">
                      Read article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
