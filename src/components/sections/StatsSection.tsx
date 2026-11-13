import { Link } from "react-router-dom";
import { ShieldCheck, FileText, Headphones, Truck } from "lucide-react";

const commitments = [
  {
    icon: Headphones,
    title: "Pre-Order Fitment Guidance",
    description:
      "Confirm make, model year, and OBD-II or power interface compatibility directly with our Toronto support team before placing an order.",
    linkLabel: "Contact Support",
    href: "/contact",
  },
  {
    icon: Truck,
    title: "Transparent Shipping Terms",
    description:
      "Carrier options, delivery windows, and applicable taxes or duties are disclosed clearly before any order is finalized.",
    linkLabel: "Shipping Policy",
    href: "/legal/shipping",
  },
  {
    icon: FileText,
    title: "Written Warranty & Returns",
    description:
      "Clear written warranty terms and straightforward return procedures aligned with Canadian consumer protection standards.",
    linkLabel: "Warranty & Returns",
    href: "/support/warranty",
  },
  {
    icon: ShieldCheck,
    title: "Honest Order Readiness",
    description:
      "Online card checkout is not active until payment processing is finalized, so adding items to your cart never triggers an unexpected charge.",
    linkLabel: "Review Terms",
    href: "/legal/terms",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 lg:py-24 bg-midnight-charcoal text-pure-white">
      <div className="container-wide">
        <div className="max-w-2xl mb-12">
          <p className="text-electric-cyan text-xs font-semibold uppercase tracking-wider mb-3">
            Customer Trust & Transparency
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Built on Clear Commitments, Not Inflated Claims
          </h2>
          <p className="text-pure-white/75 text-base leading-relaxed">
            Every vehicle setup is different. We prioritize straightforward product details, direct compatibility verification, and transparent storefront policies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-grey bg-slate-grey/40 p-6 flex flex-col"
            >
              <item.icon className="w-6 h-6 text-electric-cyan mb-4" />
              <h3 className="text-lg font-heading font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-pure-white/75 leading-relaxed mb-5 flex-1">
                {item.description}
              </p>
              <Link
                to={item.href}
                className="text-sm font-medium text-electric-cyan hover:underline"
              >
                {item.linkLabel} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
