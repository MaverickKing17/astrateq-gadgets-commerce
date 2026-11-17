import React, { useState } from 'react';
import {
  Search,
  User,
  ShoppingBag,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  Car,
  Cpu,
  BatteryCharging,
  Truck,
  Camera,
  Activity,
  Wrench,
  Send,
  Sparkles,
  FileText,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Layers,
  Smartphone,
  Monitor,
  MessageSquare,
  Package,
  SlidersHorizontal,
  Info,
  X,
  RefreshCw,
  Clock
} from 'lucide-react';

// ============================================================================
// VALIDATED CATALOGUE & DESIGN SYSTEM DATA
// ============================================================================

const PRODUCTS = [
  {
    id: 'astra-ai-coach',
    name: 'ASTRA-AI Driver Coach System',
    category: 'Driver Technology',
    referencePrice: '$329.00 CAD',
    priceStatus: 'Reference pricing only',
    fitmentStatus: 'Needs confirmation',
    benefit: 'In-cabin driver attention and fatigue awareness hardware designed for daily commuters and long-distance drivers.',
    catalogueSummary: 'Listed in the Astrateq catalogue as an in-cabin driving-monitor product designed to surface real-time attentiveness cues.',
    sourceRef: 'Astrateq Product Catalogue (Ref #AG-01)',
    specs: {
      primaryFunction: 'In-cabin driver attention & awareness monitoring',
      powerInput: '12V accessory / USB-C (Details not yet supplied)',
      mountingType: 'Dashboard / windshield bracket (Details not yet supplied)',
      obdIntegration: 'Not specified in the available product information',
      fleetTelemetrySync: 'Not specified in the available product information',
      warrantyCoverage: 'Written manufacturer & Astrateq limited warranty'
    },
    hardwareType: 'camera'
  },
  {
    id: 'fleetguard-ai-pro',
    name: 'FleetGuard AI Pro',
    category: 'Fleet Intelligence',
    referencePrice: '$599.00 CAD',
    priceStatus: 'Reference pricing only',
    fitmentStatus: 'Needs confirmation',
    benefit: 'Multi-sensor commercial vehicle awareness and incident logging module built for light-duty and commercial fleet operators.',
    catalogueSummary: 'Listed in the Astrateq catalogue as a commercial-grade vehicle awareness and fleet operations module.',
    sourceRef: 'Astrateq Product Catalogue (Ref #AG-02)',
    specs: {
      primaryFunction: 'Commercial fleet driver awareness & trip event logging',
      powerInput: 'Hardwire / commercial harness (Details not yet supplied)',
      mountingType: 'Fixed commercial cabin mount (Details not yet supplied)',
      obdIntegration: 'Supported (Exact protocol list not yet supplied)',
      fleetTelemetrySync: 'Included (API specifications not yet supplied)',
      warrantyCoverage: 'Written commercial hardware warranty'
    },
    hardwareType: 'module'
  },
  {
    id: 'ev-battery-suite',
    name: 'EV Battery Intelligence Suite',
    category: 'EV Technology',
    referencePrice: '$449.00 CAD',
    priceStatus: 'Reference pricing only',
    fitmentStatus: 'Needs confirmation',
    benefit: 'High-voltage pack health monitoring, thermal trend visibility, and range degradation diagnostics for electric vehicles.',
    catalogueSummary: 'Listed in the Astrateq catalogue as an electric vehicle battery diagnostics and state-of-health monitoring suite.',
    sourceRef: 'Astrateq Product Catalogue (Ref #AG-03)',
    specs: {
      primaryFunction: 'EV traction battery state-of-health & thermal diagnostics',
      powerInput: 'Diagnostic port powered (Details not yet supplied)',
      mountingType: 'Under-dash diagnostic interface (Details not yet supplied)',
      obdIntegration: 'EV CAN-bus diagnostic read (Model list not yet supplied)',
      fleetTelemetrySync: 'Not specified in the available product information',
      warrantyCoverage: 'Written manufacturer & Astrateq limited warranty'
    },
    hardwareType: 'ev'
  }
];

const CATEGORIES = [
  { name: 'Driver Technology', icon: EyeIcon, count: 'Validated line' },
  { name: 'Dashcams & Camera Systems', icon: Camera, count: 'Catalogue' },
  { name: 'Vehicle Diagnostics', icon: Activity, count: 'Catalogue' },
  { name: 'EV Technology', icon: BatteryCharging, count: 'Validated line' },
  { name: 'Fleet Intelligence', icon: Truck, count: 'Validated line' },
  { name: 'Automotive Accessories', icon: Wrench, count: 'Catalogue' }
];

function EyeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

// ============================================================================
// SHARED UI COMPONENTS (EXPLICIT STATUS BADGES & HARDWARE ILLUSTRATIONS)
// ============================================================================

