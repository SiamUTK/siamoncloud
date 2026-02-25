import { getSupabaseClient } from "../js/supabaseClient.js";

export function initAIChat({ t, getLang }) {
  const shell = document.createElement("div");
  shell.className = "soc-chat-shell";

  shell.innerHTML = `
    <div id="soc-chat-window" class="soc-chat-window" role="dialog" aria-label="AI Chat Window">
      <div class="soc-chat-head">
        <div>
          <strong id="soc-chat-title">${t.chat.title}</strong><br />
          <small id="soc-chat-status">${t.chat.status}</small>
        </div>
        <button id="soc-chat-close" aria-label="Close chat" style="background:transparent;color:white;font-size:20px;">×</button>
      </div>
      <div id="soc-chat-body" class="soc-chat-body"></div>
      <form id="soc-chat-form" class="soc-chat-input">
        <input id="soc-chat-input" type="text" placeholder="${t.chat.placeholder}" autocomplete="off" />
        <button type="submit" aria-label="Send" style="border-radius:999px;padding:0 12px;background:#0a2540;color:white;">➤</button>
      </form>
    </div>
    <button id="soc-chat-toggle" class="soc-chat-toggle" aria-label="Open chat">AI</button>
  `;

  document.body.appendChild(shell);

  const state = { open: false, isTyping: false, messages: [] };
  const windowEl = shell.querySelector("#soc-chat-window");
  const bodyEl = shell.querySelector("#soc-chat-body");
  const inputEl = shell.querySelector("#soc-chat-input");

  function scrollToBottom() {
    bodyEl.scrollTop = bodyEl.scrollHeight;
  }

  function renderMessages() {
    bodyEl.innerHTML = state.messages
      .map((msg) => `<div class="soc-msg ${msg.role}">${msg.text}</div>`)
      .join("");

    if (state.isTyping) {
      bodyEl.innerHTML += `
        <div class="soc-msg ai">
          <span class="soc-typing" aria-label="${t.chat.typing}"><span></span><span></span><span></span></span>
        </div>
      `;
    }
    scrollToBottom();
  }

  async function sendMessage(message) {
    const supabase = getSupabaseClient();

    state.messages.push({ role: "user", text: message });
    state.isTyping = true;
    renderMessages();

    await new Promise((resolve) => setTimeout(resolve, 700));

    const aiReply =
      getLang() === "th"
        ? "รับทราบครับ ผมกำลังค้นหาตัวเลือกที่เหมาะสมให้ทันที"
        : "Got it. I’m checking the best options for you now.";

    state.isTyping = false;
    state.messages.push({ role: "ai", text: aiReply });
    renderMessages();

    if (supabase) {
      try {
        await supabase.from("ai_chats").insert([
          {
            user_message: message,
            ai_response: aiReply,
            language: getLang(),
            created_at: new Date().toISOString(),
          },
        ]);
      } catch {}
    }
  }

  shell.querySelector("#soc-chat-toggle").addEventListener("click", () => {
    state.open = !state.open;
    windowEl.classList.toggle("open", state.open);
  });

  shell.querySelector("#soc-chat-close").addEventListener("click", () => {
    state.open = false;
    windowEl.classList.remove("open");
  });

  shell
    .querySelector("#soc-chat-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const message = inputEl.value.trim();
      if (!message) return;
      inputEl.value = "";
      await sendMessage(message);
    });

  state.messages.push({ role: "ai", text: t.chat.welcome });
  renderMessages();

  return {
    updateLanguage(nextT) {
      shell.querySelector("#soc-chat-title").textContent = nextT.chat.title;
      shell.querySelector("#soc-chat-status").textContent = nextT.chat.status;
      inputEl.placeholder = nextT.chat.placeholder;
      if (state.messages.length > 0 && state.messages[0].role === "ai") {
        state.messages[0].text = nextT.chat.welcome;
        renderMessages();
      }
    },
  };
}
