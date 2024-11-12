import { useState } from "react";
import { Link } from "react-router-dom";

function ItemDetail({ name, img, description, category, price }) {
  return (
    <div className="container">
      <h2>{name}</h2>
      
      <div className="card">
        <img
          src={img}
          style={{ width: 300 }}
          className="card-img-top"
          alt={name}
        />
        <div className="card-body">
          <p className="card-text">{description}</p>
          <p className="card-text">Categoria: {category}</p>
          <h2 className="card-text">Precio: $ {price}</h2>
        </div>
      </div>
      <div>
          <Link to="/cart">Finalizar Compra</Link>
      </div>
    </div>
  );
}

export default ItemDetail