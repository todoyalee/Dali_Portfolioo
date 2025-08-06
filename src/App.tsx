import './App.css'
import Navbar from './components/Navbar'
import { VortexBackground } from './components/VortexBackground'

function App() {

  return (
    <>
        <VortexBackground />
      <div className="relative z-10 flex items-center justify-center">
            <Navbar/>
        </div>
    </>
  )
}

export default App
