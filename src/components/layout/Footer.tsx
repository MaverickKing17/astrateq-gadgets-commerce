import { useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Youtube, Lock, Shield, Check, Bitcoin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/astrateq-logo.webp";

const footerLinks = {
  products: [
    { label: "Driver Coach", href: "/products/driver-coach" },
    { label: "Emergency AI", href: "/products/emergency-ai" },
    { label: "Predictive Fleet", href: "/products/predictive-fleet" },
    { label: "EV Suite", href: "/products/ev-suite" },
    { label: "View All", href: "/products" },
  ],
  support: [
    { label: "Help Center", href: "/support/help-center" },
    { label: "Installation", href: "/support/installation" },
    { label: "Warranty", href: "/support/warranty" },
    { label: "Returns", href: "/support/returns" },
    { label: "Contact", href: "/contact" },
  ],
  company: [
    { label: "About Us", href: "/company/about-us" },
    { label: "Our Story", href: "/company/our-story" },
    { label: "Trust & Certifications", href: "/company/trust-certs" },
    { label: "Careers", href: "/company/careers" },
    { label: "Press Kit", href: "/company/press-kit" },
    { label: "Blog", href: "/blog" },
  ],
};

const legalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Cookie Policy", href: "/legal/cookie" },
  { label: "DMCA", href: "/legal/dmca" },
  { label: "Disclaimer", href: "/legal/disclaimer" },
  { label: "Accessibility", href: "/legal/accessibility" },
  { label: "Shipping", href: "/legal/shipping" },
  { label: "Refund Policy", href: "/legal/refund" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/astrateq", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/astrateq", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/astrateq", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@astrateq", label: "YouTube" },
];

const paymentMethods = ["Visa", "Mastercard", "Amex", "Discover", "PayPal", "Apple Pay", "Google Pay", "Affirm"];

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="cyber-grid-dark text-pure-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-electric-cyan/5 pointer-events-none" />
      
      {/* Main Footer - 3 Column Layout matching wireframe */}
      <div className="container-wide section-padding relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Products */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-electric-cyan">
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-pure-white hover:text-electric-cyan text-sm font-body transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Support */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-electric-cyan">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-pure-white hover:text-electric-cyan text-sm font-body transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-electric-cyan">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-pure-white hover:text-electric-cyan text-sm font-body transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect & Trust */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-electric-cyan">
              Connect
            </h3>
            
            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-grey flex items-center justify-center text-electric-cyan hover:bg-electric-cyan hover:text-midnight-charcoal transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <label className="text-sm text-pure-white block mb-2">Stay Updated</label>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-slate-grey border border-slate-grey/50 rounded-lg text-sm text-pure-white placeholder:text-pure-white/40 focus:outline-none focus:border-electric-cyan transition-colors"
                  required
                />
                <Button type="submit" variant="hero" size="sm" className="px-3">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>

            {/* Trust Badges */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-pure-white">
                <Lock className="w-4 h-4 text-electric-cyan" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-pure-white">
                <Shield className="w-4 h-4 text-electric-cyan" />
                <span>Privacy Protected</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-pure-white">
                <Bitcoin className="w-4 h-4 text-electric-cyan" />
                <span>Crypto Accepted (ETH/SOL/USDC)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security & Payments */}
      <div className="border-t border-slate-grey">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Security Badges */}
            <div className="flex items-center gap-6 text-sm text-pure-white font-body">
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                SSL Secure
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Privacy Protected
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Money-Back
              </span>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-2 text-xs text-pure-white font-body">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="px-2 py-1 bg-slate-grey rounded text-pure-white"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-grey">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-pure-white font-body">
            <p>© 2026 Astrateq Gadgets Inc. All rights reserved. Legally headquartered in Carson City, Nevada, USA.</p>
            <div className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="hover:text-electric-cyan transition-colors"
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
