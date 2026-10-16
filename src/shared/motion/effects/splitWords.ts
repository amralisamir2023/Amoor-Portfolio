import { gsap } from "../gsap";
import type { MotionEffect } from "../types";
import { wrapWords } from "../utils/wrapWords";

/** [data-split] — words slide up from a mask when scrolled into view. */
export const splitWords: MotionEffect = (root) => {
  root.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
    el.setAttribute("aria-label", el.textContent ?? "");
    wrapWords(el, { mask: true });
    gsap.from(el.querySelectorAll(".word"), {
      yPercent: 115,
      duration: 1.1,
      ease: "power4.out",
      stagger: 0.06,
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
    });
  });
};
