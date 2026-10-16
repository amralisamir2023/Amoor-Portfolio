import type { MotionEffect } from "../types";
import { chars3d } from "./chars3d";
import { clipReveal } from "./clipReveal";
import { countUp } from "./countUp";
import { crumble } from "./crumble";
import { dominoes } from "./dominoes";
import { draw } from "./draw";
import { expand } from "./expand";
import { journey } from "./journey";
import { magnetic } from "./magnetic";
import { merge } from "./merge";
import { parallax } from "./parallax";
import { reveal } from "./reveal";
import { scrubWords } from "./scrubWords";
import { showcase } from "./showcase";
import { splitWords } from "./splitWords";
import { stack } from "./stack";
import { tilt } from "./tilt";

/**
 * Effects bind to data-attributes, so a page only runs the ones it uses.
 * Pin-based effects (merge, dominoes, showcase, stack) come last and are created in
 * DOM order so ScrollTrigger measures their spacing correctly.
 */
export const effects: MotionEffect[] = [
  splitWords,
  chars3d,
  scrubWords,
  countUp,
  reveal,
  clipReveal,
  expand,
  parallax,
  draw,
  magnetic,
  tilt,
  crumble,
  merge,
  journey,
  dominoes,
  showcase,
  stack,
];
