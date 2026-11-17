import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Bot,
  User,
  RefreshCw,
  AlertCircle,
  ArrowRight,
  GitCompare,
  Car,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { storeConfig } from "@/config/store";

type Msg = { role: "user" | "assistant"; content: string };

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL?.trim();
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim();
const CHAT_URL = SUPABASE_URL ? `${SUPABASE_URL}/functions/v1/sales-chat` : "";
const IS_AI_CONFIGURED = Boolean(CHAT_URL && SUPABASE_KEY);

async function streamChat({
  messages,
  onDelta,
  onDone,
  onError,
}: {
  messages: Msg[];
  onDelta: (text: string) => void;
  onDone: () => void;
  onError: (error: string) => void;
}) {
  if (!IS_AI_CONFIGURED) {
    onError(
      `AI product assistant is not configured in this environment. Browse the catalogue or contact ${storeConfig.support.email}.`
    );
    return;
  }

  const resp = await fetch(CHAT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SUPABASE_KEY}`,
    },
    body: JSON.stringify({ messages }),
  });

  if (!resp.ok) {
    const data = await resp.json().catch(() => ({}));
    onError(data.error || "Unable to reach the assistant right now.");
    return;
  }

  if (!resp.body) {
    onError("No response stream returned.");
    return;
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let textBuffer = "";
  let streamDone = false;

  while (!streamDone) {
    const { done, value } = await reader.read();
    if (done) break;
    textBuffer += decoder.decode(value, { stream: true });

    let newlineIndex: number;
    while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
      let line = textBuffer.slice(0, newlineIndex);
      textBuffer = textBuffer.slice(newlineIndex + 1);

      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (line.startsWith(":") || line.trim() === "") continue;
      if (!line.startsWith("data: ")) continue;

      const jsonStr = line.slice(6).trim();
      if (jsonStr === "[DONE]") {
        streamDone = true;
        break;
      }

      try {
        const parsed = JSON.parse(jsonStr);
        const content = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (content) onDelta(content);
      } catch {
        textBuffer = line + "\n" + textBuffer;
        break;
      }
    }
  }

  if (textBuffer.trim()) {
    for (let raw of textBuffer.split("\n")) {
      if (!raw) continue;
      if (raw.endsWith("\r")) raw = raw.slice(0, -1);
      if (raw.startsWith(":") || raw.trim() === "") continue;
      if (!raw.startsWith("data: ")) continue;
      const jsonStr = raw.slice(6).trim();
      if (jsonStr === "[DONE]") continue;
      try {
        const parsed = JSON.parse(jsonStr);
        const content = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (content) onDelta(content);
      } catch {
        // Ignore partial trailing SSE frame
      }
    }
  }

  onDone();
}

const quickActions = [
  {
    label: "Compare active products",
    message: "Compare your active hardware products and CAD prices.",
  },
  {
    label: "Driver Coach overview",
    message: "What is confirmed about the ASTRA-AI Driver Coach System?",
  },
  {
    label: "Fleet hardware",
    message: "What should commercial fleet operators know about FleetGuard AI Pro?",
  },
  {
    label: "EV Battery Suite",
    message: "What is the EV Battery Intelligence Suite and how do I check compatibility?",
  },
];

export function AstraBotChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [lastFailedMsg, setLastFailedMsg] = useState<string | null>(null);
  const [pendingPrompt, setPendingPrompt] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handleOpenEvent = (event: Event) => {
      const custom = event as CustomEvent<{ prompt?: string }>;
      setIsOpen(true);
      if (custom.detail?.prompt) {
        setPendingPrompt(custom.detail.prompt);
      }
    };
    window.addEventListener("astrateq:open-assistant", handleOpenEvent);
    return () => {
      window.removeEventListener("astrateq:open-assistant", handleOpenEvent);
    };
  }, []);

  useEffect(() => {
    if (isOpen && IS_AI_CONFIGURED && !hasGreeted) {
      setMessages([
        {
          role: "assistant",
          content:
            "Hello! I can help compare Astrateq's active hardware catalogue in CAD, explain confirmed specifications, and point you to policy or compatibility pages. Please verify final vehicle fitment before ordering.",
        },
      ]);
      setHasGreeted(true);
    }
    if (isOpen && IS_AI_CONFIGURED) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, hasGreeted]);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading || !IS_AI_CONFIGURED) return;

      const userMsg: Msg = { role: "user", content: text.trim() };
      const updatedMessages = [...messages, userMsg];
      setMessages(updatedMessages);
      setInput("");
      setIsLoading(true);

      let assistantSoFar = "";
      const upsertAssistant = (chunk: string) => {
        assistantSoFar += chunk;
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last?.role === "assistant" && prev.length > updatedMessages.length) {
            return prev.map((m, i) =>
              i === prev.length - 1 ? { ...m, content: assistantSoFar } : m
            );
          }
          return [
            ...prev.slice(0, updatedMessages.length),
            { role: "assistant", content: assistantSoFar },
          ];
        });
      };

      setLastFailedMsg(null);
      try {
        await streamChat({
          messages: updatedMessages,
          onDelta: (chunk) => upsertAssistant(chunk),
          onDone: () => setIsLoading(false),
          onError: (error) => {
            setLastFailedMsg(text.trim());
            setMessages((prev) => [
              ...prev,
              { role: "assistant", content: error },
            ]);
            setIsLoading(false);
          },
        });
      } catch {
        setLastFailedMsg(text.trim());
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Connection error. Please try again." },
        ]);
        setIsLoading(false);
      }
    },
    [messages, isLoading]
  );

  useEffect(() => {
    if (isOpen && IS_AI_CONFIGURED && hasGreeted && pendingPrompt && !isLoading) {
      const next = pendingPrompt;
      setPendingPrompt(null);
      sendMessage(next);
    }
  }, [isOpen, hasGreeted, pendingPrompt, isLoading, sendMessage]);

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="hidden md:flex fixed bottom-6 right-6 z-[60] h-12 px-4 rounded-full bg-electric-cyan text-midnight-charcoal shadow-xl border border-midnight-charcoal/20 items-center gap-2 hover:bg-electric-cyan/90 transition-colors font-semibold text-sm"
            aria-label={
              IS_AI_CONFIGURED
                ? "Open AI Shopping Assistant"
                : "Open Shopping Assistant Info"
            }
          >
            <Bot className="w-5 h-5" />
            <span>{IS_AI_CONFIGURED ? "Product Assistant" : "Shopping Help"}</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-label="Astrateq Product Assistant"
            className="dark fixed inset-x-3 bottom-3 md:inset-auto md:bottom-6 md:right-6 z-[60] md:w-[390px] h-[min(520px,calc(100vh-4rem))] rounded-2xl overflow-hidden shadow-2xl border border-border flex flex-col bg-card text-foreground"
          >
            <div className="bg-midnight-charcoal border-b border-border px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-electric-cyan/15 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-electric-cyan" />
                </div>
                <div>
                  <h3 className="text-sm font-heading font-semibold text-pure-white">
                    Product Discovery Assistant
                  </h3>
                  <p className="text-[11px] text-muted-foreground leading-tight">
                    {IS_AI_CONFIGURED
                      ? "Connected · Grounded in catalogue data"
                      : "Prototype · AI Backend Not Connected"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close assistant"
                className="p-1.5 rounded-lg hover:bg-slate-grey text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {!IS_AI_CONFIGURED ? (
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                <div className="rounded-xl border border-border bg-background p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    <p className="font-semibold text-foreground mb-1">
                      Optional AI Assistant Not Connected
                    </p>
                    <p>
                      Automated AI responses are inactive until Supabase Edge Function{" "}
                      <code className="text-foreground">sales-chat</code> (with{" "}
                      <code className="text-foreground">GROQ_API_KEY</code>) and{" "}
                      <code className="text-foreground">VITE_SUPABASE_URL</code> /{" "}
                      <code className="text-foreground">VITE_SUPABASE_PUBLISHABLE_KEY</code>{" "}
                      are configured.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  Browse, compare, or verify fitment directly without AI:
                </p>

                <div className="space-y-2">
                  <Link
                    to="/products"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-lg border border-border bg-background hover:border-primary/50 text-sm font-medium transition-colors"
                  >
                    <span>Browse & Search Catalogue</span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </Link>
                  <Link
                    to="/resources/compare"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-lg border border-border bg-background hover:border-primary/50 text-sm font-medium transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <GitCompare className="w-4 h-4 text-primary" />
                      Compare Hardware Specs
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </Link>
                  <Link
                    to="/products?compatibility=open"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-lg border border-border bg-background hover:border-primary/50 text-sm font-medium transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Car className="w-4 h-4 text-primary" />
                      Vehicle Compatibility Finder
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </Link>
                  <Link
                    to={
                      pendingPrompt
                        ? `/contact?subject=${encodeURIComponent(pendingPrompt)}`
                        : "/contact"
                    }
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-lg border border-border bg-background hover:border-primary/50 text-sm font-medium transition-colors"
                  >
                    <span>
                      {pendingPrompt
                        ? "Send This Question to Support"
                        : "Contact Support Team"}
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </Link>
                </div>

                {pendingPrompt && (
                  <p className="text-xs text-muted-foreground pt-1">
                    Selected question:{" "}
                    <span className="text-foreground">&ldquo;{pendingPrompt}&rdquo;</span>
                  </p>
                )}
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scroll-smooth">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex gap-2 ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {msg.role === "assistant" && (
                        <div className="w-6 h-6 rounded-full bg-electric-cyan/15 flex items-center justify-center shrink-0 mt-1">
                          <Bot className="w-3.5 h-3.5 text-electric-cyan" />
                        </div>
                      )}
                      <div
                        className={`max-w-[82%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "bg-electric-cyan text-midnight-charcoal font-medium"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        {msg.role === "assistant" ? (
                          <div className="prose prose-sm prose-invert max-w-none [&_p]:mb-1.5 [&_p:last-child]:mb-0 [&_ul]:mt-1 [&_li]:text-sm">
                            <ReactMarkdown>{msg.content}</ReactMarkdown>
                          </div>
                        ) : (
                          msg.content
                        )}
                      </div>
                      {msg.role === "user" && (
                        <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0 mt-1">
                          <User className="w-3.5 h-3.5 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  ))}

                  {messages.length <= 1 && !isLoading && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {quickActions.map((action) => (
                        <button
                          key={action.label}
                          type="button"
                          onClick={() => sendMessage(action.message)}
                          className="text-xs px-3 py-1.5 rounded-lg border border-border text-primary hover:bg-primary/10 transition-colors"
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {lastFailedMsg && !isLoading && (
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setLastFailedMsg(null);
                          sendMessage(lastFailedMsg);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-border text-primary hover:bg-primary/10 transition-colors"
                      >
                        <RefreshCw className="w-3 h-3" />
                        Retry
                      </button>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                <div className="shrink-0 border-t border-border px-3 py-3 bg-card">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      sendMessage(input);
                    }}
                    className="flex items-center gap-2"
                  >
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask about Astrateq products..."
                      aria-label="Ask about Astrateq products"
                      className="flex-1 bg-background border border-border rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
                      disabled={isLoading}
                    />
                    <Button
                      type="submit"
                      size="sm"
                      className="rounded-lg w-9 h-9 p-0 shrink-0"
                      disabled={!input.trim() || isLoading}
                      aria-label="Send message"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                  <p className="text-[10px] text-muted-foreground text-center mt-1.5">
                    Uses active catalogue data · Confirm vehicle fitment before ordering
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
