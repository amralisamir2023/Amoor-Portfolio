"use client";

import { useCallback, useEffect, useRef } from "react";
import { Preloader } from "./Preloader";
import { effects } from "./effects";
import { gsap, ScrollTrigger } from "./gsap";

type GsapContext = ReturnType<typeof gsap.context>;

interface MotionRootProps {
  name: string;
  /** Show the counter preloader first (home page). Inner pages start animating immediately. */
  intro?: boolean;
}

/** Composition point for all motion: optional preloader → run every registered effect. */
export function MotionRoot({ name, intro = true }: MotionRootProps) {
  const ctxRef = useRef<GsapContext | null>(null);
  const cleanupsRef = useRef<Array<() => void>>([]);

  const teardown = useCallback(() => {
    cleanupsRef.current.forEach((fn) => fn());
    cleanupsRef.current = [];
    ctxRef.current?.revert();
    ctxRef.current = null;
  }, []);

  const start = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    teardown();

    ctxRef.current = gsap.context(() => {
      effects.forEach((effect) => {
        const cleanup = effect(document);
        if (typeof cleanup === "function") cleanupsRef.current.push(cleanup);
      });
    });

    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }, [teardown]);

  useEffect(() => {
    if (!intro) start();
    return teardown;
  }, [intro, start, teardown]);

  return intro ? <Preloader name={name} onDone={start} /> : null;
}
