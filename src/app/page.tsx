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
import { Story } from "@/components/sections/Story";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Security } from "@/components/sections/Security";
import { FAQ } from "@/components/sections/FAQ";
import { AppStores } from "@/components/sections/AppStores";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <NavbarV2 />
      <main>
        <HeroV2 />
        <FeatureStrip />
        <Problems />
        <Features6 />
        <Pillars />
        <Steps />
        <Sectors />
        <Collaborators />
        <TeamFeedbacks />
        <Differentiators />
        <Advantages />
        <Story />
        <Testimonials />
        <Pricing />
        <Security />
        <FAQ />
        <AppStores />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
