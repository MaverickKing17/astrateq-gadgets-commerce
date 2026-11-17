import { products, type Product } from "./catalogue";

export type CompatibilityState =
  | "verified"
  | "confirmation_required"
  | "not_verified";

export type PowertrainType = "ICE / Hybrid" | "Plug-in Hybrid (PHEV)" | "Electric (BEV)" | "Commercial Fleet";

export interface VehicleSelection {
  year: string;
  make: string;
  model: string;
  trim: string;
}

export interface VehicleModelOption {
  model: string;
  trims: Array<{ label: string; powertrain: PowertrainType; requiresTrimNote?: boolean }>;
}

export const VEHICLE_YEARS = [
  "2026",
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015 or older",
] as const;

export const VEHICLE_MAKES_MODELS: Record<string, VehicleModelOption[]> = {
  Toyota: [
    {
      model: "Camry / Corolla",
      trims: [{ label: "Standard / Hybrid Trim", powertrain: "ICE / Hybrid" }],
    },
    {
      model: "RAV4",
      trims: [
        { label: "Gasoline / Hybrid", powertrain: "ICE / Hybrid" },
        { label: "RAV4 Prime (PHEV)", powertrain: "Plug-in Hybrid (PHEV)", requiresTrimNote: true },
      ],
    },
    {
      model: "bZ4X",
      trims: [{ label: "All-Electric Trim", powertrain: "Electric (BEV)" }],
    },
  ],
  Honda: [
    {
      model: "Civic / Accord",
      trims: [{ label: "Standard / Hybrid Trim", powertrain: "ICE / Hybrid" }],
    },
    {
      model: "CR-V",
      trims: [{ label: "Gasoline / Hybrid Trim", powertrain: "ICE / Hybrid" }],
    },
    {
      model: "Prologue",
      trims: [{ label: "All-Electric Trim", powertrain: "Electric (BEV)" }],
    },
  ],
  Ford: [
    {
      model: "F-150",
      trims: [
        { label: "Gasoline / PowerBoost Hybrid", powertrain: "ICE / Hybrid" },
        { label: "F-150 Lightning (BEV)", powertrain: "Electric (BEV)", requiresTrimNote: true },
      ],
    },
    {
      model: "Transit / E-Transit",
      trims: [
        { label: "Commercial Transit (Gas/Diesel)", powertrain: "Commercial Fleet" },
        { label: "E-Transit (Commercial EV)", powertrain: "Electric (BEV)", requiresTrimNote: true },
      ],
    },
    {
      model: "Mustang Mach-E",
      trims: [{ label: "All-Electric Trim", powertrain: "Electric (BEV)" }],
    },
  ],
  Chevrolet: [
    {
      model: "Silverado / Express Van",
      trims: [
        { label: "Commercial / Service Trim", powertrain: "Commercial Fleet" },
        { label: "Silverado EV (BEV)", powertrain: "Electric (BEV)", requiresTrimNote: true },
      ],
    },
    {
      model: "Equinox / Blazer",
      trims: [
        { label: "Gasoline Trim", powertrain: "ICE / Hybrid" },
        { label: "EV Trim (BEV)", powertrain: "Electric (BEV)", requiresTrimNote: true },
      ],
    },
  ],
  Tesla: [
    {
      model: "Model 3 / Model Y",
      trims: [{ label: "All-Electric (Verify Year/Connector)", powertrain: "Electric (BEV)", requiresTrimNote: true }],
    },
    {
      model: "Model S / Model X",
      trims: [{ label: "All-Electric (Verify Year/Connector)", powertrain: "Electric (BEV)", requiresTrimNote: true }],
    },
  ],
  Hyundai: [
    {
      model: "Elantra / Tucson",
      trims: [
        { label: "Gasoline / Hybrid", powertrain: "ICE / Hybrid" },
        { label: "Tucson PHEV", powertrain: "Plug-in Hybrid (PHEV)", requiresTrimNote: true },
      ],
    },
    {
      model: "IONIQ 5 / IONIQ 6",
      trims: [{ label: "All-Electric Trim", powertrain: "Electric (BEV)" }],
    },
  ],
  Kia: [
    {
      model: "Sportage / Sorento",
      trims: [
        { label: "Gasoline / Hybrid", powertrain: "ICE / Hybrid" },
        { label: "PHEV Trim", powertrain: "Plug-in Hybrid (PHEV)", requiresTrimNote: true },
      ],
    },
    {
      model: "EV6 / EV9",
      trims: [{ label: "All-Electric Trim", powertrain: "Electric (BEV)" }],
    },
  ],
  Rivian: [
    {
      model: "R1T / R1S",
      trims: [{ label: "All-Electric Trim", powertrain: "Electric (BEV)" }],
    },
    {
      model: "EDV Commercial Van",
      trims: [{ label: "Commercial Electric Fleet", powertrain: "Commercial Fleet", requiresTrimNote: true }],
    },
  ],
  "Mercedes-Benz": [
    {
      model: "Sprinter Commercial Van",
      trims: [
        { label: "Diesel / Gas Commercial", powertrain: "Commercial Fleet" },
        { label: "eSprinter (BEV)", powertrain: "Electric (BEV)", requiresTrimNote: true },
      ],
    },
  ],
  "Other Make / Unlisted Vehicle": [
    {
      model: "Custom or Unlisted Model",
      trims: [
        { label: "Passenger Car / SUV", powertrain: "ICE / Hybrid" },
        { label: "Electric Vehicle (BEV)", powertrain: "Electric (BEV)" },
        { label: "Commercial Fleet / Heavy Duty", powertrain: "Commercial Fleet" },
      ],
    },
  ],
};

