import { useEffect } from "react"
import { getProducts, getProductsByCategory} from "../../AsyncMock"
import { useState } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom"

function ItemListContainer({greetings}) {
    const [products, setProducts] = useState ([])
    const {categoryId} = useParams()
useEffect(()=>{
    const asyncFunctions = categoryId ? getProductsByCategory : getProducts
    asyncFunctions(categoryId)
        .then(data => setProducts(data))
}, [categoryId] )
    return (
        <div>
            <h2>{greetings}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer