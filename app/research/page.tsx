import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import AboutResearch from "@/components/research/AboutResearch";
import ResearchFocusAreas from "@/components/research/ResearchFocusAreas";
import InnovationLabs from "@/components/research/InnovationLabs";
import ResearchProjects from "@/components/research/ResearchProjects";
import IndustryCollaboration from "@/components/research/IndustryCollaboration";
import ResearchBenefits from "@/components/research/ResearchBenefits";
import ResearchCTA from "@/components/research/ResearchCTA";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Applied technology research at Marlos Tech Research spans AI, machine learning, cybersecurity, cloud computing, data science, digital transformation, smart systems, and business innovation.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research Centre"
        title="Research That Solves Africa's Real Technology Challenges"
        description="Our researchers work across eight technology domains, partnering with universities, government, and industry to turn applied research into practical solutions."
        image="https://images.unsplash.com/photo-1573496800440-5c9c48a8d0f0?q=80&w=1600&auto=format&fit=crop"
        imageAlt="African researchers working with modern technology in a lab setting"
        breadcrumbLabel="Research"
        actions={
          <>
            <Button href="/apply?track=research" size="lg">
              Apply for Research
            </Button>
            <Button
              href="/partnerships"
              variant="outline"
              size="lg"
              className="border-white/25 text-white hover:border-white"
            >
              Partner With Us
            </Button>
            <Button href="/research#focus-areas" variant="ghost" size="lg" showArrow={false}>
              About Our Research →
            </Button>
          </>
        }
      />
      <AboutResearch />
      <div id="focus-areas">
        <ResearchFocusAreas />
      </div>
      <InnovationLabs />
      <ResearchProjects />
      <IndustryCollaboration />
      <ResearchBenefits />
      <ResearchCTA />
    </>
  );
}
