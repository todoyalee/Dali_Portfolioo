import React from "react";
import { Card } from "./ui/card";

interface PopupProps {
  message: string;
  show: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  chatbotRect?: DOMRect | null;
}

const overlayCls = "absolute bg-black/30 backdrop-blur-md pointer-events-auto";

const Popup: React.FC<PopupProps> = ({ message, show, onClose, children, chatbotRect }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center pointer-events-none">
      {/* Four overlay strips around the chatbot hole (only render when we have a rect) */}
      {chatbotRect && (
        <>
          {/* Top strip */}
          <div
            className={overlayCls}
            style={{
              left: 0,
              top: 0,
              width: "100vw",
              height: chatbotRect.top,
            }}
          />
          {/* Bottom strip */}
          <div
            className={overlayCls}
            style={{
              left: 0,
              top: chatbotRect.bottom,
              width: "100vw",
              height: `calc(100vh - ${chatbotRect.bottom}px)`,
            }}
          />
          {/* Left strip */}
          <div
            className={overlayCls}
            style={{
              left: 0,
              top: chatbotRect.top,
              width: chatbotRect.left,
              height: chatbotRect.height,
            }}
          />
          {/* Right strip */}
          <div
            className={overlayCls}
            style={{
              left: chatbotRect.right,
              top: chatbotRect.top,
              width: `calc(100vw - ${chatbotRect.right}px)`,
              height: chatbotRect.height,
            }}
          />
        </>
      )}

      {/* Centered Card popup (interactive) */}
      <Card className="relative z-[130] max-w-xl w-full p-8 text-center pointer-events-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black transition"
          aria-label="Close popup"
        >
          ✕
        </button>
        <p className="text-2xl font-bold mb-6">{message}</p>
        {children}
      </Card>
    </div>
  );
};

export default Popup;
