import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FeaturedNews from "@/components/news/FeaturedNews";
import NewsExplorer from "@/components/news/NewsExplorer";
import { newsArticles } from "@/data/news";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news from Marlos Tech Research: research breakthroughs, industry partnerships, student showcases, workshops, grants, and program announcements.",
  openGraph: {
    title: "News | Marlos Tech Research",
    description:
      "Latest news from Marlos Tech Research: research breakthroughs, industry partnerships, student showcases, workshops, grants, and program announcements.",
    type: "website",
  },
};

export default function NewsPage() {
  const featured = newsArticles.find((a) => a.featured) ?? newsArticles[0];
  const restArticles = newsArticles.filter((a) => a.id !== featured.id);

  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="News from Marlos Tech Research"
        description="Updates on our research, partnerships, programs, and community initiatives."
        image="https://images.unsplash.com/photo-1653669486397-b802144ae64a?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Newsroom-style workspace with monitors and notes"
        breadcrumbLabel="News"
      />

      <section className="bg-paper py-20">
        <div className="container-x">
          <FeaturedNews article={featured} />
        </div>
      </section>

      <NewsExplorer articles={restArticles} />
    </>
  );
}
