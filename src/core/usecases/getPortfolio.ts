import type { Locale } from "../entities/locale";
import type { Portfolio } from "../entities/portfolio";
import type { ContentRepository } from "../ports/ContentRepository";

/** Business rule: contact links without a URL are not shown. */
export function withVisibleLinks(portfolio: Portfolio): Portfolio {
  return {
    ...portfolio,
    contact: {
      ...portfolio.contact,
      links: portfolio.contact.links.filter((link) => link.href.trim() !== ""),
    },
  };
}

export async function getPortfolio(repository: ContentRepository, locale: Locale): Promise<Portfolio> {
  return withVisibleLinks(await repository.getPortfolio(locale));
}
