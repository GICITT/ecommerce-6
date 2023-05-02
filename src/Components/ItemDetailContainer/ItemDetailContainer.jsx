import { useEffect, useState } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [productos, setProductos] = useState({});
  const { pid } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, `productos`, pid);
    getDoc(queryDoc).then((resp) =>
      setProductos({ id: resp.id, ...resp.data() })
    );
  }, [pid]);

  return (
    <>
      <ItemDetail productos={productos} />
    </>
  );
};
