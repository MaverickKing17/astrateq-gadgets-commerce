export const storeConfig = {
  brandName: "Astrateq Gadgets",
  legalName: "Astrateq Gadgets Inc.",
  tagline: "Automotive technology, thoughtfully selected.",
  domain: "https://astrateqgadgets.com",
  support: {
    email: "support@astrateq.com",
    enterpriseEmail: "enterprise@astrateq.com",
    privacyEmail: "privacy@astrateq.com",
    legalEmail: "legal@astrateq.com",
    phone: "1-800-ASTRATEQ",
    hours: "Monday–Friday, 9:00 AM – 6:00 PM EST",
  },
  address: {
    office: "100 King Street West, Toronto, ON M5X 1A9, Canada",
    headquarters: "Carson City, Nevada, USA",
  },
  social: [
    { label: "LinkedIn", href: "https://linkedin.com/company/astrateq" },
    { label: "Twitter", href: "https://twitter.com/astrateq" },
    { label: "Instagram", href: "https://instagram.com/astrateq" },
    { label: "YouTube", href: "https://youtube.com/@astrateq" },
  ],
  policies: {
    currency: "USD" as const,
    checkoutEnabled: false,
    shippingSummary:
      "Shipping rates, carrier options, and delivery timelines are confirmed with you prior to order acceptance.",
    returnsSummary:
      "Eligible hardware returns are handled through our support team upon confirmation of order details.",
    warrantySummary:
      "Written warranty and support terms are provided prior to order confirmation.",
  },
} as const;
