import React from "react";

export const ButtonCount = ({ quantify }) => {
  function onAdd() {
    console.log(`Producto agregado: ${quantify}`);
  }

  return (
    <>
      <div>
        <button className="agregar" onClick={() => onAdd()}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
};
