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
    <section
      id="home"
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 lg:max-w-5xl max-w-xl mx-auto"
    >
      <h1 className="text-white font-bold font-sans text-4xl sm:text-6xl mb-6 sm:mb-4">
        Hello, I'm Mohamed Ali 👋
      </h1>
      <h2 className="font-sans text-white font-medium tracking-wider text-lg sm:text-2xl animate-glow  mb-6 sm:mb-4">
        Software Engineering student at Esprit - Tunisia and AI enthusiast
      </h2>
      <h3 className="font-sans text-white mt-2 sm:mt-4 min-h-[2rem] sm:min-h-[3rem]">
        {displayedText}
        <span className="animate-pulse">|</span>
      </h3>
      <div className="flex gap-4 sm:gap-6 mt-6 sm:mt-8">
        {/* GitHub */}
        <a
          href="https://github.com/todoyalee"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:scale-110 transition-transform"
        >
          <svg
            width="28"
            height="28"
            className="sm:w-9 sm:h-9"
            fill="none"
            viewBox="0 0 24 24"
          >
            {/* ...SVG code... */}
          </svg>
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/dali-belkouri/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:scale-110 transition-transform"
        >
          <svg
            width="28"
            height="28"
            className="sm:w-9 sm:h-9"
            fill="none"
            viewBox="0 0 24 24"
          >
            {/* ...SVG code... */}
          </svg>
        </a>
      </div>
    </section>
  );
}
