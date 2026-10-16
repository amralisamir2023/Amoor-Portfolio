import { gsap } from "../gsap";
import type { MotionEffect } from "../types";
import { wrapWords } from "../utils/wrapWords";

/** [data-scrub-words] — words light up one by one, tied to scroll position. */
export const scrubWords: MotionEffect = (root) => {
  root.querySelectorAll<HTMLElement>("[data-scrub-words]").forEach((el) => {
    el.setAttribute("aria-label", el.textContent ?? "");
    wrapWords(el, { mask: false });
    gsap.fromTo(
      el.querySelectorAll(".word"),
      { opacity: 0.12 },
      {
        opacity: 1,
        ease: "none",
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true },
      },
    );
  });
};
