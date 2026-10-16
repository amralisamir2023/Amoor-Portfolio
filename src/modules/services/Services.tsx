import type { Portfolio } from "@/core/entities/portfolio";
import { Button } from "@/shared/ui/Button";
import { DesignServicesIcon, PhoneIphoneIcon, RtlIcon, StorageIcon, WebIcon } from "@/shared/ui/icons";
import { Section } from "@/shared/ui/Section";

// Presentation concern: one icon per service, in the same order as the content.
const serviceIcons = [DesignServicesIcon, WebIcon, PhoneIphoneIcon, RtlIcon, StorageIcon];

interface ServicesProps {
  index: string;
  data: Portfolio["services"];
  cta: string;
}

export function Services({ index, data, cta }: ServicesProps) {
  return (
    <Section id="services" index={index} copy={data.copy}>
      {/* Cards stick and pile up on desktop (motion/effects/stack.ts) */}
      <div data-stack className="flex flex-col gap-6 lg:gap-16">
        {data.items.map((service, i) => {
          const Icon = serviceIcons[i % serviceIcons.length];
          return (
            <article
              key={service.title}
              data-stack-card
              style={{ "--i": i } as React.CSSProperties}
              className="flex flex-col gap-6 rounded-3xl border border-charcoal/15 bg-bone p-8 md:flex-row md:items-center md:gap-12 md:p-12 lg:sticky lg:top-[calc(6rem+var(--i)*1.1rem)] lg:min-h-[17rem]"
            >
              <span className="font-mono text-6xl font-semibold text-charcoal/15 md:text-8xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold tracking-tight md:text-4xl">{service.title}</h3>
                <p className="mt-3 max-w-xl text-lg text-clay">{service.text}</p>
              </div>
              <span className="grid size-16 shrink-0 place-items-center rounded-full bg-saffron text-3xl text-[#1c1b19]">
                <Icon fontSize="inherit" />
              </span>
            </article>
          );
        })}
      </div>
      <div data-reveal className="mt-12">
        <Button href="#contact">{cta}</Button>
      </div>
    </Section>
  );
}
