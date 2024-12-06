import { useState } from 'react'
import Button from './Components/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button>Mygtukas</Button>
    </>
  )
}

export default App
