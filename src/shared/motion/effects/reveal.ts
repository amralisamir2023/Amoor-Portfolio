import { gsap, ScrollTrigger } from "../gsap";
import type { MotionEffect } from "../types";

/** [data-reveal] — fade up, batched so siblings entering together stagger. */
export const reveal: MotionEffect = (root) => {
  const items = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
  if (!items.length) return;

  gsap.set(items, { opacity: 0, y: 40 });
  ScrollTrigger.batch(items, {
    start: "top 92%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.1 }),
  });
};
