import type { Metadata } from "next";
import { Compass } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-navy pb-24 pt-32">
      <div className="container-x">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/15 text-accent">
            <Compass className="h-10 w-10" strokeWidth={2} />
          </div>
          <p className="mt-7 font-display text-6xl font-semibold text-white">404</p>
          <h1 className="mt-3 font-display text-2xl font-semibold text-white md:text-3xl">
            Page Not Found
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/65">
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Try
            searching, or head back to the homepage.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/">Return Home</Button>
            <Button
              href="/search"
              variant="outline"
              className="border-white/25 text-white hover:border-white"
            >
              Search the Site
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
