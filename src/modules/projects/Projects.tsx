import Image from "next/image";
import type { Locale } from "@/core/entities/locale";
import type { Portfolio } from "@/core/entities/portfolio";
import { caseStudyPath } from "@/core/usecases/getProjectBySlug";
import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { ArrowOutwardIcon, CheckCircleIcon } from "@/shared/ui/icons";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import { TagList } from "@/shared/ui/Tag";

type Project = Portfolio["projects"]["items"][number];

interface ProjectsProps {
  index: string;
  locale: Locale;
  data: Portfolio["projects"];
  ui: Pick<Portfolio["ui"], "liveDemo" | "featuresLabel" | "viewCaseStudy">;
}

function Gallery({
  images,
  title,
  href,
}: {
  images: NonNullable<Project["images"]>;
  title: string;
  href?: string;
}) {
  const [cover, ...rest] = images;
  const coverImage = (
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-charcoal/15 bg-charcoal/5">
      <Image
        src={cover.src}
        alt={cover.alt}
        fill
        sizes="(min-width: 1024px) 40vw, 90vw"
        className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
      />
    </div>
  );
  return (
    <div className="space-y-3">
      {href ? (
        <a href={href} className="block" aria-label={title}>
          {coverImage}
        </a>
      ) : (
        coverImage
      )}
      {rest.length > 0 && (
        <ul className="grid grid-cols-3 gap-3">
          {rest.map((image) => (
            <li
              key={image.src}
              className="relative aspect-[16/10] overflow-hidden rounded-xl border border-charcoal/15 bg-charcoal/5"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 12vw, 30vw"
                className="object-cover object-top"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  position,
  locale,
  ui,
}: {
  project: Project;
  position: number;
  locale: Locale;
  ui: ProjectsProps["ui"];
}) {
  const caseHref = project.slug && project.caseStudy ? caseStudyPath(locale, project.slug) : undefined;
  const hasImages = Boolean(project.images?.length);
  const number = String(position).padStart(2, "0");

  const title = caseHref ? (
    <a href={caseHref} className="transition-colors hover:text-saffron">
      {project.title}
    </a>
  ) : (
    project.title
  );

  return (
    <article
      data-stack-card
      style={{ "--i": position - 1 } as React.CSSProperties}
      className="flex flex-col gap-8 rounded-3xl border border-charcoal/15 bg-bone p-6 md:p-10 lg:sticky lg:top-[calc(5.5rem+var(--i)*1.1rem)]"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-saffron">{number}</span>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              {title}
              {project.titleAlt && <span className="ms-3 text-clay">{project.titleAlt}</span>}
            </h3>
            <div className="mt-5 space-y-3 text-clay">
              {project.details.map((detail) => (
                <p key={detail.label}>
                  <b className="font-semibold text-charcoal">{detail.label}:</b> {detail.text}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <TagList tags={project.tags} />
            <div className="flex flex-wrap gap-3">
              {caseHref && (
                <Button href={caseHref} size="sm">
                  {ui.viewCaseStudy}
                  <ArrowOutwardIcon fontSize="small" className="ms-2 rtl:-scale-x-100" />
                </Button>
              )}
              {project.href && (
                <Button href={project.href} external size="sm" variant="ghost">
                  {ui.liveDemo}
                  <ArrowOutwardIcon fontSize="small" className="ms-2 rtl:-scale-x-100" />
                </Button>
              )}
            </div>
          </div>
        </div>

        {hasImages ? (
          <Gallery images={project.images!} title={project.title} href={caseHref} />
        ) : (
          <div
            aria-hidden="true"
            className="hidden select-none items-end justify-end font-mono text-[10rem] font-semibold leading-none text-charcoal/10 lg:flex"
          >
            {number}
          </div>
        )}
      </div>

      {project.features && (
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-saffron">{ui.featuresLabel}</p>
          <ul className="mt-3 gap-x-8 text-sm text-clay lg:columns-2">
            {project.features.map((feature) => (
              <li key={feature} className="mb-2 flex break-inside-avoid items-start gap-2">
                <CheckCircleIcon fontSize="inherit" className="mt-0.5 shrink-0 text-saffron" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export function Projects({ index, locale, data, ui }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 md:py-36">
      <Container>
        <SectionHeader index={index} copy={data.copy} />
        {/* Cards stick and pile up on desktop (motion/effects/stack.ts) */}
        <div data-stack className="mt-12 flex flex-col gap-6 lg:mt-16 lg:gap-24">
          {data.items.map((project, i) => (
            <ProjectCard key={project.title} project={project} position={i + 1} locale={locale} ui={ui} />
          ))}
        </div>
      </Container>
    </section>
  );
}
