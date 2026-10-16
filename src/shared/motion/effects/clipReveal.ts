import { gsap } from "../gsap";
import type { MotionEffect } from "../types";

/** [data-clip-reveal] — image/block is unmasked from the bottom. */
export const clipReveal: MotionEffect = (root) => {
  root.querySelectorAll<HTMLElement>("[data-clip-reveal]").forEach((el) => {
    gsap.from(el, {
      clipPath: "inset(100% 0% 0% 0%)",
      duration: 1.4,
      ease: "power4.inOut",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
    });
  });
};
