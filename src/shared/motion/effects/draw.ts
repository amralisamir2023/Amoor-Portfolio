import { gsap } from "../gsap";
import type { MotionEffect } from "../types";

/** [data-draw] with a [data-draw-line] child — the line is drawn downward as you scroll through. */
export const draw: MotionEffect = (root) => {
  root.querySelectorAll<HTMLElement>("[data-draw]").forEach((el) => {
    const line = el.querySelector("[data-draw-line]");
    if (!line) return;
    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top 65%", end: "bottom 60%", scrub: true },
      },
    );
  });
};
