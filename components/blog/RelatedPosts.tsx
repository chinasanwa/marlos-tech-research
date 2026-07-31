import { BlogPost } from "@/types";
import ArticleCard from "@/components/blog/ArticleCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-paper-soft py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Keep Reading" title="Related Articles" />
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
