import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/ui/PageHero";
import SearchClient from "@/components/search/SearchClient";

export const metadata: Metadata = {
  title: "Search",
  description: "Search Marlos Tech Research programs, blog articles, news, events, research, and services.",
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Search"
        title="Search Marlos Tech Research"
        description="Find programs, articles, news, events, research areas, and services."
        image="https://images.unsplash.com/photo-1573167627769-e201a7ddf409?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Person searching on a laptop"
        breadcrumbLabel="Search"
      />
      <section className="bg-paper-soft py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <Suspense
              fallback={<div className="h-14 animate-pulse rounded-full bg-paper-line" />}
            >
              <SearchClient />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
