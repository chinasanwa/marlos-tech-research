import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import { EventItem } from "@/types";
import Button from "@/components/ui/Button";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <div className="group overflow-hidden rounded-xl2 border border-paper-line bg-white shadow-card transition-shadow hover:shadow-cardHover md:grid md:grid-cols-5">
      <div className="relative aspect-[16/10] overflow-hidden md:col-span-2 md:aspect-auto">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-navy/90 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {event.category}
        </span>
      </div>

      <div className="flex flex-col justify-center p-7 md:col-span-3">
        <h3 className="font-display text-xl font-semibold text-navy">{event.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{event.description}</p>

        <div className="mt-5 space-y-2 text-sm text-ink-muted">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-accent" />
            {event.date}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" />
            {event.time}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" />
            {event.venue}
          </div>
        </div>

        <div className="mt-6">
          <Button href={`/contact?event=${event.slug}`} size="sm">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
