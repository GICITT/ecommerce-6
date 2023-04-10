import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetailContainer = () => {
  return (
    <ItemCount
      initial={0}
      stock={10}
      onAdd={(quantify) => console.log("cantidad agregada", quantify)}
    />
  );
};
