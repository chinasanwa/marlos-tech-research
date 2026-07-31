import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import BlogExplorer from "@/components/blog/BlogExplorer";
import { blogArticles } from "@/data/blog-articles";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles from Marlos Tech Research on artificial intelligence, cybersecurity, cloud computing, machine learning, data science, technology careers, and digital transformation.",
  openGraph: {
    title: "Blog | Marlos Tech Research",
    description:
      "Articles from Marlos Tech Research on AI, cybersecurity, cloud computing, machine learning, data science, technology careers, and digital transformation.",
    type: "website",
  },
};

export default function BlogPage() {
  const featured = blogArticles.find((p) => p.featured) ?? blogArticles[0];
  const restPosts = blogArticles.filter((p) => p.id !== featured.id);

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="The Marlos Tech Research Blog"
        description="Articles from our researchers and instructors on AI, cybersecurity, cloud computing, data, careers, and digital transformation."
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Writer working at a desk with a laptop"
        breadcrumbLabel="Blog"
      />

      <section className="bg-paper py-20">
        <div className="container-x">
          <FeaturedArticle post={featured} />
        </div>
      </section>

      <BlogExplorer posts={restPosts} />
    </>
  );
}
