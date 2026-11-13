import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, BarChart3, Shield, Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const comparisonData = [
  { without: "Reactive alerts only", with: "3-6 week advance warning" },
  { without: "Unexpected breakdowns", with: "Planned maintenance" },
  { without: "Costly emergency repairs", with: "40% fewer incidents" },
  { without: "Uncertainty & anxiety", with: "Complete confidence" },
];

const features = [
  {
    icon: Brain,
    title: "Adaptive AI Learning",
    description: "Our proprietary neural network continuously learns your vehicle's unique patterns, adapting to your driving style and environmental conditions for increasingly accurate predictions over time.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Advanced algorithms analyze over 500 data points per second, identifying subtle anomalies that human inspection would miss, giving you actionable insights weeks before issues manifest.",
  },
  {
    icon: Shield,
    title: "Proactive Protection",
    description: "Move beyond reactive safety. Our system actively prevents incidents by alerting you to potential failures, optimizing maintenance schedules, and ensuring your vehicle performs at its best.",
  },
];

export function DifferenceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding data-mesh-light relative overflow-hidden">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            The Astrateq Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            <span className="text-electric-cyan font-semibold">Prevention, Not Reaction</span> — Traditional safety systems respond after problems occur. Our AI predicts and prevents them.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-0 mb-20 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl"
        >
          {/* Without Astrateq */}
          <div className="bg-slate-grey p-8">
            <h3 className="text-lg font-heading font-semibold text-pure-white/60 uppercase tracking-wider mb-6">
              Without Astrateq
            </h3>
            <ul className="space-y-4">
              {comparisonData.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-pure-white/70"
                >
                  <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="font-body">{item.without}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* With Astrateq */}
          <div className="bg-midnight-charcoal p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-electric-cyan/10 rounded-full blur-3xl" />
            <h3 className="text-lg font-heading font-semibold text-electric-cyan uppercase tracking-wider mb-6">
              With Astrateq
            </h3>
            <ul className="space-y-4 relative z-10">
              {comparisonData.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-pure-white"
                >
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="font-body">{item.with}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="premium-card p-8 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-electric-cyan/10 flex items-center justify-center group-hover:bg-electric-cyan/20 transition-colors">
                <feature.icon className="w-8 h-8 text-electric-cyan" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {feature.description}
              </p>
              <Link
                to="/resources/how-it-works"
                className="inline-block mt-6 text-electric-cyan font-semibold text-sm uppercase tracking-wider hover:underline"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
