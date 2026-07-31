import { programs } from "@/data/programs";
import { blogArticles } from "@/data/blog-articles";
import { newsArticles } from "@/data/news";
import { events } from "@/data/events";
import { researchFocusAreas } from "@/data/research-focus";
import { servicesFull } from "@/data/services-full";

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  href: string;
  type: "Program" | "Blog" | "News" | "Event" | "Research" | "Service";
}

export function getSearchIndex(): SearchResult[] {
  return [
    ...programs.map((p) => ({
      id: `program-${p.id}`,
      title: p.title,
      description: p.description,
      href: `/programs/${p.slug}`,
      type: "Program" as const,
    })),
    ...blogArticles.map((b) => ({
      id: `blog-${b.id}`,
      title: b.title,
      description: b.excerpt,
      href: `/blog/${b.slug}`,
      type: "Blog" as const,
    })),
    ...newsArticles.map((n) => ({
      id: `news-${n.id}`,
      title: n.title,
      description: n.excerpt,
      href: `/news/${n.slug}`,
      type: "News" as const,
    })),
    ...events.map((e) => ({
      id: `event-${e.id}`,
      title: e.title,
      description: e.description,
      href: `/events`,
      type: "Event" as const,
    })),
    ...researchFocusAreas.map((r) => ({
      id: `research-${r.id}`,
      title: r.title,
      description: r.description,
      href: `/research#${r.id}`,
      type: "Research" as const,
    })),
    ...servicesFull.map((s) => ({
      id: `service-${s.id}`,
      title: s.title,
      description: s.description,
      href: `/services#${s.id}`,
      type: "Service" as const,
    })),
  ];
}
