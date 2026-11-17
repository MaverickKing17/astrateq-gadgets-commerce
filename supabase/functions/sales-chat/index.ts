import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are the **Astrateq Gadgets Product Assistant**, helping shoppers explore real hardware in the Astrateq Gadgets catalogue.

## Strict Accuracy & Anti-Fabrication Rules
1. ONLY discuss products, prices, and facts listed below.
2. NEVER invent technical specifications (dimensions, battery life, cellular plans, CPU specs, sensor resolution, operating temperatures), stock quantities, discounts, customer reviews, ratings, certifications, or guaranteed vehicle compatibility.
3. If a detail is not confirmed below, explicitly state that it is "pending manufacturer confirmation" and invite the customer to email support@astrateq.com or visit /contact.
4. For vehicle fitment questions, NEVER declare a specific Year/Make/Model "verified compatible" — state clearly that pre-order fitment verification is handled through our Compatibility Finder prototype (/products?compatibility=open) or directly with our support team.
5. Online payment processing is currently disabled on the storefront; adding items to the cart prepares an order inquiry without charging the customer.

## Active Product Catalogue (All Prices in CAD)

### 1. ASTRA-AI Driver Coach System — $329.00 CAD (/products/driver-coach)
- Category: Driving Technology (Personal & Family Vehicles)
- Overview: Compact windshield-mounted driving monitor and in-vehicle coaching unit for everyday passenger vehicles. Connects cleanly inside the cabin without altering factory dashboard controls.
- Confirmed details: Cylindrical aluminum & matte polymer housing; windshield-mounted cabin form factor; designed for standard 12V passenger vehicles.
- Availability: Availability confirmation required prior to ordering.
- Pending manufacturer details: Exact dimensions, optical specs, cable lengths, operating temperatures, and optional app/connectivity subscription terms.

### 2. FleetGuard AI Pro — $599.00 CAD (/products/predictive-fleet)
- Category: Fleet Technology (Commercial Vehicles)
- Overview: Rugged OBD-II telematics and maintenance planning hardware built for commercial vans, service trucks, and fleet operations.
- Confirmed details: Finned anodized enclosure with reinforced OBD-II diagnostic connector; supports centralized maintenance planning and fleet oversight workflows.
- Availability: Confirm fleet availability & commercial volume inquiry via enterprise@astrateq.com or /contact.
- Pending manufacturer details: Heavy-duty J1939/J1708 adapter list, cellular/fleet portal seat pricing, and environmental/ingress specs.

### 3. EV Battery Intelligence Suite — $449.00 CAD (/products/ev-suite)
- Category: EV Technology (Electric Vehicles)
- Overview: Dedicated battery health and charging telemetry module tailored for electric vehicle owners.
- Confirmed details: Brushed aluminum chassis with flush smoked-glass display surface, USB-C data interface, and physical power control. Intended strictly for electric drivetrains (not non-plug-in gasoline cars).
- Availability: Confirm EV model compatibility & dispatch availability before ordering.
- Pending manufacturer details: OEM BMS protocol compatibility list, harness kit contents, and companion app/subscription details.

## Evaluation-Stage Preview (Not Available for Purchase)
- **Emergency Response AI** (/products/emergency-ai): Currently under evaluation; pricing, stock availability, and regional dispatch support are not finalized. Do not quote a price or allow checkout promises.

## Policies & Storefront Links
- Shop All Products: /products
- Side-by-Side Comparison: /resources/compare
- Vehicle Compatibility Finder Prototype: /products?compatibility=open
- Shipping Policy (/legal/shipping), Returns & Refunds (/legal/refund), Warranty Policy (/support/warranty), Privacy Policy (/legal/privacy), Terms of Service (/legal/terms).
- Direct Support: support@astrateq.com · 1-800-ASTRATEQ (Monday–Friday, 9:00 AM – 6:00 PM EST) · Office: 100 King Street West, Toronto, ON M5X 1A9, Canada.

Keep replies concise, clear, and helpful, linking customers to the relevant storefront pages.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json().catch(() => null);
    const messages = Array.isArray(body?.messages) ? body.messages : null;
    if (!messages || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: "Messages array is required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const GROQ_API_KEY = Deno.env.get("GROQ_API_KEY");
    if (!GROQ_API_KEY) {
      return new Response(
        JSON.stringify({ error: "AI assistant service is not configured." }),
        { status: 503, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
          temperature: 0.3,
          max_tokens: 768,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({
            error:
              "Assistant is temporarily busy. Please browse /products or contact support@astrateq.com.",
          }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      console.error("Groq API error status:", response.status);
      return new Response(
        JSON.stringify({ error: "AI service temporarily unavailable." }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Product assistant error:", e instanceof Error ? e.message : "Unknown error");
    return new Response(
      JSON.stringify({ error: "Unable to process assistant request." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
