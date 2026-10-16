import type { Portfolio } from "@/core/entities/portfolio";
import { Container } from "@/shared/ui/Container";
import { SectionHeader } from "@/shared/ui/SectionHeader";

export function Story({ index, data }: { index: string; data: Portfolio["story"] }) {
  return (
    <section id="story" className="overflow-hidden pb-12 pt-24 md:pt-36">
      <Container>
        <SectionHeader index={index} copy={data.copy} />
        <p
          data-scrub-words
          className="mt-12 max-w-5xl text-[clamp(1.6rem,3.4vw,3.2rem)] font-medium leading-snug"
        >
          {data.statement}
        </p>
      </Container>

      <div data-merge dir="ltr" className="relative mt-20 flex min-h-[70vh] items-center justify-center" aria-hidden="true">
        <p
          data-merge-gap
          className="absolute top-8 font-mono text-xs uppercase tracking-[0.25em] text-clay"
        >
          ← {data.merge.gap} →
        </p>

        <div
          data-merge-left
          className="relative z-10 w-[42vw] max-w-sm rounded-3xl bg-saffron p-6 text-[#1c1b19] md:p-10"
        >
          <p className="font-mono text-xs">UI / UX</p>
          <p className="mt-10 text-[clamp(1.8rem,4vw,3.5rem)] font-semibold leading-none">{data.merge.design}</p>
        </div>
        <div
          data-merge-right
          className="relative w-[42vw] max-w-sm rounded-3xl bg-charcoal p-6 text-bone md:p-10"
        >
          <p className="font-mono text-xs text-saffron">{"</>"}</p>
          <p className="mt-10 text-[clamp(1.8rem,4vw,3.5rem)] font-semibold leading-none">{data.merge.code}</p>
        </div>

        <p
          data-merge-one
          className="absolute bottom-8 text-xl font-semibold md:text-3xl"
        >
          {data.merge.one}
        </p>
      </div>
    </section>
  );
}
