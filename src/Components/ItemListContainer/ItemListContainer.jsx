import { useEffect, useState } from "react";
import { mockFetch } from "../../Utils/mockFetch";
import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]); // lo inicializo con un array vacio, se va a cargargar con productos
  useEffect(() => {
    mockFetch() //esta llamando a mockFetch
      .then((resp) => setProductos(resp)) // cuando la promesa se cumple se cargan los productos
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="contenedorCards">
      <ItemList productos={productos} />
    </div>
  );
};
