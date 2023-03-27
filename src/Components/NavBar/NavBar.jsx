import CartWidget from "../CardWidget/CardWidget";

const NavBar = () => {
  return (
    <nav className="navBar">
      <h3>Tienda</h3>
      <div className="buttonNavBar">
        <button>Mochila</button>
        <button>Sudadera</button>
        <button>Anteojos</button>
        <button>Gorrito</button>
        <button>Gorrito</button>
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
