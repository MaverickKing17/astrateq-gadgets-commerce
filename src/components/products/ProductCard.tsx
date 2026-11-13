import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, ArrowUpRight, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { formatPrice, type Product } from "@/lib/catalogue";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group flex flex-col bg-card text-card-foreground rounded-xl border border-border overflow-hidden transition-all duration-200 hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-xl">
      <Link
        to={product.link}
        className="block aspect-square overflow-hidden bg-midnight-charcoal relative"
        aria-label={`View ${product.name}`}
      >
        {!imgError ? (
          <img
            src={product.image}
            alt={product.imageAlt}
            width="768"
            height="768"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-midnight-charcoal to-slate-grey">
            <Cpu className="w-10 h-10 text-electric-cyan mb-3" />
            <span className="text-sm font-medium text-pure-white/80">{product.name}</span>
          </div>
        )}
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
          {product.category}
        </p>
        <h3 className="text-lg font-semibold leading-snug mb-2">
          <Link to={product.link} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
          {product.description}
        </p>

        <div className="pt-4 border-t border-border/70">
          <div className="flex items-baseline justify-between gap-2 mb-1.5">
            <p className="text-2xl font-semibold tabular-nums">
              {formatPrice(product.price)}{" "}
              <span className="text-xs font-normal text-muted-foreground">
                {product.currency}
              </span>
            </p>
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            {product.availabilityLabel}
          </p>

          <div className="flex flex-col gap-2">
            <Button
              className="w-full min-h-[44px]"
              onClick={() => addItem(product.id)}
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </Button>
            <Button variant="ghost" className="w-full min-h-[40px]" asChild>
              <Link to={product.link}>
                Product Details
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
