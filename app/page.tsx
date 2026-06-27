import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AppearanceSection } from "@/components/sections/AppearanceSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
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
        <AppearanceSection />
        <BenefitsSection />
        <VisualTypesSection />
        <ProcessSection />
        <ComparisonSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <ContactDialog />
    </>
  );
}
