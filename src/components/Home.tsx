import React, { useEffect, useState } from "react";

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
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen">
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
    </section>
  );
}
