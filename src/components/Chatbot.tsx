import { useState, useRef, useEffect } from "react";
import { SendHorizontal, CircleX } from "lucide-react";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { from: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [threadId, setThreadId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = input;
    setMessages([...messages, { from: "user", text: userMessage }]);
    setInput("");

    try {
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({"thread_id":threadId ,"question":userMessage}),
      });
      const data = await response.text();
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: data || "No response." },
      ]);
    } catch (error) {
      setMessages((msgs) => [
        ...msgs,
        {
          from: "bot",
          text: "Sorry, there was an error connecting to the server.",
        },
      ]);
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-80 h-[500px] bg-white rounded-xl shadow-lg flex flex-col overflow-hidden border border-gray-200">
          <div className="bg-red-600 text-white px-4 py-2 flex justify-between items-center">
            <span className="font-semibold">Arij's Assistant</span>
            <button
              onClick={() => {
                setOpen(false);
                setThreadId(null);
              }}
              className="text-white"
            >
              <CircleX />
            </button>
          </div>
          <div
            className="flex-1 p-4 space-y-2 overflow-y-auto bg-gray-50"
            style={{ minHeight: 0 }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`text-sm px-3 py-2 rounded-2xl max-w-[80%] ${
                  msg.from === "user"
                    ? "bg-red-500 text-white ml-auto"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex border-t p-2 bg-white text-black">
            <input
              className="flex-1 px-2 py-1 border rounded-l focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
            />
            <button
              className="bg-red-600 text-white px-4 rounded-r"
              onClick={handleSend}
            >
              <SendHorizontal size={20} />
            </button>
          </div>
        </div>
      ) : (
        <button
          className="bg-red-600 text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center text-2xl"
          onClick={() => {
            setOpen(true);
            if (!threadId) {
              const id = window.crypto?.randomUUID
                ? window.crypto.randomUUID()
                : Math.random().toString(36).substring(2);
              setThreadId(id);
            }
          }}
          aria-label="Open chatbot"
        >
          💬
        </button>
      )}
    </div>
  );
};

export default Chatbot;
