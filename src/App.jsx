import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
      <Button onClick={handleClick} count={count}/>
      <Button onClick={handleClick} count={count}/>
    </>
  )
}

function Button({onClick, count}) {

  return (
    <button onClick={onClick}>Clicked {count} times</button>
  )
}

export default App
