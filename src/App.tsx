import './App.css'
import Navbar from './components/Navbar'
import { VortexBackground } from './components/VortexBackground'

function App() {

  return (
    <>
        <VortexBackground />
      <div className="relative z-10 items-center justify-center">
            <Navbar/>
            <h1 className=' text-white font-bold font-sans'>Hello, I'm Arij 👋</h1><br></br>
            <h2 className='font-sans text-white font-medium tracking-wider text-2xl animate-glow'>I'm a software engineering student and AI enthusiast</h2>
        </div>
    </>
  )
}

export default App
