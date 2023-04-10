import React, { useState } from "react";

import "./ItemCount.css";

export function ItemCount({ initial, stock, onAdd }) {
  const [quantify, setQuantify] = useState(initial); // nombre del estado, nombre de la funcion que mod el estado
  console.log(quantify);

  const increment = () => {
    if (quantify < stock) {
      setQuantify(quantify + 1);
    }
  };

  const decremenet = () => {
    if (quantify > 0) {
      setQuantify(quantify - 1);
    }
  };

  const reset = () => {
    setQuantify(initial);
  };

  return (
    <div>
      <div>
        <button onClick={decremenet}>-</button>
        <h4>{quantify}</h4>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <button onClick={() => onAdd(quantify)}>Agregar al carrito</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
