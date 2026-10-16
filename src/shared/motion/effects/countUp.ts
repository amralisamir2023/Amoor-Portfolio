import { gsap } from "../gsap";
import type { MotionEffect } from "../types";

/** [data-count="9"] — number counts up when scrolled into view, formatted for the page language. */
export const countUp: MotionEffect = (root) => {
  const format = new Intl.NumberFormat(document.documentElement.lang || "en");

  root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count) || 0;
    const state = { value: 0 };
    el.textContent = format.format(0);

    gsap.to(state, {
      value: target,
      duration: 2.2,
      ease: "power3.out",
      snap: { value: 1 },
      onUpdate: () => {
        el.textContent = format.format(state.value);
      },
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
    });
  });
};
