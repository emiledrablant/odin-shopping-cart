import { useState } from 'react'
import Navbar from './components/navbar'
import Card from './components/card'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Card title={"Testoooo"} price={"50€"}/>
    </>
  )
}

export default App
