import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ProductFinderCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-slate-grey to-midnight-charcoal relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric-cyan/5 rounded-full blur-2xl" />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-electric-cyan/20 flex items-center justify-center animate-pulse-glow">
            <Sparkles className="w-10 h-10 text-electric-cyan" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-pure-white mb-4">
            Not Sure Which System You Need?
          </h2>
          
          <p className="text-xl text-pure-white/70 font-body mb-10 max-w-2xl mx-auto">
            Take our 60-second quiz and get a personalized safety recommendation for your vehicle and driving style
          </p>

          {/* CTA Button */}
          <Button variant="hero" size="xl" className="mb-8" asChild>
            <Link to="/solutions">Find My Perfect Solution</Link>
          </Button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-pure-white/60 text-sm font-body">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" />
              No email required
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" />
              Instant results
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" />
              Free
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
