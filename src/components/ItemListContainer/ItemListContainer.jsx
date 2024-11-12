import { useEffect } from "react"
import { getProducts, getProductsByMarca} from "../../AsyncMock"
import { useState } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom"

function ItemListContainer({greetings}) {
    const [products, setProducts] = useState ([])
    const {marcaId} = useParams()
useEffect(()=>{
    const asyncFunctions = marcaId ? getProductsByMarca : getProducts
    asyncFunctions(marcaId)
        .then(data => setProducts(data))
}, [marcaId] )
    return (
        <div>
            <h2>{greetings}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer