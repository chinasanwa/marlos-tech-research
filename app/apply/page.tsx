import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/ui/PageHero";
import ApplyForm from "@/components/apply/ApplyForm";

export const metadata: Metadata = {
  title: "Apply Now",
  description:
    "Apply to a Marlos Tech Research program or research track. Submit your details and our team will follow up with next steps.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Apply Now"
        title="Start Your Application"
        description="Tell us a bit about yourself and what you'd like to join. Our team will follow up with next steps."
        image="https://images.unsplash.com/photo-1521790361543-f645cf042ec4?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Student filling out an application on a laptop"
        breadcrumbLabel="Apply"
      />

      <section className="bg-paper-soft py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl rounded-xl2 border border-paper-line bg-white p-6 shadow-card md:p-8">
            <Suspense fallback={<div className="h-64 animate-pulse rounded-lg bg-paper-soft" />}>
              <ApplyForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
