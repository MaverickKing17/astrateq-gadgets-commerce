import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Cookie } from "lucide-react";

export default function CookiePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="w-8 h-8 text-electric-cyan" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text-light">Cookie Policy</h1>
          </div>
          <p className="text-muted-foreground mb-8 text-sm">Last updated: March 1, 2026</p>

          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">1. What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files stored on your device when you visit websites. Astrateq Gadgets Inc. (legally headquartered in Carson City, Nevada, USA) uses cookies and similar technologies across our website and mobile applications in compliance with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA), Canada's Anti-Spam Legislation (CASL), and applicable provincial privacy legislation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">2. Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">🔒 Strictly Necessary Cookies</h3>
                  <p className="text-muted-foreground mb-3">Required for the website to function properly. Cannot be disabled.</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1 text-sm">
                    <li><strong>Session cookies:</strong> Maintain your login state and shopping cart across pages.</li>
                    <li><strong>Security cookies:</strong> CSRF protection tokens, rate limiting, and fraud detection.</li>
                    <li><strong>Load balancing:</strong> Ensure optimal server performance and reliability.</li>
                    <li><strong>Cookie consent:</strong> Remember your cookie preference choices.</li>
                  </ul>
                  <p className="text-xs text-muted-foreground/60 mt-2">Retention: Session or up to 24 hours</p>
                </div>

                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">📊 Analytics & Performance Cookies</h3>
                  <p className="text-muted-foreground mb-3">Help us understand how visitors use our site. Require your consent under PIPEDA.</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1 text-sm">
                    <li><strong>Google Analytics 4 (_ga, _ga_*):</strong> Anonymous usage statistics, page views, and user journeys.</li>
                    <li><strong>Mixpanel (mp_*):</strong> Product usage analytics and feature adoption tracking.</li>
                    <li><strong>Hotjar (_hj*):</strong> Heatmaps and session recordings (anonymized) to identify UX improvements.</li>
                    <li><strong>Performance monitoring:</strong> Page load times, error rates, and Core Web Vitals.</li>
                  </ul>
                  <p className="text-xs text-muted-foreground/60 mt-2">Retention: Up to 26 months</p>
                </div>

                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">🎯 Marketing & Advertising Cookies</h3>
                  <p className="text-muted-foreground mb-3">Used to deliver relevant ads and measure campaign effectiveness. Require express consent under CASL and PIPEDA.</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1 text-sm">
                    <li><strong>Meta Pixel (Facebook):</strong> Ad targeting and conversion tracking.</li>
                    <li><strong>Google Ads (gclid, _gcl_*):</strong> Search ad conversion measurement.</li>
                    <li><strong>LinkedIn Insight Tag:</strong> B2B marketing attribution for Fleet Guard Pro campaigns.</li>
                    <li><strong>TikTok Pixel:</strong> Social commerce and awareness campaign measurement.</li>
                  </ul>
                  <p className="text-xs text-muted-foreground/60 mt-2">Retention: Up to 13 months</p>
                </div>

                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">⚙️ Functional & Preference Cookies</h3>
                  <p className="text-muted-foreground mb-3">Remember your settings for a personalized experience.</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1 text-sm">
                    <li><strong>Language preference:</strong> Remember your selected language (English/French).</li>
                    <li><strong>Region/currency:</strong> Display prices in CAD or USD based on your location.</li>
                    <li><strong>Theme preference:</strong> Light/dark mode selection.</li>
                    <li><strong>Recently viewed products:</strong> Show your browsing history for convenient shopping.</li>
                    <li><strong>AstraBot chat history:</strong> Maintain conversation context within a session.</li>
                  </ul>
                  <p className="text-xs text-muted-foreground/60 mt-2">Retention: Up to 12 months</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">3. Consent Under Canadian Law</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In accordance with PIPEDA and CASL, we obtain your meaningful consent before placing non-essential cookies on your device. Our cookie consent banner is displayed on your first visit and allows you to accept or reject categories of non-essential cookies. You may change your preferences at any time by clicking the cookie settings link in our website footer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Strictly necessary cookies do not require consent as they are essential for the website to function. All other categories require your affirmative consent before activation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Some cookies are placed by third-party services. We require all third-party cookie providers to comply with PIPEDA and applicable Canadian privacy law. Key providers include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Stripe:</strong> Secure payment processing and fraud prevention.</li>
                <li><strong>PayPal:</strong> Alternative payment processing.</li>
                <li><strong>Google:</strong> Analytics, advertising, and reCAPTCHA spam protection.</li>
                <li><strong>Cloudflare:</strong> Security, performance optimization, and bot protection.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">5. Managing Your Cookie Preferences</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Cookie Banner:</strong> Use our consent banner to manage non-essential cookie categories.</li>
                <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies. Blocking essential cookies may impair functionality.</li>
                <li><strong>Opt-Out Links:</strong> Google Analytics opt-out: <a href="https://tools.google.com/dlpage/gaoptout" className="text-electric-cyan hover:underline" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a></li>
                <li><strong>Global Privacy Control (GPC):</strong> We honour the GPC signal as an opt-out of non-essential cookies and tracking.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">6. Contact Us</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p>For questions about our cookie practices:</p>
                <p><strong>Email:</strong> privacy@astrateq.com</p>
                <p><strong>Phone:</strong> 1-888-ASTRATEQ (1-888-278-7283)</p>
                <p><strong>Marketing Office:</strong> 100 King Street West, Toronto, ON M5X 1A9, Canada</p>
                <p><strong>Legal Headquarters:</strong> Astrateq Gadgets Inc., Carson City, Nevada, USA</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
