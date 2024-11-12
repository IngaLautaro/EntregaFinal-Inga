import logo from "../../assets/logos/carrito.png" 
import './CartWidget.css'
import { Link } from "react-router-dom"
const CartWidget = () => {
    return (
        <Link className="nav-cart" to="/src/pages/Cart.jsx">
            <img src={logo} />
        </Link>
    )
}

export default CartWidget