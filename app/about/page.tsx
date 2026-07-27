import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import OurStory from "@/components/about/OurStory";
import MissionVisionPurpose from "@/components/about/MissionVisionPurpose";
import CoreValues from "@/components/home/CoreValues";
import WhyChoose from "@/components/about/WhyChoose";
import AboutStats from "@/components/about/AboutStats";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Marlos Tech Research is a technology research institute in Aba, Abia State, building Africa's future through research, innovation, and talent development.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Marlos Tech Research"
        title="Building Africa's Future Through Technology"
        description="We train engineers, run applied technology research, and partner with organizations solving Africa's most pressing technical challenges."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
        imageAlt="African technology professionals collaborating in a research setting"
        breadcrumbLabel="About"
      />
      <OurStory />
      <MissionVisionPurpose />
      <CoreValues />
      <WhyChoose />
      <AboutStats />
      <CTASection />
    </>
  );
}
