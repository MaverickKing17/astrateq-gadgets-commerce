import { Toaster } from "@/components/ui/toaster";
const Analytics = () => null;
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AstraBotChat } from "@/components/AstraBotChat";
import { CartProvider } from "@/contexts/CartContext";
import CheckoutPage from "./pages/CheckoutPage";
import { CanonicalTag } from "@/components/CanonicalTag";
import { CookieConsent } from "@/components/CookieConsent";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SolutionsPage from "./pages/SolutionsPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";

// Solution Pages
import DailyDriversPage from "./pages/solutions/DailyDriversPage";
import EVOwnersPage from "./pages/solutions/EVOwnersPage";
import FamiliesPage from "./pages/solutions/FamiliesPage";
import BusinessesPage from "./pages/solutions/BusinessesPage";

// Product Pages
import DriverCoachPage from "./pages/products/DriverCoachPage";
import EmergencyAIPage from "./pages/products/EmergencyAIPage";
import PredictiveFleetPage from "./pages/products/PredictiveFleetPage";
import EVSuitePage from "./pages/products/EVSuitePage";

// Resource Pages
import HowItWorksPage from "./pages/resources/HowItWorksPage";
import ComparePage from "./pages/resources/ComparePage";

// Support Pages
import HelpCenterPage from "./pages/support/HelpCenterPage";
import InstallationPage from "./pages/support/InstallationPage";
import WarrantyPage from "./pages/support/WarrantyPage";
import ReturnsPage from "./pages/support/ReturnsPage";

// Company Pages
import AboutUsPage from "./pages/company/AboutUsPage";
import OurStoryPage from "./pages/company/OurStoryPage";
import TrustCertsPage from "./pages/company/TrustCertsPage";
import CareersPage from "./pages/company/CareersPage";
import PressKitPage from "./pages/company/PressKitPage";
import BlogPage from "./pages/company/BlogPage";

// Legal Pages
import PrivacyPage from "./pages/legal/PrivacyPage";
import TermsPage from "./pages/legal/TermsPage";
import DMCAPage from "./pages/legal/DMCAPage";
import DisclaimerPage from "./pages/legal/DisclaimerPage";
import AccessibilityPage from "./pages/legal/AccessibilityPage";
import CookiePage from "./pages/legal/CookiePage";
import ShippingPage from "./pages/legal/ShippingPage";
import RefundPage from "./pages/legal/RefundPage";

const queryClient = new QueryClient();

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, ease: "easeInOut" as const },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} {...pageTransition}>
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          
          {/* Solution Pages */}
          <Route path="/solutions/daily-drivers" element={<DailyDriversPage />} />
          <Route path="/solutions/ev-owners" element={<EVOwnersPage />} />
          <Route path="/solutions/families" element={<FamiliesPage />} />
          <Route path="/solutions/businesses" element={<BusinessesPage />} />
          
          {/* Product Pages */}
          <Route path="/products/driver-coach" element={<DriverCoachPage />} />
          <Route path="/products/emergency-ai" element={<EmergencyAIPage />} />
          <Route path="/products/predictive-fleet" element={<PredictiveFleetPage />} />
          <Route path="/products/ev-suite" element={<EVSuitePage />} />
          
          {/* Resource Pages */}
          <Route path="/resources/how-it-works" element={<HowItWorksPage />} />
          <Route path="/resources/how-it-works" element={<HowItWorksPage />} />
          <Route path="/resources/compare" element={<ComparePage />} />
          
          {/* Support Pages */}
          <Route path="/support/help-center" element={<HelpCenterPage />} />
          <Route path="/support/installation" element={<InstallationPage />} />
          <Route path="/support/warranty" element={<WarrantyPage />} />
          <Route path="/support/returns" element={<ReturnsPage />} />
          
          
          {/* Company Pages */}
          <Route path="/company/about-us" element={<AboutUsPage />} />
          <Route path="/company/our-story" element={<OurStoryPage />} />
          <Route path="/company/trust-certs" element={<TrustCertsPage />} />
          
          <Route path="/company/careers" element={<CareersPage />} />
          <Route path="/company/press-kit" element={<PressKitPage />} />
          <Route path="/blog" element={<BlogPage />} />
          
          {/* Legal Pages */}
          <Route path="/legal/privacy" element={<PrivacyPage />} />
          <Route path="/legal/terms" element={<TermsPage />} />
          <Route path="/legal/dmca" element={<DMCAPage />} />
          <Route path="/legal/disclaimer" element={<DisclaimerPage />} />
          <Route path="/legal/accessibility" element={<AccessibilityPage />} />
          <Route path="/legal/cookie" element={<CookiePage />} />
          <Route path="/legal/shipping" element={<ShippingPage />} />
          <Route path="/legal/refund" element={<RefundPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CanonicalTag />
        <CartProvider><AnimatedRoutes /></CartProvider>
        <AstraBotChat />
        <CookieConsent />
        <Analytics />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
