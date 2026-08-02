import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-accent text-white hover:bg-accent-dark shadow-sm hover:shadow-md",
        secondary: "bg-navy text-white hover:bg-navy-light",
        outline: "border border-paper-line text-navy hover:border-navy bg-transparent",
        ghost: "text-white/90 hover:text-white",
      },
      size: {
        default: "h-12 px-7 text-base",
        lg: "h-14 px-9 text-lg",
        sm: "h-11 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}

export default function Button({
  href,
  children,
  variant,
  size,
  className,
  showArrow = true,
}: ButtonProps) {
  return (
    <Link href={href} className={cn(buttonVariants({ variant, size }), className)}>
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" strokeWidth={2.25} />}
    </Link>
  );
}
