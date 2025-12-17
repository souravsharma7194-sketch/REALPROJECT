"use client";

import { remoteConfig } from "@/firebase/firebaseConfig";
import { fetchAndActivate, getValue } from "firebase/remote-config";
import { useEffect, useRef, useState } from "react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function ChatbotTest() {
  const [enabled, setEnabled] = useState(false);
  const [welcomeText, setWelcomeText] = useState("");
  const [fallbackText, setFallbackText] = useState("");
  const [maxMessages, setMaxMessages] = useState(5);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const runner = async () => {
      try {
        remoteConfig.settings.minimumFetchIntervalMillis = 0;

        await fetchAndActivate(remoteConfig);

        const isEnabled = getValue(remoteConfig, "enableChatbot").asBoolean();
        const welcome = getValue(remoteConfig, "chatbotWelcomeText").asString();
        const fallback = getValue(remoteConfig, "chatbotFallbackText").asString();
        const limit = getValue(remoteConfig, "chatbotMaxMessages").asNumber();

        setEnabled(isEnabled);
        setWelcomeText(welcome);
        setFallbackText(fallback);
        setMaxMessages(limit || 5);

        if (welcome) {
          setMessages([{ sender: "bot", text: welcome }]);
        }
      } catch (err) {
        console.error("Remote Config error:", err);
      }
    };

    runner();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!enabled) return null;

  const botReply = (msg: string) => {
    const text = msg.toLowerCase();

    if (text.includes("rent")) return "Are you looking to rent in which city?";
    if (text.includes("buy")) return "Great! What is your budget range?";
    if (text.includes("2 bhk")) return "I can show you 2 BHK properties.";
    if (text.includes("agent"))
      return "I’ll connect you with an agent shortly.";

    return fallbackText;
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessagesCount = messages.filter(
      (m) => m.sender === "user"
    ).length;

    if (userMessagesCount >= maxMessages) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Message limit reached. Please contact support.",
        },
      ]);
      return;
    }

    const reply = botReply(input);

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input },
      { sender: "bot", text: reply },
    ]);

    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] w-80 max-h-[70vh] bg-white border rounded-xl shadow-xl flex flex-col pointer-events-auto">
      
      {/* Header */}
      <div className="bg-green-600 text-white px-4 py-3 rounded-t-xl font-semibold">
        🏡 Property Assistant
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[75%] px-3 py-2 rounded-lg ${
              m.sender === "user"
                ? "bg-green-100 ml-auto text-right"
                : "bg-gray-100 mr-auto"
            }`}
          >
            {m.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex border-t p-2 gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask about properties..."
          className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="button"
          onClick={sendMessage}
          className="bg-green-600 text-white px-4 rounded-lg hover:bg-green-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
