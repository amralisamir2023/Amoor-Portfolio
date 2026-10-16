import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, type Locale } from "@/core/entities/locale";

function preferredLocale(request: NextRequest): Locale {
  const first = (request.headers.get("accept-language") ?? "").split(",")[0]?.trim().slice(0, 2).toLowerCase();
  return first && isLocale(first) ? first : defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, segment] = pathname.split("/");
  if (segment && isLocale(segment)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = { matcher: ["/((?!_next|.*\\..*).*)"] };
