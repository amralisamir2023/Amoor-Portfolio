import type { SectionCopy } from "@/core/entities/portfolio";

interface SectionHeaderProps {
  index: string;
  copy: SectionCopy;
}

export function SectionHeader({ index, copy }: SectionHeaderProps) {
  return (
    <header>
      <p data-reveal className="font-mono text-xs uppercase tracking-[0.2em] text-clay">
        {index} — {copy.label}
      </p>
      <h2 data-split className="mt-4 text-[clamp(2rem,5vw,4.5rem)] font-semibold leading-[1.1] tracking-tight">
        {copy.title}
      </h2>
      {copy.subtitle && (
        <p data-reveal className="mt-4 max-w-xl text-lg text-clay">
          {copy.subtitle}
        </p>
      )}
    </header>
  );
}
