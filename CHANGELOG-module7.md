# Module 7 Changelog — Client Corrections & Final Polish

## 1–2. Program Duration Corrections

Removed "Hours Per Week" / weekly schedule display entirely and corrected
every program to use only 4, 8, 12, or 18 weeks (no more "13 Weeks").

- **`types/index.ts`** — `Program.duration` now
  `"4 Weeks" | "8 Weeks" | "12 Weeks" | "18 Weeks"`; removed the
  `classSchedule` field entirely.
- **`data/programs.ts`** — removed `classSchedule: "2 Hours Per Week"` from
  all 7 programs and corrected durations:
  - Artificial Intelligence: 13 Weeks → **18 Weeks**
  - Cybersecurity: 13 Weeks → **12 Weeks**
  - Machine Learning, Data Science, Cloud Computing: unchanged at 8 Weeks
  - Digital Transformation, Business Consulting: unchanged at 4 Weeks
- **`components/programs/ProgramFullCard.tsx`**,
  **`components/home/ProgramsPreview.tsx`**,
  **`app/programs/[slug]/page.tsx`** — removed every `· {classSchedule}`
  display; duration is now the only schedule info shown, styled more
  prominently on `ProgramFullCard.tsx` since it's the sole detail now.
- **`app/programs/[slug]/page.tsx`** — removed the "Schedule" row from the
  program details sidebar and the "with classes held for..." clause from
  the overview paragraph.
- **`components/programs/ProgramsGrid.tsx`**,
  **`components/home/ProgramsPreview.tsx`** (description copy),
  **`data/site-faq.ts`**, **`data/contact.ts`**,
  **`data/programs-content.ts`** — updated all prose mentioning
  "2 hours per week" or "4, 8, or 13 weeks" to match the corrected duration
  set with no hours reference.

## 3. Hero Location Removed

**`components/home/Hero.tsx`** — removed the "Aba, Abia State · Nigeria"
eyebrow text above the homepage headline. Replaced with "Technology
Research Institute" so the existing visual/eyebrow design pattern is
preserved without a redesign.

## 4. Head Office Address Updated

New canonical source: **`data/offices.ts`** (`headOffice` /
`regionalOffices` exports). Updated everywhere the address appears:

- **`components/layout/Footer.tsx`** — full Head Office address plus a new
  "Regional Offices" line.
- **`components/contact/ContactInfo.tsx`** — "Location" card relabeled
  "Head Office" with the full street address.
- **`components/contact/ContactFormSection.tsx`** — the map placeholder
  card now shows the full address and links to a maps search query built
  from it.
- **`app/contact/page.tsx`** — metadata description updated.
- **`data/contact.ts`**, **`data/site-faq.ts`** — the "Where is Marlos Tech
  located?" FAQ answers now state the full Head Office address and list the
  regional office cities.
- **`app/layout.tsx`** — new Organization JSON-LD structured data (see
  SEO section below), address sourced from `data/offices.ts` rather than
  duplicated as a literal string.

## 5. Our Offices Section

New **`components/shared/OfficesSection.tsx`** — responsive card grid
listing all 6 offices. Aba (Head Office) is visually distinguished (navy
card, full address); the five regional offices (Port Harcourt, Bayelsa,
Owerri, Anambra, Enugu) show only the city name and an "Address coming
soon" note until real addresses are supplied. Added to the Contact page.

## 6. Event Venue Correction

**`data/events.ts`** — the Tech Summit's venue changed from "Aba
International Conference Centre" to "Marlos Campus." No other event
details were touched.

## 7. Email Functionality (Production-Ready)

The contact form no longer simulates submission with a `setTimeout`.

- **`lib/email.ts`** — sends the contact submission via `nodemailer`. If
  SMTP environment variables aren't set, it does **not** throw or break the
  build/dev server — it logs a clear console warning and the submission
  payload, and reports `{ sent: false }` back to the caller, so the site
  keeps working end-to-end before real credentials exist.
- **`app/api/contact/route.ts`** — new API route. Validates the payload
  with Zod, rejects spam via a honeypot field, calls `sendContactEmail`,
  and returns a proper JSON success/error response with correct HTTP status
  codes (400 for invalid input, 502 if sending fails).
