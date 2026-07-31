import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ResourcesExplorer from "@/components/resources/ResourcesExplorer";
import { resources } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Research papers, case studies, white papers, and technology guides from Marlos Tech Research.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Research Papers, Case Studies & Guides"
        description="Applied research and practical guidance from our research centre and consulting practice."
        image="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Stack of research documents and a laptop"
        breadcrumbLabel="Resources"
      />
      <section className="bg-paper py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Downloads"
            title="Browse Our Resource Library"
            description="Request access to any resource below and our team will send it directly to your inbox."
          />
          <div className="mt-14">
            <ResourcesExplorer resources={resources} />
          </div>
        </div>
      </section>
    </>
  );
}
