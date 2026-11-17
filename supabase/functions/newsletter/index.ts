import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Newsletter email service is not configured." }),
        { status: 503, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const body = await req.json().catch(() => null);
    const email = typeof body?.email === "string" ? body.email.trim() : "";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid email address." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const audienceId = Deno.env.get("RESEND_AUDIENCE_ID");
    if (audienceId) {
      const audienceResponse = await fetch(
        `https://api.resend.com/audiences/${encodeURIComponent(audienceId)}/contacts`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            unsubscribed: false,
          }),
        },
      );

      if (!audienceResponse.ok) {
        console.error("Resend audience signup failed with status:", audienceResponse.status);
        return new Response(
          JSON.stringify({ error: "Unable to complete newsletter signup right now." }),
          { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }

      const result = await audienceResponse.json().catch(() => ({}));
      return new Response(
        JSON.stringify({ success: true, id: result?.id ?? null }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const toEmail = Deno.env.get("CONTACT_TO_EMAIL") || "support@astrateq.com";
    const fromEmail =
      Deno.env.get("RESEND_FROM_EMAIL") || "Astrateq Updates <noreply@astrateqgadgets.com>";

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: "[Storefront Newsletter] New Subscriber Request",
        text: `New newsletter signup request from: ${email}`,
        html: `<p>New newsletter signup request from: <strong>${escapeHtml(email)}</strong></p>`,
      }),
    });

    if (!resendResponse.ok) {
      console.error("Resend newsletter delivery failed with status:", resendResponse.status);
      return new Response(
        JSON.stringify({ error: "Unable to complete newsletter signup right now." }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const result = await resendResponse.json().catch(() => ({}));
    return new Response(
      JSON.stringify({ success: true, id: result?.id ?? null }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("Newsletter Edge Function error:", err instanceof Error ? err.message : "Unknown error");
    return new Response(
      JSON.stringify({ error: "Unexpected error processing newsletter request." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
