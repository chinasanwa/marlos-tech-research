# Module 4 Changelog — Contact, Partnerships & Mobile UI Fix

## Fixed

### `components/layout/Navbar.tsx`
Rebuilt the mobile drawer to fix the reported issues:
- Drawer is now `fixed inset-0` with `h-[100dvh]`, covering the full viewport
  (previously `top-20` left a gap and let background content show through).
- Solid `bg-[#0B1F3A]` background — no transparency/blur, so page content
  behind it is never visible.
- Drawer now has its own header row (logo + dedicated close button) so it no
  longer overlaps the site header.
- Nav links get generous vertical spacing (`py-4`, large `text-2xl` type) and
  a red (`text-accent`) hover/active state, with the active route highlighted.
- Slide-in animation from the right (`x: "100%" → 0`) using an easing curve,
  with a staggered fade-in per link.
- Body scroll is now locked with a scroll-position-preserving technique
  (`position: fixed` + stored `scrollY`) instead of only `overflow: hidden`,
  which prevents iOS Safari's background-scroll bug.
- Drawer auto-closes on route change (`usePathname` effect) and on backdrop
  link taps.
- Nav items updated to the current sitemap: Home, About, Programs,
  **Research Center**, Services, Blog, Events, **Partnerships**, Contact
  (previously included "News" and pointed to `/partnership` instead of
  `/partnerships`).

### `components/layout/Footer.tsx`
- Quick Links now includes Home, About, **Blog**, Events, **Partnerships**,
  Contact (previously missing Blog and Partnerships, and included a "News"
  link with no corresponding page).
- Research and Services columns updated to link to the actual section
  anchors that exist on those pages after Module 3.
- Contact email updated to `info@marlostechresearch.com.ng` to match the
  Contact page in this module.
- Improved spacing (`py-16 md:py-20`, larger column gaps) and added a
  newsletter heading/subcopy for a more premium feel.
- Added a second copyright row for cleaner alignment on mobile.

## Added

### Contact Page
- `app/contact/page.tsx` — assembles the hero, contact info, form + map, and FAQ.
- `components/contact/ContactInfo.tsx` — location, phone, email, and office
  hours as four cards.
- `components/contact/ContactForm.tsx` — React Hook Form + Zod validated
  form (Full Name, Email, Phone, Organization, Subject, Message) with
  loading and success states.
- `components/contact/ContactFormSection.tsx` — lays the form out next to a
  no-API-required map placeholder with a "Get Directions" link to Google
  Maps search.
- `components/contact/ContactFAQ.tsx` — accordion FAQ (location, enrollment,
  duration, partnerships).
- `data/contact.ts` — FAQ content for the Contact page.

### Partnerships Page
- `app/partnerships/page.tsx` — assembles the hero, partner categories,
  benefits, process, and CTA.
- `components/partnerships/PartnerCategories.tsx` — 7 partner categories
  (Universities, Government, Schools, NGOs, Corporate Organizations,
  Investors, Technology Companies).
- `components/partnerships/PartnershipBenefits.tsx` — 6 benefit cards.
- `components/partnerships/PartnershipProcess.tsx` — 4-step partnership process.
- `data/partnership.ts` — categories, benefits, and process data.

### Shared
- `components/shared/ContactCTA.tsx` — reusable CTA section with
  configurable eyebrow/title/description/buttons, used on the Partnerships
  page and available for any future page.

## Notes
- No existing page content from Modules 1–3 was altered beyond the Navbar
  and Footer fixes described above.
- No new dependencies were required — `react-hook-form`, `@hookform/resolvers`,
  and `zod` were already in `package.json` from Module 1.
- The contact form submission is currently simulated (`setTimeout` +
  `console.log`); wire `onSubmit` in `ContactForm.tsx` to a real endpoint
  when one is available.
