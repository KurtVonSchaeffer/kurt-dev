"use client";
import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { BsXLg, BsSend } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";

const SUGGESTIONS = [
  "What fintech projects have you built?",
  "What's your tech stack?",
  "Are you available for freelance?",
  "Tell me about AlgoLend",
];

export default function AskKurt() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const { messages, sendMessage, status } = useChat({ api: "/api/chat" });
  const isStreaming = status === "streaming" || status === "submitted";

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const submit = () => {
    const text = input.trim();
    if (!text || isStreaming) return;
    setInput("");
    sendMessage({ text });
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat with Kurt"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-accent text-primary font-semibold text-sm px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
      >
        <FiMessageSquare className="text-lg" />
        Ask Kurt
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-20 right-6 z-50 w-[340px] sm:w-[380px] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#1c1c22]"
          style={{ height: "480px" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#27272c] border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-sm">
                K
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Ask Kurt</p>
                <p className="text-xs text-white/40">AI-powered · usually instant</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/40 hover:text-white transition-colors"
            >
              <BsXLg />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 scroll-smooth">
            {messages.length === 0 && (
              <div className="flex flex-col gap-4">
                <p className="text-white/60 text-sm text-center mt-2">
                  Hey! I'm Kurt's AI assistant. Ask me anything about his work, skills, or experience.
                </p>
                <div className="flex flex-col gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage({ text: s })}
                      className="text-left text-xs px-3 py-2 rounded-lg border border-accent/30 text-accent/80 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-150"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] text-sm px-3 py-2 rounded-2xl leading-relaxed ${
                    m.role === "user"
                      ? "bg-accent text-primary rounded-br-sm font-medium"
                      : "bg-[#27272c] text-white/90 rounded-bl-sm"
                  }`}
                >
                  {m.parts?.map((p, i) =>
                    p.type === "text" ? <span key={i}>{p.text}</span> : null
                  ) ?? m.content}
                </div>
              </div>
            ))}

            {isStreaming && messages[messages.length - 1]?.role !== "assistant" && (
              <div className="flex justify-start">
                <div className="bg-[#27272c] px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60 animate-bounce [animation-delay:0ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60 animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60 animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 px-3 py-3 bg-[#27272c] border-t border-white/10">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask me anything..."
              autoComplete="off"
              className="flex-1 bg-white/5 text-sm text-white placeholder:text-white/30 rounded-xl px-3 py-2 outline-none border border-white/10 focus:border-accent/50 transition-colors"
            />
            <button
              onClick={submit}
              disabled={!input.trim() || isStreaming}
              className="w-9 h-9 rounded-xl bg-accent text-primary flex items-center justify-center hover:opacity-90 disabled:opacity-30 transition-opacity shrink-0"
            >
              <BsSend className="text-sm" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
