import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"


function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">TIENDA</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/src/pages/AboutUs.jsx">Nosotros</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Marcas
                            </a>
                            <ul class="dropdown-menu">
                                <li><Link className="dropdown-item" to="/category/samsung">Samsung</Link></li>
                                <li><Link className="dropdown-item" to="/category/motorola">Motorola</Link></li>
                                <li><Link className="dropdown-item" to="/category/apple">Apple</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar