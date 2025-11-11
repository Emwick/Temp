import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleClassComponents from './components/SimpleClassComponents.jsx'
import SimpleFunctionComponents from './components/SimpleFunctionComponents.jsx'

const Student = {
  id: 1,
  name: "John"}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SimpleClassComponents/>
      <SimpleFunctionComponents student={{...Student}}/>
    </>
  )
}

export default App
