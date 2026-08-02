import { BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const LEVEL_STYLES: Record<string, string> = {
  Beginner: "bg-accent-soft text-accent",
  Intermediate: "bg-navy/10 text-navy",
  Advanced: "bg-navy text-white",
};

const LEVEL_STYLES_DARK: Record<string, string> = {
  Beginner: "bg-white/10 text-white border border-white/20",
  Intermediate: "bg-white/10 text-white border border-white/20",
  Advanced: "bg-accent text-white",
};

export default function LevelBadge({
  level,
  dark = false,
  className,
}: {
  level: "Beginner" | "Intermediate" | "Advanced";
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        dark ? LEVEL_STYLES_DARK[level] : LEVEL_STYLES[level],
        className
      )}
    >
      <BarChart3 className="h-3.5 w-3.5" />
      {level}
    </span>
  );
}
