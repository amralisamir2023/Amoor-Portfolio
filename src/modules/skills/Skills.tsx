import type { Portfolio } from "@/core/entities/portfolio";
import { Section } from "@/shared/ui/Section";
import { TagList } from "@/shared/ui/Tag";

export function Skills({ index, data }: { index: string; data: Portfolio["skills"] }) {
  return (
    <Section id="skills" index={index} copy={data.copy}>
      <div className="grid gap-6 md:grid-cols-2">
        {data.groups.map((group) => (
          <div key={group.title} data-reveal className="rounded-3xl border border-charcoal/15 p-8">
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-saffron">{group.title}</h3>
            <TagList tags={group.tags} />
          </div>
        ))}
      </div>
    </Section>
  );
}
