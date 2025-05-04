import { useState } from 'react'
import Navbar from './components/navbar'
import Card from './components/card'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
