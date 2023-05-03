import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContexts";
import "./CartCountainer.css";

export const CartCountainer = () => {
  const { cartList, vaciarCarrito, precioTotal, eliminarProducto } =
    useCartContext();
  console.log(cartList);
  return cartList.length === 0 ? (
    <div>
      <h2>No hay productos en tu carrito</h2>
      <Link to="/">Ir a ver productos</Link>
    </div>
  ) : (
    <div className="cart">
      <div>
        {cartList.map((productos) => (
          <div className="cartContainer" key={productos.id}>
            <div>
              <img src={productos.img} alt="img" className="imgCart" />
              Cargoria: {productos.categoria}
              Cantidad: {productos.cantidad}
              <button
                className="eliminar"
                onClick={() => eliminarProducto(productos.id)}
              >
                X
              </button>
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
      <div>
        <h3 className="total">Precio Total ${precioTotal()}</h3>
      </div>
    </div>
  );
};
