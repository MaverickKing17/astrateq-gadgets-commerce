import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroCockpit from "@/assets/images/hero_automotive_cockpit_1794602183463.jpg";

export function HeroSection() {
  return (
    <section className="relative hero-dark overflow-hidden min-h-[600px] lg:min-h-[680px] flex items-center">
      <img
        src={heroCockpit}
        alt="Driver cockpit inside a modern sedan at twilight featuring a windshield-mounted dashcam and connected display"
        width="1920"
        height="1080"
        referrerPolicy="no-referrer"
        {...({ fetchpriority: "high" } as Record<string, string>)}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-midnight-charcoal/95 via-midnight-charcoal/80 to-midnight-charcoal/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-midnight-charcoal to-transparent"
      />

      <div className="relative container-wide w-full pt-36 pb-20 md:pt-44 md:pb-24">
        <div className="max-w-2xl">
          <p className="text-electric-cyan text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4">
            Astrateq Gadgets · Automotive Hardware
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-pure-white mb-6">
            Drive With Absolute Confidence.
          </h1>
          <p className="text-pure-white/90 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-xl">
            Purpose-built dashcam coaching, EV battery intelligence, and OBD-II fleet telematics hardware engineered for passenger cars, electric vehicles, and commercial operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 sm:items-center">
            <Button variant="hero" size="lg" className="min-h-[48px]" asChild>
              <Link to="/products">
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="hero-ghost" size="lg" className="min-h-[48px]" asChild>
              <a href="#products">Explore Products</a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10 pt-6 border-t border-pure-white/15 text-sm text-pure-white/85">
            <Link to="/contact" className="hover:text-electric-cyan transition-colors">
              Vehicle Compatibility Support
            </Link>
            <span aria-hidden="true" className="text-pure-white/35">·</span>
            <Link to="/legal/shipping" className="hover:text-electric-cyan transition-colors">
              Shipping & Delivery Policy
            </Link>
            <span aria-hidden="true" className="text-pure-white/35">·</span>
            <Link to="/support/warranty" className="hover:text-electric-cyan transition-colors">
              Warranty Information
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
