import React from 'react'
import './App.css'
import AllRoutes from './Components/AllRoutes'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div id='root'>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App