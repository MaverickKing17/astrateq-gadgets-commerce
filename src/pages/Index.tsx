import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { HeroCompatibilityBar } from "@/components/compatibility/HeroCompatibilityBar";
import { DifferenceSection } from "@/components/sections/DifferenceSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CatalogueAssistantSection } from "@/components/sections/CatalogueAssistantSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-electric-cyan focus:text-midnight-charcoal focus:rounded-lg">
        Skip to Content
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <HeroCompatibilityBar />
        <ProductsSection />
        <DifferenceSection />
        <StatsSection />
        <CatalogueAssistantSection />
        <HowItWorksSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
