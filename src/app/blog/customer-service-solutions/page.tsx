import type { Metadata } from "next";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { H2, UL, LI, Strong } from "@/components/blog/Prose";
import { getPostBySlug, BLOG_BASE } from "@/lib/blog-data";

const post = getPostBySlug("customer-service-solutions")!;

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
    locale: "en_US",
    siteName: "Qualywatch",
    publishedTime: post.date,
  },
  twitter: { card: "summary_large_image", title: post.title, description: post.description },
};

export default function Page() {
  return (
    <BlogArticle
      post={post}
      tldr="Qualywatch is a complete customer service toolkit: real-time alerts, AI analysis, NPS/CSAT tracking, WhatsApp Business, gamified field teams. Everything you need to turn every customer signal into a fast, measurable action."
    >
      <H2 id="solutions">What Qualywatch covers</H2>
      <UL>
        <LI><Strong>Real-time alerts.</Strong></LI>
        <LI><Strong>NPS tracking.</Strong></LI>
        <LI><Strong>CSAT scoring.</Strong></LI>
        <LI><Strong>WhatsApp Business.</Strong></LI>
        <LI><Strong>QR codes.</Strong></LI>
        <LI><Strong>AI analysis.</Strong></LI>
        <LI><Strong>Smart escalation.</Strong></LI>
        <LI><Strong>KPI dashboard.</Strong></LI>
        <LI><Strong>Team gamification.</Strong></LI>
        <LI><Strong>Multi-channel.</Strong></LI>
        <LI><Strong>Auto reports.</Strong></LI>
        <LI><Strong>Customer portal.</Strong></LI>
      </UL>

      <H2 id="francais">Disponible aussi en français</H2>
      <UL>
        <LI>
          Read this article in French:{" "}
          <a href="/blog/solutions-service-client" className="text-orange underline">
            Solutions de service client
          </a>
          .
        </LI>
      </UL>
    </BlogArticle>
  );
}
