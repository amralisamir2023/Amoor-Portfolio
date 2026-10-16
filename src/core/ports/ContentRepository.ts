import type { Locale } from "../entities/locale";
import type { Portfolio } from "../entities/portfolio";

/** Port: where portfolio content comes from (static files, CMS, API...). */
export interface ContentRepository {
  getPortfolio(locale: Locale): Promise<Portfolio>;
}
