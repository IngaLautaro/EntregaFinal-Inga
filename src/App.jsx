
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Cart from './pages/Cart'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greetings= {"Mega tienda"}/>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
        </Routes>
        </BrowserRouter>
      )
}
export default App