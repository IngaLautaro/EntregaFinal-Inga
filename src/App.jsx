
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Cart from './components/Cart/Cart'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from "./context/CartContext";
import Checkout from './components/Checkout/Checkout'



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greetings= {"Productos"}/>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
        </BrowserRouter>
    </CartProvider>
      )
}
export default App