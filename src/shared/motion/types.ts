/**
 * A motion effect binds itself to elements carrying a data-attribute.
 * It may return a cleanup function. Add new effects by adding a file and
 * registering it in effects/index.ts — nothing else changes (Open/Closed).
 */
export type MotionEffect = (root: ParentNode) => void | (() => void);
