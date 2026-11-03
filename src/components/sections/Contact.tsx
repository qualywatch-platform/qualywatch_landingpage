"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { IconTile } from "@/components/IconTile";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "aishaseye074@gmail.com",
    href: "mailto:aishaseye074@gmail.com",
    note: "Réponse en moins de 24h ouvrées",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+221 70 407 26 68",
    href: "tel:+221704072668",
    note: "Lun – Ven · 9h – 18h GMT",
  },
];

const DEFAULT_MESSAGE =
  "Bonjour, je souhaite faire partie des premiers utilisateurs de QualyWatch. " +
  "Pouvons-nous échanger ?";

export function Contact({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const isEnglish = locale === "en";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Soft launch Qualywatch — ${name || (isEnglish ? "Access request" : "Demande d'accès")}${company ? ` (${company})` : ""}`;
    const body = [
      `${isEnglish ? "Name" : "Nom"} : ${name || "—"}`,
      `Email : ${email || "—"}`,
      `${isEnglish ? "Company" : "Entreprise"} : ${company || "—"}`,
      "",
      `${isEnglish ? "Message" : "Message"} :`,
      message || DEFAULT_MESSAGE,
    ].join("\n");

    const href =
      "mailto:aishaseye074@gmail.com" +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = href;
  };

  const inputClass =
    "w-full rounded-md border border-card-border bg-bg px-4 py-3 text-sm text-text placeholder-text-mute outline-none transition-colors focus:border-orange-deep";

  return (
    <section id="contact" className="border-t border-card-border bg-mist px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contact"
          title={
            isEnglish ? (
              <>Let&apos;s talk. We reply fast.</>
            ) : (
              <>Discutons. Nous répondons vite.</>
            )
          }
          intro={
            isEnglish
              ? "QualyWatch is in early access. Leave us a note and we will open the app for you within 24 business hours."
              : "QualyWatch est en accès anticipé. Laissez-nous un message et nous vous ouvrons l'application sous 24 heures ouvrées."
          }
        />

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div className="flex flex-col">
            {channels.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                className="group flex items-center gap-5 border-b border-card-border py-6 first:border-t"
              >
                <IconTile icon={c.icon} />
                <div className="min-w-0 flex-1">
                  <div className="text-sm text-text-mute">{c.label}</div>
                  <div className="font-display mt-0.5 truncate text-lg font-semibold text-text group-hover:text-orange-deep">{c.value}</div>
                  <div className="mt-0.5 text-sm text-text-dim">{c.note}</div>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-text-mute transition-colors group-hover:text-orange-deep" strokeWidth={1.8} aria-hidden />
              </Link>
            ))}
            <div className="flex items-center gap-5 border-b border-card-border py-6">
              <IconTile icon={MapPin} />
              <div>
                <div className="text-sm text-text-mute">{isEnglish ? "Office" : "Bureau"}</div>
                <div className="font-display mt-0.5 text-lg font-semibold text-text">{isEnglish ? "Dakar, Senegal" : "Dakar, Sénégal"}</div>
                <div className="mt-0.5 text-sm text-text-dim">{isEnglish ? "Mon – Fri, 9am – 6pm" : "Lun – Ven, 9 h – 18 h"}</div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-lg border border-card-border bg-bg p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-text sm:text-2xl">
              {isEnglish ? "Become one of our first users." : "Devenez l'un de nos premiers utilisateurs."}
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <label className="sr-only" htmlFor="contact-name">{isEnglish ? "Full name" : "Nom et prénom"}</label>
              <input id="contact-name" type="text" name="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder={isEnglish ? "Full name" : "Nom et prénom"} className={inputClass} />
              <label className="sr-only" htmlFor="contact-email">Email</label>
              <input id="contact-email" type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={isEnglish ? "Work email" : "E-mail professionnel"} className={inputClass} />
              <label className="sr-only" htmlFor="contact-company">{isEnglish ? "Company" : "Entreprise"}</label>
              <input id="contact-company" type="text" name="company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder={isEnglish ? "Company" : "Entreprise"} className={`${inputClass} sm:col-span-2`} />
              <label className="sr-only" htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder={isEnglish ? "Your message" : "Votre message"} rows={4} className={`${inputClass} resize-none sm:col-span-2`} />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-orange-deep text-sm font-semibold text-white transition-colors hover:bg-[#A9460C]"
            >
              <Send className="h-4 w-4" strokeWidth={1.8} aria-hidden />
              {isEnglish ? "Send request" : "Envoyer la demande"}
            </button>
            <p className="mt-3 text-center text-xs text-text-mute">
              {isEnglish
                ? "We open your access within 24 business hours. Your information stays confidential."
                : "Nous ouvrons votre accès sous 24 heures ouvrées. Vos informations restent confidentielles."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
