import { createPortal } from "react-dom";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AI_CONFIG } from "@/config/site";
import useLanguage from "@/i18n/useLanguage";
import { sendMessageToAI } from "@/lib/aiClient";

const QUICK_ACTIONS = [
  "Air Ticketing Help",
  "AI & Automation",
  "Contact Our Team",
  "Book Strategy Call",
];

function getAssistantPortalRoot() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return null;
  }

  let root = document.getElementById("ai-assistant-root");
  if (!root) {
    root = document.createElement("div");
    root.id = "ai-assistant-root";
    document.body.appendChild(root);
  }

  return root;
}

function AIAssistant() {
  const { t, lang } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  const [portalRoot, setPortalRoot] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [mascotSrc, setMascotSrc] = useState(AI_CONFIG.mascot);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dialogRef = useRef(null);
  const launcherRef = useRef(null);
  const inputRef = useRef(null);
  const messagesRef = useRef(null);

  const panelId = "ai-assistant-panel";

  const quickActions = useMemo(() => QUICK_ACTIONS, []);

  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        text: t("chatbot_greeting"),
      },
    ]);
  }, [t]);

  const closePanel = useCallback(() => {
    setIsOpen(false);
    requestAnimationFrame(() => {
      launcherRef.current?.focus();
    });
  }, []);

  const togglePanel = useCallback(() => {
    setIsOpen((previous) => {
      const next = !previous;
      requestAnimationFrame(() => {
        if (next) {
          inputRef.current?.focus();
        } else {
          launcherRef.current?.focus();
        }
      });
      return next;
    });
  }, []);

  const sendMessage = useCallback(
    async (rawMessage) => {
      const trimmedMessage = rawMessage.trim();
      if (!trimmedMessage || isLoading) return;

      const userMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        text: trimmedMessage,
      };

      setMessages((previous) => [...previous, userMessage]);
      setInputValue("");
      setIsLoading(true);

      const result = await sendMessageToAI(trimmedMessage, { language: lang });

      setMessages((previous) => [
        ...previous,
        {
          id: `assistant-${Date.now() + 1}`,
          role: "assistant",
          text:
            result.success && result.reply
              ? result.reply
              : t("chatbot_response"),
        },
      ]);
      setIsLoading(false);
    },
    [isLoading, lang, t],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    setIsMounted(true);
    setPortalRoot(getAssistantPortalRoot());
    console.warn("[AI Assistant] mounted");
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closePanel();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closePanel]);

  useEffect(() => {
    if (!isOpen) return;

    const node = dialogRef.current;
    if (!node) return;

    const handleKeyDown = (event) => {
      if (event.key !== "Tab") return;

      const focusable = node.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    node.addEventListener("keydown", handleKeyDown);
    return () => node.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!messagesRef.current) return;
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages, isOpen]);

  if (!isMounted || !portalRoot) {
    return null;
  }

  const assistantUi = (
    <div className="fixed bottom-6 right-6 z-[9999] pointer-events-auto">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="false"
        aria-label="N' Bindee AI Assistant"
        id={panelId}
        className={`pointer-events-auto absolute bottom-16 right-0 flex max-h-[70vh] w-[92vw] max-w-[380px] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all duration-300 ease-out dark:border-slate-800 dark:bg-slate-900 ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0"
        }`}
      >
        <header className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <img
              src={mascotSrc}
              alt={`${AI_CONFIG.assistantName} avatar`}
              width="36"
              height="36"
              loading="lazy"
              decoding="async"
              onError={() =>
                setMascotSrc("/images/ai-mascot/bindee-head-1.png")
              }
              className="h-9 w-9 rounded-full border border-slate-200 object-cover dark:border-slate-700"
            />
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {t("chatbot_title") || AI_CONFIG.assistantName}
              </p>
              <p className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                <span className="relative inline-flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                {t("chatbot_status")}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closePanel}
            aria-label="Minimize AI Assistant"
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus-visible:ring-offset-slate-900"
          >
            <span aria-hidden="true">−</span>
          </button>
        </header>

        <div
          ref={messagesRef}
          className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <p
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                }`}
              >
                {message.text}
              </p>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div
                className="flex gap-1 rounded-2xl border border-slate-100 bg-white p-3"
                aria-label={t("chatbot_typing")}
              >
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400 [animation-delay:75ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400 [animation-delay:150ms]" />
              </div>
            </div>
          )}

          <div className="pt-1">
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action) => (
                <button
                  key={action}
                  type="button"
                  onClick={() => setInputValue(action)}
                  disabled={isLoading}
                  className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:bg-slate-800 dark:hover:text-cyan-300 dark:focus-visible:ring-offset-slate-900"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>

        <form
          className="flex items-center gap-2 border-t border-slate-200 px-3 py-3 dark:border-slate-800"
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage(inputValue);
          }}
        >
          <input
            ref={inputRef}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder={t("chatbot_placeholder")}
            aria-label={t("chatbot_type_message")}
            disabled={isLoading}
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
          <button
            type="submit"
            aria-label={t("chatbot_send_message")}
            disabled={!inputValue.trim() || isLoading}
            className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 dark:focus-visible:ring-offset-slate-900"
          >
            {isLoading ? "..." : t("chatbot_send_message")}
          </button>
        </form>
      </div>

      <button
        ref={launcherRef}
        type="button"
        onClick={togglePanel}
        aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="group ml-auto inline-flex h-12 w-12 transform-gpu items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 md:h-14 md:w-14"
      >
        <span className="absolute -inset-1 rounded-full bg-cyan-400/30 blur-md transition-opacity duration-300 group-hover:opacity-100" />
        <img
          src={mascotSrc}
          alt="N' Bindee mascot"
          width="40"
          height="40"
          loading="lazy"
          decoding="async"
          onError={() => setMascotSrc("/images/ai-mascot/bindee-head-1.png")}
          className="relative h-9 w-9 rounded-full object-cover md:h-10 md:w-10"
        />
      </button>
    </div>
  );

  return createPortal(assistantUi, portalRoot);
}

export default AIAssistant;
