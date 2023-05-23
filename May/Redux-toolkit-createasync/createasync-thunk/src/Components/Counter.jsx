import React from 'react'
import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../features/counter/counterSlice'
const Counter = () => {
    const count=useSelector(store=>store.counter.value)
    console.log(count)
     const dispatch=useDispatch();
  return (
    <div>
    <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={()=>dispatch(increment())}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
  )
}

export default Counter