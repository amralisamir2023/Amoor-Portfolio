import type { Portfolio } from "@/core/entities/portfolio";
import { Container } from "@/shared/ui/Container";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import { JourneyArt } from "./JourneyArt";

/**
 * Without JS (or with reduced motion) the stages are a plain vertical list.
 * The journey effect sets data-active, which stacks every stage in one grid cell
 * so they can be swapped while the section is pinned.
 */
export function Journey({ index, data }: { index: string; data: Portfolio["journey"] }) {
  return (
    <section id="journey" data-journey className="group relative overflow-hidden py-24 md:py-32 lg:flex lg:min-h-screen lg:flex-col lg:justify-center">
      <Container>
        <SectionHeader index={index} copy={data.copy} />

        {/* Timeline */}
        <div className="mt-10">
          <div className="relative h-px w-full bg-charcoal/15" aria-hidden="true">
            <div data-journey-progress className="h-full origin-left bg-saffron rtl:origin-right" />
          </div>
          <ol className="mt-4 hidden justify-between gap-2 md:flex">
            {data.stages.map((stage, i) => (
              <li
                key={stage.phase}
                data-journey-node
                className="flex flex-1 items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-charcoal"
              >
                <span data-journey-dot className="grid size-5 place-items-center rounded-full bg-saffron text-[10px] text-[#1c1b19]">
                  {i + 1}
                </span>
                {stage.phase}
              </li>
            ))}
          </ol>
        </div>

        {/* Stages */}
        <div className="mt-12 grid gap-16 group-data-[active=true]:mt-8 group-data-[active=true]:gap-0">
          {data.stages.map((stage) => (
            <article
              key={stage.phase}
              data-journey-stage
              className="grid items-center gap-8 md:grid-cols-2 md:gap-16 group-data-[active=true]:col-start-1 group-data-[active=true]:row-start-1"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-saffron md:hidden">{stage.phase}</p>
                <h3 className="mt-2 text-[clamp(2rem,4.2vw,3.75rem)] font-semibold leading-tight tracking-tight">
                  {stage.title}
                </h3>
                <p className="mt-4 max-w-lg text-lg text-clay">{stage.text}</p>
              </div>
              <div className="mx-auto w-full max-w-md">
                <JourneyArt stage={stage} />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
