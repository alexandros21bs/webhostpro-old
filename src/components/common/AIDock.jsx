import { useEffect, useState } from "react";

const API_URL = "https://api.webhostpro.gr/api/chat";

const QUICK_OPTIONS = [
  {
    label: "Website / eShop",
    message: "Θέλω πληροφορίες για website ή eShop.",
  },
  {
    label: "AI Chatbot",
    message: "Θέλω AI chatbot για την επιχείρησή μου.",
  },
  {
    label: "Hosting / Cloud",
    message: "Θέλω πληροφορίες για hosting ή cloud υποδομή.",
  },
  {
    label: "SaaS Platform",
    message: "Θέλω να φτιάξω SaaS platform ή client portal.",
  },
  {
    label: "Ζητήστε Προσφορά",
    message: "Θέλω προσφορά για project. Μπορείτε να με καθοδηγήσετε;",
  },
];

export default function AIDock() {
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([
    {
      role: "assistant",
      content:
        "Καλησπέρα! Είμαι ο AI Assistant της Web Host Pro. Πώς μπορώ να βοηθήσω με website, AI chatbot, hosting, SaaS ή digital ecosystem;",
    },
  ]);

  useEffect(() => {
    const handleOpen = () => {
      setOpen(true);
      setChatOpen(true);
    };

    window.addEventListener("open-webhostpro-ai", handleOpen);
    return () => window.removeEventListener("open-webhostpro-ai", handleOpen);
  }, []);

  const sendText = async (text) => {
    const cleanMessage = (text || "").trim();
    if (!cleanMessage || loading) return;

    const nextHistory = [
      ...history,
      {
        role: "user",
        content: cleanMessage,
      },
    ];

    setHistory(nextHistory);
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bot: "webhostpro",
          message: cleanMessage,
          history: nextHistory
            .filter((item) => item.role === "user" || item.role === "assistant")
            .slice(-8),
        }),
      });

      const data = await response.json();

      setHistory((current) => [
        ...current,
        {
          role: "assistant",
          content:
            data.reply ||
            "Δεν μπόρεσα να απαντήσω αυτή τη στιγμή. Μπορείς να επικοινωνήσεις στο info@webhostpro.gr.",
        },
      ]);
    } catch (error) {
      console.error("AIDock chat error:", error);

      setHistory((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "Υπάρχει προσωρινό θέμα σύνδεσης με το AI. Μπορείς να στείλεις μήνυμα στο info@webhostpro.gr ή WhatsApp στο 6955236006.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    const text = message;
    setMessage("");
    await sendText(text);
  };

  const handleQuickOption = (text) => {
    if (loading) return;
    sendText(text);
  };

  const actions = [
    {
      label: "AI Assistant",
      onClick: () => setChatOpen((value) => !value),
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/306955236006",
    },
    {
      label: "Start Project",
      href: "/contact",
    },
    {
      label: "Book Call",
      href: "/contact",
    },
  ];

  const showQuickOptions = history.length === 1 && history[0].role === "assistant";

  return (
    <div className={`ai-dock ${open ? "is-open" : ""} ${chatOpen ? "chat-is-open" : ""}`}>
      {open && (
        <div className="ai-dock-stack">
          {actions.map((item) =>
            item.href ? (
              <a key={item.label} href={item.href} className="ai-dock-action">
                <span className="ai-dock-action-dot" />
                {item.label}
              </a>
            ) : (
              <button
                key={item.label}
                type="button"
                className="ai-dock-action"
                onClick={item.onClick}
              >
                <span className="ai-dock-action-dot" />
                {item.label}
              </button>
            )
          )}
        </div>
      )}

      {open && chatOpen && (
        <div className="ai-dock-chat" aria-label="Web Host Pro AI Chat">
          <div className="ai-dock-chat-header">
            <div>
              <span>WEB HOST PRO AI</span>
              <strong>Online Assistant</strong>
            </div>
            <div className="ai-dock-chat-header-actions">
              <button
                type="button"
                onClick={() => setChatOpen(false)}
                aria-label="Minimize AI chat"
                title="Minimize"
              >
                –
              </button>
              <button
                type="button"
                onClick={() => setChatOpen(false)}
                aria-label="Close AI chat"
                title="Close"
              >
                ×
              </button>
            </div>
          </div>

          <div className="ai-dock-chat-messages">
            {history.map((item, index) => (
              <div
                key={`${item.role}-${index}`}
                className={`ai-dock-message ${item.role === "user" ? "is-user" : "is-ai"}`}
              >
                {item.content}
              </div>
            ))}

            {showQuickOptions && (
              <div className="ai-dock-quick-options" role="group" aria-label="Quick options">
                {QUICK_OPTIONS.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    className="ai-dock-quick-option"
                    onClick={() => handleQuickOption(option.message)}
                    disabled={loading}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}

            {loading && <div className="ai-dock-message is-ai">Γράφω απάντηση...</div>}
          </div>

          <form className="ai-dock-chat-form" onSubmit={sendMessage}>
            <input
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Γράψτε μήνυμα..."
              aria-label="Message"
            />
            <button type="submit" disabled={loading || !message.trim()}>
              Send
            </button>
          </form>
        </div>
      )}

      <div className="ai-dock-trigger">
        <button
          type="button"
          className="ai-dock-status"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle AI dock"
        >
          <span className="ai-dock-pulse" />
          AI ONLINE
        </button>

        <button
          type="button"
          className="ai-dock-orbit"
          onClick={() => setOpen((value) => !value)}
          aria-label="Open AI dock actions"
        >
          <span className="ai-dock-core" />
          <span className="ai-dock-ring ring-one" />
          <span className="ai-dock-ring ring-two" />
        </button>
      </div>
    </div>
  );
}
