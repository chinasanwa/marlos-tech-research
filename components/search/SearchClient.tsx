"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, ArrowUpRight } from "lucide-react";
import { getSearchIndex, SearchResult } from "@/lib/search-index";

const TYPES: SearchResult["type"][] = [
  "Program",
  "Blog",
  "News",
  "Event",
  "Research",
  "Service",
];

export default function SearchClient() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [activeType, setActiveType] = useState<string>("All");

  const index = useMemo(() => getSearchIndex(), []);

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    return index.filter((item) => {
      const matchesType = activeType === "All" || item.type === activeType;
      const matchesQuery =
        trimmed === "" ||
        item.title.toLowerCase().includes(trimmed) ||
        item.description.toLowerCase().includes(trimmed);
      return matchesType && matchesQuery;
    });
  }, [index, query, activeType]);

  return (
    <div>
      <div className="relative">
        <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-faint" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search programs, articles, research, and more..."
          autoFocus
          className="h-14 w-full rounded-full border border-paper-line bg-white pl-14 pr-5 text-base text-ink shadow-card outline-none transition-colors focus:border-accent"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {["All", ...TYPES].map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeType === type
                ? "bg-navy text-white"
                : "bg-paper-soft text-ink-muted hover:bg-paper-line"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-ink-faint">
        {results.length} result{results.length === 1 ? "" : "s"}
        {query.trim() && ` for "${query.trim()}"`}
      </p>

      {results.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {results.map((result) => (
            <Link
              key={result.id}
              href={result.href}
              className="group rounded-xl2 border border-paper-line bg-white p-5 shadow-card transition-shadow hover:shadow-cardHover"
            >
              <span className="eyebrow">{result.type}</span>
              <h3 className="mt-2 font-display text-base font-semibold text-navy transition-colors group-hover:text-accent">
                {result.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">
                {result.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-navy transition-colors group-hover:text-accent">
                View
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-xl2 border border-paper-line bg-white p-10 text-center text-sm text-ink-muted">
          No results found. Try a different keyword or filter.
        </div>
      )}
    </div>
  );
}