// Placeholder structure for future manufacturer-verified fitment records.
// Keep empty until an authoritative OEM / manufacturer fitment matrix is supplied.
export interface VerifiedFitmentRecord {
  year: string;
  make: string;
  model: string;
  trim: string;
  productId: string;
  notes: string;
}

export const VERIFIED_FITMENT_DATASET: VerifiedFitmentRecord[] = [];

export const COMPATIBILITY_PROTOTYPE_NOTICE = {
  title: "Compatibility Finder Prototype",
  description:
    "No manufacturer-verified year/make/model fitment database is connected yet. Results below reflect preliminary category rules only and must not be treated as guaranteed fitment.",
  requiredDataIntegration:
    "Before production launch, connect an authoritative manufacturer-supplied ACES/PIES or OEM VIN/OBD-II & EV BMS fitment dataset (or backend compatibility lookup API) so verified records populate automatically.",
};

export interface ProductCompatibilityResult {
  product: Product;
  state: CompatibilityState;
  stateLabel: string;
  summary: string;
  nextStep: string;
}

export function evaluateVehicleCompatibility(
  selection: VehicleSelection,
  targetProductId?: string
): ProductCompatibilityResult[] {
  const { year, make, model, trim } = selection;
  const models = VEHICLE_MAKES_MODELS[make] ?? [];
  const modelMeta = models.find((m) => m.model === model);
  const trimMeta = modelMeta?.trims.find((t) => t.label === trim);
  const powertrain: PowertrainType = trimMeta?.powertrain ?? "ICE / Hybrid";

  const scopedProducts = targetProductId
    ? products.filter((p) => p.id === targetProductId)
    : products;

  return scopedProducts.map((product) => {
    const exactRecord = VERIFIED_FITMENT_DATASET.find(
      (record) =>
        record.productId === product.id &&
        record.year === year &&
        record.make === make &&
        record.model === model &&
        record.trim === trim
    );

    if (exactRecord) {
      return {
        product,
        state: "verified",
        stateLabel: "Verified compatible",
        summary: exactRecord.notes,
        nextStep: "Proceed to product details or add to your inquiry cart.",
      };
    }

    const isUnlistedOrOlder =
      make === "Other Make / Unlisted Vehicle" || year === "2015 or older";

    if (isUnlistedOrOlder) {
      return {
        product,
        state: "not_verified",
        stateLabel: "Compatibility not verified",
        summary: `${year} ${make} ${model} cannot be pre-assessed by this prototype due to variations in older or unlisted power, windshield, and diagnostic interfaces.`,
        nextStep: "Request manual VIN/vehicle confirmation from our support team.",
      };
    }

    if (product.id === "ev-suite") {
      if (powertrain === "ICE / Hybrid") {
        return {
          product,
          state: "not_verified",
          stateLabel: "Compatibility not verified",
          summary: `${product.name} is designed for electric vehicle battery and charging telemetry and is not intended for standard non-plug-in ${powertrain} drivetrains.`,
          nextStep: "Consider ASTRA-AI Driver Coach System or confirm if you operate a BEV.",
        };
      }
      return {
        product,
        state: "confirmation_required",
        stateLabel: "Potentially compatible — confirmation required",
        summary: `${year} ${make} ${model} (${trim}) uses an electrified drivetrain, but OEM BMS port pinouts and cable requirements still need confirmation against manufacturer fitment data.`,
        nextStep: "Verify your exact EV model year & port type with support before ordering.",
      };
    }

    if (product.id === "predictive-fleet") {
      if (powertrain === "Electric (BEV)") {
        return {
          product,
          state: "not_verified",
          stateLabel: "Compatibility not verified",
          summary: `Electric vehicles often vary in standard OBD-II telemetry exposure. ${product.name} compatibility on ${year} ${make} ${model} requires manufacturer protocol confirmation.`,
          nextStep: "Confirm EV vs commercial OBD-II support with enterprise@astrateq.com.",
        };
      }
      return {
        product,
        state: "confirmation_required",
        stateLabel: "Potentially compatible — confirmation required",
        summary: `${year} ${make} ${model} typically supports standard diagnostic connections, though heavy-duty chassis adapters or commercial fleet portal requirements must be confirmed prior to ordering.`,
        nextStep: "Share your fleet vehicle details with our team for pre-order verification.",
      };
    }

    // driver-coach
    return {
      product,
      state: "confirmation_required",
      stateLabel: "Potentially compatible — confirmation required",
      summary: `${year} ${make} ${model} (${trim}) uses standard passenger cabin proportions, though 12V power outlet placement and ADAS camera windshield clearance must be confirmed before purchase.`,
      nextStep: "Confirm windshield camera clearance & power cable preference with support.",
    };
  });
}
