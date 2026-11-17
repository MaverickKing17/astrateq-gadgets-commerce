import driverImage from "@/assets/images/driver_coach_apple_studio_1794946823668.jpg";
import fleetImage from "@/assets/images/fleet_guard_studio_clean_1794946839888.jpg";
import evImage from "@/assets/images/ev_suite_apple_studio_1794946824849.jpg";
import cockpitImage from "@/assets/images/hero_automotive_cockpit_1794602183463.jpg";

export type ProductCategory =
  | "Driving Technology"
  | "Fleet Technology"
  | "EV Technology";

export type AvailabilityStatus =
  | "in_stock"
  | "preorder"
  | "unavailable"
  | "confirm_required";

export type ProductSortOption =
  | "featured"
  | "price-asc"
  | "price-desc"
  | "name-asc";

export interface ProductGalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
  confirmed: boolean;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  gallery: ProductGalleryImage[];
  galleryPendingNote?: string;
  price: number;
  currency: "CAD";
  category: ProductCategory;
  audience: "consumer" | "fleet";
  availabilityStatus: AvailabilityStatus;
  availabilityLabel: string;
  availabilityDetail: string;
  compatibilityNote: string;
  highlights: string[];
  shortSpecs: Array<{ label: string; value: string }>;
  specifications: ProductSpecification[];
  installationRequirements: string;
  connectivityAndSubscription: string;
  includedAccessories: string;
  faqs: ProductFAQ[];
  searchKeywords: string[];
  link: string;
}

