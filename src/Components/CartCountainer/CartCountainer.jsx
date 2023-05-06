import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContexts";
import { Form } from "../Form/Form";

import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import "./CartCountainer.css";

export const CartCountainer = () => {
  const [id, setId] = useState(null);
  const [formData, setFormData] = useState({
    name: ``,
    phone: ``,
    email: ``,
  });
  const { cartList, vaciarCarrito, precioTotal, eliminarProducto } =
    useCartContext();
  console.log(cartList);
  console.log(formData);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      formData.name === "" ||
      formData.phone === "" ||
      formData.email === ""
    ) {
      alert("Por favor complete todos los campos requeridos");
      return;
    }

    if (formData.email !== formData.confirmEmail) {
      alert("Los campos de email no coinciden");
      return;
    }

    const order = {
      buyer: formData,
      items: cartList.map(({ id, categoria, precio }) => ({
        id,
        categoria,
        precio,
      })),
      total: precioTotal(),
    };

    const db = getFirestore();
    const queryCollection = collection(db, `orders`);

    addDoc(queryCollection, order)
      .then((resp) => setId(resp.id)) // capturar el id de la compra y asignarlo a "id"
      .catch((err) => console.log(err))
      .finally(() => console.log("termino la promesa"));
    vaciarCarrito();

    console.log(`enviando `, order);
  };

  const handleOnChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return cartList.length === 0 ? (
    id !== null && (
      <div className="center-container">
        <p className="Id">El ID de tu compra es: {id}</p>{" "}
        <Link to="/">
          <button className="btnVolverHome"> Volver al home</button>
        </Link>
      </div>
    )
  ) : (
    <div className="cart">
      <div>
        {cartList.map((productos) => (
          <div key={productos.id}>
            <div className="cartContainer">
              <img src={productos.img} alt="img" className="imgCart" />
              <div className="cart-item-category">
                Categoría: {productos.categoria}
              </div>
              <div className="cart-item-quantity">
                Cantidad: {productos.cantidad}
              </div>
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
        <Form
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          formData={formData}
        />
      </div>
    </div>
  );
};
