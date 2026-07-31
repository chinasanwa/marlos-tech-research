"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/types";

export default function FeaturedArticle({ post }: { post: BlogPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      className="group overflow-hidden rounded-xl2 border border-paper-line bg-white shadow-card transition-shadow hover:shadow-cardHover lg:grid lg:grid-cols-2"
    >
      <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
          Featured
        </span>
      </div>
      <div className="flex flex-col justify-center p-8 lg:p-10">
        <span className="eyebrow">{post.category}</span>
        <h2 className="mt-3 font-display text-2xl font-semibold text-navy md:text-3xl">
          {post.title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
          {post.excerpt}
        </p>
        <div className="mt-5 flex items-center gap-3 text-xs text-ink-faint">
          {post.author && <span>{post.author}</span>}
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-accent"
        >
          Read Full Article
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
