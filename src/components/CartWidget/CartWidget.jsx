import logo from "../../assets/logos/carrito.png" 
import './CartWidget.css'
const CartWidget = () => {
    return (
        <a class="nav-cart" href="">
            <img src={logo} />
        </a>
    )
}

export default CartWidget