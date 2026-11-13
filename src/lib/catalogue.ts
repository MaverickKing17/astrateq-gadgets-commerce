import driverImage from "@/assets/images/product_driver_coach_studio_1794602182991.jpg";
import fleetImage from "@/assets/images/product_fleet_guard_studio_1794602183915.jpg";
import evImage from "@/assets/images/product_ev_suite_studio_1794602184501.jpg";

export type ProductCategory =
  | "Driving Technology"
  | "Fleet Technology"
  | "EV Technology";

export interface Product {
  id: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  price: number;
  currency: "USD";
  category: ProductCategory;
  audience: "consumer" | "fleet";
  availabilityLabel: string;
  compatibilityNote: string;
  highlights: string[];
  link: string;
}

// Shared product catalogue consumed by cards, detail pages, search, and cart.
// Keep product names, pricing, and availability factual and confirmed.
export const products: Product[] = [
  {
    id: "driver-coach",
    name: "ASTRA-AI Driver Coach System",
    shortName: "Driver Coach",
    description:
      "Compact windshield-mounted driving monitor and in-vehicle coaching unit for everyday passenger vehicles.",
    longDescription:
      "Designed for daily drivers and households seeking clearer trip awareness and structured driving feedback. Connects cleanly inside the cabin without altering factory dashboard controls.",
    image: driverImage,
    imageAlt:
      "ASTRA-AI Driver Coach System cylindrical matte-black dashcam hardware unit on dark slate",
    price: 329,
    currency: "USD",
    category: "Driving Technology",
    audience: "consumer",
    availabilityLabel: "Confirm availability before ordering",
    compatibilityNote:
      "Designed for standard 12V passenger vehicles. Confirm windshield mounting clearance and vehicle power interface with our team.",
    highlights: [
      "Compact cylindrical aluminum and matte polymer housing",
      "Windshield-mount form factor for unobstructed forward visibility",
      "Designed for personal commuting and shared family vehicles",
    ],
    link: "/products/driver-coach",
  },
  {
    id: "predictive-fleet",
    name: "FleetGuard AI Pro",
    shortName: "FleetGuard Pro",
    description:
      "Rugged OBD-II telematics and maintenance planning hardware built for commercial and service vehicle operations.",
    longDescription:
      "Engineered for commercial operators looking to centralize vehicle health tracking, driver coaching workflows, and scheduled maintenance planning across multi-vehicle fleets.",
    image: fleetImage,
    imageAlt:
      "FleetGuard AI Pro rugged matte-black OBD-II telematics hardware module with cooling fins on dark slate",
    price: 599,
    currency: "USD",
    category: "Fleet Technology",
    audience: "fleet",
    availabilityLabel: "Confirm fleet availability & volume inquiry",
    compatibilityNote:
      "Intended for commercial vehicles equipped with standard OBD-II diagnostic ports. Confirm vehicle class and fleet software needs before ordering.",
    highlights: [
      "Finned anodized enclosure with reinforced diagnostic connector",
      "Built for commercial vans, service trucks, and fleet vehicles",
      "Supports centralized maintenance planning and fleet oversight",
    ],
    link: "/products/predictive-fleet",
  },
  {
    id: "ev-suite",
    name: "EV Battery Intelligence Suite",
    shortName: "EV Battery Suite",
    description:
      "Dedicated battery health and charging telemetry module tailored for electric vehicle owners.",
    longDescription:
      "Built for EV owners who want transparent visibility into charging behavior, battery pack diagnostics, and day-to-day state-of-charge tracking in one dedicated hardware unit.",
    image: evImage,
    imageAlt:
      "EV Battery Intelligence Suite brushed aluminum and smoked-glass battery monitor module on dark slate",
    price: 449,
    currency: "USD",
    category: "EV Technology",
    audience: "consumer",
    availabilityLabel: "Confirm EV compatibility before ordering",
    compatibilityNote:
      "Compatibility depends on electric vehicle make, model year, and onboard diagnostic interface. Confirm fitment with our team prior to purchase.",
    highlights: [
      "Brushed aluminum chassis with flush smoked-glass display surface",
      "Focused on battery health monitoring and charging visibility",
      "Compact cabin footprint with USB-C data and physical power control",
    ],
    link: "/products/ev-suite",
  },
];

export const productCategories: Array<"All products" | ProductCategory> = [
  "All products",
  ...Array.from(new Set(products.map((product) => product.category))),
];

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

export function filterProducts(query: string, category = "All products") {
  const term = query.trim().toLowerCase();
  return products.filter(
    (product) =>
      (category === "All products" || product.category === category) &&
      `${product.name} ${product.description} ${product.category}`
        .toLowerCase()
        .includes(term)
  );
}