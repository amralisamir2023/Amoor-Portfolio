import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  size?: "md" | "sm";
  external?: boolean;
  className?: string;
}

const variants = {
  solid: "bg-saffron text-[#1c1b19] hover:bg-charcoal hover:text-bone",
  ghost: "border border-charcoal/30 text-charcoal hover:border-saffron hover:text-saffron",
};
const sizes = { md: "px-7 py-4 text-base", sm: "px-5 py-2.5 text-sm" };

export function Button({ href, children, variant = "solid", size = "md", external, className }: ButtonProps) {
  return (
    <a
      href={href}
      data-magnetic
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-colors duration-300",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </a>
  );
}
