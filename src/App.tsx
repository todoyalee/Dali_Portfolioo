import './App.css'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { VortexBackground } from './components/VortexBackground'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Chatbot from './components/Chatbot'

function App() {
  
  return (
    <>
        <VortexBackground />
      <div className="relative z-10 items-center justify-center">
            <Navbar/>
            <Home />
            <Experience />
            <Skills />
            <Projects />
        </div>
        <Chatbot />
    </>
  )
}

export default App
