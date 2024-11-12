import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Cart from './pages/Cart'
import Error from './pages/Error'


function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greetings= {"Mega tienda"}/>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/" element={<Error />} />
          <Route path="/marca/:marcaId" element={<ItemListContainer />} />
        </Routes>
        </BrowserRouter>
      )
}
export default App