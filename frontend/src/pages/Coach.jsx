import { useState } from "react";

import Button from "../components/common/Button";

function Coach() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi! I'm your AI Interview Coach. Ask me anything about your interview preparation.",
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      {
        role: "user",
        text: message,
      },
      {
        role: "ai",
        text: "Good question! The AI Coach backend will analyze your question and provide personalized guidance.",
      },
    ]);

    setMessage("");
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6">
        <p className="text-sm text-indigo-400">AI COACH</p>

        <h1 className="mt-2 text-3xl font-bold">
          Personal Interview Coach
        </h1>
      </div>

      <div className="flex h-[600px] flex-col rounded-2xl border border-slate-800 bg-slate-900">
        <div className="flex-1 space-y-4 overflow-y-auto p-6">
          {messages.map((item, index) => (
            <div
              key={index}
              className={`flex ${
                item.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  item.role === "user"
                    ? "bg-indigo-600"
                    : "bg-slate-800"
                }`}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 p-4">
          <div className="flex gap-3">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Ask your AI coach..."
              className="flex-1 rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-indigo-500"
            />

            <Button onClick={sendMessage}>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coach;