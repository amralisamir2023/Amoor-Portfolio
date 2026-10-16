"use client";

import { useEffect, useRef } from "react";
import { gsap } from "./gsap";

interface PreloaderProps {
  name: string;
  onDone: () => void;
}

export function Preloader({ name, onDone }: PreloaderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.display = "none";
      doneRef.current();
      return;
    }

    const html = document.documentElement;
    html.style.overflow = "hidden";
    const counter = { value: 0 };

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          onComplete: () => {
            html.style.overflow = "";
            el.style.display = "none";
            doneRef.current();
          },
        })
        .to(counter, {
          value: 100,
          duration: 1.6,
          ease: "power2.inOut",
          onUpdate: () => {
            if (countRef.current) countRef.current.textContent = String(Math.round(counter.value));
          },
        })
        .to("[data-pre-content]", { yPercent: -30, opacity: 0, duration: 0.5, ease: "power2.in" })
        .to(el, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "-=0.15");
    }, el);

    return () => {
      ctx.revert();
      html.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      dir="ltr"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal text-bone"
    >
      <div data-pre-content className="text-center">
        <p className="text-[clamp(2.5rem,8vw,6rem)] font-semibold leading-none">{name}</p>
        <p className="mt-6 font-mono text-sm text-saffron">
          <span ref={countRef}>0</span>%
        </p>
      </div>
    </div>
  );
}
