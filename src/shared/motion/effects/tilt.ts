import { gsap } from "../gsap";
import type { MotionEffect } from "../types";

const MAX_TILT = 14;

/**
 * [data-tilt] — element leans toward the pointer in 3D and springs back on leave.
 * An optional [data-tilt-glare] child gets a light that follows the pointer.
 */
export const tilt: MotionEffect = (root) => {
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!finePointer || reduced) return;

  const cleanups: Array<() => void> = [];

  root.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
    const glare = el.querySelector<HTMLElement>("[data-tilt-glare]");
    gsap.set(el, { transformPerspective: 900, transformStyle: "preserve-3d" });

    const rotateX = gsap.quickTo(el, "rotationX", { duration: 0.6, ease: "power3.out" });
    const rotateY = gsap.quickTo(el, "rotationY", { duration: 0.6, ease: "power3.out" });

    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      rotateY(px * MAX_TILT * 2);
      rotateX(-py * MAX_TILT * 2);
      if (glare) {
        glare.style.background = `radial-gradient(circle at ${(px + 0.5) * 100}% ${(py + 0.5) * 100}%, rgba(255,255,255,0.4), transparent 55%)`;
        glare.style.opacity = "1";
      }
    };
    const leave = () => {
      rotateX(0);
      rotateY(0);
      if (glare) glare.style.opacity = "0";
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    cleanups.push(() => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    });
  });

  return () => cleanups.forEach((fn) => fn());
};
