import type { Portfolio } from "@/core/entities/portfolio";
import { CheckCircleIcon } from "@/shared/ui/icons";
import { InfoList, InfoRow } from "@/shared/ui/InfoRow";
import { Section } from "@/shared/ui/Section";

export function Achievements({ index, data }: { index: string; data: Portfolio["achievements"] }) {
  return (
    <Section id="achievements" index={index} copy={data.copy}>
      <InfoList>
        {data.items.map((item) => (
          <InfoRow key={item} meta="">
            <span className="flex items-start gap-4">
              <CheckCircleIcon className="mt-1 text-saffron" />
              {item}
            </span>
          </InfoRow>
        ))}
      </InfoList>
    </Section>
  );
}
