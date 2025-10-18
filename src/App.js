import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import Experience from './components/Experience.js';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import { VortexBackground } from './components/VortexBackground.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Chatbot from './components/Chatbot.js';
import Achievements from './components/Achievements.js';
import Popup from './components/Popup.js';
function App() {
    const [showPopup, setShowPopup] = useState(false);
    const chatbotRef = useRef(null);
    const [chatbotRect, setChatbotRect] = useState(null);
    useLayoutEffect(() => {
        const updateRect = () => {
            if (chatbotRef.current) {
                setChatbotRect(chatbotRef.current.getBoundingClientRect());
            }
        };
        updateRect();
        const ro = new ResizeObserver(updateRect);
        if (chatbotRef.current)
            ro.observe(chatbotRef.current);
        window.addEventListener("resize", updateRect);
        window.addEventListener("scroll", updateRect, { passive: true });
        return () => {
            ro.disconnect();
            window.removeEventListener("resize", updateRect);
            window.removeEventListener("scroll", updateRect);
        };
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => setShowPopup(true), 1500); // show after 1 second
        return () => clearTimeout(timer);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(VortexBackground, {}), _jsx("div", { className: "relative z-10 items-center justify-center w-full", children: _jsxs("div", { className: "w-full lg:max-w-5xl max-w-xl mx-auto px-4", children: [_jsx(Navbar, {}), _jsx(Home, {}), _jsx(Experience, {}), _jsx(Skills, {}), _jsx(Projects, {}), _jsx(Achievements, {})] }) }), _jsx(Chatbot, { ref: chatbotRef }), _jsx(Popup, { show: showPopup, onClose: () => setShowPopup(false), message: "Too tired to scroll? Just click the button and chat with me", chatbotRect: chatbotRect, children: _jsx("span", { className: "absolute bottom-8 right-16" }) })] }));
}
export default App;
//# sourceMappingURL=App.js.map