import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ id, categoria, img, precio }) => {
  return (
    <div key={id} className="card w-25">
      <img src={img} className="img" alt="imagen" />
      <div className="card-body">
        <label className="label">Nombre: {categoria}</label>
        <br></br>
        <label className="label">Precio: ${precio}</label>
      </div>
      <Link to={`/detail/${id}`}>
        <button className="btnDetalle">Detalle</button>
      </Link>
    </div>
  );
};
