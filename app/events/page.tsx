import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import EventsList from "@/components/events/EventsList";
import ContactCTA from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming events from Marlos Tech Research: AI Bootcamp, Tech Summit, Cybersecurity Workshop, Innovation Challenge, and Data Science Seminar.",
  openGraph: {
    title: "Events | Marlos Tech Research",
    description:
      "Upcoming events from Marlos Tech Research: AI Bootcamp, Tech Summit, Cybersecurity Workshop, Innovation Challenge, and Data Science Seminar.",
    type: "website",
  },
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Upcoming Events at Marlos Tech Research"
        description="Bootcamps, summits, and workshops bringing together students, researchers, and industry partners."
        image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Audience attending a technology conference"
        breadcrumbLabel="Events"
      />
      <EventsList />
      <ContactCTA
        eyebrow="Stay Involved"
        title="Want to host or sponsor an event with us?"
        description="Reach out and our team will help you find the right fit."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
