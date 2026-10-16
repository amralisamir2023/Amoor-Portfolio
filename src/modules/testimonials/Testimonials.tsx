import type { Portfolio } from "@/core/entities/portfolio";
import { Button } from "@/shared/ui/Button";
import { FormatQuoteIcon } from "@/shared/ui/icons";
import { Section } from "@/shared/ui/Section";

interface TestimonialsProps {
  index: string;
  data: Portfolio["testimonials"];
  cta: string;
}

export function Testimonials({ index, data, cta }: TestimonialsProps) {
  const hasItems = data.items.length > 0;

  return (
    <Section id="testimonials" index={index} copy={data.copy}>
      {hasItems ? (
        <div className="grid gap-6 md:grid-cols-2">
          {data.items.map((item) => (
            <figure key={item.author} data-reveal className="rounded-3xl border border-charcoal/15 p-8">
              <FormatQuoteIcon className="text-saffron" fontSize="large" />
              <blockquote className="mt-2 text-xl">{item.quote}</blockquote>
              <figcaption className="mt-6 text-sm text-clay">
                {item.author}
                {item.role && ` · ${item.role}`}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div data-reveal className="flex flex-col items-start gap-6 rounded-3xl border border-dashed border-charcoal/25 p-8 md:p-12">
          <FormatQuoteIcon className="text-saffron" fontSize="large" />
          <p className="max-w-xl text-xl text-clay">{data.emptyMessage}</p>
          <Button href="#contact">{cta}</Button>
        </div>
      )}
    </Section>
  );
}
