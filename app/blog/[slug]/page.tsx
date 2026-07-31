import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock } from "lucide-react";
import { blogArticles } from "@/data/blog-articles";
import Breadcrumb from "@/components/ui/Breadcrumb";
import TableOfContents from "@/components/blog/TableOfContents";
import SocialShare from "@/components/blog/SocialShare";
import RelatedPosts from "@/components/blog/RelatedPosts";
import PostNavigation from "@/components/blog/PostNavigation";

export async function generateStaticParams() {
  return blogArticles.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogArticles.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.image }],
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

const slugify = (text: string) =>
  text.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogArticles.find((p) => p.slug === slug);

  if (!post) notFound();

  const index = blogArticles.findIndex((p) => p.slug === slug);
  const previous = index > 0 ? blogArticles[index - 1] : null;
  const next = index < blogArticles.length - 1 ? blogArticles[index + 1] : null;
  const related = blogArticles
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author ?? "Marlos Tech Research",
    },
    publisher: {
      "@type": "Organization",
      name: "Marlos Tech Research",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-navy pt-32 pb-16 md:pt-40">
        <div className="container-x">
          <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
          <div className="mt-8 max-w-3xl">
            <span className="eyebrow text-white/50">{post.category}</span>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/60">
              {post.author && (
                <div className="flex items-center gap-2.5">
                  {post.authorImage && (
                    <div className="relative h-9 w-9 overflow-hidden rounded-full">
                      <Image src={post.authorImage} alt={post.author} fill sizes="36px" className="object-cover" />
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-white">{post.author}</p>
                    {post.authorRole && <p className="text-xs text-white/50">{post.authorRole}</p>}
                  </div>
                </div>
              )}
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="container-x">
          <div className="relative -mt-24 mb-14 aspect-[16/8] overflow-hidden rounded-xl2 shadow-cardHover md:-mt-32">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
            <article className="max-w-2xl">
              {post.content?.map((section) => (
                <div key={section.heading} id={slugify(section.heading)} className="mb-9 scroll-mt-28">
                  <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted">
                    {section.body}
                  </p>
                </div>
              ))}

              {post.tags && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-paper-soft px-3 py-1.5 text-xs font-medium text-ink-muted"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-8 border-t border-paper-line pt-6">
                <SocialShare title={post.title} slug={post.slug} />
              </div>
            </article>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              {post.content && <TableOfContents sections={post.content} />}
            </aside>
          </div>

          <div className="mt-16">
            <PostNavigation previous={previous} next={next} />
          </div>
        </div>
      </section>

      <RelatedPosts posts={related} />
    </>
  );
}
