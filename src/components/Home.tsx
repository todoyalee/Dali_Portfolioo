import { useEffect, useState } from "react";

export default function Home() {
  const fullText =
    "Building innovative AI solutions and scalable architectures.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, current + 1));
      current++;
      if (current === fullText.length) clearInterval(interval);
    }, 75); // Adjust speed here (ms per letter)
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative z-10 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-white font-bold font-sans text-6xl mb-4">
        Hello, I'm Arij 👋
      </h1>
      <h2 className="font-sans text-white font-medium tracking-wider text-2xl animate-glow">
        Software Engineering student at INSAT - Tunisia and AI enthusiast
      </h2>
      <h3 className="font-sans text-white mt-4 min-h-[3rem]">
        {displayedText}
        <span className="animate-pulse">|</span>
      </h3>
      <div className="flex gap-6 mt-8">
        {/* GitHub */}
        <a
          href="https://github.com/rozee01"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:scale-110 transition-transform"
        >
          <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="4" fill="#fff" fillOpacity="0.1"/>
            <path fill="#fff" fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.03A9.38 9.38 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.92-1.3 2.75-1.03 2.75-1.03.54 1.4.2 2.44.1 2.7.64.72 1.02 1.63 1.02 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.57.69.47C19.13 20.56 22 16.75 22 12.26 22 6.58 17.52 2 12 2Z"/>
          </svg>
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/arij-thabet-193677257/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:scale-110 transition-transform"
        >
          <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="4" fill="#fff" fillOpacity="0.1"/>
            <path fill="#fff" d="M6.94 8.5a1.06 1.06 0 1 1 0-2.12 1.06 1.06 0 0 1 0 2.12ZM5.5 9.75h2.88v8.25H5.5V9.75Zm4.25 0h2.76v1.13h.04c.38-.72 1.3-1.48 2.68-1.48 2.87 0 3.4 1.89 3.4 4.34v4.26h-2.88v-3.78c0-.9-.02-2.06-1.26-2.06-1.26 0-1.45.98-1.45 2v3.84H9.75V9.75Z"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
