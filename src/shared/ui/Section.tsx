import type { ReactNode } from "react";
import type { SectionCopy } from "@/core/entities/portfolio";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";

interface SectionProps {
  id: string;
  index: string;
  copy: SectionCopy;
  children?: ReactNode;
}

export function Section({ id, index, copy, children }: SectionProps) {
  return (
    <section id={id} className="py-24 md:py-36">
      <Container>
        <SectionHeader index={index} copy={copy} />
        {children && <div className="mt-12 md:mt-16">{children}</div>}
      </Container>
    </section>
  );
}
