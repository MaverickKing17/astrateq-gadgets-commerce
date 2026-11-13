import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { trackAddToCart } from "@/lib/analytics";

interface Product {
  name: string;
  price: string;
  tagline: string;
  description: string;
  image: string;
  link: string;
}

interface HeroProductCardProps {
  product: Product;
  index: number;
}

export function HeroProductCard({ product, index }: HeroProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 + index * 0.18, duration: 0.7, ease: "easeOut" }}
      className="group relative rounded-2xl overflow-hidden border border-pure-white/10 bg-slate-grey/80 backdrop-blur-2xl transition-all duration-500 hover:border-electric-cyan/50 hover:shadow-[0_0_50px_hsl(var(--electric-cyan)/0.2),0_25px_50px_rgba(0,0,0,0.5)] hover:-translate-y-2"
    >
      {/* Cyan accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-electric-cyan/40 to-transparent group-hover:via-electric-cyan transition-all duration-500" />

      {/* Product Image */}
      <div className="aspect-[4/3] overflow-hidden relative bg-midnight-charcoal">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          loading="lazy"
        />
        {/* Image overlays - subtle, let the product glow show through */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-grey via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/0 to-electric-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Price badge */}
        <div className="absolute top-4 right-4 px-4 py-2 rounded-xl bg-midnight-charcoal/90 backdrop-blur-md border border-electric-cyan/20 shadow-[0_0_15px_hsl(var(--electric-cyan)/0.15)]">
          <span className="text-electric-cyan font-heading font-bold text-base tracking-wide">{product.price}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="relative p-6 pt-5">
        <p className="text-electric-cyan text-[11px] uppercase tracking-[0.2em] font-body font-medium mb-2">
          {product.tagline}
        </p>
        <h3 className="text-pure-white font-heading font-semibold text-lg mb-2 group-hover:text-electric-cyan transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-pure-white/50 text-sm font-body leading-relaxed mb-5">
          {product.description}
        </p>
        <div className="flex gap-3">
          <Button
            variant="hero"
            size="default"
            className="flex-1 text-xs font-semibold"
            onClick={() => trackAddToCart(product.name, product.price)}
            asChild
          >
            <Link to={product.link}>
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Link>
          </Button>
          <Button
            variant="hero-ghost"
            size="default"
            className="px-3 text-xs"
            asChild
          >
            <Link to={product.link} aria-label={`Learn more about ${product.name}`}>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Bottom glow on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-electric-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}
