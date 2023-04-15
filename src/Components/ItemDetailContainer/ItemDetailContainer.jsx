import { useEffect, useState } from "react";

import { mockFetch } from "../../Utils/mockFetch";
import ItemDetail from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [productos, setProductos] = useState({});

  useEffect(() => {
    mockFetch("1").then((resp) => setProductos(resp));
  }, []);

  return (
    <>
      <ItemDetail productos={productos} />
    </>
  );
};
