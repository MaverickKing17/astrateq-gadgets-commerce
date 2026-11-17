import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Lock,
  Shield,
  Send,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { storeConfig } from "@/config/store";

const footerLinks = {
  products: [
    { label: "Driver Coach", href: "/products/driver-coach" },
    { label: "Predictive Fleet", href: "/products/predictive-fleet" },
    { label: "EV Suite", href: "/products/ev-suite" },
    { label: "Emergency AI Preview", href: "/products/emergency-ai" },
    { label: "Shop All", href: "/products" },
  ],
  support: [
    { label: "Help Center", href: "/support/help-center" },
    { label: "Installation Guide", href: "/support/installation" },
    { label: "Warranty", href: "/support/warranty" },
    { label: "Returns", href: "/support/returns" },
    { label: "Contact", href: "/contact" },
  ],
  company: [
    { label: "About Us", href: "/company/about-us" },
    { label: "Our Story", href: "/company/our-story" },
    { label: "Security & Practices", href: "/company/trust-certs" },
    { label: "Careers", href: "/company/careers" },
    { label: "Press Kit", href: "/company/press-kit" },
    { label: "Blog", href: "/blog" },
  ],
};

const legalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Cookie Policy", href: "/legal/cookie" },
  { label: "Shipping", href: "/legal/shipping" },
  { label: "Refund Policy", href: "/legal/refund" },
  { label: "Accessibility", href: "/legal/accessibility" },
  { label: "Disclaimer", href: "/legal/disclaimer" },
  { label: "DMCA", href: "/legal/dmca" },
];

const socialIcons: Record<string, typeof Linkedin> = {
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Instagram: Instagram,
  YouTube: Youtube,
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{
    type: "idle" | "error" | "unconfigured" | "success";
    message?: string;
  }>({ type: "idle" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    const endpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT?.trim();
    if (!endpoint) {
      setStatus({
        type: "unconfigured",
        message: `Email list signup is not configured yet. Please email ${storeConfig.support.email} for updates.`,
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      if (!response.ok) {
        throw new Error("Subscription request failed");
      }
      setStatus({
        type: "success",
        message: "Subscribed. You'll receive updates at your inbox.",
      });
      setEmail("");
    } catch {
      setStatus({
        type: "error",
        message: `Unable to subscribe right now. Please contact ${storeConfig.support.email}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-midnight-charcoal text-pure-white border-t border-slate-grey/70">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h3 className="font-heading font-semibold text-xs uppercase tracking-wider mb-4 text-electric-cyan">
              Products
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-pure-white/80 hover:text-electric-cyan text-sm font-body transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-xs uppercase tracking-wider mb-4 text-electric-cyan">
              Support
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-pure-white/80 hover:text-electric-cyan text-sm font-body transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() =>
                    window.dispatchEvent(new CustomEvent("astrateq:open-assistant"))
                  }
                  className="text-pure-white/80 hover:text-electric-cyan text-sm font-body transition-colors inline-block py-0.5 text-left"
                >
                  Catalogue Assistant
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-xs uppercase tracking-wider mb-4 text-electric-cyan">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-pure-white/80 hover:text-electric-cyan text-sm font-body transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <h3 className="font-heading font-semibold text-xs uppercase tracking-wider mb-4 text-electric-cyan">
              Connect
            </h3>

            <div className="flex gap-3 mb-6">
              {storeConfig.social.map((social) => {
                const Icon = socialIcons[social.label] ?? Linkedin;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-grey flex items-center justify-center text-electric-cyan hover:bg-electric-cyan hover:text-midnight-charcoal transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <form onSubmit={handleNewsletterSubmit} className="mb-5" noValidate>
              <label htmlFor="footer-newsletter-email" className="text-sm text-pure-white block mb-2">
                Product Updates
              </label>
              <div className="flex gap-2">
                <input
                  id="footer-newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status.type !== "idle") setStatus({ type: "idle" });
                  }}
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 px-3 py-2.5 bg-slate-grey border border-pure-white/15 rounded-lg text-sm text-pure-white placeholder:text-pure-white/45 focus:outline-none focus:border-electric-cyan transition-colors"
                  required
                />
                <Button
                  type="submit"
                  variant="hero"
                  size="sm"
                  className="px-3.5 h-auto min-h-[40px]"
                  disabled={isSubmitting}
                  aria-label="Subscribe for updates"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              {status.type !== "idle" && status.message && (
                <p
                  role="status"
                  className={`mt-2 text-xs flex items-start gap-1.5 ${
                    status.type === "success"
                      ? "text-success"
                      : status.type === "error"
                      ? "text-destructive"
                      : "text-pure-white/75"
                  }`}
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>{status.message}</span>
                </p>
              )}
            </form>

            <div className="space-y-1.5 text-xs text-pure-white/75">
              <p>{storeConfig.support.email}</p>
              <p>{storeConfig.support.phone}</p>
              <p>{storeConfig.address.office}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-grey/70">
        <div className="container-wide py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-pure-white/75">
            <div className="flex flex-wrap items-center gap-6">
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-electric-cyan" />
                Encrypted Connection (HTTPS)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-electric-cyan" />
                PIPEDA-Aligned Privacy Practices
              </span>
            </div>
            <p className="text-pure-white/65">
              Online checkout is currently in preparation — contact our team for availability and order support.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-grey/70">
        <div className="container-wide py-5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-xs text-pure-white/70 font-body">
            <p>
              © {new Date().getFullYear()} {storeConfig.legalName} All rights reserved. Headquartered in {storeConfig.address.headquarters}.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="hover:text-electric-cyan transition-colors py-0.5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
