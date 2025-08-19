import './App.css'
import { useEffect, useState ,useRef, useLayoutEffect} from 'react';
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { VortexBackground } from './components/VortexBackground'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Chatbot from './components/Chatbot'
import Achievements from './components/Achievements'
import Popup from './components/Popup';

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const chatbotRef = useRef<HTMLDivElement | null>(null);
  const [chatbotRect, setChatbotRect] = useState<DOMRect | null>(null);

  useLayoutEffect(() => {
    const updateRect = () => {
      if (chatbotRef.current) {
        setChatbotRect(chatbotRef.current.getBoundingClientRect());
      }
    };

    updateRect(); // run immediately on mount

    const ro = new ResizeObserver(updateRect);
    if (chatbotRef.current) ro.observe(chatbotRef.current);

    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect);
    };
  }, []);

  
  return (
    <>
        <VortexBackground />
      <div className="relative z-10 items-center justify-center">
            <Navbar/>
            <Home />
            <Experience />
            <Skills />
            <Projects />
            <Achievements />
        </div>
        <Chatbot ref={chatbotRef} />
        <Popup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        message="If you don't want to scroll, open the chatbot!"
        chatbotRect={chatbotRect}
      >
        {/* Optional child content (like the arrow) */}
        <span className="absolute bottom-8 right-16">
          
        </span>
      </Popup>
    </>
  )
}

export default App
