import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, MapPin } from "lucide-react";

const recentPurchases = [
  { name: "Sarah M.", location: "Austin, TX", product: "Driver Coach AI Pro", time: "2 min ago" },
  { name: "James K.", location: "Denver, CO", product: "EV Battery Intelligence Suite", time: "5 min ago" },
  { name: "Maria L.", location: "Miami, FL", product: "Emergency Response System", time: "8 min ago" },
  { name: "David R.", location: "Seattle, WA", product: "Predictive Fleet Guard", time: "12 min ago" },
  { name: "Lisa T.", location: "Chicago, IL", product: "ASTRA-AI Driver Coach", time: "15 min ago" },
  { name: "Robert P.", location: "Portland, OR", product: "EV Charging Protection", time: "18 min ago" },
  { name: "Emily W.", location: "Nashville, TN", product: "Family Safety Bundle", time: "22 min ago" },
  { name: "Michael C.", location: "San Diego, CA", product: "Fleet Intelligence Platform", time: "25 min ago" },
];

export function PurchaseTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show first notification after 5 seconds
    const initialTimer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (dismissed) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % recentPurchases.length);
        setIsVisible(true);
      }, 1000);
    }, 8000);

    return () => clearInterval(interval);
  }, [dismissed]);

  if (dismissed) return null;

  const purchase = recentPurchases[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-24 left-4 z-40 max-w-xs"
        >
          <div className="bg-background border border-border rounded-xl shadow-2xl p-4 relative">
            <button
              onClick={() => setDismissed(true)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground text-xs"
              aria-label="Dismiss"
            >
              ✕
            </button>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-electric-cyan/10 flex items-center justify-center shrink-0">
                <ShoppingBag className="w-5 h-5 text-electric-cyan" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {purchase.name} purchased
                </p>
                <p className="text-xs text-electric-cyan font-medium mt-0.5">
                  {purchase.product}
                </p>
                <div className="flex items-center gap-2 mt-1.5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {purchase.location}
                  </span>
                  <span>•</span>
                  <span>{purchase.time}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
