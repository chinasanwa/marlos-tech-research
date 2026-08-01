# Module 6 Changelog — Final Module + Critical Bug Fixes

## Critical Bug Fixes

### 1. "Apply Now" → 404 (fixed)
No `/apply` route existed anywhere in the project, even though six different
buttons pointed to it (`Hero`, `CTASection`, `Navbar` desktop + mobile,
`ResearchCTA`, `ProgramFullCard`, and the Research hero). Built:
- `app/apply/page.tsx` — hero + application form
- `components/apply/ApplyForm.tsx` — validated form (Zod + React Hook Form)
  that reads `?program=` and `?track=` from the URL to prefill the "Applying
  For" field, so every existing Apply link (including program-specific and
  research-track links) now works and lands in the right context.

### 2–5. Success pages for every submission flow (fixed)
Built a shared `components/shared/SuccessPage.tsx` template (animated icon,
title, message, optional detail, Return Home / Explore Programs / Contact Us
buttons) and four routes using it:
- `app/application-success/page.tsx`
- `app/contact-success/page.tsx`
- `app/service-request-success/page.tsx`
- `app/partnership-success/page.tsx`

**`components/contact/ContactForm.tsx` was rewritten** to redirect via
`router.push(...)` instead of showing an inline "message sent" state. It
reads the existing `?type=` query param (already used by
`ServicesCTA.tsx` → `?type=consultation` and the Partnerships page →
`?type=partnership`, both from earlier modules) to route to the correct
success page:
- `?type=consultation` → `/service-request-success`
- `?type=partnership` → `/partnership-success`
- anything else → `/contact-success`

`ApplyForm.tsx` redirects to `/application-success` on submit.

No existing query-param usage elsewhere had to change — the routing logic
was built to match what was already there.

### 6. Newsletter signup was silently broken (fixed)
`components/layout/Footer.tsx`'s newsletter `<form>` had no `onSubmit`
handler, so submitting it triggered a full-page GET reload instead of a
success message. Added local state and a proper handler with a "You're
subscribed" confirmation, matching the pattern already used in
`components/blog/NewsletterSignup.tsx`.

## Additional Bugs Found During Audit (not mentioned in the brief, fixed anyway)

- **`app/research/page.tsx`**: the "Partner With Us" button linked to
  `/partnership` (singular), a route that has never existed. The real route,
  built in Module 4, is `/partnerships` (plural). Fixed the href.
- **`components/research/ResearchFocusAreas.tsx`** and
  **`components/services/ServicesGrid.tsx`**: cards were missing `id={...}`
  attributes, so every `/research#{id}` and `/services#{id}` anchor link
  (used by the Footer, homepage previews, and each page's own "Learn More"
  buttons) silently failed to scroll to the right section. Added
  `id={area.id}` / `id={service.id}` plus `scroll-mt-28` so the anchor lands
  below the sticky navbar instead of behind it.
- **Missing program detail route**: `components/home/ProgramsPreview.tsx`
  has linked to `/programs/${program.slug}` since Module 1, but
  `app/programs/[slug]/page.tsx` was never built — a real 404 on every
  homepage "Learn More" program link. Built the page (overview, career
  outcomes, skills gained, fees, Apply CTA, static params + metadata).
- **Unreachable pages**: `/careers` (Module 5), `/resources`, and `/faq`
  (this module) had no link anywhere in Navbar or Footer. Added them to the
  Footer's Quick Links column. Also added a Privacy Policy / Terms of
  Service / Cookie Policy row to the Footer's bottom bar, since those three
  pages are new this module and had no entry point either.

## New Pages (Final Features)

- `app/faq/page.tsx` — site-wide FAQ using a new reusable
  `components/shared/FAQAccordion.tsx` and `data/site-faq.ts`.
- `app/privacy/page.tsx`, `app/terms/page.tsx`, `app/cookies/page.tsx` — all
  built on a new reusable `components/shared/LegalPage.tsx` template.
- `app/resources/page.tsx` — Research Papers, Case Studies, White Papers,
  and Technology Guides, with category filtering
  (`components/resources/ResourcesExplorer.tsx`,
  `components/resources/ResourceCard.tsx`, `data/resources.ts`). Since no
  real downloadable files exist, "Download" buttons route to
  `/contact?resource=slug` ("Request Access") rather than link to a fake
  file — consistent with how other CTAs in the project already route
  through Contact.
- `app/search/page.tsx` + `components/search/SearchClient.tsx` +
  `lib/search-index.ts` — a global search covering Programs, Blog, News,
  Events, Research, and Services in one unified, filterable index. Added a
  search icon to both the desktop and mobile nav (see below) so the feature
  is actually reachable.

## Loading, Error, and 404 UI

- `app/loading.tsx` — global skeleton/spinner shown during route transitions.
- `app/blog/loading.tsx`, `app/news/loading.tsx` — skeleton loaders shaped
  like each page's actual layout (featured card + grid).
- `app/error.tsx` — client error boundary with a "Try Again" / "Return Home"
  recovery UI.
- `app/not-found.tsx` — custom, on-brand 404 page.

## SEO

- `app/sitemap.ts` — dynamic sitemap covering all static routes plus every
  program, blog post, and news article slug.
- `app/robots.ts` — allows all crawling except form/utility routes (`/apply`,
  the four success pages, `/search`).
- Metadata (title/description, and Open Graph where relevant) added to every
  new page created this module.

## Other Modified Files

- **`components/layout/Navbar.tsx`** — added a search icon link (desktop,
  next to Apply Now; mobile, in the drawer footer). No other changes to nav
  structure, styling, or the mobile drawer fix from Module 4.
- **`types/index.ts`** — added `Resource` type (additive only).
- **`components/contact/ContactFormSection.tsx`** — wrapped `<ContactForm />`
  in `<Suspense>` since it now uses `useSearchParams` (required by Next.js
  for static rendering).

## Performance & Accessibility Notes

- Images already use `next/image` throughout the project (Modules 1–5),
  which lazy-loads by default except where `priority` is explicitly set on
  hero/LCP images — no changes needed.
- Fonts are already self-hosted via `next/font` (Module 1) — no changes
  needed.
- Code splitting is automatic per-route under the App Router; no new
  configuration was required.
- New interactive elements follow the accessibility patterns already
  established in the project: `aria-label` on icon-only buttons,
  `aria-expanded` on accordions/toggles, associated `<label htmlFor>` on all
  form fields, and semantic heading structure. No sweeping accessibility
  rewrite was done to Modules 1–5 output, since it was already consistent
  with these patterns.

## Not Done / Could Not Verify

This environment has no network access, so `npm install` and `npm run
build` could not actually be executed to confirm a clean production build.
Every file was written and cross-checked by hand (route audit, Suspense
boundaries, id/anchor matching, single default export per page), but please
run `npm run build` after pulling these changes before deploying.
