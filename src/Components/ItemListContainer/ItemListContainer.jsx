import { useEffect, useState } from "react";
//import { mockFetch } from "../../Utils/mockFetch";
import ItemList from "../ItemList/ItemList";
import {
  collection,
  //  doc,
  // getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { cid } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, `productos`);
    let queryFilter = queryCollection;

    if (cid) {
      queryFilter = query(queryCollection, where(`categoria`, `==`, cid));
    }

    getDocs(queryFilter)
      .then((resp) =>
        setProductos(
          resp.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [cid]);

  return (
    <div className="contenedorCards">
      {isLoading ? (
        <p className="cargando">Cargando...</p>
      ) : (
        <ItemList productos={productos} setIsLoading={setIsLoading} />
      )}
    </div>
  );
};
