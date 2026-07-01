import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AppearanceSection } from "@/components/sections/AppearanceSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImaginationSection } from "@/components/sections/ImaginationSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactDialog } from "@/components/shared/ContactDialog";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AppearanceSection />
        <ImaginationSection />
        <ComparisonSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <ContactDialog />
    </>
  );
}
