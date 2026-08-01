"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight, CheckCircle2 } from "lucide-react";
import { headOffice, regionalOffices } from "@/data/offices";
import { getSocialLinks, SocialLink } from "@/lib/social-links";

const SOCIAL_ICONS: Record<SocialLink["id"], React.ElementType> = {
  facebook: Facebook,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
};

const columns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Events", href: "/events" },
      { label: "Partnerships", href: "/partnerships" },
      { label: "Careers", href: "/careers" },
      { label: "Resources", href: "/resources" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Artificial Intelligence", href: "/programs/artificial-intelligence" },
      { label: "Machine Learning", href: "/programs/machine-learning" },
      { label: "Cybersecurity", href: "/programs/cybersecurity" },
      { label: "Cloud Computing", href: "/programs/cloud-computing" },
    ],
  },
  {
    title: "Research",
    links: [
      { label: "Artificial Intelligence", href: "/research#ai" },
      { label: "Cloud Computing", href: "/research#cloud-computing" },
      { label: "Cybersecurity", href: "/research#cybersecurity" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Technology Consulting", href: "/services#technology-consulting" },
      { label: "Cloud Solutions", href: "/services#cloud-solutions" },
      { label: "Cybersecurity Consulting", href: "/services#cybersecurity-consulting" },
    ],
  },
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-x py-16 md:py-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-6 md:gap-x-10">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-display text-base font-bold text-white">
                M
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Marlos<span className="text-accent">Tech</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Building Africa&apos;s future through research, innovation, and
              talent development.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  <span className="block font-medium text-white/90">Head Office</span>
                  <address className="mt-0.5 not-italic leading-relaxed">
                    {headOffice.addressLines?.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  <span className="block font-medium text-white/90">Regional Offices</span>
                  <span className="mt-0.5 block leading-relaxed">
                    {regionalOffices.map((office) => office.city).join(" · ")}
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:info@marlostechresearch.com.ng" className="hover:text-white">
                  info@marlostechresearch.com.ng
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+2347044581634" className="hover:text-white">
                  +234 704 458 1634
                </a>
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">Stay updated</p>
            <p className="mt-1 text-xs text-white/50">
              Program announcements and research notes, occasionally.
            </p>
          </div>
          {subscribed ? (
            <div className="flex h-11 w-full max-w-sm items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 text-sm text-white">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
              You&apos;re subscribed. Thank you!
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="flex w-full max-w-sm items-center gap-2"
            >
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="Your email address"
                className="h-11 w-full rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 transition-colors focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent transition-colors hover:bg-accent-dark"
              >
                <ArrowRight className="h-4 w-4 text-white" />
              </button>
            </form>
          )}

          <div className="flex items-center gap-3">
            {getSocialLinks().map((link) => {
              const Icon = SOCIAL_ICONS[link.id];
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Marlos Tech Research. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/40">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
