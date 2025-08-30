/// <reference types="vite/client" />
import { useState, useRef, useEffect ,forwardRef} from "react";
import { SendHorizontal, CircleX } from "lucide-react";

const Chatbot = forwardRef<HTMLDivElement>((props, ref) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
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
    setLoading(true); // Start loading
  
    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ thread_id: threadId, question: userMessage }),
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
    setLoading(false); // End loading
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
  <div ref={ref} className="fixed bottom-2 right-2 sm:bottom-6 sm:right-6 z-50">
    {open ? (
      <div className="w-80 h-[500px] bg-white rounded-xl shadow-lg flex flex-col overflow-hidden border border-gray-200">
        <div className="bg-orange-500 text-black px-4 py-2 flex justify-between items-center">
          <span className="font-semibold">Arij's Assistant</span>
          <button
            onClick={() => {
              setOpen(false);
              setThreadId(null);
            }}
            className="text-black"
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
                  ? "bg-orange-500 text-black ml-auto"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="flex items-center gap-1 px-3 py-2 rounded-2xl bg-gray-200 text-gray-800 max-w-[60%]">
              <span className="animate-bounce">.</span>
              <span className="animate-bounce delay-150">.</span>
              <span className="animate-bounce delay-300">.</span>
            </div>
          )}
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
            className="bg-orange-500 text-black px-4 rounded-r"
            onClick={handleSend}
          >
            <SendHorizontal size={20} />
          </button>
        </div>
      </div>
    ) : (
      <div className="relative flex flex-col items-center z-[200] pointer-events-auto">
        {/* Floating text + arrow */}
        <div className="absolute bottom-16 flex flex-col items-center animate-bounce">
          <span className="text-white font-semibold text-sm">Open me</span>
          <svg
            className="w-5 h-5 text-white mt-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Chat open button */}
        <button
          className="bg-red-600 text-black rounded-full w-14 h-14 shadow-lg flex items-center justify-center text-2xl"
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
      </div>
    )}
  </div>
);

});
Chatbot.displayName = "Chatbot";
export default Chatbot;