- **`components/contact/ContactForm.tsx`** — rewritten to `fetch("/api/contact")`.
  Added:
  - A hidden honeypot field (`company`), visually and from-tab-order hidden,
    validated server-side to `max(0)` length.
  - A proper error state (inline message with an icon) shown if the API
    call fails, in addition to the existing loading state and the
    redirect-to-success-page behavior from Module 6.
- **`.env.example`** — added `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`,
  `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `CONTACT_EMAIL_TO` with comments
  explaining the graceful-fallback behavior, plus the social media env vars
  (see below).
- **`package.json`** — added `nodemailer` and `@types/nodemailer`.

## 8. Social Media Preparation

**`lib/social-links.ts`** — new config reading
`NEXT_PUBLIC_SOCIAL_FACEBOOK` / `_LINKEDIN` / `_TWITTER` / `_INSTAGRAM` /
`_YOUTUBE` env vars. Any platform without a URL set is simply omitted from
the returned list — no empty/dead icons render anywhere.

**`components/layout/Footer.tsx`** — social icon row now renders from
`getSocialLinks()` instead of a hardcoded `href="#"` array of 4 fixed
icons. Icons open in a new tab with `rel="noopener noreferrer"` and a
platform-specific `aria-label`.

## 9. Contact Page Improvements

- Added the new **Our Offices** section (see #5).
- **`ContactInfo.tsx`** — "Head Office" card typography adjusted (regular
  weight, relaxed line height) so the full street address reads cleanly
  next to the shorter Phone/Email/Office Hours cards instead of wrapping
  awkwardly in bold display type.
- Map placeholder card widened slightly (`max-w-xs` → `max-w-sm`) to fit the
  full address without cramped wrapping.

## 10. Footer Improvements

Covered above in #4/#8. Summary of Footer changes this module:
- Head Office: full street address (was city/state only).
- New "Regional Offices" line: Port Harcourt · Bayelsa · Owerri · Anambra · Enugu.
- Social icons now conditionally rendered per #8 instead of 4 fixed
  placeholder icons.

## 11. Program Page Polish

- Duration is now the only schedule detail shown (see #1–2), and is styled
  more prominently on program cards and the program detail sidebar so it's
  clearly visible at a glance.
- No other layout, spacing, or typography changes were made to the
  Programs page beyond what the duration-field removal required, per the
  "do not redesign" instruction.

## 12. SEO

- **`app/layout.tsx`** — added site-wide `Organization` JSON-LD structured
  data (name, url, email, telephone, and a `PostalAddress` built from the
  corrected Head Office address).
- Metadata descriptions on the Contact page updated to reference the
  correct address (see #4).

## 13–14. Responsiveness & Performance

- All layout changes this module (Footer address block, ContactInfo cards,
  new OfficesSection grid) use the existing responsive grid/flex patterns
  already established in Modules 1–6 (`sm:`/`lg:` breakpoints, `grid-cols`
  stacking) — no new breakpoints or layout systems were introduced.
- No new client-side JavaScript bundles beyond what the email API route and
  social-links/offices config require (all trivial, no new libraries on the
  client beyond what was already present). `nodemailer` runs server-side
  only, inside the API route — it is not bundled into client JavaScript.

## 15. Code Quality

- Removed the now-unused `classSchedule` field from the `Program` type and
  every program entry (see #1–2) — this was the "duplicate/outdated
  constant" the brief referred to.
- Verified no unused imports were introduced or left behind across every
  file touched this module.
- Organization address is defined once (`data/offices.ts`) and referenced
  everywhere else, rather than duplicated as literal strings.

## Not Done / Could Not Verify

This environment has no network access, so `npm install` and `npm run
build` could not be executed directly to confirm a fully clean production
build (in particular, `nodemailer`'s types and API surface could not be
type-checked against the actual installed package). Every file was written
and cross-checked by hand — please run `npm install && npm run build`
after pulling these changes and before deploying, and fill in real SMTP
credentials in `.env` (copied from `.env.example`) when ready to send real
emails.
