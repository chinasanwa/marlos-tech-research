import type { Metadata } from "next";
import LegalPage from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Marlos Tech Research uses cookies on this website.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      lastUpdated="July 2026"
      image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop"
      sections={[
        {
          heading: "What Are Cookies",
          body: [
            "Cookies are small text files stored on your device that help websites function properly and remember your preferences.",
          ],
        },
        {
          heading: "How We Use Cookies",
          body: [
            "We use essential cookies to keep the website functioning correctly, such as remembering navigation state. We do not use cookies to sell your data to third parties.",
          ],
        },
        {
          heading: "Managing Cookies",
          body: [
            "Most browsers let you control cookies through their settings, including blocking or deleting them. Disabling cookies may affect some website functionality.",
          ],
        },
        {
          heading: "Changes to This Policy",
          body: [
            "We may update this policy from time to time. Any changes will be posted on this page.",
          ],
        },
        {
          heading: "Contact Us",
          body: [
            "Questions about our use of cookies can be directed to info@marlostechresearch.com.ng.",
          ],
        },
      ]}
    />
  );
}
