import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './Components/Counter'
import Post from './Components/Post'

function App() {
  // const [count, setCount] = useState(0)
 
  return (
    <>
      <Counter />
      <Post />
    </>
  )
}

export default App
