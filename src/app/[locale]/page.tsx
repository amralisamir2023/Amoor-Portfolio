import { notFound } from "next/navigation";
import { isLocale } from "@/core/entities/locale";
import { getPortfolio } from "@/core/usecases/getPortfolio";
import { StaticContentRepository } from "@/infrastructure/content/StaticContentRepository";
import { About } from "@/modules/about/About";
import { Achievements } from "@/modules/achievements/Achievements";
import { Audiences } from "@/modules/audiences/Audiences";
import { Contact } from "@/modules/contact/Contact";
import { Education } from "@/modules/education/Education";
import { Experience } from "@/modules/experience/Experience";
import { Hero } from "@/modules/hero/Hero";
import { Journey } from "@/modules/journey/Journey";
import { Navbar } from "@/modules/navigation/Navbar";
import { Process } from "@/modules/process/Process";
import { Projects } from "@/modules/projects/Projects";
import { Services } from "@/modules/services/Services";
import { Skills } from "@/modules/skills/Skills";
import { Story } from "@/modules/story/Story";
import { Testimonials } from "@/modules/testimonials/Testimonials";
import { MotionRoot } from "@/shared/motion/MotionRoot";
import { CrumbleWords } from "@/shared/ui/CrumbleWords";

// Composition root: the only place that knows which repository implementation is used.
const repository = new StaticContentRepository();

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const p = await getPortfolio(repository, locale);

  // Section numbers follow the order the story is told in.
  let count = 0;
  const next = () => String(++count).padStart(2, "0");

  return (
    <>
      <Navbar locale={locale} brand={p.brand} ui={p.ui} />
      <main>
        {/* Hook */}
        <Hero hero={p.hero} ui={p.ui} proof={p.proof} photoAlt={p.brand.name} />
        <CrumbleWords items={p.marquee} hint={p.ui.crumbHint} />
        {/* Problem → who solves it */}
        <Story index={next()} data={p.story} />
        <About index={next()} about={p.about} uspLabel={p.ui.uspLabel} />
        <Journey index={next()} data={p.journey} />
        <Skills index={next()} data={p.skills} />
        {/* What you get, and proof */}
        <Services index={next()} data={p.services} cta={p.ui.startProject} />
        <Projects index={next()} locale={locale} data={p.projects} ui={p.ui} />
        {/* How it works, credentials */}
        <Process index={next()} data={p.process} />
        <Education index={next()} data={p.education} />
        <Experience index={next()} data={p.experience} />
        <Achievements index={next()} data={p.achievements} />
        <Testimonials index={next()} data={p.testimonials} cta={p.ui.startProject} />
        {/* Decision */}
        <Audiences index={next()} data={p.audiences} />
      </main>
      <Contact index={next()} data={p.contact} />
      <MotionRoot name={p.brand.name} />
    </>
  );
}
