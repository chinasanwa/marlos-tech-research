"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Research Center", href: "/research" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Events", href: "/events" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open, and restore it on close/unmount.
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  // Close the drawer automatically on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.08)]"
          : "bg-navy"
      )}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-display text-base font-bold text-white">
            M
          </span>
          <span className="font-display text-lg font-semibold text-white tracking-tight">
            Marlos<span className="text-accent">Tech</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                pathname === link.href ? "text-white" : "text-white/75"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/search"
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-full text-white/75 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Search className="h-4 w-4" />
          </Link>
          <Button href="/apply" size="sm">
            Apply Now
          </Button>
        </div>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex h-[100dvh] w-full flex-col overflow-y-auto bg-[#0B1F3A] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Drawer header: logo + close button, matches the navbar height */}
            <div className="flex h-20 shrink-0 items-center justify-between border-b border-white/10 px-6">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-display text-base font-bold text-white">
                  M
                </span>
                <span className="font-display text-lg font-semibold text-white tracking-tight">
                  Marlos<span className="text-accent">Tech</span>
                </span>
              </Link>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 px-6 py-8">
              {NAV_LINKS.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ x: 24, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.08 + i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-lg px-3 py-4 font-display text-2xl font-semibold transition-colors",
                        active ? "text-accent" : "text-white hover:text-accent"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="shrink-0 space-y-3 border-t border-white/10 px-6 py-6">
              <Link
                href="/search"
                onClick={() => setOpen(false)}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/20 text-sm font-medium text-white transition-colors hover:border-accent hover:text-accent"
              >
                <Search className="h-4 w-4" />
                Search
              </Link>
              <Button href="/apply" size="lg" className="w-full">
                Apply Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
