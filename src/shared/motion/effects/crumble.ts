import { gsap } from "../gsap";
import type { MotionEffect } from "../types";

const RADIUS = 55;

/**
 * [data-crumble] with [data-crumble-word] children — words sit assembled. Letters
 * near the pointer fall to the floor of the area, bounce, then re-assemble.
 */
export const crumble: MotionEffect = (root) => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const cleanups: Array<() => void> = [];

  root.querySelectorAll<HTMLElement>("[data-crumble]").forEach((area) => {
    const letters: HTMLElement[] = [];

    area.querySelectorAll<HTMLElement>("[data-crumble-word]").forEach((word) => {
      const text = word.textContent ?? "";
      word.setAttribute("aria-label", text);
      word.textContent = "";
      Array.from(text).forEach((ch) => {
        if (ch === " ") {
          word.append(" ");
          return;
        }
        const span = document.createElement("span");
        span.className = "char";
        span.setAttribute("aria-hidden", "true");
        span.textContent = ch;
        word.append(span);
        letters.push(span);
      });
    });

    const fallen = new WeakSet<HTMLElement>();

    const fall = (el: HTMLElement) => {
      fallen.add(el);
      const floor = area.getBoundingClientRect().bottom - el.getBoundingClientRect().bottom;
      gsap
        .timeline({ onComplete: () => fallen.delete(el) })
        .to(el, {
          x: gsap.utils.random(-80, 80),
          y: Math.max(0, floor - gsap.utils.random(0, 20)),
          rotation: gsap.utils.random(-170, 170),
          duration: gsap.utils.random(0.8, 1.3),
          ease: "bounce.out",
        })
        .to(el, { x: 0, y: 0, rotation: 0, duration: 0.9, ease: "power3.inOut" }, "+=1.4");
    };

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        letters.forEach((el) => {
          if (fallen.has(el)) return;
          const r = el.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          if (dx * dx + dy * dy < RADIUS * RADIUS) fall(el);
        });
      });
    };

    area.addEventListener("pointermove", onMove);
    cleanups.push(() => {
      area.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    });
  });

  return () => cleanups.forEach((fn) => fn());
};
