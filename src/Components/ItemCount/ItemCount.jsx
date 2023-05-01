import React, { useState } from "react";

import "./ItemCount.css";
import { Link } from "react-router-dom";

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
    <div className="itemCount">
      <div className="btn">
        <button className="btnIncrementDecrement" onClick={decremenet}>
          -
        </button>
        <h4 className="quantify">{quantify}</h4>
        <button className="btnIncrementDecrement" onClick={increment}>
          +
        </button>
      </div>
      <div className="btnContainer">
        <div>
          <Link to="/cartContountainer">
            {" "}
            <button className="btnAdd" onClick={() => onAdd(quantify)}>
              Agregar al carrito
            </button>
          </Link>
        </div>
        <div>
          <button className="btnReset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
