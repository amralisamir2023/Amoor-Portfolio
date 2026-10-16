import { gsap } from "../gsap";
import type { MotionEffect } from "../types";

/**
 * [data-showcase] — pinned gallery. Text steps on one side light up in turn while
 * their screenshot wipes in over the previous one on the other side.
 */
export const showcase: MotionEffect = (root) => {
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    root.querySelectorAll<HTMLElement>("[data-showcase]").forEach((section) => {
      const steps = Array.from(section.querySelectorAll<HTMLElement>("[data-showcase-step]"));
      const images = Array.from(section.querySelectorAll<HTMLElement>("[data-showcase-image]"));
      const progress = section.querySelector("[data-showcase-progress]");
      if (steps.length < 2 || steps.length !== images.length) return;

      gsap.set(images, { clipPath: "inset(100% 0% 0% 0%)", scale: 1.12 });
      gsap.set(images[0], { clipPath: "inset(0% 0% 0% 0%)", scale: 1 });
      gsap.set(steps, { opacity: 0.25, x: 0 });
      gsap.set(steps[0], { opacity: 1 });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${(steps.length - 1) * 100}%`,
          pin: true,
          scrub: 1,
        },
      });

      steps.forEach((step, i) => {
        if (i === 0) return;
        tl.to(images[i], { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 1 }, i - 1)
          .to(images[i - 1], { scale: 0.94, opacity: 0.4, duration: 1 }, i - 1)
          .to(steps[i - 1], { opacity: 0.25, duration: 0.5 }, i - 1)
          .to(steps[i], { opacity: 1, duration: 0.5 }, i - 1 + 0.5);
      });
      if (progress) tl.fromTo(progress, { scaleX: 0 }, { scaleX: 1, duration: steps.length - 1 }, 0);
    });
  });

  return () => mm.revert();
};
