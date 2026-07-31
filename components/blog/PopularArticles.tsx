import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types";

export default function PopularArticles({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="rounded-xl2 border border-paper-line bg-white p-6 shadow-card">
      <h3 className="font-display text-base font-semibold text-navy">Popular Articles</h3>
      <ul className="mt-5 space-y-5">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`} className="group flex items-start gap-3">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                <Image src={post.image} alt={post.title} fill sizes="56px" className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-medium text-navy transition-colors group-hover:text-accent">
                  {post.title}
                </p>
                <p className="mt-1 text-xs text-ink-faint">{post.date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