// Shared product catalogue consumed by cards, detail pages, search, compare, and cart.
// Keep product names, pricing, specifications, and availability strictly factual.
// Items marked confirmed: false identify details still required from the manufacturer/business.
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
      "ASTRA-AI Driver Coach System matte bead-blasted aluminum dashcam hardware on a seamless satin obsidian studio sweep",
    gallery: [
      {
        src: driverImage,
        alt: "ASTRA-AI Driver Coach System matte bead-blasted aluminum dashcam hardware on a seamless satin obsidian studio sweep",
        caption: "Hardware unit — studio front view",
      },
      {
        src: cockpitImage,
        alt: "In-cabin perspective showing a windshield-mounted driving camera inside a passenger sedan at twilight",
        caption: "Representative passenger cabin installation perspective",
      },
    ],
    galleryPendingNote:
      "Rear connector close-up and exact mounting kit photos pending supplier media.",
    price: 329,
    currency: "CAD",
    category: "Driving Technology",
    audience: "consumer",
    availabilityStatus: "confirm_required",
    availabilityLabel: "Availability confirmation required",
    availabilityDetail:
      "Live warehouse inventory sync is not connected yet. Confirm current stock and dispatch window with our team before ordering.",
    compatibilityNote:
      "Designed for standard 12V passenger vehicles. Confirm windshield mounting clearance and cabin power interface prior to ordering.",
    highlights: [
      "Compact cylindrical aluminum and matte polymer housing",
      "Windshield-mount form factor designed to preserve forward visibility",
      "Intended for everyday commuting and shared family vehicles",
    ],
    shortSpecs: [
      { label: "Mount", value: "Windshield" },
      { label: "Interface", value: "12V Cabin Power" },
    ],
    specifications: [
      {
        label: "Category",
        value: "Driving Technology (Passenger Vehicles)",
        confirmed: true,
      },
      {
        label: "Housing Construction",
        value: "Cylindrical aluminum & matte polymer enclosure",
        confirmed: true,
      },
      {
        label: "Mounting Style",
        value: "Windshield-mounted cabin unit",
        confirmed: true,
      },
      {
        label: "Primary Power Input",
        value: "12V passenger vehicle cabin power (exact cable spec pending)",
        confirmed: false,
      },
      {
        label: "Dimensions, Weight & Optics",
        value: "To be supplied by manufacturer",
        confirmed: false,
      },
      {
        label: "Operating Temperature & Storage",
        value: "To be supplied by manufacturer",
        confirmed: false,
      },
    ],
    installationRequirements:
      "Positions near the upper windshield line with access to a 12V cabin power connection. Specific hardwiring kit vs 12V outlet adapter requirements will be confirmed prior to shipment.",
    connectivityAndSubscription:
      "Connectivity methods (companion app sync, Wi-Fi/cellular) and whether any optional cloud storage or software subscription applies are pending final manufacturer confirmation.",
    includedAccessories:
      "Windshield mounting hardware and cabin unit. Exact cable lengths, memory card inclusion, and trim-removal tools await the finalized packing list from the manufacturer.",
    faqs: [
      {
        question: "Will this fit my passenger vehicle?",
        answer:
          "It is intended for standard 12V passenger cars, SUVs, and light trucks with unobstructed windshield space. Use the Vehicle Compatibility Finder below or contact our team with your year, make, and model to confirm before ordering.",
      },
      {
        question: "Does adding this to my cart charge my card?",
        answer:
          "No. Online payment processing is currently disabled while backend checkout integration is being prepared. Your cart prepares an itemized inquiry summary.",
      },
      {
        question: "Are shipping, warranty, and return terms provided before purchase?",
        answer:
          "Yes. Written warranty terms, return eligibility, carrier rates, and applicable taxes are confirmed in writing prior to order acceptance.",
      },
    ],
    searchKeywords: [
      "dashcam",
      "driving monitor",
      "driver coach",
      "commuter",
      "daily driver",
      "family",
      "teen driver",
      "windshield",
      "12v",
      "passenger car",
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
      "FleetGuard AI Pro CNC-machined matte black anodized telematics module with cyan indicator bar on a seamless dark studio sweep",
    gallery: [
      {
        src: fleetImage,
        alt: "FleetGuard AI Pro CNC-machined matte black anodized telematics module with cyan indicator bar on a seamless dark studio sweep",
        caption: "Hardware unit — studio product view",
      },
    ],
    galleryPendingNote:
      "OBD-II harness adapter options and commercial dashboard screenshots pending supplier assets.",
    price: 599,
    currency: "CAD",
    category: "Fleet Technology",
    audience: "fleet",
    availabilityStatus: "confirm_required",
    availabilityLabel: "Confirm fleet availability & volume inquiry",
    availabilityDetail:
      "Multi-unit stock levels and commercial deployment lead times are confirmed directly per fleet order.",
    compatibilityNote:
      "Intended for commercial vehicles equipped with standard OBD-II diagnostic ports. Heavy-duty J1939/J1708 adapters and fleet software scope must be confirmed before ordering.",
    highlights: [
      "Finned anodized enclosure with reinforced diagnostic connector",
      "Built for commercial vans, service trucks, and multi-vehicle fleets",
      "Supports centralized maintenance planning and fleet oversight workflows",
    ],
    shortSpecs: [
      { label: "Interface", value: "OBD-II Port" },
      { label: "Use Case", value: "Commercial Fleets" },
    ],
    specifications: [
      {
        label: "Category",
        value: "Fleet Technology (Commercial Operations)",
        confirmed: true,
      },
      {
        label: "Housing Construction",
        value: "Finned anodized enclosure with reinforced connector",
        confirmed: true,
      },
      {
        label: "Diagnostic Port",
        value: "Standard OBD-II diagnostic interface",
        confirmed: true,
      },
      {
        label: "Supported Protocols (Heavy-Duty / ELD)",
        value: "Vehicle protocol matrix & adapter list pending confirmation",
        confirmed: false,
      },
      {
        label: "Cellular Telemetry & Fleet Portal Plan",
        value: "Commercial data plan & seat pricing to be supplied",
        confirmed: false,
      },
      {
        label: "Dimensions, Weight & Ingress Rating",
        value: "To be supplied by manufacturer",
        confirmed: false,
      },
    ],
    installationRequirements:
      "Connects via vehicle OBD-II port (typically beneath the driver-side dashboard). Commercial vehicles using J1939/heavy-duty connectors require pre-order adapter verification.",
    connectivityAndSubscription:
      "Commercial telematics and multi-vehicle fleet management portals typically require cellular connectivity and fleet seat licensing; exact subscription pricing and contract terms are provided during commercial quoting.",
    includedAccessories:
      "FleetGuard telemetry hardware module. OBD-II extension cables, tamper-resistant mounts, or heavy-duty adapters depend on confirmed fleet configuration.",
    faqs: [
      {
        question: "Can this work across mixed commercial vans and pickup trucks?",
        answer:
          "Light- and medium-duty commercial vehicles typically use standard OBD-II ports, while heavy-duty chassis may differ. Share your fleet vehicle list with our team so connector requirements are verified before quoting.",
      },
      {
        question: "Is there volume pricing for multi-vehicle fleets?",
        answer:
          "Volume pricing and deployment schedules are handled through commercial inquiries via enterprise@astrateq.com or our Contact page.",
      },
      {
        question: "Are ongoing telematics data fees included in the $599 CAD hardware price?",
        answer:
          "The $599 CAD price reflects the hardware unit listing. Any applicable fleet dashboard or cellular service terms still require manufacturer/commercial confirmation before order acceptance.",
      },
    ],
    searchKeywords: [
      "fleet",
      "obd-ii",
      "obd2",
      "telematics",
      "commercial",
      "maintenance",
      "vans",
      "trucks",
      "business",
      "diagnostic",
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
      "EV Battery Intelligence Suite chamfered brushed aluminum and smoked-glass battery monitor module on a seamless dark studio sweep",
    gallery: [
      {
        src: evImage,
        alt: "EV Battery Intelligence Suite chamfered brushed aluminum and smoked-glass battery monitor module on a seamless dark studio sweep",
        caption: "Hardware unit — studio product view",
      },
    ],
    galleryPendingNote:
      "USB-C cable kit photos and EV interior placement examples pending supplier media.",
    price: 449,
    currency: "CAD",
    category: "EV Technology",
    audience: "consumer",
    availabilityStatus: "confirm_required",
    availabilityLabel: "Confirm EV compatibility before ordering",
    availabilityDetail:
      "Dispatch availability and EV model-specific harness support are verified with our team prior to order acceptance.",
    compatibilityNote:
      "Designed strictly for battery-electric and select plug-in electric drivetrains. Exact EV make, model year, and onboard diagnostic interface must be verified prior to purchase.",
    highlights: [
      "Brushed aluminum chassis with flush smoked-glass display surface",
      "Focused on battery health monitoring and charging visibility",
      "Compact cabin footprint with USB-C data and physical power control",
    ],
    shortSpecs: [
      { label: "Interface", value: "USB-C + EV Port" },
      { label: "Powertrain", value: "Electric Vehicles" },
    ],
    specifications: [
      {
        label: "Category",
        value: "EV Technology (Electric Vehicles)",
        confirmed: true,
      },
      {
        label: "Housing Construction",
        value: "Brushed aluminum chassis with smoked-glass display",
        confirmed: true,
      },
      {
        label: "Hardware Controls & Data",
        value: "USB-C data interface and physical power control",
        confirmed: true,
      },
      {
        label: "Supported EV BMS Protocols",
        value: "Exact OEM BMS protocol matrix to be supplied",
        confirmed: false,
      },
      {
        label: "Software App & Telemetry Sync",
        value: "Companion software & subscription terms pending confirmation",
        confirmed: false,
      },
      {
        label: "Dimensions & Environmental Rating",
        value: "To be supplied by manufacturer",
        confirmed: false,
      },
    ],
    installationRequirements:
      "Requires compatible electric vehicle diagnostic/USB-C cabin connection. Because EV manufacturers vary in OBD-II vs proprietary service-port pinouts, vehicle-specific cable kits must be confirmed prior to order.",
    connectivityAndSubscription:
      "USB-C local data connection is confirmed on the chassis; wireless telemetry and whether any companion mobile app subscription applies await manufacturer documentation.",
    includedAccessories:
      "EV Battery Intelligence Suite module. Vehicle-specific EV harness adapters and USB-C cables depend on verified vehicle model and final manufacturer packing list.",
    faqs: [
      {
        question: "Will this work on a gasoline or conventional non-plug-in vehicle?",
        answer:
          "No. This unit is built specifically for electric vehicle battery and charging telemetry. For gasoline passenger vehicles, review ASTRA-AI Driver Coach System.",
      },
      {
        question: "Which EV brands and model years are officially verified?",
        answer:
          "An OEM-verified EV BMS protocol list has not yet been published on the storefront. Use the Vehicle Compatibility Finder to review fitment status and request pre-order verification for your exact EV.",
      },
      {
        question: "What if my EV uses a non-standard diagnostic connector?",
        answer:
          "Our support team checks whether your EV model year requires a specific harness adapter before any order is accepted.",
      },
    ],
    searchKeywords: [
      "ev",
      "electric vehicle",
      "battery",
      "charging",
      "state of charge",
      "bms",
      "usb-c",
      "tesla",
      "rivian",
      "hyundai",
      "kia",
    ],
    link: "/products/ev-suite",
  },
];

