# Marlos Tech Research — Website (Module 1)

Module 1 delivers the project setup, design system, global layout (navbar +
footer), and the full homepage.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion ·
Lucide React · React Hook Form · Zod

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What's included in Module 1

- Global design system: colors, typography (Space Grotesk / Inter /
  JetBrains Mono), spacing, and shared UI primitives in `components/ui`.
- Sticky navbar with animated mobile drawer (`components/layout/Navbar.tsx`).
- Footer with quick links, contact details, and newsletter form
  (`components/layout/Footer.tsx`).
- Full homepage (`app/page.tsx`) built from section components in
  `components/home/`: Hero, About Preview, Core Values, Programs Preview,
  Research Preview, Services Preview, Blog Preview, Testimonials, and a
  closing CTA.
- Structured content in `data/` (programs, services, research areas, blog
  posts, testimonials, core values) typed via `types/index.ts`.

Routes referenced in navigation (About, Programs, Research, Services, Blog,
Events, News, Partnership, Contact, Apply Now) are linked from the navbar and
footer and will be built out in later modules.

## Notes

- Photography is served from Unsplash via `next/image` (configured in
  `next.config.ts`). Swap any `image` field in `data/` for the client's own
  photography when available.
- Pricing shown on program cards is Registration Fee (₦10,000) and
  Certification Fee (₦10,000) only — course fees are intentionally withheld
  per the brief and should be added once confirmed.
