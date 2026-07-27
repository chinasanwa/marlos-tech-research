import { aboutStats } from "@/data/about";
import AnimatedStat from "@/components/ui/AnimatedStat";

export default function AboutStats() {
  return (
    <section className="bg-navy-deep py-20">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-5">
          {aboutStats.map((stat) => (
            <AnimatedStat key={stat.id} stat={stat} dark />
          ))}
        </div>
      </div>
    </section>
  );
}
