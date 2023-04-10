import CartWidget from "../CardWidget/CardWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <h3>Tienda</h3>
      <div className="buttonNavBar">
        <button className="btnNav">Jeans</button>
        <button className="btnNav">Remeras</button>
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
