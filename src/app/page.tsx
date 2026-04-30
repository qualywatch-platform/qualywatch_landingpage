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

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <NavbarV2 />
      <main>
        <HeroV2 />
        <SectionReveal delay={40}>
          <FeatureStrip />
        </SectionReveal>
        <SectionReveal delay={70}>
          <Problems />
        </SectionReveal>
        <SectionReveal delay={90}>
          <Features6 />
        </SectionReveal>
        <SectionReveal delay={110}>
          <Pillars />
        </SectionReveal>
        <SectionReveal delay={80}>
          <Steps />
        </SectionReveal>
        <SectionReveal delay={100}>
          <Sectors />
        </SectionReveal>
        <SectionReveal delay={120}>
          <Collaborators />
        </SectionReveal>
        <SectionReveal delay={90}>
          <TeamFeedbacks />
        </SectionReveal>
        <SectionReveal delay={110}>
          <Differentiators />
        </SectionReveal>
        <SectionReveal delay={80}>
          <Advantages />
        </SectionReveal>
        <SectionReveal delay={95}>
          <ApiAccess />
        </SectionReveal>
        <SectionReveal delay={100}>
          <Story />
        </SectionReveal>
        <SectionReveal delay={120}>
          <Testimonials />
        </SectionReveal>
        <SectionReveal delay={90}>
          <Pricing />
        </SectionReveal>
        <SectionReveal delay={110}>
          <Security />
        </SectionReveal>
        <SectionReveal delay={80}>
          <FAQ />
        </SectionReveal>
        <SectionReveal delay={100}>
          <AppStores />
        </SectionReveal>
        <SectionReveal delay={120}>
          <Contact />
        </SectionReveal>
        <SectionReveal delay={80}>
          <CTA />
        </SectionReveal>
      </main>
      <Footer />
    </>
  );
}
