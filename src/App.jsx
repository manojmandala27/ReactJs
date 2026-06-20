import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './Components/Home'
import About from './Components/About'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<>

  <h1> hello world !</h1>
  {/* <Home/>
  <About/> */}
     {3 < 2 ? <Home/> : <About/>}
</>
      
  )
}

export default App
