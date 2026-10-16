import { gsap } from "../gsap";
import type { MotionEffect } from "../types";

/** [data-parallax="8"] — moves the element ±8% of its height as its parent scrolls past. */
export const parallax: MotionEffect = (root) => {
  root.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
    const amount = Number(el.dataset.parallax) || 10;
    gsap.fromTo(
      el,
      { yPercent: -amount },
      {
        yPercent: amount,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement ?? el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  });
};
