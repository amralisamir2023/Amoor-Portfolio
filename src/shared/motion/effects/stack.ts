import { gsap } from "../gsap";
import type { MotionEffect } from "../types";

/**
 * [data-stack] with [data-stack-card] children — cards are sticky (CSS) and pile up.
 * While later cards slide over, earlier ones shrink back a little, so the pile gets depth.
 */
export const stack: MotionEffect = (root) => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
    root.querySelectorAll<HTMLElement>("[data-stack]").forEach((container) => {
      const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-stack-card]"));
      const last = cards[cards.length - 1];
      if (cards.length < 2) return;

      cards.slice(0, -1).forEach((card, i) => {
        const buried = cards.length - 1 - i;
        gsap.to(card, {
          scale: 1 - 0.035 * buried,
          transformOrigin: "50% 0%",
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top 85%",
            endTrigger: last,
            end: "top 35%",
            scrub: true,
          },
        });
      });
    });
  });

  return () => mm.revert();
};
