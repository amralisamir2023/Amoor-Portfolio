import Image from "next/image";
import type { Portfolio } from "@/core/entities/portfolio";
import { Button } from "@/shared/ui/Button";
import { CodeBackground } from "@/shared/ui/CodeBackground";
import { Container } from "@/shared/ui/Container";
import { ArrowOutwardIcon, LocationOnIcon, SouthIcon } from "@/shared/ui/icons";

interface HeroProps {
  hero: Portfolio["hero"];
  ui: Portfolio["ui"];
  proof: Portfolio["proof"];
  photoAlt: string;
}

export function Hero({ hero, ui, proof, photoAlt }: HeroProps) {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pb-16 pt-24">
      <CodeBackground className="pointer-events-none absolute inset-0 z-0 size-full" />
      <Container className="relative z-10 grid items-end gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p data-reveal className="max-w-xl border-s-2 border-saffron ps-4 text-base font-medium leading-relaxed md:text-lg">
            {hero.eyebrow}
          </p>
          <h1
            data-split
            className="mt-6 text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-[1.08] tracking-tight"
          >
            <span className="block">{hero.headlineBefore}</span>
            <em className="block not-italic text-saffron">{hero.headlineAccent}</em>
            <span className="block">{hero.headlineAfter}</span>
          </h1>
          <p data-reveal className="mt-8 max-w-xl text-lg leading-relaxed text-clay">
            {hero.lead}
          </p>
          <div data-reveal className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects">
              {ui.seeWork}
              <ArrowOutwardIcon fontSize="small" className="ms-2 rtl:-scale-x-100" />
            </Button>
            <Button href="#contact" variant="ghost">
              {ui.letsTalk}
            </Button>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-charcoal/15 pt-6">
            {proof.map((item) => (
              <div key={item.label}>
                <dt data-count={item.value} className="text-4xl font-semibold text-saffron md:text-5xl">
                  0
                </dt>
                <dd className="mt-1 text-xs text-clay md:text-sm">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure data-tilt className="lg:col-span-5">
          <div data-clip-reveal className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-charcoal/10">
            <Image
              data-parallax="8"
              src="/amoor.png"
              alt={photoAlt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="scale-[1.2] object-cover"
            />
            <div
              data-tilt-glare
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
            />
          </div>
          <figcaption className="mt-4 flex items-center gap-1.5 font-mono text-xs text-clay">
            <LocationOnIcon fontSize="inherit" />
            {hero.location}
          </figcaption>
        </figure>
      </Container>

      <div className="mt-12 hidden items-center justify-center gap-2 font-mono text-xs text-clay md:flex">
        {ui.scroll.replace("↓", "").trim()}
        <SouthIcon fontSize="inherit" />
      </div>
    </section>
  );
}
