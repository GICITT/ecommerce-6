import "./InputCount.css";
import { Link } from "react-router-dom";

export const InputCount = () => {
  return (
    <>
      <Link to="/cartContountainer">
        <button
          className="btnIrAlCarrito"
          onClick={() => console.log("ir a cart")}
        >
          Ir al Cart o Terminar compra
        </button>
      </Link>
      <Link to="/">
        <button
          className="btnSeguirComprando"
          onClick={() => console.log("ir al home")}
        >
          Seguir comprando
        </button>
      </Link>
    </>
  );
};
