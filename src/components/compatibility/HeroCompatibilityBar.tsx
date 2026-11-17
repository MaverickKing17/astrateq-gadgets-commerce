import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  Car,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  COMPATIBILITY_PROTOTYPE_NOTICE,
  VEHICLE_MAKES_MODELS,
  VEHICLE_YEARS,
  evaluateVehicleCompatibility,
  type CompatibilityState,
} from "@/lib/compatibility";
import { formatPrice } from "@/lib/catalogue";

const stateStyles: Record<
  CompatibilityState,
  { icon: typeof CheckCircle2; textClass: string; borderClass: string }
> = {
  verified: {
    icon: CheckCircle2,
    textClass: "text-success",
    borderClass: "border-success/40 bg-success/5",
  },
  confirmation_required: {
    icon: AlertTriangle,
    textClass: "text-warning",
    borderClass: "border-warning/40 bg-warning/5",
  },
  not_verified: {
    icon: HelpCircle,
    textClass: "text-destructive",
    borderClass: "border-destructive/40 bg-destructive/5",
  },
};

type MobileStepKey = "year" | "make" | "model" | "trim";

export function HeroCompatibilityBar() {
  const makes = useMemo(() => Object.keys(VEHICLE_MAKES_MODELS), []);
  const [year, setYear] = useState<string>(VEHICLE_YEARS[2]);
  const [make, setMake] = useState<string>(makes[0]);

  const availableModels = useMemo(
    () => VEHICLE_MAKES_MODELS[make] ?? [],
    [make]
  );
  const [model, setModel] = useState<string>(availableModels[0]?.model ?? "");

  const availableTrims = useMemo(
    () => availableModels.find((m) => m.model === model)?.trims ?? [],
    [availableModels, model]
  );
  const [trim, setTrim] = useState<string>(availableTrims[0]?.label ?? "");

  const [hasChecked, setHasChecked] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(true);
  const [mobileStep, setMobileStep] = useState<MobileStepKey>("year");

  const handleMakeChange = (nextMake: string) => {
    setMake(nextMake);
    const nextModels = VEHICLE_MAKES_MODELS[nextMake] ?? [];
    const firstModel = nextModels[0];
    setModel(firstModel?.model ?? "");
    setTrim(firstModel?.trims[0]?.label ?? "");
    setHasChecked(false);
  };

  const handleModelChange = (nextModel: string) => {
    setModel(nextModel);
    const nextTrims =
      availableModels.find((m) => m.model === nextModel)?.trims ?? [];
    setTrim(nextTrims[0]?.label ?? "");
    setHasChecked(false);
  };

  const results = useMemo(() => {
    if (!hasChecked) return [];
    return evaluateVehicleCompatibility({ year, make, model, trim });
  }, [hasChecked, year, make, model, trim]);

  const mobileSteps: Array<{
    key: MobileStepKey;
    shortLabel: string;
    value: string;
  }> = [
    { key: "year", shortLabel: "1. Year", value: year },
    { key: "make", shortLabel: "2. Make", value: make },
    { key: "model", shortLabel: "3. Model", value: model },
    { key: "trim", shortLabel: "4. Trim", value: trim },
  ];

  const activeStepIndex = mobileSteps.findIndex((s) => s.key === mobileStep);

  return (
    <section
      aria-labelledby="hero-compatibility-heading"
      className="dark bg-background text-foreground pb-6"
    >
      <div className="container-wide -mt-8 md:-mt-10 relative z-20">
        <div className="rounded-xl border border-border bg-card p-5 sm:p-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
            <div>
              <h2
                id="hero-compatibility-heading"
                className="text-base sm:text-lg font-heading font-semibold text-foreground flex items-center gap-2"
              >
                <Car className="w-4 h-4 text-primary shrink-0" />
                <span>Vehicle Compatibility Finder</span>
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Preview preliminary fitment status by Year, Make, Model, and Trim before ordering.
              </p>
            </div>
            <Link
              to="/products?compatibility=open#compatibility-section"
              className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1 whitespace-nowrap shrink-0"
            >
              <span>Open Full Finder</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Desktop 4-Field Inline Finder */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setHasChecked(true);
            }}
            className="hidden md:grid md:grid-cols-[120px_1fr_1fr_1fr_auto] gap-3 items-end"
          >
            <div>
              <label
                htmlFor="hero-compat-year"
                className="block text-xs font-medium text-muted-foreground mb-1.5"
              >
                Year
              </label>
              <select
                id="hero-compat-year"
                value={year}
                onChange={(e) => {
                  setYear(e.target.value);
                  setHasChecked(false);
                }}
                className="w-full h-11 px-3 rounded-lg bg-background border border-border text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {VEHICLE_YEARS.map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="hero-compat-make"
                className="block text-xs font-medium text-muted-foreground mb-1.5"
              >
                Make
              </label>
              <select
                id="hero-compat-make"
                value={make}
                onChange={(e) => handleMakeChange(e.target.value)}
                className="w-full h-11 px-3 rounded-lg bg-background border border-border text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {makes.map((mk) => (
                  <option key={mk} value={mk}>
                    {mk}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="hero-compat-model"
                className="block text-xs font-medium text-muted-foreground mb-1.5"
              >
                Model
              </label>
              <select
                id="hero-compat-model"
                value={model}
                onChange={(e) => handleModelChange(e.target.value)}
                className="w-full h-11 px-3 rounded-lg bg-background border border-border text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {availableModels.map((item) => (
                  <option key={item.model} value={item.model}>
                    {item.model}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="hero-compat-trim"
                className="block text-xs font-medium text-muted-foreground mb-1.5"
              >
                Trim / Powertrain
              </label>
              <select
                id="hero-compat-trim"
                value={trim}
                onChange={(e) => {
                  setTrim(e.target.value);
                  setHasChecked(false);
                }}
                className="w-full h-11 px-3 rounded-lg bg-background border border-border text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {availableTrims.map((t) => (
                  <option key={t.label} value={t.label}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            <Button
              type="submit"
              className="h-11 px-5 whitespace-nowrap shrink-0"
            >
              Check Compatibility
            </Button>
          </form>

          {/* Mobile Progressive 4-Step Vehicle Selector */}
          <div className="md:hidden space-y-3">
            <button
              type="button"
              onClick={() => setMobileExpanded((prev) => !prev)}
              aria-expanded={mobileExpanded}
              className="w-full flex items-center justify-between gap-2 py-2.5 px-3.5 rounded-lg bg-background border border-border text-left text-xs font-medium min-h-[44px]"
            >
              <span className="truncate text-foreground">
                {year} {make} {model} · {trim}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${
                  mobileExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileExpanded && (
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    Step {activeStepIndex + 1} of 4 ·{" "}
                    {mobileSteps[activeStepIndex]?.shortLabel.replace(/^\d\.\s/, "")}
                  </span>
                  <span className="tabular-nums text-foreground font-medium">
                    4 of 4 selected
                  </span>
                </div>

                <div
                  className="w-full h-1.5 bg-background rounded-full overflow-hidden"
                  aria-hidden="true"
                >
                  <div
                    className="h-full bg-primary transition-all duration-200"
                    style={{ width: `${((activeStepIndex + 1) / 4) * 100}%` }}
                  />
                </div>

                <div
                  className="grid grid-cols-4 gap-1.5"
                  role="tablist"
                  aria-label="Vehicle selection steps"
                >
                  {mobileSteps.map((step) => {
                    const isActive = mobileStep === step.key;
                    return (
                      <button
                        key={step.key}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setMobileStep(step.key)}
                        className={`px-2 py-2 rounded-lg text-[11px] font-medium border text-left transition-colors min-h-[44px] ${
                          isActive
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border bg-background text-muted-foreground"
                        }`}
                      >
                        <span className="block text-[10px] opacity-80">
                          {step.shortLabel}
                        </span>
                        <span className="block truncate text-foreground">
                          {step.value}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {mobileStep === "year" && (
                  <div className="grid grid-cols-3 gap-2">
                    {VEHICLE_YEARS.map((yr) => (
                      <button
                        key={yr}
                        type="button"
                        onClick={() => {
                          setYear(yr);
                          setHasChecked(false);
                          setMobileStep("make");
                        }}
                        className={`min-h-[44px] px-2 rounded-lg text-xs font-medium border transition-colors ${
                          year === yr
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background text-foreground border-border"
                        }`}
                      >
                        {yr}
                      </button>
                    ))}
                  </div>
                )}

                {mobileStep === "make" && (
                  <div className="grid grid-cols-2 gap-2">
                    {makes.map((mk) => (
                      <button
                        key={mk}
                        type="button"
                        onClick={() => {
                          handleMakeChange(mk);
                          setMobileStep("model");
                        }}
                        className={`min-h-[44px] px-3 rounded-lg text-xs font-medium border text-left truncate transition-colors ${
                          make === mk
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background text-foreground border-border"
                        }`}
                      >
                        {mk}
                      </button>
                    ))}
                  </div>
                )}

                {mobileStep === "model" && (
                  <div className="grid grid-cols-1 gap-2">
                    {availableModels.map((item) => (
                      <button
                        key={item.model}
                        type="button"
                        onClick={() => {
                          handleModelChange(item.model);
                          setMobileStep("trim");
                        }}
                        className={`min-h-[44px] px-3 rounded-lg text-xs font-medium border text-left transition-colors ${
                          model === item.model
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background text-foreground border-border"
                        }`}
                      >
                        {item.model}
                      </button>
                    ))}
                  </div>
                )}

                {mobileStep === "trim" && (
                  <div className="grid grid-cols-1 gap-2">
                    {availableTrims.map((t) => (
                      <button
                        key={t.label}
                        type="button"
                        onClick={() => {
                          setTrim(t.label);
                          setHasChecked(false);
                        }}
                        className={`min-h-[44px] px-3 rounded-lg text-xs font-medium border text-left transition-colors ${
                          trim === t.label
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background text-foreground border-border"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                )}

                <Button
                  type="button"
                  onClick={() => setHasChecked(true)}
                  className="w-full min-h-[44px]"
                >
                  Check Compatibility
                </Button>
              </div>
            )}
          </div>

          {hasChecked && (
            <div
              className="mt-6 pt-5 border-t border-border/80 space-y-4"
              aria-live="polite"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                <span>
                  Vehicle checked:{" "}
                  <strong className="text-foreground">
                    {year} {make} {model} ({trim})
                  </strong>{" "}
                  · {COMPATIBILITY_PROTOTYPE_NOTICE.title} (no OEM fitment database connected yet)
                </span>
                <button
                  type="button"
                  onClick={() => setHasChecked(false)}
                  className="inline-flex items-center gap-1 text-foreground hover:text-primary py-1"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Close Results</span>
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {results.map(({ product, state, stateLabel, summary }) => {
                  const style = stateStyles[state];
                  const StateIcon = style.icon;
                  const contactQuery = new URLSearchParams({
                    subject: `Compatibility Check: ${product.shortName} (${year} ${make} ${model})`,
                    vehicle: `${year} ${make} ${model} (${trim})`,
                  }).toString();

                  return (
                    <div
                      key={product.id}
                      className={`rounded-lg border p-4 flex flex-col justify-between ${style.borderClass}`}
                    >
                      <div>
                        <div
                          className={`flex items-center gap-2 text-xs font-semibold mb-2 ${style.textClass}`}
                        >
                          <StateIcon className="w-4 h-4 shrink-0" />
                          <span>{stateLabel}</span>
                        </div>
                        <div className="flex items-baseline justify-between gap-2 mb-1.5">
                          <h3 className="font-semibold text-sm text-foreground">
                            {product.name}
                          </h3>
                          <span className="text-xs font-medium tabular-nums text-muted-foreground shrink-0">
                            {formatPrice(product.price)} {product.currency}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                          {summary}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-border/50 flex items-center justify-between gap-2 text-xs">
                        <Link
                          to={`/contact?${contactQuery}`}
                          className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                        >
                          Confirm with Support
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          to={product.link}
                          className="text-foreground/85 hover:text-primary transition-colors"
                        >
                          Product Details
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>

              <details className="rounded-lg border border-dashed border-border bg-background/60 p-4 text-xs">
                <summary className="cursor-pointer font-medium text-foreground">
                  Preview future verified fitment record schema (Illustrative UI only)
                </summary>
                <div className="mt-3 space-y-2 text-muted-foreground">
                  <p className="text-warning font-medium">
                    ILLUSTRATIVE UI ONLY — Not a real vehicle fitment claim. Shown to preview how verified OEM records will display once connected.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-2 font-mono pt-1">
                    <div>Data Source ID: SAMPLE-SRC-000</div>
                    <div>Last Verified Date: YYYY-MM-DD</div>
                    <div>Harness Spec: Pending OEM matrix</div>
                  </div>
                </div>
              </details>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
