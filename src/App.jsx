import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <Button />
      <Button />
    </>
  )
}

function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <button onClick={handleClick}>Clicked {count} times</button>
  )
}

export default App
