import PageHero from "@/components/ui/PageHero";

export default function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  image,
  sections,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  image: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={`Last updated: ${lastUpdated}`}
        image={image}
        imageAlt="Marlos Tech Research campus"
        breadcrumbLabel={title}
      />
      <section className="bg-paper py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-xl font-semibold text-navy">
                  {section.heading}
                </h2>
                {section.body.map((paragraph, i) => (
                  <p key={i} className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
