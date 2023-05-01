import { useCartContext } from "../Context/CartContexts";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ productos }) => {
  const { agregarAlCart } = useCartContext();

  const onAdd = (quantify) => {
    agregarAlCart({ ...productos, cantidad: quantify });
  };
  return (
    <div className="contendedor">
      <div className="contenedorDetail">
        <div className="contenedorCard">
          <img className="img" alt="img" src={productos.img} />
          <h3>Categoria: {productos.categoria}</h3>
          <h4>Precio: $ {productos.precio}</h4>
        </div>
        <ItemCount initial={0} stock={10} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
