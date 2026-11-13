import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Sparkles, ShoppingCart, RefreshCw, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";

type Msg = { role: "user" | "assistant"; content: string };

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const CHAT_URL = SUPABASE_URL ? `${SUPABASE_URL}/functions/v1/sales-chat` : "";

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
  if (!CHAT_URL || !SUPABASE_KEY) {
    onError("AI chat service is not configured in this environment. Please visit our Contact page or call 1-800-ASTRATEQ.");
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
    onError(data.error || "Something went wrong. Please try again.");
    return;
  }

  if (!resp.body) {
    onError("No response stream.");
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

  // Final flush
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
        // Ignore trailing partial SSE fragments on stream close
      }
    }
  }

  onDone();
}

const quickActions = [
  { label: "Compare products", message: "Can you compare your products and help me choose?" },
  { label: "Best for families", message: "What's the best product for a family with teen drivers?" },
  { label: "Fleet pricing", message: "I manage a fleet of 50+ vehicles. What do you recommend?" },
  { label: "EV solutions", message: "I just got an electric vehicle. What do you offer for EVs?" },
];

export function AstraBotChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [lastFailedMsg, setLastFailedMsg] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setMessages([
        {
          role: "assistant",
          content:
            "Hey there! 👋 I'm **Astra Concierge**, your personal Toronto-based technical advisor for Astrateq Gadgets. Whether you're looking for AI driving safety, EV battery intelligence, or fleet management — I've got you covered.\n\nWhat can I help you with today?",
        },
      ]);
      setHasGreeted(true);
    }
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, hasGreeted]);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading) return;

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
          return [...prev.slice(0, updatedMessages.length), { role: "assistant", content: assistantSoFar }];
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
              { role: "assistant", content: `⚠️ ${error}` },
            ]);
            setIsLoading(false);
          },
        });
      } catch (e) {
        console.error(e);
        setLastFailedMsg(text.trim());
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "⚠️ Connection error. Please try again." },
        ]);
        setIsLoading(false);
      }
    },
    [messages, isLoading]
  );

  return (
    <>
      {/* FAB */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-[60] w-16 h-16 rounded-full bg-safety-ember text-midnight-charcoal shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group"
            aria-label="Open AI Sales Chat"
          >
            <Bot className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-electric-cyan rounded-full animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="dark fixed bottom-6 right-6 z-[60] w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-4rem)] rounded-2xl overflow-hidden shadow-2xl border border-border flex flex-col bg-card text-foreground"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-safety-ember to-safety-ember-hover px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-midnight-charcoal/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-midnight-charcoal" />
                </div>
                <div>
                  <h3 className="text-sm font-heading font-semibold text-midnight-charcoal">
                    Astra Concierge
                  </h3>
                  <p className="text-[10px] text-midnight-charcoal/70 leading-tight">
                    Product Support • Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="p-1.5 rounded-lg hover:bg-midnight-charcoal/10 text-midnight-charcoal transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scroll-smooth">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full bg-safety-ember/15 flex items-center justify-center shrink-0 mt-1">
                      <Bot className="w-3.5 h-3.5 text-safety-ember" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-safety-ember text-midnight-charcoal rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <div className="prose prose-sm max-w-none [&_p]:mb-1.5 [&_p:last-child]:mb-0 [&_ul]:mt-1 [&_li]:text-sm [&_strong]:text-foreground">
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

              {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                <div className="flex gap-2 items-start">
                  <div className="w-6 h-6 rounded-full bg-safety-ember/15 flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5 text-safety-ember" />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}

              {/* Quick actions — only show if no user messages yet */}
              {messages.length <= 1 && !isLoading && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {quickActions.map((action) => (
                    <button
                      key={action.label}
                      onClick={() => sendMessage(action.message)}
                      className="text-xs px-3 py-1.5 rounded-full border border-safety-ember/30 text-safety-ember hover:bg-safety-ember/10 transition-colors"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Retry button when last message failed */}
              {lastFailedMsg && !isLoading && (
                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() => {
                      setLastFailedMsg(null);
                      setMessages((prev) => prev.filter((m) => !m.content.startsWith("⚠️")));
                      sendMessage(lastFailedMsg);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-safety-ember/30 text-safety-ember hover:bg-safety-ember/10 transition-colors"
                  >
                    <RefreshCw className="w-3 h-3" />
                    Retry
                  </button>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
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
                  placeholder="Ask about our products..."
                  className="flex-1 bg-muted rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-safety-ember/30 placeholder:text-muted-foreground"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="sm"
                  variant="hero"
                  className="rounded-full w-9 h-9 p-0 shrink-0"
                  disabled={!input.trim() || isLoading}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
              <p className="text-[9px] text-muted-foreground/50 text-center mt-1.5">
                Powered by Astra Concierge • Responses may vary
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
