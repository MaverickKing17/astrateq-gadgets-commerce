import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "astrateq_consent";

function loadTrackingScripts() {
  console.log("Consent granted. Loading secure analytics...");

  if (!document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
    const gaScript = document.createElement("script");
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-12QTQ8HMGN";
    gaScript.async = true;
    document.head.appendChild(gaScript);

    gaScript.onload = () => {
      const w = window as Window & {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
      };
      w.dataLayer = w.dataLayer || [];
      function gtag(...args: unknown[]) {
        w.dataLayer?.push(args);
      }
      gtag("js", new Date());
      gtag("config", "G-12QTQ8HMGN");
      w.gtag = gtag;
    };
  }
}

function removeTrackingScripts() {
  // Remove GA cookies
  document.cookie.split(";").forEach((c) => {
    const name = c.trim().split("=")[0];
    if (name.startsWith("_ga") || name.startsWith("_gid")) {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${window.location.hostname}`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  });
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    } else if (consent === "accepted") {
      loadTrackingScripts();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
    loadTrackingScripts();
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setVisible(false);
    removeTrackingScripts();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-[#0f172a]/95 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl p-6 shadow-2xl shadow-black/40">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-[#38bdf8]/10 items-center justify-center mt-0.5">
                <Shield className="w-5 h-5 text-[#38bdf8]" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-base mb-1">
                  Privacy & Diagnostics
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We use cookies to secure your session and analyze site traffic. Your OBD2 diagnostic data is never shared with third parties.{" "}
                  <a
                    href="/legal/privacy"
                    className="text-[#38bdf8] hover:underline"
                  >
                    Read our Privacy Policy
                  </a>
                  .
                </p>
              </div>

              {/* Close */}
              <button
                onClick={handleReject}
                className="shrink-0 text-slate-400 hover:text-white transition-colors"
                aria-label="Close cookie banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-end gap-3 mt-4">
              <button
                onClick={handleReject}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                Decline
              </button>
              <Button
                onClick={handleAccept}
                className="bg-[#38bdf8] hover:bg-[#38bdf8]/90 text-[#0f172a] font-semibold px-6"
              >
                Accept All
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
