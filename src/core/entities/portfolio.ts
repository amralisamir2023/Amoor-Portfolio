// Domain entities — framework-free, no knowledge of React, Next, or GSAP.
import type { Locale } from "./locale";

export interface SectionCopy {
  label: string;
  title: string;
  subtitle?: string;
}

export interface TimelineEntry {
  meta: string;
  title: string;
  text: string;
}

export interface SkillGroup {
  title: string;
  tags: string[];
}

export interface Service {
  title: string;
  text: string;
}

export interface ProjectDetail {
  label: string;
  text: string;
}

export interface Project {
  title: string;
  titleAlt?: string;
  details: ProjectDetail[];
  tags: string[];
  /** Live demo URL; the button is hidden when omitted. */
  href?: string;
  /** Short feature bullets; makes the card a wider "case study" card. */
  features?: string[];
  /** Screenshots under /public; the first one is the cover. */
  images?: ProjectImage[];
  /** URL segment of the case-study page; requires `caseStudy`. */
  slug?: string;
  caseStudy?: CaseStudy;
}

export type JourneyVisual = "design" | "university" | "frontend" | "projects" | "uiux" | "merge";

export interface JourneyStage {
  phase: string;
  title: string;
  text: string;
  visual: JourneyVisual;
  /** Used by the "projects" visual as a screenshot collage. */
  images?: ProjectImage[];
}

export interface CaseStudyStat {
  value: number;
  label: string;
}

export interface CaseStudyStep {
  title: string;
  text: string;
  image: ProjectImage;
}

export interface CaseStudy {
  eyebrow: string;
  tagline: string;
  overviewTitle: string;
  overview: string;
  role: { label: string; value: string };
  stackLabel: string;
  stats: CaseStudyStat[];
  challenge: { title: string; text: string };
  solution: { title: string; text: string };
  domino: { title: string; text: string };
  showcase: { title: string; steps: CaseStudyStep[] };
  featuresTitle: string;
  cta: { live: string; back: string };
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

export type ContactKind = "email" | "github" | "linkedin" | "khamsat";

export interface ContactLink {
  kind: ContactKind;
  label: string;
  /** Empty string means "not provided yet" and the link is hidden. */
  href: string;
}

export interface UiStrings {
  nav: { about: string; skills: string; work: string; contact: string };
  hire: string;
  seeWork: string;
  letsTalk: string;
  startProject: string;
  scroll: string;
  uspLabel: string;
  liveDemo: string;
  featuresLabel: string;
  viewCaseStudy: string;
  crumbHint: string;
  themeToLight: string;
  themeToDark: string;
  otherLanguage: string;
}

export interface Portfolio {
  locale: Locale;
  meta: { title: string; description: string };
  brand: { mark: string; name: string };
  ui: UiStrings;
  hero: {
    eyebrow: string;
    headlineBefore: string;
    headlineAccent: string;
    headlineAfter: string;
    lead: string;
    location: string;
  };
  about: { copy: SectionCopy; intro: string; paragraphs: string[]; usp: string };
  marquee: string[];
  /** Hero proof numbers, shown as count-ups. */
  proof: { value: number; label: string }[];
  story: {
    copy: SectionCopy;
    statement: string;
    merge: { design: string; code: string; gap: string; one: string };
  };
  journey: { copy: SectionCopy; stages: JourneyStage[] };
  process: { copy: SectionCopy; steps: { title: string; text: string }[] };
  audiences: {
    copy: SectionCopy;
    items: { title: string; text: string; cta: string; href: string }[];
  };
  education: { copy: SectionCopy; items: TimelineEntry[] };
  skills: { copy: SectionCopy; groups: SkillGroup[] };
  experience: { copy: SectionCopy; items: TimelineEntry[] };
  services: { copy: SectionCopy; items: Service[] };
  projects: { copy: SectionCopy; items: Project[] };
  achievements: { copy: SectionCopy; items: string[] };
  testimonials: { copy: SectionCopy; emptyMessage: string; items: Testimonial[] };
  contact: {
    copy: SectionCopy;
    text: string;
    links: ContactLink[];
    social: string;
    copyright: string;
  };
}
