import "./CardWidget.css";

const CartWidget = () => {
  return (
    <div className="cartCarrito">
      <i className="bi bi-cart"></i>
      <div id="cardAmount" className="cardAmount">
        0
      </div>
    </div>
  );
};
export default CartWidget;
