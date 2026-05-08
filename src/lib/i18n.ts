export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocalizedPath(locale: Locale, href: string): string {
  if (!href) return `/${locale}`;
  if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }
  if (href.startsWith("#")) {
    return `/${locale}${href}`;
  }

  const normalizedHref = href === "/" ? "" : href;
  return `/${locale}${normalizedHref}`;
}

export function swapLocaleInPath(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${targetLocale}`;
  }

  if (isLocale(segments[0])) {
    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  }

  if (segments[0] === "blog") {
    return pathname;
  }

  return `/${targetLocale}`;
}
