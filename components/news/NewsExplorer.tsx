"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { NewsArticle } from "@/types";
import NewsCard from "@/components/news/NewsCard";
import SectionHeading from "@/components/ui/SectionHeading";

const PAGE_SIZE = 4;

export default function NewsExplorer({ articles }: { articles: NewsArticle[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(articles.map((a) => a.category)))],
    [articles]
  );

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = category === "All" || article.category === category;
      const matchesQuery =
        query.trim() === "" ||
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [articles, category, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [category, query]);

  return (
    <section className="bg-paper-soft py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Newsroom" title="Latest News" />

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
              placeholder="Search news..."
              className="h-11 w-full rounded-full border border-paper-line bg-white pl-11 pr-4 text-sm text-ink outline-none transition-colors focus:border-accent"
            />
          </div>
        </div>

        {paginated.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {paginated.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              >
                <NewsCard article={article} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-xl2 border border-paper-line bg-white p-10 text-center text-sm text-ink-muted">
            No news items match your search. Try a different keyword or category.
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              aria-label="Previous page"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper-line text-ink-muted transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                  page === p ? "bg-navy text-white" : "text-ink-muted hover:bg-white"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              aria-label="Next page"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper-line text-ink-muted transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
