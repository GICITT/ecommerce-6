import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CardWidget/CardWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <NavLink
        className={({ isActive }) =>
          isActive ? `btn btn-primary` : `btn btn-outline-primary `
        }
        to="/"
      >
        Tienda
      </NavLink>
      <div className="buttonNavBar">
        <button className="btnNav">Jeans</button>
        <button className="btnNav">Remeras</button>
      </div>
      <Link to="/cartContountainer">
        <CartWidget />
      </Link>
    </nav>
  );
};

export default NavBar;
