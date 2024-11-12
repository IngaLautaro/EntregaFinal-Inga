import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getProductByID } from "../../AsyncMock"
import ItemDetail from "../ItemDetail/ItemDetail";


function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const { productId } = useParams();

  useEffect(() => {
    getProductByID(productId).then((data) => {
        setProduct(data);
    });
}, [productId]);
  return (
    <>
      <ItemDetail {...product} />
    </>
  )
}

export default ItemDetailContainer