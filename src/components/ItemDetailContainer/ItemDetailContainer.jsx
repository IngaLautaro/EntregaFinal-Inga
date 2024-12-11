import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const { productId } = useParams();

  //   useEffect(() => {
  //     getProductByID(productId).then((data) => {
  //         setProduct(data);
  //     });
  // }, [productId]);
  useEffect(() => {
    getDoc(doc(db, 'products', productId))
      .then((querySnapshot) => {
        const prod = { id: querySnapshot.id, ...querySnapshot.data() }
        setProduct(prod)
      })
      .catch((error) => { 
        console.log(error)
      })
  }, [productId])
  return (
    <>
      <ItemDetail {...product} />
    </>
  )
}

export default ItemDetailContainer