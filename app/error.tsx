"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import Button from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <section className="flex min-h-[80vh] items-center bg-paper pb-24 pt-32">
      <div className="container-x">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent-soft text-accent">
            <AlertTriangle className="h-10 w-10" strokeWidth={2} />
          </div>
          <h1 className="mt-7 font-display text-3xl font-semibold text-navy md:text-4xl">
            Something went wrong
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            We hit an unexpected error loading this page. Please try again, or
            head back to the homepage.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => reset()}
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
            >
              Try Again
            </button>
            <Button href="/" variant="outline">
              Return Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
