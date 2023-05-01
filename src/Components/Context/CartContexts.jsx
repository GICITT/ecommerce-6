import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

// componente para enmascarar el contexto
export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const agregarAlCart = (newProduct) => {
    setCartList([...cartList, newProduct]);
  };

  const vaciarCarrito = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider value={{ cartList, agregarAlCart, vaciarCarrito }}>
      {children}
    </CartContext.Provider>
  );
};