function StatusBadge({ type = 'needs-confirmation', label }) {
  const styles = {
    'verified': {
      bg: 'bg-[#06B6D4]/15 border-[#06B6D4]/40 text-[#67E8F9]',
      icon: CheckCircle2,
      defaultText: 'Verified fitment'
    },
    'needs-confirmation': {
      bg: 'bg-[#2D343C]/80 border-[#4B5563] text-[#E5E7EB]',
      icon: AlertCircle,
      defaultText: 'Needs confirmation'
    },
    'not-supplied': {
      bg: 'bg-[#171A1D] border-[#2D343C] text-[#9CA3AF]',
      icon: HelpCircle,
      defaultText: 'Information not supplied'
    },
    'reference-price': {
      bg: 'bg-[#F59E0B]/15 border-[#F59E0B]/40 text-[#FCD34D]',
      icon: Info,
      defaultText: 'Reference pricing only'
    }
  };

  const config = styles[type] || styles['needs-confirmation'];
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium border ${config.bg}`}>
      <Icon className="w-3.5 h-3.5 shrink-0" />
      <span>{label || config.defaultText}</span>
    </span>
  );
}

function HardwareVisual({ type, large = false }) {
  return (
    <div className={`relative w-full ${large ? 'h-80 md:h-96' : 'h-48'} bg-gradient-to-b from-[#22272D] to-[#131619] rounded-lg border border-[#2D343C] overflow-hidden flex items-center justify-center p-6 select-none`}>
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'radial-gradient(#9CA3AF 1px, transparent 1px)',
          backgroundSize: '16px 16px'
        }}
      />
      {/* Natural directional studio light */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-32 bg-white/5 blur-2xl rounded-full" />

      {type === 'camera' && (
        <div className="relative flex flex-col items-center">
          <div className={`${large ? 'w-56 h-32' : 'w-40 h-24'} rounded-2xl bg-gradient-to-b from-[#2E343B] to-[#181B20] border border-[#404852] shadow-2xl flex items-center justify-between px-5`}>
            <div className="flex flex-col gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#06B6D4]" />
              <span className="text-[10px] font-mono tracking-widest text-[#9CA3AF] uppercase">ASTRA-AI</span>
              <div className="w-10 h-1 bg-[#2D343C] rounded" />
            </div>
            {/* Optical lens assembly */}
            <div className={`${large ? 'w-20 h-20' : 'w-14 h-14'} rounded-full bg-[#0F1114] border-4 border-[#374151] flex items-center justify-center shadow-inner`}>
              <div className={`${large ? 'w-11 h-11' : 'w-8 h-8'} rounded-full bg-gradient-to-tr from-[#0B192C] via-[#164E63] to-[#083344] border border-[#06B6D4]/40 flex items-center justify-center`}>
                <div className="w-2.5 h-2.5 rounded-full bg-white/30 -translate-x-1 -translate-y-1" />
              </div>
            </div>
          </div>
          <div className="w-24 h-2 bg-[#0D0F11] rounded-full blur-sm mt-3" />
        </div>
      )}

      {type === 'module' && (
        <div className="relative flex flex-col items-center">
          <div className={`${large ? 'w-60 h-32' : 'w-44 h-24'} rounded-xl bg-gradient-to-br from-[#2B3138] to-[#16191D] border border-[#3F4750] shadow-2xl p-4 flex flex-col justify-between`}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-wider text-[#E5E7EB]">FLEETGUARD PRO</span>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B7280]" />
              </div>
            </div>
            {/* Cooling fins */}
            <div className="grid grid-cols-6 gap-1.5 my-1">
              {[...Array(6)].map((_, idx) => (
                <div key={idx} className="h-4 bg-[#111317] rounded-sm border-t border-[#374151]" />
              ))}
            </div>
            <div className="flex items-center justify-between text-[9px] font-mono text-[#9CA3AF]">
              <span>CAN / TELEMETRY</span>
              <span>CH-01..04</span>
            </div>
          </div>
          <div className="w-28 h-2 bg-[#0D0F11] rounded-full blur-sm mt-3" />
        </div>
      )}

      {type === 'ev' && (
        <div className="relative flex flex-col items-center">
          <div className={`${large ? 'w-56 h-32' : 'w-40 h-24'} rounded-xl bg-gradient-to-b from-[#2A3037] to-[#15181C] border border-[#3E464F] shadow-2xl p-4 flex flex-col justify-between`}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#67E8F9] tracking-wider">EV BATTERY SUITE</span>
              <BatteryCharging className="w-4 h-4 text-[#06B6D4]" />
            </div>
            <div className="bg-[#0F1215] border border-[#2D343C] rounded p-2 flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#9CA3AF]">PACK DIAGNOSTIC</span>
              <span className="text-[10px] font-mono text-[#E5E7EB]">OBD-EV</span>
            </div>
            <div className="flex gap-1">
              <div className="h-1 flex-1 bg-[#06B6D4]/60 rounded" />
              <div className="h-1 flex-1 bg-[#06B6D4]/60 rounded" />
              <div className="h-1 flex-1 bg-[#2D343C] rounded" />
            </div>
          </div>
          <div className="w-24 h-2 bg-[#0D0F11] rounded-full blur-sm mt-3" />
        </div>
      )}

      <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-[#6B7280]">
        HARDWARE REFERENCE
      </span>
    </div>
  );
}

function BrandLogo({ compact = false }) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <div className="w-8 h-8 rounded-lg bg-[#1F2429] border border-[#06B6D4]/50 flex items-center justify-center shadow-sm">
        <div className="w-4 h-4 rounded-sm border-2 border-[#06B6D4] rotate-45 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-white font-semibold tracking-tight leading-none text-base">
          Astrateq <span className="text-[#06B6D4] font-normal">Gadgets</span>
        </span>
        {!compact && (
          <span className="text-[10px] text-[#9CA3AF] tracking-wide mt-0.5">
            Automotive technology, thoughtfully selected.
          </span>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// STOREFRONT HEADER & FOOTER (USED ACROSS DESKTOP VIEWS 1–4)
// ============================================================================

function StorefrontHeader({ activeView, onNavigate, onOpenAssistant }) {
  return (
    <header className="w-full bg-[#171A1D] border-b border-[#2D343C]">
      {/* Slim Utility Bar */}
      <div className="border-b border-[#2D343C]/70 bg-[#131619]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-9 flex items-center justify-between text-xs text-[#9CA3AF]">
          <span>Automotive technology, thoughtfully selected.</span>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('pdp')} className="hover:text-white transition-colors">
              Shipping &amp; Returns
            </button>
            <button onClick={() => onNavigate('compatibility')} className="hover:text-white transition-colors flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#06B6D4]" />
              <span>Toronto Support</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-18 py-4 flex items-center justify-between gap-6">
        <button onClick={() => onNavigate('home')} className="text-left focus:outline-none">
          <BrandLogo />
        </button>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#D1D5DB]">
          <button
            onClick={() => onNavigate('home')}
            className={`hover:text-white transition-colors ${activeView === 'home' ? 'text-[#06B6D4]' : ''}`}
          >
            Shop
          </button>
          <button
            onClick={() => onNavigate('pdp')}
            className={`hover:text-white transition-colors ${activeView === 'pdp' ? 'text-[#06B6D4]' : ''}`}
          >
            Automotive Technology
          </button>
          <button
            onClick={() => onNavigate('compatibility')}
            className={`hover:text-white transition-colors ${activeView === 'compatibility' ? 'text-[#06B6D4]' : ''}`}
          >
            Vehicle Compatibility
          </button>
          <button
            onClick={onOpenAssistant}
            className={`hover:text-white transition-colors flex items-center gap-1.5 ${activeView === 'assistant' ? 'text-[#06B6D4]' : ''}`}
          >
            <span>Solutions &amp; Assistant</span>
          </button>
          <button
            onClick={() => onNavigate('compatibility')}
            className="hover:text-white transition-colors"
          >
            Support
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenAssistant}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#1F2429] border border-[#2D343C] text-xs text-[#9CA3AF] hover:border-[#06B6D4]/50 hover:text-white transition-colors"
          >
            <Search className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>Search catalogue...</span>
          </button>
          <button aria-label="Account" className="p-2 rounded-md text-[#9CA3AF] hover:text-white hover:bg-[#1F2429] transition-colors">
            <User className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('pdp')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1F2429] border border-[#2D343C] text-xs text-[#D1D5DB] hover:border-[#4B5563] transition-colors"
            title="Online card checkout is in final preparation"
          >
            <ShoppingBag className="w-4 h-4 text-[#9CA3AF]" />
            <span>Inquiry (0)</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function StorefrontFooter({ onNavigate }) {
  return (
    <footer className="bg-[#121518] border-t border-[#2D343C] text-[#9CA3AF]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-4">
          <BrandLogo />
          <p className="text-sm text-[#9CA3AF] max-w-sm leading-relaxed">
            Curated automotive awareness, EV diagnostics, and commercial fleet hardware backed by transparent fitment verification and written warranty coverage.
          </p>
          <div className="pt-2 space-y-1.5 text-xs text-[#D1D5DB]">
            <p className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>Headquarters &amp; Customer Support: Toronto, Ontario, Canada</span>
            </p>
            <p className="flex items-center gap-2 text-[#9CA3AF]">
              <Info className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Online card checkout is currently in final preparation. Availability and fitment inquiries are handled directly by our Toronto team.</span>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Shop</h4>
          <ul className="space-y-2.5 text-sm">
            <li><button onClick={() => onNavigate('pdp')} className="hover:text-white">Driver Technology</button></li>
            <li><button onClick={() => onNavigate('home')} className="hover:text-white">Dashcams &amp; Camera Systems</button></li>
            <li><button onClick={() => onNavigate('home')} className="hover:text-white">Vehicle Diagnostics</button></li>
            <li><button onClick={() => onNavigate('home')} className="hover:text-white">EV Technology</button></li>
            <li><button onClick={() => onNavigate('home')} className="hover:text-white">Fleet Intelligence</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Support &amp; Fitment</h4>
          <ul className="space-y-2.5 text-sm">
            <li><button onClick={() => onNavigate('compatibility')} className="hover:text-white">Vehicle Compatibility Finder</button></li>
            <li><button onClick={() => onNavigate('assistant')} className="hover:text-white">Astrateq Catalogue Assistant</button></li>
            <li><button onClick={() => onNavigate('pdp')} className="hover:text-white">Installation Guidance</button></li>
            <li><button onClick={() => onNavigate('pdp')} className="hover:text-white">Written Warranty &amp; Returns</button></li>
            <li><button onClick={() => onNavigate('pdp')} className="hover:text-white">Canadian Shipping Policy</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Company &amp; Policies</h4>
          <ul className="space-y-2.5 text-sm">
            <li><span className="text-[#9CA3AF]">Toronto Operations Centre</span></li>
            <li><span className="text-[#9CA3AF]">Commercial Fleet Inquiries</span></li>
            <li><span className="text-[#9CA3AF]">Privacy Policy (PIPEDA Aligned)</span></li>
            <li><span className="text-[#9CA3AF]">Terms of Service</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#2D343C]/70">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <span>© 2026 Astrateq Gadgets Inc. — Toronto, Ontario, Canada. All rights reserved.</span>
          <span>Prices shown in CAD are reference pricing pending live checkout activation.</span>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// MOCK-UP 1 — COMPLETE DESKTOP HOMEPAGE (1440PX CENTERED LAYOUT)
// ============================================================================

function DesktopHomepageMockup({ onNavigate, onSelectProduct, vehicleState, setVehicleState, onLaunchAssistantWithPrompt }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(null);

  const handleVehicleSubmit = (e) => {
    e.preventDefault();
    onNavigate('compatibility');
  };

  return (
    <div className="w-full bg-[#171A1D] text-white">
      <StorefrontHeader
        activeView="home"
        onNavigate={onNavigate}
        onOpenAssistant={() => onNavigate('assistant')}
      />

      {/* 1. CINEMATIC HERO */}
      <section className="relative border-b border-[#2D343C] overflow-hidden">
        {/* Realistic dark automotive dashboard/highway backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111316] via-[#171A1D]/95 to-[#1A2026]/80 z-10" />
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              'radial-gradient(circle at 75% 40%, rgba(6, 182, 212, 0.14), transparent 45%), linear-gradient(180deg, #0D1013 0%, #1C2229 60%, #121518 100%)'
          }}
        />
        {/* Subtle windshield horizon & lane lines illustration */}
        <svg className="absolute right-0 top-0 h-full w-1/2 opacity-20 pointer-events-none" viewBox="0 0 600 400" fill="none">
          <path d="M50 380 L260 190 L340 190 L550 380" stroke="#9CA3AF" strokeWidth="1.5" />
          <path d="M300 190 L300 380" stroke="#06B6D4" strokeWidth="2" strokeDasharray="12 12" />
          <path d="M0 190 L600 190" stroke="#4B5563" strokeWidth="1" />
          <circle cx="420" cy="145" r="90" stroke="#06B6D4" strokeWidth="0.75" strokeDasharray="4 4" />
        </svg>

        <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F2429] border border-[#2D343C] text-xs text-[#67E8F9]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>Verified Hardware Catalogue &amp; Canadian Fitment Guidance</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-semibold tracking-tight text-white leading-[1.1]">
              Smarter technology for every drive.
            </h1>

            <p className="text-base sm:text-lg text-[#D1D5DB] leading-relaxed max-w-xl">
              Purpose-built driver technology, vehicle diagnostics, EV battery intelligence, and commercial fleet hardware—selected for clarity, reliability, and verifiable compatibility.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#featured-hardware"
                className="px-6 py-3.5 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-[#111316] font-semibold text-sm transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <span>Shop Automotive Technology</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onNavigate('compatibility')}
                className="px-6 py-3.5 rounded-lg bg-transparent hover:bg-[#1F2429] text-white border border-[#4B5563] hover:border-[#06B6D4] font-medium text-sm transition-colors inline-flex items-center gap-2"
              >
                <Car className="w-4 h-4 text-[#06B6D4]" />
                <span>Find Products for My Vehicle</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROMINENT 4-FIELD VEHICLE FINDER IMMEDIATELY BELOW HERO */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 -mt-8 relative z-30">
        <div className="bg-[#1F2429] border border-[#2D343C] rounded-xl p-6 lg:p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 mb-5">
            <div>
              <h2 className="text-base font-semibold text-white flex items-center gap-2">
                <Car className="w-4 h-4 text-[#06B6D4]" />
                <span>Vehicle Compatibility Finder</span>
              </h2>
              <p className="text-xs text-[#9CA3AF] mt-0.5">
                Fitment is shown only when verified against manufacturer records.
              </p>
            </div>
            <StatusBadge type="needs-confirmation" label="Live fitment database in verification" />
          </div>

          <form onSubmit={handleVehicleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            <div>
              <label className="block text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider mb-1.5">Year</label>
              <select
                value={vehicleState.year}
                onChange={(e) => setVehicleState({ ...vehicleState, year: e.target.value })}
                className="w-full h-11 px-3 rounded-lg bg-[#171A1D] border border-[#2D343C] text-sm text-white focus:border-[#06B6D4] focus:outline-none"
              >
                <option value="">Select Year</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider mb-1.5">Make</label>
              <select
                value={vehicleState.make}
                onChange={(e) => setVehicleState({ ...vehicleState, make: e.target.value })}
                className="w-full h-11 px-3 rounded-lg bg-[#171A1D] border border-[#2D343C] text-sm text-white focus:border-[#06B6D4] focus:outline-none"
              >
                <option value="">Select Make</option>
                <option value="Toyota">Toyota</option>
                <option value="Ford">Ford</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Tesla">Tesla</option>
                <option value="Honda">Honda</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider mb-1.5">Model</label>
              <select
                value={vehicleState.model}
                onChange={(e) => setVehicleState({ ...vehicleState, model: e.target.value })}
                className="w-full h-11 px-3 rounded-lg bg-[#171A1D] border border-[#2D343C] text-sm text-white focus:border-[#06B6D4] focus:outline-none"
              >
                <option value="">Select Model</option>
                <option value="RAV4">RAV4</option>
                <option value="F-150">F-150</option>
                <option value="IONIQ 5">IONIQ 5</option>
                <option value="Model Y">Model Y</option>
                <option value="CR-V">CR-V</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wider mb-1.5">Trim</label>
              <select
                value={vehicleState.trim}
                onChange={(e) => setVehicleState({ ...vehicleState, trim: e.target.value })}
                className="w-full h-11 px-3 rounded-lg bg-[#171A1D] border border-[#2D343C] text-sm text-white focus:border-[#06B6D4] focus:outline-none"
              >
                <option value="">Select Trim</option>
                <option value="LE / Base">LE / Base</option>
                <option value="XLE / Mid">XLE / Mid</option>
                <option value="Limited / AWD">Limited / AWD</option>
                <option value="Commercial Fleet">Commercial Fleet</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full h-11 px-5 rounded-lg bg-[#06B6D4] hover:bg-[#0891B2] text-[#111316] font-semibold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Check Compatibility</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 3. CATEGORY ENTRY POINTS */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#06B6D4]">Browse by System</span>
            <h2 className="text-2xl font-semibold text-white mt-1">Automotive Technology Categories</h2>
          </div>
          <button
            onClick={() => onNavigate('assistant')}
            className="text-sm text-[#06B6D4] hover:underline hidden sm:inline-flex items-center gap-1"
          >
            <span>Not sure which system fits? Ask the catalogue assistant</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.name}
                onClick={() => onNavigate('pdp')}
                className="group text-left p-4 rounded-xl bg-[#1F2429] border border-[#2D343C] hover:border-[#06B6D4]/60 transition-all flex flex-col justify-between min-h-[120px]"
              >
                <div className="w-9 h-9 rounded-lg bg-[#171A1D] border border-[#2D343C] group-hover:border-[#06B6D4]/40 flex items-center justify-center text-[#06B6D4]">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="mt-4">
                  <div className="text-sm font-medium text-white group-hover:text-[#67E8F9] transition-colors leading-snug">
                    {cat.name}
                  </div>
                  <div className="text-[11px] text-[#9CA3AF] mt-1">{cat.count}</div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. THREE FEATURED HARDWARE CARDS */}
      <section id="featured-hardware" className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#06B6D4]">Featured Catalogue</span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-1">Core Driver &amp; Vehicle Systems</h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#9CA3AF] bg-[#1F2429] px-3.5 py-2 rounded-lg border border-[#2D343C]">
            <Info className="w-4 h-4 text-[#F59E0B] shrink-0" />
            <span>Prices shown are reference figures pending live checkout activation.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-[#1F2429] border border-[#2D343C] rounded-xl p-6 flex flex-col justify-between hover:border-[#4B5563] transition-colors"
            >
              <div>
                <HardwareVisual type={product.hardwareType} />

                <div className="flex items-center justify-between gap-2 mt-5">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#06B6D4]">
                    {product.category}
                  </span>
                  <StatusBadge type="needs-confirmation" label={product.fitmentStatus} />
                </div>

                <h3 className="text-xl font-semibold text-white mt-2.5">{product.name}</h3>

                <p className="text-sm text-[#D1D5DB] leading-relaxed mt-2">
                  {product.benefit}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#2D343C]">
                <div className="flex items-baseline justify-between gap-2 mb-4">
                  <div>
                    <span className="text-lg font-semibold text-white">{product.referencePrice}</span>
                    <span className="block text-[11px] text-[#FCD34D] mt-0.5">{product.priceStatus}</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#9CA3AF]">{product.sourceRef.replace('Astrateq Product Catalogue ', '')}</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      onSelectProduct(product);
                      onNavigate('pdp');
                    }}
                    className="px-4 py-2.5 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-[#111316] font-semibold text-xs transition-colors text-center"
                  >
                    Check Availability
                  </button>
                  <button
                    onClick={() => {
                      onSelectProduct(product);
                      onNavigate('pdp');
                    }}
                    className="px-4 py-2.5 rounded-lg bg-[#171A1D] hover:bg-[#262C33] text-white border border-[#2D343C] font-medium text-xs transition-colors text-center"
                  >
                    Product Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. COMPACT SIDE-BY-SIDE COMPARISON PANEL */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
        <div className="bg-[#1F2429] border border-[#2D343C] rounded-xl overflow-hidden">
          <div className="p-6 border-b border-[#2D343C] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-white">Verified Catalogue Comparison</h2>
              <p className="text-xs text-[#9CA3AF] mt-0.5">
                Comparing confirmed catalogue fields only. Unsupplied technical specifications are explicitly marked.
              </p>
            </div>
            <StatusBadge type="not-supplied" label="Missing specs labeled 'Not provided'" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#2D343C] bg-[#171A1D]/60 text-xs uppercase tracking-wider text-[#9CA3AF]">
                  <th className="py-3.5 px-6 font-medium w-1/4">Attribute</th>
                  {PRODUCTS.map((p) => (
                    <th key={p.id} className="py-3.5 px-6 font-semibold text-white w-1/4">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2D343C] text-[#D1D5DB]">
                <tr>
                  <td className="py-3.5 px-6 font-medium text-[#9CA3AF]">Category</td>
                  {PRODUCTS.map((p) => (
                    <td key={p.id} className="py-3.5 px-6 text-white">{p.category}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-[#9CA3AF]">Primary Function</td>
                  {PRODUCTS.map((p) => (
                    <td key={p.id} className="py-3.5 px-6">{p.specs.primaryFunction}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-[#9CA3AF]">Reference Price</td>
                  {PRODUCTS.map((p) => (
                    <td key={p.id} className="py-3.5 px-6">
                      <span className="text-white font-medium">{p.referencePrice}</span>
                      <span className="block text-[11px] text-[#FCD34D]">Reference only</span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-[#9CA3AF]">Power &amp; Mounting Specs</td>
                  {PRODUCTS.map((p) => (
                    <td key={p.id} className="py-3.5 px-6 text-[#9CA3AF] italic">Not provided</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-[#9CA3AF]">Vehicle Fitment Status</td>
                  {PRODUCTS.map((p) => (
                    <td key={p.id} className="py-3.5 px-6">
                      <StatusBadge type="needs-confirmation" />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. WARM OFF-WHITE (#F5F5F3) EDITORIAL SECTION BREAK */}
      <section className="bg-[#F5F5F3] text-[#171A1D] border-y border-[#E5E5E0] py-16 my-6">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0E7490] font-semibold">
              The Astrateq Standard
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#171A1D] mt-1.5">
              Built on Clear Commitments, Not Inflated Claims
            </h2>
            <p className="text-base text-[#4B5563] mt-3 leading-relaxed">
              Automotive electronics require verified electrical and model compatibility. We publish only confirmed specifications and connect you directly with our Toronto team before checkout.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#171A1D] text-[#06B6D4] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#171A1D]">Verified Fitment Policy</h3>
              <p className="text-sm text-[#4B5563] mt-2 leading-relaxed">
                No automated guesswork. Vehicle compatibility is marked verified only when backed by documented model records.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#171A1D] text-[#06B6D4] flex items-center justify-center mb-4">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#171A1D]">Transparent Shipping</h3>
              <p className="text-sm text-[#4B5563] mt-2 leading-relaxed">
                Clear dispatch timelines and Canadian fulfillment details provided prior to order confirmation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#171A1D] text-[#06B6D4] flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#171A1D]">Written Warranty &amp; Returns</h3>
              <p className="text-sm text-[#4B5563] mt-2 leading-relaxed">
                Every hardware system includes written warranty terms and straightforward return eligibility rules.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#171A1D] text-[#06B6D4] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#171A1D]">Human Toronto Support</h3>
              <p className="text-sm text-[#4B5563] mt-2 leading-relaxed">
                Direct assistance from our Toronto, Ontario specialists for trim-level checks and fleet inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INTEGRATED SHOPPING ASSISTANT SECTION (INLINE, NOT FLOATING BUBBLE) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
        <div className="bg-[#1F2429] border border-[#2D343C] rounded-xl p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171A1D] border border-[#06B6D4]/40 text-xs text-[#67E8F9]">
              <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>Astrateq Catalogue Assistant</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Find the right technology for your drive.
            </h2>
            <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
              Ask questions grounded directly in our validated product catalogue and policy documentation. Missing specifications and unconfirmed vehicle matches are always disclosed clearly.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {[
                'Which driver-awareness product should I consider for my SUV?',
                'What’s the difference between these two products?',
                'What technology is relevant to an electric vehicle?'
              ].map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => onLaunchAssistantWithPrompt(prompt)}
                  className="text-left text-xs px-3.5 py-2 rounded-lg bg-[#171A1D] hover:bg-[#262C33] border border-[#2D343C] hover:border-[#06B6D4]/50 text-[#E5E7EB] transition-colors"
                >
                  “{prompt}”
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#171A1D] border border-[#2D343C] rounded-xl p-5 space-y-4">
            <div className="text-xs font-mono text-[#9CA3AF] uppercase tracking-wider">
              Grounded Discovery Workspace
            </div>
            <div className="p-3.5 rounded-lg bg-[#1F2429] border border-[#2D343C] text-xs text-[#D1D5DB] space-y-2">
              <div className="font-medium text-white">Source-Cited Answers Only</div>
              <p className="text-[#9CA3AF] leading-relaxed">
                Every recommendation cites its catalogue reference ID and distinguishes confirmed features from vehicle fitment that requires manual verification.
              </p>
            </div>
            <button
              onClick={() => onNavigate('assistant')}
              className="w-full py-3 px-4 rounded-lg bg-[#06B6D4] hover:bg-[#0891B2] text-[#111316] font-semibold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Open Astrateq Catalogue Assistant</span>
            </button>
          </div>
        </div>
      </section>

      {/* 8. FOUR AUDIENCE PATHS */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-10">
        <h2 className="text-xl font-semibold text-white mb-6">Explore Solutions by Driver Profile</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: 'Everyday Drivers',
              desc: 'In-cabin awareness coaching and dashcam clarity for daily commuting.',
              tag: 'ASTRA-AI Coach'
            },
            {
              title: 'EV Owners',
              desc: 'Battery state-of-health diagnostics and thermal trend tracking.',
              tag: 'EV Battery Suite'
            },
            {
              title: 'Automotive Enthusiasts',
              desc: 'Clean diagnostic telemetry without unverified aftermarket claims.',
              tag: 'Vehicle Diagnostics'
            },
            {
              title: 'Commercial Fleets',
              desc: 'Multi-vehicle awareness hardware and Toronto-supported deployment.',
              tag: 'FleetGuard Pro'
            }
          ].map((aud) => (
            <button
              key={aud.title}
              onClick={() => onNavigate('pdp')}
              className="text-left p-5 rounded-xl bg-[#1F2429] border border-[#2D343C] hover:border-[#06B6D4]/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-[#06B6D4]">{aud.tag}</span>
                <h3 className="text-base font-semibold text-white mt-1.5">{aud.title}</h3>
                <p className="text-xs text-[#9CA3AF] mt-2 leading-relaxed">{aud.desc}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-white font-medium mt-4">
                <span>View hardware</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#06B6D4]" />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* 9. NEWSLETTER SIGNUP */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
        <div className="bg-[#1F2429] border border-[#2D343C] rounded-xl p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-white">Product Updates &amp; Checkout Launch Notices</h2>
            <p className="text-sm text-[#9CA3AF] mt-1">
              Receive notifications when verified vehicle fitment records expand and live card checkout opens.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (newsletterEmail.trim()) {
                setNewsletterStatus('Subscribed. We will notify you when checkout and new fitment records go live.');
                setNewsletterEmail('');
              }
            }}
            className="w-full lg:w-auto flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full sm:w-72 h-11 px-4 rounded-lg bg-[#171A1D] border border-[#2D343C] text-sm text-white placeholder-[#6B7280] focus:border-[#06B6D4] focus:outline-none"
            />
            <button
              type="submit"
              className="h-11 px-6 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-[#111316] font-semibold text-sm transition-colors shrink-0"
            >
              Notify Me
            </button>
          </form>
        </div>
        {newsletterStatus && (
          <p className="text-xs text-[#67E8F9] mt-3 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>{newsletterStatus}</span>
          </p>
        )}
      </section>

      <StorefrontFooter onNavigate={onNavigate} />
    </div>
  );
}

// ============================================================================
// MOCK-UP 2 — AI AUTOMOTIVE SHOPPING ASSISTANT (SPLIT-PANE WORKSPACE)
// ============================================================================

function AssistantWorkspaceMockup({ onNavigate, onSelectProduct, initialPrompt }) {
  const defaultMessages = [
    {
      role: 'user',
      text: 'Which driver-awareness product should I consider for my SUV?'
    },
    {
      role: 'assistant',
      text: 'The supplied Astrateq catalogue describes the ASTRA-AI Driver Coach System as an in-cabin driving-monitor product designed for driver awareness. However, the available product information does not establish fitment for your particular SUV.',
      caveat: 'To confirm compatibility, please enter your exact Year, Make, Model, and Trim in our vehicle checker or contact our Toronto product support team.',
      source: 'Astrateq Product Catalogue (Ref #AG-01) • Policy: Fitment Verification Standard',
      recommendedIds: ['astra-ai-coach']
    }
  ];

  const [messages, setMessages] = useState(() => {
    if (initialPrompt && initialPrompt !== defaultMessages[0].text) {
      return [...defaultMessages];
    }
    return defaultMessages;
  });
  const [inputText, setInputText] = useState('');
  const [comparedIds, setComparedIds] = useState(['astra-ai-coach', 'fleetguard-ai-pro']);

  const handleAsk = (questionText) => {
    const q = (questionText || inputText).trim();
    if (!q) return;

    const lower = q.toLowerCase();
    let reply = {
      role: 'assistant',
      text: 'Based on the current Astrateq catalogue, we carry three core systems: ASTRA-AI Driver Coach System (driver awareness), FleetGuard AI Pro (commercial fleet intelligence), and EV Battery Intelligence Suite (EV battery diagnostics).',
      caveat: 'Specific technical specs not listed in the catalogue are marked as not specified, and vehicle fitment requires Year/Make/Model/Trim confirmation.',
      source: 'Astrateq Product Catalogue (Ref #AG-01, #AG-02, #AG-03)',
      recommendedIds: ['astra-ai-coach', 'fleetguard-ai-pro']
    };

    if (lower.includes('difference') || lower.includes('compare') || lower.includes('two')) {
      reply = {
        role: 'assistant',
        text: 'The ASTRA-AI Driver Coach System ($329.00 CAD reference) is categorized under Driver Technology for individual in-cabin driving awareness, whereas FleetGuard AI Pro ($599.00 CAD reference) is categorized under Fleet Intelligence for multi-vehicle commercial operations and incident logging.',
        caveat: 'Detailed electrical power draw, mounting dimensions, and exact OBD protocol lists are not specified in the available product information.',
        source: 'Astrateq Product Catalogue (Ref #AG-01 & Ref #AG-02)',
        recommendedIds: ['astra-ai-coach', 'fleetguard-ai-pro']
      };
      setComparedIds(['astra-ai-coach', 'fleetguard-ai-pro']);
    } else if (lower.includes('electric') || lower.includes('ev') || lower.includes('battery')) {
      reply = {
        role: 'assistant',
        text: 'For an electric vehicle, the catalogue lists the EV Battery Intelligence Suite ($449.00 CAD reference), which focuses on traction battery state-of-health and thermal diagnostics.',
        caveat: 'Supported EV makes and model years are not yet published in the public catalogue—please submit your EV’s Year, Make, Model, and Trim for confirmation.',
        source: 'Astrateq Product Catalogue (Ref #AG-03)',
        recommendedIds: ['ev-battery-suite', 'astra-ai-coach']
      };
      setComparedIds(['ev-battery-suite', 'astra-ai-coach']);
    } else if (lower.includes('fitment') || lower.includes('vehicle') || lower.includes('check')) {
      reply = {
        role: 'assistant',
        text: 'I cannot verify vehicle compatibility directly inside chat because our live fitment database is currently undergoing validation. No product should be assumed compatible without a verified record.',
        caveat: 'Use the 4-field Vehicle Compatibility Experience (Year / Make / Model / Trim) to log your vehicle for manual Toronto support confirmation.',
        source: 'Astrateq Fitment Governance Policy',
        recommendedIds: ['astra-ai-coach']
      };
    }

    setMessages((prev) => [...prev, { role: 'user', text: q }, reply]);
    setInputText('');
  };

  const comparedProducts = PRODUCTS.filter((p) => comparedIds.includes(p.id));

  return (
    <div className="w-full bg-[#171A1D] text-white min-h-screen flex flex-col">
      <StorefrontHeader
        activeView="assistant"
        onNavigate={onNavigate}
        onOpenAssistant={() => {}}
      />

      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 py-8 flex-1">
        {/* Top Workspace Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#2D343C]">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-[#06B6D4]/15 border border-[#06B6D4]/40 text-[#67E8F9] text-xs font-medium">
                Astrateq Catalogue Assistant
              </span>
              <span className="text-xs text-[#9CA3AF]">Grounded in validated catalogue records</span>
            </div>
            <h1 className="text-2xl font-semibold text-white mt-2">
              Automotive Product Discovery &amp; Verified Comparison
            </h1>
          </div>

          <button
            onClick={() => onNavigate('compatibility')}
            className="px-4 py-2.5 rounded-lg bg-[#1F2429] hover:bg-[#262C33] border border-[#06B6D4]/50 text-xs font-medium text-[#67E8F9] inline-flex items-center gap-2 self-start"
          >
            <Car className="w-4 h-4" />
            <span>Enter Year / Make / Model / Trim</span>
          </button>
        </div>

        {/* Split-Pane Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* LEFT PANE: CONVERSATION AREA (7 cols) */}
          <div className="lg:col-span-7 bg-[#1F2429] border border-[#2D343C] rounded-xl flex flex-col h-[700px]">
            <div className="p-4 border-b border-[#2D343C] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-[#D1D5DB]">
                <ShieldCheck className="w-4 h-4 text-[#06B6D4]" />
                <span>Answers cite catalogue sources and never fabricate vehicle fitment.</span>
              </div>
              <button
                onClick={() => setMessages(defaultMessages)}
                className="text-xs text-[#9CA3AF] hover:text-white flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Messages Feed */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <span className="text-[11px] font-mono text-[#9CA3AF] mb-1">
                    {msg.role === 'user' ? 'Customer Inquiry' : 'Astrateq Catalogue Assistant'}
                  </span>

                  {msg.role === 'user' ? (
                    <div className="max-w-lg rounded-xl rounded-tr-sm bg-[#2A3139] border border-[#3E4752] px-4 py-3 text-sm text-white">
                      {msg.text}
                    </div>
                  ) : (
                    <div className="max-w-xl rounded-xl rounded-tl-sm bg-[#171A1D] border border-[#2D343C] p-4 space-y-3">
                      <p className="text-sm text-[#E5E7EB] leading-relaxed">{msg.text}</p>

                      {msg.caveat && (
                        <div className="p-3 rounded-lg bg-[#1F2429] border-l-2 border-[#F59E0B] text-xs text-[#D1D5DB] leading-relaxed">
                          <strong className="text-[#FCD34D] font-medium block mb-0.5">Fitment &amp; Data Notice:</strong>
                          {msg.caveat}
                        </div>
                      )}

                      {msg.source && (
                        <div className="pt-2 border-t border-[#2D343C] flex items-center justify-between text-[11px] text-[#9CA3AF]">
                          <span className="flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-[#06B6D4]" />
                            <span>Source: {msg.source}</span>
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Suggested Questions + Input */}
            <div className="p-4 border-t border-[#2D343C] bg-[#171A1D]/70 space-y-3">
              <div className="flex flex-wrap gap-2">
                {[
                  'What’s the difference between these two products?',
                  'What technology is relevant to an electric vehicle?',
                  'Can you check fitment for my vehicle?'
                ].map((q) => (
                  <button
                    key={q}
                    onClick={() => handleAsk(q)}
                    className="text-xs px-3 py-1.5 rounded-full bg-[#1F2429] hover:bg-[#282F36] border border-[#2D343C] hover:border-[#06B6D4]/50 text-[#D1D5DB] transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAsk();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask about Astrateq catalogue products, specs, or policies..."
                  className="flex-1 h-11 px-4 rounded-lg bg-[#1F2429] border border-[#2D343C] text-sm text-white placeholder-[#6B7280] focus:border-[#06B6D4] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 h-11 rounded-lg bg-[#06B6D4] hover:bg-[#0891B2] text-[#111316] font-semibold text-sm transition-colors inline-flex items-center gap-2"
                >
                  <span>Ask</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT PANE: PRODUCT RECOMMENDATIONS & VERIFIED COMPARISON (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Referenced Product Card */}
            <div className="bg-[#1F2429] border border-[#2D343C] rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#06B6D4]">
                  Referenced Catalogue Item
                </span>
                <StatusBadge type="needs-confirmation" label="Fitment unconfirmed" />
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-28 shrink-0">
                  <HardwareVisual type={comparedProducts[0].hardwareType} />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-semibold text-white">{comparedProducts[0].name}</h3>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">{comparedProducts[0].catalogueSummary}</p>
                  <div className="pt-1">
                    <span className="text-sm font-semibold text-white">{comparedProducts[0].referencePrice}</span>
                    <span className="text-[11px] text-[#FCD34D] ml-2">Reference only</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <button
                  onClick={() => {
                    onSelectProduct(comparedProducts[0]);
                    onNavigate('pdp');
                  }}
                  className="py-2.5 px-3 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-[#111316] font-semibold text-xs text-center"
                >
                  View Product Details
                </button>
                <button
                  onClick={() => onNavigate('compatibility')}
                  className="py-2.5 px-3 rounded-lg bg-[#171A1D] hover:bg-[#262C33] border border-[#2D343C] text-white font-medium text-xs text-center"
                >
                  Check Vehicle Fitment
                </button>
              </div>
            </div>

            {/* Verified Fields Comparison Panel */}
            <div className="bg-[#1F2429] border border-[#2D343C] rounded-xl overflow-hidden">
              <div className="p-4 border-b border-[#2D343C] flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">Side-by-Side Verified Fields</h3>
                <span className="text-[11px] text-[#9CA3AF]">2 items selected</span>
              </div>

              <div className="divide-y divide-[#2D343C] text-xs">
                <div className="grid grid-cols-3 bg-[#171A1D]/60 font-semibold text-white">
                  <div className="p-3 text-[#9CA3AF] font-normal">Field</div>
                  {comparedProducts.map((p) => (
                    <div key={p.id} className="p-3">{p.name}</div>
                  ))}
                </div>

                <div className="grid grid-cols-3">
                  <div className="p-3 text-[#9CA3AF]">Category</div>
                  {comparedProducts.map((p) => (
                    <div key={p.id} className="p-3 text-[#E5E7EB]">{p.category}</div>
                  ))}
                </div>

                <div className="grid grid-cols-3">
                  <div className="p-3 text-[#9CA3AF]">Catalogue Role</div>
                  {comparedProducts.map((p) => (
                    <div key={p.id} className="p-3 text-[#D1D5DB]">{p.specs.primaryFunction}</div>
                  ))}
                </div>

                <div className="grid grid-cols-3">
                  <div className="p-3 text-[#9CA3AF]">Electrical / Dimensions</div>
                  {comparedProducts.map((p) => (
                    <div key={p.id} className="p-3 text-[#9CA3AF] italic">
                      Not specified in the available product information
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3">
                  <div className="p-3 text-[#9CA3AF]">SUV / Vehicle Match</div>
                  {comparedProducts.map((p) => (
                    <div key={p.id} className="p-3">
                      <StatusBadge type="needs-confirmation" label="Needs confirmation" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StorefrontFooter onNavigate={onNavigate} />
    </div>
  );
}

// ============================================================================
// MOCK-UP 3 — INTELLIGENT PRODUCT DETAIL PAGE (ASTRA-AI DRIVER COACH SYSTEM)
// ============================================================================

function ProductDetailMockup({ product, onNavigate, vehicleState, setVehicleState }) {
  const activeProduct = product || PRODUCTS[0];
  const [activeTab, setActiveTab] = useState('specs');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const hasVehicle = vehicleState.year && vehicleState.make && vehicleState.model;

  return (
    <div className="w-full bg-[#171A1D] text-white min-h-screen flex flex-col">
      <StorefrontHeader
        activeView="pdp"
        onNavigate={onNavigate}
        onOpenAssistant={() => onNavigate('assistant')}
      />

      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 py-8 flex-1">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#9CA3AF] mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-white">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#06B6D4]">{activeProduct.category}</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white">{activeProduct.name}</span>
        </nav>

        {/* Main 2-Column Product Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Large Detailed Hardware Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <HardwareVisual type={activeProduct.hardwareType} large />
            <div className="grid grid-cols-3 gap-3">
              {['Front Optical Housing', 'Cabin Mounting Profile', 'Diagnostic Interface'].map((angle, idx) => (
                <div
                  key={angle}
                  className={`p-3 rounded-lg bg-[#1F2429] border ${idx === 0 ? 'border-[#06B6D4]' : 'border-[#2D343C]'} text-xs text-[#9CA3AF] text-center`}
                >
                  {angle}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Validated Product Info, Compatibility Panel & Honest CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-[#06B6D4]">
                  {activeProduct.category}
                </span>
                <span className="text-[#4B5563]">•</span>
                <span className="text-xs font-mono text-[#9CA3AF]">{activeProduct.sourceRef}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                {activeProduct.name}
              </h1>

              <p className="text-base text-[#D1D5DB] leading-relaxed">
                {activeProduct.benefit}
              </p>
            </div>

            {/* Price with Explicit Reference-Only Disclosure */}
            <div className="p-4 rounded-xl bg-[#1F2429] border border-[#2D343C] flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-2xl font-semibold text-white">{activeProduct.referencePrice}</div>
                <div className="text-xs text-[#9CA3AF] mt-0.5">
                  Reference pricing only — final pricing confirmed prior to order fulfillment.
                </div>
              </div>
              <StatusBadge type="reference-price" label="Reference only" />
            </div>

            {/* Prominent Compatibility Panel */}
            <div className="p-5 rounded-xl bg-[#1F2429] border border-[#2D343C] space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#06B6D4]" />
                  <span>Vehicle Compatibility Status</span>
                </h2>
                <StatusBadge type="needs-confirmation" label="Needs confirmation" />
              </div>

              {hasVehicle ? (
                <div className="p-3.5 rounded-lg bg-[#171A1D] border border-[#2D343C] flex items-center justify-between gap-3">
                  <div className="text-xs">
                    <span className="text-[#9CA3AF] block">Selected Vehicle:</span>
                    <span className="text-white font-semibold text-sm">
                      {vehicleState.year} {vehicleState.make} {vehicleState.model} {vehicleState.trim}
                    </span>
                    <span className="text-[#FCD34D] block mt-1">
                      Status: Compatibility not yet confirmed in verified records.
                    </span>
                  </div>
                  <button
                    onClick={() => onNavigate('compatibility')}
                    className="text-xs text-[#06B6D4] hover:underline shrink-0"
                  >
                    Change vehicle
                  </button>
                </div>
              ) : (
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  Select your vehicle to check whether verified fitment documentation exists for your year, make, model, and trim.
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => onNavigate('compatibility')}
                  className="py-2.5 px-4 rounded-lg bg-[#171A1D] hover:bg-[#262C33] border border-[#06B6D4]/50 text-[#67E8F9] font-medium text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>Select Vehicle to Check</span>
                </button>
                <button
                  onClick={() => onNavigate('assistant')}
                  className="py-2.5 px-4 rounded-lg bg-[#171A1D] hover:bg-[#262C33] border border-[#2D343C] text-white font-medium text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#06B6D4]" />
                  <span>Ask About Fitment</span>
                </button>
              </div>
            </div>

            {/* Primary Purchase / Availability Actions (Honest Checkout State) */}
            <div className="space-y-3 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setInquirySubmitted(false);
                    setInquiryModalOpen(true);
                  }}
                  className="py-3.5 px-6 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-[#111316] font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>Check Availability</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setInquirySubmitted(false);
                    setInquiryModalOpen(true);
                  }}
                  className="py-3.5 px-6 rounded-lg bg-transparent hover:bg-[#1F2429] border border-[#4B5563] text-white font-medium text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#06B6D4]" />
                  <span>Contact Product Support</span>
                </button>
              </div>
              <p className="text-xs text-[#9CA3AF] flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                <span>Online card checkout is currently being prepared. Use Check Availability to reserve allocation or confirm fitment with Toronto support.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Structured Specifications & Policy Tabs */}
        <div className="mt-14 bg-[#1F2429] border border-[#2D343C] rounded-xl overflow-hidden">
          <div className="flex flex-wrap border-b border-[#2D343C] bg-[#171A1D]/60">
            {[
              { id: 'specs', label: 'Verified Specifications' },
              { id: 'install', label: 'Installation Guidance' },
              { id: 'warranty', label: 'Written Warranty & Returns' },
              { id: 'shipping', label: 'Canadian Shipping Information' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#06B6D4] text-white bg-[#1F2429]'
                    : 'border-transparent text-[#9CA3AF] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6 lg:p-8">
            {activeTab === 'specs' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-white">Technical Specification Record</h3>
                  <StatusBadge type="not-supplied" label="Unsupplied details explicitly labeled" />
                </div>
                <div className="divide-y divide-[#2D343C] border border-[#2D343C] rounded-lg overflow-hidden text-sm">
                  {Object.entries(activeProduct.specs).map(([key, val]) => {
                    const isMissing = val.toLowerCase().includes('not yet supplied') || val.toLowerCase().includes('not specified');
                    const formattedKey = key
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, (s) => s.toUpperCase());
                    return (
                      <div key={key} className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-[#171A1D]/40">
                        <div className="font-medium text-[#9CA3AF]">{formattedKey}</div>
                        <div className={`sm:col-span-2 ${isMissing ? 'text-[#9CA3AF] italic' : 'text-white'}`}>
                          {val}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'install' && (
              <div className="space-y-3 text-sm text-[#D1D5DB] max-w-3xl leading-relaxed">
                <h3 className="text-base font-semibold text-white">Installation Guidance</h3>
                <p>
                  Detailed trim-specific wiring and mounting instructions are provided upon fitment confirmation with our Toronto technical support desk. Do not obstruct airbag deployment zones or factory ADAS windshield sensors.
                </p>
              </div>
            )}

            {activeTab === 'warranty' && (
              <div className="space-y-3 text-sm text-[#D1D5DB] max-w-3xl leading-relaxed">
                <h3 className="text-base font-semibold text-white">Written Warranty &amp; Returns</h3>
                <p>
                  All Astrateq Gadgets hardware includes written limited warranty documentation covering manufacturing defects. Unopened hardware may be returned under our written return terms coordinated through Toronto support.
                </p>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-3 text-sm text-[#D1D5DB] max-w-3xl leading-relaxed">
                <h3 className="text-base font-semibold text-white">Canadian Shipping Information</h3>
                <p>
                  Orders are coordinated from our Toronto, Ontario operations hub with tracked Canadian carrier service. Exact dispatch timelines are confirmed during availability verification.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Availability / Support Modal */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-[#1F2429] border border-[#2D343C] rounded-xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Availability &amp; Fitment Inquiry</h3>
              <button onClick={() => setInquiryModalOpen(false)} className="text-[#9CA3AF] hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {!inquirySubmitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySubmitted(true);
                }}
                className="space-y-3.5 text-sm"
              >
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  Online card checkout is being finalized. Submit your vehicle details and our Toronto team will confirm stock availability and fitment for <strong className="text-white">{activeProduct.name}</strong>.
                </p>
                <div>
                  <label className="block text-xs text-[#9CA3AF] mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="driver@example.ca"
                    className="w-full h-10 px-3 rounded-lg bg-[#171A1D] border border-[#2D343C] text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#9CA3AF] mb-1">Vehicle (Year / Make / Model / Trim)</label>
                  <input
                    type="text"
                    defaultValue={hasVehicle ? `${vehicleState.year} ${vehicleState.make} ${vehicleState.model} ${vehicleState.trim}` : ''}
                    placeholder="e.g., 2024 Toyota RAV4 XLE"
                    required
                    className="w-full h-10 px-3 rounded-lg bg-[#171A1D] border border-[#2D343C] text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-[#111316] font-semibold text-sm"
                >
                  Send to Toronto Support
                </button>
              </form>
            ) : (
              <div className="py-4 space-y-3 text-center">
                <CheckCircle2 className="w-10 h-10 text-[#06B6D4] mx-auto" />
                <h4 className="text-base font-semibold text-white">Inquiry Logged</h4>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  Our Toronto product team has received your availability and fitment request for {activeProduct.name}.
                </p>
                <button
                  onClick={() => setInquiryModalOpen(false)}
                  className="px-5 py-2 rounded-lg bg-[#171A1D] border border-[#2D343C] text-xs text-white"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <StorefrontFooter onNavigate={onNavigate} />
    </div>
  );
}

// ============================================================================
// MOCK-UP 4 — VEHICLE COMPATIBILITY EXPERIENCE
// ============================================================================

function VehicleCompatibilityMockup({ onNavigate, vehicleState, setVehicleState }) {
  const [supportSent, setSupportSent] = useState(false);

  const steps = [
    { key: 'year', label: '1. Year', options: ['2026', '2025', '2024', '2023', '2022'] },
    { key: 'make', label: '2. Make', options: ['Toyota', 'Ford', 'Hyundai', 'Tesla', 'Honda'] },
    { key: 'model', label: '3. Model', options: ['RAV4', 'F-150', 'IONIQ 5', 'Model Y', 'CR-V'] },
    { key: 'trim', label: '4. Trim', options: ['LE / Base', 'XLE / Mid', 'Limited / AWD', 'Commercial Fleet'] }
  ];

  const completedCount = steps.filter((s) => Boolean(vehicleState[s.key])).length;

  return (
    <div className="w-full bg-[#171A1D] text-white min-h-screen flex flex-col">
      <StorefrontHeader
        activeView="compatibility"
        onNavigate={onNavigate}
        onOpenAssistant={() => onNavigate('assistant')}
      />

      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 py-10 flex-1 space-y-10">
        {/* Header */}
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#06B6D4]">
            Fitment Governance &amp; Verification
          </span>
          <h1 className="text-3xl font-semibold text-white">Vehicle Compatibility Experience</h1>
          <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
            Compatibility verdicts depend strictly on verified vehicle and electrical harness records. Select your configuration below to check current record status or request manual verification from Toronto support.
          </p>
        </div>

        {/* Progressive 4-Step Vehicle Selector */}
        <div className="bg-[#1F2429] border border-[#2D343C] rounded-xl p-6 lg:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-white">Configuration Progress:</span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#171A1D] border border-[#2D343C] text-[#06B6D4]">
                {completedCount} of 4 fields selected
              </span>
            </div>

            {completedCount > 0 && (
              <button
                onClick={() => {
                  setVehicleState({ year: '', make: '', model: '', trim: '' });
                  setSupportSent(false);
                }}
                className="text-xs text-[#9CA3AF] hover:text-white inline-flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Clear selections</span>
              </button>
            )}
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-[#171A1D] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#06B6D4] transition-all duration-300"
              style={{ width: `${(completedCount / 4) * 100}%` }}
            />
          </div>

          {/* 4 Interactive Selection Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step) => (
              <div key={step.key} className="bg-[#171A1D] border border-[#2D343C] rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                    {step.label}
                  </span>
                  {vehicleState[step.key] && (
                    <span className="text-xs text-[#06B6D4] font-medium">{vehicleState[step.key]}</span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {step.options.map((opt) => {
                    const isSelected = vehicleState[step.key] === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => {
                          setVehicleState({ ...vehicleState, [step.key]: opt });
                          setSupportSent(false);
                        }}
                        className={`px-3 py-1.5 rounded text-xs font-medium transition-colors border ${
                          isSelected
                            ? 'bg-[#06B6D4] text-[#111316] border-[#06B6D4] font-semibold'
                            : 'bg-[#1F2429] text-[#D1D5DB] border-[#2D343C] hover:border-[#4B5563]'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DUAL-STATE RESULTS SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* STATE 1: CURRENT CONCEPT STATE (HONEST LIVE STATUS) */}
          <div className="bg-[#1F2429] border border-[#2D343C] rounded-xl p-6 lg:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF]">
                  Live Storefront State
                </span>
                <StatusBadge type="needs-confirmation" label="Compatibility not yet confirmed" />
              </div>

              <h2 className="text-xl font-semibold text-white">
                {completedCount > 0
                  ? `${vehicleState.year || '[Year]'} ${vehicleState.make || '[Make]'} ${vehicleState.model || '[Model]'} ${vehicleState.trim || '[Trim]'}`
                  : 'No Vehicle Selected Yet'}
              </h2>

              <p className="text-sm text-[#D1D5DB] leading-relaxed">
                Astrateq Gadgets does not display automated vehicle/product matches until a verified fitment record is published. Submit your configuration below for manual confirmation by our Toronto support team.
              </p>

              <div className="p-4 rounded-lg bg-[#171A1D] border border-[#2D343C] space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Fitment Record Status:</span>
                  <span className="text-[#FCD34D] font-medium">Pending manual verification</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Support Escalation:</span>
                  <span className="text-white">Toronto, ON Technical Desk</span>
                </div>
              </div>
            </div>

            <div>
              {!supportSent ? (
                <button
                  onClick={() => setSupportSent(true)}
                  className="w-full py-3.5 px-5 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-[#111316] font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Request Manual Fitment Verification (Toronto Support)</span>
                </button>
              ) : (
                <div className="p-3.5 rounded-lg bg-[#06B6D4]/15 border border-[#06B6D4]/40 text-xs text-[#67E8F9] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Verification request logged for Toronto support review.</span>
                </div>
              )}
            </div>
          </div>

          {/* STATE 2: CONSPICUOUSLY LABELED ILLUSTRATIVE RESULT CARD */}
          <div className="bg-[#1F2429] border-2 border-dashed border-[#4B5563] rounded-xl p-6 lg:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Conspicuous Non-Claim Disclaimer Banner */}
              <div className="p-3 rounded-lg bg-[#F59E0B]/15 border border-[#F59E0B]/50 text-xs text-[#FCD34D] font-medium flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#F59E0B]" />
                <span>
                  ILLUSTRATIVE UI ONLY — Not a real fitment record or product compatibility claim. Shown to demonstrate future production traceability.
                </span>
              </div>

              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF]">
                  Future Production Card Blueprint
                </span>
                <StatusBadge type="verified" label="Verified fitment (Sample)" />
              </div>

              <h3 className="text-xl font-semibold text-white">
                ASTRA-AI Driver Coach System — Sample Match Layout
              </h3>

              <p className="text-sm text-[#D1D5DB] leading-relaxed">
                Once Astrateq’s verified fitment database is connected, confirmed matches will expose traceable evidence metadata directly on the result card:
              </p>

              <div className="p-4 rounded-lg bg-[#171A1D] border border-[#2D343C] space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Data Source ID:</span>
                  <span className="text-[#67E8F9]">SAMPLE-SRC-000 (Illustrative)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Last Verified Date:</span>
                  <span className="text-[#E5E7EB]">YYYY-MM-DD (Placeholder)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Harness Requirement:</span>
                  <span className="text-[#9CA3AF]">Information not supplied</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('pdp')}
              className="w-full py-3 px-5 rounded-lg bg-[#171A1D] hover:bg-[#262C33] border border-[#2D343C] text-white font-medium text-xs transition-colors"
            >
              Inspect Product Detail Blueprint
            </button>
          </div>
        </div>
      </div>

      <StorefrontFooter onNavigate={onNavigate} />
    </div>
  );
}

// ============================================================================
// MOCK-UP 5 — MOBILE ECOMMERCE EXPERIENCE (INTERACTIVE 390PX VIEWPORT)
// ============================================================================

function MobileEcommerceMockup({ onNavigate, onSelectProduct }) {
  const [mobileStep, setMobileStep] = useState(0);
  const [mobileVehicle, setMobileVehicle] = useState({ year: '', make: '', model: '', trim: '' });
  const [finderExpanded, setFinderExpanded] = useState(true);

  const stepConfig = [
    { key: 'year', label: 'Year', items: ['2026', '2025', '2024', '2023'] },
    { key: 'make', label: 'Make', items: ['Toyota', 'Ford', 'Hyundai', 'Tesla'] },
    { key: 'model', label: 'Model', items: ['RAV4', 'F-150', 'IONIQ 5', 'Model Y'] },
    { key: 'trim', label: 'Trim', items: ['Base', 'XLE / Mid', 'Limited', 'Fleet'] }
  ];

  const currentStep = stepConfig[mobileStep];

  return (
    <div className="w-full bg-[#121518] py-10 px-4 flex flex-col items-center">
      <div className="max-w-md text-center mb-6 space-y-1">
        <span className="text-xs font-mono uppercase tracking-wider text-[#06B6D4]">
          Mock-up 5 • 390px × 844px Mobile Viewport
        </span>
        <p className="text-xs text-[#9CA3AF]">
          Designed natively for one-handed touch ergonomics—no persistent floating chat bubbles obscuring product actions.
        </p>
      </div>

      {/* 390px Interactive Smartphone Frame */}
      <div className="w-[390px] max-w-full h-[844px] bg-[#171A1D] rounded-[42px] border-[8px] border-[#2B3138] shadow-2xl overflow-hidden flex flex-col relative">
        {/* Realistic iOS Status Bar */}
        <div className="h-11 px-6 bg-[#131619] flex items-center justify-between text-[11px] font-semibold text-white shrink-0 select-none">
          <span>3:46</span>
          <div className="w-24 h-5 bg-black rounded-full" />
          <div className="flex items-center gap-1.5 text-[10px]">
            <span>5G</span>
            <div className="w-5 h-2.5 border border-white/60 rounded-sm p-0.5">
              <div className="w-full h-full bg-white rounded-xs" />
            </div>
          </div>
        </div>

        {/* Compact Mobile Branded Header */}
        <div className="px-4 py-3 bg-[#171A1D] border-b border-[#2D343C] flex items-center justify-between shrink-0">
          <BrandLogo compact />
          <div className="flex items-center gap-1">
            <button
              onClick={() => onNavigate('assistant')}
              aria-label="Search"
              className="w-11 h-11 rounded-lg flex items-center justify-center text-[#D1D5DB] hover:bg-[#1F2429]"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('pdp')}
              aria-label="Inquiries"
              className="w-11 h-11 rounded-lg flex items-center justify-center text-[#D1D5DB] hover:bg-[#1F2429]"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Mobile Storefront Body */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6">
          {/* Mobile Hero */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-[#21272E] to-[#171A1D] border border-[#2D343C] space-y-4">
            <span className="inline-block text-[11px] font-mono text-[#06B6D4]">
              TORONTO SUPPORTED • CAD CATALOGUE
            </span>
            <h1 className="text-2xl font-semibold text-white leading-tight">
              Smarter technology for every drive.
            </h1>
            <p className="text-xs text-[#D1D5DB] leading-relaxed">
              Driver awareness, EV battery diagnostics, and fleet hardware with verified compatibility guidance.
            </p>
            <button
              onClick={() => onNavigate('pdp')}
              className="w-full h-12 rounded-xl bg-[#F59E0B] text-[#111316] font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span>Shop Automotive Technology</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Progressive Mobile 4-Step Vehicle Selection */}
          <div className="p-4 rounded-2xl bg-[#1F2429] border border-[#2D343C] space-y-3.5">
            <button
              onClick={() => setFinderExpanded(!finderExpanded)}
              className="w-full flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#06B6D4]" />
                <span className="text-sm font-semibold text-white">Select Your Vehicle</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-[#9CA3AF] transition-transform ${finderExpanded ? 'rotate-180' : ''}`} />
            </button>

            {finderExpanded && (
              <div className="space-y-3 pt-1">
                {/* Selected Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {stepConfig.map((s, idx) => (
                    <button
                      key={s.key}
                      onClick={() => setMobileStep(idx)}
                      className={`px-2.5 py-1 rounded text-[11px] font-medium border ${
                        mobileStep === idx
                          ? 'border-[#06B6D4] text-[#67E8F9] bg-[#06B6D4]/10'
                          : 'border-[#2D343C] text-[#9CA3AF] bg-[#171A1D]'
                      }`}
                    >
                      {mobileVehicle[s.key] || s.label}
                    </button>
                  ))}
                </div>

                {/* Large Touch Targets for Current Step */}
                <div className="grid grid-cols-2 gap-2">
                  {currentStep.items.map((choice) => (
                    <button
                      key={choice}
                      onClick={() => {
                        setMobileVehicle({ ...mobileVehicle, [currentStep.key]: choice });
                        if (mobileStep < 3) setMobileStep(mobileStep + 1);
                      }}
                      className={`h-11 rounded-lg text-xs font-medium border transition-colors ${
                        mobileVehicle[currentStep.key] === choice
                          ? 'bg-[#06B6D4] text-[#111316] border-[#06B6D4] font-semibold'
                          : 'bg-[#171A1D] text-white border-[#2D343C]'
                      }`}
                    >
                      {choice}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate('compatibility')}
                  className="w-full h-11 rounded-lg bg-[#06B6D4]/15 border border-[#06B6D4]/50 text-[#67E8F9] text-xs font-semibold"
                >
                  Check Fitment Status
                </button>
              </div>
            )}
          </div>

          {/* Horizontally Browsable Categories */}
          <div className="space-y-2.5">
            <span className="text-xs font-semibold text-white">Browse Categories</span>
            <div className="flex gap-2.5 overflow-x-auto pb-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => onNavigate('pdp')}
                  className="shrink-0 px-3.5 py-2.5 rounded-xl bg-[#1F2429] border border-[#2D343C] text-xs text-[#E5E7EB] font-medium"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Full-Width Mobile Product Cards with Explicit Status & Large Touch Targets */}
          <div className="space-y-4">
            <span className="text-xs font-semibold text-white block">Featured Systems</span>
            {PRODUCTS.map((p) => (
              <div key={p.id} className="p-4 rounded-2xl bg-[#1F2429] border border-[#2D343C] space-y-3.5">
                <HardwareVisual type={p.hardwareType} />
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-[#06B6D4]">{p.category}</span>
                  <StatusBadge type="needs-confirmation" label="Needs confirmation" />
                </div>
                <h3 className="text-base font-semibold text-white">{p.name}</h3>
                <p className="text-xs text-[#D1D5DB] leading-relaxed">{p.benefit}</p>

                <div className="pt-2 border-t border-[#2D343C] flex items-center justify-between">
                  <div>
                    <span className="text-base font-semibold text-white">{p.referencePrice}</span>
                    <span className="block text-[10px] text-[#FCD34D]">Reference only</span>
                  </div>
                  <button
                    onClick={() => {
                      onSelectProduct(p);
                      onNavigate('pdp');
                    }}
                    className="h-12 px-4 rounded-xl bg-[#F59E0B] text-[#111316] font-semibold text-xs"
                  >
                    Check Availability
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Inline AI Shopping Discovery Card (Not a floating overlay bubble) */}
          <div className="p-4 rounded-2xl bg-[#1F2429] border border-[#06B6D4]/40 space-y-3">
            <div className="flex items-center gap-2 text-xs text-[#67E8F9] font-medium">
              <Sparkles className="w-4 h-4 text-[#06B6D4]" />
              <span>Astrateq Catalogue Assistant</span>
            </div>
            <p className="text-xs text-[#D1D5DB] leading-relaxed">
              Compare verified specs or ask which hardware category fits your driving needs.
            </p>
            <button
              onClick={() => onNavigate('assistant')}
              className="w-full h-12 rounded-xl bg-[#06B6D4] text-[#111316] font-semibold text-xs"
            >
              Ask the Catalogue Assistant
            </button>
          </div>

          {/* Mobile Footer Note */}
          <div className="pt-2 pb-6 text-center text-[11px] text-[#6B7280] space-y-1">
            <p>Astrateq Gadgets Inc. • Toronto, Ontario, Canada</p>
            <p>Online card checkout in final preparation</p>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="h-6 bg-[#131619] flex items-center justify-center shrink-0">
          <div className="w-32 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN APPLICATION SHELL & TOP MOCK-UP SWITCHER BAR
// ============================================================================

export default function App() {
  const [activeMockup, setActiveMockup] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [vehicleState, setVehicleState] = useState({
    year: '',
    make: '',
    model: '',
    trim: ''
  });
  const [assistantSeedPrompt, setAssistantSeedPrompt] = useState('');

  const mockups = [
    { id: 'home', short: '1. Desktop Home', title: 'Mock-up 1: Complete Desktop Homepage', icon: Monitor },
    { id: 'assistant', short: '2. AI Assistant', title: 'Mock-up 2: Astrateq Catalogue Assistant', icon: MessageSquare },
    { id: 'pdp', short: '3. Product Detail', title: 'Mock-up 3: Intelligent Product Detail Page', icon: Package },
    { id: 'compatibility', short: '4. Compatibility', title: 'Mock-up 4: Vehicle Compatibility Experience', icon: Car },
    { id: 'mobile', short: '5. Mobile Store', title: 'Mock-up 5: Mobile Ecommerce Experience', icon: Smartphone }
  ];

  const handleLaunchAssistantWithPrompt = (prompt) => {
    setAssistantSeedPrompt(prompt);
    setActiveMockup('assistant');
  };

  return (
    <div className="min-h-screen bg-[#171A1D] text-white font-sans antialiased">
      {/* TOP PROTOTYPE SWITCHER BAR (DISTINCT FROM STOREFRONT HEADER) */}
      <div className="sticky top-0 z-50 bg-[#0D1013] border-b border-[#2D343C] shadow-lg">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-2.5 flex flex-col lg:flex-row lg:items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5">
            <span className="px-2 py-0.5 rounded bg-[#06B6D4] text-[#111316] text-[10px] font-bold uppercase tracking-wider">
              Design Blueprint
            </span>
            <span className="text-xs font-medium text-[#E5E7EB]">
              Astrateq Gadgets — <span className="text-[#9CA3AF]">“Precision in Motion” Interactive Prototype</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
            {mockups.map((m) => {
              const Icon = m.icon;
              const isActive = activeMockup === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveMockup(m.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all inline-flex items-center gap-1.5 shrink-0 border ${
                    isActive
                      ? 'bg-[#1F2429] text-[#67E8F9] border-[#06B6D4]'
                      : 'bg-transparent text-[#9CA3AF] border-transparent hover:text-white hover:bg-[#171A1D]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{m.short}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ACTIVE MOCK-UP CANVAS */}
      <main>
        {activeMockup === 'home' && (
          <DesktopHomepageMockup
            onNavigate={setActiveMockup}
            onSelectProduct={setSelectedProduct}
            vehicleState={vehicleState}
            setVehicleState={setVehicleState}
            onLaunchAssistantWithPrompt={handleLaunchAssistantWithPrompt}
          />
        )}

        {activeMockup === 'assistant' && (
          <AssistantWorkspaceMockup
            onNavigate={setActiveMockup}
            onSelectProduct={setSelectedProduct}
            initialPrompt={assistantSeedPrompt}
          />
        )}

        {activeMockup === 'pdp' && (
          <ProductDetailMockup
            product={selectedProduct}
            onNavigate={setActiveMockup}
            vehicleState={vehicleState}
            setVehicleState={setVehicleState}
          />
        )}

        {activeMockup === 'compatibility' && (
          <VehicleCompatibilityMockup
            onNavigate={setActiveMockup}
            vehicleState={vehicleState}
            setVehicleState={setVehicleState}
          />
        )}

        {activeMockup === 'mobile' && (
          <MobileEcommerceMockup
            onNavigate={setActiveMockup}
            onSelectProduct={setSelectedProduct}
          />
        )}
      </main>
    </div>
  );
}