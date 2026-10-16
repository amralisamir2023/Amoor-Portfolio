import type { Locale } from "../entities/locale";
import type { Portfolio, Project } from "../entities/portfolio";

export function projectsWithCaseStudy(portfolio: Portfolio): Project[] {
  return portfolio.projects.items.filter((project) => project.slug && project.caseStudy);
}

export function findProjectBySlug(portfolio: Portfolio, slug: string): Project | undefined {
  return projectsWithCaseStudy(portfolio).find((project) => project.slug === slug);
}

export function caseStudyPath(locale: Locale, slug: string): string {
  return `/${locale}/projects/${slug}`;
}
