import { useEffect, useRef, useState } from "react";
import Icon from "../ui/Icon";

const SUPABASE_EDGE_FUNCTION_URL = import.meta.env
  .VITE_SUPABASE_EDGE_FUNCTION_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

function Chatbot({ t }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMessages([{ sender: "ai", text: t.greeting }]);
  }, [t.greeting]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = async (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    const msg = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: msg }]);
    setInput("");
    setIsLoading(true);

    const hasSupabaseConfig =
      Boolean(SUPABASE_EDGE_FUNCTION_URL) && Boolean(SUPABASE_ANON_KEY);

    try {
      if (hasSupabaseConfig) {
        const response = await fetch(SUPABASE_EDGE_FUNCTION_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ message: msg }),
        });

        if (response.ok) {
          const data = await response.json();
          setMessages((prev) => [
            ...prev,
            { sender: "ai", text: data?.reply || t.response },
          ]);
        } else {
          setMessages((prev) => [...prev, { sender: "ai", text: t.response }]);
        }
      } else {
        setTimeout(() => {
          setMessages((prev) => [...prev, { sender: "ai", text: t.response }]);
          setIsLoading(false);
        }, 1000);
        return;
      }
    } catch {
      setMessages((prev) => [...prev, { sender: "ai", text: t.response }]);
    }

    setIsLoading(false);
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
      aria-label="Chatbot Assistant"
    >
      {isOpen && (
        <div
          className="mb-4 flex h-[500px] max-h-[80vh] w-80 flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl sm:w-96"
          role="dialog"
          aria-label="Chat with AI"
        >
          <div className="flex items-center justify-between bg-gradient-to-r from-[#0A2540] to-[#06B6D4] p-4 text-white shadow-md">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-white/40 bg-white/20 backdrop-blur-sm shadow-lg">
                <img
                  src="https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/mascot/binnai-head.png"
                  alt="Binnai AI Assistant"
                  className="h-10 w-10 object-contain drop-shadow-md"
                  width="40"
                  height="40"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-wide">{t.title}</h3>
                <p className="text-xs text-cyan-100 opacity-90">{t.status}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 transition-colors hover:text-white"
              aria-label="Close Chat"
            >
              <Icon name="X" size={20} aria-hidden="true" />
            </button>
          </div>

          <div
            className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-4"
            aria-live="polite"
          >
            {messages.map((msg, idx) => (
              <div
                key={`${msg.sender}-${idx}`}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                    msg.sender === "user"
                      ? "rounded-br-none bg-[#0A2540] text-white"
                      : "rounded-bl-none border border-slate-100 bg-white text-slate-700"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div
                  className="flex gap-1 rounded-2xl border border-slate-100 bg-white p-3"
                  aria-label="AI is typing..."
                >
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400"></span>
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400 delay-75"></span>
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400 delay-150"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 border-t border-slate-100 bg-white p-3"
          >
            <label htmlFor="chat-input" className="sr-only">
              Type a message
            </label>
            <input
              id="chat-input"
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={t.placeholder}
              className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
              autoComplete="off"
            />
            <button
              type="submit"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2540] text-white shadow-md transition-colors hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
              aria-label="Send message"
            >
              <Icon name="Send" size={18} aria-hidden="true" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-16 w-16 items-center justify-center rounded-full border-3 border-white/30 bg-gradient-to-r from-[#0A2540] to-[#06B6D4] text-white shadow-2xl transition-all hover:scale-110 hover:shadow-cyan-500/50 hover:border-white/50 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-offset-2"
        aria-label={isOpen ? "Close Chatbot" : "Open Chatbot"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <Icon name="X" size={28} aria-hidden="true" />
        ) : (
          <img
            src="https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/mascot/binnai-head.png"
            alt="Binnai AI Assistant - Click to chat"
            className="h-12 w-12 object-contain drop-shadow-lg"
            width="48"
            height="48"
            loading="lazy"
          />
        )}
      </button>
    </div>
  );
}

export default Chatbot;
