import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";
import { newsArticles } from "@/data/news";
import Breadcrumb from "@/components/ui/Breadcrumb";

export async function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return { title: "News Article Not Found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      images: [{ url: article.image }],
    },
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
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
          <Breadcrumb items={[{ label: "News", href: "/news" }, { label: article.title }]} />
          <div className="mt-8 max-w-3xl">
            <span className="eyebrow text-white/50">{article.category}</span>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
              {article.title}
            </h1>
            <span className="mt-6 flex items-center gap-1.5 text-sm text-white/60">
              <Calendar className="h-3.5 w-3.5" />
              {article.date}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="container-x">
          <div className="relative -mt-24 mb-14 aspect-[16/8] overflow-hidden rounded-xl2 shadow-cardHover md:-mt-32">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <article className="mx-auto max-w-2xl">
            {article.content?.map((paragraph, i) => (
              <p key={i} className="mb-5 text-base leading-relaxed text-ink-muted">
                {paragraph}
              </p>
            ))}

            <Link
              href="/news"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to News
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
