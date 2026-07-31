import type { MetadataRoute } from "next";
import { programs } from "@/data/programs";
import { blogArticles } from "@/data/blog-articles";
import { newsArticles } from "@/data/news";

const BASE_URL = "https://marlostechresearch.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/programs",
    "/research",
    "/services",
    "/contact",
    "/partnerships",
    "/blog",
    "/news",
    "/events",
    "/careers",
    "/resources",
    "/faq",
    "/apply",
    "/privacy",
    "/terms",
    "/cookies",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const programRoutes: MetadataRoute.Sitemap = programs.map((program) => ({
    url: `${BASE_URL}/programs/${program.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogArticles.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  const newsRoutes: MetadataRoute.Sitemap = newsArticles.map((article) => ({
    url: `${BASE_URL}/news/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [...staticRoutes, ...programRoutes, ...blogRoutes, ...newsRoutes];
}
