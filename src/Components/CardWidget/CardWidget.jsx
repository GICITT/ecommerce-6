
import "./CardWidget.css";

const CartWidget = () => {
  
  return (
    <div className="cartCarrito">
      <i className="bi bi-cart" id="cart"></i>
     
      <div id="cardAmount" className="cardAmount"></div>
    </div>
  );
};
export default CartWidget;
