import { useState } from "react";

export default function AIDock() {
  const [open, setOpen] = useState(false);

  const actions = [
    { label: "AI Assistant", href: "#ai-assistant" },
    { label: "WhatsApp", href: "https://wa.me/306955236006" },
    { label: "Start Project", href: "#start-project" },
    { label: "Book Call", href: "#contact" },
  ];

  return (
    <div className={`ai-dock ${open ? "is-open" : ""}`}>
      {open && (
        <div className="ai-dock-stack">
          {actions.map((item) => (
            <a key={item.label} href={item.href} className="ai-dock-action">
              <span className="ai-dock-action-dot" />
              {item.label}
            </a>
          ))}
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
