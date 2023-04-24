import { useEffect, useState } from "react";

import { mockFetch } from "../../Utils/mockFetch";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [productos, setProductos] = useState({});
  const { pid } = useParams();

  useEffect(() => {
    mockFetch(pid)
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err));
  }, [pid]);

  return (
    <>
      <ItemDetail productos={productos} />
    </>
  );
};
