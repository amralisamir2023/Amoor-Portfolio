import { gsap } from "../gsap";
import type { MotionEffect } from "../types";

/**
 * [data-journey] — pinned timeline. Scrolling fills the progress line and lights up the
 * nodes; each stage fades in while its SVG is drawn ([data-journey-draw], pathLength=1)
 * and its pieces pop in ([data-journey-pop]).
 */
export const journey: MotionEffect = (root) => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
    const sections = Array.from(root.querySelectorAll<HTMLElement>("[data-journey]"));

    sections.forEach((section) => {
      const stages = Array.from(section.querySelectorAll<HTMLElement>("[data-journey-stage]"));
      const nodes = Array.from(section.querySelectorAll<HTMLElement>("[data-journey-node]"));
      const progress = section.querySelector("[data-journey-progress]");
      if (stages.length < 2) return;

      section.dataset.active = "true";

      const draws = (stage: HTMLElement) => Array.from(stage.querySelectorAll("[data-journey-draw]"));
      const pops = (stage: HTMLElement) => Array.from(stage.querySelectorAll("[data-journey-pop]"));

      gsap.set(stages.flatMap(draws), { strokeDasharray: 1, strokeDashoffset: 1 });
      gsap.set(stages.flatMap(pops), { opacity: 0, scale: 0.8 });
      gsap.set(stages.slice(1), { opacity: 0, y: 50 });
      gsap.set(nodes, { opacity: 0.35 });
      gsap.set(nodes[0], { opacity: 1 });

      // First stage draws itself when the section comes into view.
      gsap.to(draws(stages[0]), {
        strokeDashoffset: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: { trigger: section, start: "top 60%", once: true },
      });
      gsap.to(pops(stages[0]), {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.6)",
        scrollTrigger: { trigger: section, start: "top 60%", once: true },
      });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${(stages.length - 1) * 90}%`,
          pin: true,
          scrub: 1,
        },
      });

      stages.forEach((stage, i) => {
        if (i === 0) return;
        const t = i - 1;
        tl.to(stages[i - 1], { opacity: 0, y: -50, duration: 0.4 }, t)
          .to(stage, { opacity: 1, y: 0, duration: 0.5 }, t + 0.4)
          .to(draws(stage), { strokeDashoffset: 0, duration: 0.5, stagger: 0.08 }, t + 0.45)
          .to(pops(stage), { opacity: 1, scale: 1, duration: 0.4, stagger: 0.08 }, t + 0.55)
          .to(nodes[i], { opacity: 1, duration: 0.3 }, t + 0.4);
      });

      if (progress) tl.fromTo(progress, { scaleX: 0 }, { scaleX: 1, duration: stages.length - 1 }, 0);
    });

    return () => sections.forEach((section) => delete section.dataset.active);
  });

  return () => mm.revert();
};
