import driverImage from "@/assets/product-driver-coach.jpg";
import fleetImage from "@/assets/product-fleet-guard.jpg";
import evImage from "@/assets/product-ev-suite.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  currency: "USD";
  category: string;
  audience: "consumer" | "fleet";
  link: string;
}

// Existing catalogue values retained. Stock, specifications, and fulfilment
// have not been verified; do not infer them from presentation content.
export const products: Product[] = [
  { id: "driver-coach", name: "ASTRA-AI Driver Coach System", description: "Automotive technology for drivers exploring in-vehicle coaching and driving awareness.", image: driverImage, price: 329, currency: "USD", category: "Driving Technology", audience: "consumer", link: "/products/driver-coach" },
  { id: "predictive-fleet", name: "FleetGuard AI Pro", description: "A fleet-focused option for businesses exploring vehicle monitoring and maintenance planning.", image: fleetImage, price: 599, currency: "USD", category: "Fleet Technology", audience: "fleet", link: "/products/predictive-fleet" },
  { id: "ev-suite", name: "EV Battery Intelligence Suite", description: "An electric-vehicle option for owners exploring battery information and charging management.", image: evImage, price: 449, currency: "USD", category: "EV Technology", audience: "consumer", link: "/products/ev-suite" },
];

export const formatPrice = (value: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

export function filterProducts(query: string, category = "All products") {
  const term = query.trim().toLowerCase();
  return products.filter(product => (category === "All products" || product.category === category) && `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(term));
}