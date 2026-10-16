import { gsap } from "../gsap";
import type { MotionEffect } from "../types";

/**
 * [data-chars] — letters flip up in 3D one after another.
 * Arabic is split by whole words instead of letters so joining is preserved.
 */
export const chars3d: MotionEffect = (root) => {
  const arabic = document.documentElement.lang === "ar";

  root.querySelectorAll<HTMLElement>("[data-chars]").forEach((el) => {
    const text = el.textContent ?? "";
    el.setAttribute("aria-label", text);
    el.textContent = "";
    el.style.perspective = "900px";

    const units = arabic ? text.split(/(\s+)/) : Array.from(text);
    units.forEach((unit) => {
      if (!unit) return;
      if (/^\s+$/.test(unit)) {
        el.append(" ");
        return;
      }
      const span = document.createElement("span");
      span.className = "char";
      span.setAttribute("aria-hidden", "true");
      span.textContent = unit;
      el.append(span);
    });

    gsap.from(el.querySelectorAll(".char"), {
      rotationX: -100,
      yPercent: 70,
      opacity: 0,
      transformOrigin: "50% 100% -30px",
      duration: 1.3,
      ease: "back.out(1.7)",
      stagger: 0.06,
      scrollTrigger: { trigger: el, start: "top 95%", once: true },
    });
  });
};
