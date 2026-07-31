import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/apply",
        "/application-success",
        "/contact-success",
        "/service-request-success",
        "/partnership-success",
        "/search",
      ],
    },
    sitemap: "https://marlostechresearch.com/sitemap.xml",
  };
}
