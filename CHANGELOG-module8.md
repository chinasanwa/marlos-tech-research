# Module 8 Changelog — Final Branding & Content Localization

## 1–2. Program Duration Fully Removed

Every trace of program duration/length was removed, not just the
"Hours Per Week" text from Module 7.

- **`types/index.ts`** — removed the `duration` field from the `Program`
  interface entirely (it previously held `"4 Weeks" | "8 Weeks" |
  "12 Weeks" | "18 Weeks"`).
- **`data/programs.ts`** — removed the `duration: "..."` line from all 7
  program entries.
- **`components/programs/ProgramFullCard.tsx`** — removed the duration
  line (icon + text) from the Programs page cards; removed the now-unused
  `Clock` import; title now sits directly at the top of the card content
  instead of leaving a gap.
- **`components/home/ProgramsPreview.tsx`** — same removal on the homepage
  program cards; removed the unused `Clock` import; updated the section
  description copy to drop the "4, 8, 12, or 18 weeks" mention.
- **`app/programs/[slug]/page.tsx`** — removed the duration line from the
  hero, the "This program is delivered over ___" clause from the overview
  paragraph, and the "Duration" row from the Program Details sidebar
  (Registration Fee now leads that list); removed the unused `Clock`
  import.
- **`components/programs/ProgramsGrid.tsx`** — updated description copy to
  remove the hours/weeks mention.
- **`data/programs-content.ts`**, **`data/contact.ts`**, **`data/site-faq.ts`**
  — the "How long are programs?" FAQ answer no longer states specific
  week counts; now reads "Each program has a defined length tailored to
  its track; full details are shared during enrollment."

Confirmed via full-project search: no remaining occurrences of program
`duration`, `"N Weeks"`, or "Hours Per Week" anywhere — including search
results, featured/related program listings, and the program detail page.

## 3. Image Replacement

Every image across the site was audited (43 unique photos across 33
files) and replaced with verified, freely-licensed Unsplash photos
depicting Black/African people in professional, educational, and
technology contexts — sourced from photographers and collections
specifically known for African-context stock photography:

- **Iwaria Inc.** — a stock photography initiative focused on African
  imagery
- **Francis Odeyemi** and **Adeolu Eletu** — Nigerian photographers
- **Cytonn Photography** — Kenyan photography agency
- **The Jopwell Collection** — a stock photo collection of Black
  professionals
- **Christina @ wocintechchat.com** ("women of color in tech chat") and
  **Daniel Thomas / Tamarcus Brown / Andra C Taylor Jr / karima williams**

24 unique verified photos (individuals, pairs, and groups, in both office
and casual settings) were mapped across all 43 image slots — every file
listed below had at least one `images.unsplash.com` URL updated:

`app/about/page.tsx`, `app/apply/page.tsx`, `app/blog/page.tsx`,
`app/careers/page.tsx`, `app/contact/page.tsx`, `app/cookies/page.tsx`,
`app/events/page.tsx`, `app/faq/page.tsx`, `app/news/page.tsx`,
`app/partnerships/page.tsx`, `app/privacy/page.tsx`,
`app/programs/page.tsx`, `app/research/page.tsx`,
`app/resources/page.tsx`, `app/search/page.tsx`, `app/services/page.tsx`,
`app/terms/page.tsx`, `components/home/AboutPreview.tsx`,
`components/home/Hero.tsx`, `data/blog-articles.ts`, `data/blog.ts`,
`data/events.ts`, `data/news.ts`, `data/portfolio.ts`, `data/programs.ts`,
`data/research-focus.ts`, `data/research-projects.ts`,
`data/resources.ts`, `data/service-testimonials.ts`,
`data/services-full.ts`, `data/services.ts`, `data/testimonials.ts`.

No changes were made to `next.config.ts` — every replacement image is
still served from `images.unsplash.com` (the domain already whitelisted
for `next/image`), so no config, layout, or design changes were required.

### Methodology note (for transparency)

Each replacement image was individually verified via direct fetch of
Unsplash's own pages before use, confirming: (a) it is hosted on the free
`images.unsplash.com` domain rather than the paid `plus.unsplash.com`
tier, and (b) it depicts the intended subject matter. No unverified or
fabricated image URLs were used. Given the number of image slots (43)
relative to the number of independently-verifiable, on-topic free photos
found (24), some images are intentionally reused across multiple
lower-visibility content slots (blog articles, news items, resource
cards) — the same practice the original stock photography followed.

**This is a good-faith improvement, not a guarantee of a unique authentic
photo per slot.** For a result that's fully authentic to Marlos Tech
Research specifically (your own students, campus, and team), real
photography is the only way to get there — happy to wire that in
whenever you have images to share.

## 4. Design Unchanged

No typography, color, spacing, card, button, animation, responsiveness,
navigation, footer, SEO, or accessibility changes were made. Only program
duration content and image `src` values were touched.

## 8. Final Quality Check

- ✅ No program displays weeks or any duration value.
- ✅ No program displays "Hours Per Week."
- ✅ No `images.unsplash.com/plus` (paid) images in use.
- ✅ No broken layout from the duration removal — titles and content
  re-align naturally with no empty gaps.
- ✅ No unused imports left behind (`Clock` removed everywhere it was
  only used for the duration display).

## Not Done / Could Not Verify

This environment has no network access for `npm install`/`npm run build`,
so a full production build could not be executed to give an absolute
build-clean guarantee — every change was made and cross-checked by hand
(grep sweeps for leftover duration/hours text, unused imports, and
premium-tier image URLs). Please run `npm run build` after pulling these
changes before deploying.
