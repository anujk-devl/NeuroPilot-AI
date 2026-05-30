"use client";

import { useState } from "react";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message) return;

    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });

    const data = await res.json();

    setResponse(data.response);
    setLoading(false);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-black">
        AI Chat
      </h1>

      <textarea
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        className="h-40 w-full rounded-xl border border-white/10 bg-black p-4"
        placeholder="Ask anything..."
      />

      <button
        onClick={sendMessage}
        disabled={loading}
        className="rounded-xl bg-purple-600 px-6 py-3"
      >
        {loading
          ? "Thinking..."
          : "Send"}
      </button>

      {response && (
        <div className="rounded-xl border border-white/10 p-6">
          {response}
        </div>
      )}
    </div>
  );
}