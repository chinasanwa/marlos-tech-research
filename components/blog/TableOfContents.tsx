import { List } from "lucide-react";

export default function TableOfContents({
  sections,
}: {
  sections: { heading: string; body: string }[];
}) {
  const slugify = (text: string) =>
    text.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return (
    <div className="rounded-xl2 border border-paper-line bg-paper-soft p-6">
      <div className="flex items-center gap-2 text-sm font-semibold text-navy">
        <List className="h-4 w-4 text-accent" />
        Table of Contents
      </div>
      <ul className="mt-4 space-y-2.5">
        {sections.map((section) => (
          <li key={section.heading}>
            <a
              href={`#${slugify(section.heading)}`}
              className="text-sm text-ink-muted transition-colors hover:text-accent"
            >
              {section.heading}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
