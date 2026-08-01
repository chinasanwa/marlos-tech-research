# Module 5 Changelog — News, Blog, Events & Careers

## New Pages

- `app/news/page.tsx` — News listing: hero, featured article, category
  filters, search, 4-per-page pagination, "Read More" links.
- `app/news/[slug]/page.tsx` — Individual news article page. **Not explicitly
  requested in the brief**, but added so the "Read More" buttons on news
  cards resolve to a real page instead of a dead link. Includes hero image,
  date, body content, and JSON-LD `NewsArticle` structured data.
- `app/blog/page.tsx` — Blog listing: hero, featured article, category
  filters, search, latest articles grid, popular articles sidebar,
  newsletter signup.
- `app/blog/[slug]/page.tsx` — Single blog post: hero image, author, date,
  reading time, table of contents, social sharing, tags, related posts,
  previous/next navigation, JSON-LD `Article` structured data.
- `app/events/page.tsx` — Events listing: hero, 5 upcoming events each with
  date/time/venue/description/Register button, closing CTA.
- `app/careers/page.tsx` — Careers: hero, Why Work With Us, open positions
  (accordion with responsibilities/requirements), benefits, application CTA.

## New Components

**`components/blog/`**
`FeaturedArticle.tsx`, `ArticleCard.tsx`, `PopularArticles.tsx`,
`NewsletterSignup.tsx`, `BlogExplorer.tsx` (search + category filter + grid +
sidebar), `TableOfContents.tsx`, `SocialShare.tsx`, `RelatedPosts.tsx`,
`PostNavigation.tsx`

**`components/news/`**
`NewsCard.tsx`, `FeaturedNews.tsx`, `NewsExplorer.tsx` (search + category
filter + paginated grid)

**`components/events/`**
`EventCard.tsx`, `EventsList.tsx`

**`components/careers/`**
`WhyWorkWithUs.tsx`, `OpenPositions.tsx` (accordion), `CareersBenefits.tsx`

All are new — no existing components from Modules 1–4 were recreated.
`PageHero`, `SectionHeading`, `Breadcrumb`, `Button`, and
`components/shared/ContactCTA.tsx` (from Module 4) are reused as-is.

## New Data Files

- `data/blog-articles.ts` — 7 full blog articles (Artificial Intelligence,
  Cybersecurity, Cloud Computing, Machine Learning, Data Science, Technology
  Careers, Digital Transformation), each with author, tags, and structured
  content sections for the table of contents.
- `data/news.ts` — 6 news items (AI Research Breakthrough, New Industry
  Partnership, Student Innovation Showcase, Technology Workshop, Research
  Grant Award, Cloud Computing Bootcamp), each with body content for the
  detail page.
- `data/events.ts` — 5 events (AI Bootcamp, Tech Summit, Cybersecurity
  Workshop, Innovation Challenge, Data Science Seminar).
- `data/careers.ts` — 6 open positions (Research Assistant, AI Engineer,
  Software Developer, Data Analyst, Cybersecurity Researcher, Marketing
  Officer), plus "Why Work With Us" and benefits content.

### Why `data/blog-articles.ts` instead of reusing `data/blog.ts`

`data/blog.ts` already exists from Module 1 and powers the **Home page**
preview section (`components/home/BlogPreview.tsx`), which is on the
"do not recreate" list. Renaming or restructuring it to fit the richer
single-post content model (author, tags, table-of-contents sections) would
have required touching Home page files. Instead, the fuller article set
lives in a new file, `data/blog-articles.ts`, and `data/blog.ts` was left
completely untouched.

## Modified Files

### `types/index.ts`
Two additive changes, both backward-compatible:
1. `BlogPost` gained optional fields (`author`, `authorRole`, `authorImage`,
   `tags`, `popular`, `featured`, `content`). All are optional, so the
   existing 3-item `data/blog.ts` used by the Home page still type-checks
   and renders exactly as before.
2. Added three new interfaces required for this module: `NewsArticle`,
   `EventItem`, `JobOpening`. Nothing existing was removed or renamed.

No other files from Modules 1–4 were changed. Navbar, Footer, and all
previously built pages are untouched.

## Known Follow-Up (not done this module, flagging per the brief's rule to explain any necessary change)

`components/layout/Navbar.tsx` and `components/layout/Footer.tsx` do not yet
link to `/news` or `/careers` — News was intentionally removed from the nav
in Module 4, and Careers is brand new. Both pages are fully built and
reachable by direct URL, but per the "do not recreate Navbar/Footer" rule
for this module, no navigation change was made. Let us know if you'd like
those links added in a follow-up.
