import { useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../AsyncMock"
import { useState } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase";
import { collection, getDocs, query, where } from 'firebase/firestore'

function ItemListContainer({ greetings }) {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    // useEffect(()=>{
    //     const asyncFunctions = categoryId ? getProductsByCategory : getProducts
    //     asyncFunctions(categoryId)
    //         .then(data => setProducts(data))
    // }, [categoryId] )
    useEffect(() => {
        const collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products") 

        getDocs(collectionRef)
            .then((querySnapshot) => {
                const productos = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(productos)
                // setNotification("succes", "Producto encontrado");
            })
            .catch((error) => {
                // setNotification("danger", "No es posible obtener productos");
                console.log(error)
            })
            // .finally(() => {
            //     setLoader(false)
            // })
    }, [categoryId])
    return (
        <div>
            <h2>{greetings}</h2>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer