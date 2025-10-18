import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Card } from "./ui/card.js";
const overlayCls = "absolute bg-black/30 backdrop-blur-md pointer-events-auto";
const Popup = ({ message, show, onClose, children, chatbotRect }) => {
    if (!show)
        return null;
    return (_jsxs("div", { className: "fixed inset-0 z-[120] font-sans flex items-center justify-center pointer-events-none", children: [chatbotRect && (_jsxs(_Fragment, { children: [_jsx("div", { className: overlayCls, style: {
                            left: 0,
                            top: 0,
                            width: "100vw",
                            height: chatbotRect.top,
                        } }), _jsx("div", { className: overlayCls, style: {
                            left: 0,
                            top: chatbotRect.bottom,
                            width: "100vw",
                            height: `calc(100vh - ${chatbotRect.bottom}px)`,
                        } }), _jsx("div", { className: overlayCls, style: {
                            left: 0,
                            top: chatbotRect.top,
                            width: chatbotRect.left,
                            height: chatbotRect.height,
                        } }), _jsx("div", { className: overlayCls, style: {
                            left: chatbotRect.right,
                            top: chatbotRect.top,
                            width: `calc(100vw - ${chatbotRect.right}px)`,
                            height: chatbotRect.height,
                        } })] })), _jsxs(Card, { className: "relative z-[130] max-w-xl w-full mx-10 p-4 sm:p-8 text-center pointer-events-auto", children: [_jsx("button", { onClick: onClose, className: "absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-500 hover:text-black transition", "aria-label": "Close popup", children: "\u2715" }), _jsx("p", { className: "text-lg sm:text-2xl font-bold mb-4 sm:mb-6", children: message }), children] })] }));
};
export default Popup;
//# sourceMappingURL=Popup.js.map