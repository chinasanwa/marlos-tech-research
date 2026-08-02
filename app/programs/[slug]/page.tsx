import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Briefcase, Sparkles, CheckCircle2 } from "lucide-react";
import { programs } from "@/data/programs";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";

export async function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return { title: "Program Not Found" };
  }

  return {
    title: program.title,
    description: program.description,
    openGraph: {
      title: `${program.title} | Marlos Tech Research`,
      description: program.description,
      images: [{ url: program.image }],
    },
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-32 pb-20 md:pt-40">
        <div className="absolute inset-0">
          <Image
            src={program.image}
            alt={program.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
        </div>
        <div className="container-x relative">
          <Breadcrumb items={[{ label: "Programs", href: "/programs" }, { label: program.title }]} />
          <div className="mt-8 max-w-2xl">
            <span className="eyebrow text-white/50">{program.category} Program</span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
              {program.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
              {program.description}
            </p>
            <div className="mt-8">
              <Button href={`/apply?program=${program.slug}`} size="lg">
                Apply for This Program
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-display text-xl font-semibold text-navy">
                Program Overview
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                {program.description} This program combines structured
                instruction with hands-on, project-based learning.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy">
                    <Briefcase className="h-3.5 w-3.5 text-accent" />
                    Career Opportunities
                  </div>
                  <ul className="mt-3 space-y-2">
                    {program.careerOutcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2 text-sm text-ink-muted">
                        <CheckIcon />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy">
                    <Sparkles className="h-3.5 w-3.5 text-accent" />
                    Skills Gained
                  </div>
                  <ul className="mt-3 space-y-2">
                    {program.skillsGained.map((skill) => (
                      <li key={skill} className="flex items-start gap-2 text-sm text-ink-muted">
                        <CheckIcon />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-xl2 border border-paper-line bg-paper-soft p-6">
                <h3 className="font-display text-base font-semibold text-navy">
                  Program Details
                </h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-ink-muted">Registration Fee</dt>
                    <dd className="font-medium text-navy">
                      ₦{program.registrationFee.toLocaleString()}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-ink-muted">Certification Fee</dt>
                    <dd className="font-medium text-navy">
                      ₦{program.certificationFee.toLocaleString()}
                    </dd>
                  </div>
                </dl>
                <p className="mt-3 text-xs text-ink-faint">
                  Course fees are separate and shared during enrollment.
                </p>
                <div className="mt-5">
                  <Button href={`/apply?program=${program.slug}`} className="w-full">
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CheckIcon() {
  return <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />;
}
