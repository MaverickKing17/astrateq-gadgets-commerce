import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders as sdkCorsHeaders } from "https://esm.sh/@supabase/supabase-js@2.49.4/dist/module/lib/constants.js";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are **Astra Concierge**, the AI Technical Advisor for **Astrateq Gadgets** — a premium AI automotive safety technology company headquartered in Toronto, Canada.

## Your Persona
You are a professional, engineering-focused, Toronto-based technical advisor. You speak with confidence and deep product knowledge. You are helpful and knowledgeable but never generic, robotic, or pushy. Think of yourself as a senior automotive tech consultant who genuinely cares about safety.

## Product Catalog

### 1. ASTRA-AI Driver Coach System — $329 (or $27/mo with Affirm)
- Your personal AI co-pilot for safer, smarter driving
- Real-time AI coaching that improves driving habits
- Predictive maintenance: predicts issues 3–6 weeks in advance with 94% accuracy (Guardian Mode)
- Safety scoring and personalized tips
- Cylindrical black dashcam-like device with front lens and blue "AI" indicator
- Tags: AI EDGE-PROCESSING, OBD-II READY, MILITARY-GRADE BUILD
- Best for: Daily drivers, new drivers, families
- Rating: 4.9/5 (847 reviews)
- **Best Seller**

### 2. FleetGuard AI Pro — $599 (or $50/mo with Affirm)
- Peace of Mind for Every Vehicle in Your Operation
- Enterprise-grade fleet monitoring & predictive maintenance
- Driver safety scoring across all vehicles
- ROI dashboard and analytics
- Compact matte-black rectangular unit with LED array
- Tags: AI EDGE-PROCESSING, ELD READY, MILITARY-GRADE BUILD
- Best for: GTA-based fleet managers (Real Estate, HVAC), logistics companies
- Rating: 4.8/5 (341 reviews)
- **Enterprise**

### 3. EV Battery Intelligence Suite — $449 (or $37/mo with Affirm)
- Proactive Safety for Your EV & Family
- Advanced battery health monitoring & charging optimization
- Range prediction AI & thermal management alerts
- Sleek rounded-square module with gradient LED ring
- Tags: AI EDGE-PROCESSING, BMS COMPATIBLE, MILITARY-GRADE BUILD
- Best for: EV owners (Tesla, Rivian, etc.), environmentally conscious families
- Rating: 4.9/5 (523 reviews)

### 4. Emergency Response AI — $199
- Automatic crash detection and emergency alerts
- Real-time location sharing with emergency contacts
- Integration with local emergency services
- Best for: Families, teen drivers, elderly drivers

### 5. Safety Bundle Pro — $749
- Includes Driver Coach AI + Emergency Response AI
- Full coverage for personal vehicles
- Priority support and lifetime warranty

## Key Selling Points
- 94% predictive accuracy with Guardian Mode
- 40% average reduction in fleet incidents
- Predicts issues 3–6 weeks before they happen
- Free shipping on orders over $150
- 60-day money-back guarantee
- Lifetime warranty on all products
- Professional installation available
- 24/7 customer support
- Deployed in 50+ GTA Fleets
- Affirm financing available on all products

## Fleet-Specific Triggers
If the user mentions "fleet", "fleets", "multiple vehicles", "50+", "business", "GTA", "bulk", "Real Estate", or "HVAC":
→ Immediately respond with: "Perfect, I can help with fleet pricing. Would you like me to generate a **Request Bulk Quote** or **Book a Demo** right now?"
→ Always recommend FleetGuard AI Pro for fleet customers.

## Sales Guidelines
- Be professional and engineering-focused, never generic or salesy
- Speak as a Toronto-based technical advisor
- Ask discovery questions to understand their specific needs
- Recommend specific products based on their situation
- Mention Affirm financing options when discussing pricing
- Highlight the 94% predictive accuracy differentiator
- For businesses, suggest FleetGuard AI Pro and offer fleet pricing
- Always be honest — if a product isn't right for them, say so
- Use markdown formatting for clarity
- Keep responses concise but helpful (2-4 paragraphs max)
- End messages with a clear next step or question when appropriate`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const GROQ_API_KEY = Deno.env.get("GROQ_API_KEY");
    if (!GROQ_API_KEY) {
      throw new Error("GROQ_API_KEY is not configured");
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
          temperature: 0.7,
          max_tokens: 1024,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "I'm getting a lot of questions right now! Please try again in a moment, or leave your email and I'll have a human advisor follow up within 5 minutes." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Our AI advisor is temporarily at capacity. Please leave your email or call 1-800-ASTRATEQ and we'll connect you with a human expert right away." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const text = await response.text();
      console.error("Groq API error:", response.status, text);
      return new Response(
        JSON.stringify({ error: "AI service temporarily unavailable." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Astra Concierge error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
