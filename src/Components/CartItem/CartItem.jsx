import React from "react";


const CartItem = ({ id, categoria, quantify, price }) => {
  return (
    <div className="cart-item">
      <div className="item-info">
        <h3>{categoria}</h3>
        <p>Precio: ${price}</p>
        <p>Cantidad: {quantify}</p>
      </div>
      <div className="item-actions">
        <button className="button">Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;
