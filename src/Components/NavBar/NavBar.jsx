import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CardWidget/CardWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <NavLink to="/">Tienda</NavLink>
      <div className="buttonNavBar">
        <Link to="/categoria/vaquero" className="btnNav">
          Jeans
        </Link>
        <Link to="/categoria/remera" className="btnNav">
          Remeras
        </Link>
      </div>
      <Link to="/cartContountainer">
        <CartWidget />
      </Link>
    </nav>
  );
};

export default NavBar;
