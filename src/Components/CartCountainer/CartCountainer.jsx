import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContexts";
import "./CartCountainer.css";

export const CartCountainer = () => {
  const { cartList, vaciarCarrito } = useCartContext();
  console.log(cartList);
  return (
    <div className="cart">
      <div>
        {cartList.map((productos) => (
          <div className="cartContainer">
            <div>
              <img src={productos.img} alt="img" className="imgCart" />
              Cargoria: {productos.categoria}
              Cantidad: {productos.cantidad}
              <button className="eliminar">X</button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/CartEmpty" className="CartEmpty">
        <button onClick={vaciarCarrito} className="btnVaciarCart">
          {" "}
          Vaciar carrito
        </button>
      </Link>
    </div>
  );
};
