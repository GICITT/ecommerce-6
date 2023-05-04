import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContexts";
import "./CartCountainer.css";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState } from "react";

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
      .then((resp) => setId(resp))
      .catch((err) => console.log(err))
      .finally(() => console.log("termino la promesa"));
    vaciarCarrito();

    //actualizar
    // const queryDoc = doc(db, `productos`, `46XZhjK2GWih2vEQkEyu`);
    // updateDoc(queryDoc, { stock: 5 }).finally(() =>
    //   console.log("termino de actualizar")
    // );

    //realizar operaciones multipres

    // const queryCollection = collection(db, `orders`);
    // const queryDoc1 = doc(queryCollection);
    // const queryDoc2 = doc(queryCollection);
    // const queryDoc3 = doc(queryCollection, ` 46XZhjK2GWih2vEQkEyu`);
    // const batch = writeBatch(db);

    // batch.set(queryDoc1, { buyer: `Nombre 1`, total: 1500 });
    // batch.set(queryDoc2, { buyer: `Nombre 1`, total: 1500 });
    // batch.update(queryDoc3, { buyer: `Nombre 1`, total: 1500 });

    // batch.commit();

    console.log(`enviando `, order);
  };

  const handleNameChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="ingrese el name "
            onChange={handleNameChange}
            value={formData.name}
          />
          <input
            type="text"
            name="phone"
            placeholder="ingrese el phone"
            onChange={handleNameChange}
            value={formData.phone}
          />
          <input
            type="text"
            name="email"
            placeholder="ingrese el email"
            onChange={handleNameChange}
            value={formData.email}
          />
          {/*<input
            type="text"
            name="repetirmail"
            placeholder="ingrese el "
            onChange={() => {}}
            value={""}
        />*/}
          <button type="submit"> Generar orden de compra</button>
        </form>
      </div>
    </div>
  );
};
