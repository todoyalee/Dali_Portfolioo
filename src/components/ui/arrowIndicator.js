import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
export default function ArrowIndicator({ visible, popupRect, chatbotRect }) {
    if (!visible || !popupRect || !chatbotRect)
        return null;
    // Midpoint between popup and chatbot
    const midX = (popupRect.right + chatbotRect.left) / 2;
    const midY = (popupRect.bottom + chatbotRect.top) / 2;
    return (_jsx(motion.div, { className: "fixed z-[60] text-blue-500", style: { top: midY, left: midX }, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }, transition: { repeat: Infinity, duration: 1.5 }, children: _jsx("div", { className: "w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center", children: _jsx(ArrowDownRight, { className: "w-6 h-6" }) }) }));
}
//# sourceMappingURL=arrowIndicator.js.map