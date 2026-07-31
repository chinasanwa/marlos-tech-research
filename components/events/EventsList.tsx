"use client";

import { motion } from "framer-motion";
import { events } from "@/data/events";
import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/events/EventCard";

export default function EventsList() {
  return (
    <section className="bg-paper py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Upcoming Events"
          title="Join Us"
          description="Workshops, seminars, and competitions open to students, professionals, and partner organizations."
        />

        <div className="mt-14 space-y-6">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
