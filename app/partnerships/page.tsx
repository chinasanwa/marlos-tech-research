import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PartnerCategories from "@/components/partnerships/PartnerCategories";
import PartnershipBenefits from "@/components/partnerships/PartnershipBenefits";
import PartnershipProcess from "@/components/partnerships/PartnershipProcess";
import ContactCTA from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Partner with Marlos Tech Research — universities, government, schools, NGOs, corporate organizations, investors, and technology companies building Africa's technical capacity together.",
};

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Become a Partner"
        description="We collaborate with universities, government, schools, NGOs, corporate organizations, investors, and technology companies to grow African technical capacity together."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Diverse partners meeting at Marlos Tech Research"
        breadcrumbLabel="Partnerships"
      />
      <PartnerCategories />
      <PartnershipBenefits />
      <PartnershipProcess />
      <ContactCTA
        eyebrow="Partner With Us"
        title="Become a Partner"
        description="Tell us about your organization and how you'd like to collaborate. Our partnerships team will follow up to explore the fit."
        primaryLabel="Become a Partner"
        primaryHref="/contact?type=partnership"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
