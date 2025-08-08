import './App.css'
import About from './components/Experience'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { VortexBackground } from './components/VortexBackground'

function App() {
  
  return (
    <>
        <VortexBackground />
      <div className="relative z-10 items-center justify-center">
            <Navbar/>
            <Home />
            <About />
        </div>
    </>
  )
}

export default App
