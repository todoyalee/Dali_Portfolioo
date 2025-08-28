import './App.css'
import { useState ,useRef, useLayoutEffect, useEffect} from 'react';
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
  const [showPopup, setShowPopup] = useState(false);
  const chatbotRef = useRef<HTMLDivElement | null>(null);
  const [chatbotRect, setChatbotRect] = useState<DOMRect | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const updateRect = () => {
      if (chatbotRef.current) {
        setChatbotRect(chatbotRef.current.getBoundingClientRect());
      }
    };

    updateRect(); 

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
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1500); // show after 1 second
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowPopup(true);
        }
      },
      { threshold: 0.3 }
    );
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);
  
  return (
    <>
        <VortexBackground />
      <div className="relative z-10 items-center justify-center w-full">
          <div className="w-full lg:max-w-5xl max-w-xl mx-auto px-4">
            <Navbar/>
            <Home />
            <Experience />
            <Skills />
            <div ref={projectsRef}>
              <Projects />
            </div>
            <Achievements />
        </div>
        </div>
        <Chatbot ref={chatbotRef} />
        <Popup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        message="Too tired to scroll? Just click the button and chat with me"
        chatbotRect={chatbotRect}
      >
        <span className="absolute bottom-8 right-16">
        </span>
      </Popup>
      
    </>
  )
}

export default App
