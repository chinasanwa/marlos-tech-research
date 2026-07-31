"use client";

import { useEffect, useState } from "react";
import { Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react";

export default function SocialShare({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const path = `/blog/${slug}`;
  const [shareUrl, setShareUrl] = useState(path);

  useEffect(() => {
    setShareUrl(`${window.location.origin}${path}`);
  }, [path]);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      id: "facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      id: "twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      id: "linkedin",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — silently ignore.
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
        Share
      </span>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${link.id}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-paper-line text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-paper-line text-ink-muted transition-colors hover:border-accent hover:text-accent"
      >
        {copied ? <Check className="h-4 w-4 text-accent" /> : <Link2 className="h-4 w-4" />}
      </button>
    </div>
  );
}