export const productCategories: Array<"All products" | ProductCategory> = [
  "All products",
  ...Array.from(new Set(products.map((product) => product.category))),
];

export const availabilityStatusMeta: Record<
  AvailabilityStatus,
  { shortLabel: string; tone: "success" | "warning" | "muted" | "info" }
> = {
  in_stock: { shortLabel: "In Stock", tone: "success" },
  preorder: { shortLabel: "Preorder", tone: "info" },
  unavailable: { shortLabel: "Unavailable", tone: "muted" },
  confirm_required: { shortLabel: "Confirm Availability", tone: "warning" },
};

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(value);

export function filterProducts(
  query: string,
  category = "All products",
  sortBy: ProductSortOption = "featured"
) {
  const term = query.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchesCategory =
      category === "All products" || product.category === category;
    if (!matchesCategory) return false;
    if (!term) return true;

    const searchable = [
      product.name,
      product.shortName,
      product.description,
      product.longDescription,
      product.category,
      product.compatibilityNote,
      ...product.highlights,
      ...product.shortSpecs.map((s) => `${s.label} ${s.value}`),
      ...product.specifications
        .filter((s) => s.confirmed)
        .map((s) => `${s.label} ${s.value}`),
      ...product.searchKeywords,
    ]
      .join(" ")
      .toLowerCase();

    return term
      .split(/\s+/)
      .filter(Boolean)
      .every((token) => searchable.includes(token));
  });

  const sorted = [...filtered];
  if (sortBy === "price-asc") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    sorted.sort((a, b) => b.price - a.price);
  } else if (sortBy === "name-asc") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  }

  return sorted;
}