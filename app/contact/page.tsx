import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactInfo from "@/components/contact/ContactInfo";
import OfficesSection from "@/components/shared/OfficesSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactFAQ from "@/components/contact/ContactFAQ";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Marlos Tech Research. Head Office: 49 Nwachukwu Street, Off 219 Port Harcourt Road, Aba, Abia State, Nigeria. Visit us, call us, or send a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Marlos Tech Research"
        description="Visit us, call us, or send us a message."
        image="https://images.unsplash.com/photo-1604933762161-67313106146c?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Modern office reception at Marlos Tech Research"
        breadcrumbLabel="Contact"
      />
      <ContactInfo />
      <OfficesSection />
      <ContactFormSection />
      <ContactFAQ />
    </>
  );
}
