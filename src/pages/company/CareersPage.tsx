import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { storeConfig } from "@/config/store";

export default function CareersPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-wide max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Team & Hiring
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Careers at {storeConfig.brandName}
            </h1>
            <p className="text-lg text-muted-foreground">
              Interested in automotive hardware, embedded telemetry, or customer support?
            </p>
          </div>

          <div className="bg-card rounded-xl border border-border p-8 sm:p-10 text-center">
            <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold mb-3">
              Open Roles & General Inquiries
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
              We do not currently have automated job applications enabled on this website. To introduce yourself or inquire about upcoming opportunities with our Toronto marketing and hardware operations team, please reach out by email.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="hero" asChild className="min-h-[44px]">
                <a href="mailto:careers@astrateq.com?subject=Career%20Inquiry">
                  Email careers@astrateq.com
                </a>
              </Button>
              <Button variant="outline" asChild className="min-h-[44px]">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
