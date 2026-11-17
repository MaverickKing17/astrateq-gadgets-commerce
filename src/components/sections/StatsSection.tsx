import { Link } from "react-router-dom";
import {
  ShieldCheck,
  FileText,
  Headphones,
  Truck,
  RotateCcw,
  Lock,
} from "lucide-react";

const trustPolicies = [
  {
    icon: Truck,
    title: "Shipping Policy",
    description:
      "Carrier options, delivery timelines, and applicable regional rates are confirmed in writing prior to order acceptance.",
    linkLabel: "Read Shipping Policy",
    href: "/legal/shipping",
  },
  {
    icon: RotateCcw,
    title: "Returns Policy",
    description:
      "Clear return authorization and refund procedures aligned with Canadian consumer protection standards.",
    linkLabel: "Read Returns Policy",
    href: "/legal/refund",
  },
  {
    icon: FileText,
    title: "Warranty Policy",
    description:
      "Written hardware warranty and support documentation is provided prior to order confirmation.",
    linkLabel: "Read Warranty Policy",
    href: "/support/warranty",
  },
  {
    icon: Lock,
    title: "Privacy Policy",
    description:
      "PIPEDA-aligned handling of customer inquiries, browser cart storage, and consent-based site analytics.",
    linkLabel: "Read Privacy Policy",
    href: "/legal/privacy",
  },
  {
    icon: ShieldCheck,
    title: "Terms & Conditions",
    description:
      "Transparent terms covering CAD pricing, pre-order fitment verification, and unconfigured online card checkout.",
    linkLabel: "Read Terms & Conditions",
    href: "/legal/terms",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Reach our Toronto support team directly for vehicle compatibility verification, fleet quotes, and hardware questions.",
    linkLabel: "Contact Support",
    href: "/contact",
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
            Clear Policies & Pre-Order Confidence
          </h2>
          <p className="text-pure-white/75 text-base leading-relaxed">
            Every vehicle setup is different. Review our published policies, availability status, and support channels before placing an order inquiry.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPolicies.map((item) => (
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
