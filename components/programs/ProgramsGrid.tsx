import { programs } from "@/data/programs";
import SectionHeading from "@/components/ui/SectionHeading";
import ProgramFullCard from "@/components/programs/ProgramFullCard";

export default function ProgramsGrid() {
  return (
    <section className="bg-paper py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Short Professional Programs"
          title="Choose Your Program"
          description="Seven programs across technical and business tracks, each with a fixed duration and a real certification at the end."
        />

        <div className="mt-14 grid gap-6">
          {programs.map((program, i) => (
            <ProgramFullCard key={program.id} program={program} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
