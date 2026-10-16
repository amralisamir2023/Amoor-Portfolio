import type { Locale } from "@/core/entities/locale";
import type { Portfolio } from "@/core/entities/portfolio";
import type { ContentRepository } from "@/core/ports/ContentRepository";
import { ar } from "./ar";
import { en } from "./en";

const byLocale: Record<Locale, Portfolio> = { en, ar };

export class StaticContentRepository implements ContentRepository {
  async getPortfolio(locale: Locale): Promise<Portfolio> {
    return byLocale[locale];
  }
}
