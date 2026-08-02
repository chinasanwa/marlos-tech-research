"use client";

import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="rounded-xl2 bg-navy p-6 text-white">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-accent">
        <Mail className="h-5 w-5" strokeWidth={2} />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-white">
        Stay in the loop
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60">
        Get new articles and research notes delivered to your inbox.
      </p>

      {submitted ? (
        <div className="mt-5 flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-sm text-white">
          <CheckCircle2 className="h-4 w-4 text-accent" />
          You&apos;re subscribed.
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mt-5 space-y-3"
        >
          <label htmlFor="blog-newsletter" className="sr-only">
            Email address
          </label>
          <input
            id="blog-newsletter"
            type="email"
            required
            placeholder="Your email address"
            className="h-11 w-full rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-accent"
          />
          <button
            type="submit"
            className="h-11 w-full rounded-full bg-accent text-sm font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
