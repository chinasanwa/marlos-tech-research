"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { NewsArticle } from "@/types";

export default function FeaturedNews({ article }: { article: NewsArticle }) {
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
          src={article.image}
          alt={article.title}
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
        <span className="eyebrow">{article.category}</span>
        <h2 className="mt-3 font-display text-2xl font-semibold text-navy md:text-3xl">
          {article.title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
          {article.excerpt}
        </p>
        <p className="mt-4 text-xs text-ink-faint">{article.date}</p>
        <Link
          href={`/news/${article.slug}`}
          className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-accent"
        >
          Read More
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
