import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NewsArticle } from "@/types";

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link href={`/news/${article.slug}`} className="group block h-full">
      <div className="overflow-hidden rounded-xl2 border border-paper-line bg-white shadow-card transition-shadow hover:shadow-cardHover">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-navy/90 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            {article.category}
          </span>
        </div>
        <div className="p-6">
          <p className="text-xs font-medium text-ink-faint">{article.date}</p>
          <h3 className="mt-2 font-display text-lg font-semibold text-navy transition-colors group-hover:text-accent">
            {article.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{article.excerpt}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-accent">
            Read More
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
