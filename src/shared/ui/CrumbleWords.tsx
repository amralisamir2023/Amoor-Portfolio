import { Fragment } from "react";
import { Container } from "./Container";

interface CrumbleWordsProps {
  items: string[];
  hint: string;
}

/** Big assembled words. Hovering crumbles the letters (see motion/effects/crumble.ts). */
export function CrumbleWords({ items, hint }: CrumbleWordsProps) {
  return (
    <section className="border-y border-charcoal/15 py-10 md:py-14">
      <Container>
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-clay">{hint}</p>
        <div
          data-crumble
          dir="ltr"
          className="flex min-h-[55vh] flex-wrap content-start items-start gap-x-6 gap-y-3 text-[clamp(2.5rem,8vw,7rem)] font-semibold leading-none tracking-tight md:gap-x-8"
        >
          {items.map((item, i) => (
            <Fragment key={item}>
              <span data-crumble-word className="select-none">
                {item}
              </span>
              {i < items.length - 1 && (
                <span aria-hidden="true" className="-ms-4 select-none text-saffron md:-ms-6">
                  ,
                </span>
              )}
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
