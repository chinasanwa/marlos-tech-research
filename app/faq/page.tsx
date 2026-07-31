import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FAQAccordion from "@/components/shared/FAQAccordion";
import { siteFAQs } from "@/data/site-faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Marlos Tech Research programs, admissions, research, partnerships, and careers.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Frequently Asked Questions"
        description="Answers to the questions we hear most often about our programs, research, partnerships, and careers."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Team discussing questions around a table"
        breadcrumbLabel="FAQ"
      />
      <section className="bg-paper py-24">
        <div className="container-x">
          <FAQAccordion items={siteFAQs} />
        </div>
      </section>
    </>
  );
}
