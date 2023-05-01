import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CardWidget/CardWidget";
import ExploreIcon from "@mui/icons-material/Explore";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <NavLink className="tienda" to="/">
        Tienda
        <ExploreIcon />
      </NavLink>
      <div className="buttonNavBar">
        <Link to="/categoria/vaqueros" className="btnNav">
          Jeans
        </Link>
        <Link to="/categoria/remeras" className="btnNav">
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
