import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { storeConfig } from "@/config/store";

const routeMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: `${storeConfig.brandName} | Automotive Safety & Vehicle Technology`,
    description:
      "Explore thoughtfully selected automotive hardware for daily drivers, electric vehicles, and commercial fleets.",
  },
  "/products": {
    title: `Shop Automotive Technology | ${storeConfig.brandName}`,
    description:
      "Browse driving coaching hardware, EV battery intelligence, and commercial fleet telematics from Astrateq Gadgets.",
  },
  "/products/driver-coach": {
    title: `ASTRA-AI Driver Coach System | ${storeConfig.brandName}`,
    description:
      "Compact windshield-mounted driving monitor and in-vehicle coaching hardware for everyday vehicles.",
  },
  "/products/predictive-fleet": {
    title: `FleetGuard AI Pro | ${storeConfig.brandName}`,
    description:
      "Rugged OBD-II telematics and maintenance planning hardware for commercial vehicle operations.",
  },
  "/products/ev-suite": {
    title: `EV Battery Intelligence Suite | ${storeConfig.brandName}`,
    description:
      "Dedicated battery health and charging telemetry hardware tailored for electric vehicle owners.",
  },
  "/products/emergency-ai": {
    title: `Emergency AI Preview | ${storeConfig.brandName}`,
    description:
      "Learn about upcoming emergency response hardware concepts from Astrateq Gadgets.",
  },
  "/solutions": {
    title: `Vehicle Solutions | ${storeConfig.brandName}`,
    description:
      "Find automotive hardware tailored for daily drivers, EV owners, families, and fleet managers.",
  },
  "/cart": {
    title: `Shopping Cart | ${storeConfig.brandName}`,
    description: "Review items in your shopping cart and proceed to checkout.",
  },
  "/checkout": {
    title: `Checkout | ${storeConfig.brandName}`,
    description: "Review your order summary and contact our team to confirm availability.",
  },
  "/contact": {
    title: `Contact Us | ${storeConfig.brandName}`,
    description:
      "Reach Astrateq Gadgets customer support and sales for product compatibility and order inquiries.",
  },
  "/company/about-us": {
    title: `About Us | ${storeConfig.brandName}`,
    description: "Learn about Astrateq Gadgets and our focus on reliable automotive hardware.",
  },
  "/legal/privacy": {
    title: `Privacy Policy | ${storeConfig.brandName}`,
    description: "How Astrateq Gadgets handles personal information and website privacy.",
  },
  "/legal/terms": {
    title: `Terms of Service | ${storeConfig.brandName}`,
    description: "Terms governing use of the Astrateq Gadgets storefront and products.",
  },
  "/legal/shipping": {
    title: `Shipping Policy | ${storeConfig.brandName}`,
    description: "Shipping options, delivery timelines, and carrier information.",
  },
  "/legal/refund": {
    title: `Refund Policy | ${storeConfig.brandName}`,
    description: "Returns, exchanges, and refund procedures for Astrateq Gadgets hardware.",
  },
};

export function CanonicalTag() {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonicalUrl = `${storeConfig.domain}${pathname === "/" ? "" : pathname}`;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);

    const meta = routeMeta[pathname] ?? {
      title: `${storeConfig.brandName} | Automotive Technology`,
      description:
        "Automotive hardware for daily drivers, electric vehicles, and commercial fleets.",
    };
    document.title = meta.title;

    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute("content", meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);
  }, [pathname]);

  return null;
}
