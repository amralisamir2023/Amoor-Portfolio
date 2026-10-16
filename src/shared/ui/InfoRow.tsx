import type { ReactNode } from "react";

interface InfoRowProps {
  meta: string;
  title?: string;
  children: ReactNode;
}

/** One ruled row: meta on the side, content on the other. Used by Education, Experience, Achievements. */
export function InfoRow({ meta, title, children }: InfoRowProps) {
  return (
    <li
      data-reveal
      className={`grid gap-3 border-t border-charcoal/15 py-8 md:gap-10 ${meta ? "md:grid-cols-[14rem_1fr]" : ""}`}
    >
      {meta && <span className="font-mono text-xs uppercase tracking-[0.15em] text-saffron">{meta}</span>}
      <div>
        {title && <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h3>}
        <div className={title ? "mt-2 text-clay" : "text-xl md:text-2xl"}>{children}</div>
      </div>
    </li>
  );
}

export function InfoList({ children }: { children: ReactNode }) {
  return <ul className="border-b border-charcoal/15">{children}</ul>;
}
