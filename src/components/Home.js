import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
export default function Home() {
    const fullText = "Building innovative AI solutions and scalable architectures.";
    const [displayedText, setDisplayedText] = useState("");
    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, current + 1));
            current++;
            if (current === fullText.length)
                clearInterval(interval);
        }, 75); // Adjust speed here (ms per letter)
        return () => clearInterval(interval);
    }, []);
    return (_jsxs("section", { id: "home", className: "relative z-10 flex flex-col items-center justify-center min-h-screen px-4 lg:max-w-5xl max-w-xl mx-auto", children: [_jsx("h1", { className: "text-white font-bold font-sans text-4xl sm:text-6xl mb-6 sm:mb-4", children: "Hello, I'm Mohamed Ali \uD83D\uDC4B" }), _jsx("h2", { className: "font-sans text-white font-medium tracking-wider text-lg sm:text-2xl animate-glow  mb-6 sm:mb-4", children: "Software Engineering student at Esprit - Tunisia and AI enthusiast" }), _jsxs("h3", { className: "font-sans text-white mt-2 sm:mt-4 min-h-[2rem] sm:min-h-[3rem]", children: [displayedText, _jsx("span", { className: "animate-pulse", children: "|" })] }), _jsxs("div", { className: "flex gap-4 sm:gap-6 mt-6 sm:mt-8", children: [_jsx("a", { href: "https://github.com/rozee01", target: "_blank", rel: "noopener noreferrer", "aria-label": "GitHub", className: "hover:scale-110 transition-transform", children: _jsx("svg", { width: "28", height: "28", className: "sm:w-9 sm:h-9", fill: "none", viewBox: "0 0 24 24" }) }), _jsx("a", { href: "https://www.linkedin.com/in/arij-thabet-193677257/", target: "_blank", rel: "noopener noreferrer", "aria-label": "LinkedIn", className: "hover:scale-110 transition-transform", children: _jsx("svg", { width: "28", height: "28", className: "sm:w-9 sm:h-9", fill: "none", viewBox: "0 0 24 24" }) })] })] }));
}
//# sourceMappingURL=Home.js.map