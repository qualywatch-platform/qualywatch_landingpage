import { Zap, Brain, Target, Bell, Layers, FileBarChart2 } from "lucide-react";

const tagsByLocale = {
  fr: [
    { icon: Zap, label: "Avis en temps réel" },
    { icon: Brain, label: "Analyse automatique" },
    { icon: Target, label: "Indicateurs par service" },
    { icon: Bell, label: "Alertes et relances" },
    { icon: Layers, label: "QR code, lien, WhatsApp" },
    { icon: FileBarChart2, label: "Rapports automatiques" },
  ],
  en: [
    { icon: Zap, label: "Real-time feedback" },
    { icon: Brain, label: "Automatic analysis" },
    { icon: Target, label: "Metrics by department" },
    { icon: Bell, label: "Alerts and reminders" },
    { icon: Layers, label: "QR code, link, WhatsApp" },
    { icon: FileBarChart2, label: "Automated reports" },
  ],
};

export function FeatureStrip({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const tags = tagsByLocale[locale];
  return (
    <section className="bg-ink px-6 lg:px-16">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {tags.map((t) => (
          <li key={t.label} className="flex items-center gap-3 py-6 text-sm font-medium text-white lg:justify-center">
            <t.icon className="h-4 w-4 shrink-0 text-orange" strokeWidth={1.8} aria-hidden />
            {t.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
