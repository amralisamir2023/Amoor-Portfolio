import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, otherLocale } from "@/core/entities/locale";
import { getPortfolio } from "@/core/usecases/getPortfolio";
import { caseStudyPath, findProjectBySlug, projectsWithCaseStudy } from "@/core/usecases/getProjectBySlug";
import { StaticContentRepository } from "@/infrastructure/content/StaticContentRepository";
import { CaseStudy } from "@/modules/case-study/CaseStudy";
import { Contact } from "@/modules/contact/Contact";
import { Navbar } from "@/modules/navigation/Navbar";
import { MotionRoot } from "@/shared/motion/MotionRoot";

const repository = new StaticContentRepository();

type Params = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const all = await Promise.all(
    locales.map(async (locale) => {
      const portfolio = await getPortfolio(repository, locale);
      return projectsWithCaseStudy(portfolio).map((project) => ({ locale, slug: project.slug as string }));
    }),
  );
  return all.flat();
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const project = findProjectBySlug(await getPortfolio(repository, locale), slug);
  if (!project?.caseStudy) return {};
  return {
    title: `${project.title} — ${project.caseStudy.eyebrow}`,
    description: project.caseStudy.tagline,
  };
}

export default async function ProjectPage({ params }: Params) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const portfolio = await getPortfolio(repository, locale);
  const project = findProjectBySlug(portfolio, slug);
  if (!project) notFound();

  return (
    <>
      <Navbar
        locale={locale}
        brand={portfolio.brand}
        ui={portfolio.ui}
        languageHref={caseStudyPath(otherLocale(locale), slug)}
      />
      <main>
        <CaseStudy locale={locale} project={project} />
      </main>
      <Contact index="→" data={portfolio.contact} />
      <MotionRoot name={portfolio.brand.name} intro={false} />
    </>
  );
}
