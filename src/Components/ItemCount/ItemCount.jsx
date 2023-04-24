import React, { useState } from "react";
import { ButtonCount } from "../ButtonCount/ButtonCount";
import { InputCount } from "../InputCoutn/InputCount";

import "./ItemCount.css";

export function ItemCount({ initial, stock, onAdd }) {
  const [quantify, setQuantify] = useState(initial); // nombre del estado, nombre de la funcion que mod el estado
  const [inputType, setInputType] = useState(`button`);

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

  const handleInter = () => {
    setInputType(`input`);
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
        {inputType === `button` ? (
          <ButtonCount handleInter={handleInter} />
        ) : (
          <InputCount />
        )}

        <div>
          <button className="reiniciar" onClick={reset}>
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
}
