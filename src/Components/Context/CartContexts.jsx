import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

// componente para enmascarar el contexto
export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const agregarAlCart = (newProduct) => {
    const indexProduct = cartList.findIndex(
      (product) => product.id === newProduct.id
    );
    if (indexProduct === -1) {
      setCartList([...cartList, newProduct]);
    } else {
      cartList[indexProduct].cantidad += newProduct.cantidad;
      setCartList([...cartList]);
    }
  };

  const cantidadTotal = () => {
    return cartList.reduce(
      (cantidadTotal, objProducto) => (cantidadTotal += objProducto.cantidad),
      0
    );
  };

  const vaciarCarrito = () => {
    setCartList([]);
  };

  const eliminarProducto = (pid) => {
    setCartList(cartList.filter((product) => product.id !== pid));
  };

  const precioTotal = () => {
    return cartList.reduce(
      (totalPrice, Productos) =>
        totalPrice + Productos.precio * Productos.cantidad,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarAlCart,
        vaciarCarrito,
        precioTotal,
        cantidadTotal,
        eliminarProducto,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
