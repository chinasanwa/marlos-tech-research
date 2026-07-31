"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { BlogPost } from "@/types";
import ArticleCard from "@/components/blog/ArticleCard";
import PopularArticles from "@/components/blog/PopularArticles";
import NewsletterSignup from "@/components/blog/NewsletterSignup";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BlogExplorer({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts]
  );

  const popularPosts = useMemo(() => posts.filter((p) => p.popular).slice(0, 4), [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        query.trim() === "" ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [posts, category, query]);

  return (
    <section className="bg-paper-soft py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Articles" title="Latest Articles" />

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category === cat
                    ? "bg-navy text-white"
                    : "bg-white text-ink-muted hover:bg-paper-line"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="h-11 w-full rounded-full border border-paper-line bg-white pl-11 pr-4 text-sm text-ink outline-none transition-colors focus:border-accent"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {filteredPosts.length > 0 ? (
              <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
                {filteredPosts.map((post, i) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                  >
                    <ArticleCard post={post} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl2 border border-paper-line bg-white p-10 text-center text-sm text-ink-muted">
                No articles match your search. Try a different keyword or category.
              </div>
            )}
          </div>

          <div className="space-y-6">
            {popularPosts.length > 0 && <PopularArticles posts={popularPosts} />}
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </section>
  );
}
