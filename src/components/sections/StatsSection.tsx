import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const stats = [
  { value: "94%", label: "Failure Prediction Accuracy" },
  { value: "40%", label: "Accident Risk Reduction" },
  { value: "3-6", label: "Weeks Advance Warning" },
];

const certifications = [
  "ISO 9001",
  "CE Certified",
  "FCC Approved",
  "SAE Compliant",
  "5-Year Warranty",
];

const testimonials = [
  {
    quote: "This system predicted my transmission failure 5 weeks before my mechanic even heard anything unusual. Saved me from a $3,000 emergency repair and kept my family safe.",
    author: "Sarah Mitchell",
    vehicle: "Tesla Model Y Owner",
    rating: 5,
  },
  {
    quote: "As a fleet manager, this technology has reduced our vehicle downtime by 60%. The ROI was clear within the first quarter.",
    author: "James Rodriguez",
    vehicle: "Fleet Manager, 200+ vehicles",
    rating: 5,
  },
  {
    quote: "The peace of mind knowing my teen is protected with real-time AI monitoring is priceless. Worth every penny.",
    author: "Karen Thompson",
    vehicle: "Parent of Teen Driver",
    rating: 5,
  },
];

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <span ref={ref} className="text-5xl md:text-6xl font-heading font-bold text-electric-cyan">
      {isInView ? value : "0"}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="section-padding cyber-grid-dark text-pure-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-cyan/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-electric-cyan/5 pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Trusted by Over{" "}
            <span className="text-electric-cyan">50,000</span>{" "}
            Drivers Worldwide
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-slate-grey/50 backdrop-blur"
            >
              <AnimatedCounter value={stat.value} />
              <p className="mt-4 text-pure-white/70 font-body">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {certifications.map((cert) => (
            <span
              key={cert}
              className="px-4 py-2 rounded-full border border-pure-white/20 text-pure-white/60 text-sm font-body"
            >
              {cert}
            </span>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-slate-grey/30 rounded-3xl p-8 md:p-12">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-electric-cyan/20" />
            
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-center font-body leading-relaxed mb-8 text-pure-white/90">
                "{testimonials[activeTestimonial].quote}"
              </p>

              {/* Author */}
              <div className="text-center">
                <p className="font-heading font-semibold text-pure-white">
                  — {testimonials[activeTestimonial].author}
                </p>
                <p className="text-pure-white/60 text-sm font-body mt-1">
                  {testimonials[activeTestimonial].vehicle}
                </p>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "w-8 bg-electric-cyan"
                      : "bg-pure-white/30 hover:bg-pure-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
