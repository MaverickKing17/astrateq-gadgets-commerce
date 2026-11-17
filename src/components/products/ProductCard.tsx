import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  ArrowUpRight,
  Cpu,
  AlertCircle,
  CheckCircle2,
  Clock,
  Ban,
  GitCompare,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useCompare } from "@/contexts/CompareContext";
import {
  availabilityStatusMeta,
  formatPrice,
  type AvailabilityStatus,
  type Product,
} from "@/lib/catalogue";

const availabilityIcons: Record<AvailabilityStatus, typeof CheckCircle2> = {
  in_stock: CheckCircle2,
  preorder: Clock,
  unavailable: Ban,
  confirm_required: AlertCircle,
};

const availabilityTextClasses: Record<AvailabilityStatus, string> = {
  in_stock: "text-success",
  preorder: "text-primary",
  unavailable: "text-muted-foreground",
  confirm_required: "text-warning",
};

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { toggleCompare, isComparing } = useCompare();
  const [imgError, setImgError] = useState(false);
  const comparing = isComparing(product.id);
  const StatusIcon = availabilityIcons[product.availabilityStatus];
  const statusMeta = availabilityStatusMeta[product.availabilityStatus];
  const isUnavailable = product.availabilityStatus === "unavailable";

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
            <span className="text-sm font-medium text-pure-white/80">
              {product.name}
            </span>
          </div>
        )}
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 text-xs mb-2">
          <span className="font-medium uppercase tracking-wider text-primary">
            {product.category}
          </span>
          <span
            className={`inline-flex items-center gap-1 font-medium ${availabilityTextClasses[product.availabilityStatus]}`}
          >
            <StatusIcon className="w-3.5 h-3.5 shrink-0" />
            <span>{statusMeta.shortLabel}</span>
          </span>
        </div>

        <h3 className="text-lg font-semibold leading-snug mb-2">
          <Link to={product.link} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {product.description}
        </p>

        <dl className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs py-3 mb-4 border-y border-border/60">
          {product.shortSpecs.map((spec) => (
            <div key={spec.label}>
              <dt className="text-muted-foreground">{spec.label}</dt>
              <dd className="font-medium text-foreground">{spec.value}</dd>
            </div>
          ))}
        </dl>

        <div>
          <div className="flex items-baseline justify-between gap-2 mb-1">
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
              disabled={isUnavailable}
              onClick={() => addItem(product.id)}
            >
              <ShoppingCart className="w-4 h-4" />
              {isUnavailable ? "Currently Unavailable" : "Add to Cart"}
            </Button>

            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="w-full min-h-[40px] px-3" asChild>
                <Link to={product.link}>
                  Details
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                type="button"
                variant={comparing ? "secondary" : "ghost"}
                aria-pressed={comparing}
                onClick={() => toggleCompare(product.id)}
                className="w-full min-h-[40px] px-3"
              >
                {comparing ? (
                  <Check className="w-4 h-4 text-primary" />
                ) : (
                  <GitCompare className="w-4 h-4" />
                )}
                {comparing ? "Comparing" : "Compare"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
