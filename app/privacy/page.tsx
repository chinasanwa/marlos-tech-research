import type { Metadata } from "next";
import LegalPage from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Marlos Tech Research collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="July 2026"
      image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop"
      sections={[
        {
          heading: "Information We Collect",
          body: [
            "We collect information you provide directly to us, including your name, email address, phone number, organization, and any details you share through our application, contact, and partnership forms.",
            "We may also collect basic technical information such as browser type and general location to help us understand how our website is used.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "We use the information you provide to process applications, respond to inquiries, communicate about programs and events, and improve our services.",
            "We do not sell your personal information to third parties.",
          ],
        },
        {
          heading: "Sharing of Information",
          body: [
            "We may share information with industry or research partners only when necessary to fulfill a request you've made, such as a partnership inquiry, and only with your awareness of the context in which it was submitted.",
          ],
        },
        {
          heading: "Data Retention",
          body: [
            "We retain application and inquiry information for as long as needed to respond to your request and maintain accurate records, after which it is securely deleted or anonymized.",
          ],
        },
        {
          heading: "Your Rights",
          body: [
            "You may request access to, correction of, or deletion of your personal information at any time by contacting us through our Contact page.",
          ],
        },
        {
          heading: "Contact Us",
          body: [
            "Questions about this policy can be directed to info@marlostechresearch.com.ng.",
          ],
        },
      ]}
    />
  );
}
