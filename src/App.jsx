import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Password from './Component/Password'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Password />
    </>
  )
}

export default App
