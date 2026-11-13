import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ProductFinderCTA() {
  return (
    <section className="py-20 bg-slate-grey text-pure-white border-y border-pure-white/10">
      <div className="container-narrow text-center">
        <p className="text-electric-cyan text-xs font-semibold uppercase tracking-wider mb-3">
          Vehicle & Fleet Guidance
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Not Sure Which Hardware Fits Your Vehicle?
        </h2>
        <p className="text-base sm:text-lg text-pure-white/80 mb-8 max-w-2xl mx-auto">
          Browse solutions tailored for daily commuting, electric vehicles, family cars, and commercial fleets—or ask our team directly.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3.5">
          <Button variant="hero" size="lg" className="min-h-[48px]" asChild>
            <Link to="/solutions">
              Explore Solutions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="hero-ghost" size="lg" className="min-h-[48px]" asChild>
            <Link to="/contact">Ask About Compatibility</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
