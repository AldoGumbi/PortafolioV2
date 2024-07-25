import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import HomePage from './components/Homepage'
import Projects from './components/Projects'
import Certtificates from './components/Certificates'
import AboutMe from './components/AboutMe'
import Footer from './components/minicomponents/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage />
      <Projects />
      <Certtificates />
      <AboutMe />
      <Footer />
    </>
  )
}

export default App
