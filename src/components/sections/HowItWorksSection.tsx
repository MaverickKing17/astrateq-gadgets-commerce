import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scan, Brain, LineChart, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "1",
    title: "SCAN",
    icon: Scan,
    description: "Our device connects to your vehicle's OBD-II port and begins collecting over 500 data points per second, monitoring everything from engine performance to electrical systems.",
  },
  {
    number: "2",
    title: "LEARN",
    icon: Brain,
    description: "Advanced AI algorithms learn your vehicle's unique patterns and baseline behavior, distinguishing between normal variations and early warning signs.",
  },
  {
    number: "3",
    title: "PREDICT",
    icon: LineChart,
    description: "Machine learning models analyze data trends to forecast potential issues 3-6 weeks in advance with 94% accuracy, giving you time to plan.",
  },
  {
    number: "4",
    title: "PROTECT",
    icon: ShieldCheck,
    description: "Receive actionable alerts via app, SMS, or email. Our system guides you through recommended actions and connects you with certified service providers.",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-pure-white">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            How Astrateq Works:{" "}
            <span className="text-electric-cyan">Intelligence Simplified</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-electric-cyan/30 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="relative text-center"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-midnight-charcoal flex items-center justify-center group cursor-pointer transition-all duration-300 hover:bg-electric-cyan hover:scale-105">
                  <step.icon className="w-10 h-10 text-electric-cyan group-hover:text-midnight-charcoal transition-colors" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-electric-cyan text-midnight-charcoal text-sm font-bold flex items-center justify-center font-heading">
                    {step.number}
                  </span>
                </div>

                {/* Arrow (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-10 right-0 translate-x-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-electric-cyan/50" />
                  </div>
                )}

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/resources/how-it-works"
            className="inline-flex items-center gap-2 text-electric-cyan font-semibold uppercase tracking-wider hover:underline"
          >
            See the Complete Technology Overview
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
