import { useState, createContext } from 'react'
import Navbar from './components/navbar'
import Card from './components/card'
import './App.css'
import { Outlet } from 'react-router-dom'

export const CartContext = createContext();

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);

  return (
    <CartContext value={{itemsInCart, setItemsInCart}}>
      <Navbar />
      <Outlet />
    </CartContext>
  )
}

export default App
