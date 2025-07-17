import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ApplyJob from './Pages/ApplyJob'
import Applications from './Pages/Applications'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/apply-job/:id' element = {<ApplyJob/>} />
          <Route path='/applications' element = {<Applications/>} />
        </Routes>
        
      </div>
    </>
  )
}

export default App
