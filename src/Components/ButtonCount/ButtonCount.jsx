import React from "react";

export const ButtonCount = ({ quantify, handleInter }) => {
  const handleClick = () => {
    console.log(`Producto agregado: ${quantify}`);
    handleInter();
  };

  return (
    <>
      <div>
        <button className="agregar" onClick={handleClick}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
};
