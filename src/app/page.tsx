import AboutSection from "../../packages/web/components/about-section";
import { ContactSection } from "../../packages/web/components/contact-section";
import { ExperienceSection } from "../../packages/web/components/experience-section";
import { FooterSection } from "../../packages/web/components/footer-section";
import { HeroSection } from "../../packages/web/components/hero-section";
import { ProofSection } from "../../packages/web/components/proof-section";
import { RevealObserver } from "../../packages/web/components/reveal";
import { SiteNavigaation } from "../../packages/web/components/site-navigation";
import { WorkSection } from "../../packages/web/components/work-section";

export default function Home() {
  return (
    <div id="top" tabIndex={-1}>
      <SiteNavigaation />
      <RevealObserver />
      <main id="main">
        <HeroSection />
        <ProofSection />
        <WorkSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
