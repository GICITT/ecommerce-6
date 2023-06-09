import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ id, categoria, img, precio }) => {
  return (
    <div key={id} className="card w-25">
      <img src={img} className="img" alt="imagen" />
      <div className="card-body">
        <label className="label">Categoria: {categoria}</label>
        <br></br>
        <label className="label">Precio: ${precio}</label>
        <br></br>
        <Link to={`/detail/${id}`}>
          <button className="btnDetalle"> Detalle</button>
        </Link>
      </div>
    </div>
  );
};
