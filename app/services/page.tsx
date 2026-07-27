import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import WhyChooseServices from "@/components/services/WhyChooseServices";
import FeaturedProjects from "@/components/services/FeaturedProjects";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Technology consulting, digital transformation, AI consulting, cloud solutions, cybersecurity, data analytics, software development, and training services from Marlos Tech Research.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Technology Solutions for Businesses, Institutions & Government"
        description="From strategy to delivery, our consulting and engineering teams help organizations modernize systems, adopt AI responsibly, and build lasting technical capacity."
        image="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Technology consultants working with a client team in Nigeria"
        breadcrumbLabel="Services"
      />
      <ServicesGrid />
      <ProcessTimeline />
      <WhyChooseServices />
      <FeaturedProjects />
      <ServiceTestimonials />
      <ServicesCTA />
    </>
  );
}
