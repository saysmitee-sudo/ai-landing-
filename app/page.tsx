import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ScenariosSection } from "@/components/sections/ScenariosSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { VisualTypesSection } from "@/components/sections/VisualTypesSection";
import { ContactDialog } from "@/components/shared/ContactDialog";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <VisualTypesSection />
        <AudienceSection />
        <ProcessSection />
        <ScenariosSection />
        <ComparisonSection />
        <PackagesSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <ContactDialog />
    </>
  );
}
