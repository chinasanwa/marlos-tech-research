import Image from "next/image";
import { FileText, Download } from "lucide-react";
import { Resource } from "@/types";
import Button from "@/components/ui/Button";

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="group overflow-hidden rounded-xl2 border border-paper-line bg-white shadow-card transition-shadow hover:shadow-cardHover">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={resource.image}
          alt={resource.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-navy/90 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          <FileText className="h-3 w-3" />
          {resource.category}
        </span>
      </div>
      <div className="p-6">
        <p className="text-xs font-medium text-ink-faint">{resource.date}</p>
        <h3 className="mt-2 font-display text-lg font-semibold text-navy">
          {resource.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {resource.description}
        </p>
        <div className="mt-5">
          <Button href={`/contact?resource=${resource.slug}`} size="sm" showArrow={false}>
            Request Access
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
