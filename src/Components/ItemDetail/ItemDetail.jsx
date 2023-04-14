import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";



const ItemDetail = ({ productos }) => {
  console.log(productos);
  return (
    <div className="contendedor">
      <div className="contenedorDetail">
        <div className="contenedorCard">
          <img className="img" src={productos.img} />
          <h3>Categoria: {productos.categoria}</h3>
          <h4>Precio: $ {productos.precio}</h4>
        </div>
        <ItemCount
          initial={0}
          stock={10}
          onAdd={(quantify) => console.log("cantidad agregada", quantify)}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
