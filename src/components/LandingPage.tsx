import { Locale } from "@/lib/i18n";
import { NavbarV2 } from "@/components/NavbarV2";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { HeroV2 } from "@/components/sections/HeroV2";
import { FeatureStrip } from "@/components/sections/FeatureStrip";
import { Problems } from "@/components/sections/Problems";
import { Features6 } from "@/components/sections/Features6";
import { Pillars } from "@/components/sections/Pillars";
import { Steps } from "@/components/sections/Steps";
import { Sectors } from "@/components/sections/Sectors";
import { Differentiators } from "@/components/sections/Differentiators";
import { Collaborators } from "@/components/sections/Collaborators";
import { TeamFeedbacks } from "@/components/sections/TeamFeedbacks";
import { Advantages } from "@/components/sections/Advantages";
import { ApiAccess } from "@/components/sections/ApiAccess";
import { Story } from "@/components/sections/Story";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Security } from "@/components/sections/Security";
import { FAQ } from "@/components/sections/FAQ";
import { AppStores } from "@/components/sections/AppStores";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";
import { SectionReveal } from "@/components/SectionReveal";

export function LandingPage({ locale }: { locale: Locale }) {
  return (
    <>
      <ScrollProgress />
      <NavbarV2 locale={locale} />
      <main>
        <HeroV2 locale={locale} />
        <SectionReveal delay={40}>
          <FeatureStrip locale={locale} />
        </SectionReveal>
        <SectionReveal delay={70}>
          <Problems locale={locale} />
        </SectionReveal>
        <SectionReveal delay={90}>
          <Features6 locale={locale} />
        </SectionReveal>
        <SectionReveal delay={110}>
          <Pillars locale={locale} />
        </SectionReveal>
        <SectionReveal delay={80}>
          <Steps locale={locale} />
        </SectionReveal>
        <SectionReveal delay={100}>
          <Sectors locale={locale} />
        </SectionReveal>
        <SectionReveal delay={120}>
          <Collaborators locale={locale} />
        </SectionReveal>
        <SectionReveal delay={90}>
          <TeamFeedbacks locale={locale} />
        </SectionReveal>
        <SectionReveal delay={110}>
          <Differentiators locale={locale} />
        </SectionReveal>
        <SectionReveal delay={80}>
          <Advantages locale={locale} />
        </SectionReveal>
        <SectionReveal delay={95}>
          <ApiAccess locale={locale} />
        </SectionReveal>
        <SectionReveal delay={100}>
          <Story locale={locale} />
        </SectionReveal>
        <SectionReveal delay={120}>
          <Testimonials locale={locale} />
        </SectionReveal>
        <SectionReveal delay={90}>
          <Pricing locale={locale} />
        </SectionReveal>
        <SectionReveal delay={110}>
          <Security locale={locale} />
        </SectionReveal>
        <SectionReveal delay={80}>
          <FAQ locale={locale} />
        </SectionReveal>
        <SectionReveal delay={100}>
          <AppStores locale={locale} />
        </SectionReveal>
        <SectionReveal delay={120}>
          <Contact locale={locale} />
        </SectionReveal>
        <SectionReveal delay={80}>
          <CTA locale={locale} />
        </SectionReveal>
      </main>
      <Footer locale={locale} />
    </>
  );
}
