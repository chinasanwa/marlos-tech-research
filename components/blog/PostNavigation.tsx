import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BlogPost } from "@/types";

export default function PostNavigation({
  previous,
  next,
}: {
  previous: BlogPost | null;
  next: BlogPost | null;
}) {
  if (!previous && !next) return null;

  return (
    <div className="grid gap-4 border-t border-paper-line pt-8 sm:grid-cols-2">
      <div>
        {previous && (
          <Link
            href={`/blog/${previous.slug}`}
            className="group flex h-full flex-col rounded-xl2 border border-paper-line bg-white p-5 transition-shadow hover:shadow-card"
          >
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-faint">
              <ArrowLeft className="h-3.5 w-3.5" />
              Previous
            </span>
            <span className="mt-2 font-display text-sm font-semibold text-navy transition-colors group-hover:text-accent">
              {previous.title}
            </span>
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link
            href={`/blog/${next.slug}`}
            className="group flex h-full flex-col items-end rounded-xl2 border border-paper-line bg-white p-5 text-right transition-shadow hover:shadow-card"
          >
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-faint">
              Next
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
            <span className="mt-2 font-display text-sm font-semibold text-navy transition-colors group-hover:text-accent">
              {next.title}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
