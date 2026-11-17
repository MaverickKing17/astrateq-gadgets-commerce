import { Link } from "react-router-dom";
import { ArrowRight, Bot, GitCompare, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL?.trim();
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim();
const IS_AI_CONFIGURED = Boolean(SUPABASE_URL && SUPABASE_KEY);

const starterPrompts = [
  "Compare ASTRA-AI Driver Coach and FleetGuard AI Pro in CAD.",
  "Which Astrateq hardware is designed for electric vehicles?",
  "What specifications are confirmed for the Driver Coach System?",
];

function openProductAssistant(prompt?: string) {
  window.dispatchEvent(
    new CustomEvent("astrateq:open-assistant", {
      detail: prompt ? { prompt } : undefined,
    })
  );
}

export function CatalogueAssistantSection() {
  return (
    <section
      aria-labelledby="catalogue-assistant-heading"
      className="py-20 bg-slate-grey text-pure-white border-y border-pure-white/10"
    >
      <div className="container-wide">
        <div className="rounded-xl border border-pure-white/10 bg-midnight-charcoal/85 p-6 sm:p-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-electric-cyan text-xs font-semibold uppercase tracking-wider">
              Product Discovery &amp; Hardware Comparison
            </p>
            <h2
              id="catalogue-assistant-heading"
              className="text-3xl md:text-4xl font-heading font-bold"
            >
              Find the Right Technology for Your Drive
            </h2>
            <p className="text-pure-white/80 text-base leading-relaxed max-w-2xl">
              Compare Astrateq&apos;s active CAD hardware side by side, check vehicle compatibility, or ask our catalogue assistant. Unsupplied manufacturer specs and unverified vehicle matches are always disclosed clearly.
            </p>

            <div className="pt-2 space-y-2">
              <p className="text-xs font-medium text-pure-white/65">
                Start with a catalogue question:
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5">
                {starterPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => openProductAssistant(prompt)}
                    className="text-left text-xs px-3.5 py-2.5 rounded-lg border border-pure-white/15 bg-slate-grey/50 hover:border-electric-cyan/60 hover:text-electric-cyan text-pure-white/90 transition-colors min-h-[40px]"
                  >
                    &ldquo;{prompt}&rdquo;
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-xl border border-pure-white/10 bg-slate-grey/40 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-electric-cyan/15 flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-electric-cyan" />
              </div>
              <div>
                <h3 className="text-base font-heading font-semibold text-pure-white">
                  Astrateq Catalogue Assistant
                </h3>
                <p className="text-xs text-pure-white/70">
                  {IS_AI_CONFIGURED
                    ? "Connected · Grounded in active CAD catalogue"
                    : "Preview mode · Browse, compare, or contact Toronto support"}
                </p>
              </div>
            </div>

            <p className="text-xs text-pure-white/75 leading-relaxed">
              Responses are limited to verified hardware prices, confirmed specifications, and published store policies. Trim-level fitment is always confirmed manually with support before shipping.
            </p>

            <Button
              type="button"
              variant="hero"
              size="lg"
              className="w-full min-h-[44px]"
              onClick={() => openProductAssistant()}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Open Catalogue Assistant</span>
            </Button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <Button
                variant="hero-ghost"
                className="min-h-[44px] w-full"
                asChild
              >
                <Link to="/resources/compare">
                  <GitCompare className="w-4 h-4" />
                  <span>Compare Specs</span>
                </Link>
              </Button>
              <Button
                variant="hero-ghost"
                className="min-h-[44px] w-full"
                asChild
              >
                <Link to="/contact">
                  <span>Ask Support</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
