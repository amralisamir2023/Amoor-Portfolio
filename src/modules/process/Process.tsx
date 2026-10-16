import type { Portfolio } from "@/core/entities/portfolio";
import { Section } from "@/shared/ui/Section";

export function Process({ index, data }: { index: string; data: Portfolio["process"] }) {
  return (
    <Section id="process" index={index} copy={data.copy}>
      <div data-draw className="relative">
        <span aria-hidden="true" className="absolute start-4 top-0 h-full w-px bg-charcoal/15" />
        <span
          data-draw-line
          aria-hidden="true"
          className="absolute start-4 top-0 h-full w-px origin-top bg-saffron"
        />
        <ol className="space-y-14 ps-16">
          {data.steps.map((step, i) => (
            <li key={step.title} data-reveal className="relative">
              <span className="absolute -start-16 top-1 grid size-8 place-items-center rounded-full bg-saffron font-mono text-xs text-[#1c1b19]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-semibold tracking-tight md:text-4xl">{step.title}</h3>
              <p className="mt-2 max-w-xl text-lg text-clay">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
