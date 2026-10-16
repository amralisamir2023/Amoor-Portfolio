import type { ContactKind, ContactLink } from "@/core/entities/portfolio";

// Fill in your URLs here once. Any link left empty is hidden automatically.
const hrefs: Record<ContactKind, string> = {
  email: "", // e.g. "mailto:you@example.com"
  github: "",
  linkedin: "",
  khamsat: "", // e.g. "https://khamsat.com/user/amor1010"
};

/** Builds the link list for a locale; only the labels differ per language. */
export function makeLinks(labels: Record<ContactKind, string>): ContactLink[] {
  return (Object.keys(hrefs) as ContactKind[]).map((kind) => ({
    kind,
    label: labels[kind],
    href: hrefs[kind],
  }));
}
