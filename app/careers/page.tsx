import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import WhyWorkWithUs from "@/components/careers/WhyWorkWithUs";
import OpenPositions from "@/components/careers/OpenPositions";
import CareersBenefits from "@/components/careers/CareersBenefits";
import ContactCTA from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Marlos Tech Research. Open positions in research, engineering, data, cybersecurity, and communications in Aba, Abia State.",
  openGraph: {
    title: "Careers | Marlos Tech Research",
    description:
      "Join Marlos Tech Research. Open positions in research, engineering, data, cybersecurity, and communications in Aba, Abia State.",
    type: "website",
  },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Africa's Technology Future With Us"
        description="Join a team of researchers, engineers, and educators working on real technology problems from Aba, Abia State."
        image="https://images.unsplash.com/photo-1573167627769-e201a7ddf409?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Team of technology professionals collaborating in an office"
        breadcrumbLabel="Careers"
      />
      <WhyWorkWithUs />
      <OpenPositions />
      <CareersBenefits />
      <ContactCTA
        eyebrow="Join Our Team"
        title="Don't see the right role?"
        description="We're always interested in hearing from strong researchers, engineers, and educators. Send us a message and tell us what you're looking for."
        primaryLabel="Apply Now"
        primaryHref="/contact?type=careers"
      />
    </>
  );
}
