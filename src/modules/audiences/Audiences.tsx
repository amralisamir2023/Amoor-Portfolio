import type { Portfolio } from "@/core/entities/portfolio";
import { ArrowOutwardIcon } from "@/shared/ui/icons";
import { Section } from "@/shared/ui/Section";

export function Audiences({ index, data }: { index: string; data: Portfolio["audiences"] }) {
  return (
    <Section id="work-with-me" index={index} copy={data.copy}>
      <div className="grid gap-6 md:grid-cols-2">
        {data.items.map((item) => (
          <a
            key={item.title}
            href={item.href}
            data-reveal
            className="group flex min-h-[18rem] flex-col justify-between rounded-3xl border border-charcoal/15 p-8 transition-colors duration-300 hover:border-saffron hover:bg-saffron hover:text-[#1c1b19] md:p-10"
          >
            <div>
              <h3 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">{item.title}</h3>
              <p className="mt-4 text-lg text-clay transition-colors group-hover:text-[#1c1b19]/80">{item.text}</p>
            </div>
            <span className="mt-8 flex items-center gap-2 text-lg font-medium">
              {item.cta}
              <ArrowOutwardIcon className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 rtl:-scale-x-100" />
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
