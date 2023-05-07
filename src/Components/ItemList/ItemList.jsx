import { Item } from "../Item/Item";

import "./itemList.css";

const ItemList = ({ productos, setIsLoading }) => {
  return productos.map((producto) => (
    <Item
      key={producto.id}
      id={producto.id}
      img={producto.img}
      categoria={producto.categoria}
      precio={producto.precio}
    />
  ));
};

export default ItemList;
