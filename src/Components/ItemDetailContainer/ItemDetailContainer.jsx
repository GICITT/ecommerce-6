import { useEffect, useState } from "react";

import { mockFetch } from "../../Utils/mockFetch";
import ItemDetail from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [productos, setProductos] = useState({});
  useEffect(() => {
    mockFetch("2")
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ItemDetail productos={productos} />
    </>
  );
};
