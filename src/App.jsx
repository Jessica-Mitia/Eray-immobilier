import { useState } from 'react'
import AboutUs from './components/AboutUs'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AboutUs /> 
    </>
  )
}

export default App
