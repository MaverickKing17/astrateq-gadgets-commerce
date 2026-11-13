import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

export function NewsletterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our next newsletter in your inbox.",
      });
      setEmail("");
    }
  };

  return (
    <section ref={ref} className="section-padding data-mesh-light relative overflow-hidden">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-electric-cyan/10 flex items-center justify-center">
            <Mail className="w-8 h-8 text-electric-cyan" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Stay Ahead of the Curve
          </h2>
          
          <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
            Get exclusive AI safety insights, early access to new features, and expert tips delivered monthly
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-pure-white border-grey-200 focus:border-electric-cyan focus:ring-electric-cyan"
              required
            />
            <Button type="submit" variant="hero" size="lg">
              Subscribe
            </Button>
          </form>

          {/* Trust Note */}
          <p className="text-xs text-muted-foreground font-body flex items-center justify-center gap-2">
            <Check className="w-4 h-4 text-success" />
            No spam. Unsubscribe anytime.{" "}
            <Link to="/legal/privacy" className="text-electric-cyan hover:underline">
              Privacy Policy
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
