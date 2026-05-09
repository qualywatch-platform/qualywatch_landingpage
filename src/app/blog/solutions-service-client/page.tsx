import type { Metadata } from "next";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { H2, UL, LI, Strong } from "@/components/blog/Prose";
import { getPostBySlug, BLOG_BASE } from "@/lib/blog-data";

const post = getPostBySlug("solutions-service-client")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: {
    type: "article",
    title: post.title,
    description: post.description,
    url: `${BLOG_BASE}/${post.slug}`,
    locale: "fr_FR",
    siteName: "Qualywatch",
    publishedTime: post.date,
  },
  twitter: { card: "summary_large_image", title: post.title, description: post.description },
};

export default function Page() {
  return (
    <BlogArticle
      post={post}
      tldr="Qualywatch est une boîte à outils complète de service client : alertes temps réel, analyse IA, suivi NPS/CSAT, WhatsApp Business, équipes terrain gamifiées. Tout ce qu'il faut pour transformer chaque signal client en action rapide et mesurable."
    >
      <H2 id="solutions">Ce que couvre Qualywatch</H2>
      <UL>
        <LI><Strong>Alertes temps réel.</Strong></LI>
        <LI><Strong>Suivi NPS.</Strong></LI>
        <LI><Strong>Score CSAT.</Strong></LI>
        <LI><Strong>WhatsApp Business.</Strong></LI>
        <LI><Strong>QR codes.</Strong></LI>
        <LI><Strong>Analyse IA.</Strong></LI>
        <LI><Strong>Escalade intelligente.</Strong></LI>
        <LI><Strong>Tableau KPI.</Strong></LI>
        <LI><Strong>Gamification équipe.</Strong></LI>
        <LI><Strong>Multi-canal.</Strong></LI>
        <LI><Strong>Rapports auto.</Strong></LI>
        <LI><Strong>Portail client.</Strong></LI>
      </UL>

      <H2 id="english">Also available in English</H2>
      <UL>
        <LI>
          Lire cet article en anglais :{" "}
          <a href="/blog/customer-service-solutions" className="text-orange underline">
            Customer Service Solutions
          </a>
          .
        </LI>
      </UL>
    </BlogArticle>
  );
}
