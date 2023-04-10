import { Item } from "../Item/Item";

import "./itemList.css";

const ItemList = ({ productos }) => {
  return productos.map(
    (
      producto // mapeame el array prdoductos y por cada producto devolveme una card producto
    ) => (
      <Item
        id={producto.id}
        img={producto.img}
        categoria={producto.categoria}
        precio={producto.precio} //hace una card con las props diferentes de cada item del array productos
      />
    )
  );
};

export default ItemList;
