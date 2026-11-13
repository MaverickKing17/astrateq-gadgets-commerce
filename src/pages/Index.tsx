import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { DifferenceSection } from "@/components/sections/DifferenceSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProductFinderCTA } from "@/components/sections/ProductFinderCTA";
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
        <ProductsSection />
        <DifferenceSection />
        <StatsSection />
        <ProductFinderCTA />
        <HowItWorksSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
