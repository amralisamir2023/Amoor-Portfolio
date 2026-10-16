import type { Locale } from "@/core/entities/locale";
import { otherLocale } from "@/core/entities/locale";
import type { Portfolio } from "@/core/entities/portfolio";
import { Button } from "@/shared/ui/Button";
import { TranslateIcon } from "@/shared/ui/icons";
import { ThemeToggle } from "@/shared/ui/ThemeToggle";

interface NavbarProps {
  locale: Locale;
  brand: Portfolio["brand"];
  ui: Portfolio["ui"];
  /** Where the language switch goes. Defaults to the other locale's home page. */
  languageHref?: string;
}

export function Navbar({ locale, brand, ui, languageHref }: NavbarProps) {
  // Anchors are prefixed with the locale home so the bar also works on inner pages.
  const home = `/${locale}`;
  const links = [
    { href: `${home}#about`, label: ui.nav.about },
    { href: `${home}#skills`, label: ui.nav.skills },
    { href: `${home}#projects`, label: ui.nav.work },
    { href: `${home}#contact`, label: ui.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-charcoal/10 bg-bone/75 backdrop-blur-md">
      <div className="container-x flex items-center justify-between py-3">
        <a href={home} className="flex items-center gap-3 font-semibold" aria-label={brand.name}>
          <span className="grid size-9 place-items-center rounded-lg bg-saffron text-lg text-[#1c1b19]">
            {brand.mark}
          </span>
          <span className="text-lg">{brand.name}</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-clay transition-colors hover:text-saffron">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={languageHref ?? `/${otherLocale(locale)}`}
            className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm text-clay transition-colors hover:text-saffron"
          >
            <TranslateIcon fontSize="small" />
            {ui.otherLanguage}
          </a>
          <ThemeToggle toLight={ui.themeToLight} toDark={ui.themeToDark} />
          <Button href={`${home}#contact`} size="sm" className="hidden sm:inline-flex">
            {ui.hire}
          </Button>
        </div>
      </div>
    </header>
  );
}
