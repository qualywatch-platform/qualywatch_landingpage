import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import { isLocale, locales, type Locale } from "@/lib/i18n";

// Design comparison page: not meant to be indexed.
export const metadata: Metadata = { robots: { index: false, follow: false } };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LandingV2Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LandingPage locale={locale as Locale} variant="v2" />;
}
