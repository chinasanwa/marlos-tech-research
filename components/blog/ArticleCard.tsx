import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/types";

export default function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl2 shadow-card">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-center gap-3 text-xs font-medium text-ink-faint">
        <span className="text-accent">{post.category}</span>
        <span>·</span>
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.readTime}</span>
      </div>
      <h3 className="mt-2 font-display text-lg font-semibold text-navy transition-colors group-hover:text-accent">
        {post.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{post.excerpt}</p>
      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-accent">
        Read More
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
