import type { Metadata } from "next";
import LegalPage from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of the Marlos Tech Research website and programs.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated="July 2026"
      image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop"
      sections={[
        {
          heading: "Acceptance of Terms",
          body: [
            "By accessing this website or applying to our programs, research tracks, or services, you agree to these terms.",
          ],
        },
        {
          heading: "Programs and Enrollment",
          body: [
            "Applications are reviewed at our discretion. Submitting an application does not guarantee admission. Registration and certification fees are non-refundable once a cohort has started, except where otherwise agreed in writing.",
          ],
        },
        {
          heading: "Use of the Website",
          body: [
            "You agree to use this website only for lawful purposes and not to attempt to disrupt, reverse engineer, or misuse any part of the site.",
          ],
        },
        {
          heading: "Intellectual Property",
          body: [
            "All content on this website, including research publications, program materials, and branding, is the property of Marlos Tech Research unless otherwise stated.",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: [
            "Marlos Tech Research provides information on this website in good faith but makes no guarantee of specific outcomes from programs, research participation, or services.",
          ],
        },
        {
          heading: "Changes to These Terms",
          body: [
            "We may update these terms periodically. Continued use of the website after changes take effect constitutes acceptance of the updated terms.",
          ],
        },
      ]}
    />
  );
}
