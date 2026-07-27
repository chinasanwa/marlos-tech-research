import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import CoreValues from "@/components/home/CoreValues";
import ProgramsPreview from "@/components/home/ProgramsPreview";
import ResearchPreview from "@/components/home/ResearchPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import BlogPreview from "@/components/home/BlogPreview";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <CoreValues />
      <ProgramsPreview />
      <ResearchPreview />
      <ServicesPreview />
      <BlogPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
