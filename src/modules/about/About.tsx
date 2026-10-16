import type { Portfolio } from "@/core/entities/portfolio";
import { Container } from "@/shared/ui/Container";
import { SectionHeader } from "@/shared/ui/SectionHeader";

interface AboutProps {
  index: string;
  about: Portfolio["about"];
  uspLabel: string;
}

export function About({ index, about, uspLabel }: AboutProps) {
  return (
    <section id="about" className="py-24 md:py-36">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader index={index} copy={about.copy} />
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-clay lg:col-span-7">
          <p data-reveal className="text-2xl font-medium leading-snug text-charcoal md:text-3xl">
            {about.intro}
          </p>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} data-reveal>
              {paragraph}
            </p>
          ))}
          <blockquote data-reveal className="mt-10 border-s-2 border-saffron ps-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-saffron">{uspLabel}</p>
            <p className="mt-3 text-xl font-medium leading-snug text-charcoal md:text-2xl">{about.usp}</p>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
