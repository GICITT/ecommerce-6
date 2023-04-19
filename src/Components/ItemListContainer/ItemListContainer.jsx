import { useEffect, useState } from "react";
import { mockFetch } from "../../Utils/mockFetch";
import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]); // lo inicializo con un array vacio, se va a cargargar con productos
  const { cid } = useParams();

  useEffect(() => {
    if (cid) {
      mockFetch() //esta llamando a mockFetch
        .then((resp) =>
          setProductos(resp.filter((prod) => prod.categoria === cid))
        ) // cuando la promesa se cumple se cargan los productos
        .catch((err) => console.log(err));
    } else {
      mockFetch() //esta llamando a mockFetch
        .then((resp) => setProductos(resp)) // cuando la promesa se cumple se cargan los productos
        .catch((err) => console.log(err));
    }
  }, [cid]);

  return (
    <div className="contenedorCards">
      <ItemList productos={productos} />
    </div>
  );
};
