import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield } from "lucide-react";

const messages = [
  "Trusted by 200+ EV Households in Ontario",
  "Deployed in 50+ GTA Fleets",
  "4.9★ Average Rating from 1,700+ Drivers",
];

export function TrustNotification() {
  const [visible, setVisible] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 150 }}
          className="fixed bottom-6 left-6 z-50 max-w-xs"
        >
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#121212]/90 backdrop-blur-xl border border-electric-cyan/15 shadow-2xl shadow-black/40">
            <div className="shrink-0 w-8 h-8 rounded-full bg-electric-cyan/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-electric-cyan" />
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={msgIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="text-xs font-body text-pure-white/70 leading-snug"
              >
                {messages[msgIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
