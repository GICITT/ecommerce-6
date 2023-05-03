import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CardWidget/CardWidget";
import ExploreIcon from "@mui/icons-material/Explore";
import { useCartContext } from "../Context/CartContexts";
import "./NavBar.css";

const NavBar = () => {
  const { cantidadTotal } = useCartContext();
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
        <div className="numerito">
          <CartWidget />
          {cantidadTotal()}
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;
