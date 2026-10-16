import type { ContactKind, Portfolio } from "@/core/entities/portfolio";
import { Container } from "@/shared/ui/Container";
import {
  AlternateEmailIcon,
  ArrowOutwardIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  StorefrontIcon,
} from "@/shared/ui/icons";

const kindIcons = {
  email: MailIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  khamsat: StorefrontIcon,
} satisfies Record<ContactKind, unknown>;

export function Contact({ index, data }: { index: string; data: Portfolio["contact"] }) {
  return (
    <footer id="contact" className="border-t border-charcoal/15 bg-charcoal py-24 text-bone md:py-36">
      <Container>
        <p data-reveal className="font-mono text-xs uppercase tracking-[0.2em] text-saffron">
          {index} — {data.copy.label}
        </p>
        <h2
          data-split
          className="mt-4 max-w-4xl text-[clamp(2.5rem,7vw,6.5rem)] font-semibold leading-[1.08] tracking-tight"
        >
          {data.copy.title}
        </h2>
        <p data-reveal className="mt-8 max-w-xl text-lg text-bone/70">
          {data.text}
        </p>

        <ul className="mt-12 divide-y divide-bone/15 border-y border-bone/15">
          {data.links.map((link) => {
            const Icon = kindIcons[link.kind];
            return (
              <li key={link.kind} data-reveal>
                <a
                  href={link.href}
                  target={link.kind === "email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 text-xl transition-colors hover:text-saffron"
                >
                  <span className="flex items-center gap-4">
                    <Icon />
                    {link.label}
                  </span>
                  <ArrowOutwardIcon className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 rtl:-scale-x-100" />
                </a>
              </li>
            );
          })}
          <li data-reveal className="flex items-center gap-4 py-5 text-xl text-bone/70">
            <AlternateEmailIcon />
            {data.social}
          </li>
        </ul>

        <p className="mt-16 font-mono text-xs text-bone/50">{data.copyright}</p>
      </Container>
    </footer>
  );
}
