import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProgramsGrid from "@/components/programs/ProgramsGrid";
import PricingSection from "@/components/programs/PricingSection";
import ProgramBenefits from "@/components/programs/ProgramBenefits";
import LearningProcess from "@/components/programs/LearningProcess";
import FAQSection from "@/components/programs/FAQSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Programs & Professional Training",
  description:
    "Short professional programs in Artificial Intelligence, Machine Learning, Data Science, Cloud Computing, Cybersecurity, Digital Transformation, and Business Consulting.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs & Professional Training"
        title="Short Programs. Real Skills. Real Certification."
        description="Seven applied technology and business programs, each built on a fixed weekly schedule and taught by practitioners who work in the field."
        image="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1600&auto=format&fit=crop"
        imageAlt="African technology students in a training session"
        breadcrumbLabel="Programs"
      />
      <ProgramsGrid />
      <PricingSection />
      <ProgramBenefits />
      <LearningProcess />
      <FAQSection />
      <CTASection
        title="Ready to begin your technology journey?"
        description="Applications for our next cohort are open. Choose a program and start building real, certified skills."
      />
    </>
  );
}
