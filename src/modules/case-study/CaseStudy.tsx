import Image from "next/image";
import type { Locale } from "@/core/entities/locale";
import type { Project } from "@/core/entities/portfolio";
import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { ArrowOutwardIcon, CheckCircleIcon } from "@/shared/ui/icons";
import { TagList } from "@/shared/ui/Tag";

interface CaseStudyProps {
  locale: Locale;
  project: Project;
}

const DOMINO_COUNT = 14;

const Label = ({ children }: { children: React.ReactNode }) => (
  <p data-reveal className="font-mono text-xs uppercase tracking-[0.2em] text-saffron">
    {children}
  </p>
);

export function CaseStudy({ locale, project }: CaseStudyProps) {
  const study = project.caseStudy;
  if (!study) return null;
  const cover = project.images?.[0];

  return (
    <article>
      {/* Hero */}
      <section className="pb-16 pt-32 md:pt-40">
        <Container>
          <Label>{study.eyebrow}</Label>
          <h1 data-chars dir="ltr" className="mt-6 text-[clamp(4.5rem,17vw,16rem)] font-semibold leading-[0.95] tracking-tighter">
            {project.title}
          </h1>
          <p data-split className="mt-8 max-w-4xl text-2xl font-medium leading-snug md:text-4xl">
            {study.tagline}
          </p>

          <dl className="mt-14 grid gap-8 border-t border-charcoal/15 pt-8 md:grid-cols-3">
            <div data-reveal>
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-clay">{study.role.label}</dt>
              <dd className="mt-2 text-lg">{study.role.value}</dd>
            </div>
            <div data-reveal className="md:col-span-2">
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-clay">{study.stackLabel}</dt>
              <dd className="mt-3">
                <TagList tags={project.tags} />
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* Cover that expands to full bleed */}
      {cover && (
        <section className="overflow-hidden px-0 pb-24">
          <div data-expand className="relative mx-auto aspect-[16/9] w-full max-w-[1800px] overflow-hidden bg-charcoal/10">
            <Image src={cover.src} alt={cover.alt} fill priority sizes="100vw" className="object-cover object-top" />
          </div>
        </section>
      )}

      {/* Overview — words light up with scroll */}
      <section className="py-24 md:py-32">
        <Container className="grid gap-8 lg:grid-cols-12">
          <Label>{study.overviewTitle}</Label>
          <p
            data-scrub-words
            className="text-[clamp(1.6rem,3.4vw,3.2rem)] font-medium leading-snug lg:col-span-9 lg:col-start-4"
          >
            {study.overview}
          </p>
        </Container>
      </section>

      {/* Stats — count up */}
      <section className="border-y border-charcoal/15 py-20">
        <Container className="grid gap-12 md:grid-cols-3">
          {study.stats.map((stat) => (
            <div key={stat.label}>
              <p data-count={stat.value} className="text-[clamp(4rem,10vw,9rem)] font-semibold leading-none text-saffron">
                0
              </p>
              <p data-reveal className="mt-3 text-clay">
                {stat.label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 md:py-36">
        <Container className="grid gap-16 lg:grid-cols-2">
          {[study.challenge, study.solution].map((block) => (
            <div key={block.title}>
              <Label>{block.title}</Label>
              <h2 data-split className="mt-4 text-[clamp(1.8rem,3.4vw,3rem)] font-semibold leading-tight">
                {block.text}
              </h2>
            </div>
          ))}
        </Container>
      </section>

      {/* Dominoes — pinned, tip over with scroll */}
      <section data-dominoes className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-charcoal py-24 text-bone">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-saffron">{study.domino.title}</p>
          <p className="mt-6 max-w-3xl text-[clamp(1.6rem,3.2vw,3rem)] font-medium leading-snug">{study.domino.text}</p>

          <div dir="ltr" className="mt-20 flex items-end justify-between gap-2 md:gap-4" aria-hidden="true">
            {Array.from({ length: DOMINO_COUNT }, (_, i) => (
              <span
                key={i}
                data-domino
                className="block h-28 w-4 shrink-0 rounded-md bg-bone md:h-44 md:w-7"
              />
            ))}
          </div>
          <div className="mt-10 h-px w-full bg-bone/20" aria-hidden="true">
            <div data-domino-progress className="h-full origin-left bg-saffron" />
          </div>
        </Container>
      </section>

      {/* Showcase — pinned screenshot swap */}
      <section data-showcase className="relative flex min-h-screen flex-col justify-center overflow-hidden pb-12 pt-24">
        <Container>
          <div className="h-px w-full bg-charcoal/15" aria-hidden="true">
            <div data-showcase-progress className="h-full origin-left bg-saffron rtl:origin-right" />
          </div>
          <h2 data-split className="mt-6 text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight">
            {study.showcase.title}
          </h2>

          <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
            <ol className="space-y-4 lg:space-y-6">
              {study.showcase.steps.map((step, i) => (
                <li key={step.title} data-showcase-step>
                  <span className="font-mono text-xs text-saffron">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-2xl font-semibold md:text-3xl">{step.title}</h3>
                  <p className="mt-2 max-w-md text-clay">{step.text}</p>
                </li>
              ))}
            </ol>

            <div className="relative aspect-[16/10] w-full">
              {study.showcase.steps.map((step) => (
                <div
                  key={step.image.src}
                  data-showcase-image
                  className="absolute inset-0 overflow-hidden rounded-2xl border border-charcoal/15 bg-bone shadow-2xl"
                >
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 90vw"
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* All features */}
      {project.features && (
        <section className="py-24 md:py-32">
          <Container>
            <h2 data-split className="text-[clamp(2rem,5vw,4.5rem)] font-semibold leading-tight">
              {study.featuresTitle}
            </h2>
            <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  data-reveal
                  className="flex items-start gap-3 rounded-2xl border border-charcoal/15 p-6 transition-colors hover:border-saffron"
                >
                  <CheckCircleIcon className="mt-0.5 shrink-0 text-saffron" />
                  {feature}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* Outro */}
      <section className="pb-32 pt-8">
        <Container className="flex flex-wrap items-center justify-between gap-8 border-t border-charcoal/15 pt-12">
          <a
            href={`/${locale}#projects`}
            data-magnetic
            className="text-[clamp(1.6rem,4vw,3.5rem)] font-semibold transition-colors hover:text-saffron"
          >
            <span className="inline-block rtl:rotate-180">←</span> {study.cta.back}
          </a>
          {project.href && (
            <Button href={project.href} external>
              {study.cta.live}
              <ArrowOutwardIcon fontSize="small" className="ms-2 rtl:-scale-x-100" />
            </Button>
          )}
        </Container>
      </section>
    </article>
  );
}
