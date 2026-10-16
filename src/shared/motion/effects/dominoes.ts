import { gsap } from "../gsap";
import type { MotionEffect } from "../types";

/**
 * [data-dominoes] with [data-domino] children — the section is pinned and the
 * dominoes tip over one after another as you scroll, turning saffron on the way.
 */
export const dominoes: MotionEffect = (root) => {
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    root.querySelectorAll<HTMLElement>("[data-dominoes]").forEach((section) => {
      const pieces = section.querySelectorAll<HTMLElement>("[data-domino]");
      if (!pieces.length) return;
      const saffron = getComputedStyle(document.documentElement).getPropertyValue("--saffron").trim() || "#e9a21c";
      const progress = section.querySelector("[data-domino-progress]");

      gsap.set(pieces, { transformOrigin: "100% 100%" });

      const tl = gsap.timeline({
        defaults: { ease: "power2.in" },
        scrollTrigger: { trigger: section, start: "top top", end: "+=140%", pin: true, scrub: 1 },
      });
      tl.to(pieces, { rotate: 74, backgroundColor: saffron, duration: 1, stagger: 0.55 }, 0);
      if (progress) tl.fromTo(progress, { scaleX: 0 }, { scaleX: 1, ease: "none", duration: tl.duration() }, 0);
    });
  });

  return () => mm.revert();
};
