import { gsap } from "../gsap";
import type { MotionEffect } from "../types";

/** [data-expand] — framed image grows to full bleed while the picture inside settles. */
export const expand: MotionEffect = (root) => {
  root.querySelectorAll<HTMLElement>("[data-expand]").forEach((el) => {
    const trigger = { trigger: el, start: "top 85%", end: "top 10%", scrub: true };

    gsap.fromTo(
      el,
      { clipPath: "inset(14% 20% 14% 20% round 32px)" },
      { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none", scrollTrigger: trigger },
    );
    const image = el.querySelector("img");
    if (image) {
      gsap.fromTo(image, { scale: 1.35 }, { scale: 1, ease: "none", scrollTrigger: trigger });
    }
  });
};
