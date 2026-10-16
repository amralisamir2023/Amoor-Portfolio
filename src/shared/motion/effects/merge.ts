import { gsap } from "../gsap";
import type { MotionEffect } from "../types";

/**
 * [data-merge] — pinned scene. Two cards start far apart (the "handoff gap")
 * and slide together as you scroll until they become one.
 * Children: [data-merge-left], [data-merge-right], [data-merge-gap], [data-merge-one].
 */
export const merge: MotionEffect = (root) => {
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    root.querySelectorAll<HTMLElement>("[data-merge]").forEach((scene) => {
      const left = scene.querySelector("[data-merge-left]");
      const right = scene.querySelector("[data-merge-right]");
      const gap = scene.querySelector("[data-merge-gap]");
      const one = scene.querySelector("[data-merge-one]");
      if (!left || !right) return;

      gsap.set(left, { xPercent: -75 });
      gsap.set(right, { xPercent: 75 });
      if (one) gsap.set(one, { opacity: 0, y: 24 });

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: { trigger: scene, start: "center center", end: "+=110%", pin: true, scrub: 1 },
      });
      tl.to(left, { xPercent: -6, rotate: -5, duration: 1 }, 0)
        .to(right, { xPercent: 6, rotate: 4, duration: 1 }, 0)
        .to([left, right], { scale: 1.06, duration: 0.35 }, 0.9);
      if (gap) tl.to(gap, { opacity: 0, scale: 0.7, duration: 0.45 }, 0.25);
      if (one) tl.to(one, { opacity: 1, y: 0, duration: 0.5 }, 0.85);
    });
  });

  return () => mm.revert();
};
