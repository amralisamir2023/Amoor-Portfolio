"use client";

import { useEffect, useRef } from "react";

const TOKENS = "{}[]()<>/\\;:=+-*&|!?#$%01{}</>const let => import export () => {}".split("");
const FONT_SIZE = 16;
const TRAIL = 12;

interface Drop {
  y: number;
  speed: number;
  chars: string[];
}

const randomChar = () => TOKENS[Math.floor(Math.random() * TOKENS.length)];
const newDrop = (startAbove = true): Drop => ({
  y: startAbove ? -Math.random() * 40 : Math.random() * 40,
  speed: 0.15 + Math.random() * 0.35,
  chars: Array.from({ length: TRAIL }, randomChar),
});

/** Faint "code rain" canvas. Colors follow the theme tokens; static when reduced motion is on. */
export function CodeBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let drops: Drop[] = [];
    let width = 0;
    let height = 0;
    let raf = 0;
    let last = 0;
    let clay = "#8b7764";
    let saffron = "#e9a21c";

    const readColors = () => {
      const styles = getComputedStyle(document.documentElement);
      clay = styles.getPropertyValue("--clay").trim() || clay;
      saffron = styles.getPropertyValue("--saffron").trim() || saffron;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const columns = Math.ceil(width / (FONT_SIZE * 1.4));
      drops = Array.from({ length: columns }, () => newDrop(false));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.font = `${FONT_SIZE}px ui-monospace, "JetBrains Mono", monospace`;
      const colWidth = FONT_SIZE * 1.4;
      drops.forEach((drop, col) => {
        drop.chars.forEach((char, i) => {
          const row = Math.floor(drop.y) - i;
          const y = row * FONT_SIZE;
          if (y < 0 || y > height) return;
          const isHead = i === 0;
          ctx.globalAlpha = isHead ? 0.9 : Math.max(0, 0.45 - i * 0.04);
          ctx.fillStyle = isHead ? saffron : clay;
          ctx.fillText(char, col * colWidth, y);
        });
      });
      ctx.globalAlpha = 1;
    };

    const tick = (time: number) => {
      raf = requestAnimationFrame(tick);
      if (time - last < 1000 / 30) return;
      last = time;
      drops.forEach((drop, i) => {
        drop.y += drop.speed;
        if (Math.random() < 0.08) drop.chars[Math.floor(Math.random() * TRAIL)] = randomChar();
        if ((drop.y - TRAIL) * FONT_SIZE > height) drops[i] = newDrop();
      });
      draw();
    };

    readColors();
    resize();
    window.addEventListener("resize", resize);
    const themeObserver = new MutationObserver(readColors);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    if (reduced) {
      drops.forEach((drop) => (drop.y = Math.random() * (height / FONT_SIZE)));
      draw();
    } else {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        opacity: 0.35,
        maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
      }}
    />
  );
}
