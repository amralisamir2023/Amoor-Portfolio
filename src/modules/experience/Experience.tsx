import type { Portfolio } from "@/core/entities/portfolio";
import { InfoList, InfoRow } from "@/shared/ui/InfoRow";
import { Section } from "@/shared/ui/Section";

export function Experience({ index, data }: { index: string; data: Portfolio["experience"] }) {
  return (
    <Section id="experience" index={index} copy={data.copy}>
      <InfoList>
        {data.items.map((item) => (
          <InfoRow key={item.title} meta={item.meta} title={item.title}>
            {item.text}
          </InfoRow>
        ))}
      </InfoList>
    </Section>
  );
}
